import { ArrowDown, BookOpen, GraduationCap, Sprout } from 'lucide-react';
import LeafDivider from '../ui/LeafDivider.jsx';
import SeedBadge from '../ui/SeedBadge.jsx';
import { about, personalInfo } from '../../data/portfolioData.js';

export default function HeroSection() {
  return (
    <header className="garden-hero">
      <section className="hero-sign" aria-label="Thông tin cá nhân">
        <p className="hero-welcome">{personalInfo.welcome}</p>
        <p className="hero-kicker">
          <Sprout size={18} aria-hidden="true" />
          {about.kicker}
        </p>
        <h1>{personalInfo.name}</h1>
        <p className="hero-subtitle">
          {personalInfo.major} · {personalInfo.university}
        </p>
        <div className="hero-tags" aria-label="Thông tin nổi bật">
          <SeedBadge>{personalInfo.style}</SeedBadge>
          <SeedBadge tone="yellow">{personalInfo.hobbies}</SeedBadge>
        </div>
        <p className="hero-intro">{about.intro}</p>
        <LeafDivider />
      </section>

      <aside className="hero-portrait" aria-label="Ảnh đại diện">
        <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
        <div className="portrait-label">
          <GraduationCap size={18} aria-hidden="true" />
          <span>{personalInfo.major}</span>
        </div>
        <div className="portrait-seal">
          <BookOpen size={22} aria-hidden="true" />
        </div>
      </aside>

      <a className="scroll-leaf" href="#about" aria-label="Cuộn xuống nội dung">
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </header>
  );
}
