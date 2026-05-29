import { useMemo } from 'react';
import { isReducedMotion } from '../../app/motionConfig';

const fishColors = [
  'var(--coral-pink)',
  'var(--fish-gold)',
  'var(--reef-teal)',
  'var(--deep-aqua)',
  'var(--anemone-purple)',
];

export default function FishSwimLayer() {
  const fishes = useMemo(() => {
    if (isReducedMotion) return [];
    const count = window.innerWidth < 768 ? 3 : 6;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${15 + Math.random() * 60}%`,
      size: 16 + Math.random() * 20,
      duration: 18 + Math.random() * 15,
      delay: Math.random() * 12,
      color: fishColors[i % fishColors.length],
      flip: Math.random() > 0.5,
    }));
  }, []);

  if (isReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
      {fishes.map((f) => (
        <div
          key={f.id}
          className="absolute"
          style={{
            top: f.top,
            left: '-100px',
            animation: `fishSwim ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
            transform: f.flip ? 'scaleX(-1)' : undefined,
          }}
        >
          <svg
            width={f.size}
            height={f.size * 0.6}
            viewBox="0 0 40 24"
            fill="none"
          >
            <ellipse cx="22" cy="12" rx="14" ry="9" fill={f.color} opacity="0.7" />
            <polygon points="4,12 12,6 12,18" fill={f.color} opacity="0.6" />
            <circle cx="28" cy="10" r="2" fill="white" opacity="0.8" />
            <circle cx="28.5" cy="10" r="1" fill="var(--ocean-deep)" opacity="0.9" />
          </svg>
        </div>
      ))}
    </div>
  );
}
