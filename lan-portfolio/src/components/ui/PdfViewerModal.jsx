import { X } from 'lucide-react';

export default function PdfViewerModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="pdf-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="pdf-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="pdf-modal-header">
          <div>
            <p className="pdf-modal-kicker">Tài liệu bài tập</p>
            <h2 id="pdf-modal-title">{project.title}</h2>
          </div>
          <button
            type="button"
            className="pdf-close-button"
            onClick={onClose}
            aria-label="Đóng PDF"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </header>
        <iframe className="pdf-frame" src={project.pdf} title={project.title} />
      </section>
    </div>
  );
}
