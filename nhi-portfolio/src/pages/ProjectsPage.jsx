import React, { useState } from 'react';
import PageShell from '../components/layout/PageShell';
import FlowerCard from '../components/projects/FlowerCard';
import PdfViewerModal from '../components/projects/PdfViewerModal';
import { projects } from '../data/portfolioData';
import { getPdfContent } from '../data/pdfContentData';
import bunnyReading from '../assets/bunny-cloud-garden/bunny-reading.svg';
import grassBottom from '../assets/bunny-cloud-garden/grass-bottom.svg';

export default function ProjectsPage() {
  const [viewingProject, setViewingProject] = useState(null);

  const pdfPages = viewingProject
    ? getPdfContent(viewingProject.chapter)?.pages
    : null;

  return (
    <PageShell eyebrow="Flower bed projects" title="Sản phẩm nghiên cứu">
      <div className="projects-hero">
        <img className="projects-hero-bunny" src={bunnyReading} alt="" />
        <p className="lead">{projects.intro}</p>
      </div>

      <section className="project-grid">
        {projects.items.map((project, index) => (
          <FlowerCard
            key={project.title}
            project={project}
            index={index}
            onViewPdf={setViewingProject}
          />
        ))}
      </section>

      <img className="grass-footer" src={grassBottom} alt="" />

      <PdfViewerModal
        project={viewingProject}
        pages={pdfPages}
        onClose={() => setViewingProject(null)}
      />
    </PageShell>
  );
}
