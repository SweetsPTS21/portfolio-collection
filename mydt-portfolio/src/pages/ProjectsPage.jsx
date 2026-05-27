// src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/layout/PageTransition";
import { CaseFileBlue, AiEthicsBubble } from "../components/ui/SvgSceneLayer";
import { motion, AnimatePresence } from "framer-motion";
import {
  caseFileVariants,
  staggerContainerVariants,
} from "../app/motionConfig";
import {
  FileText,
  Search,
  Sparkles,
  Users,
  Palette,
  ShieldCheck,
  Download,
  BookOpen,
  X,
  ExternalLink,
} from "lucide-react";

// ── Process Detail Modal ────────────────────────────────────────────────────
function ProcessModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const chapterIcons = {
    FileText,
    Search,
    Sparkles,
    Users,
    Palette,
    ShieldCheck,
  };
  const IconComponent = chapterIcons[project.icon] || FileText;
  const chapterCode =
    project.chapter < 10 ? `0${project.chapter}` : `${project.chapter}`;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(20, 60, 100, 0.35)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        {/* Modal Panel */}
        <motion.div
          key="modal-panel"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "var(--lan-bg-paper)",
            border: "1.5px solid var(--lan-border)",
            borderRadius: "20px",
            padding: "36px",
            width: "100%",
            maxWidth: "560px",
            boxShadow: "0 24px 60px rgba(30, 111, 168, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Đóng"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "var(--lan-bg-mist)",
              border: "1px solid var(--lan-border)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--lan-blue)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--lan-sky)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--lan-bg-mist)")
            }
          >
            <X size={14} strokeWidth={2.5} />
          </button>

          {/* Modal Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "56px", flexShrink: 0 }}>
              <CaseFileBlue chapterNumber={chapterCode} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "var(--lan-blue-soft)",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  marginBottom: "4px",
                }}
              >
                Chương {project.chapter}
              </div>
              <h2
                style={{
                  fontFamily: "var(--lan-font-heading)",
                  fontSize: "20px",
                  color: "var(--lan-text)",
                  margin: 0,
                  fontWeight: "800",
                  lineHeight: "1.25",
                }}
              >
                {project.title}
              </h2>
            </div>
            <div
              style={{
                marginLeft: "auto",
                background: "var(--lan-bg-mist)",
                color: "var(--lan-blue)",
                padding: "10px",
                borderRadius: "12px",
                flexShrink: 0,
              }}
            >
              <IconComponent size={20} strokeWidth={2.5} />
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px dashed var(--lan-border)" }} />

          {/* Goal */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "800",
                color: "var(--lan-blue-soft)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              Mục tiêu
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.65",
                color: "var(--lan-text-muted)",
                margin: 0,
                borderLeft: "3px solid var(--lan-sky)",
                paddingLeft: "12px",
              }}
            >
              {project.goal}
            </p>
          </div>

          {/* Process */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "800",
                color: "var(--lan-slate)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <BookOpen size={12} strokeWidth={2.5} />
              Quá trình thực hiện
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.7",
                color: "var(--lan-text)",
                background: "var(--lan-bg-base)",
                border: "1px dashed var(--lan-sky)",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              {project.process}
            </div>
          </div>

          {/* Footer: actions */}
          <div
            style={{
              borderTop: "1px solid rgba(144, 202, 249, 0.35)",
              paddingTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            {/* Open in new tab */}
            <a
              href={project.evidence}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "9px 18px",
                borderRadius: "999px",
                background: "var(--lan-bg-mist)",
                color: "var(--lan-blue)",
                fontSize: "13px",
                fontWeight: "bold",
                textDecoration: "none",
                border: "1.5px solid var(--lan-border)",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--lan-blue)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--lan-bg-mist)";
                e.currentTarget.style.color = "var(--lan-blue)";
              }}
            >
              <ExternalLink size={14} strokeWidth={2.5} />
              Xem trực tiếp
            </a>

            {/* Download */}
            <a
              href={project.evidence}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "9px 20px",
                borderRadius: "999px",
                background: "var(--lan-blue)",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(46, 134, 193, 0.25)",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--lan-slate)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--lan-blue)")
              }
            >
              <Download size={14} strokeWidth={2.5} />
              Tải minh chứng
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export function ProjectsPage() {
  const { projects } = portfolioData;
  // Store the full project object for the open modal (null = closed)
  const [modalProject, setModalProject] = useState(null);

  const chapterIcons = {
    FileText,
    Search,
    Sparkles,
    Users,
    Palette,
    ShieldCheck,
  };

  return (
    <PageTransition>
      {/* Modal rendered at page root so it's outside the grid */}
      {modalProject && (
        <ProcessModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

      <div
        className="projectGridShell"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
            style={{
              background: "var(--lan-bg-mist)",
              color: "var(--lan-slate)",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "1px",
              border: "1px solid var(--lan-border)",
            }}
          >
            Route 2: Projects
          </span>
          <h1
            style={{
              fontFamily: "var(--lan-font-heading)",
              fontSize: "36px",
              color: "var(--lan-text)",
              margin: "8px 0",
              fontWeight: "800",
            }}
          >
            Hồ sơ bài tập thực hành
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--lan-text-muted)",
              margin: 0,
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Hệ thống 6 chương bài tập đại diện cho năng lực tư duy, phản biện
            sắc bén và làm chủ môi trường số của một sinh viên Luật.
          </p>
        </div>

        {/* 6-card Grid — cards are equal height, no collapse */}
        <motion.div
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
          className="projectGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {projects.map((proj) => {
            const IconComponent = chapterIcons[proj.icon] || FileText;
            const chapterCode =
              proj.chapter < 10 ? `0${proj.chapter}` : `${proj.chapter}`;

            return (
              <motion.div
                key={proj.chapter}
                variants={caseFileVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="caseFileCard"
                style={{
                  background: "var(--lan-bg-paper)",
                  border: "1.5px solid var(--lan-border)",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 6px 15px var(--lan-shadow)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  overflow: "hidden",
                }}
              >
                {/* AI bubble decoration for ch. 3 & 6 */}
                {(proj.chapter === 3 || proj.chapter === 6) && (
                  <div
                    style={{
                      position: "absolute",
                      top: "4px",
                      right: "4px",
                      width: "60px",
                      opacity: 0.15,
                      pointerEvents: "none",
                    }}
                  >
                    <AiEthicsBubble />
                  </div>
                )}

                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "64px" }}>
                    <CaseFileBlue chapterNumber={chapterCode} />
                  </div>
                  <div
                    style={{
                      background: "var(--lan-bg-mist)",
                      color: "var(--lan-blue)",
                      padding: "8px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconComponent size={18} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Chapter label + title */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      color: "var(--lan-blue-soft)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Chương {proj.chapter}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--lan-font-heading)",
                      fontSize: "18px",
                      color: "var(--lan-text)",
                      margin: 0,
                      fontWeight: "800",
                      lineHeight: "1.3",
                    }}
                  >
                    {proj.title}
                  </h3>
                </div>

                {/* Goal */}
                <div
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.55",
                    color: "var(--lan-text-muted)",
                    borderLeft: "2px solid var(--lan-sky)",
                    paddingLeft: "10px",
                    flex: 1,
                  }}
                >
                  <strong>Mục tiêu:</strong> {proj.goal}
                </div>

                {/* Card footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(144, 202, 249, 0.3)",
                    paddingTop: "12px",
                  }}
                >
                  {/* Open modal button */}
                  <button
                    onClick={() => setModalProject(proj)}
                    style={{
                      fontSize: "12px",
                      color: "var(--lan-blue)",
                      fontWeight: "bold",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      background: "var(--lan-bg-mist)",
                      border: "1px solid var(--lan-border)",
                      borderRadius: "999px",
                      padding: "5px 12px",
                      cursor: "pointer",
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--lan-blue)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--lan-bg-mist)";
                      e.currentTarget.style.color = "var(--lan-blue)";
                    }}
                  >
                    <BookOpen size={12} strokeWidth={2.5} />
                    Xem quá trình
                  </button>

                  {/* PDF download */}
                  <a
                    href={proj.evidence}
                    download
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "var(--lan-blue)",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      boxShadow: "0 2px 6px rgba(46, 134, 193, 0.2)",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--lan-slate)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--lan-blue)")
                    }
                  >
                    <Download size={12} strokeWidth={2.5} />
                    <span>Tải minh chứng</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </PageTransition>
  );
}
