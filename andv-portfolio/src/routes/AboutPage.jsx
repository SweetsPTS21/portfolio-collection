import { motion } from 'framer-motion';
import { Clapperboard, Gamepad2, GraduationCap, Scale, University } from 'lucide-react';
import ScrollPanel from '../components/cards/ScrollPanel.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { goals, personalInfo, tools } from '../data/portfolioData.js';

const infoItems = [
  { icon: GraduationCap, label: 'Mã sinh viên', value: personalInfo.studentId },
  { icon: Scale, label: 'Ngành học', value: personalInfo.major },
  { icon: University, label: 'Trường', value: personalInfo.school },
  { icon: Clapperboard, label: 'Sở thích', value: 'Xem phim, bóng đá' },
  { icon: Gamepad2, label: 'Giải trí', value: 'Chơi game' },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <motion.span className="hero-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
            Luật Thương mại Quốc tế
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
            {personalInfo.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}>
            {personalInfo.intro}
          </motion.p>
        </div>
        <motion.div className="avatar-stage" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}>
          <img src={personalInfo.avatar} alt="Đào Việt An" />
          <img className="kylin-seal" src="/assets/mascots/kylin-seal.png" alt="" aria-hidden="true" />
        </motion.div>
      </section>

      <section className="info-grid" aria-label="Thông tin cá nhân">
        {infoItems.map(({ icon: Icon, label, value }) => (
          <motion.article key={label} className="seal-card" whileHover={{ y: -6 }}>
            <Icon size={22} aria-hidden="true" />
            <span>{label}</span>
            <strong>{value}</strong>
          </motion.article>
        ))}
      </section>

      <ScrollPanel>
        <SectionTitle eyebrow="Định hướng" title="Nắm luật chơi thương mại toàn cầu" />
        <p>{goals.learning}</p>
        <p>{goals.portfolio}</p>
      </ScrollPanel>

      <ScrollPanel className="principle-panel">
        <SectionTitle eyebrow="Nguyên tắc" title="Phản biện độc lập" />
        <p>{goals.principle}</p>
      </ScrollPanel>

      <section className="tools-strip" aria-label="Công cụ đã sử dụng">
        {tools.map((tool) => (
          <article key={tool.group}>
            <span>{tool.group}</span>
            <div>
              {tool.items.map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
