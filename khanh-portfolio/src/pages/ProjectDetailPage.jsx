import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { projects } from "../data/khanhData";
import CloudCard from "../components/ui/CloudCard";
import PDFViewer from "../components/ui/PDFViewer";


const pageTransition = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -10 },
  transition: { duration: 0.35 },
};

export default function ProjectDetailPage() {
  const { chapter } = useParams();
  const navigate = useNavigate();

  const chapterNum = parseInt(chapter, 10);
  const project = projects.items.find((item) => item.chapter === chapterNum);

  if (!project) {
    return (
      <div className="page-shell" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ marginBottom: "16px" }}>Tập sách không tồn tại</h2>
        <button className="back-btn" onClick={() => navigate("/projects")}>
          <ArrowLeft size={16} />
          <span>Quay lại kệ sách</span>
        </button>
      </div>
    );
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-shell"
    >
      {/* Return to Projects Overview */}
      <button className="back-btn" onClick={() => navigate("/projects")}>
        <ArrowLeft size={16} />
        <span>Quay lại kệ sách</span>
      </button>

      <div className="project-detail-layout">
        {/* Left Column: Process & Context */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <CloudCard delay={0.05}>
            <div className="book-chapter-badge" style={{ marginBottom: "8px" }}>
              Chương 0{project.chapter}
            </div>
            <h1 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "16px", color: "var(--deep-navy)", lineHeight: "1.3" }}>
              {project.title}
            </h1>
            <div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: "700", marginBottom: "6px", color: "var(--deep-navy)" }}>
                Mục tiêu của bài học:
              </h3>
              <p style={{ fontSize: "0.92rem", opacity: 0.85, lineHeight: "1.6" }}>
                {project.content}
              </p>
            </div>
          </CloudCard>

          <CloudCard delay={0.15}>
            <div className="panel-header" style={{ marginBottom: "20px" }}>
              <Clock size={18} />
              <h2>Quá trình thực hiện</h2>
            </div>
            
            {/* Timeline of process steps */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {project.process.map((stepText, idx) => (
                <div
                  key={idx}
                  className="detail-process-step"
                  data-step={`0${idx + 1}`}
                >
                  <div className="detail-step-title">Bước 0{idx + 1}</div>
                  <p className="detail-step-text">{stepText}</p>
                </div>
              ))}
            </div>
          </CloudCard>
        </div>

        {/* Right Column: PDF Viewer */}
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <PDFViewer pdfUrl={project.pdf} title={project.title} />
        </div>
      </div>

    </motion.div>
  );
}
