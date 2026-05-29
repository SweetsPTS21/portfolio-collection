export default function GlassBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-heading font-semibold text-text-secondary ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
      }}
    >
      {children}
    </span>
  );
}
