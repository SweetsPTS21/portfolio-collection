import React from "react";
import { Gavel, Sparkles } from "lucide-react";
import AvatarCard from "../components/about/AvatarCard";
import PageShell from "../components/layout/PageShell";
import InfoBadge from "../components/ui/InfoBadge";
import ParfaitPanel from "../components/ui/ParfaitPanel";
import ChipCloud from "../components/ui/ChipCloud";
import JellyStrengthStrip from "../components/ui/JellyStrengthStrip";
import { goals, profile, strengths, tools } from "../data/portfolioData";

export default function DessertIslandHeroPage() {
  return (
    <PageShell
      eyebrow="Sweet Parfait Profile"
      title="WELCOME TO DESSERT ISLAND"
    >
      <section className="hero-grid">
        <div className="parfait-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="quote" style={{ fontSize: '1.25rem', fontFamily: 'Quicksand, sans-serif', color: 'var(--bubble-indigo)', borderLeft: '4px solid var(--unicorn-pink)', paddingLeft: '16px', marginBottom: '18px' }}>
            “{profile.quote}”
          </p>
          <p className="lead" style={{ fontSize: '1.02rem', marginBottom: '22px' }}>{profile.intro}</p>
          
          <div className="identity-grid">
            <InfoBadge label="Họ và tên" value={profile.name} />
            <InfoBadge label="Ngành học" value={profile.major} />
            <InfoBadge label="Trường học" value={profile.school} />
            <InfoBadge label="Phong cách" value={profile.style.join(" · ")} />
          </div>
        </div>
        <AvatarCard />
      </section>

      <section className="two-column">
        <ParfaitPanel title="Mục tiêu phát triển" icon={<Gavel size={22} />}>
          <ul style={{ paddingLeft: '20px' }}>
            {goals.map((goal) => (
              <li key={goal} style={{ color: 'var(--bubble-muted)', fontWeight: '600' }}>{goal}</li>
            ))}
          </ul>
        </ParfaitPanel>
        
        <ParfaitPanel title="Công cụ số tích hợp" icon={<Sparkles size={22} />}>
          <p style={{ margin: '0 0 14px', color: 'var(--bubble-muted)', fontSize: '0.94rem' }}>
            Hệ sinh thái công cụ hỗ trợ Giang tối giản hóa tác vụ học thuật pháp lý:
          </p>
          <ChipCloud items={tools} />
        </ParfaitPanel>
      </section>

      <section style={{ marginTop: '36px' }}>
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', color: 'var(--bubble-indigo)', textAlign: 'center', fontSize: '1.8rem', marginBottom: '8px' }}>
          Năng Lực Số & Tư Duy Pháp Lý
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--bubble-muted)', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.94rem' }}>
          Sự kết hợp hài hòa giữa sự bền bỉ học thuật pháp lý so sánh và kỹ năng khai thác công nghệ hiện đại.
        </p>
        <JellyStrengthStrip items={strengths} />
      </section>
    </PageShell>
  );
}
