import React from "react";
import { Compass, Wrench } from "lucide-react";
import AvatarCard from "../components/about/AvatarCard";
import StrengthStrip from "../components/about/StrengthStrip";
import PageShell from "../components/layout/PageShell";
import ChipCloud from "../components/ui/ChipCloud";
import InfoCard from "../components/ui/InfoCard";
import GardenPanel from "../components/ui/GardenPanel";
import { personalInfo, orientation, coreSkills, toolsets } from "../data/portfolioData";
import flowerPotRow from "../assets/bunny-cloud-garden/flower-pot-row.svg";
import bunnyWatering from "../assets/bunny-cloud-garden/bunny-watering.svg";

export default function AboutPage() {
  return (
    <PageShell eyebrow="Cloud garden profile" title="WELCOME TO MY PORTFOLIO">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="quote">"{personalInfo.motto}"</p>
          <p>{orientation.content[0]}</p>
          <div className="identity-grid">
            <InfoCard label="Họ và tên" value={personalInfo.name} />
            <InfoCard label="Ngành" value={personalInfo.major} />
            <InfoCard label="Trường" value={personalInfo.university} />
            <InfoCard label="Sở thích" value={personalInfo.hobbies} />
          </div>
        </div>
        <AvatarCard />
      </section>

      <img className="divider-flower-pots" src={flowerPotRow} alt="" />

      <section className="two-column">
        <GardenPanel title="Định hướng" icon={<Compass size={22} />}>
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
        <img className="strength-bunny" src={bunnyWatering} alt="" />
        <div className="strength-content">
          <h2 className="strength-title">🌱 Năng lực đang nuôi dưỡng</h2>
          <StrengthStrip items={coreSkills.items.map(s => s.text)} />
        </div>
      </section>
    </PageShell>
  );
}
