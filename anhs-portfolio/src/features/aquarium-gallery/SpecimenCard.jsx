import { useState } from 'react';
import { motion } from 'framer-motion';
import { bubblePop } from '../../app/motionConfig';
import { BookOpen } from 'lucide-react';
import SpecimenDetailModal from './SpecimenDetailModal';

const specimenThemes = [
  { color: 'var(--coral-pink)', hex: '#FF8EC6', gradFrom: 'rgba(255,142,198,0.06)', gradTo: 'rgba(255,184,216,0.03)', border: 'rgba(255,142,198,0.3)' },
  { color: 'var(--reef-teal)', hex: '#5EEBC4', gradFrom: 'rgba(94,235,196,0.06)', gradTo: 'rgba(56,178,216,0.03)', border: 'rgba(94,235,196,0.3)' },
  { color: 'var(--deep-aqua)', hex: '#38B2D8', gradFrom: 'rgba(56,178,216,0.06)', gradTo: 'rgba(168,232,248,0.03)', border: 'rgba(56,178,216,0.3)' },
  { color: 'var(--anemone-purple)', hex: '#C8A8FF', gradFrom: 'rgba(200,168,255,0.06)', gradTo: 'rgba(200,168,255,0.03)', border: 'rgba(200,168,255,0.3)' },
  { color: 'var(--fish-gold)', hex: '#FFE08A', gradFrom: 'rgba(255,224,138,0.08)', gradTo: 'rgba(255,224,138,0.03)', border: 'rgba(255,224,138,0.3)' },
  { color: 'var(--jellyfish-pink)', hex: '#FFB8D8', gradFrom: 'rgba(255,184,216,0.06)', gradTo: 'rgba(255,142,198,0.03)', border: 'rgba(255,184,216,0.3)' },
];

/* Sea creatures — one per card */
const creatures = [
  // Clownfish
  (color) => (
    <svg width="36" height="22" viewBox="0 0 44 26" fill="none">
      <ellipse cx="24" cy="13" rx="16" ry="10" fill={color} opacity="0.5" />
      <polygon points="4,13 14,7 14,19" fill={color} opacity="0.4" />
      <rect x="16" y="4" width="3" height="22" rx="1.5" fill="white" opacity="0.4" />
      <rect x="26" y="5" width="3" height="20" rx="1.5" fill="white" opacity="0.35" />
      <circle cx="32" cy="10" r="2.5" fill="white" opacity="0.7" />
      <circle cx="32.5" cy="10" r="1.2" fill="#152D3B" opacity="0.6" />
    </svg>
  ),
  // Seahorse
  (color) => (
    <svg width="22" height="34" viewBox="0 0 28 42" fill="none">
      <path d="M14 4 C20 4 24 10 24 16 C24 22 20 26 16 28 C14 29 14 32 14 36 C14 38 12 40 10 40 C8 40 8 38 10 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <circle cx="18" cy="12" r="2" fill={color} opacity="0.6" />
      <path d="M14 4 C14 2 16 1 18 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  // Jellyfish
  (color) => (
    <svg width="28" height="32" viewBox="0 0 32 38" fill="none">
      <ellipse cx="16" cy="12" rx="12" ry="10" fill={color} opacity="0.4" />
      <ellipse cx="12" cy="9" rx="4" ry="3" fill="white" opacity="0.3" />
      <path d="M8 22 C8 28 6 34 7 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M12 22 C12 26 14 30 13 34" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <path d="M16 22 C16 28 16 32 17 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M20 22 C20 26 22 30 21 34" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <path d="M24 22 C24 28 26 32 25 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  // Starfish
  (color) => (
    <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
      <path d="M18 2 L21 13 L32 13 L23 20 L26 31 L18 24 L10 31 L13 20 L4 13 L15 13 Z" fill={color} opacity="0.4" />
      <circle cx="18" cy="17" r="3" fill={color} opacity="0.3" />
    </svg>
  ),
  // Turtle
  (color) => (
    <svg width="36" height="24" viewBox="0 0 44 28" fill="none">
      <ellipse cx="22" cy="14" rx="14" ry="10" fill={color} opacity="0.4" />
      <ellipse cx="22" cy="14" rx="10" ry="7" fill={color} opacity="0.25" />
      <circle cx="10" cy="10" r="3" fill={color} opacity="0.35" />
      <path d="M36 14 L42 14" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M14 22 L12 26" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M30 22 L32 26" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  // Octopus
  (color) => (
    <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
      <ellipse cx="19" cy="14" rx="10" ry="9" fill={color} opacity="0.4" />
      <circle cx="15" cy="12" r="2" fill="white" opacity="0.5" />
      <circle cx="23" cy="12" r="2" fill="white" opacity="0.5" />
      <path d="M10 22 C8 26 6 30 8 32" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M14 23 C13 27 12 31 14 33" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M19 24 C19 28 19 32 19 34" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M24 23 C25 27 26 31 24 33" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M28 22 C30 26 32 30 30 32" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    </svg>
  ),
];

/* Glass reflection highlight */
function GlassReflection() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl" aria-hidden="true">
      {/* Top-left reflection */}
      <div className="absolute -top-1 -left-1 w-24 h-16 bg-white/20 rounded-full blur-md rotate-[-20deg]" />
      {/* Bottom water gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--deep-aqua)]/[0.04] to-transparent" />
    </div>
  );
}

/* Hover bubbles */
function HoverBubbles({ color }) {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true">
      <div className="absolute bottom-0 left-2 w-3 h-3 rounded-full border border-current opacity-40 animate-[bubbleRise_3s_ease-in-out_infinite]" style={{ color }} />
      <div className="absolute bottom-0 left-8 w-2 h-2 rounded-full border border-current opacity-30 animate-[bubbleRise_4s_ease-in-out_infinite_0.5s]" style={{ color }} />
      <div className="absolute bottom-0 right-4 w-2.5 h-2.5 rounded-full border border-current opacity-35 animate-[bubbleRise_3.5s_ease-in-out_infinite_1s]" style={{ color }} />
    </div>
  );
}

export default function SpecimenCard({ project, index }) {
  const [showDetail, setShowDetail] = useState(false);
  const theme = specimenThemes[index % specimenThemes.length];
  const CreatureSvg = creatures[index % creatures.length];

  return (
    <>
      <motion.article
        variants={bubblePop}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        style={{
          background: `linear-gradient(160deg, rgba(248,253,255,0.97) 0%, ${theme.gradFrom} 50%, ${theme.gradTo} 100%)`,
          border: `2px solid ${theme.border}`,
          boxShadow: '0 8px 30px rgba(21,45,59,0.06)',
        }}
        onClick={() => setShowDetail(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setShowDetail(true)}
        aria-label={`Xem chi tiết chương ${project.chapter}: ${project.title}`}
      >
        <GlassReflection />
        <HoverBubbles color={theme.hex} />

        {/* Sea creature decoration */}
        <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
          {CreatureSvg(theme.hex)}
        </div>

        {/* Chapter number bubble */}
        <div className="relative z-10 flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-heading font-bold text-base shadow-sm"
            style={{ backgroundColor: theme.color, boxShadow: `0 4px 12px ${theme.hex}40` }}
          >
            {project.chapter}
          </div>
        </div>

        <h3 className="relative z-10 text-base font-heading font-bold text-[var(--ocean-deep)] mb-2 group-hover:text-[var(--deep-aqua)] transition-colors">
          {project.title}
        </h3>

        <p className="relative z-10 text-base text-[var(--ocean-deep)]/70 leading-relaxed mb-4 line-clamp-3">
          {project.content}
        </p>

        <div className="relative z-10 flex items-center gap-1.5 text-base text-[var(--deep-aqua)] font-semibold group-hover:gap-2.5 transition-all">
          <BookOpen size={14} />
          <span>Xem chi tiết</span>
        </div>
      </motion.article>

      {showDetail && (
        <SpecimenDetailModal
          project={project}
          color={theme.color}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
}
