import { motion } from 'framer-motion';
import { staggerContainer, bubblePop } from '../../app/motionConfig';
import { toolsets } from '../../data/portfolioData';
import { Gem } from 'lucide-react';

/* Treasure chest card decoration */
function ChestDecor({ color }) {
  return (
    <>
      {/* Chain/rope corner */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-25" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
          <path d="M60 5 C50 5 45 10 45 15 C45 20 50 22 50 27 C50 32 45 34 45 39 C45 44 50 46 50 51" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" opacity="0.6" />
          <circle cx="50" cy="51" r="4" fill={color} opacity="0.4" />
        </svg>
      </div>
      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-4 left-[20%] w-1.5 h-1.5 rounded-full bg-[var(--fish-gold)] opacity-40 animate-[lightRayShimmer_3s_ease-in-out_infinite]" />
        <div className="absolute top-8 right-[30%] w-1 h-1 rounded-full bg-[var(--fish-gold)] opacity-30 animate-[lightRayShimmer_4s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-6 left-[40%] w-1.5 h-1.5 rounded-full bg-[var(--fish-gold)] opacity-35 animate-[lightRayShimmer_3.5s_ease-in-out_infinite_0.5s]" />
      </div>
    </>
  );
}

/* Gem icon for each tool */
function GemIcon({ index }) {
  const colors = ['var(--fish-gold)', 'var(--reef-teal)', 'var(--anemone-purple)', 'var(--coral-pink)'];
  const color = colors[index % colors.length];
  return (
    <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
      style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}
    >
      <Gem size={14} style={{ color }} />
    </div>
  );
}

export default function ToolsetCluster() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="mt-12 max-w-5xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--ocean-deep)] text-center mb-8">
        {toolsets.title}
      </h2>

      {/* Treasure chest container */}
      <div
        className="relative rounded-2xl p-6 md:p-8 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255,224,138,0.06) 0%, rgba(248,253,255,0.95) 40%, rgba(255,224,138,0.04) 100%)',
          border: '1.5px solid rgba(255,224,138,0.3)',
          boxShadow: '0 12px 40px rgba(21,45,59,0.06)',
        }}
      >
        <ChestDecor color="var(--fish-gold)" />

        {/* Lock decoration top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
          <div className="w-10 h-10 rounded-full bg-white border-2 border-[var(--fish-gold)]/40 flex items-center justify-center shadow-md">
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <rect x="4" y="9" width="12" height="9" rx="2" fill="var(--fish-gold)" opacity="0.6" />
              <path d="M7 9 V6 C7 3.8 8.8 2 11 2 V2 C13.2 2 15 3.8 15 6 V9" stroke="var(--fish-gold)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
              <circle cx="10" cy="13" r="1.5" fill="white" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Tool items grid */}
        <div className="relative z-10 grid sm:grid-cols-2 gap-4 mt-2">
          {toolsets.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={bubblePop}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: i * 0.08 }}
              className="flex gap-3 items-start p-4 rounded-xl bg-white/60 border border-[var(--fish-gold)]/15 hover:border-[var(--fish-gold)]/35 hover:shadow-md transition-all duration-300"
            >
              <GemIcon index={i} />
              <div>
                <h3 className="text-base font-heading font-bold text-[var(--ocean-deep)] mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--ocean-deep)]/65 leading-relaxed m-0">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
