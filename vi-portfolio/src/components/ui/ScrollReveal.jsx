import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 18 }}
      style={{
        opacity: spring(1, { stiffness: 70, damping: 18 }),
        y: spring(0, { stiffness: 70 + delay, damping: 18 }),
      }}
    >
      {({ opacity, y }) => (
        <div
          className={className}
          style={{ opacity, transform: `translateY(${y}px)` }}
        >
          {children}
        </div>
      )}
    </Motion>
  );
}
