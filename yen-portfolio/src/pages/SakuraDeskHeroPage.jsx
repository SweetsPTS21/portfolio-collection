import React from "react";
import { motion } from "framer-motion";
import PaperPageShell from "../components/layout/PaperPageShell";
import EnvelopeCard from "../features/letter-desk/EnvelopeCard";
import LetterReveal from "../features/letter-desk/LetterReveal";
import WashiSealStamp from "../features/letter-desk/WashiSealStamp";
import { futureDirection, goals, profile } from "../data/portfolioData";

export default function SakuraDeskHeroPage() {
  return (
    <PaperPageShell eyebrow="Sakura letter desk" title="Góc nhỏ bình yên của Hoàng Yến" lead={profile.greeting}>
      <section className="desk-hero-grid">
        <div className="desk-copy student-profile-slip">
          <p className="invitation">{profile.invitation}</p>
          <div className="identity-list">
            <span>Họ và tên: <strong>{profile.name}</strong></span>
            <span>Chuyên ngành: <strong>{profile.major}</strong></span>
            <span>Đơn vị học tập: <strong>{profile.school}</strong></span>
          </div>
          <WashiSealStamp label="VNU-UL" />
        </div>
        <LetterReveal profile={profile} />
      </section>

      <section className="goal-grid">
        {goals.map((goal, index) => (
          <motion.div key={goal.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <EnvelopeCard title={goal.title} variant="bookmark-note">
              <p>{goal.text}</p>
            </EnvelopeCard>
          </motion.div>
        ))}
      </section>

      <EnvelopeCard title="Định hướng tương lai & góc nhìn cá nhân" className="wide-letter" variant="scroll-letter">
        {futureDirection.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </EnvelopeCard>
    </PaperPageShell>
  );
}
