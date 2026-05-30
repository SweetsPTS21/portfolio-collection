import { motion } from 'framer-motion';
import {
  User, Heart, Smile, Target, Award, Shield, Star,
} from 'lucide-react';
import DreamCard  from '../../components/ui/DreamCard';
import wreathSvg  from '../../assets/pastel-glass-dreamscape/rose-wreath-glass.svg';
import cloudSvg   from '../../assets/pastel-glass-dreamscape/pink-cloud-set.svg';
import { aboutCards } from '../../data/portfolioData';

const iconMap = { User, Heart, Smile, Target, Award, Shield, Star };

// Màu accent xoay vòng cho từng item bên trong card
const ACCENT_COLORS = ['#D4607E', '#8B4BAB', '#3A9A8A', '#D4607E', '#8B4BAB', '#3A9A8A'];
const ACCENT_BG     = [
  'rgba(212,96,126,0.09)',
  'rgba(139,75,171,0.09)',
  'rgba(58,154,138,0.09)',
  'rgba(212,96,126,0.09)',
  'rgba(139,75,171,0.09)',
  'rgba(58,154,138,0.09)',
];

export default function AboutGlassCards() {
  return (
    <DreamCard variant="rose" delay={0.1} className="h-full">
      {/* Extra assets layered inside card */}
      <img
        src={wreathSvg}
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '-50px', left: '-50px',
          width: '240px', opacity: 0.07, pointerEvents: 'none',
        }}
      />
      <img
        src={cloudSvg}
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-10px', right: '-10px',
          width: '200px', opacity: 0.18, pointerEvents: 'none',
        }}
      />
      {/* Card header */}
      <motion.div
        className="flex items-center gap-2 mb-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="w-1 h-6 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #D4607E, #8B4BAB)' }}
        />
        <h2 className="text-xl font-heading font-bold" style={{ color: '#2D2D2D' }}>
          Về bản thân
        </h2>
      </motion.div>

      {/* Items list */}
      <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(212,96,126,0.10)' }}>
        {/* Chỉ lấy 3 item đầu */}
        {aboutCards.slice(0, 3).map((card, i) => {
          const Icon = iconMap[card.icon] || Star;
          return (
            <motion.div
              key={card.id}
              className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              {/* Icon badge */}
              <div
                className="p-2 rounded-xl shrink-0 mt-0.5"
                style={{ background: ACCENT_BG[i] }}
              >
                <Icon size={18} style={{ color: ACCENT_COLORS[i] }} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-heading font-semibold mb-0.5"
                  style={{ color: ACCENT_COLORS[i] }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                  {card.content}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </DreamCard>
  );
}
