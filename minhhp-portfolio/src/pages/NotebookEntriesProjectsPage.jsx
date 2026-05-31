import { motion } from "framer-motion";
import { FileText, Layers, PenTool, Sparkles } from "lucide-react";
import MarginNote from "../components/ui/MarginNote.jsx";
import NotebookEntryList from "../features/notebook-entries/NotebookEntryList.jsx";
import { pageCopy, projects } from "../data/portfolioData.js";
import indexTabsLabels from "../assets/blue-rain-notebook/index-tabs-labels.svg";

export default function NotebookEntriesProjectsPage() {
  return (
    <section className="projects-page">
      <motion.div
        className="page-heading projects-heading"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <span className="soft-badge"><FileText size={17} /> {pageCopy.projects.badge}</span>
        <h1>{pageCopy.projects.title}</h1>
        <p>{pageCopy.projects.intro}</p>
      </motion.div>

      <div className="project-note-row">
        <MarginNote label="Mục tiêu" tone="pink">
          Hệ thống hóa quá trình rèn luyện kỹ năng số thông qua các bài thực hành đã hoàn thành.
        </MarginNote>
        <motion.div className="entry-summary-strip" whileHover={{ rotate: -1.2, y: -4 }}>
          <PenTool size={28} />
          <strong>{projects.length} bài tập</strong>
          <span>{pageCopy.projects.summary}</span>
          <img src={indexTabsLabels} alt="" />
        </motion.div>
        <MarginNote label={pageCopy.projects.methodTitle} tone="lilac">
          {pageCopy.projects.method}
        </MarginNote>
      </div>

      <NotebookEntryList projects={projects} />

      <section className="notebook-section closing-strip">
        <Layers size={30} />
        <h2>{pageCopy.projects.closing}</h2>
        <Sparkles size={24} />
      </section>
    </section>
  );
}
