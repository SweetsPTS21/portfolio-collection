import { motion } from "framer-motion";
import { BookOpen, Heart, Scale, Sparkles, Target } from "lucide-react";
import InkButton from "../components/ui/InkButton.jsx";
import IndexTab from "../components/ui/IndexTab.jsx";
import MarginNote from "../components/ui/MarginNote.jsx";
import NotebookCard from "../components/ui/NotebookCard.jsx";
import { pageCopy, profile, skillGroups } from "../data/portfolioData.js";
import notebookSpreadFrame from "../assets/blue-rain-notebook/notebook-spread-frame.svg";
import rainInkIcons from "../assets/blue-rain-notebook/rain-ink-icons.svg";

export default function RainNotebookHeroPage({ onNavigate }) {
  return (
    <section className="hero-page">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="soft-badge"><Sparkles size={17} /> {pageCopy.about.badge}</span>
          <h1>{profile.name}</h1>
          <p className="hero-lead">{profile.intro}</p>
          <div className="hero-actions">
            <InkButton onClick={() => onNavigate("/entries")}>Xem bài tập</InkButton>
            <InkButton variant="soft" onClick={() => onNavigate("/signature")}>Đọc tổng kết</InkButton>
          </div>
        </motion.div>

        <motion.div
          className="open-notebook-hero"
          initial={{ opacity: 0, rotate: 4, y: 40 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={notebookSpreadFrame} alt="" />
          <div className="notebook-title-page">
            <span>{profile.field}</span>
            <h2>{profile.school}</h2>
            <p>{profile.objective}</p>
          </div>
          <img className="ink-icon-strip" src={rainInkIcons} alt="" />
        </motion.div>
      </div>

      <div className="fact-grid">
        <NotebookCard>
          <Scale size={26} />
          <span>Ngành học</span>
          <strong>{profile.field}</strong>
        </NotebookCard>
        <NotebookCard delay={0.05}>
          <BookOpen size={26} />
          <span>Phong cách</span>
          <strong>{profile.style}</strong>
        </NotebookCard>
        <NotebookCard delay={0.1}>
          <Heart size={26} />
          <span>Sở thích</span>
          <strong>{profile.hobbies.join(" • ")}</strong>
        </NotebookCard>
        <NotebookCard delay={0.15}>
          <Target size={26} />
          <span>Nguyên tắc</span>
          <strong>phản biện độc lập</strong>
        </NotebookCard>
      </div>

      <section className="notebook-section two-column-section">
        <div>
          <span className="soft-badge"><BookOpen size={17} /> {pageCopy.about.toolsTitle}</span>
          <h2>{pageCopy.about.toolsIntro}</h2>
        </div>
        <MarginNote label={pageCopy.about.principleTitle} tone="mint">
          {profile.principle}
        </MarginNote>
      </section>

      <div className="index-tab-grid">
        {skillGroups.map((group) => (
          <IndexTab key={group.tab} {...group} />
        ))}
      </div>
    </section>
  );
}
