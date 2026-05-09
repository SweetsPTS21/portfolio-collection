const bubbles = [
  ['pink', 'one'],
  ['mint', 'two'],
  ['lavender', 'three'],
  ['yellow', 'four'],
  ['blue', 'five'],
  ['pink', 'six'],
  ['mint', 'seven'],
  ['lavender', 'eight'],
];

export default function CandyBackground() {
  return (
    <div className="candy-background" aria-hidden="true">
      {bubbles.map(([tone, position]) => (
        <span
          className={`candy-bubble candy-bubble--${tone} candy-bubble--${position}`}
          key={position}
        />
      ))}
      <span className="candy-ribbon candy-ribbon--top" />
      <span className="candy-ribbon candy-ribbon--bottom" />
    </div>
  );
}
