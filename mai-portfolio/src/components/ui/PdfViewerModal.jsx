import { Button, Modal } from "antd";
import { ExternalLink } from "lucide-react";

export default function PdfViewerModal({ project, open, onClose }) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width="min(1080px, calc(100vw - 32px))"
      centered
      className="pdf-modal"
      title={project?.title}
    >
      {project && (
        <div className="pdf-modal__body">
          <div className="pdf-modal__toolbar">
            <span>{project.pdfName}</span>
            <Button
              href={project.pdf}
              target="_blank"
              rel="noreferrer"
              icon={<ExternalLink size={16} />}
            >
              Mở file
            </Button>
          </div>
          <iframe src={project.pdf} title={project.title} />
        </div>
      )}
    </Modal>
  );
}
