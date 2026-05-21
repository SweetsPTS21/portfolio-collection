import { motion } from 'framer-motion';
import { BookOpen, FileText, GraduationCap, Palette, Sparkles, Target } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import LeafBadge from '../components/ui/LeafBadge';
import FireflyParticles from '../components/ui/FireflyParticles';
import { about } from '../data/portfolioData';
import enchantedGate from '../assets/fairy-mushroom-forest/enchanted-gate.svg';
import fairyDustTrail from '../assets/fairy-mushroom-forest/fairy-dust-trail.svg';
import fairySitting from '../assets/fairy-mushroom-forest/fairy-sitting.svg';
import cardFrameVine from '../assets/fairy-mushroom-forest/card-frame-vine.svg';
import mushroomCluster from '../assets/fairy-mushroom-forest/mushroom-cluster.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function AboutPage() {
  return (
    <PageShell>
      {/* ═══ HERO — Gate entrance ═══ */}
      <section className="hero-forest">
        <FireflyParticles count={16} />

        {/* Fairy dust trail */}
        <img src={fairyDustTrail} alt="" aria-hidden="true" className="hero-dust-trail" />

        {/* Content grid */}
        <div className="section hero-grid">
          {/* Left: Text */}
          <motion.div initial="hidden" animate="visible" className="hero-text">
            <motion.p variants={fadeUp} custom={0} className="hero-greeting">
              ✨ {about.greeting}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="hero-name">
              <span className="gradient-text">Thiên Ngân</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="hero-subtitle">
              {about.fullGreeting}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <LeafBadge label="🎨 Vẽ tranh" color="#A855F7" />
              <LeafBadge label="📸 Chụp ảnh" color="#2DD4BF" />
              <LeafBadge label="📖 Đọc sách" color="#FBBF24" />
            </motion.div>
          </motion.div>

          {/* Right: Avatar in gate frame */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="hero-avatar-wrap">
            <img src={enchantedGate} alt="" aria-hidden="true" className="avatar-gate" />
            <div className="avatar-frame">
              <img src="/avatar.png" alt="Thiên Ngân" className="avatar-img" />
            </div>
            {/* Fairy sitting on gate */}
            <img src={fairySitting} alt="" aria-hidden="true" className="avatar-fairy" />
          </motion.div>
        </div>
      </section>

      {/* ═══ ABOUT INFO — Illustrated cards ═══ */}
      <section className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-title">
          <span className="gradient-text">Về mình</span>
        </motion.h2>

        <div className="info-grid">
          {[
            { icon: GraduationCap, color: '#34D399', title: 'Chuyên ngành', text: about.major },
            { icon: Palette, color: '#A855F7', title: 'Sở thích', text: about.hobbies },
            { icon: Sparkles, color: '#FBBF24', title: 'Phong cách', text: about.styleDetail },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="info-card"
              >
                {/* Vine frame */}
                <img src={cardFrameVine} alt="" aria-hidden="true" className="card-vine" />
                <FireflyParticles count={3} style={{ opacity: 0.5 }} />
                <div className="card-inner">
                  <div className="card-icon" style={{ background: `${card.color}15`, border: `2px solid ${card.color}40` }}>
                    <Icon size={26} color={card.color} />
                  </div>
                  <strong className="card-title">{card.title}</strong>
                  <p className="card-text">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══ CÂU CHUYỆN CÁ NHÂN ═══ */}
      <section className="section story-section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="story-grid">
          <div className="story-card">
            <BookOpen size={26} color="var(--fairy-purple)" />
            <h2 className="story-title"><span className="gradient-text">Một chút về bản thân</span></h2>
            <p>{about.personalStory}</p>
          </div>
          <div className="story-card">
            <FileText size={26} color="var(--forest-primary)" />
            <h2 className="story-title"><span className="gradient-text">Mục tiêu Portfolio</span></h2>
            <p>{about.portfolioGoal}</p>
          </div>
        </motion.div>
      </section>

      {/* ═══ ĐỊNH HƯỚNG — Forest clearing ═══ */}
      <section className="section orientation-section">
        <img src={mushroomCluster} alt="" aria-hidden="true" className="orientation-mushroom" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="orientation-content">
          <div className="orientation-icon">
            <Target size={28} color="var(--forest-primary)" />
          </div>
          <div>
            <h2 className="section-title" style={{ marginBottom: 12 }}><span className="gradient-text">Định hướng</span></h2>
            <p className="orientation-text">{about.orientationIntro}</p>
            <p className="orientation-text">{about.orientation}</p>
            <p className="orientation-text">{about.orientationOutro}</p>
          </div>
        </motion.div>
      </section>

      {/* ═══ CÔNG CỤ ═══ */}
      <section className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-title">
          <span className="gradient-text">Công cụ & Nền tảng</span>
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="tool-groups-grid">
          {about.toolGroups.map((group) => (
            <div key={group.label} className="tool-group-card">
              <strong>{group.label}</strong>
              <div className="tool-badge-row">
                {group.items.map((tool) => <LeafBadge key={tool} label={tool} />)}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

    </PageShell>
  );
}
