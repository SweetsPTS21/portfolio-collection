import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Compass,
  Heart,
  Layers,
  Sparkles,
  Star,
} from 'lucide-react';
import sakuraBranchSvg from '../../assets/pastel-glass-dreamscape/sakura-branch-curve.svg';
import sakuraPetalSvg from '../../assets/pastel-glass-dreamscape/sakura-petal-set.svg';
import sparkleSvg from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';
import roseSvg from '../../assets/pastel-glass-dreamscape/crystal-rose-large.svg';
import prismSvg from '../../assets/pastel-glass-dreamscape/crystal-prism-rays.svg';
import { conclusion } from '../../data/portfolioData';

const ACCENTS = {
  rose: { color: '#D4607E', bg: 'rgba(212,96,126,0.12)' },
  plum: { color: '#8B4BAB', bg: 'rgba(139,75,171,0.12)' },
  teal: { color: '#3A9A8A', bg: 'rgba(58,154,138,0.12)' },
  peach: { color: '#D4784A', bg: 'rgba(212,120,74,0.12)' },
};

function splitParagraph(text) {
  return text
    .split(/(?<=[.!?])\s+/u)
    .flatMap((sentence) => {
      if (sentence.length <= 165) return sentence;

      const parts = sentence.split(/,\s+/u);
      const chunks = [];
      let current = '';

      parts.forEach((part) => {
        const next = current ? `${current}, ${part}` : part;
        if (next.length > 150 && current) {
          chunks.push(current.trim());
          current = part;
        } else {
          current = next;
        }
      });

      if (current) chunks.push(current.trim());
      return chunks;
    })
    .map((part) => part.trim())
    .filter(Boolean);
}

function IconBadge({ icon: Icon, accent = 'rose' }) {
  const tone = ACCENTS[accent];

  return (
    <div
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl shrink-0"
      style={{
        background: tone.bg,
        boxShadow: `0 10px 22px ${tone.color}18`,
      }}
    >
      <Icon size={21} style={{ color: tone.color }} />
    </div>
  );
}

function SectionHeader({ eyebrow, title, icon, accent = 'rose' }) {
  const tone = ACCENTS[accent];

  return (
    <div className="relative z-10 flex items-center gap-3 mb-4">
      <IconBadge icon={icon} accent={accent} />
      <div>
        <p
          className="text-[11px] md:text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-1"
          style={{ color: tone.color }}
        >
          {eyebrow}
        </p>
        <h3 className="text-lg md:text-xl font-heading font-bold" style={{ color: '#25233A' }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

function GlassPanel({ children, className = '', accent = 'rose', delay = 0 }) {
  const tone = ACCENTS[accent];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[1.5rem] p-5 md:p-6 ${className}`}
      style={{
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,255,255,0.34))',
        border: `1px solid ${tone.color}20`,
        boxShadow: `0 16px 44px ${tone.color}14, inset 0 1px 0 rgba(255,255,255,0.72)`,
        backdropFilter: 'blur(16px)',
      }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.52, delay, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${tone.color}88, transparent)` }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-14 h-40 w-40 rounded-full"
        style={{ background: `radial-gradient(circle, ${tone.color}22, transparent 70%)` }}
      />
      {children}
    </motion.div>
  );
}

function ReflectionFragmentGrid({ items, accent = 'rose' }) {
  const tone = ACCENTS[accent];

  return (
    <div className="conclusion-fragment-grid relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="reflection-chip-card rounded-2xl border p-3.5 text-sm leading-relaxed"
          style={{
            background: 'rgba(255,255,255,0.56)',
            borderColor: `${tone.color}24`,
            color: '#4A4A4A',
            boxShadow: `0 8px 20px ${tone.color}0F`,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36, delay: index * 0.05 }}
        >
          <span className="font-heading font-bold mr-2" style={{ color: tone.color }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          {item}
        </motion.div>
      ))}
    </div>
  );
}

function BulletGrid({ items, accent = 'teal', marker = '✦' }) {
  const tone = ACCENTS[accent];

  return (
    <div className="relative z-10 grid grid-cols-1 gap-2.5">
      {items.map((item, index) => (
        <div
          key={item}
          className="rounded-2xl border p-3 text-sm leading-relaxed flex items-start gap-2.5"
          style={{
            background: 'rgba(255,255,255,0.52)',
            borderColor: `${tone.color}22`,
            color: '#4A4A4A',
          }}
        >
          <span className="font-bold shrink-0" style={{ color: tone.color }}>
            {marker}
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function ConclusionGlassScroll() {
  const experienceParts = splitParagraph(conclusion.experience);
  const baggageParts = splitParagraph(conclusion.baggage);
  const thanksParts = splitParagraph(conclusion.thanks);

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-10 md:py-12">
      <motion.div
        className="conclusion-dream-stage relative overflow-hidden rounded-[2rem] px-4 py-6 md:px-7 md:py-8 mb-8"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.64), rgba(255,240,248,0.42), rgba(238,255,250,0.36))',
          border: '1px solid rgba(255,255,255,0.68)',
          boxShadow: '0 24px 80px rgba(139,75,171,0.15), inset 0 1px 0 rgba(255,255,255,0.75)',
          backdropFilter: 'blur(18px)',
        }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.62, ease: 'easeOut' }}
      >
        <img
          src={prismSvg}
          aria-hidden="true"
          className="absolute -right-20 -top-24 w-80 md:w-[28rem] opacity-25 pointer-events-none"
          style={{ animation: 'glow-pulse 7s ease-in-out infinite' }}
        />
        <img
          src={sakuraBranchSvg}
          aria-hidden="true"
          className="absolute -left-14 top-3 w-60 opacity-20 pointer-events-none"
        />
        <img
          src={sparkleSvg}
          aria-hidden="true"
          className="absolute right-10 bottom-8 w-28 opacity-25 pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl">
          <p
            className="text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.22em] mb-3"
            style={{ color: '#8B4BAB' }}
          >
            Dream reflection
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight" style={{ color: '#25233A' }}>
            Tổng kết hành trình
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: '#5A5268' }}>
            Phần tổng kết được chia thành nhiều lớp kính nhỏ để người xem đọc theo nhịp: trải nghiệm,
            hành trang, điểm tâm đắc, thách thức, định hướng và lời cảm ơn.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        <GlassPanel className="lg:col-span-7" accent="rose" delay={0.02}>
          <SectionHeader
            eyebrow="Reflection"
            title="Trải nghiệm và sự thay đổi"
            icon={Sparkles}
            accent="rose"
          />
          <ReflectionFragmentGrid items={experienceParts} accent="rose" />
        </GlassPanel>

        <GlassPanel className="lg:col-span-5" accent="plum" delay={0.08}>
          <SectionHeader eyebrow="Baggage" title="Hành trang quý giá" icon={Star} accent="plum" />
          <ReflectionFragmentGrid items={baggageParts} accent="plum" />
        </GlassPanel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        <GlassPanel className="lg:col-span-6" accent="teal" delay={0.12}>
          <SectionHeader eyebrow="Highlights" title="Điểm tâm đắc nhất" icon={Heart} accent="teal" />
          <BulletGrid items={conclusion.highlights} accent="teal" marker="✦" />
        </GlassPanel>

        <GlassPanel className="lg:col-span-6" accent="peach" delay={0.16}>
          <SectionHeader
            eyebrow="Challenges"
            title="Thách thức đã đối mặt"
            icon={AlertTriangle}
            accent="peach"
          />
          <BulletGrid items={conclusion.challenges} accent="peach" marker="◆" />
        </GlassPanel>
      </div>

      <GlassPanel className="mb-5" accent="plum" delay={0.2}>
        <img
          src={roseSvg}
          aria-hidden="true"
          className="absolute -right-8 -bottom-10 w-44 opacity-20 pointer-events-none"
        />
        <img
          src={sakuraPetalSvg}
          aria-hidden="true"
          className="absolute right-8 top-4 w-24 opacity-25 pointer-events-none"
        />
        <SectionHeader eyebrow="Next path" title="Định hướng phía trước" icon={Compass} accent="plum" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {conclusion.future.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border p-4 text-sm leading-relaxed"
              style={{
                background: 'rgba(255,255,255,0.52)',
                borderColor: 'rgba(139,75,171,0.18)',
                color: '#4A4A4A',
              }}
            >
              <div className="font-heading font-bold mb-2" style={{ color: '#8B4BAB' }}>
                Hướng {index + 1}
              </div>
              {item}
            </div>
          ))}
        </div>
      </GlassPanel>

      <motion.div
        className="relative overflow-hidden rounded-[1.5rem] p-5 md:p-7"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,240,245,0.46))',
          border: '1px solid rgba(212,96,126,0.18)',
          boxShadow: '0 18px 52px rgba(212,96,126,0.14), inset 0 1px 0 rgba(255,255,255,0.74)',
          backdropFilter: 'blur(16px)',
        }}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.58, delay: 0.24 }}
      >
        <span
          aria-hidden="true"
          className="absolute -left-1 -top-7 text-[7rem] leading-none font-bold"
          style={{ color: '#D4607E', opacity: 0.07, fontFamily: 'Georgia, serif' }}
        >
          &#8220;
        </span>
        <img
          src={sakuraBranchSvg}
          aria-hidden="true"
          className="absolute -right-10 -top-10 w-52 opacity-20 pointer-events-none"
        />
        <SectionHeader eyebrow="Gratitude" title="Lời cảm ơn" icon={Layers} accent="rose" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {thanksParts.map((part, index) => (
            <div
              key={part}
              className="gratitude-note-card rounded-2xl border p-4 text-sm leading-relaxed"
              style={{
                background: 'rgba(255,255,255,0.58)',
                borderColor: 'rgba(212,96,126,0.20)',
                color: '#4A4A4A',
              }}
            >
              <Heart size={17} className="mb-2" style={{ color: '#D4607E' }} />
              <span className="font-heading font-bold mr-1" style={{ color: '#D4607E' }}>
                {index + 1}.
              </span>
              {part}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
