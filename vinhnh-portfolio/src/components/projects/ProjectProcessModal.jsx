import { AnimatePresence, motion } from "framer-motion";
import { Copy, ExternalLink, X } from "lucide-react";

export default function ProjectProcessModal({ project, onClose }) {
  async function copySummary() {
    if (!project) return;
    const text = `${project.title}\n${project.objective}\n${project.processSteps.join("\n")}`;
    await navigator.clipboard?.writeText(text);
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
        >
          <motion.article
            className="process-modal ice-card"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="process-modal-title"
          >
            <button className="modal-close" onClick={onClose} type="button" aria-label="Đóng">
              <X size={20} />
            </button>
            <span className="ice-badge">{project.chapter}</span>
            <h2 id="process-modal-title">{project.title}</h2>
            <p className="modal-objective">{project.objective}</p>
            <ol className="process-timeline">
              {project.processSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <div className="modal-actions">
              <button className="secondary-action" onClick={copySummary} type="button"><Copy size={18} /> Sao chép tóm tắt</button>
              <a className="primary-action" href={project.file} target="_blank" rel="noreferrer"><ExternalLink size={18} /> Mở file PDF</a>
              <button className="secondary-action" onClick={onClose} type="button">Đóng</button>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
