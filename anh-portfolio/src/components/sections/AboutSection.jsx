import { Layers, Route } from 'lucide-react';
import { about } from '../../data/portfolioData.js';
import BlockCard from '../ui/BlockCard.jsx';
import PuzzleBadge from '../ui/PuzzleBadge.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function AboutSection() {
  return (
    <section id="about" className="toy-section about-section">
      <ScrollReveal className="section-heading">
        <PuzzleBadge tone="blue">01</PuzzleBadge>
        <h2>{about.title}</h2>
        <p>{about.kicker}</p>
      </ScrollReveal>

      <div className="about-grid">
        <BlockCard title="Thông tin cá nhân" tone="blue">
          <dl className="profile-list">
            {about.profile.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </BlockCard>

        <BlockCard title="Định hướng phát triển" tone="green">
          <p>{about.orientation}</p>
          <ul className="toy-list">
            {about.method.map((item) => (
              <li key={item}>
                <Layers size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </BlockCard>

        <BlockCard title="Mục đích xây dựng portfolio" tone="red" className="about-grid__wide">
          <p>{about.portfolioPurpose}</p>
          <div className="flow-strip">
            <Route size={18} />
            <span>{about.flow}</span>
          </div>
        </BlockCard>
      </div>
    </section>
  );
}
