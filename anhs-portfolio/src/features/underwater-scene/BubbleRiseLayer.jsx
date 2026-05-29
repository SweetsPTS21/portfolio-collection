import { useMemo } from 'react';

export default function BubbleRiseLayer() {
  const bubbles = useMemo(() => {
    const count = window.innerWidth < 768 ? 8 : 20;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 4 + Math.random() * 12,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      opacity: 0.2 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(168,232,248,0.3))',
            border: '1px solid rgba(168,232,248,0.4)',
            animation: `bubbleRise ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}
