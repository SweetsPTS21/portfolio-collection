import { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import { projects, projectsIntro } from '../../data/portfolioData.js';
import PaperCard from '../ui/PaperCard.jsx';
import PdfViewerModal from '../ui/PdfViewerModal.jsx';

export default function ProjectsPanel() {
  const [viewingProject, setViewingProject] = useState(null);

  return (
    <div className="space-y-6">
      <PaperCard title="Project">
        <p className="m-0">{projectsIntro.text}</p>
        <p className="m-0 mt-2 font-bold text-[var(--ink)]">{projectsIntro.chooser}</p>
        <p className="m-0 mt-2">{projectsIntro.tip}</p>
      </PaperCard>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="project-file p-5 pt-12">
            <p className="panel-kicker">{project.number}</p>
            <h3 className="m-0 font-['Space_Grotesk'] text-xl font-bold text-[var(--ink)]">
              {project.title}
            </h3>
            <p className="m-0 mt-1 font-bold text-[var(--lamp-green)]">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className="desk-action"
                onClick={() => setViewingProject(project)}
                aria-label={`Xem ${project.title}`}
              >
                <Eye size={17} />
                <span>Xem PDF</span>
              </button>
              <a className="desk-action" href={project.pdf} download={project.pdfName}>
                <Download size={17} />
                <span>Tải về</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <PdfViewerModal
        project={viewingProject}
        onClose={() => setViewingProject(null)}
      />
    </div>
  );
}
