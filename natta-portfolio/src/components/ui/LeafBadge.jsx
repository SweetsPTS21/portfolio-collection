import { Leaf } from 'lucide-react';

export default function LeafBadge({ children }) {
  return (
    <span className="leaf-badge">
      <Leaf size={14} />
      {children}

      <style>{`
        .leaf-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          background: rgba(132, 226, 168, 0.15);
          color: #3d8b5e;
          border-radius: 20px;
          font-size: 0.88rem;
          font-weight: 600;
        }
      `}</style>
    </span>
  );
}
