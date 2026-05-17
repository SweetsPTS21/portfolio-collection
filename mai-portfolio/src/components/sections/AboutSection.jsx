import { Feather, Scale, Waves } from 'lucide-react';
import {
  learningGoals,
  personalInfo,
  portfolioGoals,
} from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SeaGlassCard from '../ui/SeaGlassCard.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

const profileRows = [
  ['Họ và tên', personalInfo.name],
  ['Ngành', personalInfo.major],
  ['Trường', personalInfo.university],
  ['Sở thích', personalInfo.hobbies],
  ['Phong cách', personalInfo.style],
];

const icons = [Scale, Waves, Feather];

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Trang 1"
          title="Giới thiệu"
          intro="Mục tiêu học tập, định hướng và cách Mai nhìn công nghệ như một hệ sinh thái hỗ trợ học thuật."
        />
      </ScrollReveal>
      <div className="about-grid">
        <ScrollReveal className="profile-panel">
          {/* <div className="profile-panel__mirror">
            <span />
          </div> */}
          <div className="profile-panel__rows">
            {profileRows.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="goal-stack">
          {learningGoals.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={item.title} delay={index * 0.06}>
                <SeaGlassCard>
                  <div className="sea-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </SeaGlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ScrollReveal className="portfolio-goals">
        <h3>{portfolioGoals.title}</h3>
        <div>
          {portfolioGoals.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
