import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

export default function SeedSparkle({ isActive }) {
  const particles = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 60,
      scale: 0.5 + Math.random() * 0.8,
      delay: Math.random() * 0.3,
    }));
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="seed-sparkle-container">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="seed-particle"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, p.scale, 0],
                x: p.x,
                y: p.y,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.8,
                delay: p.delay,
                ease: 'easeOut',
              }}
            />
          ))}

          <style>{`
            .seed-sparkle-container {
              position: absolute;
              top: 50%;
              left: 50%;
              pointer-events: none;
              z-index: 10;
            }
            .seed-particle {
              position: absolute;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: radial-gradient(circle, #FFE17A 0%, rgba(255,225,122,0.3) 100%);
              box-shadow: 0 0 6px rgba(255, 225, 122, 0.6);
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
