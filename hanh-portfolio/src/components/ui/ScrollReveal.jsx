import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children, className = '' }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 18, scale: 0.98 }}
      style={{
        opacity: spring(1, { stiffness: 90, damping: 18 }),
        y: spring(0, { stiffness: 90, damping: 18 }),
        scale: spring(1, { stiffness: 90, damping: 18 }),
      }}
    >
      {({ opacity, y, scale }) => (
        <div
          className={className}
          style={{
            opacity,
            transform: `translateY(${y}px) scale(${scale})`,
          }}
        >
          {children}
        </div>
      )}
    </Motion>
  );
}
