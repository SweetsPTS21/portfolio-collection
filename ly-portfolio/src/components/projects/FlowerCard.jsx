import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import theatreFrame from "../../assets/ballet-swan-lake/theatre-frame.svg";

export default function FlowerCard({ project, index }) {
  return (
    <motion.article
      className="flower-card"
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <img className="flower-card-frame" src={theatreFrame} alt="" />
      <div className="flower-content">
        <div className="flower-text">
          <span className="flower-number">Chương {project.chapter}</span>
          <h2>{project.title}</h2>
          <h3>{project.content}</h3>
          <p>
            {Array.isArray(project.process)
              ? project.process[0]
              : project.process}
          </p>
        </div>

        {project.pdf && (
          <div className="flower-actions">
            <Link
              className="flower-action primary"
              to={`/projects/${project.chapter}`}
              aria-label={`Xem chi tiết ${project.title}`}
            >
              <ArrowRight size={17} />
              <span>Xem chi tiết</span>
            </Link>
            <a
              className="flower-action secondary"
              href={project.pdf}
              download
              aria-label={`Tải PDF ${project.title}`}
            >
              <Download size={17} />
              <span>Tải về</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
