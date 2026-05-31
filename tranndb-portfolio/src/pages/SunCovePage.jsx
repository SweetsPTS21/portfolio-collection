import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Database, GraduationCap, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { profile, toolGroups } from "../data/portfolioData.js";
import avatar from "../../docs/avatar.jpg";
import shellStickers from "../assets/sunlit-ocean-life/shell-stickers.svg";
import sunBadge from "../assets/sunlit-ocean-life/sun-badge.svg";

const facts = [
  { icon: GraduationCap, label: "Ngành", value: profile.major },
  { icon: BookOpen, label: "Mã SV", value: profile.studentId },
  { icon: Scale, label: "Trường", value: profile.school },
  { icon: ShieldCheck, label: "Phong cách", value: profile.style.split(". ")[0] },
];

export default function SunCovePage({ onNavigate }) {
  return (
    <div className="page-grid hero-grid">
      <motion.section className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
        <span className="ocean-badge"><Sparkles size={16} /> Hồ sơ cá nhân</span>
        <h1>{profile.name}</h1>
        <p className="hero-lead">{profile.headline}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => onNavigate("/logs")}>Xem bài thực hành</button>
          <button type="button" onClick={() => onNavigate("/beacon")}>Xem tổng kết</button>
        </div>
      </motion.section>

      <motion.section className="viewport-card" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 }}>
        <img className="log-frame-art" src={shellStickers} alt="" />
        <div className="avatar-porthole">
          <img src={avatar} alt="Nguyễn Đỗ Bảo Trân" />
        </div>
        <div className="profile-manifest">
          <span>Thông tin sinh viên</span>
          <h2>{profile.school}</h2>
          <p>{profile.intro}</p>
        </div>
      </motion.section>

      <section className="fact-grid" aria-label="Profile facts">
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <motion.article className="ocean-card" key={fact.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Icon size={22} />
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </motion.article>
          );
        })}
      </section>

      <section className="mission-panel">
        <div>
          <h2>Mục tiêu và nguyên tắc</h2>
          <p>{profile.direction}</p>
          <p>{profile.portfolioGoal}</p>
          <p>{profile.principle}</p>
        </div>
        <img src={sunBadge} alt="" />
      </section>

      <section className="tool-grid" aria-label="Digital tools">
        {toolGroups.map((group, index) => (
          <motion.article className="tool-pod" key={group.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
            <Database size={18} />
            <h3>{group.label}</h3>
            <div>
              {group.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
