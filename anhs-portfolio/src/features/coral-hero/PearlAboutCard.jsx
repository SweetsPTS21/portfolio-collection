import { motion } from 'framer-motion';
import { fadeUp } from '../../app/motionConfig';
import { vision, mission } from '../../data/portfolioData';
import { Compass, BookOpen } from 'lucide-react';

/* Shell SVG decoration */
function ShellDecor({ color = 'var(--reef-teal)', className = '' }) {
  return (
    <div className={`absolute pointer-events-none opacity-25 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <path d="M10 55 C10 45 20 35 40 35 C60 35 70 45 70 55" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M15 55 C15 48 25 40 40 40 C55 40 65 48 65 55" stroke={color} strokeWidth="1.5" opacity="0.7" />
        <path d="M40 35 L40 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M40 35 L25 15" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M40 35 L55 15" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M40 35 L18 25" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M40 35 L62 25" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <circle cx="40" cy="10" r="3" fill={color} opacity="0.5" />
        <circle cx="25" cy="15" r="2.5" fill={color} opacity="0.4" />
        <circle cx="55" cy="15" r="2.5" fill={color} opacity="0.4" />
      </svg>
    </div>
  );
}

/* Pearl icon for section headers */
function PearlIcon({ color }) {
  return (
    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
      style={{
        background: `radial-gradient(circle at 35% 35%, #FFFFFF, ${color}22)`,
        border: `2px solid ${color}33`,
        boxShadow: `0 2px 10px ${color}20`,
      }}
    >
      <div className="w-4 h-4 rounded-full"
        style={{ background: `radial-gradient(circle at 40% 40%, white, ${color}66)` }}
      />
    </div>
  );
}

/* Scallop border top */
function ScallopBorder({ color }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-3 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 400 12" preserveAspectRatio="none" className="w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={i} cx={10 + i * 20} cy="0" r="10" fill={color} opacity="0.08" />
        ))}
      </svg>
    </div>
  );
}

export default function PearlAboutCard() {
  return (
    <section className="max-w-5xl mx-auto mt-6">
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Vision — Shell Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl p-6 pt-8 h-full"
          style={{
            background: 'linear-gradient(160deg, rgba(248,253,255,0.95) 0%, rgba(94,235,196,0.06) 60%, rgba(56,178,216,0.04) 100%)',
            border: '1.5px solid rgba(94,235,196,0.25)',
            boxShadow: '0 12px 40px rgba(21,45,59,0.06)',
          }}
        >
          <ScallopBorder color="var(--reef-teal)" />
          <ShellDecor color="var(--reef-teal)" className="w-20 h-16 -bottom-2 -right-2" />

          {/* Pearl top-left */}
          <div className="absolute top-4 right-4 w-5 h-5 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle at 35% 35%, white, var(--reef-teal))' }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex items-start gap-3 mb-5">
              <PearlIcon color="#5EEBC4" />
              <div>
                <span className="text-xs uppercase tracking-[0.08em] text-[var(--reef-teal)] font-extrabold flex items-center gap-1.5">
                  <Compass size={12} />
                  Compass
                </span>
                <h2 className="text-lg font-heading font-bold text-[var(--ocean-deep)] mt-0.5">
                  {vision.title}
                </h2>
              </div>
            </div>
            <ul className="space-y-3 list-none p-0 m-0">
              {vision.content.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white mt-0.5 shadow-sm"
                    style={{ backgroundColor: 'var(--reef-teal)' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-base text-[var(--ocean-deep)]/75 leading-relaxed m-0">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Mission — Shell Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl p-6 pt-8 h-full"
          style={{
            background: 'linear-gradient(160deg, rgba(248,253,255,0.95) 0%, rgba(255,142,198,0.06) 60%, rgba(255,184,216,0.03) 100%)',
            border: '1.5px solid rgba(255,142,198,0.25)',
            boxShadow: '0 12px 40px rgba(21,45,59,0.06)',
          }}
        >
          <ScallopBorder color="var(--coral-pink)" />
          <ShellDecor color="var(--coral-pink)" className="w-20 h-16 -bottom-2 -right-2" />

          {/* Pearl top-left */}
          <div className="absolute top-4 right-4 w-5 h-5 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle at 35% 35%, white, var(--coral-pink))' }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex items-start gap-3 mb-5">
              <PearlIcon color="#FF8EC6" />
              <div>
                <span className="text-xs uppercase tracking-[0.08em] text-[var(--coral-pink)] font-extrabold flex items-center gap-1.5">
                  <BookOpen size={12} />
                  Cruise brief
                </span>
                <h2 className="text-lg font-heading font-bold text-[var(--ocean-deep)] mt-0.5">
                  {mission.title}
                </h2>
              </div>
            </div>
            <p className="text-base text-[var(--ocean-deep)]/75 leading-[1.72] m-0">
              {mission.content}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
