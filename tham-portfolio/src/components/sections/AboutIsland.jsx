import { Compass, Goal, UserRound } from 'lucide-react';
import { about } from '../../data/portfolioData.js';
import Island from '../world/Island.jsx';
import DreamyCard from '../ui/DreamyCard.jsx';

export default function AboutIsland() {
  return (
    <Island id="about" title={about.title} eyebrow={about.portfolioGoalTitle}>
      <div className="profile-grid">
        {about.profile.map(([label, value]) => (
          <div className="profile-pill" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="card-grid card-grid--two">
        <DreamyCard icon={Compass} title={about.directionTitle}>
          <ul className="soft-list">
            {about.directions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DreamyCard>
        <DreamyCard icon={Goal} title={about.portfolioGoalTitle}>
          <p>{about.portfolioGoal}</p>
        </DreamyCard>
        <DreamyCard icon={UserRound} title={about.title} className="span-two">
          <p>{about.intro}</p>
        </DreamyCard>
      </div>
    </Island>
  );
}
