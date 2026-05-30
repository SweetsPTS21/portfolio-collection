import React from 'react';
import { motion } from 'framer-motion';

/**
 * DiaryPage — paper-styled card with grain, line rules, corner fold, tape corners.
 * Paper grain is done via CSS mix-blend; tape corners via pseudo-positioned divs.
 */
export default function DiaryPage({ children, className = '', style = {}, animate = true }) {
  const inner = (
    <div
      className={className}
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #FBFEFF 0%, #EEF9FF 60%, rgba(200,238,255,0.15) 100%)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-diary)',
        border: '1.5px solid var(--color-border-blue)',
        padding: 'var(--space-8) var(--space-8) var(--space-8) var(--space-10)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Spine binding */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 18,
          background: 'linear-gradient(180deg, #BFEAF8, #A7E4FF)',
          borderRadius: 'var(--radius-xl) 0 0 var(--radius-xl)',
          opacity: 0.55,
        }}
      />

      {/* Margin line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 40,
          top: 0,
          bottom: 0,
          width: 1,
          background: 'rgba(255,183,200,0.4)',
        }}
      />

      {/* Corner fold */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 28px 28px 0',
          borderColor: 'transparent var(--color-border-blue) transparent transparent',
          opacity: 0.6,
        }}
      />

      {/* Tape top-left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 14,
          left: -4,
          width: 50,
          height: 18,
          background: 'rgba(255,217,120,0.55)',
          borderRadius: 4,
          transform: 'rotate(-7deg)',
          animation: 'tape-flicker 4s ease-in-out infinite',
        }}
      />

      {/* Tape bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 12,
          right: -4,
          width: 44,
          height: 16,
          background: 'rgba(255,183,200,0.5)',
          borderRadius: 4,
          transform: 'rotate(5deg)',
        }}
      />

      {/* Ruled lines (decorative) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 44,
            right: 20,
            top: 80 + i * 28,
            height: 1,
            background: 'rgba(191,234,248,0.5)',
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );

  if (!animate) return inner;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ perspective: 1000 }}
    >
      {inner}
    </motion.div>
  );
}
