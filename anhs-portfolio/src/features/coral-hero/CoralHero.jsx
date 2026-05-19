import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, bubblePop } from '../../app/motionConfig';
import { personalInfo } from '../../data/portfolioData';
import { Shell, Anchor, ArrowDown } from 'lucide-react';

/* Inline SVG: coral branch frame corners */
function CoralCorner({ className, flip = false }) {
  return (
    <div className={`absolute w-20 h-20 md:w-28 md:h-28 pointer-events-none opacity-40 ${className}`} aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M5 95 C5 70 10 55 18 40 C24 28 20 18 25 8" stroke="var(--coral-pink)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 95 C15 75 22 60 28 48 C33 38 30 28 34 18" stroke="var(--reef-teal)" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
        <path d="M25 95 C25 80 30 68 35 58" stroke="var(--deep-aqua)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <circle cx="25" cy="8" r="4" fill="var(--coral-pink)" opacity="0.6" />
        <circle cx="34" cy="18" r="3" fill="var(--reef-teal)" opacity="0.5" />
        <circle cx="35" cy="58" r="2.5" fill="var(--deep-aqua)" opacity="0.4" />
      </svg>
    </div>
  );
}

/* Light ray overlay */
function LightRays() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]" aria-hidden="true">
      <div className="absolute -top-10 left-1/4 w-32 h-[120%] rotate-[15deg] bg-gradient-to-b from-[var(--fish-gold)] to-transparent rounded-full blur-2xl animate-[lightRayShimmer_4s_ease-in-out_infinite]" />
      <div className="absolute -top-10 left-1/2 w-24 h-[110%] rotate-[8deg] bg-gradient-to-b from-[var(--deep-aqua)] to-transparent rounded-full blur-2xl animate-[lightRayShimmer_5s_ease-in-out_infinite_0.5s]" />
      <div className="absolute -top-10 right-1/4 w-20 h-[100%] rotate-[-10deg] bg-gradient-to-b from-[var(--reef-teal)] to-transparent rounded-full blur-2xl animate-[lightRayShimmer_6s_ease-in-out_infinite_1s]" />
    </div>
  );
}

export default function CoralHero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative max-w-6xl mx-auto pt-10 md:pt-20 pb-4"
    >
      {/* Reef Frame Card */}
      <div className="relative rounded-3xl overflow-hidden p-6 md:p-10"
        style={{
          background: 'linear-gradient(135deg, rgba(94,235,196,0.06), rgba(56,178,216,0.04), rgba(255,142,198,0.03))',
          border: '1.5px solid rgba(94,235,196,0.2)',
          boxShadow: '0 24px 60px rgba(21,45,59,0.08)',
        }}
      >
        <LightRays />

        {/* Coral corners */}
        <CoralCorner className="top-0 left-0 rotate-0" />
        <CoralCorner className="top-0 right-0" flip />
        <CoralCorner className="bottom-0 left-0 rotate-180" flip />
        <CoralCorner className="bottom-0 right-0 rotate-180" />

        {/* Grid layout */}
        <div className="relative z-10 grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Copy side */}
          <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-[var(--deep-aqua)] mb-4"
            >
              <Shell size={14} />
              Digital Persona
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-[var(--ocean-deep)] leading-[0.95] mb-3 max-w-[11ch]"
            >
              {personalInfo.name}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg font-extrabold text-[var(--ocean-deep)]/60 mb-5 max-w-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative text-lg md:text-xl font-heading font-bold text-[var(--ocean-deep)] italic mb-7 pl-4 border-l-4 border-[var(--coral-pink)]/60 max-w-[42rem] mx-auto md:mx-0"
            >
              &ldquo;{personalInfo.motto}&rdquo;
            </motion.blockquote>

            <motion.dl
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto md:mx-0"
            >
              {[
                { label: 'Ngành', value: personalInfo.major },
                { label: 'Trường', value: personalInfo.university },
                { label: 'Sở thích', value: personalInfo.hobbies },
                { label: 'Phong cách', value: personalInfo.style },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3.5 rounded-xl border border-[var(--deep-aqua)]/15 bg-white/70 backdrop-blur-sm"
                >
                  <dt className="text-[0.7rem] uppercase tracking-wider text-[var(--deep-aqua)]/70 font-extrabold mb-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-base font-extrabold text-[var(--ocean-deep)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Portrait — bubble style */}
          <motion.div
            variants={bubblePop}
            transition={{ duration: 0.8, delay: 0.15, type: 'spring', stiffness: 200 }}
            className="md:col-span-2 flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Ripple rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                <div className="w-[115%] h-[115%] rounded-full border-2 border-[var(--deep-aqua)]/10 animate-[jellyfishPulse_4s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                <div className="w-[130%] h-[130%] rounded-full border border-[var(--reef-teal)]/8 animate-[jellyfishPulse_5s_ease-in-out_infinite_0.5s]" />
              </div>

              {/* Avatar bubble */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl"
                style={{
                  border: '5px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 18px 46px rgba(21,45,59,0.16), inset 0 -4px 12px rgba(94,235,196,0.15)',
                }}
              >
                <img
                  src={personalInfo.avatarUrl}
                  alt={`Ảnh ${personalInfo.name}`}
                  className="w-full h-full object-cover"
                  width="224"
                  height="224"
                />
                {/* Bubble highlight */}
                <div className="absolute top-3 left-4 w-8 h-5 rounded-full bg-white/40 blur-sm" aria-hidden="true" />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 300 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white shadow-lg border border-[var(--deep-aqua)]/15 text-sm font-black text-[var(--deep-aqua)]"
              >
                <Anchor size={14} />
                {personalInfo.major}
              </motion.div>

              {/* Floating bubbles */}
              <div className="absolute -top-3 -left-5 w-4 h-4 rounded-full border border-[var(--deep-aqua)]/30 bg-[var(--deep-aqua)]/5 animate-[bubbleRise_6s_ease-in-out_infinite]" aria-hidden="true" />
              <div className="absolute top-8 -right-6 w-3 h-3 rounded-full border border-[var(--coral-pink)]/30 bg-[var(--coral-pink)]/5 animate-[bubbleRise_8s_ease-in-out_infinite_1s]" aria-hidden="true" />
              <div className="absolute -bottom-6 left-6 w-5 h-5 rounded-full border border-[var(--reef-teal)]/25 bg-[var(--reef-teal)]/5 animate-[bubbleRise_7s_ease-in-out_infinite_2s]" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="hidden md:flex items-center justify-center gap-2 mt-8 text-base text-[var(--deep-aqua)]/50"
      >
        <ArrowDown size={14} className="animate-bounce" />
        <span>Cuộn xuống để khám phá</span>
      </motion.div>
    </motion.section>
  );
}
