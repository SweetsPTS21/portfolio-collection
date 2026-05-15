import React from 'react';
import PageShell from '../components/layout/PageShell';
import SpellCard from '../components/projects/SpellCard';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="Spellbook projects" title="Sản phẩm nghiên cứu">
      <p className="lead">
        Tập hợp các sản phẩm và quá trình nghiên cứu thể hiện sự giao thoa giữa
        kỹ năng số và tư duy học thuật.
      </p>
      <section className="project-grid">
        {projects.map((project, index) => (
          <SpellCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
