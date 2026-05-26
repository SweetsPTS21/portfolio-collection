import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { projects } from "../data/khanhData";
import CloudCard from "../components/ui/CloudCard";

const pageTransition = {
  initial: { opacity: 0, scale: 0.96, y: 15 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -15 },
  transition: { type: "spring", stiffness: 220, damping: 20 },
};

/* Alternate card variants for visual variety */
const cardVariants = ["default", "mint", "peach", "gold", "default", "mint"];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-shell"
    >
      <header style={{ marginBottom: "24px" }}>
        <span className="eyebrow">MY DIGITAL WORK</span>
        <h1 className="page-title">{projects.title}</h1>
      </header>

      {/* Intro paragraph */}
      <p className="projects-intro">{projects.intro}</p>

      {/* Magical Book Grid */}
      <section className="books-grid">
        {projects.items.map((item, idx) => (
          <CloudCard
            key={item.chapter}
            delay={idx * 0.07}
            variant={cardVariants[idx]}
            className="book-card"
          >
            {/* Large decorative chapter number watermark */}
            <span className="book-chapter-watermark" aria-hidden="true">
              0{item.chapter}
            </span>

            <div
              onClick={() => navigate(`/projects/${item.chapter}`)}
              style={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              {/* Header row: badge + status */}
              <div className="book-header">
                <span className="book-chapter-badge">
                  <item.Icon size={14} className="book-chapter-emoji" />
                  Chương 0{item.chapter}
                </span>
                <span className="book-status-badge">
                  <CheckCircle2 size={10} />
                  Hoàn thành
                </span>
              </div>

              {/* Title */}
              <h3>{item.title}</h3>

              {/* Short description */}
              <p>{item.content}</p>

              {/* Skill tags */}
              <div className="book-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="book-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="book-footer-action">
                <BookOpen size={14} />
                <span>Lật mở tập sách</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </CloudCard>
        ))}
      </section>
    </motion.div>
  );
}
