import { CheckCircle2, PackageCheck, Wrench } from 'lucide-react';
import { principles, strengths, tools } from '../../data/portfolioData.js';
import BlockCard from '../ui/BlockCard.jsx';
import PuzzleBadge from '../ui/PuzzleBadge.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

const tones = ['blue', 'yellow', 'green', 'red'];

export default function SkillsSection() {
  return (
    <section className="toy-section skills-section">
      <ScrollReveal className="section-heading">
        <PuzzleBadge tone="green">02</PuzzleBadge>
        <h2>{strengths.title}</h2>
        <p>{principles.title}</p>
      </ScrollReveal>

      <div className="strength-grid">
        {strengths.items.map((item, index) => (
          <BlockCard key={item.title} title={item.title} tone={tones[index % tones.length]}>
            <p>{item.text}</p>
          </BlockCard>
        ))}
      </div>

      <div className="tool-bench">
        <ScrollReveal className="principle-panel">
          <h3>
            <PackageCheck size={20} />
            {principles.title}
          </h3>
          <div className="puzzle-row">
            {principles.items.map((item, index) => (
              <PuzzleBadge key={item} tone={tones[index % tones.length]}>
                <CheckCircle2 size={15} />
                {item}
              </PuzzleBadge>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="tool-panel">
          <h3>
            <Wrench size={20} />
            {tools.title}
          </h3>
          <div className="tool-grid">
            {tools.items.map(([label, value], index) => (
              <div key={label} className={`tool-chip tool-chip--${tones[index % tones.length]}`}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
