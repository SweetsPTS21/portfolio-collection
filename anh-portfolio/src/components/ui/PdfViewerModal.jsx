import { Button } from 'antd';
import { X } from 'lucide-react';

export default function PdfViewerModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="pdf-backdrop" role="presentation">
      <section className="pdf-dialog" role="dialog" aria-modal="true" aria-label={project.title}>
        <header className="pdf-dialog__header">
          <div>
            <span>Minh chứng</span>
            <h2>{project.title}</h2>
          </div>
          <Button aria-label="Đóng PDF" icon={<X size={18} />} onClick={onClose} />
        </header>
        <iframe title={project.title} src={project.pdf} />
      </section>
    </div>
  );
}
