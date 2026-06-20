import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(config?: {
  threshold?: number;
  duration?: number;
  ease?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const defaults = {
      threshold: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      ...config,
    };

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: defaults.duration,
        ease: defaults.ease,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'top 55%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [config]);

  return ref;
}

export function useGsapParallax() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: (index) => index * 100,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
}
