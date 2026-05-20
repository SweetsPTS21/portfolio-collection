export default function PuzzleBadge({ children, tone = 'blue' }) {
  return <span className={`puzzle-badge puzzle-badge--${tone}`}>{children}</span>;
}
