import { motion } from 'framer-motion';
import { FolderOpen, Search, Brain, Video, Palette, Shield, FileText, FileDown } from 'lucide-react';
import BannerCard from '../../components/ui/BannerCard';
import { projects } from '../../data/portfolioData';

const iconMap = { FolderOpen, Search, Brain, Video, Palette, Shield, FileText };

// Accent color per card (matches banner gradient endpoint)
const ACCENT_COLORS = ['#8B4BAB', '#3A9A8A', '#4A80C8', '#D4784A', '#D4607E', '#3A9A8A'];
const BTN_BORDER    = [
  'rgba(139,75,171,0.30)', 'rgba(58,154,138,0.30)', 'rgba(74,128,200,0.30)',
  'rgba(212,120,74,0.30)', 'rgba(212,96,126,0.30)', 'rgba(58,154,138,0.30)',
];

export default function ProjectGlassGrid() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
        style={{ color: '#2D2D2D' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dự án thực hành
      </motion.h2>
      <motion.p
        className="text-center text-lg mb-10 max-w-xl mx-auto"
        style={{ color: '#4A4A4A' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Toàn bộ các bài thực hành được ghi chép rành mạch, phản ánh rõ nét tư duy làm việc độc lập.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const Icon = iconMap[project.icon] || FileText;
          const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const btnBorder = BTN_BORDER[i % BTN_BORDER.length];
          return (
            <BannerCard
              key={project.id}
              delay={i * 0.1}
              bannerIndex={i}
              icon={Icon}
              chapterLabel={`Chương ${project.id}`}
            >
              <h3
                className="font-heading font-bold text-base mb-2 leading-snug"
                style={{ color: '#2D2D2D' }}
              >
                {project.title}
              </h3>

              <p
                className="text-xs font-medium mb-3"
                style={{ color: accent }}
              >
                🎯 {project.objective}
              </p>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: '#4A4A4A' }}
              >
                {project.summary}
              </p>

              {project.pdf && (
                <motion.a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-heading font-semibold text-xs self-start"
                  style={{
                    background: `rgba(${accent === '#8B4BAB' ? '139,75,171' : '212,96,126'},0.09)`,
                    border: `1.5px solid ${btnBorder}`,
                    color: accent,
                  }}
                  whileHover={{ scale: 1.05, opacity: 0.85 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Mở bài tập ${project.id} dạng PDF trong tab mới`}
                >
                  <FileDown size={14} style={{ color: accent }} />
                  Xem bài làm (PDF)
                </motion.a>
              )}
            </BannerCard>
          );
        })}
      </div>
    </section>
  );
}
