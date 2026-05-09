import { Check, Route, Sprout, SunMedium } from 'lucide-react';
import PlantLabelCard from '../ui/PlantLabelCard.jsx';
import SectionShell from '../ui/SectionShell.jsx';
import SeedBadge from '../ui/SeedBadge.jsx';
import { conclusion } from '../../data/portfolioData.js';

const achievedIcons = [Check, SunMedium, Route];
const reflectionIcons = [Sprout, Route];

export default function ConclusionSection() {
  return (
    <SectionShell
      eyebrow="Reflection garden"
      title={conclusion.title}
      lead={conclusion.intro}
    >
      <div className="subsection">
        <h3>{conclusion.achievedTitle}</h3>
        <div className="plant-grid three">
          {conclusion.achievedItems.map((item, index) => (
            <PlantLabelCard
              key={item.title}
              number={`K${index + 1}`}
              title={item.title}
              text={item.text}
              icon={achievedIcons[index]}
            />
          ))}
        </div>
      </div>

      <div className="subsection reflection-bed">
        <h3>{conclusion.reflectionTitle}</h3>
        <div className="plant-grid">
          {conclusion.reflections.map((item, index) => (
            <PlantLabelCard
              key={item.title}
              number={`R${index + 1}`}
              title={item.title}
              text={item.text}
              icon={reflectionIcons[index]}
            />
          ))}
        </div>
      </div>

      <div className="future-bed">
        <h3>{conclusion.futureTitle}</h3>
        <p>{conclusion.futureIntro}</p>
        <div className="future-list">
          {conclusion.futureItems.map((item, index) => (
            <SeedBadge key={item} tone={index === 1 ? 'yellow' : 'green'}>
              {item}
            </SeedBadge>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
