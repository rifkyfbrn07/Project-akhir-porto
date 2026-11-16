"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DATA } from "@/data/resume";

const SESSION_KEY = "rf-intro-seen";

export default function CinematicPreloader() {
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Continue without session persistence when browser storage is unavailable.
    }

    setVisible(true);
    document.documentElement.classList.add("intro-active");
    let reducedTimer: number | undefined;
    const finish = () => {
      timeline.current?.kill();
      if (root.current) gsap.to(root.current, { autoAlpha: 0, duration: 0.38, ease: "power2.inOut", onComplete: () => setVisible(false) });
      document.documentElement.classList.remove("intro-active");
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ready = document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));
    const safety = new Promise<void>((resolve) => window.setTimeout(resolve, 900));

    Promise.race([ready, safety]).then(() => {
      if (!root.current) return;
      if (reduced) {
        root.current.classList.add("intro-reduced");
        reducedTimer = window.setTimeout(finish, 350);
        return;
      }

      const el = root.current;
      const line = el.querySelector<HTMLElement>("[data-signal]");
      const words = gsap.utils.toArray<HTMLElement>("[data-word]", el);
      const identity = el.querySelector<HTMLElement>("[data-identity]");
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", el);
      timeline.current = gsap.timeline({ onComplete: finish });
      timeline.current
        .fromTo(line, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.55, ease: "power3.inOut" })
        .to(line, { xPercent: 110, duration: 0.25, ease: "power2.in" })
        .fromTo(words, { yPercent: 120, rotate: 2, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: 0.42, stagger: 0.22, ease: "power4.out" }, "-=0.08")
        .to(words, { yPercent: -115, opacity: 0, duration: 0.32, stagger: 0.08, ease: "power3.in" }, "+=0.18")
        .fromTo(identity, { y: 20, opacity: 0, clipPath: "inset(0 0 100% 0)" }, { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.52, ease: "power3.out" }, "-=0.05")
        .to(identity, { opacity: 0, y: -12, duration: 0.22, ease: "power2.in" }, "+=0.36")
        .to(panels, { yPercent: (i) => i % 2 === 0 ? -110 : 110, duration: 0.62, stagger: 0.04, ease: "power4.inOut" }, "-=0.02");
    });

    return () => {
      if (reducedTimer) window.clearTimeout(reducedTimer);
      timeline.current?.kill();
      document.documentElement.classList.remove("intro-active");
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
        timeline.current?.progress(1);
      }}>Skip intro <span aria-hidden="true">↗</span></button>
    </div>
  );
}
