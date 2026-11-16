"use client";

import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/resume";

const SESSION_KEY = "rf-intro-seen";
const READINESS_LIMIT_MS = 450;
const HARD_LIMIT_MS = 3900;
const EXIT_MS = 220;

export default function CinematicPreloader() {
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<{ kill: () => void } | null>(null);
  const finishIntro = useRef<() => void>(() => {});
  const finished = useRef(false);
  const hardTimer = useRef<number | null>(null);
  const readinessTimer = useRef<number | null>(null);
  const reducedTimer = useRef<number | null>(null);
  const exitTimer = useRef<number | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Storage can be unavailable in private or restricted browsing contexts.
    }

    finished.current = false;
    let disposed = false;
    let resolveReadiness: (() => void) | null = null;
    const clearTimer = (timer: { current: number | null }) => {
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = null;
    };

    setVisible(true);
    document.documentElement.classList.add("intro-active");

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      timeline.current?.kill();
      timeline.current = null;
      clearTimer(hardTimer);
      resolveReadiness?.();
      resolveReadiness = null;
      clearTimer(readinessTimer);
      clearTimer(reducedTimer);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // The intro still completes even if session storage is blocked.
      }
      document.documentElement.classList.remove("intro-active");
      if (root.current) root.current.classList.add("intro-exit");
      exitTimer.current = window.setTimeout(() => setVisible(false), EXIT_MS);
    };
    finishIntro.current = finish;

    hardTimer.current = window.setTimeout(finish, HARD_LIMIT_MS);

    const start = async () => {
      if (disposed || finished.current || !root.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        root.current.classList.add("intro-reduced");
        reducedTimer.current = window.setTimeout(finish, 220);
        return;
      }

      try {
        const gsap = (await import("gsap")).default;
        if (disposed || finished.current || !root.current) return;
        const el = root.current;
        const line = el.querySelector<HTMLElement>("[data-signal]");
        const words = gsap.utils.toArray<HTMLElement>("[data-word]", el);
        const identity = el.querySelector<HTMLElement>("[data-identity]");
        const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", el);
        if (!line || !identity || words.length === 0 || panels.length === 0) {
          finish();
          return;
        }
        const sequence = gsap.timeline({ onComplete: finish });
        timeline.current = sequence;
        sequence
          .fromTo(line, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.42, ease: "power3.inOut" })
          .to(line, { xPercent: 110, duration: 0.18, ease: "power2.in" })
          .fromTo(words, { yPercent: 120, rotate: 2, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: 0.34, stagger: 0.16, ease: "power4.out" }, "-=0.08")
          .to(words, { yPercent: -115, opacity: 0, duration: 0.26, stagger: 0.06, ease: "power3.in" }, "+=0.12")
          .fromTo(identity, { y: 20, opacity: 0, clipPath: "inset(0 0 100% 0)" }, { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.44, ease: "power3.out" }, "-=0.04")
          .to(identity, { opacity: 0, y: -12, duration: 0.18, ease: "power2.in" }, "+=0.2")
          .to(panels, { yPercent: (i) => i % 2 === 0 ? -110 : 110, duration: 0.48, stagger: 0.04, ease: "power4.inOut" }, "-=0.02");
      } catch {
        // Animation failures must reveal the page instead of trapping the visitor.
        finish();
      }
    };

    const criticalImage = document.querySelector<HTMLImageElement>("[data-critical-image]");
    let criticalReady: Promise<void> = Promise.resolve();
    if (criticalImage && typeof criticalImage.decode === "function") {
      try {
        criticalReady = criticalImage.decode().then(() => undefined).catch(() => undefined);
      } catch {
        criticalReady = Promise.resolve();
      }
    }
    const boundedWait = new Promise<void>((resolve) => {
      resolveReadiness = resolve;
      readinessTimer.current = window.setTimeout(resolve, READINESS_LIMIT_MS);
    });
    Promise.race([criticalReady, boundedWait]).then(() => {
      resolveReadiness = null;
      clearTimer(readinessTimer);
      void start();
    }).catch(finish);

    return () => {
      disposed = true;
      timeline.current?.kill();
      timeline.current = null;
      clearTimer(hardTimer);
      clearTimer(readinessTimer);
      clearTimer(reducedTimer);
      clearTimer(exitTimer);
      document.documentElement.classList.remove("intro-active");
      finishIntro.current = () => {};
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={root} className="cinematic-intro" aria-label="Portfolio introduction" role="status">
      <div className="intro-content" aria-hidden="true">
        <span className="intro-index">RF / DIGITAL REVEAL</span>
        <span className="intro-signal" data-signal />
        <div className="intro-words">
          <span data-word>IDEAS<span>.</span></span>
          <span data-word>DESIGN<span>.</span></span>
          <span data-word>DEVELOP<span>.</span></span>
        </div>
        <div className="intro-identity" data-identity>
          <span className="intro-monogram">RF</span>
          <span className="intro-name">{DATA.name}</span>
          <span className="intro-role">FULL-STACK DEVELOPER</span>
        </div>
        <span className="intro-foot">INDEPENDENT DIGITAL PRACTICE <span>2026</span></span>
      </div>
      <div className="intro-panels" aria-hidden="true">
        <span data-panel /><span data-panel /><span data-panel /><span data-panel />
      </div>
      <button className="intro-skip" type="button" onClick={() => {
        finishIntro.current();
      }}>Skip intro</button>
    </div>
  );
}
