export default function RainbowArcShift() {
  return (
    <div
      className="absolute top-0 left-[10%] right-[10%] w-[80%] opacity-40 md:opacity-55 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'rainbow-hue 15s linear infinite' }}
    >
      <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[
          { offset: 0, color: '#FF8EC7', width: 4 },
          { offset: 8, color: '#FFB6D9', width: 3.5 },
          { offset: 16, color: '#FFD4B8', width: 3 },
          { offset: 24, color: '#FFE4A8', width: 3 },
          { offset: 32, color: '#8EECD4', width: 3 },
          { offset: 40, color: '#B8D4FF', width: 3.5 },
          { offset: 48, color: '#D4A0FF', width: 4 },
        ].map((arc, i) => (
          <path
            key={i}
            d={`M30 190 A${220 - arc.offset} ${170 - arc.offset} 0 0 1 470 190`}
            stroke={arc.color}
            strokeWidth={arc.width}
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
        ))}
        {/* Sparkle dots along arc */}
        {[80, 150, 250, 350, 420].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={190 - Math.sin(((x - 30) / 440) * Math.PI) * 160}
            r="3"
            fill="#FFE4A8"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
}
