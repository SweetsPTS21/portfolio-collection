import { motion, useScroll, useTransform } from 'framer-motion';

import giantStrawberry from '../../../assets/strawberry-glasshouse/giant-strawberry.svg';
import wateringCan from '../../../assets/strawberry-glasshouse/watering-can.svg';
import hangingPot from '../../../assets/strawberry-glasshouse/hanging-pot.svg';
import gardenTools from '../../../assets/strawberry-glasshouse/garden-tools.svg';
import bigFlowerPot from '../../../assets/strawberry-glasshouse/big-flower-pot.svg';

const assets = [
  {
    src: giantStrawberry,
    className: 'focal-giant-berry',
    position: { bottom: '5%', right: '3%' },
    size: { width: 280, height: 340 },
    animation: { y: [0, -8, 0], rotate: [0, 2, -1, 0] },
    duration: 6,
  },
  {
    src: wateringCan,
    className: 'focal-watering-can',
    position: { top: '8%', left: '5%' },
    size: { width: 260, height: 220 },
    animation: { rotate: [-5, -8, -5], y: [0, 3, 0] },
    duration: 5,
  },
  {
    src: hangingPot,
    className: 'focal-hanging-pot',
    position: { top: '0%', right: '15%' },
    size: { width: 200, height: 300 },
    animation: { rotate: [0, 2, -2, 0], y: [0, 4, 0] },
    duration: 7,
  },
  {
    src: gardenTools,
    className: 'focal-garden-tools',
    position: { bottom: '2%', left: '8%' },
    size: { width: 160, height: 320 },
    animation: { rotate: [0, 1, 0] },
    duration: 8,
  },
  {
    src: bigFlowerPot,
    className: 'focal-flower-pot',
    position: { bottom: '0%', left: '35%' },
    size: { width: 240, height: 290 },
    animation: { y: [0, -3, 0] },
    duration: 5,
  },
];

export default function FocalAssets() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.div className="focal-assets-layer" style={{ y: parallaxY }}>
      {assets.map((asset, i) => (
        <motion.img
          key={i}
          src={asset.src}
          alt=""
          className={`focal-asset ${asset.className}`}
          style={{
            ...asset.position,
            width: asset.size.width,
            height: asset.size.height,
          }}
          animate={asset.animation}
          transition={{
            duration: asset.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <style>{`
        .focal-assets-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .focal-asset {
          position: absolute;
          opacity: 0.55;
          filter: drop-shadow(0 4px 12px rgba(255,160,171,0.1));
        }
        .focal-giant-berry {
          opacity: 0.5;
        }
        .focal-watering-can {
          opacity: 0.45;
          transform-origin: top right;
        }
        .focal-hanging-pot {
          opacity: 0.5;
          transform-origin: top center;
        }
        .focal-garden-tools {
          opacity: 0.35;
        }
        .focal-flower-pot {
          opacity: 0.45;
        }
        @media (max-width: 1200px) {
          .focal-garden-tools { display: none; }
          .focal-flower-pot { display: none; }
        }
        @media (max-width: 768px) {
          .focal-assets-layer { display: none; }
        }
      `}</style>
    </motion.div>
  );
}
