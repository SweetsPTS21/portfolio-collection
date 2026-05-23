import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const noteLabels = [
    "Research note",
    "Source review",
    "AI prompt log",
    "Meeting brief",
    "Media draft",
    "Integrity map",
];

export default function ResearchNoteCard({ project, index }) {
    const label = noteLabels[index % noteLabels.length];

    return (
        <motion.article
            className="research-note-card"
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
            }}
        >
            <span className="note-tab" aria-hidden="true">{label}</span>
            <span className="note-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>

            <div className="note-content">
                <span className="note-number">Ghi chú {index + 1}</span>
                <h2>{project.title}</h2>
                <h3>{project.goal}</h3>
                <p>{project.process}</p>
                {project.pdf ? (
                    <div className="note-actions">
                        <a
                            className="note-action primary"
                            href={project.pdf}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Mở PDF ${project.title}`}
                        >
                            <ExternalLink size={17} />
                            <span>Mở PDF</span>
                        </a>
                        <a
                            className="note-action secondary"
                            href={project.pdf}
                            download={project.pdfName}
                            aria-label={`Tải PDF ${project.title}`}
                        >
                            <Download size={17} />
                            <span>Tải về</span>
                        </a>
                    </div>
                ) : null}
            </div>
        </motion.article>
    );
}
