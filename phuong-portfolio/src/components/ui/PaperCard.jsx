export default function PaperCard({ title, children, className = '' }) {
  return (
    <article className={`paper-card p-5 ${className}`}>
      {title ? (
        <h3 className="m-0 font-['Space_Grotesk'] text-xl font-bold text-[var(--ink)]">
          {title}
        </h3>
      ) : null}
      <div className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{children}</div>
    </article>
  );
}
