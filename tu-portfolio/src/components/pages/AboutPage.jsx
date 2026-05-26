import { ArrowRight, Camera, GraduationCap, Heart, Quote } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import IconBadge from '../ui/IconBadge.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import SoftCard from '../ui/SoftCard.jsx';

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
  const { profile, principles, tools, visualAssets } = portfolioData;

  return (
    <div className="portfolio-page about-page">
      <section className="hero-section hero-section--about">
        <ScrollReveal className="hero-section__copy">
          <span className="kicker">Sweet legal studio</span>
          <h1>{profile.name}</h1>
          <p className="hero-section__lead">{profile.intro}</p>
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
          <div className="profile-card">
            <div className="profile-card__portrait">
              <img src={profile.avatar} alt={`Chân dung ${profile.name}`} />
              <span className="profile-card__sticker">✿</span>
            </div>
            <div className="profile-card__info">
              <div>
                <span>Ngành học</span>
                <strong>{profile.major}</strong>
              </div>
              <div>
                <span>Trường</span>
                <strong>{profile.school}</strong>
              </div>
              <div>
                <span>Phong cách</span>
                <strong>{profile.personality.join(' · ')}</strong>
              </div>
            </div>
          </div>
          <div className="hero-editorial__caption">
            <span>Portfolio moodboard</span>
            <strong>Pastel legal editorial</strong>
          </div>
        </ScrollReveal>
      </section>

      <section className="content-section" id="about-profile">
        <SectionTitle
          eyebrow="About me"
          title="Một người kể chuyện pháp luật dễ gần"
          icon="Sparkles"
        >
          Portfolio này phản chiếu cách Tú học và làm việc: chính xác trong
          thông tin, mềm mại trong trình bày và chân thành trong kết nối.
        </SectionTitle>

        <div className="about-grid">
          <ScrollReveal className="about-panel">
            <Quote size={30} />
            <p>{profile.goal}</p>
          </ScrollReveal>
          <ScrollReveal className="about-panel about-panel--soft" delay={0.08}>
            <GraduationCap size={30} />
            <p>{profile.portfolioGoal}</p>
          </ScrollReveal>
          <ScrollReveal className="about-panel about-panel--wide" delay={0.12}>
            <Camera size={30} />
            <p>{profile.hobbies}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Working principles"
          title="Ba nguyên tắc cho từng bài tập"
          icon="BadgeCheck"
        />
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 0.06}>
              <SoftCard icon={principle.icon} title={principle.title}>
                <p>{principle.description}</p>
              </SoftCard>
            </ScrollReveal>
          ))}
        </div>
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
