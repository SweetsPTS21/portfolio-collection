import React from "react";
import { Scale, Shell, Waves } from "lucide-react";
import avatar from "../../docs/avatar.png";
import InfoCard from "../components/ui/InfoCard";
import CoralCard from "../components/ui/CoralCard";
import WaveDivider from "../components/ui/WaveDivider";
import FishRiveController from "../features/ocean-mascot/FishRiveController";
import PageShell from "../components/layout/PageShell";
import shellPearlIcons from "../assets/underwater-world/shell-pearl-icons.svg";
import { goals, profile } from "../data/portfolioData";

export default function OceanReefHeroPage() {
  return (
    <PageShell eyebrow="Ocean reef profile" title="WELCOME TO MY PORTFOLIO">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="quote">"{profile.quote}"</p>
          <p>{profile.intro}</p>
          <WaveDivider />
          <div className="identity-grid">
            <InfoCard label="Họ và tên" value={profile.name} />
            <InfoCard label="Ngành" value={profile.major} />
            <InfoCard label="Trường" value={profile.school} />
            <InfoCard label="Sở thích" value={profile.interests.join(" · ")} />
            <InfoCard label="Phong cách" value={profile.style.join(" · ")} />
            <InfoCard label="Theme ID" value="underwater-world" />
          </div>
        </div>
        <div className="avatar-bubble-card">
          <img className="avatar-shell-frame" src={shellPearlIcons} alt="" />
          <img className="avatar" src={avatar} alt="Avatar" />
          <FishRiveController />
        </div>
      </section>

      <section className="two-column">
        <CoralCard title="Mục tiêu học tập" icon={<Scale size={22} />}>
          <ul>
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </CoralCard>
        <CoralCard title="Dấu ấn đại dương" icon={<Shell size={22} />}>
          <p>
            Không gian portfolio dùng xanh dương nhạt, bubble glass, san hô,
            rong biển, đàn cá và ánh nắng xuyên mặt nước như catalog yêu cầu.
          </p>
          <p className="mini-note">
            Fish school swim, bubble rise, seaweed sway và sunbeam shimmer được
            tách thành các layer riêng để dễ tối ưu.
          </p>
        </CoralCard>
      </section>
      <CoralCard title="Hướng đi" icon={<Waves size={22} />} className="wide-card">
        <p>
          Portfolio giữ nội dung học thuật của Thùy Chi, nhưng toàn bộ khung
          thị giác đã chuyển sang thế giới đại dương trong trẻo và giàu sinh
          vật biển.
        </p>
      </CoralCard>
    </PageShell>
  );
}
