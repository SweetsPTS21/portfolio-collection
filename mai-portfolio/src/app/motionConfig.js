export const revealProps = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
};

export const cardHover = {
  y: -6,
  transition: { duration: 0.2, ease: "easeOut" },
};
