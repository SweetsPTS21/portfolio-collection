import { useReveal } from "../../hooks/useReveal";

/**
 * RevealText — Wrap bất kỳ element nào với clip-path reveal animation
 * @param {string} animClass — "reveal-text" | "fade-up" | "fade-in"
 * @param {string} delay — CSS class: "delay-1" ... "delay-6"
 */
export default function RevealText({
  children,
  as: Tag = "div",
  animClass = "fade-up",
  delay = "",
  className = "",
  style = {},
  threshold = 0.1,
}) {
  const { ref, isVisible } = useReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${isVisible ? "visible" : ""} ${delay} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
