import { BookOpen, MapPinned } from 'lucide-react';
import { about } from '../../data/portfolioData.js';
import PostcardFrame from '../summer/PostcardFrame.jsx';

export default function AboutSection() {
  return (
    <PostcardFrame id="about" title={about.title} eyebrow="Summer diary">
      <div className="about-layout">
        <article className="diary-page">
          <BookOpen size={22} strokeWidth={2.3} />
          <p>{about.intro}</p>
        </article>
        <div className="passport-grid">
          {about.profile.map(([label, value]) => (
            <div className="passport-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="map-note">
        <MapPinned size={20} strokeWidth={2.3} />
        <span>{about.kicker}</span>
      </div>
    </PostcardFrame>
  );
}
