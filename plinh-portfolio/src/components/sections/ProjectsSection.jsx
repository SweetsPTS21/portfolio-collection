import React from 'react';
import { projects } from '../../data/portfolioData';
import PulpCard from '../ui/PulpCard';
import { motion } from 'framer-motion';
import { FileText, Eye, ArrowUpRight } from 'lucide-react';
import bt1Pdf from '../../../docs/Bt1.pdf';
import bt2Pdf from '../../../docs/Bt2.pdf';
import bt3Pdf from '../../../docs/Bt3.pdf';
import bt4Pdf from '../../../docs/Bt4.pdf';
import bt5Pdf from '../../../docs/Bt5.pdf';
import bt6Pdf from '../../../docs/Bt6.pdf';

const projectPdfs = {
  1: bt1Pdf,
  2: bt2Pdf,
  3: bt3Pdf,
  4: bt4Pdf,
  5: bt5Pdf,
  6: bt6Pdf,
};

export default function ProjectsSection() {
  // Motion variants for stagger reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 px-4 md:px-12 max-w-6xl mx-auto space-y-8"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#588157] font-bold">
          Hồ Sơ Tiêu Bản Số
        </span>
        <h2 className="text-4xl font-bold text-[#3A5A40] botanical-underline pb-1">
          Hành Trình Số Hóa
        </h2>
        <p className="text-sm text-[#588157] leading-relaxed">
          Khu vực lưu trữ các bài tập thực hành môn học. Mọi tiêu bản đều được
          sắp xếp ngăn nắp, thể hiện kỹ năng số của sinh viên Luật.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex h-full"
          >
            <PulpCard
              hasClip={true}
              className="flex flex-col justify-between hover:border-[#588157] transition-all duration-300 w-full"
            >
              {/* Card Header & Objectives */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#A3B18A]/40 pb-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#D6A25F]">
                    {project.chapter}
                  </span>
                  <span className="text-[10px] bg-[#588157]/10 text-[#588157] border border-[#588157]/20 px-2 py-0.5 rounded-full font-bold">
                    Specimen #{project.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#3A5A40] leading-snug">
                  {project.title}
                </h3>

                <div className="p-3 bg-[#F5F5F5]/65 rounded-[12px] border border-[#A3B18A]/30">
                  <span className="text-[10px] uppercase font-bold text-[#588157] block tracking-widest mb-1">
                    Mục Tiêu
                  </span>
                  <p className="text-xs text-[#3A5A40]/90 leading-relaxed m-0">
                    {project.objective}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#588157] block tracking-widest">
                    Quá Trình Thực Hiện
                  </span>
                  <p className="text-xs text-[#3A5A40]/80 leading-relaxed">
                    {project.process}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#A3B18A]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#588157] font-semibold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Minh chứng: {project.fileName}</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={projectPdfs[project.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mở PDF minh chứng cho ${project.chapter} trong tab mới`}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#588157] hover:bg-[#3A5A40] text-[#F5F5F5] text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all group cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem bài tập</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </PulpCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
