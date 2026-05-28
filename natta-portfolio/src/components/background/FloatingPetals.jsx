import { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? 5 : 10;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      size: 12 + Math.random() * 16,
      drift: 60 + Math.random() * 120,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="petals-layer">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="floating-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            '--drift': `${petal.drift}px`,
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 12 12" fill="none">
            <ellipse
              cx="6"
              cy="6"
              rx="5"
              ry="3"
              fill="rgba(255, 209, 216, 0.6)"
              transform="rotate(30 6 6)"
            />
          </svg>
        </div>
      ))}

      <style>{`
        .petals-layer {
          position: absolute;
          inset: 0;
        }
        .floating-petal {
          position: absolute;
          top: -20px;
          animation: floatPetalDrift 10s linear infinite;
        }
        @keyframes floatPetalDrift {
          0% {
            transform: translate(0, -20px) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% {
            transform: translate(var(--drift, 60px), 100vh) rotate(200deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
