import { BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import FlowerAsset from '../floral/FlowerAsset.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { flowerAssets, personalInfo } from '../../data/portfolioData.js';

const crateItems = [
  ['Fresh notes', flowerAssets.flowerTulip],
  ['AI practice', flowerAssets.flowerSakura],
  ['Legal study', flowerAssets.flowerLavender],
];

export default function ShopHeroSection() {
  return (
    <section id="hero" className="market-section shop-hero">
      <ScrollReveal className="shop-hero__stall">
        <div className="stall-awning" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="shop-sign">
          <span className="shop-sign__pin" aria-hidden="true" />
          Phạm Yến Vi Flower Market
          <span className="shop-sign__pin" aria-hidden="true" />
        </div>
        <div className="shop-hero__content">
          <div className="shop-hero__copy">
            <h1>{personalInfo.name}</h1>
            <p className="hero-lead">{personalInfo.style}</p>
            <div className="hero-facts">
              <span>
                <BookOpen size={17} /> {personalInfo.major}
              </span>
              <span>
                <GraduationCap size={17} /> {personalInfo.university}
              </span>
              <span>
                <Sparkles size={17} /> {personalInfo.hobbies}
              </span>
            </div>
            <div className="hero-ribbons" aria-label="Chủ đề portfolio">
              <span className="ribbon-label">law student</span>
              <span className="ribbon-label ribbon-label--sage">
                digital learning
              </span>
              <span className="ribbon-label ribbon-label--cream">
                AI literacy
              </span>
            </div>
          </div>
          <div className="shop-hero__visual">
            <div className="avatar-frame">
              <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
            </div>
            <FlowerAsset
              src={flowerAssets.floralBouquet}
              className="hero-bouquet"
            />
            <FlowerAsset
              src={flowerAssets.botanicalLineArt}
              className="hero-line-art"
            />
          </div>
        </div>
        <div className="market-counter">
          <div className="counter-plank" aria-hidden="true" />
          <div className="crate-row">
            {crateItems.map(([label, flower]) => (
              <article className="market-crate" key={label}>
                <img src={flower} alt="" aria-hidden="true" />
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
