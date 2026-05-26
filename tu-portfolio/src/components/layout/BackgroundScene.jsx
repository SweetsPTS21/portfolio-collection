import { portfolioData } from '../../data/portfolioData.js';

export default function BackgroundScene() {
  const { decorations } = portfolioData.visualAssets;

  return (
    <div className="background-scene" aria-hidden="true">
      <div className="background-scene__wash" />
      <div className="background-scene__motion-field">
        <span className="background-scene__streak is-one" />
        <span className="background-scene__streak is-two" />
        <span className="background-scene__streak is-three" />
        <span className="background-scene__spark is-one" />
        <span className="background-scene__spark is-two" />
        <span className="background-scene__spark is-three" />
        <span className="background-scene__spark is-four" />
        <span className="background-scene__spark is-five" />
        <span className="background-scene__spark is-six" />
      </div>
      <div className="background-scene__decor-layer">
        {decorations.map((decoration) => (
          <img
            key={decoration.id}
            className={`background-scene__decor ${decoration.className}`}
            src={decoration.src}
            alt={decoration.alt}
            loading="lazy"
          />
        ))}
      </div>
      <div className="background-scene__paper background-scene__paper--left" />
      <div className="background-scene__paper background-scene__paper--right" />
      <div className="background-scene__flower background-scene__flower--one">
        ✿
      </div>
      <div className="background-scene__flower background-scene__flower--two">
        ✽
      </div>
      <div className="background-scene__dots background-scene__dots--left" />
      <div className="background-scene__dots background-scene__dots--right" />
    </div>
  );
}
