import React from 'react';
import shootingStar from '../assets/shooting-star.svg';

const stars = [
  { id: 1, top: 8, left: 78, size: 210, delay: 0, duration: 5.8 },
  { id: 2, top: 24, left: 92, size: 150, delay: 1.7, duration: 6.6 },
  { id: 3, top: 52, left: 84, size: 190, delay: 3.1, duration: 7.2 },
  { id: 4, top: 72, left: 68, size: 128, delay: 4.4, duration: 6.1 },
];

export default function ShootingStars() {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {stars.map((star) => (
        <img
          key={star.id}
          className="shooting-star"
          src={shootingStar}
          alt=""
          style={{
            '--star-top': `${star.top}%`,
            '--star-left': `${star.left}%`,
            '--star-size': `${star.size}px`,
            '--star-delay': `${star.delay}s`,
            '--star-duration': `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
