import { motion } from 'framer-motion';

export default function Caterpillar() {
  return (
    <motion.div
      className="caterpillar-container"
      animate={{ x: [0, 15, 0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="72" height="32" viewBox="0 0 36 16" fill="none">
        <circle cx="6" cy="10" r="4" fill="rgba(132,226,168,0.7)">
          <animate attributeName="cy" values="10;8;10" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="12" cy="10" r="4.5" fill="rgba(132,226,168,0.75)">
          <animate attributeName="cy" values="10;12;10" dur="2s" repeatCount="indefinite" begin="0.2s" />
        </circle>
        <circle cx="19" cy="10" r="4.5" fill="rgba(132,226,168,0.8)">
          <animate attributeName="cy" values="10;8;10" dur="2s" repeatCount="indefinite" begin="0.4s" />
        </circle>
        <circle cx="26" cy="10" r="4" fill="rgba(132,226,168,0.75)">
          <animate attributeName="cy" values="10;12;10" dur="2s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        <circle cx="32" cy="8" r="4" fill="rgba(255,209,216,0.7)" />
        <circle cx="33" cy="7" r="1.2" fill="white" />
        <circle cx="33.3" cy="7.2" r="0.6" fill="#3D2B33" />
        <line x1="33" y1="4" x2="35" y2="2" stroke="rgba(61,43,51,0.4)" strokeWidth="0.5" />
        <line x1="31" y1="4" x2="30" y2="2" stroke="rgba(61,43,51,0.4)" strokeWidth="0.5" />
        <circle cx="35" cy="2" r="0.8" fill="rgba(255,160,171,0.5)" />
        <circle cx="30" cy="2" r="0.8" fill="rgba(255,160,171,0.5)" />
        <line x1="6" y1="14" x2="6" y2="16" stroke="rgba(132,226,168,0.5)" strokeWidth="0.5" />
        <line x1="12" y1="14" x2="12" y2="16" stroke="rgba(132,226,168,0.5)" strokeWidth="0.5" />
        <line x1="19" y1="14" x2="19" y2="16" stroke="rgba(132,226,168,0.5)" strokeWidth="0.5" />
        <line x1="26" y1="14" x2="26" y2="16" stroke="rgba(132,226,168,0.5)" strokeWidth="0.5" />
      </svg>

      <style>{`
        .caterpillar-container {
          position: absolute;
          top: 28%;
          left: 6%;
          pointer-events: none;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .caterpillar-container { display: none; }
        }
      `}</style>
    </motion.div>
  );
}
