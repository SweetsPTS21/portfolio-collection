import { useState } from 'react';
import { Button, Modal } from 'antd';
import { FileSearch, Goal, NotebookText } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects, aiPrinciples } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell projects-section">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Projects"
          title="6 bài tập"
          note="Mỗi flashcard giữ đúng mục tiêu, quá trình thực hiện và minh chứng PDF từ tài liệu gốc."
        />
      </ScrollReveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.04}>
            <motion.article
              className="project-card"
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 18,
              }}
            >
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <div className="project-copy">
                <strong>
                  <Goal size={16} />
                  Mục tiêu
                </strong>
                <p>{project.goal}</p>
                <strong>
                  <NotebookText size={16} />
                  Quá trình
                </strong>
                <p>{project.process}</p>
              </div>
              <Button
                type="primary"
                icon={<FileSearch size={18} />}
                onClick={() => setActiveProject(project)}
              >
                Xem
              </Button>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal className="principles-note">
        <span className="washi-label">AI rules</span>
        <h3>Bộ 5 nguyên tắc ứng dụng AI trong nghiên cứu</h3>
        <ol>
          {aiPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ol>
      </ScrollReveal>
      <Modal
        title={activeProject?.title}
        open={Boolean(activeProject)}
        onCancel={() => setActiveProject(null)}
        footer={null}
        width="min(980px, 92vw)"
        destroyOnClose
      >
        {activeProject ? (
          <iframe
            className="pdf-frame"
            title={activeProject.title}
            src={activeProject.file}
          />
        ) : null}
      </Modal>
    </section>
  );
}
