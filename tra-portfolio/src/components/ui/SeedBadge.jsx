export default function SeedBadge({ children, tone = 'green' }) {
  return <span className={`seed-badge seed-badge--${tone}`}>{children}</span>;
}
