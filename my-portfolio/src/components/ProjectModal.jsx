import React from 'react';
import { ExternalLink, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  React.useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="project-modal-close"
          type="button"
          aria-label="Đóng modal"
          onClick={onClose}
        >
          <X size={18} aria-hidden="true" />
        </button>
        <p className="project-modal-kicker">Chương {project.number}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <div className="project-modal-body">
          <p className="project-modal-label">{project.focusLabel}</p>
          <p>{project.fullText}</p>
        </div>
        <a
          className="project-modal-pdf"
          href={project.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} aria-hidden="true" />
          <span>{project.pdfLabel}</span>
        </a>
      </section>
    </div>
  );
};

export default ProjectModal;
