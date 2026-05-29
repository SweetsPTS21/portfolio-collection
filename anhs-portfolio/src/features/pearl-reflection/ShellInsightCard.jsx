import { motion } from 'framer-motion';
import { conclusion } from '../../data/portfolioData';
import { Award, Mountain } from 'lucide-react';

/* Shell SVG — open clam with pearl */
function ShellSvg({ color, side = 'right' }) {
  const flip = side === 'left' ? 'scaleX(-1)' : undefined;
  return (
    <div className="absolute -bottom-3 w-24 h-20 pointer-events-none opacity-20"
      style={{ [side]: '-0.5rem', transform: flip }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 90 70" fill="none" className="w-full h-full">
        {/* Bottom shell */}
        <path d="M10 50 C10 60 30 68 45 68 C60 68 80 60 80 50 C80 45 65 42 45 42 C25 42 10 45 10 50Z" fill={color} opacity="0.6" />
        {/* Top shell */}
        <path d="M10 50 C10 35 25 22 45 22 C65 22 80 35 80 50 C80 45 65 42 45 42 C25 42 10 45 10 50Z" fill={color} opacity="0.4" />
        {/* Ridges */}
        <path d="M45 22 L45 42" stroke={color} strokeWidth="1" opacity="0.3" />
        <path d="M30 26 L35 42" stroke={color} strokeWidth="0.8" opacity="0.25" />
        <path d="M60 26 L55 42" stroke={color} strokeWidth="0.8" opacity="0.25" />
        {/* Pearl */}
        <circle cx="45" cy="48" r="7" fill="white" opacity="0.7" />
        <ellipse cx="42" cy="45" rx="3" ry="2.5" fill="white" opacity="0.4" />
      </svg>
    </div>
  );
}

/* Iridescent shimmer overlay */
function IridescentOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-[0.06]" aria-hidden="true">
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, var(--coral-pink), var(--reef-teal), var(--anemone-purple), var(--fish-gold))',
          backgroundSize: '300% 300%',
          animation: 'coralSway 10s ease infinite',
        }}
      />
    </div>
  );
}

export default function ShellInsightCard() {
  const { highlight, challenge } = conclusion.insights;

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--ocean-deep)] text-center mb-8">
        {conclusion.insights.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Highlight — Pearl Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl p-6"
          style={{
            background: 'linear-gradient(145deg, rgba(248,253,255,0.97) 0%, rgba(94,235,196,0.05) 100%)',
            border: '1.5px solid rgba(94,235,196,0.3)',
            boxShadow: '0 8px 30px rgba(21,45,59,0.05)',
          }}
        >
          <IridescentOverlay />
          <ShellSvg color="#5EEBC4" side="right" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #FFFFFF, rgba(94,235,196,0.3))',
                  border: '2px solid rgba(94,235,196,0.4)',
                  boxShadow: '0 4px 12px rgba(94,235,196,0.2)',
                }}
              >
                <Award size={18} className="text-[var(--reef-teal)]" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[var(--ocean-deep)]">
                {highlight.title}
              </h3>
            </div>
            <p className="text-base text-[var(--ocean-deep)]/80 leading-relaxed">
              {highlight.text}
            </p>
          </div>
        </motion.div>

        {/* Challenge — Pearl Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative overflow-hidden rounded-2xl p-6"
          style={{
            background: 'linear-gradient(145deg, rgba(248,253,255,0.97) 0%, rgba(255,142,198,0.05) 100%)',
            border: '1.5px solid rgba(255,142,198,0.3)',
            boxShadow: '0 8px 30px rgba(21,45,59,0.05)',
          }}
        >
          <IridescentOverlay />
          <ShellSvg color="#FF8EC6" side="right" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #FFFFFF, rgba(255,142,198,0.3))',
                  border: '2px solid rgba(255,142,198,0.4)',
                  boxShadow: '0 4px 12px rgba(255,142,198,0.2)',
                }}
              >
                <Mountain size={18} className="text-[var(--coral-pink)]" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[var(--ocean-deep)]">
                {challenge.title}
              </h3>
            </div>
            <p className="text-base text-[var(--ocean-deep)]/80 leading-relaxed">
              {challenge.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
