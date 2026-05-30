import React from 'react';
import { motion } from 'framer-motion';
import shoreSvg from '@/assets/ocean-wave-diary/shoreline-sand-scene.svg';
import seagullSvg from '@/assets/ocean-wave-diary/seagull-silhouette.svg';
import crabSvg from '@/assets/ocean-wave-diary/cute-crab.svg';
import starfishSvg from '@/assets/ocean-wave-diary/shore-starfish.svg';
import snailSvg from '@/assets/ocean-wave-diary/shore-snail.svg';
import palmSvg from '@/assets/ocean-wave-diary/palm-tree.svg';

/**
 * ShoreDecor — Phase 2 enriched shore with crab, starfish, snail, palm tree.
 * Shore height is now 24% (doubled from Phase 1's 12%).
 */
export default function ShoreDecor() {
  return (
    <>
      {/* ── Shoreline sand scene base ── */}
      <div className="shore-decor">
        <img
          src={shoreSvg}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
      </div>

      {/* ── Shore creatures layer ── */}
      <div className="shore-creatures-layer">
        {/* Cute crab — walks sideways */}
        <motion.div
          className="shore-crab"
          animate={{ x: [0, 20, 8, -14, -4, 0], scaleX: [1, 1, 1, -1, -1, 1] }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <img
            src={crabSvg}
            alt=""
            aria-hidden="true"
            style={{ width: 80, height: 80 }}
          />
        </motion.div>

        {/* Starfish 1 — static with gentle pulse */}
        <motion.div
          className="shore-starfish-1"
          animate={{ rotate: [0, 5, -3, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        >
          <img
            src={starfishSvg}
            alt=""
            aria-hidden="true"
            style={{ width: 80, height: 80 }}
          />
        </motion.div>

        {/* Starfish 2 — slightly rotated, smaller */}
        <div className="shore-starfish-2">
          <img
            src={starfishSvg}
            alt=""
            aria-hidden="true"
            style={{ width: 68, height: 68, opacity: 0.85 }}
          />
        </div>

        {/* Snail — very slow crawl */}
        <motion.div
          className="shore-snail"
          animate={{ x: [0, 8, 4, 0] }}
          transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
        >
          <img
            src={snailSvg}
            alt=""
            aria-hidden="true"
            style={{ width: 80, height: 80 }}
          />
        </motion.div>

        {/* Palm tree — right side, swaying in breeze */}
        <motion.div
          className="shore-palm"
          animate={{ rotate: [0, 2, 0, -1.5, 0] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '8%',
            right: '2%',
            transformOrigin: 'bottom center',
            zIndex: 14,
          }}
        >
          <img
            src={palmSvg}
            alt=""
            aria-hidden="true"
            style={{ width: 200, height: 420 }}
          />
        </motion.div>
      </div>

      {/* ── Seagulls gliding across sky ── */}
      <div className="seagull" style={{ top: '14%', '--delay': '-5s' }}>
        <img
          src={seagullSvg}
          alt=""
          aria-hidden="true"
          style={{ width: 120, height: 60 }}
        />
      </div>
      <div className="seagull" style={{ top: '22%', '--delay': '-18s' }}>
        <img
          src={seagullSvg}
          alt=""
          aria-hidden="true"
          style={{ width: 80, height: 40, opacity: 0.65 }}
        />
      </div>
    </>
  );
}
