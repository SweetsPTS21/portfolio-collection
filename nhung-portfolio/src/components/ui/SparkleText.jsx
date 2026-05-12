import React from 'react';

export default function SparkleText({ children, as: Component = 'span', className = '' }) {
  return React.createElement(
    Component,
    { className: `sparkle-text ${className}` },
    <span aria-hidden="true" className="sparkle-text__dot sparkle-text__dot--left" />,
    children,
    <span aria-hidden="true" className="sparkle-text__dot sparkle-text__dot--right" />,
  );
}
