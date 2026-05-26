import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { projects, projectsIntro } from '../data/portfolioData.js';
import {
  cardHoverMotion,
  contentBlockReveal,
  dynamicCardReveal,
  pageReveal,
} from '../app/motionConfig.js';

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
            className={`project-chapter-card project-chapter-card--${project.decor}`}
            key={project.chapter}
            custom={index}
            variants={dynamicCardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            whileHover={cardHoverMotion.whileHover}
            whileTap={cardHoverMotion.whileTap}
          >
            <PriceTag tone={index % 2 === 0 ? 'mint' : 'gold'}>{project.chapter}</PriceTag>
            <h2>{project.title}</h2>
            <motion.div
              className="chapter-block"
              custom={0}
              variants={contentBlockReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.32 }}
            >
              <h3>Mục tiêu</h3>
              <p>{project.goal}</p>
            </motion.div>
            <motion.div
              className="chapter-block"
              custom={1}
              variants={contentBlockReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.32 }}
            >
              <h3>Quá trình thực hiện</h3>
              <p>{project.process}</p>
            </motion.div>
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
