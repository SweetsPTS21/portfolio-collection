import { useState } from 'react';
import { Modal } from 'antd';
import BouquetProjectCard from '../floral/BouquetProjectCard.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { projects } from '../../data/portfolioData.js';

export default function BouquetProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section id="projects" className="market-section bouquet-projects">
        <ScrollReveal className="section-heading">
          <span className="eyebrow">Bouquet showcase</span>
          <h2 className="section-title">{projects.title}</h2>
          <p>{projects.intro}</p>
        </ScrollReveal>
        <div className="project-grid">
          {projects.items.map((project, index) => (
            <BouquetProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              flower={project.flower}
              index={index}
              onView={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      <Modal
        className="project-file-modal"
        footer={null}
        onCancel={() => setActiveProject(null)}
        open={Boolean(activeProject)}
        title={activeProject?.title}
        width="min(1120px, 94vw)"
        destroyOnHidden
      >
        {activeProject ? (
          <iframe
            className="project-file-frame"
            src={activeProject.file}
            title={`File ${activeProject.title}`}
          />
        ) : null}
      </Modal>
    </>
  );
}
