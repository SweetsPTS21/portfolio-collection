import React from 'react';
import { motion } from 'framer-motion';

export default function InfoShell({ label, value }) {
  return (
    <motion.div className="info-shell" whileHover={{ scale: 1.04, rotate: 1.4 }}>
      <span>{label}</span>
      <strong>{value}</strong>
    </motion.div>
  );
}
