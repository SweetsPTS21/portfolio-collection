import { motion } from 'framer-motion';

export default function ScrollPanel({ className = '', children }) {
  return (
    <motion.section
      className={`scroll-panel ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
