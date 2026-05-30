import React from 'react';
import { motion } from 'framer-motion';

/**
 * ChapterTimeline — vertical timeline for project chapters (used on mobile).
 */
export default function ChapterTimeline({ chapters }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 'var(--space-8)' }}>
      {/* Vertical line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 16,
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(180deg, var(--color-ocean-blue), var(--color-seafoam-green), var(--color-ocean-blue))',
          opacity: 0.5,
          borderRadius: 'var(--radius-full)',
        }}
      />

      {chapters.map((ch, i) => (
        <motion.div
          key={ch.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          style={{ position: 'relative', marginBottom: 'var(--space-6)' }}
        >
          {/* Dot on timeline */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: -28,
              top: 8,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: ch.color,
              border: `2.5px solid ${ch.accent}`,
              boxShadow: `0 0 0 4px ${ch.color}33`,
            }}
          />
          <h4 style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-bold)', color: 'var(--color-deep-navy)', marginBottom: 'var(--space-1)' }}>
            Chương {ch.id}: {ch.title}
          </h4>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            {ch.goal}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
