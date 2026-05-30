import React from 'react';

/**
 * ShellBadge — small decorative badge styled as a shell label.
 * Used for keywords, tools, skill tags.
 */
export default function ShellBadge({ children, color = 'blue', icon }) {
  const colorMap = {
    blue: {
      bg: 'rgba(167,228,255,0.35)',
      border: '#BFEAF8',
      text: '#2F8FC8',
    },
    teal: {
      bg: 'rgba(125,222,195,0.25)',
      border: '#7DDEC3',
      text: '#1A6E5E',
    },
    pink: {
      bg: 'rgba(255,183,200,0.25)',
      border: '#FFD7E2',
      text: '#C45576',
    },
    gold: {
      bg: 'rgba(255,217,120,0.25)',
      border: '#FFD978',
      text: '#8B6200',
    },
    sand: {
      bg: 'rgba(255,235,199,0.5)',
      border: '#FFEBC7',
      text: '#7A5C00',
    },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '3px 12px',
        borderRadius: 'var(--radius-full)',
        background: c.bg,
        border: `1.5px solid ${c.border}`,
        color: c.text,
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      {icon && <span style={{ fontSize: '0.8em' }}>{icon}</span>}
      {children}
    </span>
  );
}
