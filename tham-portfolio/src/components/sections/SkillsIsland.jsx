import {
  Bot,
  Database,
  FileCheck2,
  FolderTree,
  Layers3,
  Palette,
  Search,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import {
  practicingSkills,
  principles,
  standoutSkills,
  tools,
} from '../../data/portfolioData.js';
import Island from '../world/Island.jsx';
import DreamyCard from '../ui/DreamyCard.jsx';

const skillIcons = [FolderTree, Search, Bot, Layers3];
const practiceIcons = [Database, ShieldCheck, Bot];
const toolIcons = [FolderTree, Search, Bot, Palette, UsersRound];

export default function SkillsIsland() {
  return (
    <Island
      id="skills"
      title={standoutSkills.title}
      eyebrow={practicingSkills.title}
      variant="mint"
    >
      <div className="card-grid">
        {standoutSkills.items.map((item, index) => (
          <DreamyCard icon={skillIcons[index]} title={item.title} key={item.title}>
            <p>{item.text}</p>
          </DreamyCard>
        ))}
      </div>

      <div className="subsection">
        <h3>{practicingSkills.title}</h3>
        <div className="card-grid card-grid--three">
          {practicingSkills.items.map((item, index) => (
            <DreamyCard icon={practiceIcons[index]} title={item.title} key={item.title}>
              <p>{item.text}</p>
            </DreamyCard>
          ))}
        </div>
      </div>

      <div className="subsection">
        <h3>{principles.title}</h3>
        <div className="principle-list">
          {principles.items.map((item) => (
            <DreamyCard icon={FileCheck2} title={item.title} key={item.title}>
              <p>{item.text}</p>
            </DreamyCard>
          ))}
        </div>
      </div>

      <div className="subsection">
        <h3>{tools.title}</h3>
        <div className="tool-cloud">
          {tools.items.map((item, index) => {
            const Icon = toolIcons[index];
            return (
              <div className="tool-bubble" key={item.title}>
                <Icon size={18} strokeWidth={2.2} />
                <strong>{item.title}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </Island>
  );
}
