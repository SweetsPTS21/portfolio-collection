import React from 'react';
import { motion } from 'framer-motion';

export default function BeachPanel({ title, icon, children, className = '' }) {
  return (
    <motion.article
      className={`beach-panel ${className}`}
      whileHover={{ y: -8, rotate: -0.4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="panel-foam" aria-hidden="true" />
      <div className="panel-title">
        <span className="panel-icon">{icon}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.article>
  );
}
