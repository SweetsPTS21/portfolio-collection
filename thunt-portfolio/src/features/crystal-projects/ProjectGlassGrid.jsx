import { motion } from 'framer-motion';
import { FolderOpen, Search, Brain, Video, Palette, Shield, FileText, FileDown } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import { projects } from '../../data/portfolioData';

const iconMap = { FolderOpen, Search, Brain, Video, Palette, Shield, FileText };

export default function ProjectGlassGrid() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-center text-text-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dự án thực hành
      </motion.h2>
      <motion.p
        className="text-center text-lg text-text-secondary mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Toàn bộ các bài thực hành được ghi chép rành mạch, phản ánh rõ nét tư duy làm việc độc lập.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const Icon = iconMap[project.icon] || FileText;
          return (
            <GlassCard key={project.id} delay={i * 0.1}>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                    <Icon size={26} className="text-pastel-pink" />
                  </div>
                  <span className="text-sm font-heading font-bold text-pastel-pink/70">
                    Chương {project.id}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-text-primary text-lg mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-pastel-pink font-medium mb-2">
                  🎯 {project.objective}
                </p>
                <p className="text-base text-text-secondary leading-relaxed flex-1">
                  {project.summary}
                </p>

                {project.pdf && (
                  <motion.a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-heading font-semibold text-sm text-text-primary self-start"
                    style={{
                      background: 'rgba(255, 255, 255, 0.22)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      boxShadow: '0 4px 16px rgba(255, 182, 217, 0.15)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 6px 24px rgba(255, 142, 199, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Mở bài tập ${project.id} dạng PDF trong tab mới`}
                  >
                    <FileDown size={16} className="text-pastel-pink" />
                    Xem bài làm (PDF)
                  </motion.a>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
