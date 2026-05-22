import { CheckCircle2, Send } from "lucide-react";
import PageTransition from "../ui/PageTransition.jsx";
import DiaryCard from "../ui/DiaryCard.jsx";
import { conclusion } from "../../data/portfolioData.js";

export default function ConclusionPage() {
  return (
    <PageTransition className="conclusion-page">
      <header className="page-heading">
        <p className="eyebrow">Message in a bottle</p>
        <h2>{conclusion.title}</h2>
        <p>{conclusion.intro}</p>
      </header>

      <div className="conclusion-stack">
        {conclusion.items.map((item) => (
          <DiaryCard title={item.title} eyebrow="Final tide" key={item.title}>
            <p>{item.text}</p>
          </DiaryCard>
        ))}
      </div>

      <aside className="message-card">
        <Send size={22} aria-hidden="true" />
        <span>Sự nhẹ nhàng và chỉn chu là điểm neo của toàn bộ portfolio này.</span>
        <CheckCircle2 size={20} aria-hidden="true" />
      </aside>
    </PageTransition>
  );
}
