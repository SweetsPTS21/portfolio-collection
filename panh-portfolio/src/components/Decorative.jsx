import { motion } from 'framer-motion';

// Animated equalizer bars
export function EqualizerBars({ size = 60, color = 'var(--color-primary)', style = {} }) {
  const barWidths = [8, 8, 8, 8, 8];
  const heights = [60, 100, 40, 80, 55];
  const delays = [0, 0.2, 0.4, 0.1, 0.3];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="eq-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="50%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#7EC8E3" />
        </linearGradient>
      </defs>
      {barWidths.map((w, i) => (
        <motion.rect
          key={i}
          x={i * 12 + 2}
          width={w}
          fill="url(#eq-grad)"
          rx={0}
          animate={{
            height: [heights[i] * 0.3, heights[i] * 0.6, heights[i] * 0.3],
            y: [60 - heights[i] * 0.3, 60 - heights[i] * 0.6, 60 - heights[i] * 0.3],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: delays[i],
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  );
}

// Square dot grid
export function DotGrid({ rows = 6, cols = 6, dotSize = 4, gap = 10, color = 'var(--color-primary)', opacity = 0.4, style = {} }) {
  const w = cols * (dotSize + gap) - gap;
  const h = rows * (dotSize + gap) - gap;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ opacity, ...style }} aria-hidden="true">
      {Array.from({ length: rows * cols }).map((_, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;
        return (
          <rect
            key={idx}
            x={col * (dotSize + gap)}
            y={row * (dotSize + gap)}
            width={dotSize}
            height={dotSize}
            fill={color}
          />
        );
      })}
    </svg>
  );
}

// Offset colored block (decorative)
export function OffsetBlock({ width = 60, height = 60, gradient = 'linear-gradient(135deg, #FFDEE9, #FF6B9D)', rotation = 0, opacity = 0.5, style = {} }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        width,
        height,
        background: gradient,
        opacity,
        transform: `rotate(${rotation}deg)`,
        position: 'absolute',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

// Corner brackets decoration
export function CornerBrackets({ size = 24, color = 'var(--color-primary)', position = 'top-left', style = {} }) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        position: 'absolute',
        top: isTop ? -2 : 'auto',
        bottom: isTop ? 'auto' : -2,
        left: isLeft ? -2 : 'auto',
        right: isLeft ? 'auto' : -2,
        ...style,
      }}
      aria-hidden="true"
    >
      <path
        d={isTop && isLeft ? 'M0 12 L0 0 L12 0' :
           isTop && !isLeft ? 'M12 0 L24 0 L24 12' :
           !isTop && isLeft ? 'M0 12 L0 24 L12 24' :
           'M12 24 L24 24 L24 12'}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Vertical rotated text
export function VerticalText({ text, fontSize = 14, color = 'var(--color-text-secondary)', opacity = 0.5, style = {} }) {
  return (
    <div
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontFamily: "'Baloo 2', sans-serif",
        fontSize,
        fontWeight: 700,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color,
        opacity,
        userSelect: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}

// Line accent (horizontal gradient line)
export function LineAccent({ width = '100%', height = 3, style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        background: 'var(--gradient-accent)',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
