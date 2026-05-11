import { Button } from 'antd';
import { ArrowDown, Blocks, FileText } from 'lucide-react';
import { about, personalInfo, projects } from '../../data/portfolioData.js';
import PuzzleBadge from '../ui/PuzzleBadge.jsx';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <PuzzleBadge tone="yellow">Digital Portfolio</PuzzleBadge>
        <h1>{personalInfo.name}</h1>
        <p className="hero-section__meta">
          {personalInfo.major} · {personalInfo.university}
        </p>
        <p className="hero-section__lead">{about.orientation}</p>
        <div className="hero-section__actions">
          <Button type="primary" href="#project" icon={<FileText size={18} />}>
            PROJECT
          </Button>
          <Button href="#about" icon={<ArrowDown size={18} />}>
            ABOUT ME
          </Button>
        </div>
      </div>
      <figure className="hero-section__avatar" aria-label="Thông tin cá nhân">
        <div className="avatar-frame">
          <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
        </div>
        <figcaption>
          <Blocks size={18} />
          <span>{projects.items.length} bài tập có minh chứng</span>
        </figcaption>
      </figure>
    </section>
  );
}
