import { motion } from 'framer-motion';
import { bubblePop } from '../../app/motionConfig';

const themes = [
  { color: 'var(--coral-pink)', hex: '#FF8EC6', gradFrom: 'rgba(255,142,198,0.07)', gradTo: 'rgba(255,184,216,0.03)', border: 'rgba(255,142,198,0.25)' },
  { color: 'var(--reef-teal)', hex: '#5EEBC4', gradFrom: 'rgba(94,235,196,0.07)', gradTo: 'rgba(56,178,216,0.03)', border: 'rgba(94,235,196,0.25)' },
  { color: 'var(--anemone-purple)', hex: '#C8A8FF', gradFrom: 'rgba(200,168,255,0.07)', gradTo: 'rgba(200,168,255,0.03)', border: 'rgba(200,168,255,0.25)' },
  { color: 'var(--fish-gold)', hex: '#FFE08A', gradFrom: 'rgba(255,224,138,0.09)', gradTo: 'rgba(255,224,138,0.03)', border: 'rgba(255,224,138,0.25)' },
];

/* Anemone tentacles with polyp glow */
function AnemoneTop({ color, hex }) {
  return (
    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-14 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 80 50" fill="none" className="w-full h-full">
        {/* Tentacles */}
        <path d="M25 50 C25 38 22 28 25 18 C26 12 24 7 26 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" className="animate-[seaweedSway_4s_ease-in-out_infinite]" />
        <path d="M35 50 C35 35 33 24 36 14 C37 8 35 4 37 1" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" className="animate-[seaweedSway_3.5s_ease-in-out_infinite_0.3s]" />
        <path d="M45 50 C45 36 47 25 44 16 C43 10 45 5 44 2" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" className="animate-[seaweedSway_4.2s_ease-in-out_infinite_0.6s]" />
        <path d="M55 50 C55 38 57 28 54 18 C53 12 55 7 54 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" className="animate-[seaweedSway_3.8s_ease-in-out_infinite_0.9s]" />
        {/* Polyp dots with glow */}
        <circle cx="26" cy="3" r="3.5" fill={hex} opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="37" cy="1" r="4" fill={hex} opacity="0.8">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="44" cy="2" r="3.5" fill={hex} opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="54" cy="3" r="3" fill={hex} opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* Bubble cluster */
function BubbleCluster({ color }) {
  return (
    <div className="absolute -bottom-1 -right-1 w-10 h-10 opacity-20 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="8" cy="32" r="5" stroke={color} strokeWidth="0.8" opacity="0.6" />
        <circle cx="20" cy="24" r="3.5" stroke={color} strokeWidth="0.6" opacity="0.5" />
        <circle cx="30" cy="34" r="2.5" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <circle cx="14" cy="16" r="2" stroke={color} strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function AnemoneSkillBadge({ title, text, index = 0 }) {
  const theme = themes[index % themes.length];

  return (
    <motion.div
      variants={bubblePop}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden p-5 pt-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${theme.gradFrom} 0%, white 45%, ${theme.gradTo} 100%)`,
        border: `1.5px solid ${theme.border}`,
      }}
    >
      <AnemoneTop color={theme.color} hex={theme.hex} />
      <BubbleCluster color={theme.color} />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${theme.hex}15, transparent 60%)` }}
        aria-hidden="true"
      />

      <div className="relative z-10 pt-2">
        <h3
          className="text-base font-heading font-bold mb-2"
          style={{ color: theme.color }}
        >
          {title}
        </h3>
        <p className="text-base text-[var(--ocean-deep)]/70 leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
