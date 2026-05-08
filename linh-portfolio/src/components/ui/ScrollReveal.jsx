import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 18 }}
      style={{
        opacity: spring(1, { stiffness: 88, damping: 18 }),
        y: spring(0, { stiffness: 88, damping: 18 }),
      }}
    >
      {({ opacity, y }) => (
        <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>
      )}
    </Motion>
  );
}
