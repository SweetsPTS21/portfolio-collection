export function RailTag({ children, tone = "violet" }) {
  return <span className={`rail-tag ${tone}`}>{children}</span>;
}

