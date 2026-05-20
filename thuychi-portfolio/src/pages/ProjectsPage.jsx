import React from 'react';
import PageShell from '../components/layout/PageShell';
import MushroomCard from '../components/projects/MushroomCard';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="Forest path projects" title="Sản phẩm nghiên cứu">
      <p className="lead">
        Mỗi bài tập là một trạm dừng trên con đường rừng, nơi em thu thập
        kinh nghiệm và kỹ năng mới.
      </p>
      <section className="project-grid">
        {projects.map((project, index) => (
          <MushroomCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
