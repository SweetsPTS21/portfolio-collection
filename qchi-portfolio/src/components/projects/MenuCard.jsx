import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const chalkDoodles = [
    "☆ today's special ☆",
    "♡ café menu ♡",
    "~ welcome ~",
    "✿ おすすめ ✿",
    "★ best seller ★",
    "♪ enjoy ♪",
];

export default function MenuCard({ project, index }) {
    const doodle = chalkDoodles[index % chalkDoodles.length];

    return (
        <motion.article
            className="menu-card"
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            {/* Chalk doodle text */}
            <span className="chalk-doodle" aria-hidden="true">{doodle}</span>

            <div className="menu-content">
                <span className="menu-number">Menu {index + 1}</span>
                <h2>{project.title}</h2>
                <h3>{project.goal}</h3>
                <p>{project.process}</p>
                {project.pdf ? (
                    <div className="menu-actions">
                        <a
                            className="menu-action primary"
                            href={project.pdf}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Mở PDF ${project.title}`}
                        >
                            <ExternalLink size={17} />
                            <span>Mở PDF</span>
                        </a>
                        <a
                            className="menu-action secondary"
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

            {/* Chalk pieces at bottom-right */}
            <div className="chalk-pieces" aria-hidden="true">
                <span className="chalk chalk-white" />
                <span className="chalk chalk-yellow" />
                <span className="chalk chalk-mint" />
            </div>
        </motion.article>
    );
}
