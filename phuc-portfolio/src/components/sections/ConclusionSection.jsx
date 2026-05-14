import { Card } from 'antd';
import { AlertTriangle, CheckCircle2, PencilLine, Stars } from 'lucide-react';
import { conclusion, futureDirections } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

export default function ConclusionSection() {
  return (
    <section id="conclusion" className="section-shell conclusion-section">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Conclusion"
          title="Trang tổng kết"
          note="Một bản ghi chép về sự thay đổi tư duy từ luật truyền thống sang tư duy số."
        />
      </ScrollReveal>
      <div className="conclusion-grid">
        <ScrollReveal>
          <Card className="summary-card summary-card--wide">
            <Stars size={24} />
            <h3>Dấu mốc tư duy số</h3>
            <p>{conclusion.lead}</p>
            <p>{conclusion.learnedSkill}</p>
          </Card>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <Card className="summary-card">
            <CheckCircle2 size={24} />
            <h3>Điểm tâm đắc</h3>
            <p>{conclusion.proud}</p>
          </Card>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Card className="summary-card">
            <AlertTriangle size={24} />
            <h3>Thách thức</h3>
            <p>{conclusion.challenge}</p>
          </Card>
        </ScrollReveal>
        <ScrollReveal className="ai-note" delay={0.14}>
          <span className="washi-label">AI hallucination</span>
          <h3>{conclusion.aiExample}</h3>
          <p>{conclusion.solution}</p>
        </ScrollReveal>
      </div>
      <ScrollReveal className="future-note">
        <PencilLine size={24} />
        <h3>Định hướng phát triển trong thời gian tới</h3>
        <ul>
          {futureDirections.map((direction) => (
            <li key={direction}>{direction}</li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
