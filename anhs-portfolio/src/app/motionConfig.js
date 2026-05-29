/** Framer Motion variants and configuration for coral-reef-gallery */

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

export const easeTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const pageVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

export const pageTransition = {
  duration: prefersReducedMotion ? 0 : 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
};

export const fadeScale = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
    },
  },
};

export const bubblePop = {
  initial: { opacity: 0, scale: 0, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
};

export const coralGrow = {
  initial: { opacity: 0, scaleY: 0, originY: 1 },
  animate: { opacity: 1, scaleY: 1 },
};

export const pearlDrop = {
  initial: { opacity: 0, y: -40, scale: 0.6 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export const isReducedMotion = prefersReducedMotion;
