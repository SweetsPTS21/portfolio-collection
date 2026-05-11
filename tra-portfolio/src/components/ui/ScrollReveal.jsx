import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children, className = '', style, ...props }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 12 }}
      style={{ opacity: spring(1, { stiffness: 120, damping: 22 }), y: spring(0) }}
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
