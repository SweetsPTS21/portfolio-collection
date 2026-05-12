import { flowerAssets } from '../../data/portfolioData.js';

const petals = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  size: `${32 + (index % 4) * 8}px`,
  drift: `${index % 2 === 0 ? 36 : -42}px`,
  spin: `${220 + (index % 5) * 44}deg`,
  delay: `${(index % 7) * 0.9}s`,
  duration: `${8 + (index % 5)}s`,
}));

const blooms = [
  {
    id: 'tulip',
    src: flowerAssets.flowerTulip,
    x: '-28px',
    y: '18vh',
    size: '150px',
    delay: '0s',
    duration: '18s',
  },
  {
    id: 'sakura',
    src: flowerAssets.flowerSakura,
    x: 'calc(100vw - 138px)',
    y: '10vh',
    size: '132px',
    delay: '-4s',
    duration: '21s',
  },
  {
    id: 'lavender',
    src: flowerAssets.flowerLavender,
    x: '4vw',
    y: '64vh',
    size: '118px',
    delay: '-8s',
    duration: '24s',
  },
  {
    id: 'sunflower',
    src: flowerAssets.flowerSunflower,
    x: 'calc(100vw - 174px)',
    y: '58vh',
    size: '168px',
    delay: '-2s',
    duration: '20s',
  },
  {
    id: 'line-art',
    src: flowerAssets.botanicalLineArt,
    x: '42vw',
    y: '76vh',
    size: '210px',
    delay: '-11s',
    duration: '27s',
  },
];

const sparkles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 23 + 7) % 96}%`,
  top: `${(index * 17 + 11) % 86}%`,
  delay: `${index * -0.45}s`,
  duration: `${6 + (index % 4)}s`,
}));

export default function FloralBackground() {
  return (
    <div className="floral-background" aria-hidden="true">
      <img className="floral-pattern" src={flowerAssets.floralPattern} alt="" />
      <div className="floating-bloom-layer">
        {blooms.map((bloom) => (
          <img
            key={bloom.id}
            className="floating-bloom"
            src={bloom.src}
            alt=""
            style={{
              '--bloom-x': bloom.x,
              '--bloom-y': bloom.y,
              '--bloom-size': bloom.size,
              '--bloom-delay': bloom.delay,
              '--bloom-duration': bloom.duration,
            }}
          />
        ))}
      </div>
      <div className="sparkle-layer">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="market-sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
            }}
          />
        ))}
      </div>
      <div className="petal-layer">
        {petals.map((petal) => (
          <img
            key={petal.id}
            className="falling-petal"
            src={flowerAssets.petalsAndLeaves}
            alt=""
            style={{
              left: petal.left,
              '--petal-size': petal.size,
              '--petal-drift': petal.drift,
              '--petal-spin': petal.spin,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
