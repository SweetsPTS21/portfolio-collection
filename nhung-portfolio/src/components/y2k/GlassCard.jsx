import React from 'react';

export default function GlassCard({
  children,
  className = '',
  as: Component = 'article',
  ...props
}) {
  return React.createElement(
    Component,
    { className: `glass-card ${className}`, ...props },
    <span className="glass-card__shine" aria-hidden="true" />,
    children,
  );
}
