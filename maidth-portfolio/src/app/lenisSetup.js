import Lenis from "lenis";

export function setupLenis() {
  if (typeof window === "undefined") return () => {};

  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  if (reduceMotion) return () => {};
  if (typeof ResizeObserver === "undefined") return () => {};

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.85,
  });

  let frameId = 0;
  const raf = (time) => {
    lenis.raf(time);
    frameId = window.requestAnimationFrame(raf);
  };

  frameId = window.requestAnimationFrame(raf);

  return () => {
    window.cancelAnimationFrame(frameId);
    lenis.destroy();
  };
}
