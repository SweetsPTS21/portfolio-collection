import { motion, useScroll, useTransform } from 'framer-motion';

export default function StrawberryVines() {
  const { scrollYProgress } = useScroll();

  // Ripen effect: green → pink → red as user scrolls
  const berryColor1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['rgba(132, 226, 168, 0.6)', 'rgba(255, 209, 216, 0.6)', 'rgba(255, 160, 171, 0.7)', 'rgba(255, 138, 154, 0.8)']
  );
  const berryColor2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ['rgba(132, 226, 168, 0.5)', 'rgba(255, 160, 171, 0.5)', 'rgba(255, 138, 154, 0.6)', 'rgba(255, 107, 125, 0.7)']
  );

  const vines = [
    { x: '5%', delay: '0s' },
    { x: '85%', delay: '1.5s' },
    { x: '92%', delay: '3s' },
  ];

  return (
    <div className="vines-layer">
      {vines.map((vine, i) => (
        <div
          key={i}
          className="vine-group"
          style={{ left: vine.x, animationDelay: vine.delay }}
        >
          <svg width="60" height="200" viewBox="0 0 60 200" fill="none">
            {/* Vine stem */}
            <path
              d="M30 0 C30 40, 20 60, 30 100 C40 140, 25 160, 30 200"
              stroke="rgba(132, 226, 168, 0.5)"
              strokeWidth="2"
              fill="none"
            />
            {/* Leaves */}
            <ellipse cx="20" cy="50" rx="10" ry="6" fill="rgba(132, 226, 168, 0.4)" transform="rotate(-20 20 50)" />
            <ellipse cx="40" cy="90" rx="10" ry="6" fill="rgba(132, 226, 168, 0.35)" transform="rotate(15 40 90)" />
            <ellipse cx="22" cy="140" rx="9" ry="5" fill="rgba(132, 226, 168, 0.3)" transform="rotate(-10 22 140)" />
            {/* Strawberries — color changes with scroll */}
            <motion.ellipse cx="38" cy="130" rx="8" ry="10" style={{ fill: berryColor1 }} />
            <motion.ellipse cx="25" cy="175" rx="7" ry="9" style={{ fill: berryColor2 }} />
            {/* Seeds on berries */}
            <circle cx="36" cy="128" r="1" fill="rgba(255,225,122,0.6)" />
            <circle cx="40" cy="132" r="1" fill="rgba(255,225,122,0.6)" />
            <circle cx="37" cy="135" r="1" fill="rgba(255,225,122,0.6)" />
            <circle cx="23" cy="173" r="1" fill="rgba(255,225,122,0.5)" />
            <circle cx="27" cy="177" r="1" fill="rgba(255,225,122,0.5)" />
          </svg>
        </div>
      ))}

      <style>{`
        .vines-layer {
          position: absolute;
          inset: 0;
        }
        .vine-group {
          position: absolute;
          top: -10px;
          animation: leafSway 6s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
}
