import { motion } from 'framer-motion';
import { Anchor, Compass, Layers3, Radio, Scale, Sparkles } from 'lucide-react';
import ProfileExpeditionCard from '../components/cards/ProfileExpeditionCard.jsx';
import MotionSection from '../components/ui/MotionSection.jsx';
import SonarButton from '../components/ui/SonarButton.jsx';
import TextStack from '../components/ui/TextStack.jsx';
import { profile, projects, tools } from '../data/portfolioData.js';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <section className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -38 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ice-badge">
            <Radio size={18} /> Arctic Orca Expedition
          </span>
          <h1>{profile.name}</h1>
          <TextStack items={profile.opening} />
          <div className="hero-actions">
            <button
              className="primary-action"
              onClick={() => onNavigate('/projects')}
              type="button"
            >
              Xem bài tập
            </button>
            <button
              className="secondary-action"
              onClick={() => onNavigate('/conclusion')}
              type="button"
            >
              Đọc tổng kết
            </button>
          </div>
        </motion.div>
        <motion.div
          className="hero-orca-panel"
          initial={{ opacity: 0, y: 34, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img className="avatar-photo" src="/avatar.jpg" alt={profile.name} />
          <div className="sonar-dial" />
          <div className="mini-sub-card">{profile.studentId}</div>
        </motion.div>
      </section>

      <MotionSection className="overview-grid home-overview-grid">
        <ProfileExpeditionCard profile={profile} />
        <article className="ice-card mission-card mission-feature-card">
          <div className="card-kicker">
            <Compass size={18} /> Mục tiêu portfolio
          </div>
          <TextStack items={profile.portfolioGoal} className="balanced-text" />
          <div className="mission-footer">
            <span>Mã sinh viên: {profile.studentId}</span>
            <SonarButton href="/projects">Đi tới catalog</SonarButton>
          </div>
        </article>
      </MotionSection>

      <MotionSection className="tools-grid redesigned-tools-grid">
        <article className="ice-card tools-card principle-card">
          <div className="card-kicker">
            <Scale size={18} /> Trục tư duy
          </div>
          <h2>Nguyên tắc thực hiện</h2>
          <TextStack
            items={profile.principle}
            className="balanced-text principle-text"
          />
        </article>
        {tools.map((tool, index) => (
          <article
            className="ice-card tools-card tool-cluster-card"
            key={tool.group}
          >
            <div className="tool-card-head">
              {index % 2 === 0 ? <Layers3 size={22} /> : <Sparkles size={22} />}
              <span>Nhóm 0{index + 1}</span>
            </div>
            <h3>{tool.group}</h3>
            <ul>
              {tool.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </MotionSection>
    </div>
  );
}
