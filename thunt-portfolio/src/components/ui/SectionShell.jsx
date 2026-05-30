import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionShell — section wrapper with shell decoration and animated reveal.
 */
export default function SectionShell({ children, id, className = '', style = {} }) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      style={{ position: 'relative', ...style }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative left shell accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: -12,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 6,
          height: 60,
          borderRadius: 'var(--radius-full)',
          background: 'linear-gradient(180deg, var(--color-ocean-blue), var(--color-seafoam-green))',
          opacity: 0.5,
        }}
      />
      {children}
    </motion.section>
  );
}
