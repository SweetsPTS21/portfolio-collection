export const routeVariants = {
  initial: { opacity: 0, y: 28, filter: 'blur(14px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -20, filter: 'blur(10px)' },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const spring = { type: 'spring', stiffness: 140, damping: 18 };
