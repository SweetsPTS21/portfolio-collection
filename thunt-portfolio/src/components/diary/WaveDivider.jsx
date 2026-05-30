import React from 'react';
import { motion } from 'framer-motion';

/**
 * WaveDivider — SVG wave divider between sections.
 * Has a gentle sway animation.
 */
export default function WaveDivider({ flip = false, color = '#A7E4FF', opacity = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        width: '100%',
        lineHeight: 0,
        transform: flip ? 'scaleY(-1)' : 'none',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 60 }}
      >
        <motion.path
          d="M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 L0,60 Z"
          fill={color}
          fillOpacity={opacity}
          animate={{ d: [
            'M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 L0,60 Z',
            'M0,25 C240,45 480,15 720,35 C960,55 1200,20 1440,32 L1440,60 L0,60 Z',
            'M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 L0,60 Z',
          ]}}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.path
          d="M0,38 C360,20 720,55 1080,30 C1260,18 1380,42 1440,38 L1440,60 L0,60 Z"
          fill={color}
          fillOpacity={opacity * 0.6}
          animate={{ d: [
            'M0,38 C360,20 720,55 1080,30 C1260,18 1380,42 1440,38 L1440,60 L0,60 Z',
            'M0,42 C360,58 720,28 1080,45 C1260,54 1380,32 1440,40 L1440,60 L0,60 Z',
            'M0,38 C360,20 720,55 1080,30 C1260,18 1380,42 1440,38 L1440,60 L0,60 Z',
          ]}}
          transition={{ duration: 11, ease: 'easeInOut', repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </motion.div>
  );
}
