export default function RoseWreathFrame() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] opacity-40 md:opacity-55 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'glow-pulse 10s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wreath circle path */}
        <circle cx="225" cy="225" r="180" stroke="url(#wreathStroke)" strokeWidth="2" fill="none" opacity="0.3" />
        {/* Roses around the wreath */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 225 + Math.cos(rad) * 180;
          const cy = 225 + Math.sin(rad) * 180;
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r="18" fill="url(#wreathRose)" opacity="0.4" />
              <circle cx={cx} cy={cy} r="8" fill="url(#wreathRoseInner)" opacity="0.5" />
            </g>
          );
        })}
        {/* Leaves between roses */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 225 + Math.cos(rad) * 180;
          const cy = 225 + Math.sin(rad) * 180;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="10"
              ry="5"
              fill="#8EECD4"
              opacity="0.3"
              transform={`rotate(${angle + 90} ${cx} ${cy})`}
            />
          );
        })}
        <defs>
          <linearGradient id="wreathStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" />
            <stop offset="50%" stopColor="#D4A0FF" />
            <stop offset="100%" stopColor="#FFB6D9" />
          </linearGradient>
          <radialGradient id="wreathRose">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.1" />
          </radialGradient>
          <radialGradient id="wreathRoseInner">
            <stop offset="0%" stopColor="#FFE4A8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF8EC7" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
