import { motion } from 'framer-motion';
import { Sparkles, Star, AlertTriangle, Compass, Heart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import { conclusion } from '../../data/portfolioData';

export default function ConclusionGlassScroll() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-center text-text-primary mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tổng kết hành trình
      </motion.h2>

      {/* Experience */}
      <GlassCard className="mb-6" delay={0}>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/10 shrink-0">
            <Sparkles size={24} className="text-pastel-pink" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
              Trải nghiệm và sự thay đổi
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
              {conclusion.experience}
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Baggage */}
      <GlassCard className="mb-6" delay={0.1}>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/10 shrink-0">
            <Star size={24} className="text-aurora-purple" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
              Hành trang quý giá
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
              {conclusion.baggage}
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Highlights */}
      <GlassCard className="mb-6" delay={0.2}>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/10 shrink-0">
            <Heart size={24} className="text-blush-rose" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
              Điểm tâm đắc nhất
            </h3>
            <ul className="space-y-2">
              {conclusion.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-text-secondary">
                  <span className="text-pastel-pink mt-0.5">✦</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>

      {/* Challenges */}
      <GlassCard className="mb-6" delay={0.3}>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/10 shrink-0">
            <AlertTriangle size={24} className="text-peach-glow" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
              Thách thức đã đối mặt
            </h3>
            <ul className="space-y-2">
              {conclusion.challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-text-secondary">
                  <span className="text-aurora-purple mt-0.5">◆</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>

      {/* Future */}
      <GlassCard className="mb-6" delay={0.4}>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/10 shrink-0">
            <Compass size={24} className="text-mint-cream" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
              Định hướng phía trước
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
              {conclusion.future}
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Thanks */}
      <motion.div
        className="mt-12 text-center p-8 rounded-glass"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(255, 182, 217, 0.1)',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Heart size={30} className="text-pastel-pink mx-auto mb-4" />
        <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto italic">
          {conclusion.thanks}
        </p>
      </motion.div>
    </section>
  );
}
