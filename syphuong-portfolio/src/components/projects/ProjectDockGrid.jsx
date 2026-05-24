import { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import projectFrame from '../../assets/project-frame.png';
import { projects } from '../../data/portfolioData.js';

export default function ProjectDockGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  const handleCardKeyDown = (event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            role="button"
            tabIndex={0}
            aria-label={`Xem quá trình thực hiện ${project.title}`}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(event) => handleCardKeyDown(event, project)}
            style={{ backgroundImage: `url(${projectFrame})` }}
          >
            <span className="project-number">{project.id}</span>
            <div className="project-content">
              <p className="chapter">{project.chapter}</p>
              <h3>{project.title}</h3>
              <div className="board-wave small" aria-hidden="true" />
              <p>{project.short}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Đóng"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} strokeWidth={2} />
            </button>
            <p className="chapter">{selectedProject.chapter}</p>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <div className="board-wave small" aria-hidden="true" />
            <p>{selectedProject.process}</p>
            <a
              className="pdf-link"
              href={selectedProject.evidenceHref}
              target="_blank"
              rel="noreferrer"
            >
              Mở bài tập <ExternalLink size={16} strokeWidth={1.8} />
            </a>
          </section>
        </div>
      ) : null}
    </>
  );
}
