// src/app/motionConfig.js

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.7, 0, 0.84, 0], // easeIn
    },
  },
};

export const staggerContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const noteCardVariants = {
  initial: { opacity: 0, scale: 0.9, y: 15 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    y: -6,
    scale: 1.02,
    rotate: [0, -1, 1, -0.5, 0], // subtle cute logic check wiggle
    transition: {
      y: { duration: 0.3, ease: "easeOut" },
      rotate: { duration: 0.4, ease: "easeInOut" },
    },
  },
};

export const caseFileVariants = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
  hover: {
    y: -8,
    boxShadow: "0 12px 28px rgba(30, 111, 168, 0.16)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const stickerWiggleVariants = {
  hover: {
    rotate: [0, -6, 6, -4, 0],
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const sealBadgeVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
