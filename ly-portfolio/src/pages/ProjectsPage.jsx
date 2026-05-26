import React from 'react';
import PageShell from '../components/layout/PageShell';
import FlowerCard from '../components/projects/FlowerCard';
import { projects } from '../data/portfolioData';
import swanReading from '../assets/ballet-swan-lake/swan-reading.svg';
import rosePetal from '../assets/ballet-swan-lake/rose-petal.svg';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="Vở kịch dự án" title="Sản phẩm nghiên cứu">
      <div className="projects-hero">
        <img className="projects-hero-bunny" src={swanReading} alt="" />
        <p className="lead">{projects.intro}</p>
      </div>

      <section className="project-grid">
        {projects.items.map((project, index) => (
          <FlowerCard key={project.title} project={project} index={index} />
        ))}
      </section>

      <img className="grass-footer" src={rosePetal} alt="" />
    </PageShell>
  );
}
