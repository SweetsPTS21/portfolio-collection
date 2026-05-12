import ScrollReveal from '../ui/ScrollReveal.jsx';
import { conclusion } from '../../data/portfolioData.js';

function TextList({ title, items }) {
  return (
    <article className="reflection-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={typeof item === 'string' ? item : item.title}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ReflectionSection() {
  return (
    <section id="reflection" className="market-section reflection-section">
      <ScrollReveal className="section-heading">
        <span className="eyebrow">Final bouquet</span>
        <h2 className="section-title">{conclusion.title}</h2>
        <p>{conclusion.intro}</p>
      </ScrollReveal>
      <div className="reflection-grid">
        <TextList title={conclusion.learnedTitle} items={conclusion.learned} />
        <TextList
          title={conclusion.highlightsTitle}
          items={conclusion.highlights}
        />
        <TextList
          title={conclusion.difficultiesTitle}
          items={conclusion.difficulties}
        />
        <TextList title={conclusion.futureTitle} items={conclusion.future} />
      </div>
      <p className="final-note">{conclusion.final}</p>
    </section>
  );
}
