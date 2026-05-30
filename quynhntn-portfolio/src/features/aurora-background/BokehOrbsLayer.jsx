import { useMemo } from 'react';

export default function BokehOrbsLayer() {
  const orbs = useMemo(() => {
    const colors = [
      'rgba(255, 142, 199, 0.2)',
      'rgba(212, 160, 255, 0.15)',
      'rgba(184, 212, 255, 0.15)',
      'rgba(255, 182, 217, 0.18)',
      'rgba(142, 236, 212, 0.12)',
    ];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[i % colors.length],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animation: `bokeh-drift ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
