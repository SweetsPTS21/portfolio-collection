import { isReducedMotion } from '../../app/motionConfig';

export default function JellyfishFloat() {
  if (isReducedMotion) return null;

  const jellies = [
    { top: '20%', right: '10%', size: 40, delay: '0s', color: 'var(--jellyfish-pink)' },
    { top: '50%', left: '8%', size: 30, delay: '2s', color: 'var(--anemone-purple)' },
    { top: '70%', right: '15%', size: 25, delay: '4s', color: 'var(--coral-pink)' },
  ];

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none" aria-hidden="true">
      {jellies.map((j, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: j.top,
            left: j.left,
            right: j.right,
            animation: `jellyfishDrift 8s ease-in-out infinite`,
            animationDelay: j.delay,
          }}
        >
          <svg
            width={j.size}
            height={j.size * 1.4}
            viewBox="0 0 40 56"
            fill="none"
            style={{ animation: `jellyfishPulse 3s ease-in-out infinite` }}
          >
            {/* Bell */}
            <ellipse cx="20" cy="16" rx="16" ry="14" fill={j.color} opacity="0.4" />
            <ellipse cx="20" cy="16" rx="12" ry="10" fill={j.color} opacity="0.3" />
            {/* Tentacles */}
            <path d="M12 28 C12 36 10 44 12 52" stroke={j.color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
            <path d="M20 30 C20 38 18 46 20 54" stroke={j.color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
            <path d="M28 28 C28 36 30 44 28 52" stroke={j.color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
          </svg>
        </div>
      ))}
    </div>
  );
}
