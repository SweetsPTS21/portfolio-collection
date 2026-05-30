import { motion } from 'framer-motion';

export default function GlassButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-base text-text-primary cursor-pointer ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow: '0 4px 16px rgba(255, 182, 217, 0.12)',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 6px 24px rgba(255, 142, 199, 0.25)',
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
