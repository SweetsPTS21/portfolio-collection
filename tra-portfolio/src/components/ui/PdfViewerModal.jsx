import { Modal } from 'antd';

export default function PdfViewerModal({ project, open, onClose }) {
  return (
    <Modal
      centered
      className="pdf-modal"
      footer={null}
      open={open}
      title={project ? `Bai ${project.number} - ${project.title}` : 'Bai tap'}
      width="min(1040px, calc(100vw - 24px))"
      onCancel={onClose}
    >
      {project ? (
        <>
          <iframe className="pdf-frame" src={project.file} title={`PDF ${project.title}`} />
          <a className="pdf-fallback" href={project.file} target="_blank" rel="noreferrer">
            Mo PDF trong tab moi
          </a>
        </>
      ) : null}
    </Modal>
  );
}
