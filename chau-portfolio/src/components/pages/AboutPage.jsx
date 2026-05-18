import { Compass, Sparkles, Telescope } from 'lucide-react';
import PageTransition from '../ui/PageTransition.jsx';
import RopeCard from '../ui/RopeCard.jsx';
import compassRoseUrl from '../../assets/sunset-cruise-log/compass-rose.svg';
import {
  direction,
  portfolioGoal,
  profile,
  strengths,
  tools,
} from '../../data/portfolioData.js';

export default function AboutPage() {
  return (
    <PageTransition className="about-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Captain's profile</p>
          <h2>{profile.headline}</h2>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <blockquote>“{profile.motto}”</blockquote>
          <dl className="profile-facts">
            <div>
              <dt>Ngành</dt>
              <dd>{profile.major}</dd>
            </div>
            <div>
              <dt>Trường</dt>
              <dd>{profile.university}</dd>
            </div>
            <div>
              <dt>Sở thích</dt>
              <dd>{profile.hobbies}</dd>
            </div>
            <div>
              <dt>Phong cách</dt>
              <dd>{profile.style}</dd>
            </div>
          </dl>
        </div>
        <div className="portrait-wrap">
          <img src={profile.avatarUrl} alt="Nguyễn Minh Châu" />
          <span className="portrait-badge">Digital Journey</span>
        </div>
        <img
          className="asset-compass"
          src={compassRoseUrl}
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className="content-grid">
        <RopeCard title={direction.title} eyebrow="Compass">
          <p>{direction.text}</p>
        </RopeCard>
        <RopeCard title={portfolioGoal.title} eyebrow="Cruise brief">
          <p>{portfolioGoal.text}</p>
        </RopeCard>
      </section>

      <section className="split-grid">
        <RopeCard title="Điểm mạnh" eyebrow="Strengths">
          <ul className="icon-list">
            {strengths.map((item) => (
              <li key={item}>
                <Sparkles size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RopeCard>
        <RopeCard title="Công cụ và nền tảng sử dụng" eyebrow="Tool harbor">
          <div className="tool-grid">
            {tools.map((tool) => (
              <div className="tool-chip" key={tool.group}>
                <Telescope size={16} aria-hidden="true" />
                <strong>{tool.group}</strong>
                <span>{tool.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </RopeCard>
      </section>
    </PageTransition>
  );
}
