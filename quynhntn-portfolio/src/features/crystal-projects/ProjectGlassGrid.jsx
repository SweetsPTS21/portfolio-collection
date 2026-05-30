import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderOpen,
  Search,
  Brain,
  Video,
  Palette,
  Shield,
  FileText,
  FileDown,
  X,
  Target,
} from "lucide-react";
import BannerCard from "../../components/ui/BannerCard";
import { projects } from "../../data/portfolioData";

const iconMap = { FolderOpen, Search, Brain, Video, Palette, Shield, FileText };

// Accent color per card (matches banner gradient endpoint)
const ACCENT_COLORS = [
  "#8B4BAB",
  "#3A9A8A",
  "#4A80C8",
  "#D4784A",
  "#D4607E",
  "#3A9A8A",
];
const BTN_BORDER = [
  "rgba(139,75,171,0.30)",
  "rgba(58,154,138,0.30)",
  "rgba(74,128,200,0.30)",
  "rgba(212,120,74,0.30)",
  "rgba(212,96,126,0.30)",
  "rgba(58,154,138,0.30)",
];

const BANNERS = [
  {
    gradient: "linear-gradient(135deg, #D4607E 0%, #8B4BAB 100%)",
    glow: "rgba(139,75,171,0.18)",
  },
  {
    gradient: "linear-gradient(135deg, #8B4BAB 0%, #3A9A8A 100%)",
    glow: "rgba(58,154,138,0.16)",
  },
  {
    gradient: "linear-gradient(135deg, #3A9A8A 0%, #4A80C8 100%)",
    glow: "rgba(74,128,200,0.16)",
  },
  {
    gradient: "linear-gradient(135deg, #D4607E 0%, #D4784A 100%)",
    glow: "rgba(212,120,74,0.16)",
  },
  {
    gradient: "linear-gradient(135deg, #8B4BAB 0%, #D4607E 100%)",
    glow: "rgba(212,96,126,0.18)",
  },
  {
    gradient: "linear-gradient(135deg, #4A80C8 0%, #3A9A8A 100%)",
    glow: "rgba(58,154,138,0.16)",
  },
];

export default function ProjectGlassGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
        style={{ color: "#2D2D2D" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dự án thực hành
      </motion.h2>
      <motion.p
        className="text-center text-lg mb-10 max-w-xl mx-auto"
        style={{ color: "#4A4A4A" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Toàn bộ các bài thực hành được ghi chép rành mạch, phản ánh rõ nét tư
        duy làm việc độc lập.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const Icon = iconMap[project.icon] || FileText;
          const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
          return (
            <BannerCard
              key={project.id}
              delay={i * 0.08}
              bannerIndex={i}
              icon={Icon}
              chapterLabel={`Chương ${project.id}`}
              onClick={() => setSelectedProject({ project, index: i })}
              className="h-full justify-between group"
            >
              <div className="flex flex-col h-full justify-between flex-1">
                <div>
                  <h3
                    className="font-heading font-bold text-base mb-2 leading-snug group-hover:text-slate-800 transition-colors"
                    style={{ color: "#2D2D2D" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-xs font-medium leading-relaxed flex items-start gap-1.5"
                    style={{ color: accent }}
                  >
                    <Target size={14} className="shrink-0 mt-0.5" />
                    <span>{project.objective}</span>
                  </p>
                </div>

                <div
                  className="mt-6 flex items-center gap-1 text-xs font-heading font-bold transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: accent }}
                >
                  <span>Xem chi tiết dự án</span>
                  <span>➜</span>
                </div>
              </div>
            </BannerCard>
          );
        })}
      </div>

      {/* ── Beautiful Modal for Project Details ── */}
      <AnimatePresence>
        {selectedProject &&
          (() => {
            const Icon = iconMap[selectedProject.project.icon] || FileText;
            const banner = BANNERS[selectedProject.index % BANNERS.length];
            const accent =
              ACCENT_COLORS[selectedProject.index % ACCENT_COLORS.length];
            const btnBorder =
              BTN_BORDER[selectedProject.index % BTN_BORDER.length];

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                  className="absolute inset-0 bg-black/35 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                />

                {/* Modal Card */}
                <motion.div
                  className="relative max-w-lg w-full bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/50"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                >
                  {/* Modal Header (Matching Card Banner) */}
                  <div
                    className="relative flex items-center justify-between px-6"
                    style={{
                      background: banner.gradient,
                      height: "64px",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.28)" }}
                      >
                        <Icon size={22} color="white" />
                      </div>
                      <span className="text-sm font-heading font-bold tracking-wider text-white/90">
                        Chương {selectedProject.project.id}
                      </span>
                    </div>

                    {/* Close button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/90"
                      aria-label="Đóng chi tiết dự án"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 md:p-8 space-y-5">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-800 leading-snug">
                      {selectedProject.project.title}
                    </h3>

                    {/* Objective */}
                    <div
                      className="p-3.5 rounded-2xl border text-xs md:text-sm leading-relaxed"
                      style={{
                        background: `rgba(${accent === "#8B4BAB" ? "139,75,171" : "212,96,126"},0.04)`,
                        borderColor: `${accent}1A`,
                        color: accent,
                      }}
                    >
                      <div className="font-bold font-heading mb-1.5 flex items-center gap-1.5">
                        <Target size={16} className="shrink-0" />
                        <span>Mục tiêu học tập</span>
                      </div>
                      <p style={{ color: "#4A4A4A" }}>
                        {selectedProject.project.objective}
                      </p>
                    </div>

                    {/* Summary */}
                    <div className="space-y-2">
                      <div className="font-bold font-heading text-xs md:text-sm text-slate-800 flex items-center gap-1.5">
                        <FileText size={16} className="shrink-0" />
                        <span>Quá trình thực hiện</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {selectedProject.project.summary}
                      </p>
                    </div>

                    {/* Footer buttons */}
                    <div className="pt-5 flex items-center justify-between border-t border-slate-100">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 rounded-full font-heading font-semibold text-xs text-slate-500 hover:bg-slate-100 transition-colors"
                      >
                        Đóng
                      </button>

                      {selectedProject.project.pdf && (
                        <motion.a
                          href={selectedProject.project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-xs"
                          style={{
                            background: `rgba(${accent === "#8B4BAB" ? "139,75,171" : "212,96,126"},0.09)`,
                            border: `1.5px solid ${btnBorder}`,
                            color: accent,
                          }}
                          whileHover={{ scale: 1.05, opacity: 0.85 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Mở bài tập ${selectedProject.project.id} dạng PDF trong tab mới`}
                        >
                          <FileDown size={14} style={{ color: accent }} />
                          Xem bài làm (PDF)
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
      </AnimatePresence>
    </section>
  );
}
