import React from 'react';
import PageShell from '../components/layout/PageShell';
import ResearchNoteCard from '../components/projects/ResearchNoteCard';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="Research notes" title="Sản phẩm nghiên cứu">
      <p className="lead">
        Tập hợp các sản phẩm và quá trình nghiên cứu như những trang ghi chú
        trên bàn học: rõ mục tiêu, có quy trình và luôn kèm tài liệu gốc để kiểm chứng.
      </p>
      <section className="project-grid">
        {projects.map((project, index) => (
          <ResearchNoteCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
