import React from "react";
import { Mail, Sparkles, TriangleAlert } from "lucide-react";
import PaperPageShell from "../components/layout/PaperPageShell";
import EnvelopeCard from "../components/ui/EnvelopeCard";
import SealButton from "../components/ui/SealButton";
import InkBadge from "../components/ui/InkBadge";
import { conclusion, profile } from "../data/portfolioData";

export default function LetterMailboxContactPage() {
  return (
    <PaperPageShell eyebrow="Letter mailbox" title={conclusion.heading} lead={conclusion.quote}>
      <section className="mailbox-grid">
        <EnvelopeCard title="Nhìn lại" variant="book-page">
          <p>{conclusion.summary}</p>
          <InkBadge tone="sakura"><Sparkles size={14} /> Điểm tâm đắc</InkBadge>
          <p>{conclusion.highlight}</p>
        </EnvelopeCard>
        <EnvelopeCard title="Thách thức & cách vượt qua" variant="certificate">
          <InkBadge tone="gold"><TriangleAlert size={14} /> Kiểm chứng</InkBadge>
          <p>{conclusion.challenge}</p>
        </EnvelopeCard>
      </section>
      <section className="final-letter thank-you-envelope">
        <Mail size={30} />
        <p>{conclusion.message}</p>
        <SealButton href={`mailto:${profile.name.replaceAll(" ", "").toLowerCase()}@example.com`} variant="secondary">
          Gửi một lá thư
        </SealButton>
      </section>
    </PaperPageShell>
  );
}
