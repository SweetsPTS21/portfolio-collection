// src/app/motionConfig.js
export const pageVariants = {
  initial: { opacity: 0, y: 16, scale: 0.97 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.98, 
    transition: { duration: 0.3 } 
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const stickerWiggle = {
  hover: { 
    rotate: [0, -4, 4, -2, 2, 0], 
    transition: { duration: 0.4 } 
  },
};
