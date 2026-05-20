export default function ChapterTransitionWrapper({ children, className = '' }) {
  return <div className={`chapter-transition ${className}`.trim()}>{children}</div>;
}
