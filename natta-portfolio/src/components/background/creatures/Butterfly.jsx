import { motion } from 'framer-motion';

const butterflies = [
  { id: 1, color: '#FFD1D8', accent: '#FFA0AB', startX: 25, startY: 35, size: 44 },
  { id: 2, color: '#E8D4F0', accent: '#C8A0E0', startX: 70, startY: 50, size: 36 },
];

export default function Butterfly() {
  return (
    <div className="butterfly-layer">
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          className="butterfly-wrapper"
          style={{ left: `${b.startX}%`, top: `${b.startY}%` }}
          animate={{
            x: [0, 40, -20, 60, 10, -30, 0],
            y: [0, -30, -10, -40, 20, -20, 0],
          }}
          transition={{
            duration: 18 + b.id * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width={b.size} height={b.size} viewBox="0 0 24 24" fill="none">
            <ellipse cx="8" cy="10" rx="6" ry="8" fill={b.color} opacity="0.7">
              <animate attributeName="ry" values="8;3;8" dur="0.6s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="16" cy="10" rx="6" ry="8" fill={b.color} opacity="0.7">
              <animate attributeName="ry" values="8;3;8" dur="0.6s" repeatCount="indefinite" />
            </ellipse>
            <circle cx="8" cy="9" r="2" fill={b.accent} opacity="0.5" />
            <circle cx="16" cy="9" r="2" fill={b.accent} opacity="0.5" />
            <ellipse cx="12" cy="12" rx="1.5" ry="5" fill="rgba(61,43,51,0.5)" />
            <line x1="11" y1="7" x2="9" y2="3" stroke="rgba(61,43,51,0.4)" strokeWidth="0.5" />
            <line x1="13" y1="7" x2="15" y2="3" stroke="rgba(61,43,51,0.4)" strokeWidth="0.5" />
            <circle cx="9" cy="3" r="0.8" fill="rgba(61,43,51,0.4)" />
            <circle cx="15" cy="3" r="0.8" fill="rgba(61,43,51,0.4)" />
          </svg>
        </motion.div>
      ))}

      <style>{`
        .butterfly-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .butterfly-wrapper {
          position: absolute;
        }
        @media (max-width: 768px) {
          .butterfly-wrapper:nth-child(2) { display: none; }
          .butterfly-wrapper { transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
