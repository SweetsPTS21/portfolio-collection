import React from 'react';

/**
 * FoamBadge — lighter metadata badge, translucent foam style.
 * Do NOT use for long text — for short metadata labels only.
 */
export default function FoamBadge({ children, icon }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '2px 10px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(251,254,255,0.65)',
        border: '1px solid rgba(191,234,248,0.8)',
        backdropFilter: 'blur(8px)',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
}
