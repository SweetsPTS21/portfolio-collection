import { motion } from "framer-motion";
import { ExternalLink, FileText, Palette, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { staggerContainer } from "../app/motionConfig";
import { PageTransition } from "../components/layout/PageTransition";
import { PaperCard } from "../components/ui/PaperCard";
import { StampBadge } from "../components/ui/StampBadge";
import caseFileCards from "../assets/sunset-concert-law-diary/svg/case-file-cards.svg";
import aiEthicsSpark from "../assets/sunset-concert-law-diary/svg/ai-ethics-spark.svg";

const iconMap = { FileText, Search, Sparkles, Users, Palette, ShieldCheck };

const evidenceUrls = {
  "docs/bt1.pdf": new URL("../../docs/bt1.pdf", import.meta.url).href,
  "docs/bt2.pdf": new URL("../../docs/bt2.pdf", import.meta.url).href,
  "docs/bt3.pdf": new URL("../../docs/bt3.pdf", import.meta.url).href,
  "docs/bt4.pdf": new URL("../../docs/bt4.pdf", import.meta.url).href,
  "docs/bt5.pdf": new URL("../../docs/bt5.pdf", import.meta.url).href,
  "docs/bt6.pdf": new URL("../../docs/bt6.pdf", import.meta.url).href,
};

export function ProjectsPage() {
  return (
    <PageTransition className="projectsPage">
      <header className="pageHero compactHero">
        <div>
          <StampBadge icon={FileText}>Six Digital Case Files</StampBadge>
          <h1>Trang Dự án</h1>
          <p>Toàn bộ bài thực hành được ghi chép rành mạch, đúng trọng tâm môn học và giữ dấu ấn tư duy cá nhân.</p>
        </div>
        <div className="heroAssetStack" aria-hidden="true">
          <img src={caseFileCards} alt="" />
          <img src={aiEthicsSpark} alt="" />
        </div>
      </header>

      <motion.section className="projectGrid" variants={staggerContainer} initial="initial" animate="animate">
        {portfolioData.projects.map((project) => {
          const Icon = iconMap[project.icon] || FileText;
          return (
            <PaperCard key={project.chapter} className="projectCard">
              <div className="projectCard__topline">
                <StampBadge icon={Icon} tone={project.chapter % 2 === 0 ? "orange" : "red"}>Chương {project.chapter}</StampBadge>
                <span className="caseNumber">0{project.chapter}</span>
              </div>
              <h2>{project.title}</h2>
              <div className="projectBlock">
                <h3>Mục tiêu</h3>
                <p>{project.goal}</p>
              </div>
              <div className="projectBlock">
                <h3>Quá trình thực hiện</h3>
                <p>{project.process}</p>
              </div>
              <a className="evidenceLink" href={evidenceUrls[project.evidence]} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" />
                <span>Minh chứng PDF</span>
              </a>
            </PaperCard>
          );
        })}
      </motion.section>
    </PageTransition>
  );
}
