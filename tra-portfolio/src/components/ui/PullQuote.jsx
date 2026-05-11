import { useReveal } from "../../hooks/useReveal";

/**
 * PullQuote — Trích dẫn lớn kiểu tạp chí editorial
 */
export default function PullQuote({ quote, attribution }) {
  const { ref, isVisible } = useReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "visible" : ""}`}
      style={{
        borderLeft: "3px solid var(--color-ink)",
        paddingLeft: 40,
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      <blockquote
        className="pull-quote"
        style={{ margin: 0, color: "var(--color-ink)" }}
      >
        "{quote}"
      </blockquote>
      {attribution && (
        <p
          className="editorial-label"
          style={{ marginTop: 20, color: "var(--color-muted)" }}
        >
          — {attribution}
        </p>
      )}
    </div>
  );
}
