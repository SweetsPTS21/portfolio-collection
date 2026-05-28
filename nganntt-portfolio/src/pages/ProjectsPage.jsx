import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Page } from "../components/ui/Page";
import { BlueMenuCard, IngredientBadge } from "../components/ui/Cards";
import { staggerContainer } from "../app/motionConfig";

export function ProjectsPage() {
  return (
    <Page className="projectsPage">
      <section className="pageIntro menuBoardIntro">
        <IngredientBadge>Bakery menu board</IngredientBadge>
        <h1>Six Specials</h1>
        <p>6 món trong menu học tập của Ngân, mỗi món giữ nguyên tinh thần làm việc chủ động và sáng tạo.</p>
      </section>
      <motion.section className="projectGrid" variants={staggerContainer} initial="initial" animate="animate">
        {portfolioData.projects.map((project) => (
          <BlueMenuCard key={project.chapter} project={project} />
        ))}
      </motion.section>
    </Page>
  );
}
