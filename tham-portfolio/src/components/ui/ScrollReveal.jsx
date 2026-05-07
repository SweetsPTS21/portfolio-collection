import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 24 }}
      style={{ opacity: spring(1, { stiffness: 80, damping: 18 }), y: spring(0) }}
    >
      {({ opacity, y }) => (
        <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>
      )}
    </Motion>
  );
}
