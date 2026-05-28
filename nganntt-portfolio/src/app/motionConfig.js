export const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -18, scale: 0.99 },
};

export const pageTransition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] };

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

export const menuCardVariants = {
  initial: { opacity: 0, rotateX: -8, y: 24 },
  animate: { opacity: 1, rotateX: 0, y: 0 },
  hover: { y: -8, rotate: -0.6, scale: 1.015 },
};
