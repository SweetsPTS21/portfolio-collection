import { motion } from 'framer-motion';

export default function GroundLayer({ windRotation }) {
  const grassBlades = Array.from({ length: 30 }, (_, i) => ({
    x: (i / 30) * 100 + Math.random() * 3,
    height: 20 + Math.random() * 25,
    delay: Math.random() * 2,
    thickness: 1.5 + Math.random() * 1,
  }));

  const flowers = [
    { x: 12, size: 10, delay: 0 },
    { x: 28, size: 8, delay: 0.5 },
    { x: 45, size: 9, delay: 1 },
    { x: 62, size: 11, delay: 0.3 },
    { x: 78, size: 8, delay: 0.8 },
    { x: 91, size: 10, delay: 1.2 },
  ];

  return (
    <div className="ground-layer">
      <svg viewBox="0 0 1400 120" preserveAspectRatio="none" className="ground-svg">
        <path
          d="M0 40 Q200 25, 400 35 Q600 45, 800 30 Q1000 20, 1200 38 Q1350 42, 1400 35 L1400 120 L0 120 Z"
          fill="rgba(132, 226, 168, 0.15)"
        />
        <ellipse cx="200" cy="60" rx="50" ry="8" fill="rgba(100, 200, 150, 0.12)" />
        <ellipse cx="700" cy="55" rx="60" ry="10" fill="rgba(100, 200, 150, 0.1)" />
        <ellipse cx="1100" cy="58" rx="45" ry="7" fill="rgba(100, 200, 150, 0.11)" />

        {grassBlades.map((blade, i) => (
          <motion.line
            key={i}
            x1={blade.x * 14}
            y1={80}
            x2={blade.x * 14}
            y2={80 - blade.height}
            stroke="rgba(132, 226, 168, 0.4)"
            strokeWidth={blade.thickness}
            strokeLinecap="round"
            style={{ rotate: windRotation }}
          />
        ))}

        {flowers.map((f, i) => (
          <g key={`flower-${i}`} transform={`translate(${f.x * 14}, ${45})`}>
            <circle r={f.size / 3} fill="rgba(255,255,255,0.7)" />
            {[0, 72, 144, 216, 288].map((angle) => (
              <ellipse
                key={angle}
                cx={Math.cos((angle * Math.PI) / 180) * (f.size / 2.5)}
                cy={Math.sin((angle * Math.PI) / 180) * (f.size / 2.5)}
                rx={f.size / 4}
                ry={f.size / 6}
                fill="rgba(255,255,255,0.5)"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle r={f.size / 5} fill="rgba(255,225,122,0.6)" />
          </g>
        ))}
      </svg>

      <style>{`
        .ground-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          pointer-events: none;
        }
        .ground-svg {
          width: 100%;
          height: 100%;
        }
        @media (max-width: 768px) {
          .ground-layer { height: 80px; }
        }
      `}</style>
    </div>
  );
}
