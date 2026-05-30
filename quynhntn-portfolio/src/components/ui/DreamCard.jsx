import { motion } from 'framer-motion';
import sakuraBranchSvg from '../../assets/pastel-glass-dreamscape/sakura-branch-curve.svg';
import sakuraPetalSvg  from '../../assets/pastel-glass-dreamscape/sakura-petal-set.svg';
import quartzSvg       from '../../assets/pastel-glass-dreamscape/quartz-cluster-pink.svg';
import roseSvg         from '../../assets/pastel-glass-dreamscape/crystal-rose-large.svg';
import sparkleSvg      from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';

/**
 * Accent colour palette — controls border, shadow, fill bg, assets.
 * variant: 'rose' | 'plum' | 'teal' | 'peach'
 */
const VARIANTS = {
  rose: {
    accent:      '#D4607E',
    border:      'rgba(212,96,126,0.20)',
    shadow:      'rgba(212,96,126,0.12)',
    hoverShadow: 'rgba(212,96,126,0.24)',
    fillBg:      '#FFF0F5',
    cornerSrc:   sakuraBranchSvg,
    scatterSrc:  sakuraPetalSvg,
    cornerTop: '-22px', cornerRight: '-28px', cornerWidth: '140px', cornerOpacity: 0.35,
    scatterBottom: '-8px', scatterRight: '-4px', scatterWidth: '110px', scatterOpacity: 0.30,
  },
  plum: {
    accent:      '#8B4BAB',
    border:      'rgba(139,75,171,0.18)',
    shadow:      'rgba(139,75,171,0.10)',
    hoverShadow: 'rgba(139,75,171,0.22)',
    fillBg:      '#F8F4FF',
    cornerSrc:   quartzSvg,
    scatterSrc:  sparkleSvg,
    cornerTop: '-20px', cornerRight: '-18px', cornerWidth: '110px', cornerOpacity: 0.28,
    scatterBottom: '4px', scatterRight: '4px', scatterWidth: '80px', scatterOpacity: 0.22,
  },
  teal: {
    accent:      '#3A9A8A',
    border:      'rgba(58,154,138,0.20)',
    shadow:      'rgba(58,154,138,0.10)',
    hoverShadow: 'rgba(58,154,138,0.24)',
    fillBg:      '#F0FDF8',
    cornerSrc:   sakuraPetalSvg,
    scatterSrc:  sparkleSvg,
    cornerTop: '-10px', cornerRight: '-6px', cornerWidth: '100px', cornerOpacity: 0.28,
    scatterBottom: '0px', scatterRight: '0px', scatterWidth: '70px', scatterOpacity: 0.20,
  },
  peach: {
    accent:      '#D4784A',
    border:      'rgba(212,120,74,0.20)',
    shadow:      'rgba(212,120,74,0.10)',
    hoverShadow: 'rgba(212,120,74,0.22)',
    fillBg:      '#FFF8F0',
    cornerSrc:   roseSvg,
    scatterSrc:  sakuraPetalSvg,
    cornerTop: '-20px', cornerRight: '-16px', cornerWidth: '100px', cornerOpacity: 0.30,
    scatterBottom: '0px', scatterRight: '0px', scatterWidth: '90px', scatterOpacity: 0.22,
  },
};

/**
 * Build inline style based on cardStyle + variant.
 *
 * cardStyle:
 *   'default' → nền trắng + border-left 4px accent (Concept A)
 *   'filled'  → nền pastel tint + border-top 3px accent
 *   'quote'   → nền trắng + border-bottom 2px + dấu " decoration
 */
function buildStyle(cardStyle, v) {
  switch (cardStyle) {
    case 'filled':
      return {
        background:  v.fillBg,
        border:      `1px solid ${v.border}`,
        borderTop:   `3px solid ${v.accent}`,
        boxShadow:   `0 4px 20px ${v.shadow}`,
      };
    case 'quote':
      return {
        background:    '#FFFFFF',
        border:        'none',
        borderBottom:  `2px solid ${v.accent}`,
        boxShadow:     `0 2px 16px ${v.shadow}`,
      };
    default: // 'default'
      return {
        background:    '#FFFFFF',
        borderTop:     `1px solid ${v.border}`,
        borderRight:   `1px solid ${v.border}`,
        borderBottom:  `1px solid ${v.border}`,
        borderLeft:    `4px solid ${v.accent}`,
        boxShadow:     `0 4px 24px ${v.shadow}, 0 1px 4px rgba(0,0,0,0.04)`,
      };
  }
}

export default function DreamCard({
  children,
  className = '',
  delay = 0,
  variant = 'rose',
  cardStyle = 'default',
}) {
  const v = VARIANTS[variant] ?? VARIANTS.rose;
  const styleProps = buildStyle(cardStyle, v);
  // Reduce asset prominence for non-default styles (bg already coloured)
  const assetOpacityScale = cardStyle === 'default' ? 1 : 0.65;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-6 ${className}`}
      style={styleProps}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.50, delay, ease: 'easeOut' }}
      whileHover={{
        y: -5,
        boxShadow: `0 12px 36px ${v.hoverShadow}, 0 2px 8px rgba(0,0,0,0.06)`,
        transition: { duration: 0.18 },
      }}
    >
      {/* Quote decoration — only for 'quote' style */}
      {cardStyle === 'quote' && (
        <span
          aria-hidden="true"
          style={{
            position:   'absolute',
            top:        '-18px',
            left:       '14px',
            fontSize:   '110px',
            lineHeight: 1,
            color:      v.accent,
            opacity:    0.09,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 700,
            pointerEvents: 'none',
            userSelect:    'none',
          }}
        >
          &#8220;
        </span>
      )}

      {/* Corner decoration asset */}
      <img
        src={v.cornerSrc}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top:      v.cornerTop,
          right:    v.cornerRight,
          width:    v.cornerWidth,
          opacity:  v.cornerOpacity * assetOpacityScale,
          pointerEvents: 'none',
          userSelect:    'none',
        }}
      />

      {/* Scatter decoration asset */}
      <img
        src={v.scatterSrc}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom:   v.scatterBottom,
          right:    v.scatterRight,
          width:    v.scatterWidth,
          opacity:  v.scatterOpacity * assetOpacityScale,
          pointerEvents: 'none',
          userSelect:    'none',
        }}
      />

      {/* Content above all decorations */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
