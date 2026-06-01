import React from 'react';
import PageShell from '../components/layout/PageShell';
import ActivityTicket from '../components/projects/ActivityTicket';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <PageShell eyebrow="activity tickets" title="Sản phẩm thực hành">
      <p className="lead">
        Dưới đây là các sản phẩm thực hành được em hoàn thiện một cách chỉn chu, đi thẳng vào trọng tâm chuyên môn và bám sát yêu cầu từ môn học.
      </p>
      <section className="activity-grid">
        {projects.map((project, index) => (
          <ActivityTicket key={project.title} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
