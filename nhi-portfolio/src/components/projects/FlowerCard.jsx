import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import flowerFrame from "../../assets/bunny-cloud-garden/flower-frame.svg";

export default function FlowerCard({ project, index }) {
  return (
    <motion.article
      className="flower-card"
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <img className="flower-card-frame" src={flowerFrame} alt="" />
      <div className="flower-content">
        <span className="flower-number">Chương {project.chapter}</span>
        <h2>{project.title}</h2>
        <h3>{project.content}</h3>
        <p>{project.process}</p>
        {project.pdf && (
          <div className="flower-actions">
            <a className="flower-action primary" href={project.pdf} target="_blank" rel="noreferrer" aria-label={`Mở PDF ${project.title}`}>
              <ExternalLink size={17} />
              <span>Mở PDF</span>
            </a>
            <a className="flower-action secondary" href={project.pdf} download aria-label={`Tải PDF ${project.title}`}>
              <Download size={17} />
              <span>Tải về</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
