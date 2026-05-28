import { useEffect, useState } from 'react';

export default function PollenDust() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? 15 : 35;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 5,
      driftX: (Math.random() - 0.5) * 60,
      driftY: -20 - Math.random() * 40,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="pollen-layer">
      {particles.map((p) => (
        <div
          key={p.id}
          className="pollen-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            '--pollen-opacity': p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style>{`
        .pollen-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .pollen-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,225,122,0.8) 0%, rgba(255,225,122,0.2) 100%);
          box-shadow: 0 0 3px rgba(255,225,122,0.4);
          animation: pollenFloat 8s ease-in-out infinite;
        }
        @keyframes pollenFloat {
          0%, 100% {
            transform: translate(0, 0);
            opacity: var(--pollen-opacity, 0.3);
          }
          25% {
            transform: translate(calc(var(--drift-x) * 0.5), calc(var(--drift-y) * 0.3));
            opacity: calc(var(--pollen-opacity, 0.3) * 1.5);
          }
          50% {
            transform: translate(var(--drift-x), var(--drift-y));
            opacity: var(--pollen-opacity, 0.3);
          }
          75% {
            transform: translate(calc(var(--drift-x) * 0.3), calc(var(--drift-y) * 0.7));
            opacity: calc(var(--pollen-opacity, 0.3) * 0.7);
          }
        }
      `}</style>
    </div>
  );
}
