import {
  Archive,
  BrainCircuit,
  Files,
  SearchCheck,
  Wrench,
} from 'lucide-react';
import PlantLabelCard from '../ui/PlantLabelCard.jsx';
import SectionShell from '../ui/SectionShell.jsx';
import SeedBadge from '../ui/SeedBadge.jsx';
import {
  practicingSkills,
  strengths,
  tools,
} from '../../data/portfolioData.js';

const skillIcons = [Files, SearchCheck, BrainCircuit];
const strengthIcons = [Archive, SearchCheck, BrainCircuit, Files];
const tones = ['green', 'yellow', 'mint', 'cream', 'green'];

export default function SkillsSection() {
  return (
    <SectionShell
      eyebrow="Seed beds"
      title={practicingSkills.title}
      lead="Các nhóm năng lực, nguyên tắc và công cụ được gom như từng luống cây để dễ theo dõi."
    >
      <div className="plant-grid three">
        {practicingSkills.items.map((item, index) => (
          <PlantLabelCard
            key={item.title}
            number={`S${index + 1}`}
            title={item.title}
            text={item.text}
            icon={skillIcons[index]}
          />
        ))}
      </div>

      <div className="subsection">
        <h3>{tools.title}</h3>
        <div className="plant-grid five tool-bed">
          {tools.items.map((item, index) => (
            <SeedBadge key={item.title} tone={tones[index]}>
              <div className="tool-content">
                <Wrench size={15} aria-hidden="true" />
                {item.title}
                <div>{item.text}</div>
              </div>
            </SeedBadge>
          ))}
        </div>
      </div>

      <div className="subsection">
        <h3>{strengths.title}</h3>
        <div className="plant-grid four">
          {strengths.items.map((item, index) => (
            <PlantLabelCard
              key={item.title}
              number={`N${index + 1}`}
              title={item.title}
              text={item.text}
              icon={strengthIcons[index]}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
