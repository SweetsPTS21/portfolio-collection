import React from 'react';
import { motion } from 'framer-motion';

/**
 * WaveButton — CTA button with wave-style hover animation.
 */
export default function WaveButton({
  children,
  onClick,
  variant = 'primary',
  icon,
  disabled = false,
  type = 'button',
  style = {},
}) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--color-ocean-blue), var(--color-deep-blue))',
      color: '#FBFEFF',
      border: 'none',
      shadow: '0 4px 16px rgba(47,143,200,0.35)',
    },
    secondary: {
      background: 'rgba(251,254,255,0.85)',
      color: 'var(--color-deep-blue)',
      border: '2px solid var(--color-ocean-blue)',
      shadow: '0 2px 8px rgba(124,205,242,0.25)',
    },
    ghost: {
      background: 'rgba(167,228,255,0.15)',
      color: 'var(--color-deep-navy)',
      border: '1.5px solid var(--color-border-blue)',
      shadow: 'none',
    },
  };

  const v = variants[variant] || variants.primary;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.04,
        boxShadow: '0 8px 24px rgba(47,143,200,0.4)',
        y: -2,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-3) var(--space-6)',
        borderRadius: 'var(--radius-full)',
        background: v.background,
        color: v.color,
        border: v.border,
        boxShadow: v.shadow,
        fontSize: 'var(--text-sm)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.03em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--transition-base)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
