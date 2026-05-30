import React from 'react';
import '@/styles/ocean-background.css';
import '@/styles/motion.css';

import WaveLayers from './WaveLayers';
import SunsetSky from './SunsetSky';
import CloudDrift from './CloudDrift';
import SparkleField from './SparkleField';
import BubbleTrail from './BubbleTrail';
import ShoreDecor from './ShoreDecor';
import WaterCreatures from './WaterCreatures';

/**
 * OceanBackground — Fixed full-screen ocean scene.
 * Sits below all page content. Persistent across route changes.
 * Phase 2: Added WaterCreatures (boat, dolphin, whale).
 *           Shore doubled (24%), Ocean halved (28%).
 */
export default function OceanBackground() {
  return (
    <div className="ocean-bg" aria-hidden="true">
      {/* Sky + sun layer */}
      <SunsetSky />

      {/* Water body base */}
      <div className="ocean-water" />

      {/* Cloud drift */}
      <CloudDrift />

      {/* Wave layers */}
      <WaveLayers />

      {/* Shimmer ribbons */}
      <div className="shimmer-ribbon shimmer-ribbon-1" />
      <div className="shimmer-ribbon shimmer-ribbon-2" />
      <div className="shimmer-ribbon shimmer-ribbon-3" />

      {/* Sparkle field on water surface */}
      <SparkleField />

      {/* Water creatures — boat, dolphin, whale */}
      <WaterCreatures />

      {/* Bubble trail at bottom */}
      <BubbleTrail />

      {/* Shore decoration — crab, starfish, snail, palm tree */}
      <ShoreDecor />
    </div>
  );
}
