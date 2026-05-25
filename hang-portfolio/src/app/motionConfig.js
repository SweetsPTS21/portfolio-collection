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
