export default function LightRayOverlay() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0"
          style={{
            left: `${15 + i * 18}%`,
            width: `${60 + i * 20}px`,
            height: '70vh',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(168,232,248,0.1) 60%, transparent 100%)',
            transform: `rotate(${-5 + i * 3}deg)`,
            animation: `lightRayShimmer ${4 + i * 1.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
            borderRadius: '0 0 50% 50%',
          }}
        />
      ))}
    </div>
  );
}
