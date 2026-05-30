import { motion } from 'framer-motion';
import { Target, Award, Shield, Star } from 'lucide-react';
import HeroGlassPanel from '../features/glass-hero/HeroGlassPanel';
import AboutGlassCards from '../features/glass-hero/AboutGlassCards';
import ToolBadgeRow from '../features/glass-hero/ToolBadgeRow';
import DreamCard from '../components/ui/DreamCard';
import { aboutCards, personalInfo } from '../data/portfolioData';
import prismSvg from '../assets/pastel-glass-dreamscape/crystal-prism-rays.svg';
import rainbowSvg from '../assets/pastel-glass-dreamscape/rainbow-refraction.svg';
import sparkleSvg from '../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';

const iconMap = { Target, Award, Shield, Star };
const REMAINING_VARIANTS = ['plum', 'rose', 'teal'];
const REMAINING_ACCENTS = ['#8B4BAB', '#D4607E', '#3A9A8A'];
const REMAINING_BG = [
  'rgba(139,75,171,0.09)',
  'rgba(212,96,126,0.09)',
  'rgba(58,154,138,0.09)',
];

export default function GlassHeroAboutPage() {
  const remainingCards = aboutCards.slice(3);

  return (
    <div className="relative min-h-screen">
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-10 md:pt-12">
        <div
          className="dreamy-hero-stage relative overflow-hidden rounded-[2rem] px-4 py-5 md:px-6 md:py-7"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.62), rgba(255,240,248,0.42) 44%, rgba(238,255,250,0.38))',
            border: '1px solid rgba(255,255,255,0.68)',
            boxShadow:
              '0 24px 80px rgba(139,75,171,0.16), inset 0 1px 0 rgba(255,255,255,0.75)',
            backdropFilter: 'blur(18px)',
          }}
        >
          <img
            src={prismSvg}
            aria-hidden="true"
            className="absolute -right-16 -top-20 w-72 md:w-96 opacity-30 pointer-events-none"
            style={{ animation: 'glow-pulse 7s ease-in-out infinite' }}
          />
          <img
            src={rainbowSvg}
            aria-hidden="true"
            className="absolute -left-16 bottom-2 w-64 opacity-20 pointer-events-none"
            style={{ animation: 'rainbow-hue 12s linear infinite' }}
          />
          <img
            src={sparkleSvg}
            aria-hidden="true"
            className="absolute left-1/2 top-5 w-28 opacity-25 pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-4 h-full">
              <HeroGlassPanel />
            </div>

            <div className="lg:col-span-8 h-full flex flex-col gap-5">
              <motion.div
                className="relative overflow-hidden rounded-3xl px-5 py-5 md:px-7 md:py-6"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.46))',
                  border: '1px solid rgba(255,255,255,0.72)',
                  boxShadow: '0 14px 44px rgba(212,96,126,0.13)',
                  backdropFilter: 'blur(16px)',
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, ease: 'easeOut' }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(212,96,126,0.55), rgba(91,186,208,0.45), transparent)',
                  }}
                />
                <p
                  className="text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.22em] mb-3"
                  style={{ color: '#8B4BAB' }}
                >
                  Dreamy digital portfolio
                </p>
                <h1
                  className="font-heading font-bold text-3xl md:text-5xl leading-tight max-w-3xl"
                  style={{ color: '#25233A' }}
                >
                  Không gian học tập số của Như Quỳnh
                </h1>
                <p
                  className="mt-4 text-sm md:text-base leading-relaxed max-w-2xl"
                  style={{ color: '#5A5268' }}
                >
                  {personalInfo.tagline}. Mỗi lớp kính lưu lại một phần tính cách,
                  mục tiêu và cách em dùng công nghệ trong học tập.
                </p>
              </motion.div>

              <AboutGlassCards />
            </div>
          </div>
        </div>
      </section>

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
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-heading font-semibold mb-2"
                      style={{ color: REMAINING_ACCENTS[i] }}
                    >
                      {card.title}
                    </h3>
                    {Array.isArray(card.content) ? (
                      <div className="space-y-2">
                        {card.content.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg border text-xs md:text-sm leading-relaxed transition-all duration-300 hover:shadow-sm flex items-start gap-1.5"
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.55)',
                              borderColor: `${REMAINING_ACCENTS[i]}22`,
                              color: '#4A4A4A',
                            }}
                          >
                            <span
                              className="font-bold shrink-0"
                              style={{ color: REMAINING_ACCENTS[i] }}
                            >
                              {idx + 1}.
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>
              </DreamCard>
            );
          })}
        </div>
      </section>

      <ToolBadgeRow />
    </div>
  );
}
