import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BeeFloating() {
  const [isMobile, setIsMobile] = useState(false);

  // Cursor-following motion values
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth * 0.7 : 800);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight * 0.2 : 150);

  // Spring for smooth delayed follow
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1.5 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1.5 });

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(mobile);
    if (mobile) return;

    const handleMouseMove = (e) => {
      // Offset so bee doesn't sit directly on cursor
      mouseX.set(e.clientX - 40);
      mouseY.set(e.clientY - 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Mobile: use path animation fallback
  if (isMobile) {
    return (
      <motion.div
        className="bee-container"
        animate={{
          x: [0, 30, 60, 40, 15, 0],
          y: [0, -15, 5, 20, 10, 0],
          rotate: [0, 5, -3, 4, -2, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BeeBody />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bee-container bee-cursor"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{ rotate: [0, 3, -3, 2, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BeeBody />
      </motion.div>

      <style>{`
        .bee-cursor {
          position: fixed !important;
          top: 0;
          left: 0;
          pointer-events: none;
        }
      `}</style>
    </motion.div>
  );
}

function BeeBody() {
  return (
    <>
      <svg width="96" height="80" viewBox="0 0 48 40" fill="none" className="bee-svg">
        {/* Body */}
        <ellipse cx="24" cy="24" rx="12" ry="10" fill="#FFE17A" />
        {/* Stripes */}
        <rect x="18" y="20" width="12" height="3" rx="1.5" fill="#3D2B33" opacity="0.6" />
        <rect x="17" y="25" width="14" height="3" rx="1.5" fill="#3D2B33" opacity="0.6" />
        {/* Head */}
        <circle cx="24" cy="14" r="6" fill="#3D2B33" opacity="0.7" />
        {/* Eyes */}
        <circle cx="22" cy="13" r="2" fill="white" />
        <circle cx="26" cy="13" r="2" fill="white" />
        <circle cx="22.5" cy="13.5" r="1" fill="#3D2B33" />
        <circle cx="26.5" cy="13.5" r="1" fill="#3D2B33" />
        {/* Wings */}
        <ellipse cx="16" cy="16" rx="8" ry="5" fill="rgba(157,228,255,0.4)" className="bee-wing-left" />
        <ellipse cx="32" cy="16" rx="8" ry="5" fill="rgba(157,228,255,0.4)" className="bee-wing-right" />
        {/* Antennae */}
        <line x1="22" y1="9" x2="19" y2="4" stroke="#3D2B33" strokeWidth="1" opacity="0.6" />
        <line x1="26" y1="9" x2="29" y2="4" stroke="#3D2B33" strokeWidth="1" opacity="0.6" />
        <circle cx="19" cy="4" r="1.5" fill="#3D2B33" opacity="0.5" />
        <circle cx="29" cy="4" r="1.5" fill="#3D2B33" opacity="0.5" />
      </svg>

      <style>{`
        .bee-container {
          position: absolute;
          top: 15%;
          right: 20%;
          z-index: 3;
        }
        .bee-wing-left, .bee-wing-right {
          animation: wingBuzz 0.08s linear infinite alternate;
          transform-origin: center;
        }
        .bee-wing-right {
          animation-delay: 0.04s;
        }
        @media (max-width: 768px) {
          .bee-container {
            top: 10%;
            right: 10%;
            transform: scale(0.7);
          }
        }
      `}</style>
    </>
  );
}
