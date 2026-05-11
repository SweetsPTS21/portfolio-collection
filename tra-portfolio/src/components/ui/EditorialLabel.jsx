import { useReveal } from "../../hooks/useReveal";

/**
 * EditorialLabel — Section label kiểu tạp chí
 * Ví dụ: "§ 01 — About"
 */
export default function EditorialLabel({ section, title, className = "" }) {
  const { ref, isVisible } = useReveal({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "visible" : ""} ${className}`}
      style={{ display: "flex", alignItems: "center", gap: 16 }}
    >
      <span className="editorial-label" style={{ color: "var(--color-accent)" }}>
        §&nbsp;{section}
      </span>
      <span
        style={{
          width: 32,
          height: 1,
          background: "var(--color-border-strong)",
          display: "inline-block",
        }}
      />
      <span className="editorial-label">{title}</span>
    </div>
  );
}
