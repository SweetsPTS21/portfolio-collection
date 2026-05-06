import { Motion, spring } from 'react-motion';

export default function MotionPanel({ children, className = '', y = 24 }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, scale: 0.96, y }}
      style={{
        opacity: spring(1, { stiffness: 120, damping: 18 }),
        scale: spring(1, { stiffness: 120, damping: 18 }),
        y: spring(0, { stiffness: 120, damping: 18 }),
      }}
    >
      {({ opacity, scale, y }) => (
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
