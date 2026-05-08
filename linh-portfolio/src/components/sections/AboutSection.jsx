import { BookOpen, Candy } from 'lucide-react';
import { about } from '../../data/portfolioData.js';
import BubblePanel from '../candy/BubblePanel.jsx';

export default function AboutSection() {
  return (
    <BubblePanel id="about" title={about.title} eyebrow="Bubble profile">
      <div className="about-layout">
        <article className="bubble-copy-card">
          <BookOpen size={22} strokeWidth={2.3} />
          <p>{about.intro}</p>
        </article>
        <div className="profile-chip-grid">
          {about.profile.map(([label, value]) => (
            <div className="profile-chip" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="candy-note">
        <Candy size={20} strokeWidth={2.3} />
        <span>{about.kicker}</span>
      </div>
    </BubblePanel>
  );
}
