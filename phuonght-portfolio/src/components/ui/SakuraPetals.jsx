import React from 'react';

const PETALS_COUNT = 18;

// Different shades of pastel sakura pink
const SAKURA_COLORS = [
  '#FFB6C1', // Light pink
  '#FFC0CB', // Pink
  '#FFB7C5', // Cherry blossom pink
  '#FFE4E1', // Misty rose
  '#FFA07A', // Light salmon (peach accent)
];

export default function SakuraPetals() {
  const petals = Array.from({ length: PETALS_COUNT }).map((_, index) => {
    const size = Math.random() * 12 + 10; // 10px to 22px
    const left = Math.random() * 110 - 5; // -5% to 105%
    const delay = Math.random() * 12; // 0s to 12s
    const duration = Math.random() * 6 + 8; // 8s to 14s
    const color = SAKURA_COLORS[index % SAKURA_COLORS.length];
    
    return {
      id: index,
      style: {
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        fill: color,
      }
    };
  });

  return (
    <div className="sakura-petal-layer" aria-hidden="true">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="sakura-petal"
          style={petal.style}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Beautiful organic cherry blossom petal shape with top notch */}
          <path d="M12 24 C8 20, 2 15, 2 9 C2 4, 6 2, 9 6 C10.5 8, 13.5 8, 15 6 C18 2, 22 4, 22 9 C22 15, 16 20, 12 24 Z" />
        </svg>
      ))}
    </div>
  );
}
