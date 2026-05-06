/**
 * SectionTitle — "[01] Tiêu đề phần" kiểu tài liệu pháp lý.
 */
export default function SectionTitle({
  number,
  title,
  subtitle,
  centered = false,
}) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <span
        className="section-number"
        style={{ letterSpacing: "0.18em", display: "block", marginBottom: 10 }}
      >
        [{number}]
      </span>
      <h2
        style={{
          fontFamily: "'Libre Baskerville', serif",
          color: "var(--color-text)",
          marginBottom: subtitle ? 8 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: "var(--color-muted)", fontSize: 15, marginTop: 6 }}>
          {subtitle}
        </p>
      )}
      <div
        style={{
          marginTop: 20,
          width: centered ? 48 : 40,
          height: 2,
          background: "var(--color-primary)",
          marginLeft: centered ? "auto" : 0,
          marginRight: centered ? "auto" : 0,
        }}
      />
    </div>
  );
}
