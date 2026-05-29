const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${6 + ((index * 13) % 88)}%`,
  delay: `${(index % 9) * 0.42}s`,
  duration: `${7 + (index % 5)}s`,
  scale: 0.65 + (index % 5) * 0.11,
}));

export function PetalSmokeLayer() {
  return (
    <div className="petal-smoke-layer" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={particle.id % 3 === 0 ? "petal sparkle" : "petal"}
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            transform: `scale(${particle.scale})`,
          }}
        />
      ))}
    </div>
  );
}

