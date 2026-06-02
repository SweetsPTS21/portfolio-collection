import { HeartHandshake, Mountain, Sparkles, TriangleAlert, Waves } from "lucide-react";
import LighthouseSummaryCard from "../components/cards/LighthouseSummaryCard.jsx";
import MotionSection from "../components/ui/MotionSection.jsx";
import TextStack from "../components/ui/TextStack.jsx";
import { conclusion } from "../data/portfolioData.js";

export default function ConclusionPage() {
  const summaryCards = [
    { title: "Trải nghiệm", label: "01 / Experience", tone: "aqua", content: conclusion.experience },
    { title: "Hành trang", label: "02 / Toolkit", tone: "navy", content: conclusion.luggage },
    { title: "Định hướng", label: "03 / Next route", tone: "glow", content: conclusion.next },
  ];

  return (
    <section className="conclusion-page">
      <div className="page-heading conclusion-heading">
        <span className="ice-badge">Ice lighthouse report</span>
        <h1>Tổng kết</h1>
        <TextStack items={conclusion.opening} className="balanced-text" />
      </div>
      <MotionSection className="summary-grid conclusion-summary-grid">
        {summaryCards.map((card) => (
          <LighthouseSummaryCard key={card.title} title={card.title} label={card.label} tone={card.tone}>
            <TextStack items={card.content} />
          </LighthouseSummaryCard>
        ))}
      </MotionSection>
      <div className="reflection-grid conclusion-reflection-grid">
        <article className="ice-card reflection-card highlight-card">
          <div className="card-kicker"><Sparkles size={18} /> Điểm sáng</div>
          <h2>Điểm tâm đắc</h2>
          <div className="reflection-list">
            {conclusion.highlights.map((item, index) => (
              <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>
            ))}
          </div>
        </article>
        <article className="ice-card reflection-card challenge-card">
          <div className="card-kicker"><TriangleAlert size={18} /> Vùng băng khó</div>
          <h2>Thách thức</h2>
          <div className="reflection-list compact">
            {conclusion.challenges.map((item, index) => (
              <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>
            ))}
          </div>
        </article>
      </div>
      <article className="thanks-card ice-card">
        <div className="thanks-orbit" aria-hidden="true"><Waves size={34} /><Mountain size={38} /></div>
        <div className="card-kicker"><HeartHandshake size={18} /> Khép lại hành trình</div>
        <h2>Lời cảm ơn</h2>
        <TextStack items={conclusion.thanks} className="balanced-text" />
      </article>
    </section>
  );
}
