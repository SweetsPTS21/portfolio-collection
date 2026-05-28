import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useWindSimulation from './hooks/useWindSimulation';

// Layers
import GreenhouseFrame3D from './layers/GreenhouseFrame3D';
import SunbeamCaustics from './layers/SunbeamCaustics';
import GroundLayer from './layers/GroundLayer';
import FocalAssets from './layers/FocalAssets';
import StrawberryVines from './StrawberryVines';
import DewDropLayer from './DewDropLayer';
import LeafSwayLayer from './LeafSwayLayer';
import FloatingPetals from './FloatingPetals';
import PollenDust from './layers/PollenDust';
import SparkleLayer from './layers/SparkleLayer';

// Creatures
import BeeFloating from './BeeFloating';
import Butterfly from './creatures/Butterfly';
import Dragonfly from './creatures/Dragonfly';
import Caterpillar from './creatures/Caterpillar';

export default function GreenhouseBackground() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [fogCleared, setFogCleared] = useState(false);

  const { leafRotation, vineRotation } = useWindSimulation();
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const vinesY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const creaturesY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const dewY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const leavesY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const petalsY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const pollenY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    const timer = setTimeout(() => setFogCleared(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const parallax = (y) => (isMobile ? {} : { y });

  return (
    <div className="greenhouse-bg" aria-hidden="true" ref={containerRef}>
      {/* Glass fog overlay — clears on first load */}
      <motion.div
        className="glass-fog-overlay"
        initial={{ opacity: 0.7, backdropFilter: 'blur(8px)' }}
        animate={fogCleared ? { opacity: 0, backdropFilter: 'blur(0px)' } : {}}
        transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Layer 1: 3D Greenhouse Frame */}
      <motion.div style={parallax(frameY)} className="parallax-layer">
        <GreenhouseFrame3D />
      </motion.div>

      {/* Layer 2: Sunbeam Caustics */}
      <SunbeamCaustics />

      {/* Layer 3: Sparkles on glass */}
      <SparkleLayer />

      {/* Layer 4: Strawberry Vines */}
      <motion.div style={parallax(vinesY)} className="parallax-layer">
        <StrawberryVines windRotation={vineRotation} />
      </motion.div>

      {/* Layer 4.5: Large focal assets */}
      <FocalAssets />

      {/* Layer 5: Caterpillar (on vine) */}
      <Caterpillar />

      {/* Layer 6: Dew drops */}
      <motion.div style={parallax(dewY)} className="parallax-layer">
        <DewDropLayer />
      </motion.div>

      {/* Layer 7: Creatures */}
      <motion.div style={parallax(creaturesY)} className="parallax-layer">
        <BeeFloating />
        <Butterfly />
        <Dragonfly />
      </motion.div>

      {/* Layer 8: Leaves */}
      <motion.div style={parallax(leavesY)} className="parallax-layer">
        <LeafSwayLayer />
      </motion.div>

      {/* Layer 9: Pollen dust */}
      <motion.div style={parallax(pollenY)} className="parallax-layer">
        <PollenDust />
      </motion.div>

      {/* Layer 10: Floating petals */}
      <motion.div style={parallax(petalsY)} className="parallax-layer">
        <FloatingPetals />
      </motion.div>

      {/* Layer 11: Ground (bottom, no parallax) */}
      <GroundLayer windRotation={leafRotation} />

      <style>{`
        .greenhouse-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            var(--glasshouse-mint) 0%,
            rgba(248, 255, 250, 0.95) 40%,
            var(--bg-base) 100%
          );
        }
        .glass-fog-overlay {
          position: absolute;
          inset: 0;
          z-index: 20;
          background: rgba(242, 251, 246, 0.6);
          pointer-events: none;
        }
        .parallax-layer {
          position: absolute;
          inset: 0;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .greenhouse-bg {
            background: linear-gradient(180deg, var(--glasshouse-mint) 0%, var(--bg-base) 100%);
          }
        }
      `}</style>
    </div>
  );
}
