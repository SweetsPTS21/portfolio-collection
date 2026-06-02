export default function LighthouseSummaryCard({ title, children }) {
  return (
    <article className="lighthouse-summary-card ice-card">
      <div className="lighthouse-beam" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
