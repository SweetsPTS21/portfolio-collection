import FlowerAsset from '../floral/FlowerAsset.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import {
  about,
  developmentDirection,
  flowerAssets,
  portfolioPurpose,
} from '../../data/portfolioData.js';

function StoryBlock({ title, paragraphs }) {
  return (
    <article className="story-block">
      <h3>{title}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}

export default function FloristAboutSection() {
  return (
    <section id="about" className="market-section florist-about">
      <ScrollReveal className="section-heading">
        <span className="eyebrow">Fresh story</span>
        <h2 className="section-title">{about.title}</h2>
        <p>{about.intro}</p>
      </ScrollReveal>
      <div className="story-grid">
        <ScrollReveal>
          <StoryBlock
            title={developmentDirection.title}
            paragraphs={developmentDirection.paragraphs}
          />
        </ScrollReveal>
        <ScrollReveal delay={12}>
          <StoryBlock
            title={portfolioPurpose.title}
            paragraphs={portfolioPurpose.paragraphs}
          />
        </ScrollReveal>
      </div>
      <FlowerAsset
        src={flowerAssets.botanicalLineArt}
        className="botanical-line"
      />
    </section>
  );
}
