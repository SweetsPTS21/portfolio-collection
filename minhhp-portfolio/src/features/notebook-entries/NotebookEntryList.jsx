import { motion } from "framer-motion";
import { ExternalLink, PenLine } from "lucide-react";
import NotebookCard from "../../components/ui/NotebookCard.jsx";
import notebookEntryCards from "../../assets/blue-rain-notebook/notebook-entry-cards.svg";

export default function NotebookEntryList({ projects }) {
  return (
    <div className="entry-grid">
      {projects.map((project, index) => (
        <NotebookCard className="entry-card" key={project.id} delay={index * 0.04}>
          <img className="entry-card-art" src={notebookEntryCards} alt="" />
          <div className="entry-topline">
            <span>{project.chapter}</span>
            <strong>{project.tag}</strong>
          </div>
          <h3>{project.title}</h3>
          <p>{project.goal}</p>
          <p>{project.process}</p>
          <motion.a whileHover={{ x: 6 }} href={project.file} target="_blank" rel="noreferrer">
            <PenLine size={17} />
            Mở file bài tập
            <ExternalLink size={15} />
          </motion.a>
        </NotebookCard>
      ))}
    </div>
  );
}
