import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis(pathname) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0 });
      return undefined;
    }

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
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
