export default function FishTag({ children, color = 'var(--fish-gold)' }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: `${color}20`,
        color: 'var(--ocean-deep)',
        border: `1px solid ${color}40`,
      }}
    >
      {children}
    </span>
  );
}
