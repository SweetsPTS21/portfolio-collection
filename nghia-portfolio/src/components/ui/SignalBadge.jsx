export default function SignalBadge({ children, tone = "cyan" }) {
  return <span className={`signal-badge signal-badge--${tone}`}>{children}</span>;
}
