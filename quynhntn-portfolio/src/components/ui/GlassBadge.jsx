export default function GlassBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-heading font-semibold ${className}`}
      style={{
        background: '#FFFFFF',
        border: '1.5px solid rgba(212, 96, 126, 0.28)',
        color: '#4A4A4A',
        boxShadow: '0 2px 8px rgba(212, 96, 126, 0.08)',
      }}
    >
      {children}
    </span>
  );
}

