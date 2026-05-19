import React from 'react';
import PageShell from '../components/layout/PageShell';
import FlowerCard from '../components/projects/FlowerCard';
import { projects } from '../data/portfolioData';
import bunnyReading from '../assets/bunny-cloud-garden/bunny-reading.svg';
import grassBottom from '../assets/bunny-cloud-garden/grass-bottom.svg';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="Flower bed projects" title="Sản phẩm nghiên cứu">
      <div className="projects-hero">
        <img className="projects-hero-bunny" src={bunnyReading} alt="" />
        <p className="lead">{projects.intro}</p>
      </div>

      <section className="project-grid">
        {projects.items.map((project, index) => (
          <FlowerCard key={project.title} project={project} index={index} />
        ))}
      </section>

      <img className="grass-footer" src={grassBottom} alt="" />
    </PageShell>
  );
}
