import React from "react";
import { motion } from "framer-motion";
import envelopeArt from "../../assets/sakura-letter-desk/envelope-set.svg";
import SealButton from "../../components/ui/SealButton";
import PetalTag from "../../components/ui/PetalTag";

export default function PostcardProjectCard({ project, index }) {
  return (
    <motion.article
      className={`postcard-card project-card-${project.cardVariant}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.42 }}
    >
      <img src={envelopeArt} alt="" aria-hidden="true" className="postcard-art" />
      <PetalTag>{project.stamp}</PetalTag>
      <h2>{project.title}</h2>
      <p>{project.focus}</p>
      <p className="postcard-note">{project.imageNote}</p>
      <div className="postcard-actions">
        <SealButton href={project.pdf}>Mở thư PDF</SealButton>
        <SealButton href={project.pdf} download={project.pdfName} variant="secondary">
          Tải xuống
        </SealButton>
      </div>
    </motion.article>
  );
}
