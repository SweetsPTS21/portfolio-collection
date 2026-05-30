import React from 'react';
import { motion } from 'framer-motion';
import boatSvg from '@/assets/ocean-wave-diary/sailing-boat.svg';
import dolphinSvg from '@/assets/ocean-wave-diary/dolphin-jumping.png';
import whaleSvg from '@/assets/ocean-wave-diary/whale-surface.png';

/**
 * WaterCreatures — boat, dolphin, whale displayed on the ocean surface.
 * All positioned in the water zone (bottom 22–30% of viewport).
 */
export default function WaterCreatures() {
  return (
    <>
      {/* ── Sailing Boat ── */}
      <div className="water-boat">
        <img
          src={boatSvg}
          alt=""
          aria-hidden="true"
          style={{ width: 250, height: 200 }}
        />
      </div>

      {/* ── Dolphin jumping — Framer Motion arc loop ── */}
      <motion.div
        className="water-dolphin"
        animate={{
          y: [0, -58, -64, -20, 0],
          rotate: [-4, -12, -8, -2, 0],
          opacity: [0, 1, 1, 0.8, 0],
        }}
        transition={{
          duration: 3.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 6,
          times: [0, 0.25, 0.45, 0.75, 1],
        }}
        style={{ zIndex: 11 }}
      >
        <img
          src={dolphinSvg}
          alt=""
          aria-hidden="true"
          style={{ width: 170, height: 140 }}
        />
      </motion.div>

      {/* ── Whale surfacing ── */}
      <div className="water-whale">
        <img
          src={whaleSvg}
          alt=""
          aria-hidden="true"
          style={{ width: 220, height: 160, opacity: 0.88 }}
        />
      </div>
    </>
  );
}
