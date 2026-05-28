import { useEffect, useState } from 'react';

export default function DewDropLayer() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? 4 : 8;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 3,
      size: 6 + Math.random() * 8,
    }));
    setDrops(generated);
  }, []);

  return (
    <div className="dew-layer">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="dew-drop"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            width: `${drop.size}px`,
            height: `${drop.size * 2}px`,
          }}
        />
      ))}

      <style>{`
        .dew-layer {
          position: absolute;
          inset: 0;
        }
        .dew-drop {
          position: absolute;
          top: -20px;
          background: linear-gradient(
            180deg,
            rgba(157, 228, 255, 0.6) 0%,
            rgba(157, 228, 255, 0.2) 100%
          );
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          animation: dewSlide 5s ease-in infinite;
        }
      `}</style>
    </div>
  );
}
