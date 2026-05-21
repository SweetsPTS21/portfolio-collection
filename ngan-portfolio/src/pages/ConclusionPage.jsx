import { motion } from 'framer-motion';
import { Star, AlertTriangle, Heart } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import FireflyParticles from '../components/ui/FireflyParticles';
import { conclusion } from '../data/portfolioData';
import cardFrameVine from '../assets/fairy-mushroom-forest/card-frame-vine.svg';
import fairySitting from '../assets/fairy-mushroom-forest/fairy-sitting.svg';
import mushroomCluster from '../assets/fairy-mushroom-forest/mushroom-cluster.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function ConclusionPage() {
  return (
    <PageShell>
      {/* Header */}
      <section className="section" style={{ paddingBottom: 16 }}>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} style={{ fontSize: 'clamp(44px, 8vw, 72px)', lineHeight: 1, marginBottom: 12, textShadow: '0 0 20px rgba(52,211,153,0.1)' }}>
          <span className="gradient-text">Tổng kết</span>
        </motion.h1>
      </section>

      <div className="section conclusion-content">
        {/* Quote — parchment scroll style */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="conclusion-quote">
          <FireflyParticles count={12} />
          <img src={mushroomCluster} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -10, right: -10, width: 120, opacity: 0.15, pointerEvents: 'none' }} />
          <span className="quote-mark">"</span>
          <p className="quote-text">{conclusion.quote}</p>
          <div className="quote-author">
            <Heart size={16} color="var(--fairy-purple)" fill="var(--fairy-purple)" />
            <span>— Thiên Ngân</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="conclusion-grid">
          {/* Highlight */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="conclusion-card">
            <img src={cardFrameVine} alt="" aria-hidden="true" className="concl-vine" />
            <FireflyParticles count={4} style={{ opacity: 0.4 }} />
            <div className="concl-inner">
              <Star size={24} color="var(--forest-primary)" />
              <strong className="concl-title">Điểm tâm đắc nhất</strong>
              <p className="concl-text">{conclusion.highlight}</p>
            </div>
          </motion.div>

          {/* Challenge */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="conclusion-card">
            <img src={cardFrameVine} alt="" aria-hidden="true" className="concl-vine" />
            <FireflyParticles count={4} style={{ opacity: 0.4 }} />
            <div className="concl-inner">
              <AlertTriangle size={24} color="var(--firefly-gold)" />
              <strong className="concl-title">Thách thức & Cách vượt qua</strong>
              <p className="concl-text">{conclusion.challenge}</p>
            </div>
          </motion.div>
        </div>

        {/* Message — with fairy */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="conclusion-message">
          <img src={fairySitting} alt="" aria-hidden="true" className="message-fairy" />
          <p className="message-text">{conclusion.message}</p>
        </motion.div>

        {/* Thank you */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="conclusion-thankyou">
          <span className="thankyou-bg">THANK YOU</span>
          <FireflyParticles count={8} />
          <p className="thankyou-text">🌿 Hẹn gặp lại trong khu rừng tiên 🌿</p>
        </motion.div>
      </div>

    </PageShell>
  );
}
