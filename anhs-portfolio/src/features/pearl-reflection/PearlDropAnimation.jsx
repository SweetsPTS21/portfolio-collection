import { motion } from 'framer-motion';
import { conclusion } from '../../data/portfolioData';

export default function PearlDropAnimation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      {/* Pearl icon with ripple */}
      <div className="relative inline-block mb-6">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
          <circle cx="36" cy="36" r="30" fill="url(#pearlGrad)" />
          <ellipse cx="28" cy="28" rx="9" ry="7" fill="white" opacity="0.45" />
          <circle cx="36" cy="36" r="30" stroke="url(#iridescentStroke)" strokeWidth="2" opacity="0.4" />
          <defs>
            <radialGradient id="pearlGrad" cx="0.4" cy="0.4" r="0.6">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#F8FDFF" />
              <stop offset="100%" stopColor="#A8E8F8" />
            </radialGradient>
            <linearGradient id="iridescentStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--coral-pink)" />
              <stop offset="33%" stopColor="var(--reef-teal)" />
              <stop offset="66%" stopColor="var(--anemone-purple)" />
              <stop offset="100%" stopColor="var(--fish-gold)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Ripple rings */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0.7 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 rounded-full border-2 border-[var(--deep-aqua)]/25"
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 rounded-full border border-[var(--reef-teal)]/20"
        />
      </div>

      <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--ocean-deep)] mb-4">
        {conclusion.doubleSword.title}
      </h2>
      <p className="text-base md:text-lg text-[var(--ocean-deep)]/80 leading-relaxed max-w-2xl mx-auto">
        {conclusion.doubleSword.content}
      </p>
    </motion.section>
  );
}
