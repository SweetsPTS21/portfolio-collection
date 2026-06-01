import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -15, scale: 0.99 },
};

export default function PageShell({ eyebrow, title, children }) {
  return (
    <motion.main
      className="page-shell"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {children}
    </motion.main>
  );
}
