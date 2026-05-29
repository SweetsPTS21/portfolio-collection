import { isReducedMotion } from '../../app/motionConfig';

export default function SeaweedSway() {
  if (isReducedMotion) return null;

  const seaweeds = [
    { left: '5%', height: 120, color: 'var(--reef-teal)', delay: '0s' },
    { left: '8%', height: 90, color: 'var(--deep-aqua)', delay: '0.5s' },
    { left: '92%', height: 110, color: 'var(--reef-teal)', delay: '0.3s' },
    { left: '95%', height: 80, color: 'var(--deep-aqua)', delay: '0.8s' },
    { left: '12%', height: 70, color: 'var(--anemone-purple)', delay: '1.2s' },
    { left: '88%', height: 95, color: 'var(--anemone-purple)', delay: '0.6s' },
  ];

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {seaweeds.map((sw, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: sw.left,
            width: '12px',
            height: `${sw.height}px`,
            transformOrigin: 'bottom center',
            animation: `seaweedSway 5s ease-in-out infinite`,
            animationDelay: sw.delay,
          }}
        >
          <svg
            width="12"
            height={sw.height}
            viewBox={`0 0 12 ${sw.height}`}
            fill="none"
          >
            <path
              d={`M6 ${sw.height} C6 ${sw.height * 0.7} 2 ${sw.height * 0.5} 6 ${sw.height * 0.3} C10 ${sw.height * 0.15} 4 ${sw.height * 0.05} 6 0`}
              stroke={sw.color}
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
