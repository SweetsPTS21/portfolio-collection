export default function LighthouseSummaryCard({ title, label, tone = "aqua", children }) {
  return (
    <article className={`lighthouse-summary-card ice-card lighthouse-${tone}`}>
      <div className="lighthouse-beam" aria-hidden="true" />
      {label ? <span>{label}</span> : null}
      <h3>{title}</h3>
      <div className="summary-copy">{children}</div>
    </article>
  );
}
