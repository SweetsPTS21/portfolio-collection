import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

function PdfModalContent({ project, pages, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="pdf-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="presentation"
      >
        <motion.section
          className="pdf-modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="pdf-modal-header">
            <div className="pdf-modal-info">
              <span className="pdf-modal-chapter">Chương {project.chapter}</span>
              <h2 className="pdf-modal-title">{project.title}</h2>
            </div>
            <div className="pdf-modal-actions">
              {project.pdf && (
                <a
                  className="pdf-modal-btn"
                  href={project.pdf}
                  download
                  aria-label="Tải PDF gốc"
                >
                  <Download size={16} />
                </a>
              )}
              <button
                className="pdf-modal-btn close"
                onClick={onClose}
                aria-label="Đóng"
                type="button"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="pdf-modal-body">
            {pages.map((page) => (
              <img
                key={page.page}
                className="pdf-modal-image"
                src={page.imageUrl}
                alt={`${project.title} — Trang ${page.page}`}
                loading="lazy"
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PdfViewerModal({ project, pages, onClose }) {
  if (!project || !pages) return null;

  return (
    <PdfModalContent
      key={project.chapter}
      project={project}
      pages={pages}
      onClose={onClose}
    />
  );
}
