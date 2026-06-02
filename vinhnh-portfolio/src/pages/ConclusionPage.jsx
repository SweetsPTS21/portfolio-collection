import LighthouseSummaryCard from "../components/cards/LighthouseSummaryCard.jsx";
import MotionSection from "../components/ui/MotionSection.jsx";
import TextStack from "../components/ui/TextStack.jsx";
import { conclusion } from "../data/portfolioData.js";

export default function ConclusionPage() {
  return (
    <section className="conclusion-page">
      <div className="page-heading">
        <span className="ice-badge">Ice lighthouse report</span>
        <h1>Tổng kết</h1>
        <TextStack items={conclusion.opening} />
      </div>
      <MotionSection className="summary-grid">
        <LighthouseSummaryCard title="Trải nghiệm"><TextStack items={conclusion.experience} /></LighthouseSummaryCard>
        <LighthouseSummaryCard title="Hành trang"><TextStack items={conclusion.luggage} /></LighthouseSummaryCard>
        <LighthouseSummaryCard title="Định hướng"><TextStack items={conclusion.next} /></LighthouseSummaryCard>
      </MotionSection>
      <div className="reflection-grid">
        <article className="ice-card">
          <h2>Điểm tâm đắc</h2>
          {conclusion.highlights.map((item) => <p key={item}>{item}</p>)}
        </article>
        <article className="ice-card">
          <h2>Thách thức</h2>
          {conclusion.challenges.map((item) => <p key={item}>{item}</p>)}
        </article>
      </div>
      <article className="thanks-card ice-card">
        <h2>Lời cảm ơn</h2>
        <TextStack items={conclusion.thanks} />
      </article>
    </section>
  );
}
