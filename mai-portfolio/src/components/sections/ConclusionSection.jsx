import { Compass, Gem, ShieldCheck } from "lucide-react";
import { conclusion } from "../../data/portfolioData.js";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import SeaGlassCard from "../ui/SeaGlassCard.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

const icons = [ShieldCheck, Gem, Compass];

export default function ConclusionSection() {
  return (
    <section className="section conclusion-section" id="conclusion">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Trang 3"
          title={conclusion.title}
          intro={conclusion.intro}
        />
      </ScrollReveal>

      <ScrollReveal className="tide-note">
        <p>{conclusion.systemNote}</p>
      </ScrollReveal>

      <div className="skill-grid">
        {conclusion.coreSkills.map((skill, index) => {
          const Icon = icons[index];
          return (
            <ScrollReveal key={skill.title} delay={index * 0.06}>
              <SeaGlassCard>
                <div className="sea-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </SeaGlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="reflection-grid">
        {[conclusion.proudest, conclusion.challenge].map((item) => (
          <ScrollReveal key={item.title}>
            <article>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="future-panel">
        <h3>{conclusion.futureTitle}</h3>
        <p>{conclusion.futureIntro}</p>
        <ul>
          {conclusion.futureItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
