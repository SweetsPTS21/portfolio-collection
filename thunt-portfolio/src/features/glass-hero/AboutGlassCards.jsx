import { motion } from 'framer-motion';
import {
  User, Heart, Smile, Target, Award, Shield, Star,
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import { aboutCards } from '../../data/portfolioData';

const iconMap = { User, Heart, Smile, Target, Award, Shield, Star };

export default function AboutGlassCards() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-center text-text-primary mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Về bản thân
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {aboutCards.map((card, i) => {
          const Icon = iconMap[card.icon] || Star;
          return (
            <GlassCard key={card.id} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/10">
                  <Icon size={24} className="text-pastel-pink" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                    {card.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
