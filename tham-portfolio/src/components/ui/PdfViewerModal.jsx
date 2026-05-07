import { X } from "lucide-react";
import { Motion, spring } from "react-motion";

export default function PdfViewerModal({ project, onClose }) {
    if (!project) {
        return null;
    }

    return (
        <div className="pdf-modal-backdrop" role="presentation" onClick={onClose}>
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
                                <p className="pdf-modal-kicker">Bài tập</p>
                                <h2 id="pdf-modal-title">{project.title}</h2>
                            </div>
                            <button
                                type="button"
                                className="pdf-close-button"
                                onClick={onClose}
                                aria-label="Đóng bài tập"
                            >
                                <X size={19} />
                            </button>
                        </header>
                        <iframe
                            className="pdf-frame"
                            src={project.pdf}
                            title={project.title}
                        />
                    </section>
                )}
            </Motion>
        </div>
    );
}
