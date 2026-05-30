import React from 'react';
import { motion } from 'framer-motion';

export default function NotebookCard({ children, className = '', style = {} }) {
  return (
    <motion.article
      className={`magic-panel ${className}`}
      style={style}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.article>
  );
}
