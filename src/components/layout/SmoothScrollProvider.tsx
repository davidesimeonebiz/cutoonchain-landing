"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { useLiteMotion } from "@/lib/motion-prefs";

/**
 * Smooth scroll solo su desktop con mouse e senza prefers-reduced-motion.
 * Lenis + GSAP ScrollTrigger insieme causano jank evidente su molti dispositivi.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const liteMotion = useLiteMotion();

  useEffect(() => {
    if (liteMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [liteMotion]);

  return <>{children}</>;
}
