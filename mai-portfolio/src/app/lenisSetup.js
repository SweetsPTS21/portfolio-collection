import Lenis from "lenis";

export function createLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  const lenis = new Lenis({
    duration: 0.9,
    smoothWheel: true,
    wheelMultiplier: 0.85,
  });

  let frameId;
  const raf = (time) => {
    lenis.raf(time);
    frameId = requestAnimationFrame(raf);
  };

  frameId = requestAnimationFrame(raf);

  return {
    destroy() {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    },
  };
}
