export default function GreenhouseFrame3D() {
  return (
    <div className="greenhouse-frame-3d">
      <svg
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="frame-3d-svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Main arch structure */}
        <path
          d="M0 850 L0 250 Q700 -80 1400 250 L1400 850"
          stroke="rgba(132,226,168,0.25)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M50 850 L50 270 Q700 -40 1350 270 L1350 850"
          stroke="rgba(132,226,168,0.12)"
          strokeWidth="2"
          fill="none"
        />

        {/* Vertical ribs */}
        {[180, 360, 540, 700, 860, 1040, 1220].map((x, i) => {
          const normalized = (x - 700) / 700;
          const archY = 250 + normalized * normalized * 200;
          return (
            <line
              key={`v-${i}`}
              x1={x}
              y1={archY}
              x2={x}
              y2={850}
              stroke="rgba(132,226,168,0.18)"
              strokeWidth={i === 3 ? 3 : 1.5}
            />
          );
        })}

        {/* Horizontal bands */}
        {[350, 500, 650].map((y, i) => (
          <path
            key={`h-${i}`}
            d={`M30 ${y} Q700 ${y - 15} 1370 ${y}`}
            stroke="rgba(132,226,168,0.12)"
            strokeWidth="1.5"
            fill="none"
          />
        ))}

        {/* Condensation patches */}
        <ellipse cx="250" cy="400" rx="60" ry="40" fill="rgba(255,255,255,0.04)" />
        <ellipse cx="900" cy="350" rx="80" ry="50" fill="rgba(255,255,255,0.03)" />
        <ellipse cx="600" cy="550" rx="70" ry="35" fill="rgba(255,255,255,0.035)" />
        <ellipse cx="1100" cy="500" rx="55" ry="45" fill="rgba(255,255,255,0.03)" />

        {/* Light reflections on frame */}
        <circle cx="360" cy="280" r="3" fill="rgba(255,255,255,0.3)" />
        <circle cx="700" cy="200" r="4" fill="rgba(255,255,255,0.25)" />
        <circle cx="1040" cy="290" r="3" fill="rgba(255,255,255,0.2)" />

        {/* Corner brackets */}
        <path d="M20 830 L20 800 L50 800" stroke="rgba(132,226,168,0.3)" strokeWidth="2" fill="none" />
        <path d="M1380 830 L1380 800 L1350 800" stroke="rgba(132,226,168,0.3)" strokeWidth="2" fill="none" />
      </svg>

      <style>{`
        .greenhouse-frame-3d {
          position: absolute;
          inset: 0;
          opacity: 0.7;
          perspective: 1200px;
        }
        .frame-3d-svg {
          width: 100%;
          height: 100%;
          transform: rotateX(2deg);
          transform-origin: center bottom;
        }
        @media (max-width: 768px) {
          .greenhouse-frame-3d { opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
