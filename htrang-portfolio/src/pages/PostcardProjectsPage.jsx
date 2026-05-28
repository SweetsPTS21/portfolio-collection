import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPinned } from 'lucide-react';
import { projects } from '../data/portfolioData.js';
import StampBadge from '../components/ui/StampBadge.jsx';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';
import flowers from '../assets/tropical-postcard/tropical-flowers.svg';
import postcardStack from '../assets/tropical-postcard/generated/blue-postcard-stack-cutout.png';
import flowerCluster from '../assets/tropical-postcard/generated/plumeria-flower-cluster-cutout.png';

const reflectionPdfs = [bt1Pdf, bt2Pdf, bt3Pdf, bt4Pdf, bt5Pdf, bt6Pdf];

export default function PostcardProjectsPage() {
  return (
    <div className="projects-page">
      <header className="page-heading">
        <StampBadge>Postcard Gallery</StampBadge>
        <img className="postcard-stack-cutout" src={postcardStack} alt="" />
        <h1>Nhật ký dự án qua 6 điểm dừng</h1>
        <p>
          Mỗi postcard ghi lại một chương học, mục tiêu, cách thực hiện và kỹ
          năng số được giữ lại sau hành trình.
        </p>
      </header>

      <section className="postcard-grid" aria-label="Project postcards">
        {projects.map((project, index) => (
          <motion.article
            className="project-postcard"
            key={project.chapter}
            initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.2 : -1.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 0.5 : -0.5 }}
            whileHover={{ y: -8, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <img
              className="postcard-flower"
              src={index % 2 ? flowerCluster : flowers}
              alt=""
            />
            <div className="postcard-topline">
              <span>{project.chapter}</span>
              <strong>{project.stamp}</strong>
            </div>
            <h2>{project.title}</h2>
            <p className="destination">
              <MapPinned size={16} /> {project.destination}
            </p>
            <p>
              <strong>Mục tiêu:</strong> {project.goal}
            </p>
            <p>{project.process}</p>
            <a
              href={reflectionPdfs[index]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open reflection PDF for ${project.chapter}`}
            >
              Mở bài tập <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
