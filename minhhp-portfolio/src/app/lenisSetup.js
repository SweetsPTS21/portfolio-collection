import Lenis from "lenis";

export const setupLenis = () => {
  const lenis = new Lenis({
    lerp: 0.08,
    duration: 1.15,
    smoothWheel: true,
  });

  let frameId = 0;
  const raf = (time) => {
    lenis.raf(time);
    frameId = requestAnimationFrame(raf);
  };

  frameId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frameId);
    lenis.destroy();
  };
};
