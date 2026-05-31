import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Clapperboard,
  FileText,
  FolderKanban,
  Music2,
  Palette,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
} from 'lucide-react';
import { cardVariants, routeVariants, spring } from './motionConfig.js';
import { useLenisSetup } from './lenisSetup.js';
import {
  focalAssetsByRoute,
  navigationRoutes,
  profile,
  projectChapters,
  reflectionItems,
  thanks,
} from '../data/portfolioData.js';
import avatarUrl from '../../docs/avatar.jpg';
import bt1Url from '../../docs/Bt1.pdf';
import bt2Url from '../../docs/Bt2.pdf';
import bt3Url from '../../docs/Bt3.pdf';
import bt4Url from '../../docs/Bt4.pdf';
import bt5Url from '../../docs/Bt5.pdf';
import bt6Url from '../../docs/Bt6.pdf';
import moonUrl from '../assets/lavender-dream-glass/lavender-moon-scene.svg';
import notebookUrl from '../assets/lavender-dream-glass/giant-glass-notebook.svg';
import libraryUrl from '../assets/lavender-dream-glass/glass-dream-library.svg';
import papersUrl from '../assets/lavender-dream-glass/floating-study-papers.svg';
import folderLandscapeUrl from '../assets/lavender-dream-glass/dream-folder-landscape.svg';
import folderCardUrl from '../assets/lavender-dream-glass/dream-folder-cards.svg';
import windowUrl from '../assets/lavender-dream-glass/constellation-dream-window.svg';
import gateUrl from '../assets/lavender-dream-glass/thank-you-moon-gate.svg';
import auroraUrl from '../assets/lavender-dream-glass/aurora-glass-ribbons.svg';
import sparkleUrl from '../assets/lavender-dream-glass/sparkle-dust.svg';
import notesUrl from '../assets/lavender-dream-glass/soft-note-stickers.svg';
import sealsUrl from '../assets/lavender-dream-glass/chapter-seals.svg';
import textureUrl from '../assets/lavender-dream-glass/glass-card-textures.svg';

const iconMap = {
  BookOpen,
  Brain,
  Clapperboard,
  FileText,
  FolderKanban,
  Music2,
  Palette,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
};

const assetUrlById = {
  moon: moonUrl,
  notebook: notebookUrl,
  folder: folderLandscapeUrl,
  papers: papersUrl,
  window: windowUrl,
  gate: gateUrl,
};

const cardAssetUrlById = {
  folderCard: folderCardUrl,
  moon: moonUrl,
  notes: notesUrl,
  papers: papersUrl,
  sparkle: sparkleUrl,
  window: windowUrl,
};

const chapterDocs = [bt1Url, bt2Url, bt3Url, bt4Url, bt5Url, bt6Url];

function getCurrentPath() {
  const route = navigationRoutes.find(
    (item) => item.path === window.location.pathname
  );
  return route ? route.path : '/about';
}

export default function App() {
  const [path, setPath] = useState(getCurrentPath);
  useLenisSetup();

  useEffect(() => {
    if (
      !navigationRoutes.some((route) => route.path === window.location.pathname)
    ) {
      window.history.replaceState({}, '', '/about');
    }

    const handlePop = () => setPath(getCurrentPath());
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navigate = (nextPath) => {
    if (nextPath === path) return;
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <DreamBackground path={path} />
      <header className="glass-nav" aria-label="Primary navigation">
        <button
          className="brand-button"
          type="button"
          onClick={() => navigate('/about')}
        >
          <Sparkles size={18} aria-hidden="true" />
          ANHNP
        </button>
        <nav>
          {navigationRoutes.map((route) => (
            <button
              key={route.path}
              className={route.path === path ? 'nav-link active' : 'nav-link'}
              type="button"
              onClick={() => navigate(route.path)}
              aria-current={route.path === path ? 'page' : undefined}
            >
              {route.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            variants={routeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.46, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {path === '/about' && <AboutPage />}
            {path === '/projects' && <ProjectsPage />}
            {path === '/conclusion' && <ConclusionPage />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function DreamBackground({ path }) {
  const focalAssets = focalAssetsByRoute[path];

  return (
    <div
      className={`dream-background route-${path.slice(1)}`}
      aria-hidden="true"
    >
      <img className="bg-aurora" src={auroraUrl} alt="" />
      <img className="bg-library" src={libraryUrl} alt="" />
      {focalAssets.map((asset) => (
        <img
          key={asset.id}
          className={`focal-asset focal-${asset.id}`}
          src={assetUrlById[asset.id]}
          alt=""
        />
      ))}
      <img className="bg-notes" src={notesUrl} alt="" />
      <img className="bg-sparkle sparkle-a" src={sparkleUrl} alt="" />
      <img className="bg-sparkle sparkle-b" src={sparkleUrl} alt="" />
      <div className="glass-pane pane-left" />
      <div className="glass-pane pane-right" />
    </div>
  );
}

function AboutPage() {
  return (
    <section className="page about-page section-grid">
      <div className="hero-copy">
        <PastelTag icon="Sparkles">About me</PastelTag>
        <h1>{profile.name}</h1>
        <p className="lead">{profile.greeting}</p>
        <div className="hero-actions" aria-label="Thông tin nhanh">
          <InfoPill icon="UserRound">{profile.studentId}</InfoPill>
          <InfoPill icon="BookOpen">{profile.role}</InfoPill>
          <InfoPill icon="Music2">Nghe nhạc</InfoPill>
          <InfoPill icon="Clapperboard">Xem phim</InfoPill>
        </div>
      </div>

      <GlassCard
        className={`profile-card enriched-about-profile ${profile.avatarSpec.frame}`}
      >
        <div className="profile-sunken-assets" aria-hidden="true">
          <img className="profile-bg-notebook" src={notebookUrl} alt="" />
          <img className="profile-bg-sparkle" src={sparkleUrl} alt="" />
        </div>
        <div className="avatar-stage">
          <span className="avatar-halo" aria-hidden="true" />
          <img className="avatar" src={avatarUrl} alt="Nguyễn Phương Anh" />
        </div>
        <div>
          <p className="eyebrow">Phong cách cá nhân</p>
          <h2>{profile.style}</h2>
          <ul className="soft-list">
            {profile.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </GlassCard>

      <motion.div
        className="goal-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.12 }}
      >
        {profile.goals.map((goal) => (
          <motion.article
            className="goal-ribbon"
            key={goal}
            variants={cardVariants}
            transition={spring}
          >
            <Brain size={22} aria-hidden="true" />
            <p>{goal}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="about-card-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.12 }}
      >
        {profile.aboutCards.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <motion.article
              className={`about-enrich-card glass-card ${card.frame}`}
              key={card.title}
              variants={cardVariants}
              transition={spring}
              style={{
                '--card-c1': card.palette[0],
                '--card-c2': card.palette[1],
                '--card-c3': card.palette[2],
              }}
            >
              <div className="about-card-asset" aria-hidden="true">
                <img src={cardAssetUrlById[card.backgroundAsset]} alt="" />
              </div>
              <div className="about-card-frame" aria-hidden="true" />
              <span className="about-card-icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="content-row">
        <GlassCard className="principle-card">
          <PastelTag icon="ShieldCheck">Nguyên tắc</PastelTag>
          <h2>Giữ tư duy độc lập</h2>
          <p>{profile.principle}</p>
        </GlassCard>
        <GlassCard className="tools-card">
          <PastelTag icon="FileText">Công cụ đã dùng</PastelTag>
          <div className="tool-cloud">
            {profile.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="page projects-page">
      <SectionHeader
        tag="Projects"
        title="6 chương thực hành kỹ năng số"
        text="Mỗi bài thực hành được trình bày như một folder kính pastel, giữ trọng tâm yêu cầu và thể hiện tư duy làm việc độc lập."
      />
      <div className="chapter-grid">
        {projectChapters.map((chapter, index) => {
          const Icon = iconMap[chapter.icon];
          return (
            <motion.article
              className={`chapter-card glass-card enriched-card ${chapter.card.frame} ${chapter.card.accent}`}
              style={{
                '--card-c1': chapter.card.palette[0],
                '--card-c2': chapter.card.palette[1],
                '--card-c3': chapter.card.palette[2],
              }}
              key={chapter.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ...spring, delay: index * 0.04 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1 }}
            >
              <div className="card-depth-layer" aria-hidden="true">
                <img
                  className="sunken-card-asset"
                  src={cardAssetUrlById[chapter.card.backgroundAsset]}
                  alt=""
                />
                <span className="card-orb orb-one" />
                <span className="card-orb orb-two" />
              </div>
              <div className="custom-frame" aria-hidden="true">
                <span className="frame-corner corner-a" />
                <span className="frame-corner corner-b" />
                <span className="frame-corner corner-c" />
                <span className="frame-corner corner-d" />
              </div>
              <img
                className="card-folder"
                src={folderCardUrl}
                alt=""
                aria-hidden="true"
              />
              <img
                className="card-texture"
                src={textureUrl}
                alt=""
                aria-hidden="true"
              />
              <span className="chapter-seal">{chapter.number}</span>
              <div className="chapter-icon">
                <Icon size={26} aria-hidden="true" />
              </div>
              <p className="eyebrow">Chương {chapter.number}</p>
              <h2>{chapter.title}</h2>
              <p className="chapter-goal">{chapter.goal}</p>
              <p>{chapter.summary}</p>
              <div className="chapter-footer">
                <span>{chapter.skill}</span>
                <a href={chapterDocs[index]} target="_blank" rel="noreferrer">
                  Mở BT{chapter.number}
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
      <img className="seal-strip" src={sealsUrl} alt="" aria-hidden="true" />
    </section>
  );
}

function ConclusionPage() {
  return (
    <section className="page conclusion-page">
      <SectionHeader
        tag="Conclusion"
        title="Tổng kết hành trình"
        text="Portfolio khép lại bằng những thay đổi, hành trang, thách thức và lời cảm ơn được đặt trong một khung cảnh chòm sao tím mộng mơ."
      />
      <div className="timeline">
        {reflectionItems.map((item, index) => (
          <motion.article
            className="timeline-item glass-card"
            key={item.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...spring, delay: index * 0.06 }}
          >
            <span className="timeline-dot">{index + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
      <GlassCard className="thanks-card thanks-card-moon-gate">
        <div className="thanks-visual-layer" aria-hidden="true">
          <img className="thanks-gate" src={gateUrl} alt="" />
          <img className="thanks-sparkle-dust" src={sparkleUrl} alt="" />
          <span className="thanks-glow thanks-glow-a" />
          <span className="thanks-glow thanks-glow-b" />
          <span className="thanks-star thanks-star-a" />
          <span className="thanks-star thanks-star-b" />
        </div>
        <div className="thanks-content">
          <PastelTag icon="Sparkles">Cảm ơn</PastelTag>
          <h2>Khép lại bằng sự biết ơn</h2>
          <p>{thanks}</p>
        </div>
      </GlassCard>
    </section>
  );
}

function SectionHeader({ tag, title, text }) {
  return (
    <div className="section-header">
      <PastelTag icon="Sparkles">{tag}</PastelTag>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

function GlassCard({ className = '', children }) {
  return <article className={`glass-card ${className}`}>{children}</article>;
}

function PastelTag({ icon, children }) {
  const Icon = iconMap[icon] || Sparkles;
  return (
    <span className="pastel-tag">
      <Icon size={16} aria-hidden="true" />
      {children}
    </span>
  );
}

function InfoPill({ icon, children }) {
  const Icon = iconMap[icon] || Sparkles;
  return (
    <span className="info-pill">
      <Icon size={17} aria-hidden="true" />
      {children}
    </span>
  );
}
