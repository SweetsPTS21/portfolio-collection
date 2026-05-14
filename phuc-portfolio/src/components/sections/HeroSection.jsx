import { Button } from 'antd';
import { BookOpen, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, about } from '../../data/portfolioData.js';
import StickerBadge from '../ui/StickerBadge.jsx';
import RiveReadyMascot from '../stationery/RiveReadyMascot.jsx';

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-copy">
        <div className="hero-sticker-row">
          <StickerBadge>kawaii-stationery</StickerBadge>
          <StickerBadge tone="blue">Luật học - ĐHQGHN</StickerBadge>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {about.headline}
        </motion.h1>
        <p className="hero-name">{personalInfo.name}</p>
        <p className="hero-major">
          {personalInfo.major} - {personalInfo.university}
        </p>
        <p className="hero-philosophy">“{about.philosophy}”</p>
        <div className="hero-actions">
          <Button type="primary" href="#projects" icon={<FileText size={18} />}>
            Xem bài tập
          </Button>
          <Button href="#about" icon={<BookOpen size={18} />}>
            Giới thiệu
          </Button>
          <Button href="#conclusion" icon={<Sparkles size={18} />}>
            Tổng kết
          </Button>
        </div>
      </div>
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, rotate: 2, y: 24 }}
        animate={{ opacity: 1, rotate: -1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <span className="washi-label">profile note</span>
        <img src={personalInfo.avatar} alt={personalInfo.name} />
        <div>
          <h2>{personalInfo.name}</h2>
          <p>{personalInfo.interests}</p>
          <span>
            <Sparkles size={16} />
            {personalInfo.style}
          </span>
        </div>
        <RiveReadyMascot />
      </motion.div>
    </header>
  );
}
