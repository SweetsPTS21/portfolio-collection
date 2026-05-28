import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, ...props }) {
  return (
    <motion.div
      className={`glass-card glass ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(255, 160, 171, 0.2)' }}
      {...props}
    >
      {children}

      <style>{`
        .glass-card {
          padding: 28px;
          transition: box-shadow 0.3s ease;
        }
      `}</style>
    </motion.div>
  );
}
