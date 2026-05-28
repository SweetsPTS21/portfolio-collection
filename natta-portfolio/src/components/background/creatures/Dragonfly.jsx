import { motion } from 'framer-motion';

export default function Dragonfly() {
  return (
    <motion.div
      className="dragonfly-container"
      animate={{
        x: [0, 120, 80, 200, 150, 50, 0],
        y: [0, -40, 20, -60, 10, -30, 0],
        rotate: [0, 10, -5, 15, -10, 5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
        times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
      }}
    >
      <svg width="64" height="40" viewBox="0 0 32 20" fill="none">
        <ellipse cx="10" cy="10" rx="4" ry="2.5" fill="rgba(157,228,255,0.6)" />
        <ellipse cx="20" cy="10" rx="8" ry="1.5" fill="rgba(132,226,168,0.5)" />
        <line x1="28" y1="10" x2="32" y2="10" stroke="rgba(132,226,168,0.4)" strokeWidth="1" />
        <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="rgba(157,228,255,0.25)">
          <animate attributeName="ry" values="2.5;1;2.5" dur="0.05s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="12" cy="14" rx="7" ry="2.5" fill="rgba(157,228,255,0.25)">
          <animate attributeName="ry" values="2.5;1;2.5" dur="0.05s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="16" cy="7" rx="5" ry="2" fill="rgba(157,228,255,0.2)">
          <animate attributeName="ry" values="2;0.8;2" dur="0.05s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="16" cy="13" rx="5" ry="2" fill="rgba(157,228,255,0.2)">
          <animate attributeName="ry" values="2;0.8;2" dur="0.05s" repeatCount="indefinite" />
        </ellipse>
        <circle cx="7" cy="9" r="2" fill="rgba(132,226,168,0.7)" />
        <circle cx="7" cy="11" r="2" fill="rgba(132,226,168,0.7)" />
      </svg>

      <style>{`
        .dragonfly-container {
          position: absolute;
          top: 20%;
          left: 40%;
          pointer-events: none;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .dragonfly-container { display: none; }
        }
      `}</style>
    </motion.div>
  );
}
