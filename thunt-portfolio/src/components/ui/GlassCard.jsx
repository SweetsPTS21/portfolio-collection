import { useState } from 'react';
import { motion } from 'framer-motion';
import ShimmerOverlay from './ShimmerOverlay';

export default function GlassCard({ children, className = '', delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-glass p-6 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow:
          '0 8px 32px rgba(255, 182, 217, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{
        y: -8,
        boxShadow:
          '0 16px 48px rgba(255, 142, 199, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ShimmerOverlay isHovered={isHovered} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
