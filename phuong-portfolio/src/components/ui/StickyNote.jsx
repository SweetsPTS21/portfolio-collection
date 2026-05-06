const colorMap = {
  yellow: 'var(--sticky-yellow)',
  blue: 'var(--sticky-blue)',
  pink: 'var(--sticky-pink)',
  green: 'var(--sticky-green)',
};

export default function StickyNote({ title, children, color = 'yellow', className = '' }) {
  return (
    <article
      className={`sticky-note p-4 ${className}`}
      style={{ background: colorMap[color] ?? colorMap.yellow }}
    >
      <h3 className="m-0 text-base font-extrabold text-[var(--ink)]">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{children}</div>
    </article>
  );
}
