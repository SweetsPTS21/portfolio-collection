import { ArrowRight, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import IconBadge from '../ui/IconBadge.jsx';
import { InfoTile, MosaicGrid, PrototypeCard, PrototypePanel } from '../ui/PrototypeCard.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

const toolIcons = {
  'File Explorer': 'FolderKanban',
  'Google Drive': 'FolderKanban',
  'Google Scholar': 'SearchCheck',
  'Thư viện trường': 'Library',
  ChatGPT: 'Bot',
  'Google Gemini': 'Sparkles',
  'Google Meet': 'Video',
  Zoom: 'Video',
  Canva: 'Palette',
  'AI Image Tools': 'Camera',
};

export default function AboutPage() {
  const { profile, principles, tools } = portfolioData;

  return (
    <div className="portfolio-page about-page">
      <section className="hero-section hero-section--about">
        <ScrollReveal className="hero-section__copy">
          <span className="kicker">Sweet legal studio</span>
          <h1>{profile.name}</h1>
          <p className="hero-section__lead">{profile.intro}</p>
          <div className="profile-card__info">
            <InfoTile label="Ngành học" value={profile.major} />
            <InfoTile label="Trường" value={profile.school} />
            <InfoTile label="Phong cách" value={profile.personality.join(' · ')} />
          </div>
          <div className="hero-section__cta-row">
            <a href="#about-profile" className="primary-cta">
              <span>Khám phá hồ sơ</span>
              <ArrowRight size={17} />
            </a>
            <span className="hero-section__tag">
              <Heart size={16} />
              Luật · Công nghệ · Thiết kế
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="hero-editorial" delay={0.08}>
          <PrototypeCard className="profile-card profile-card--portrait" variant="media">
            <div className="profile-card__portrait">
              <img src={profile.avatar} alt={`Chân dung ${profile.name}`} />
              <span className="profile-card__sticker">✿</span>
            </div>
          </PrototypeCard>
          <div className="hero-editorial__caption">
            <span>Portfolio moodboard</span>
            <strong>Pastel legal editorial</strong>
          </div>
        </ScrollReveal>
      </section>

      <section className="content-section" id="about-profile">
        <SectionTitle
          eyebrow="About me"
          title="Pháp luật dễ tiếp cận hơn qua góc nhìn sinh viên Luật cùng công nghệ số"
          icon="Sparkles"
        >
          Portfolio này phản ánh cách tôi học tập và làm việc: chính xác trong
          thông tin, tinh tế trong trình bày và chân thành trong kết nối
        </SectionTitle>

        <PrototypePanel className="about-board">
          <MosaicGrid className="about-grid">
            <ScrollReveal>
              <PrototypeCard icon="Quote" className="about-panel" span="tall">
                <p>{profile.goal}</p>
              </PrototypeCard>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <PrototypeCard icon="GraduationCap" className="about-panel">
                <p>{profile.portfolioGoal}</p>
              </PrototypeCard>
            </ScrollReveal>
            <ScrollReveal className="about-panel--wide" delay={0.12}>
              <PrototypeCard icon="Camera" className="about-panel" span="wide">
                <p>{profile.hobbies}</p>
              </PrototypeCard>
            </ScrollReveal>
          </MosaicGrid>
        </PrototypePanel>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Working principles"
          title="Ba nguyên tắc cho từng bài tập"
          icon="BadgeCheck"
        />
        <PrototypePanel className="principle-board">
          <MosaicGrid className="principle-grid">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 0.06}>
                <PrototypeCard icon={principle.icon} title={principle.title}>
                  <p>{principle.description}</p>
                </PrototypeCard>
              </ScrollReveal>
            ))}
          </MosaicGrid>
        </PrototypePanel>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Toolkit"
          title="Hệ sinh thái công cụ đã sử dụng"
          icon="Palette"
        >
          Các công cụ được trình bày như một chip cloud nhẹ, giúp người xem quét
          nhanh kỹ năng số và quy trình học tập.
        </SectionTitle>
        <div className="tool-cloud">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool} delay={index * 0.025}>
              <span className="tool-chip">
                <IconBadge icon={toolIcons[tool]} size="small" />
                {tool}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

