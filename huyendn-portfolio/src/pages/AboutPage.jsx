import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Music2, Palette, Shell, SunMedium, Target } from 'lucide-react';
import avatar from '../../docs/avatar.jpg';
import mascot from '../assets/kawaii-beach-day/beach-girl-mascot.png';
import BeachPanel from '../components/ui/BeachPanel';
import ChipBucket from '../components/ui/ChipBucket';
import InfoShell from '../components/ui/InfoShell';
import PageShell from '../components/layout/PageShell';
import { goals, profile, strengths, tools } from '../data/portfolioData';

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="kawaii-beach-day shore"
      title="Xin chào, em là Đoàn Ngọc Huyền"
    >
      <section className="hero-grid">
        <motion.div
          className="towel-card hero-copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.22 }}
        >
          <p className="quote">{profile.quote}</p>
          <p>{profile.intro}</p>
          <div className="identity-grid">
            <InfoShell label="Họ và tên" value={profile.name} />
            <InfoShell label="Mã sinh viên" value={profile.studentId} />
            <InfoShell label="Ngành" value={profile.major} />
            <InfoShell label="Trường" value={profile.school} />
          </div>
        </motion.div>

        <motion.div
          className="avatar-floatie-card"
          initial={{ opacity: 0, y: 34, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: -0.6 }}
          transition={{
            type: 'spring',
            stiffness: 130,
            damping: 16,
            delay: 0.28,
          }}
        >
          <img className="avatar-photo" src={avatar} alt="Đoàn Ngọc Huyền" />
          <img
            className="avatar-mascot"
            src={mascot}
            alt=""
            aria-hidden="true"
          />
          {/* <span className="floatie-ring" aria-hidden="true" /> */}
        </motion.div>
      </section>

      <section className="panel-grid two-column">
        <BeachPanel title="Mục tiêu học tập" icon={<Target size={22} />}>
          <ul>
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </BeachPanel>
        <BeachPanel title="Beach bucket tools" icon={<Shell size={22} />}>
          <ChipBucket items={tools} />
        </BeachPanel>
      </section>

      <section className="panel-grid three-column">
        <BeachPanel
          title="Sở thích"
          icon={<Heart size={22} />}
          className="compact-panel"
        >
          <ChipBucket items={profile.interests} />
        </BeachPanel>
        <BeachPanel
          title="Phong cách"
          icon={<SunMedium size={22} />}
          className="compact-panel"
        >
          <ChipBucket items={profile.style} />
        </BeachPanel>
        <BeachPanel
          title="Điểm mạnh"
          icon={<Palette size={22} />}
          className="compact-panel"
        >
          <ul>
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </BeachPanel>
      </section>

      <BeachPanel
        title="Nguyên tắc thực hiện"
        icon={<Music2 size={22} />}
        className="wide-panel"
      >
        <p>{profile.portfolioGoal}</p>
        <p>{profile.principle}</p>
      </BeachPanel>
    </PageShell>
  );
}
