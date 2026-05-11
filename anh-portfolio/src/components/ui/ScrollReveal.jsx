import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 28, scale: 96 }}
      style={{
        opacity: spring(1, { stiffness: 90 - delay, damping: 18 }),
        y: spring(0, { stiffness: 90 - delay, damping: 18 }),
        scale: spring(100, { stiffness: 100 - delay, damping: 16 }),
      }}
    >
      {({ opacity, y, scale }) => (
        <div
          className={className}
          style={{
            opacity,
            transform: `translateY(${y}px) scale(${scale / 100})`,
          }}
        >
          {children}
        </div>
      )}
    </Motion>
  );
}
