import { Compass, Flower2, IdCard, Target } from 'lucide-react';
import PlantLabelCard from '../ui/PlantLabelCard.jsx';
import SectionShell from '../ui/SectionShell.jsx';
import { about, goals } from '../../data/portfolioData.js';

const icons = [Target, Compass, Flower2];

export default function AboutSection() {
  return (
    <SectionShell
      className="about-section"
      eyebrow="Garden profile"
      title={about.title}
      lead={about.kicker}
    >
      <div className="about-layout" id="about">
        <div className="profile-bed">
          {about.profile.map(([label, value]) => (
            <div className="profile-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="goal-bed">
          {goals.items.map((item, index) => (
            <PlantLabelCard
              key={item.title}
              number={`0${index + 1}`}
              title={item.title}
              text={item.text}
              icon={icons[index]}
            />
          ))}
        </div>
      </div>
      <div className="garden-note">
        <IdCard size={18} aria-hidden="true" />
        <span>{goals.title}</span>
      </div>
    </SectionShell>
  );
}
