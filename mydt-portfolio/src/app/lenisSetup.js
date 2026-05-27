// src/app/lenisSetup.js
import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Scroll to top on page navigation / state changes
    const handleScrollToTop = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener("route-change", handleScrollToTop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("route-change", handleScrollToTop);
      lenis.destroy();
    };
  }, []);
}
