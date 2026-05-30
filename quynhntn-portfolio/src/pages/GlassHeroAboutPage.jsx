import { motion } from 'framer-motion';
import {
  Target, Award, Shield, Star,
} from 'lucide-react';
import HeroGlassPanel  from '../features/glass-hero/HeroGlassPanel';
import AboutGlassCards from '../features/glass-hero/AboutGlassCards';
import ToolBadgeRow    from '../features/glass-hero/ToolBadgeRow';
import DreamCard       from '../components/ui/DreamCard';
import { aboutCards }  from '../data/portfolioData';

const iconMap = { Target, Award, Shield, Star };
// 3 card còn lại (index 3,4,5): Mục tiêu học tập, Mục tiêu Portfolio, Nguyên tắc
const REMAINING_VARIANTS = ['plum', 'rose', 'teal'];
const REMAINING_ACCENTS  = ['#8B4BAB', '#D4607E', '#3A9A8A'];
const REMAINING_BG       = ['rgba(139,75,171,0.09)', 'rgba(212,96,126,0.09)', 'rgba(58,154,138,0.09)'];

export default function GlassHeroAboutPage() {
  const remainingCards = aboutCards.slice(3); // Mục tiêu học tập, Portfolio, Nguyên tắc

  return (
    <div className="relative min-h-screen">

      {/* ── 2-column hero section ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left — profile card, full height */}
          <div className="lg:col-span-4 h-full">
            <HeroGlassPanel />
          </div>

          {/* Right — big about card, full height */}
          <div className="lg:col-span-8 h-full">
            <AboutGlassCards />
          </div>

        </div>
      </section>

      {/* ── Remaining 3 cards: Mục tiêu & Nguyên tắc ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-10">
        <motion.h2
          className="text-xl font-heading font-bold mb-5"
          style={{ color: '#2D2D2D' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Mục tiêu &amp; Nguyên tắc
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {remainingCards.map((card, i) => {
            const Icon = iconMap[card.icon] || Star;
            return (
              <DreamCard
                key={card.id}
                delay={i * 0.1}
                variant={REMAINING_VARIANTS[i]}
                cardStyle="filled"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-xl shrink-0"
                    style={{ background: REMAINING_BG[i] }}
                  >
                    <Icon size={20} style={{ color: REMAINING_ACCENTS[i] }} />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-heading font-semibold mb-1"
                      style={{ color: REMAINING_ACCENTS[i] }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                      {card.content}
                    </p>
                  </div>
                </div>
              </DreamCard>
            );
          })}
        </div>
      </section>

      {/* ── Tool badges ── */}
      <ToolBadgeRow />
    </div>
  );
}
