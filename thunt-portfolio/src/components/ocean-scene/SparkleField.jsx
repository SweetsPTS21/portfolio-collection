import React, { useMemo } from 'react';

// Deterministic sparkle positions using seeded pseudo-random
function generateSparkles(count) {
  const sparkles = [];
  const seed = 42;
  for (let i = 0; i < count; i++) {
    // Simple LCG for deterministic layout
    const x = ((seed * (i * 7 + 13)) % 97) + 1.5; // 1.5–98.5%
    const y = ((seed * (i * 11 + 7)) % 20) + 52;  // 52–72% (water surface, Phase 2 ocean zone)
    const size = ((i * 3 + 1) % 5) + 3;           // 3–8px
    const delay = ((i * 0.37) % 3).toFixed(2);
    const duration = (((i * 0.5 + 2) % 2.5) + 2).toFixed(1);
    sparkles.push({ x, y, size, delay, duration });
  }
  return sparkles;
}

const SPARKLES = generateSparkles(16);

export default function SparkleField() {
  return (
    <div className="sparkle-field">
      {SPARKLES.map((s, i) => (
        <div
          key={i}
          className="sparkle-dot"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
