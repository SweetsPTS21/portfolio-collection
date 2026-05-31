import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Gauge, Waves } from "lucide-react";
import { profile, projects } from "../data/portfolioData.js";
import bt1 from "../../docs/bt1.pdf";
import bt2 from "../../docs/bt2.pdf";
import bt3 from "../../docs/bt3.pdf";
import bt4 from "../../docs/bt4.pdf";
import bt5 from "../../docs/bt5.pdf";
import bt6 from "../../docs/bt6.pdf";
import waveRibbons from "../assets/sunlit-ocean-life/wave-ribbons.svg";

const pdfs = [bt1, bt2, bt3, bt4, bt5, bt6];

export default function OceanLogsPage() {
  return (
    <div className="logs-page">
      <header className="page-heading">
        <span className="ocean-badge"><Waves size={16} /> Bài tập thực hành</span>
        <h1>Sáu nhiệm vụ thực hành</h1>
        <p>{profile.portfolioGoal}</p>
      </header>
      <section className="ocean-log-grid" aria-label="Projects">
        {projects.map((project, index) => (
          <motion.article className="ocean-log-card" key={project.chapter} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, rotateX: 2 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.04 }}>
            <img src={waveRibbons} alt="" />
            <div className="log-topline">
              <span>{project.chapter}</span>
              <strong><Gauge size={15} /> {project.depth}</strong>
            </div>
            <h2>{project.title}</h2>
            <p className="signal-code">{project.signal}</p>
            <p><strong>Mục tiêu:</strong> {project.goal}</p>
            <p>{project.process}</p>
            <p className="artifact"><FileText size={16} /> {project.artifact}</p>
            <a href={pdfs[index]} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Mở bài nộp PDF</a>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
