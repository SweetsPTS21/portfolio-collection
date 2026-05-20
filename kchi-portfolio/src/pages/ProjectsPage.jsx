import React from 'react';
import PageShell from '../components/layout/PageShell';
import MenuCard from '../components/projects/MenuCard';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="Café menu" title="Sản phẩm nghiên cứu">
      <p className="lead">
        Tập hợp các sản phẩm và quá trình nghiên cứu – mỗi dự án là một thức uống
        đặc biệt trong menu học thuật của mình.
      </p>
      <section className="project-grid">
        {projects.map((project, index) => (
          <MenuCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
