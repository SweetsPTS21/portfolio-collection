import { useMemo } from 'react';

export default function SakuraPetalRain() {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 12 + 8,
        duration: Math.random() * 4 + 8,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.4 + 0.3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            width: petal.size,
            height: petal.size * 0.7,
            borderRadius: '50% 0 50% 50%',
            background: 'linear-gradient(135deg, #FFB6D9, #FF8EC7)',
            opacity: petal.opacity,
            animation: `petal-fall ${petal.duration}s linear ${petal.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
