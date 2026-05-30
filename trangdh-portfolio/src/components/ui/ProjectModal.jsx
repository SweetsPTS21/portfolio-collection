import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPinned, ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * ProjectModal — hiển thị quá trình (steps) và nút mở PDF khi click vào postcard.
 */
export default function ProjectModal({ project, pdfUrl, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel wrapper — handles centering only */}
          <div className="modal-positioner">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={project.title}
              className="modal-panel"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              {/* Close */}
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Đóng"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="modal-header">
                <span className="modal-chapter">{project.chapter}</span>
                <h2 className="modal-title">{project.title}</h2>
                <p className="modal-destination">
                  <MapPinned size={14} /> {project.destination}
                </p>
              </div>

              {/* Goal */}
              <div className="modal-section">
                <span className="modal-label">🎯 Mục tiêu</span>
                <p className="modal-goal">{project.goal}</p>
              </div>

              {/* Steps */}
              <div className="modal-section">
                <span className="modal-label">📋 Quá trình thực hiện</span>
                <ol className="modal-steps">
                  {project.steps.map((step, i) => (
                    <li key={i} className="modal-step">
                      <CheckCircle2 size={16} className="modal-step-icon" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* PDF CTA */}
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-pdf-btn"
                  id={`modal-pdf-${project.chapter.replace(' ', '-')}`}
                >
                  Xem bài nộp <ArrowUpRight size={15} />
                </a>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
