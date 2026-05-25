import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { projects, projectsIntro } from '../data/portfolioData.js';
import { pageReveal } from '../app/motionConfig.js';

export default function ProjectsPage() {
  return (
    <section className="market-section route-page projects-section projects-route">
      <motion.div className="section-heading route-heading" variants={pageReveal} initial="hidden" animate="visible">
        <span className="section-kicker">Projects</span>
        <h1>Những bài thực hành đã hoàn thành</h1>
        <p>{projectsIntro}</p>
      </motion.div>

      <div className="project-chapter-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-chapter-card"
            key={project.chapter}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <PriceTag tone={index % 2 === 0 ? 'mint' : 'gold'}>{project.chapter}</PriceTag>
            <h2>{project.title}</h2>
            <div className="chapter-block">
              <h3>Mục tiêu</h3>
              <p>{project.goal}</p>
            </div>
            <div className="chapter-block">
              <h3>Quá trình thực hiện</h3>
              <p>{project.process}</p>
            </div>
            <a className="stall-card-link chapter-link" href={project.pdf} target="_blank" rel="noreferrer">
              Mở tài liệu PDF
            </a>
          </motion.article>
        ))}
      </div>

      <div className="route-actions">
        <MarketButton href="/about" variant="light">Về giới thiệu</MarketButton>
        <MarketButton href="/conclutions">Sang tổng kết</MarketButton>
      </div>
    </section>
  );
}
