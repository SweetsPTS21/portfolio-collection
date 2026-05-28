import { useEffect, useState } from 'react';

export default function SparkleLayer() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? 8 : 18;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 70,
      size: 4 + Math.random() * 8,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="sparkle-layer">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="glass-sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <svg viewBox="0 0 12 12" fill="none" width="100%" height="100%">
            <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="rgba(255,255,255,0.8)" />
          </svg>
        </div>
      ))}

      <style>{`
        .sparkle-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .glass-sparkle {
          position: absolute;
          animation: sparkleFlash 3s ease-in-out infinite;
        }
        @keyframes sparkleFlash {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
