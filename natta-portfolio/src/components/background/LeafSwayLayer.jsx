export default function LeafSwayLayer() {
  const leaves = [
    { x: '10%', y: '30%', size: 48, delay: '0s', duration: '4s' },
    { x: '75%', y: '55%', size: 40, delay: '1s', duration: '5s' },
    { x: '60%', y: '20%', size: 36, delay: '2s', duration: '4.5s' },
    { x: '25%', y: '70%', size: 44, delay: '0.5s', duration: '5.5s' },
    { x: '88%', y: '40%', size: 32, delay: '1.5s', duration: '4.2s' },
  ];

  return (
    <div className="leaf-sway-layer">
      {leaves.map((leaf, i) => (
        <div
          key={i}
          className="sway-leaf"
          style={{
            left: leaf.x,
            top: leaf.y,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
        >
          <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6 8 4 14 6 20C8 18 10 16 12 14C14 16 16 18 18 20C20 14 18 8 12 2Z"
              fill="rgba(132, 226, 168, 0.35)"
              stroke="rgba(132, 226, 168, 0.5)"
              strokeWidth="0.5"
            />
            <line x1="12" y1="6" x2="12" y2="18" stroke="rgba(132, 226, 168, 0.4)" strokeWidth="0.5" />
          </svg>
        </div>
      ))}

      <style>{`
        .leaf-sway-layer {
          position: absolute;
          inset: 0;
        }
        .sway-leaf {
          position: absolute;
          animation: leafSway 4s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
}
