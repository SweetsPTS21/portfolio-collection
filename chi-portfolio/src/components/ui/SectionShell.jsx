export default function SectionShell({
  id,
  issue,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="section-heading">
        <span className="issue-mark">{issue}</span>
        <div>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
