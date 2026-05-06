import { Download, X } from 'lucide-react';
import { Motion, spring } from 'react-motion';

export default function PdfViewerModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <Motion
        defaultStyle={{ opacity: 0, scale: 0.98 }}
        style={{
          opacity: spring(1, { stiffness: 120, damping: 18 }),
          scale: spring(1, { stiffness: 120, damping: 18 }),
        }}
      >
        {({ opacity, scale }) => (
          <section
            className="pdf-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-modal-title"
            onClick={(event) => event.stopPropagation()}
            style={{ opacity, transform: `scale(${scale})` }}
          >
            <header className="pdf-modal-header">
              <div>
                <p className="panel-kicker mb-1 text-[var(--paper)]">{project.number}</p>
                <h2
                  id="pdf-modal-title"
                  className="m-0 font-['Space_Grotesk'] text-2xl font-bold leading-none"
                >
                  {project.title}
                </h2>
                <p className="m-0 mt-1 text-sm text-[rgba(255,253,248,0.72)]">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  className="desk-action"
                  href={project.pdf}
                  download={project.pdfName}
                >
                  <Download size={17} />
                  <span>Tải về</span>
                </a>
                <button
                  type="button"
                  className="desk-action"
                  onClick={onClose}
                  aria-label="Đóng PDF"
                >
                  <X size={18} />
                </button>
              </div>
            </header>
            <iframe className="pdf-frame" src={project.pdf} title={project.title} />
          </section>
        )}
      </Motion>
    </div>
  );
}
