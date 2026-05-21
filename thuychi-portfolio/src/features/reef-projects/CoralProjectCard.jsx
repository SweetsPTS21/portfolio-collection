import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import coralReefScene from "../../assets/underwater-world/coral-reef-scene.svg";
import BubbleButton from "../../components/ui/BubbleButton";
import ShellProjectBadge from "./ShellProjectBadge";

export default function CoralProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-reef-card"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <img className="project-reef-art" src={coralReefScene} alt="" />
      <div className="project-reef-content">
        <ShellProjectBadge>Rạn san hô {index + 1}</ShellProjectBadge>
        <h2>{project.title}</h2>
        <h3>{project.goal}</h3>
        <p>{project.process}</p>
        {project.pdf ? (
          <div className="project-actions">
            <BubbleButton
              className="primary"
              href={project.pdf}
              target="_blank"
              rel="noreferrer"
              aria-label={`Mở PDF ${project.title}`}
            >
              <ExternalLink size={17} />
              <span>Mở PDF</span>
            </BubbleButton>
            <BubbleButton
              className="secondary"
              href={project.pdf}
              download={project.pdfName}
              aria-label={`Tải PDF ${project.title}`}
            >
              <Download size={17} />
              <span>Tải về</span>
            </BubbleButton>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
