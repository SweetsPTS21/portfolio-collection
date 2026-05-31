import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import CaseFileCard from "../features/case-files/CaseFileCard.jsx";

export default function CaseFileProjectsPage() {
  return (
    <div className="dossier-layout" style={{ maxWidth: "900px" }}>
      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "36px", textAlign: "center" }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: "bold",
            color: "var(--legal-blue)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          DANH MỤC HỒ SƠ CHỨNG CỨ
        </span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            color: "var(--ink-navy)",
            marginTop: "8px",
          }}
        >
          Các Bài Tập Thực Hành Số
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "12px auto 0 auto",
            color: "var(--slate-grey)",
            fontSize: "0.92rem",
            lineHeight: 1.5,
          }}
        >
          Các bài tập thực hành dưới đây được triển khai bám sát yêu cầu môn
          học, bảo đảm tính logic chặt chẽ, liêm chính học thuật độc lập và tác
          phong làm việc nghiêm cẩn.
        </p>
      </motion.div>

      {/* Dossier Folders Grid */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          zIndex: 5,
        }}
      >
        {projects.map((project, idx) => (
          <CaseFileCard key={project.id} project={project} delay={0.1 * idx} />
        ))}
      </div>

      <div style={{ height: "40px" }} />
    </div>
  );
}
