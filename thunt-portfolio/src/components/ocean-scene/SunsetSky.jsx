import React from 'react';
import skyPanorama from '@/assets/ocean-wave-diary/sunset-sky-panorama.svg';

export default function SunsetSky() {
  return (
    <div className="ocean-sky">
      <img
        src={skyPanorama}
        alt=""
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />
      {/* Sun glow pulse overlay */}
      <div className="ocean-sun" />
    </div>
  );
}
