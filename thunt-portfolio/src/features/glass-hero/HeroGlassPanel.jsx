import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import avatarImg from '../../assets/pastel-glass-dreamscape/avatar.jpg';

export default function HeroGlassPanel() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <motion.div
        className="relative p-8 md:p-12 rounded-glass max-w-2xl w-full flex flex-col items-center"
        style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow:
            '0 12px 48px rgba(255, 182, 217, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        }}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Avatar frame — glass ring + glow */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          {/* Glow halo behind avatar */}
          <div
            className="absolute -inset-3 rounded-full"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(circle, rgba(255,142,199,0.4) 0%, rgba(212,160,255,0.2) 50%, transparent 75%)',
              filter: 'blur(8px)',
              animation: 'glow-pulse 5s ease-in-out infinite',
            }}
          />
          {/* Glass ring */}
          <div
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1.5"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,142,199,0.6), rgba(212,160,255,0.5), rgba(184,212,255,0.5))',
              boxShadow:
                '0 8px 32px rgba(255,142,199,0.3), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            <div
              className="w-full h-full rounded-full p-1"
              style={{
                background: 'rgba(255,255,255,0.3)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <img
                src={avatarImg}
                alt={`Ảnh đại diện của ${personalInfo.name}`}
                className="w-full h-full rounded-full object-cover"
                style={{ boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.5)' }}
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-heading font-medium text-pastel-pink mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {personalInfo.subtitle}
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.p>
      </motion.div>
    </section>
  );
}
