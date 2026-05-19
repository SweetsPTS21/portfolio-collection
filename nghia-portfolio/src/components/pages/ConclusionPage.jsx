import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import scanlineGrid from "../../assets/cyberpunk-city/scanline-grid.svg";
import { conclusion } from "../../data/portfolioData.js";
import NeonPanel from "../ui/NeonPanel.jsx";
import SignalBadge from "../ui/SignalBadge.jsx";

export default function ConclusionPage() {
  return (
    <motion.section
      className="conclusion-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.26 }}
    >
      <header className="page-heading conclusion-heading">
        <SignalBadge tone="green">FINAL TRANSMISSION</SignalBadge>
        <h2>{conclusion.title}</h2>
        <p>{conclusion.summary}</p>
        <img src={scanlineGrid} alt="" aria-hidden="true" />
      </header>

      <div className="split-grid">
        <NeonPanel eyebrow="CORE SKILLS" title="Kỹ năng cốt lõi thu nạp được">
          <ul className="icon-list">
            {conclusion.skills.map((skill) => (
              <li key={skill}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </NeonPanel>

        <NeonPanel eyebrow="ACADEMIC INTEGRITY" title="Liêm chính học thuật">
          <div className="signal-row signal-row--large">
            <ShieldCheck aria-hidden="true" />
            <p>{conclusion.highlight}</p>
          </div>
        </NeonPanel>
      </div>

      <div className="content-grid conclusion-stack">
        <NeonPanel eyebrow="BIGGEST CHALLENGE" title="Không để AI thay thế tư duy">
          <p>{conclusion.challenge}</p>
        </NeonPanel>

        <NeonPanel eyebrow="NEXT UPGRADE" title="Định hướng phát triển">
          <ul className="future-list">
            {conclusion.future.map((item) => (
              <li key={item}>
                <Zap size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </NeonPanel>
      </div>
    </motion.section>
  );
}
