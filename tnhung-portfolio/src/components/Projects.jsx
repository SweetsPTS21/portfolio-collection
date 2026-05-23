import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -8, scale: 1.015 }}
    >
      <span className="project-card__number">{project.id}</span>
      <div className="project-card__icon" style={{ '--project-color': project.color }}>
        <Icon size={44} strokeWidth={1.5} />
      </div>
      <h3>{project.title}</h3>
      <strong>{project.subtitle}</strong>
      <p>{project.desc}</p>
      <a className="project-card__pdf" href={project.pdf} target="_blank" rel="noreferrer">
        <span>Mở PDF</span>
        <ExternalLink size={16} strokeWidth={1.8} />
      </a>
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
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="decor-dot-grid projects-frame__dots" />
      </motion.div>
    </section>
  );
}
