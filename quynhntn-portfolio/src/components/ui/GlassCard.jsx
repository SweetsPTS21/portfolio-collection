import { useState } from 'react';
import { motion } from 'framer-motion';
import ShimmerOverlay from './ShimmerOverlay';

// Palette màu pastel nhẹ cho từng card
export const CARD_COLORS = {
  pink:     { bg: 'rgba(255, 182, 217, 0.38)', border: 'rgba(255, 142, 199, 0.35)', shadow: 'rgba(255, 142, 199, 0.22)', hoverShadow: 'rgba(255, 142, 199, 0.38)' },
  lavender: { bg: 'rgba(212, 160, 255, 0.32)', border: 'rgba(196, 130, 255, 0.35)', shadow: 'rgba(212, 160, 255, 0.22)', hoverShadow: 'rgba(212, 160, 255, 0.40)' },
  blue:     { bg: 'rgba(184, 212, 255, 0.36)', border: 'rgba(150, 190, 255, 0.35)', shadow: 'rgba(150, 190, 255, 0.22)', hoverShadow: 'rgba(150, 190, 255, 0.40)' },
  mint:     { bg: 'rgba(142, 236, 212, 0.32)', border: 'rgba(100, 220, 196, 0.35)', shadow: 'rgba(100, 220, 196, 0.22)', hoverShadow: 'rgba(100, 220, 196, 0.40)' },
  peach:    { bg: 'rgba(255, 212, 184, 0.38)', border: 'rgba(255, 180, 140, 0.35)', shadow: 'rgba(255, 180, 140, 0.22)', hoverShadow: 'rgba(255, 180, 140, 0.40)' },
};

export default function GlassCard({ children, className = '', delay = 0, cardColor = 'pink' }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = CARD_COLORS[cardColor] ?? CARD_COLORS.pink;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-glass p-6 ${className}`}
      style={{
        background: color.bg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${color.border}`,
        boxShadow: `0 8px 32px ${color.shadow}, inset 0 1px 0 rgba(255, 255, 255, 0.55)`,
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{
        y: -8,
        boxShadow: `0 16px 48px ${color.hoverShadow}, inset 0 1px 0 rgba(255, 255, 255, 0.65)`,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ShimmerOverlay isHovered={isHovered} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
