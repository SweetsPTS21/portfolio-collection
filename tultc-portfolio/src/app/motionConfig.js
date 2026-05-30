export const motionConfig = {
  defaultTransition: {
    duration: 0.48,
    ease: [0.22, 1, 0.36, 1],
  },
  reducedMotion: 'user',
  pageVariants: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },
  revealVariants: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  },
};
