import { motion } from "framer-motion";
import { Mail, Send, Sparkles, Target, TriangleAlert } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { staggerContainer } from "../app/motionConfig";
import { PageTransition } from "../components/layout/PageTransition";
import { PaperCard } from "../components/ui/PaperCard";
import { StampBadge } from "../components/ui/StampBadge";
import encoreTimeline from "../assets/sunset-concert-law-diary/svg/encore-timeline.svg";

export function ConclusionPage() {
  const { conclusion } = portfolioData;

  return (
    <PageTransition className="conclusionPage">
      <header className="pageHero conclusionHero">
        <div>
          <StampBadge icon={Sparkles}>Final Encore Reflection</StampBadge>
          <h1>Trang Tổng kết</h1>
          <p>{conclusion.reflection}</p>
        </div>
        <img className="timelineHero" src={encoreTimeline} alt="" aria-hidden="true" />
      </header>

      <motion.section className="reflectionGrid" variants={staggerContainer} initial="initial" animate="animate">
        <PaperCard className="reflectionCard highlightCard">
          <StampBadge icon={Target} tone="gold">Điểm tâm đắc</StampBadge>
          <ul>
            {conclusion.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </PaperCard>

        <PaperCard className="reflectionCard challengeCard">
          <StampBadge icon={TriangleAlert} tone="orange">Thách thức</StampBadge>
          <ul>
            {conclusion.challenges.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </PaperCard>
      </motion.section>

      <section className="futureBand">
        <PaperCard className="futureCard">
          <StampBadge icon={Send}>Định hướng</StampBadge>
          <p>{conclusion.future}</p>
        </PaperCard>
        <PaperCard className="thanksCard">
          <StampBadge icon={Mail} tone="gold">Lời cảm ơn</StampBadge>
          <p>{conclusion.thanks}</p>
        </PaperCard>
      </section>
    </PageTransition>
  );
}
