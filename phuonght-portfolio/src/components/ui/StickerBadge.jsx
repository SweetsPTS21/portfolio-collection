import React from 'react';
import { motion } from 'framer-motion';

export default function StickerBadge({ children, color = 'var(--pen-blue)', className = '' }) {
  return (
    <motion.span
      className={`chip-item ${className}`}
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.1, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
}
