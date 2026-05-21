export const easing = [0.16, 1, 0.3, 1];

export const pageVariants = {
  initial: { opacity: 0, y: 16, rotateX: 2 },
  animate: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, ease: easing } },
  exit: { opacity: 0, y: -12, rotateX: -2, transition: { duration: 0.24, ease: easing } },
};

export const revealUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.08, duration: 0.5, ease: easing },
  }),
};
