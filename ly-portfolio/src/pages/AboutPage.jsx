import React from "react";
import { Compass, Wrench } from "lucide-react";
import AvatarCard from "../components/about/AvatarCard";
import StrengthStrip from "../components/about/StrengthStrip";
import PageShell from "../components/layout/PageShell";
import ChipCloud from "../components/ui/ChipCloud";
import InfoCard from "../components/ui/InfoCard";
import GardenPanel from "../components/ui/GardenPanel";
import { personalInfo, orientation, coreSkills, toolsets } from "../data/portfolioData";
import rosePetal from "../assets/ballet-swan-lake/rose-petal.svg";
import swanWatering from "../assets/ballet-swan-lake/swan-watering.svg";

export default function AboutPage() {
  return (
    <PageShell eyebrow="Vũ khúc giới thiệu" title="WELCOME TO MY PORTFOLIO">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="quote">"{personalInfo.motto}"</p>
          <div className="identity-grid">
            <InfoCard label="Họ và tên" value={personalInfo.name} />
            <InfoCard label="Ngành học" value={personalInfo.major} />
            <InfoCard label="Trường học" value={personalInfo.university} />
            <InfoCard label="Phong cách" value={personalInfo.style} />
            <InfoCard label="Sở thích" value={personalInfo.hobbies} />
          </div>
        </div>
        <AvatarCard />
      </section>

      <img className="divider-flower-pots" src={rosePetal} alt="" />

      <section className="two-column">
        <GardenPanel title="Định hướng phát triển" icon={<Compass size={22} />}>
          <ul>
            {orientation.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GardenPanel>
        <GardenPanel title="Công cụ sử dụng" icon={<Wrench size={22} />}>
          <ChipCloud items={toolsets.items.map(t => `${t.title}: ${t.text}`)} />
        </GardenPanel>
      </section>

      <section className="strength-section">
        <img className="strength-bunny" src={swanWatering} alt="" />
        <div className="strength-content">
          <h2 className="strength-title">🌱 Nguyên tắc đang thực hiện</h2>
          <StrengthStrip items={coreSkills.items.map(s => `${s.title} — ${s.text}`)} />
        </div>
      </section>
    </PageShell>
  );
}
