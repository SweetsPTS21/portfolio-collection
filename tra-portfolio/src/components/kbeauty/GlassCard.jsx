import { createElement } from 'react';

export default function GlassCard({ as = 'article', className = '', accent, children, ...props }) {
  return createElement(
    as,
    { ...props, className: `glass-card ${className}`.trim(), 'data-accent': accent },
    children,
  );
}
