import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ArrowUp } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import PageGallery from "../components/projects/PageGallery";
import { projects } from "../data/portfolioData";
import { getPdfContent } from "../data/pdfContentData";

export default function ProjectDetailPage() {
  const { chapter } = useParams();
  const chapterNum = parseInt(chapter, 10);
  const project = projects.items.find((p) => p.chapter === chapterNum);
  const pdfContent = getPdfContent(chapterNum);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [chapterNum]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!project) {
    return (
      <PageShell eyebrow="Not found" title="Không tìm thấy dự án">
        <p className="lead">Dự án không tồn tại.</p>
        <Link to="/projects" className="flower-action primary">
          ← Quay lại danh sách
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell eyebrow={`Chương ${project.chapter}`} title={project.title}>
      <motion.div
        className="project-detail"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="project-detail-nav">
          <Link to="/projects" className="flower-action secondary">
            <ArrowLeft size={16} />
            <span>Quay lại</span>
          </Link>
          <div className="project-detail-actions">
            {project.pdf && (
              <a className="flower-action primary" href={project.pdf} download>
                <Download size={16} />
                <span>Tải PDF gốc</span>
              </a>
            )}
          </div>
        </div>

        <div className="project-detail-meta">
          <h3 className="project-detail-objective">{project.content}</h3>
          {Array.isArray(project.process) ? (
            project.process.map((p, index) => (
              <p key={index} className="project-detail-process">
                {p}
              </p>
            ))
          ) : (
            <p className="project-detail-process">{project.process}</p>
          )}
        </div>

        {pdfContent && <PageGallery pages={pdfContent.pages} />}

        <div className="project-detail-pagination">
          {chapterNum > 1 && (
            <Link
              to={`/projects/${chapterNum - 1}`}
              className="flower-action secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ← Chương {chapterNum - 1}
            </Link>
          )}
          {chapterNum < 6 && (
            <Link
              to={`/projects/${chapterNum + 1}`}
              className="flower-action primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Chương {chapterNum + 1} →
            </Link>
          )}
        </div>
      </motion.div>

      {/* Scroll-to-top float button */}
      <button
        className={`scroll-top-btn${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Lên đầu trang"
      >
        <ArrowUp size={20} />
      </button>
    </PageShell>
  );
}
