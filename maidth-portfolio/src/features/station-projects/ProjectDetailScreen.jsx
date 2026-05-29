import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { cardStagger } from '../../app/motionConfig';
import { FlowerWindowBadge } from '../../components/ui/FlowerWindowBadge';
import { RailTag } from '../../components/ui/RailTag';
import { SparkleDivider } from '../../components/ui/SparkleDivider';

export function splitProcessParts(process) {
  return process
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ProjectDetailScreen({ project, onBack }) {
  const processParts = splitProcessParts(project.process);

  return (
    <motion.section
      role="region"
      aria-label={`Chi tiết ${project.title}`}
      className="project-detail-screen glass-surface"
      variants={cardStagger}
      initial="hidden"
      animate="visible"
    >
      <button className="detail-back-button" type="button" onClick={onBack}>
        <ArrowLeft size={18} aria-hidden="true" />
        <span>Quay lại danh sách dự án</span>
      </button>

      <div className="modal-heading">
        <RailTag tone="gold">{project.chapter}</RailTag>
        <h2>{project.title}</h2>
        <p>{project.goal}</p>
      </div>

      <div className="modal-detail-grid">
        <section className="pdf-preview-panel" aria-label={`PDF preview ${project.chapter}`}>
          <div className="pdf-toolbar">
            <FlowerWindowBadge icon={FileText}>PDF preview</FlowerWindowBadge>
            <a href={project.pdfUrl} target="_blank" rel="noreferrer">
              Mở PDF tab mới
            </a>
          </div>
          <iframe
            className="pdf-embed"
            title={`PDF ${project.chapter} ${project.title}`}
            src={project.pdfUrl}
          />
        </section>

        <section className="process-detail-panel">
          <RailTag tone="rose">Quá trình thực hiện</RailTag>
          <SparkleDivider />
          <ol className="process-step-list">
            {processParts.map((part, index) => (
              <li key={part}>
                <span>{`Process ${String(index + 1).padStart(2, '0')}`}</span>
                <p>{part}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </motion.section>
  );
}
