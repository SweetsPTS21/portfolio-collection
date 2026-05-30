import React from 'react';
import { motion } from 'framer-motion';

/**
 * MotionCard — animated card with lift, subtle rotation, and wave-edge hover.
 * Wraps any content in a Framer Motion hover state.
 */
export default function MotionCard({ children, className = '', style = {}, onClick }) {
  return (
    <motion.div
      className={className}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{
        y: -6,
        rotate: 0.4,
        boxShadow: '0 16px 48px rgba(47,143,200,0.22), 0 4px 16px rgba(24,56,74,0.12)',
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
