import React from 'react';
import waveSvg from '@/assets/ocean-wave-diary/wave-layers-sunset.svg';

const WAVES = [
  { cls: 'wave-layer wave-layer-1', delay: '0s' },
  { cls: 'wave-layer wave-layer-2', delay: '-2s' },
  // { cls: 'wave-layer wave-layer-3', delay: '-4s' },
  { cls: 'wave-layer wave-layer-4', delay: '-6s' },
  { cls: 'wave-layer wave-layer-5', delay: '-8s' },
];

export default function WaveLayers() {
  return (
    <>
      {WAVES.map((w, i) => (
        <div
          key={i}
          className={w.cls}
          style={{
            backgroundImage: `url(${waveSvg})`,
            backgroundSize: '50% 100%',
            animationDelay: w.delay,
          }}
        />
      ))}
    </>
  );
}
