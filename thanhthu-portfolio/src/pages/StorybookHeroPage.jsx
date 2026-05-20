import RoyalMascotRiveController from '../features/royal-mascot/RoyalMascotRiveController.jsx';
import { personalInfo, philosophy, theme } from '../data/portfolioData.js';
import CrownButton from '../components/ui/CrownButton.jsx';
import MagicKeyReaction from '../features/royal-mascot/MagicKeyReaction.jsx';
import RibbonTag from '../components/ui/RibbonTag.jsx';
import ScrollCard from '../components/ui/ScrollCard.jsx';
import SectionShell from './SectionShell.jsx';

function StorybookHeroPage() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="theme-pill">{theme.id}</p>
        <h1>{personalInfo.name}</h1>
        <p className="hero-subtitle">{theme.tagline}</p>
        <div className="hero-book-page">
          <MagicKeyReaction />
        </div>
        <div className="hero-actions" aria-label="Điều hướng nhanh">
          <CrownButton href="#about">Mở chương đầu</CrownButton>
          <CrownButton href="/projects" variant="ghost">
            Xem dự án
          </CrownButton>
        </div>
      </div>
      <RoyalMascotRiveController />
    </header>
  );
}

function AboutPage() {
  return (
    <SectionShell
      eyebrow="Prologue"
      id="about"
      lead={personalInfo.intro}
      title="Lời chào từ Thanh Thư"
    >
      <div className="about-grid">
        <ScrollCard className="profile-card">
          <h3>{personalInfo.greeting}</h3>
          <dl>
            <div>
              <dt>Ngành học</dt>
              <dd>{personalInfo.major}</dd>
            </div>
            <div>
              <dt>Trường</dt>
              <dd>{personalInfo.school}</dd>
            </div>
            <div>
              <dt>Phong cách sống</dt>
              <dd>{personalInfo.lifestyle}</dd>
            </div>
          </dl>
        </ScrollCard>

        <ScrollCard>
          <h3>{philosophy.title}</h3>
          <p>{philosophy.body}</p>
        </ScrollCard>
      </div>

      <div
        className="inventory-grid"
        aria-label="Sở thích và biểu tượng cá nhân"
      >
        {personalInfo.interests.map((interest) => (
          <RibbonTag key={interest}>{interest}</RibbonTag>
        ))}
      </div>
    </SectionShell>
  );
}

StorybookHeroPage.About = AboutPage;

export default StorybookHeroPage;
