import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import spellFrame from "../../assets/magical-girl-ui/spell-card-frame.svg";

export default function SpellCard({ project, index }) {
    return (
        <motion.article
            className="spell-card"
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <img className="spell-card-frame" src={spellFrame} alt="" />
            <div className="spell-content">
                <span className="spell-number">Spell {index + 1}</span>
                <h2>{project.title}</h2>
                <h3>{project.goal}</h3>
                <p>{project.process}</p>
                {project.pdf ? (
                    <div className="spell-actions">
                        <a
                            className="spell-action primary"
                            href={project.pdf}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Mở PDF ${project.title}`}
                        >
                            <ExternalLink size={17} />
                            <span>Mở PDF</span>
                        </a>
                        <a
                            className="spell-action secondary"
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
