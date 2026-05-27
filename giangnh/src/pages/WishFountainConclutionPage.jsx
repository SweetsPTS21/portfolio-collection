import React from "react";
import { Sparkles, HelpCircle, Compass, Award } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import ParfaitPanel from "../components/ui/ParfaitPanel";
import ChipCloud from "../components/ui/ChipCloud";
import { conclusion } from "../data/portfolioData";
import wishFountainSvg from "../assets/unicorn-parfait-island/parfait-glass-island.svg";

export default function WishFountainConclutionPage() {
  return (
    <PageShell
      eyebrow="Jelly Wish Fountain"
      title="TỔNG KẾT HÀNH TRÌNH"
    >
      <section className="wish-fountain-scene">
        <img 
          className="wish-fountain-svg" 
          src={wishFountainSvg} 
          alt="Jelly Wish Fountain" 
          style={{ width: '220px', height: 'auto', marginBottom: '24px' }}
        />
        <div className="parfait-panel" style={{ textAlign: 'left' }}>
          <h2 style={{ fontFamily: 'Quicksand, sans-serif', color: 'var(--bubble-indigo)', fontSize: '1.45rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Award size={22} style={{ color: 'var(--unicorn-pink)' }} />
            <span>Trải nghiệm & Sự chuyển mình cá nhân</span>
          </h2>
          <p className="lead" style={{ margin: 0, fontSize: '0.98rem', lineHeight: '1.7' }}>
            {conclusion.summary}
          </p>
        </div>
      </section>

      <section style={{ marginTop: '32px' }}>
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', color: 'var(--bubble-indigo)', fontSize: '1.5rem', marginBottom: '12px', textAlign: 'center' }}>
          Kỹ Năng Đúc Kết
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <ChipCloud items={conclusion.skills} />
        </div>
      </section>

      <section className="reflection-lists">
        <ParfaitPanel title="Điểm tâm đắc" icon={<Sparkles size={22} />}>
          <ul style={{ paddingLeft: '20px' }}>
            {conclusion.highlights.map((item) => (
              <li key={item} style={{ color: 'var(--bubble-muted)', fontWeight: '600' }}>{item}</li>
            ))}
          </ul>
        </ParfaitPanel>

        <ParfaitPanel title="Thách thức" icon={<HelpCircle size={22} />}>
          <ul style={{ paddingLeft: '20px' }}>
            {conclusion.challenges.map((item) => (
              <li key={item} style={{ color: 'var(--bubble-muted)', fontWeight: '600' }}>{item}</li>
            ))}
          </ul>
        </ParfaitPanel>

        <ParfaitPanel title="Định hướng tương lai" icon={<Compass size={22} />}>
          <ul style={{ paddingLeft: '20px' }}>
            {conclusion.direction.map((item) => (
              <li key={item} style={{ color: 'var(--bubble-muted)', fontWeight: '600' }}>{item}</li>
            ))}
          </ul>
        </ParfaitPanel>
      </section>
    </PageShell>
  );
}
