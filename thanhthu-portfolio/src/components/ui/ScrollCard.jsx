export default function ScrollCard({ children, className = '' }) {
  return <article className={`parchment-card ${className}`.trim()}>{children}</article>;
}
