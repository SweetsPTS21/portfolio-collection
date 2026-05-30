import { motion } from 'framer-motion';
import { Sparkles, Star, AlertTriangle, Compass, Heart } from 'lucide-react';
import DreamCard from '../../components/ui/DreamCard';
import sakuraBranchSvg from '../../assets/pastel-glass-dreamscape/sakura-branch-curve.svg';
import sakuraPetalSvg  from '../../assets/pastel-glass-dreamscape/sakura-petal-set.svg';
import sparkleSvg      from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';
import roseSvg         from '../../assets/pastel-glass-dreamscape/crystal-rose-large.svg';
import { conclusion } from '../../data/portfolioData';

/* ─── Featured card — full-width 2-col internal layout ─────────────────── */
function FeaturedCard({ children, delay = 0 }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl mb-5 flex"
      style={{
        background:  '#FFFFFF',
        border:      '1px solid rgba(212,96,126,0.18)',
        boxShadow:   '0 4px 28px rgba(212,96,126,0.14)',
        minHeight:   '120px',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(212,96,126,0.22)',
        transition: { duration: 0.18 },
      }}
    >
      {/* Left accent panel */}
      <div
        className="flex flex-col items-center justify-center px-5 py-6 shrink-0"
        style={{
          background:   'linear-gradient(160deg, #D4607E 0%, #8B4BAB 100%)',
          width:        '80px',
          borderRadius: '16px 0 0 16px',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        <img
          src={sparkleSvg}
          aria-hidden="true"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.2, pointerEvents:'none' }}
        />
        <Sparkles size={26} color="white" style={{ position:'relative', zIndex:1 }} />
        <div className="w-px flex-1 mt-3" style={{ background: 'rgba(255,255,255,0.3)' }} />
      </div>

      {/* Right content */}
      <div className="flex-1 p-6 relative overflow-hidden">
        <img
          src={sakuraBranchSvg}
          aria-hidden="true"
          style={{ position:'absolute', top:'-18px', right:'-24px', width:'160px', opacity:0.22, pointerEvents:'none' }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
}

/* ─── Gradient tint card — for Định hướng ─────────────────────────────── */
function GradientCard({ children, delay = 0 }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-6 h-full"
      style={{
        background:  'linear-gradient(145deg, #FFF0F5 0%, #F8F4FF 60%, #F0FDF8 100%)',
        border:      '1px solid rgba(139,75,171,0.16)',
        boxShadow:   '0 4px 24px rgba(139,75,171,0.10)',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={{
        y: -5,
        boxShadow: '0 12px 36px rgba(139,75,171,0.18)',
        transition: { duration: 0.18 },
      }}
    >
      <img
        src={roseSvg}
        aria-hidden="true"
        style={{ position:'absolute', bottom:'-24px', right:'-20px', width:'120px', opacity:0.18, pointerEvents:'none' }}
      />
      <img
        src={sakuraPetalSvg}
        aria-hidden="true"
        style={{ position:'absolute', top:'-8px', right:'-4px', width:'90px', opacity:0.22, pointerEvents:'none' }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* ─── Shared icon badge ────────────────────────────────────────────────── */
function IconBadge({ icon: Icon, color, bg }) {
  return (
    <div className="p-2 rounded-xl shrink-0" style={{ background: bg }}>
      <Icon size={22} style={{ color }} />
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────────────────── */
export default function ConclusionGlassScroll() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-10"
        style={{ color: '#2D2D2D' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tổng kết hành trình
      </motion.h2>

      {/* ── Row 1: Full-width featured — Trải nghiệm ── */}
      <FeaturedCard delay={0}>
        <h3 className="text-lg font-heading font-bold mb-2" style={{ color: '#2D2D2D' }}>
          Trải nghiệm và sự thay đổi
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
          {conclusion.experience}
        </p>
      </FeaturedCard>

      {/* ── Row 2: 5/7 split — Hành trang | Tâm đắc ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">

        {/* Hành trang — filled plum, col 5 */}
        <div className="md:col-span-5">
          <DreamCard variant="plum" cardStyle="filled" delay={0.1} className="h-full">
            <div className="flex items-start gap-3">
              <IconBadge icon={Star} color="#8B4BAB" bg="rgba(139,75,171,0.12)" />
              <div>
                <h3 className="text-base font-heading font-bold mb-2" style={{ color: '#2D2D2D' }}>
                  Hành trang quý giá
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                  {conclusion.baggage}
                </p>
              </div>
            </div>
          </DreamCard>
        </div>

        {/* Tâm đắc — filled teal, col 7 */}
        <div className="md:col-span-7">
          <DreamCard variant="teal" cardStyle="filled" delay={0.15} className="h-full">
            <div className="flex items-start gap-3">
              <IconBadge icon={Heart} color="#3A9A8A" bg="rgba(58,154,138,0.12)" />
              <div className="flex-1">
                <h3 className="text-base font-heading font-bold mb-3" style={{ color: '#2D2D2D' }}>
                  Điểm tâm đắc nhất
                </h3>
                <ul className="space-y-2">
                  {conclusion.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4A4A4A' }}>
                      <span style={{ color: '#3A9A8A', marginTop: '2px', flexShrink: 0 }}>✦</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DreamCard>
        </div>
      </div>

      {/* ── Row 3: 4/8 split — Thách thức | Định hướng ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">

        {/* Thách thức — filled peach, col 4 */}
        <div className="md:col-span-4">
          <DreamCard variant="peach" cardStyle="filled" delay={0.2} className="h-full">
            <div className="flex items-start gap-3 mb-3">
              <IconBadge icon={AlertTriangle} color="#D4784A" bg="rgba(212,120,74,0.12)" />
              <h3 className="text-base font-heading font-bold" style={{ color: '#2D2D2D' }}>
                Thách thức đã đối mặt
              </h3>
            </div>
            <ul className="space-y-2 pl-1">
              {conclusion.challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4A4A4A' }}>
                  <span style={{ color: '#D4784A', marginTop: '2px', flexShrink: 0 }}>◆</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </DreamCard>
        </div>

        {/* Định hướng — gradient tint card, col 8 */}
        <div className="md:col-span-8">
          <GradientCard delay={0.25}>
            <div className="flex items-start gap-3">
              <IconBadge icon={Compass} color="#8B4BAB" bg="rgba(139,75,171,0.12)" />
              <div>
                <h3 className="text-base font-heading font-bold mb-2" style={{ color: '#2D2D2D' }}>
                  Định hướng phía trước
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                  {conclusion.future}
                </p>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>

      {/* ── Thanks banner — centered, quote style ── */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-8 text-center"
        style={{
          background:   '#FFFFFF',
          border:       'none',
          borderBottom: '2px solid #D4607E',
          boxShadow:    '0 2px 20px rgba(212,96,126,0.12)',
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Large decorative " */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-16px', left: '20px',
            fontSize: '120px', lineHeight: 1,
            color: '#D4607E', opacity: 0.07,
            fontFamily: 'Georgia, serif', fontWeight: 700,
            pointerEvents: 'none', userSelect: 'none',
          }}
        >&#8220;</span>

        {/* Rose decoration — bottom right */}
        <img
          src={roseSvg}
          aria-hidden="true"
          style={{ position:'absolute', bottom:'-24px', right:'-18px', width:'110px', opacity:0.18, pointerEvents:'none' }}
        />
        {/* Sakura branch — top right */}
        <img
          src={sakuraBranchSvg}
          aria-hidden="true"
          style={{ position:'absolute', top:'-16px', right:'-22px', width:'150px', opacity:0.22, pointerEvents:'none' }}
        />

        <div className="relative z-10">
          <Heart size={28} className="mx-auto mb-3" style={{ color: '#D4607E' }} />
          <p
            className="text-sm leading-relaxed max-w-lg mx-auto italic"
            style={{ color: '#4A4A4A' }}
          >
            {conclusion.thanks}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
