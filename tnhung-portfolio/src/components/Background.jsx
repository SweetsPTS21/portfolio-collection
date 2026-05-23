import React from 'react';
import planetOne from '../assets/planet-1.png';
import planetTwo from '../assets/planet-2.png';

const sparkles = [
  { id: 1, x: 8, y: 14, size: 3, delay: 0.1 },
  { id: 2, x: 20, y: 38, size: 2, delay: 0.8 },
  { id: 3, x: 35, y: 18, size: 4, delay: 1.2 },
  { id: 4, x: 47, y: 62, size: 2, delay: 0.4 },
  { id: 5, x: 62, y: 24, size: 3, delay: 1.5 },
  { id: 6, x: 74, y: 46, size: 2, delay: 0.2 },
  { id: 7, x: 88, y: 16, size: 4, delay: 1.1 },
  { id: 8, x: 92, y: 74, size: 3, delay: 0.7 },
  { id: 9, x: 13, y: 82, size: 2, delay: 1.8 },
  { id: 10, x: 52, y: 86, size: 3, delay: 0.9 },
];

function CircuitLines({ className }) {
  return (
    <svg className={className} width="360" height="180" viewBox="0 0 360 180" fill="none" aria-hidden="true">
      <path d="M8 48H84L116 16H188L205 34H276" stroke="rgba(255,255,255,0.68)" strokeWidth="1.4" />
      <path d="M42 132H128L176 84H246L282 48H350" stroke="rgba(255,255,255,0.44)" strokeWidth="1.2" />
      <circle cx="84" cy="48" r="3" fill="rgba(255,255,255,0.82)" />
      <circle cx="188" cy="16" r="3" fill="rgba(255,255,255,0.82)" />
      <circle cx="246" cy="84" r="2.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="350" cy="48" r="3" fill="rgba(255,255,255,0.72)" />
    </svg>
  );
}

export default function Background() {
  return (
    <div className="digital-bg" aria-hidden="true">
      <div className="digital-bg__wash" />
      <img className="digital-bg__planet digital-bg__planet--one" src={planetOne} alt="" />
      <img className="digital-bg__planet digital-bg__planet--two" src={planetTwo} alt="" />
      <CircuitLines className="decor-circuit digital-bg__circuit digital-bg__circuit--top" />
      <CircuitLines className="decor-circuit digital-bg__circuit digital-bg__circuit--bottom" />
      <div className="decor-dot-grid digital-bg__dots digital-bg__dots--left" />
      <div className="decor-dot-grid digital-bg__dots digital-bg__dots--right" />
      {sparkles.map((item) => (
        <span
          key={item.id}
          className="digital-bg__sparkle"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: item.size,
            height: item.size,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
