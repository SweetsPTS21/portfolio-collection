import { motion } from 'framer-motion';
import { conclusion } from '../../data/portfolioData';
import { Sparkles } from 'lucide-react';

const cardColors = [
  { color: 'var(--reef-teal)', hex: '#5EEBC4', border: 'rgba(94,235,196,0.3)', bg: 'rgba(94,235,196,0.05)' },
  { color: 'var(--anemone-purple)', hex: '#C8A8FF', border: 'rgba(200,168,255,0.3)', bg: 'rgba(200,168,255,0.05)' },
];

/* Pearl watermark background */
function PearlWatermark({ color }) {
  return (
    <div className="absolute -bottom-4 -right-4 w-28 h-28 pointer-events-none opacity-[0.08]" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill={color} />
        <ellipse cx="38" cy="38" rx="14" ry="11" fill="white" opacity="0.5" />
      </svg>
    </div>
  );
}

/* Shimmer border effect */
function ShimmerBorder() {
  return (
    <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[coralSway_8s_linear_infinite]"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(94,235,196,0.15) 10%, transparent 20%, rgba(200,168,255,0.1) 30%, transparent 40%, rgba(255,142,198,0.1) 50%, transparent 60%, rgba(255,224,138,0.1) 70%, transparent 80%, rgba(56,178,216,0.1) 90%, transparent 100%)',
        }}
      />
    </div>
  );
}

export default function PearlValueGrid() {
  return (
    <section className="max-w-4xl mx-auto mb-12">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--ocean-deep)] text-center mb-8">
        <Sparkles size={22} className="inline mr-2 text-[var(--fish-gold)]" />
        {conclusion.coreValues.title}
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {conclusion.coreValues.items.map((item, i) => {
          const theme = cardColors[i % cardColors.length];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="relative overflow-hidden rounded-3xl p-6"
              style={{
                background: `linear-gradient(145deg, rgba(248,253,255,0.97) 0%, ${theme.bg} 100%)`,
                border: `1.5px solid ${theme.border}`,
                boxShadow: '0 8px 30px rgba(21,45,59,0.05)',
              }}
            >
              <ShimmerBorder />
              <PearlWatermark color={theme.hex} />

              <div className="relative z-10">
                {/* Pearl number */}
                <div
                  className="w-10 h-10 rounded-full mb-4 flex items-center justify-center shadow-sm"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, #FFFFFF, ${theme.hex}40)`,
                    border: `2px solid ${theme.hex}50`,
                    boxShadow: `0 4px 12px ${theme.hex}25`,
                  }}
                >
                  <span className="text-base font-bold" style={{ color: theme.color }}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-[var(--ocean-deep)] mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--ocean-deep)]/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
