import React from 'react';
import { motion } from 'framer-motion';

/**
 * SunStamp — chapter/section marker styled as a round ink stamp.
 * animate prop triggers the stamp-bounce effect on mount.
 */
export default function SunStamp({ number, label, color = 'gold', animate = true }) {
  const colorMap = {
    gold: { bg: '#FFD978', border: '#FFB7C8', text: '#5A3A00', ring: '#FFEBC7' },
    blue: { bg: '#7CCDF2', border: '#2F8FC8', text: '#18384A', ring: '#A7E4FF' },
    pink: { bg: '#FFB7C8', border: '#FFD7E2', text: '#8B2040', ring: '#FFD7E2' },
    teal: { bg: '#7DDEC3', border: '#A7E4FF', text: '#0E4E3E', ring: '#7DDEC3' },
  };
  const c = colorMap[color] || colorMap.gold;

  const stampEl = (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: c.bg,
        border: `3px solid ${c.border}`,
        boxShadow: `0 0 0 5px ${c.ring}55, 0 4px 12px rgba(0,0,0,0.1)`,
        color: c.text,
        fontFamily: 'var(--font-heading)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Inner stamp ring */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 4,
          borderRadius: '50%',
          border: `1.5px dashed ${c.border}`,
          opacity: 0.6,
        }}
      />
      <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', lineHeight: 1 }}>
        {number}
      </span>
      {label && (
        <span style={{ fontSize: '0.6rem', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.2 }}>
          {label}
        </span>
      )}
    </div>
  );

  if (!animate) return stampEl;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -10, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
    >
      {stampEl}
    </motion.div>
  );
}
