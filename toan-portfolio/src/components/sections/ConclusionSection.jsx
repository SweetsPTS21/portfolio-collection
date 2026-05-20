import { ArrowUpRight, Blocks, Sparkles } from 'lucide-react';
import { conclusion } from '../../data/portfolioData.js';
import BlockCard from '../ui/BlockCard.jsx';
import PuzzleBadge from '../ui/PuzzleBadge.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function ConclusionSection() {
  return (
    <section className="toy-section conclusion-section">
      <ScrollReveal className="section-heading">
        <PuzzleBadge tone="yellow">04</PuzzleBadge>
        <h2>{conclusion.title}</h2>
        <p>{conclusion.intro}</p>
      </ScrollReveal>

      <div className="conclusion-grid">
        <BlockCard title={conclusion.skillsTitle} tone="green">
          <div className="stack-list">
            {conclusion.skills.map((item) => (
              <article key={item.title}>
                <Blocks size={17} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </BlockCard>

        {conclusion.reflections.map((item, index) => (
          <BlockCard key={item.title} title={item.title} tone={index === 0 ? 'blue' : 'red'}>
            <p>{item.text}</p>
          </BlockCard>
        ))}

        <ScrollReveal className="future-panel">
          <h3>
            <Sparkles size={20} />
            {conclusion.futureTitle}
          </h3>
          <div className="future-grid">
            {conclusion.future.map((item) => (
              <span key={item}>
                <ArrowUpRight size={16} />
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
