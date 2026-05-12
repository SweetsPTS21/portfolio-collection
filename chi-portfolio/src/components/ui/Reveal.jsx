import { Motion, spring } from "react-motion";

export default function Reveal({ children, className = "" }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 26 }}
      style={{ opacity: spring(1), y: spring(0, { stiffness: 88, damping: 18 }) }}
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
