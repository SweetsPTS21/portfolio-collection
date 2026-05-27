import React, { useEffect, useState } from 'react';

export default function LeafDecoration() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate 12 random leaves with different animation delays, speeds, rotations, sizes and positions
    const leafTypes = [1, 2, 3];
    const generatedLeaves = Array.from({ length: 12 }).map((_, index) => {
      const type = leafTypes[index % leafTypes.length];
      const startX = Math.random() * 100; // 0 to 100vw
      const delay = Math.random() * -20; // negative delay to start immediately at random points
      const duration = 12 + Math.random() * 15; // 12s to 27s
      const scale = 0.5 + Math.random() * 0.7; // 0.5 to 1.2
      const opacity = 0.3 + Math.random() * 0.45; // 0.3 to 0.75

      return {
        id: index,
        type,
        startX,
        delay,
        duration,
        scale,
        opacity
      };
    });

    setLeaves(generatedLeaves);
  }, []);

  // SVG paths for inline leaf shapes based on leaf-falling-set.svg
  const renderLeafSvg = (type) => {
    if (type === 1) {
      return (
        <svg viewBox="0 0 100 100" width="40" height="40">
          <path d="M50,15 C65,30 65,55 50,75 C35,55 35,30 50,15 Z" fill="#A3B18A" fillOpacity="0.8" stroke="#588157" strokeWidth="1.5" />
          <path d="M50,15 L50,75" stroke="#588157" strokeWidth="1" />
        </svg>
      );
    } else if (type === 2) {
      return (
        <svg viewBox="0 0 100 100" width="30" height="50">
          <path d="M50,10 C62,35 58,65 50,85 C42,65 38,35 50,10 Z" fill="#588157" fillOpacity="0.7" stroke="#3A5A40" strokeWidth="1.5" />
          <path d="M50,10 L50,85" stroke="#3A5A40" strokeWidth="1" />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 100 100" width="40" height="40">
          <path d="M50,15 C58,22 62,25 60,32 C58,35 55,36 57,42 C59,48 57,52 54,58 C51,64 50,72 50,75 C50,72 49,64 46,58 C43,52 41,48 43,42 C45,36 42,35 40,32 C38,25 42,22 50,15 Z" fill="#DAD7CD" fillOpacity="0.9" stroke="#A3B18A" strokeWidth="1.5" />
          <path d="M50,15 L50,75" stroke="#A3B18A" stroke-width="1" />
        </svg>
      );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-item"
          style={{
            left: `${leaf.startX}%`,
            opacity: leaf.opacity,
            animation: `leaf-fall-y ${leaf.duration}s linear infinite, leaf-fall-x ${leaf.duration / 2}s ease-in-out infinite alternate`,
            animationDelay: `${leaf.delay}s`,
            transform: `scale(${leaf.scale})`
          }}
        >
          {renderLeafSvg(leaf.type)}
        </div>
      ))}
    </div>
  );
}
