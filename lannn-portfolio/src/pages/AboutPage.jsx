import { motion } from "framer-motion";
import { BookOpen, Headphones, Music, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { staggerContainer } from "../app/motionConfig";
import { PageTransition } from "../components/layout/PageTransition";
import { PaperCard } from "../components/ui/PaperCard";
import { StampBadge } from "../components/ui/StampBadge";
import lawBookStage from "../assets/sunset-concert-law-diary/svg/law-book-stage.svg";

const avatarUrl = new URL("../../docs/avatar.jpg", import.meta.url).href;

export function AboutPage() {
  const { person, about } = portfolioData;

  return (
    <PageTransition className="aboutPage">
      <section className="heroStage">
        <div className="heroCopy">
          <StampBadge icon={Scale}>Sinh viên Luật</StampBadge>
          <h1>{person.fullName}</h1>
          <p className="heroLead">{about.intro}</p>
          <div className="interestRow" aria-label="Sở thích">
            <StampBadge icon={BookOpen} tone="gold">{person.interests[0]}</StampBadge>
            <StampBadge icon={Headphones} tone="orange">{person.interests[1]}</StampBadge>
            <StampBadge icon={Sparkles} tone="red">{person.interests[2]}</StampBadge>
          </div>
        </div>
        <div className="heroVisual">
          <img className="lawBookStage" src={lawBookStage} alt="" aria-hidden="true" />
          <figure className="avatarFrame">
            <img src={avatarUrl} alt="Chân dung Nguyễn Ngọc Lan" />
            <figcaption>{person.studentId}</figcaption>
          </figure>
        </div>
      </section>

      <motion.section className="infoGrid" variants={staggerContainer} initial="initial" animate="animate">
        <PaperCard>
          <h2>Đôi nét</h2>
          <dl className="profileList">
            <div><dt>Họ và tên</dt><dd>{person.fullName}</dd></div>
            <div><dt>Mã sinh viên</dt><dd>{person.studentId}</dd></div>
            <div><dt>Ngành học</dt><dd>{person.major}</dd></div>
            <div><dt>Trường</dt><dd>{person.university}</dd></div>
          </dl>
        </PaperCard>

        <PaperCard>
          <h2>Mục tiêu học tập</h2>
          <p>{about.learningGoal}</p>
        </PaperCard>

        <PaperCard>
          <h2>Mục tiêu portfolio</h2>
          <p>{about.portfolioGoal}</p>
        </PaperCard>

        <PaperCard className="principleCard">
          <StampBadge icon={ShieldCheck}>Nguyên tắc</StampBadge>
          <p>{about.principle}</p>
        </PaperCard>
      </motion.section>

      <section className="toolSection">
        <div className="sectionHeading">
          <Music size={22} aria-hidden="true" />
          <h2>Công cụ đã sử dụng</h2>
        </div>
        <div className="toolCloud">
          {about.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
