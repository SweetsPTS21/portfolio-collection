import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis(pathname) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    lenis.scrollTo(0, { immediate: true });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [pathname]);
}
