import { motion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import FireflyParticles from '../components/ui/FireflyParticles';
import { projects } from '../data/portfolioData';
import mushroomHouse from '../assets/fairy-mushroom-forest/mushroom-house.svg';
import cardFrameVine from '../assets/fairy-mushroom-forest/card-frame-vine.svg';
import forestPath from '../assets/fairy-mushroom-forest/forest-path.svg';
import enchantedLeaves from '../assets/fairy-mushroom-forest/enchanted-leaves.svg';
import fairyFlying from '../assets/fairy-mushroom-forest/fairy-flying.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      {/* Header */}
      <section className="section" style={{ paddingBottom: 16, position: 'relative' }}>
        {/* Floating leaves */}
        <img src={enchantedLeaves} alt="" aria-hidden="true" style={{ position: 'absolute', top: 10, right: 40, width: 60, opacity: 0.4, animation: 'float-gentle 4s ease-in-out infinite', pointerEvents: 'none' }} />
        <img src={enchantedLeaves} alt="" aria-hidden="true" style={{ position: 'absolute', top: 40, right: 120, width: 40, opacity: 0.3, animation: 'float-gentle 5s ease-in-out infinite 1s', pointerEvents: 'none' }} />
        <img src={fairyFlying} alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: '60%', width: 50, opacity: 0.5, animation: 'float-gentle 3.5s ease-in-out infinite 0.5s', pointerEvents: 'none' }} />

        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="projects-title">
          <span className="gradient-text">Dự án</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="projects-subtitle">
          6 tác phẩm trong triển lãm — mỗi trạm là một câu chuyện trên con đường rừng.
        </motion.p>
      </section>

      {/* Forest path + cards */}
      <div className="section projects-path-section">
        {/* Path SVG running down the center */}
        <img src={forestPath} alt="" aria-hidden="true" className="projects-path-svg" />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="projects-list">
          {projects.map((p, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div key={p.id} variants={fadeUp} className={`project-stop ${isEven ? 'stop-right' : 'stop-left'}`}>
                {/* Stone number */}
                <div className="stop-number" style={{ color: p.color, textShadow: `0 0 12px ${p.color}60` }}>
                  {p.num}
                </div>

                {/* Card */}
                <div className="project-card-forest" onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 32px ${p.color}30, 0 12px 40px rgba(0,0,0,0.08)`; e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}>
                  {/* Vine frame */}
                  <img src={cardFrameVine} alt="" aria-hidden="true" className="card-vine-bg" />
                  {/* Mushroom house decoration */}
                  <img src={mushroomHouse} alt="" aria-hidden="true" className="card-mushroom-deco" />
                  <FireflyParticles count={4} style={{ opacity: 0.4 }} />

                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-color-dot" style={{ background: p.color }} />
                      <h3 className="card-heading">{p.title}</h3>
                    </div>
                    <p className="card-desc">{p.desc}</p>
                  </div>

                  {/* Bottom glow line */}
                  <div className="card-glow-line" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </PageShell>
  );
}
