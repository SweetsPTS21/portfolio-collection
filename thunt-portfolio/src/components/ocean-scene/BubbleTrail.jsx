import React from 'react';

const BUBBLES = [
  { left: '15%',  size: 8,  delay: '0s',    duration: '6s'  },
  { left: '28%',  size: 5,  delay: '1.5s',  duration: '7s'  },
  { left: '42%',  size: 10, delay: '0.8s',  duration: '8s'  },
  { left: '60%',  size: 6,  delay: '2.2s',  duration: '6.5s'},
  { left: '75%',  size: 8,  delay: '0.3s',  duration: '7.5s'},
  { left: '88%',  size: 4,  delay: '1.8s',  duration: '9s'  },
];

export default function BubbleTrail() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '4%',
        left: 0,
        right: 0,
        height: '20%',
        zIndex: 8,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: b.left,
            bottom: 0,
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            border: '1.5px solid rgba(251,254,255,0.7)',
            background: 'rgba(167,228,255,0.25)',
            animation: `bubble-rise ${b.duration} ease-in infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
