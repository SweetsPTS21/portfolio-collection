import React from 'react';
import sunlitOceanScene from '../../assets/sunlit-ocean-life/sunlit-ocean-scene.svg';
import cuteFishSchool from '../../assets/sunlit-ocean-life/cute-fish-school.svg';
import seaweedCoralGarden from '../../assets/sunlit-ocean-life/seaweed-coral-garden.png';
import sailingBoat from '../../assets/sunlit-ocean-life/sailing-boat.svg';
import bubbleSparkles from '../../assets/sunlit-ocean-life/bubble-sparkles.svg';
import shellStickers from '../../assets/sunlit-ocean-life/shell-stickers.svg';
import waveRibbons from '../../assets/sunlit-ocean-life/wave-ribbons.svg';
import sunBadge from '../../assets/sunlit-ocean-life/sun-badge.svg';

const bubbles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  size: 6 + (index % 6) * 4,
  delay: `${(index % 10) * -0.55}s`,
  duration: `${6 + (index % 5)}s`,
}));

export default function SunlitOceanBackground() {
  return (
    <div className="sunlit-stage" aria-hidden="true">
      <img className="sunlit-ocean-scene" src={sunlitOceanScene} alt="" />
      <img className="sun-badge sun-sparkle" src={sunBadge} alt="" />
      <img
        className="wave-ribbons wave-dance wave-ribbons-a"
        src={waveRibbons}
        alt=""
      />
      <img
        className="wave-ribbons wave-dance wave-ribbons-b"
        src={waveRibbons}
        alt=""
      />
      <img
        className="cute-fish-school fish-swim fish-school-a"
        src={cuteFishSchool}
        alt=""
      />
      <img
        className="cute-fish-school fish-swim fish-school-b"
        src={cuteFishSchool}
        alt=""
      />
      <img className="sailing-boat boat-bob" src={sailingBoat} alt="" />
      <img
        className="seaweed-coral-garden seaweed-sway"
        src={seaweedCoralGarden}
        alt=""
      />
      <img
        className="bubble-sparkles sparkle-drift"
        src={bubbleSparkles}
        alt=""
      />
      <img
        className="shell-stickers sticker-float"
        src={shellStickers}
        alt=""
      />
      <div className="bubble-field">
        {bubbles.map((bubble) => (
          <span
            className="bubble-rise"
            key={bubble.id}
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
