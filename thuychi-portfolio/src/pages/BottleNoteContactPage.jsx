import React from "react";
import { Mail, Sparkles, Waves } from "lucide-react";
import CoralCard from "../components/ui/CoralCard";
import BubbleButton from "../components/ui/BubbleButton";
import PageShell from "../components/layout/PageShell";
import StarfishReaction from "../features/ocean-mascot/StarfishReaction";
import { conclusion, profile } from "../data/portfolioData";

export default function BottleNoteContactPage() {
  return (
    <PageShell eyebrow="Bottle note contact" title="Tổng kết hành trình">
      <section className="bottle-note-content-grid">
        <div className="message-bottle-card">
          <p>{conclusion.summary}</p>
          <BubbleButton href={`mailto:${profile.name.replaceAll(" ", "").toLowerCase()}@portfolio.local`} className="primary">
            <Mail size={17} />
            <span>Send a sea note</span>
          </BubbleButton>
        </div>
        <div className="sea-creature-panel">
          <StarfishReaction />
        </div>
      </section>
      <section className="reflection-lists">
        <CoralCard title="Điểm tâm đắc" icon={<Sparkles size={22} />}>
          <ul>
            {conclusion.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CoralCard>
        <CoralCard title="Thách thức" icon={<Waves size={22} />}>
          <ul>
            {conclusion.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CoralCard>
        <CoralCard title="Định hướng" icon={<Mail size={22} />}>
          <ul>
            {conclusion.direction.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CoralCard>
      </section>
    </PageShell>
  );
}
