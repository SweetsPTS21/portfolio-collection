import { createElement } from 'react';
import { Card } from 'antd';
import { Compass, Heart, Target } from 'lucide-react';
import { about, personalInfo } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

const facts = [
  { icon: Heart, label: 'Sở thích', value: personalInfo.interests },
  { icon: Compass, label: 'Phong cách', value: personalInfo.style },
  { icon: Target, label: 'Định hướng', value: about.orientation },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell about-section">
      <ScrollReveal>
        <SectionTitle
          eyebrow="About Me"
          title="Bản sắc & tầm nhìn"
          note="Một trang ghi chú cá nhân về cách mình kết nối tư duy luật với công nghệ số."
        />
      </ScrollReveal>
      <div className="about-grid">
        <ScrollReveal className="about-note">
          <span className="washi-label">mission</span>
          {about.goals.map((goal) => (
            <p key={goal}>{goal}</p>
          ))}
        </ScrollReveal>
        <div className="fact-grid">
          {facts.map((fact, index) => {
            const icon = createElement(fact.icon, { size: 22 });

            return (
              <ScrollReveal key={fact.label} delay={index * 0.06}>
                <Card className="fact-card">
                  {icon}
                  <h3>{fact.label}</h3>
                  <p>{fact.value}</p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
