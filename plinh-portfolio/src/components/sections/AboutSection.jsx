import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import PulpCard from '../ui/PulpCard';
import { motion } from 'framer-motion';
import { Sparkles, Music, Palette, Gamepad2, Award, Heart } from 'lucide-react';

export default function AboutSection() {
  const iconMap = {
    Music: Music,
    Palette: Palette,
    Gamepad2: Gamepad2
  };

  // Motion variants for stagger reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 px-4 md:px-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      {/* LEFT PANEL: Avatar & Basic Info */}
      <motion.div 
        variants={itemVariants}
        className="lg:col-span-4 flex flex-col items-center text-center lg:sticky lg:top-28"
      >
        {/* Avatar in Glass Herbarium Frame */}
        <motion.div 
          variants={avatarVariants}
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="relative w-64 h-72 mb-6 cursor-pointer"
        >
          {/* SVG Frame Background */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url('./src/assets/botanical/herbarium-frame.svg')`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Avatar Cutout Image */}
          <img 
            src="./docs/avatar.jpg" 
            alt="Đặng Phương Linh" 
            className="absolute inset-0 m-auto w-[220px] h-[255px] object-cover rounded-[14px] z-10"
            style={{
              clipPath: 'polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%)',
              border: '1px solid #A3B18A'
            }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400';
            }}
          />
        </motion.div>

        {/* Basic Meta Details */}
        <h2 className="text-3xl font-bold text-[#3A5A40] leading-none botanical-underline mb-2">
          {personalInfo.name}
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#588157] font-bold mt-2">
          Lớp: {personalInfo.class}
        </p>
        <p className="text-sm text-[#3A5A40] font-semibold mt-1">
          {personalInfo.major}
        </p>
        <p className="text-xs text-[#588157]/90 mt-1 italic">
          {personalInfo.university}
        </p>

        {/* Dynamic Vibe Badges */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <span className="leaf-badge">🌱 {personalInfo.style}</span>
          <span className="leaf-badge">🕊️ Cởi mở</span>
          <span className="leaf-badge">⚖️ Pháp chế số</span>
        </div>
      </motion.div>

      {/* RIGHT PANEL: Story & Hobbies */}
      <div className="lg:col-span-8 space-y-8">
        {/* Intro Goal Card */}
        <motion.div variants={itemVariants}>
          <PulpCard hasClip={true}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D6A25F] flex-shrink-0" />
              <h3 className="text-xl font-bold text-[#3A5A40] m-0">Tâm Tình & Định Hướng</h3>
            </div>
            <p className="text-base text-[#3A5A40] leading-relaxed italic">
              "{personalInfo.styleDescription}"
            </p>
            <p className="text-sm text-[#3A5A40]/90 leading-relaxed mt-4">
              {personalInfo.goal}
            </p>
          </PulpCard>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h4 className="text-lg font-bold text-[#3A5A40] pl-2 flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#588157]" />
            Thế Giới Tự Do Của Linh
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personalInfo.hobbies.map((hobby, index) => {
              const HobbyIcon = iconMap[hobby.icon] || Heart;
              return (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="p-5 rounded-[18px] bg-[#DAD7CD]/35 border border-[#A3B18A]/50 flex flex-col items-center text-center hover:border-[#588157] hover:bg-[#DAD7CD]/55 transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-[#588157]/15 flex items-center justify-center text-[#588157] mb-3">
                    <HobbyIcon className="w-5 h-5" />
                  </div>
                  <strong className="text-sm text-[#3A5A40] font-bold block">{hobby.label}</strong>
                  <span className="text-xs text-[#588157] mt-1 leading-snug">{hobby.desc}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Portfolio Purpose & Rules */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Purpose */}
          <PulpCard className="bg-[#DAD7CD]/20 border-[#A3B18A]/35">
            <h4 className="text-lg font-bold text-[#3A5A40] mb-2 flex items-center gap-1.5">
              <span>📖</span> Nhật Ký Số
            </h4>
            <p className="text-xs text-[#3A5A40]/90 leading-relaxed">
              {personalInfo.purpose}
            </p>
          </PulpCard>

          {/* Principles with Seal Stamp */}
          <PulpCard className="bg-[#DAD7CD]/20 border-[#A3B18A]/35 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-[#3A5A40] mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D6A25F]" />
                Liêm Chính Học Thuật
              </h4>
              <p className="text-xs text-[#3A5A40]/90 leading-relaxed">
                {personalInfo.principles}
              </p>
            </div>
            {/* Stamp align right */}
            <div className="flex justify-end mt-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-10 h-10 transform rotate-12 opacity-85 cursor-pointer"
                style={{
                  backgroundImage: `url('./src/assets/botanical/legal-leaf-seal.svg')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
          </PulpCard>
        </motion.div>

        {/* Applied Tools */}
        <motion.div variants={itemVariants}>
          <PulpCard className="bg-[#DAD7CD]/40">
            <h4 className="text-lg font-bold text-[#3A5A40] mb-4">Các Công Cụ Đã Trải Nghiệm</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalInfo.tools.map((tool, index) => (
                <div key={index} className="p-3 rounded-[12px] bg-[#F5F5F5]/60 border border-[#A3B18A]/30 text-center hover:bg-[#F5F5F5]/90 transition-colors">
                  <strong className="text-xs text-[#3A5A40] font-bold block">{tool.name}</strong>
                  <span className="text-[10px] text-[#588157] block mt-1 leading-snug">{tool.desc}</span>
                </div>
              ))}
            </div>
          </PulpCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
