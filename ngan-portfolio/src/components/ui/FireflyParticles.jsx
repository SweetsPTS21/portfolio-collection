import { useMemo } from 'react';

export default function FireflyParticles({ count = 8, style = {} }) {
  const dots = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${2.5 + Math.random() * 3}s`,
      width: 5,
      height: 5,
    })), [count]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', ...style }} aria-hidden="true">
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: d.left,
            top: d.top,
            width: d.width,
            height: d.height,
            borderRadius: '50%',
            background: 'var(--firefly-gold)',
            boxShadow: '0 0 6px var(--firefly-gold)',
            animation: `firefly-glow ${d.animationDuration} ease-in-out ${d.animationDelay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
