export default function CrescentMoonGlow() {
  return (
    <div
      className="absolute top-4 left-1/2 -translate-x-1/2 w-[180px] md:w-[300px] opacity-55 md:opacity-70 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'moon-glow 6s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Halo */}
        <circle cx="150" cy="150" r="120" fill="url(#moonHalo)" opacity="0.35" />
        <circle cx="150" cy="150" r="80" fill="url(#moonHaloInner)" opacity="0.3" />
        {/* Crescent */}
        <path
          d="M150 50 A100 100 0 1 1 150 250 A70 70 0 1 0 150 50Z"
          fill="url(#moonGrad)"
          opacity="0.9"
        />
        {/* Stars */}
        {[
          { x: 80, y: 70, s: 3 },
          { x: 230, y: 90, s: 2.5 },
          { x: 60, y: 200, s: 2 },
          { x: 250, y: 220, s: 3 },
          { x: 120, y: 260, s: 2 },
          { x: 200, y: 60, s: 2.5 },
        ].map((star, i) => (
          <circle
            key={i}
            cx={star.x}
            cy={star.y}
            r={star.s}
            fill="#FFE4A8"
            opacity="0.6"
          />
        ))}
        <defs>
          <radialGradient id="moonHalo">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="moonHaloInner">
            <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6D9" />
            <stop offset="50%" stopColor="#FF8EC7" />
            <stop offset="100%" stopColor="#E8D5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
