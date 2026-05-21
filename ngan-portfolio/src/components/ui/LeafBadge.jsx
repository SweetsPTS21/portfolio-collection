import { Leaf } from 'lucide-react';

export default function LeafBadge({ label, color = 'var(--forest-primary)' }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 14px',
        background: 'var(--bg-container)',
        border: `1px solid ${color}40`,
        borderLeft: `3px solid ${color}`,
        borderRadius: 14,
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--text-base)',
      }}
    >
      <Leaf size={14} color={color} />
      {label}
    </span>
  );
}
