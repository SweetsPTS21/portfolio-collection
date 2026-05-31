import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectIntro, projects } from '../data/portfolio';

function ProjectFeature({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      className="project-feature"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <div
        className="project-feature__header glass-card"
        style={{ '--project-color': project.color }}
      >
        <span className="project-card__number">{project.id}</span>
        <div className="project-card__icon">
          <Icon size={44} strokeWidth={1.5} />
        </div>
        <div>
          <h3>{project.title}</h3>
          <strong>{project.subtitle}</strong>
        </div>
      </div>

      <div className="project-step-list">
        {project.beats.map((beat, beatIndex) => (
          <motion.div
            className="project-step-card"
            key={`${project.id}-${beat.label}`}
            initial={{ opacity: 0, x: beatIndex % 2 === 0 ? -18 : 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 + beatIndex * 0.05 }}
          >
            <span>{beat.label}</span>
            <p>{beat.text}</p>
          </motion.div>
        ))}

        <a
          className="project-card__pdf"
          href={project.pdf}
          target="_blank"
          rel="noreferrer"
        >
          <span>Mở PDF</span>
          <ExternalLink size={16} strokeWidth={1.8} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="page-section projects-section">
      <motion.div
        className="section-frame projects-frame"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="hud-title">
          <span>Dự án</span>
          <span className="hud-star">✦</span>
        </div>
        <p className="section-lead">{projectIntro}</p>
        <div className="project-feature-flow">
          {projects.map((project, i) => (
            <ProjectFeature key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="decor-dot-grid projects-frame__dots" />
      </motion.div>
    </section>
  );
}
