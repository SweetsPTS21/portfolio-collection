import { motion, useScroll, useTransform } from 'framer-motion';

export default function SunbeamCaustics() {
  const { scrollYProgress } = useScroll();
  const lightShift = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <div className="caustics-layer">
      {[...Array(6)].map((_, i) => (
        <div
          key={`ray-${i}`}
          className="caustic-ray"
          style={{
            left: `${8 + i * 16}%`,
            width: `${30 + i * 8}px`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${10 + i * 2}s`,
          }}
        />
      ))}

      {[
        { x: 20, y: 30, size: 80, delay: 0 },
        { x: 55, y: 45, size: 100, delay: 2 },
        { x: 75, y: 25, size: 70, delay: 4 },
        { x: 35, y: 65, size: 90, delay: 1 },
        { x: 85, y: 55, size: 60, delay: 3 },
      ].map((spot, i) => (
        <motion.div
          key={`spot-${i}`}
          className="light-spot"
          style={{
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            width: spot.size,
            height: spot.size,
            y: lightShift,
          }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: spot.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="sun-glow" />

      <style>{`
        .caustics-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .caustic-ray {
          position: absolute;
          top: -5%;
          height: 110%;
          background: linear-gradient(
            180deg,
            rgba(255, 225, 122, 0.25) 0%,
            rgba(255, 225, 122, 0.08) 40%,
            rgba(255, 225, 122, 0.02) 70%,
            transparent 100%
          );
          transform: skewX(-4deg);
          animation: causticShimmer 10s ease-in-out infinite;
          border-radius: 100px;
        }
        .light-spot {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 225, 122, 0.12) 0%,
            rgba(255, 225, 122, 0.04) 40%,
            transparent 70%
          );
          filter: blur(10px);
        }
        .sun-glow {
          position: absolute;
          top: -15%;
          left: 30%;
          width: 40%;
          height: 30%;
          background: radial-gradient(
            ellipse,
            rgba(255, 240, 180, 0.15) 0%,
            transparent 70%
          );
          filter: blur(30px);
        }
        @keyframes causticShimmer {
          0%, 100% { opacity: 0.4; transform: skewX(-4deg) translateX(0); }
          30% { opacity: 0.7; transform: skewX(-3deg) translateX(3px); }
          70% { opacity: 0.5; transform: skewX(-5deg) translateX(-2px); }
        }
      `}</style>
    </div>
  );
}
