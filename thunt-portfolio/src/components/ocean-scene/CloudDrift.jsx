import React from 'react';
import cloudSvg from '@/assets/ocean-wave-diary/pink-cloud-clusters.svg';

const CLOUDS = [
  { cls: 'cloud-shape cloud-1', top: '10%', width: 240, height: 90, delay: '0s', duration: '36s' },
  { cls: 'cloud-shape cloud-2', top: '20%', width: 180, height: 70, delay: '-12s', duration: '28s' },
  { cls: 'cloud-shape cloud-3', top: '6%', width: 200, height: 80, delay: '-22s', duration: '44s' },
];

export default function CloudDrift() {
  return (
    <div className="cloud-layer">
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className={c.cls}
          style={{
            top: c.top,
            width: c.width,
            height: c.height,
            animationDelay: c.delay,
            animationDuration: c.duration,
            background: 'none',
            filter: 'none',
          }}
        >
          <img
            src={cloudSvg}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
