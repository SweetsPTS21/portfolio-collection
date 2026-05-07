import CloudLayer from './CloudLayer.jsx';

const stars = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${8 + ((index * 19) % 58)}%`,
  delay: `${(index % 7) * 0.28}s`,
}));

export default function SkyBackground() {
  return (
    <div className="sky-background" aria-hidden="true">
      <div className="star-field">
        {stars.map((star) => (
          <span
            className="star"
            key={star.id}
            style={{ left: star.left, top: star.top, animationDelay: star.delay }}
          />
        ))}
      </div>
      <CloudLayer variant="near" />
      <CloudLayer variant="far" />
    </div>
  );
}
