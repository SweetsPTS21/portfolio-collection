import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children, className = '', style, ...props }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 18 }}
      style={{
        opacity: spring(1, { stiffness: 120, damping: 20 }),
        y: spring(0, { stiffness: 110, damping: 18 }),
      }}
    >
      {({ opacity, y }) => (
        <div
          {...props}
          className={className}
          style={{ ...style, opacity, transform: `translateY(${y}px)` }}
        >
          {children}
        </div>
      )}
    </Motion>
  );
}
