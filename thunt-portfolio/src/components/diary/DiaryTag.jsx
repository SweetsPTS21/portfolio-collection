import React from 'react';

/**
 * DiaryTag — small handwriting-style label tag with ribbon aesthetic.
 */
export default function DiaryTag({ children, color = 'blue' }) {
  const colors = {
    blue: { bg: '#A7E4FF', text: '#18384A', border: '#7CCDF2' },
    pink: { bg: '#FFD7E2', text: '#8B2040', border: '#FFB7C8' },
    gold: { bg: '#FFD978', text: '#5A3A00', border: '#FFEBC7' },
    teal: { bg: '#7DDEC3', text: '#0E4E3E', border: '#A7E4FF' },
  };
  const c = colors[color] || colors.blue;

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 14px 2px 10px',
        background: c.bg,
        color: c.text,
        border: `1.5px solid ${c.border}`,
        borderRadius: '0 var(--radius-full) var(--radius-full) 0',
        borderLeft: `4px solid ${c.border}`,
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        position: 'relative',
        boxShadow: '1px 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      {children}
    </span>
  );
}
