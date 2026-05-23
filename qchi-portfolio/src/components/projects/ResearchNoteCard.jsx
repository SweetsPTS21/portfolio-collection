import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { cardHover, noteReveal } from "../../app/motionConfig";
import brassClipsPins from "../../assets/azure-study-desk/brass-clips-pins.svg";
import indexTabSet from "../../assets/azure-study-desk/index-tab-set.svg";
import kraftTapeTags from "../../assets/azure-study-desk/kraft-tape-tags.svg";

const noteTypes = [
    { label: "Citation note", slug: "citation" },
    { label: "Source review", slug: "source" },
    { label: "AI prompt log", slug: "prompt" },
    { label: "Meeting brief", slug: "brief" },
    { label: "Media draft", slug: "media" },
    { label: "Integrity map", slug: "integrity" },
];

export default function ResearchNoteCard({ project, index }) {
    const noteType = noteTypes[index % noteTypes.length];

    return (
        <motion.article
            className={`research-note-card note-theme-${noteType.slug}`}
            variants={noteReveal}
            initial="initial"
            whileInView="animate"
            whileHover={cardHover(index)}
            viewport={{ once: true, amount: 0.18 }}
        >
            <img className="note-tape note-tape-top" src={kraftTapeTags} alt="" />
            <img className="note-clip" src={brassClipsPins} alt="" />
            <img className="note-index-tabs" src={indexTabSet} alt="" />
            <span className="note-tab" aria-hidden="true">{noteType.label}</span>
            <span className="note-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span className="note-corner-fold" aria-hidden="true" />
            <span className="note-underline" aria-hidden="true" />

            <div className="note-content">
                <span className="note-number">Case note {index + 1}</span>
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
