import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import flowerFrame from '../../assets/bunny-cloud-garden/flower-frame.svg';

export default function FlowerCard({ project, index, onViewPdf }) {
  return (
    <motion.article
      className="flower-card"
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <img className="flower-card-frame" src={flowerFrame} alt="" />
      <div className="flower-content">
        <span className="flower-number">Chương {project.chapter}</span>
        <h2>{project.title}</h2>
        <h3>{project.content}</h3>
        <p>{project.process}</p>
        {project.pdf && (
          <div className="flower-actions">
            <button
              className="flower-action primary"
              onClick={() => onViewPdf(project)}
              type="button"
              aria-label={`Xem nội dung ${project.title}`}
            >
              <Eye size={17} />
              <span>Xem nhanh</span>
            </button>
            <Link
              className="flower-action secondary"
              to={`/projects/${project.chapter}`}
              aria-label={`Xem chi tiết ${project.title}`}
            >
              <ArrowRight size={17} />
              <span>Chi tiết</span>
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
