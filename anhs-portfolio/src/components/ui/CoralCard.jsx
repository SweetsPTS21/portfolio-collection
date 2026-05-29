import { motion } from 'framer-motion';
import { fadeScale } from '../../app/motionConfig';

/**
 * CoralCard — card with underwater coral/bubble decorations.
 * variant: 'coral' | 'teal' | 'purple' | 'gold' (controls accent color)
 */
const variants = {
  coral: {
    accent: 'var(--coral-pink)',
    gradFrom: 'rgba(255,142,198,0.06)',
    gradTo: 'rgba(255,184,216,0.03)',
    border: 'rgba(255,142,198,0.25)',
  },
  teal: {
    accent: 'var(--reef-teal)',
    gradFrom: 'rgba(94,235,196,0.06)',
    gradTo: 'rgba(56,178,216,0.03)',
    border: 'rgba(94,235,196,0.25)',
  },
  purple: {
    accent: 'var(--anemone-purple)',
    gradFrom: 'rgba(200,168,255,0.06)',
    gradTo: 'rgba(200,168,255,0.03)',
    border: 'rgba(200,168,255,0.25)',
  },
  gold: {
    accent: 'var(--fish-gold)',
    gradFrom: 'rgba(255,224,138,0.08)',
    gradTo: 'rgba(255,224,138,0.03)',
    border: 'rgba(255,224,138,0.25)',
  },
};

export default function CoralCard({ children, className = '', delay = 0, variant = 'coral' }) {
  const v = variants[variant] || variants.coral;

  return (
    <motion.div
      variants={fadeScale}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-coral p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${v.gradFrom} 0%, white 40%, ${v.gradTo} 100%)`,
        border: `1.5px solid ${v.border}`,
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Coral branch decoration top-right */}
      <div className="absolute -top-3 -right-3 w-16 h-16 opacity-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M50 60 C50 45 55 35 48 25 C44 18 50 12 47 5" stroke={v.accent} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
          <path d="M58 60 C58 50 55 42 52 34 C50 28 54 22 52 16" stroke={v.accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <circle cx="47" cy="5" r="3" fill={v.accent} opacity="0.5"/>
          <circle cx="52" cy="16" r="2.5" fill={v.accent} opacity="0.4"/>
        </svg>
      </div>

      {/* Bubble decoration bottom-left */}
      <div className="absolute -bottom-2 -left-2 w-12 h-12 opacity-25 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="10" cy="30" r="5" fill={v.accent} opacity="0.3"/>
          <circle cx="22" cy="22" r="3" fill={v.accent} opacity="0.25"/>
          <circle cx="30" cy="32" r="4" fill={v.accent} opacity="0.2"/>
          <circle cx="15" cy="15" r="2" fill={v.accent} opacity="0.2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
