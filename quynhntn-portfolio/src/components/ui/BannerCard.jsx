import { motion } from 'framer-motion';
import sparkleSvg from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';
import sakuraPetalSvg from '../../assets/pastel-glass-dreamscape/sakura-petal-set.svg';

/**
 * BannerCard — Project card với dải gradient ngang ở trên cùng.
 * Icon nằm trong banner, nội dung ở phần thân bên dưới.
 *
 * Props:
 *   icon       — Lucide icon component
 *   chapterLabel — "Chương 1"
 *   bannerIndex  — 0‥5 để cycle gradient
 *   delay        — framer motion delay
 */
const BANNERS = [
  { gradient: 'linear-gradient(135deg, #D4607E 0%, #8B4BAB 100%)', glow: 'rgba(139,75,171,0.18)' },
  { gradient: 'linear-gradient(135deg, #8B4BAB 0%, #3A9A8A 100%)', glow: 'rgba(58,154,138,0.16)' },
  { gradient: 'linear-gradient(135deg, #3A9A8A 0%, #4A80C8 100%)', glow: 'rgba(74,128,200,0.16)' },
  { gradient: 'linear-gradient(135deg, #D4607E 0%, #D4784A 100%)', glow: 'rgba(212,120,74,0.16)' },
  { gradient: 'linear-gradient(135deg, #8B4BAB 0%, #D4607E 100%)', glow: 'rgba(212,96,126,0.18)' },
  { gradient: 'linear-gradient(135deg, #4A80C8 0%, #3A9A8A 100%)', glow: 'rgba(58,154,138,0.16)' },
];

export default function BannerCard({
  children,
  icon: Icon,
  chapterLabel = '',
  bannerIndex = 0,
  delay = 0,
  className = '',
  onClick,
}) {
  const b = BANNERS[bannerIndex % BANNERS.length];

  return (
    <motion.div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl flex flex-col ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        background:  '#FFFFFF',
        border:      `1px solid rgba(0,0,0,0.07)`,
        boxShadow:   `0 4px 24px ${b.glow}, 0 1px 4px rgba(0,0,0,0.04)`,
      }}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.50, delay, ease: 'easeOut' }}
      whileHover={{
        y: -5,
        boxShadow: `0 14px 40px ${b.glow}, 0 2px 8px rgba(0,0,0,0.07)`,
        transition: { duration: 0.18 },
      }}
    >
      {/* ── Gradient banner ── */}
      <div
        className="relative flex items-center gap-3 px-5"
        style={{
          background:   b.gradient,
          height:       '56px',
          borderRadius: '16px 16px 0 0',
          flexShrink:   0,
        }}
      >
        {/* Sparkle overlay on banner */}
        <img
          src={sparkleSvg}
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            opacity: 0.18, pointerEvents: 'none', objectFit: 'cover',
          }}
        />

        {/* Icon in white circle */}
        {Icon && (
          <div
            className="relative z-10 flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
            style={{ background: 'rgba(255,255,255,0.28)' }}
          >
            <Icon size={20} color="white" />
          </div>
        )}

        {/* Chapter label */}
        {chapterLabel && (
          <span
            className="relative z-10 text-xs font-heading font-bold tracking-wider"
            style={{ color: 'rgba(255,255,255,0.90)' }}
          >
            {chapterLabel}
          </span>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="relative flex flex-col flex-1 p-5">
        {/* Petal scatter — bottom-right of body */}
        <img
          src={sakuraPetalSvg}
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: '-4px', right: '-4px',
            width: '90px', opacity: 0.20, pointerEvents: 'none',
          }}
        />
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
