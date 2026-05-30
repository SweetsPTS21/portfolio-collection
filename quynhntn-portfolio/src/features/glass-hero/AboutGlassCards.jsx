import { motion } from 'framer-motion';
import { User, Heart, Smile, Target, Award, Shield, Star } from 'lucide-react';
import wreathSvg from '../../assets/pastel-glass-dreamscape/rose-wreath-glass.svg';
import cloudSvg from '../../assets/pastel-glass-dreamscape/pink-cloud-set.svg';
import sparkleSvg from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';
import butterflySvg from '../../assets/pastel-glass-dreamscape/glass-butterfly-pair.svg';
import { aboutCards } from '../../data/portfolioData';

const iconMap = { User, Heart, Smile, Target, Award, Shield, Star };

const TILE_STYLES = [
  {
    accent: '#D4607E',
    bg: 'linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,240,245,0.62))',
    iconBg: 'rgba(212,96,126,0.12)',
    span: 'md:col-span-5',
  },
  {
    accent: '#8B4BAB',
    bg: 'linear-gradient(135deg, rgba(255,255,255,0.72), rgba(248,244,255,0.68))',
    iconBg: 'rgba(139,75,171,0.12)',
    span: 'md:col-span-7',
  },
  {
    accent: '#3A9A8A',
    bg: 'linear-gradient(135deg, rgba(255,255,255,0.76), rgba(240,253,248,0.66))',
    iconBg: 'rgba(58,154,138,0.12)',
    span: 'md:col-span-12',
  },
];

export default function AboutGlassCards() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[1.75rem] p-4 md:p-5 flex-1"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.38), rgba(255,255,255,0.18))',
        border: '1px solid rgba(255,255,255,0.56)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.62), 0 16px 48px rgba(91,186,208,0.10)',
        backdropFilter: 'blur(14px)',
      }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
    >
      <img
        src={wreathSvg}
        aria-hidden="true"
        className="absolute -left-16 -bottom-16 w-72 opacity-10 pointer-events-none"
      />
      <img
        src={cloudSvg}
        aria-hidden="true"
        className="absolute -right-10 -top-8 w-60 opacity-20 pointer-events-none"
      />
      <img
        src={sparkleSvg}
        aria-hidden="true"
        className="absolute right-10 bottom-8 w-24 opacity-25 pointer-events-none"
      />
      <img
        src={butterflySvg}
        aria-hidden="true"
        className="absolute left-8 top-6 w-16 opacity-30 pointer-events-none hidden md:block"
        style={{ animation: 'butterfly-flutter 7s ease-in-out infinite' }}
      />

      <div className="relative z-10 flex items-center justify-between gap-4 mb-4">
        <div>
          <p
            className="text-xs font-heading font-semibold uppercase tracking-[0.22em] mb-1"
            style={{ color: '#8B4BAB' }}
          >
            About layers
          </p>
          <h2 className="text-xl md:text-2xl font-heading font-bold" style={{ color: '#25233A' }}>
            Về bản thân
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="h-10 w-10 rounded-full shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(212,96,126,0.22), rgba(91,186,208,0.22))',
            boxShadow: '0 0 24px rgba(212,96,126,0.18)',
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4">
        {aboutCards.slice(0, 3).map((card, i) => {
          const Icon = iconMap[card.icon] || Star;
          const tile = TILE_STYLES[i];

          return (
            <motion.article
              key={card.id}
              className={`glass-tile-feature relative overflow-hidden rounded-3xl p-4 md:p-5 border transition-all duration-300 hover:-translate-y-1 ${tile.span}`}
              style={{
                background: tile.bg,
                borderColor: `${tile.accent}22`,
                boxShadow: `0 12px 32px ${tile.accent}18, inset 0 1px 0 rgba(255,255,255,0.72)`,
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${tile.accent}88, transparent)` }}
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${tile.accent}22, transparent 68%)`,
                }}
              />

              <div className="relative z-10 flex items-start gap-3.5">
                <div
                  className="p-2.5 rounded-2xl shrink-0"
                  style={{ background: tile.iconBg, boxShadow: `0 8px 18px ${tile.accent}16` }}
                >
                  <Icon size={19} style={{ color: tile.accent }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-heading font-semibold mb-2" style={{ color: tile.accent }}>
                    {card.title}
                  </h3>
                  {Array.isArray(card.content) ? (
                    <div className="space-y-2 mt-1">
                      {card.content.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-2xl border text-xs md:text-sm leading-relaxed flex items-start gap-2"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.48)',
                            borderColor: `${tile.accent}22`,
                            color: '#4A4A4A',
                          }}
                        >
                          <span className="font-bold shrink-0" style={{ color: tile.accent }}>
                            {idx + 1}.
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: '#514A5E' }}>
                      {card.content}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}
