import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Database,
  Search,
  Cpu,
  Users,
  Sparkles,
  Shield,
} from "lucide-react";
import cardFrame from "../../assets/unicorn-parfait-island/marshmallow-shapes.svg";

// Helper to select a matching sweet icon
const renderJellyIcon = (iconName, color) => {
  const size = 22;
  const style = { color: color || "var(--unicorn-pink)" };
  switch (iconName) {
    case "jelly":
      return <Database size={size} style={style} />;
    case "cherry":
      return <Search size={size} style={style} />;
    case "wand":
      return <Cpu size={size} style={style} />;
    case "bubble":
      return <Users size={size} style={style} />;
    case "star":
      return <Sparkles size={size} style={style} />;
    case "heart":
      return <Shield size={size} style={style} />;
    default:
      return <Sparkles size={size} style={style} />;
  }
};

export default function JellyCard({ project, index }) {
  return (
    <motion.article
      className="jelly-card"
      whileHover={{
        y: -6,
        rotate: index % 2 === 0 ? -0.8 : 0.8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 18,
      }}
      style={{
        borderLeft: `5px solid ${project.color || "var(--unicorn-pink)"}`,
      }}
    >
      {/* Absolute Decorative Small Marshmallow Shape */}
      <img
        src={cardFrame}
        alt=""
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          width: "50px",
          height: "auto",
          opacity: 0.12,
          pointerEvents: "none",
          transform: "rotate(15deg)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="jelly-card-header">
          <span
            style={{
              fontSize: "0.82rem",
              fontFamily: "Quicksand, sans-serif",
              color: project.color || "var(--unicorn-pink)",
              background: "rgba(255,255,255,0.7)",
              padding: "4px 10px",
              borderRadius: "999px",
              border: "1px solid rgba(255, 163, 223, 0.2)",
              fontWeight: "700",
            }}
          >
            Chương 0{index + 1}
          </span>
          <div
            className="jelly-icon-container"
            style={{ background: `${project.color}15` }}
          >
            {renderJellyIcon(project.icon, project.color)}
          </div>
        </div>

        <h2>{project.title}</h2>
        <div className="jelly-card-goal">
          💡 Mục tiêu:{" "}
          <span style={{ color: "var(--bubble-muted)" }}>{project.goal}</span>
        </div>
        <p className="jelly-card-process">✨ Quá trình: {project.process}</p>
      </div>

      {project.pdf ? (
        <div
          className="jelly-card-actions"
          style={{ position: "relative", zIndex: 2 }}
        >
          <a
            className="jelly-btn primary"
            href={project.pdf}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mở PDF ${project.title}`}
          >
            <ExternalLink size={16} />
            <span>Mở PDF</span>
          </a>
          <a
            className="jelly-btn secondary"
            href={project.pdf}
            download={project.pdfName}
            aria-label={`Tải PDF ${project.title}`}
          >
            <Download size={16} />
            <span>Tải về</span>
          </a>
        </div>
      ) : null}
    </motion.article>
  );
}
