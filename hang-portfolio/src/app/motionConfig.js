export const pageReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

export const dynamicCardReveal = {
  hidden: { opacity: 0, y: 28, rotate: -1.2, scale: 0.96 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: index * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const contentBlockReveal = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.12 + index * 0.08,
      duration: 0.38,
      ease: 'easeOut',
    },
  }),
};

export const cardHoverMotion = {
  whileHover: {
    y: -8,
    rotate: 0.45,
    scale: 1.015,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
  whileTap: {
    y: -2,
    scale: 0.992,
    transition: { type: 'spring', stiffness: 360, damping: 22 },
  },
};
