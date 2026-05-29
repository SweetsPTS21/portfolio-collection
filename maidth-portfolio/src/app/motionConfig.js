export const pageTransition = {
  initial: { opacity: 0, y: 26, scale: 0.985, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, scale: 0.99, filter: "blur(8px)" },
  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
};

export const stationDrop = {
  hidden: { opacity: 0, y: -24, rotate: -1.5 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const cardStagger = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const listStagger = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export const ticketHover = {
  whileHover: { y: -7, rotate: -0.6, scale: 1.015 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 310, damping: 22 },
};

export const sparkleSweep = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

