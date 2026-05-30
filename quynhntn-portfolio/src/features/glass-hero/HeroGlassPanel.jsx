import { motion } from 'framer-motion';
import { GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import avatarImg from '../../assets/pastel-glass-dreamscape/avatar.jpg';
import sakuraBranchSvg from '../../assets/pastel-glass-dreamscape/sakura-branch-curve.svg';
import sakuraPetalSvg from '../../assets/pastel-glass-dreamscape/sakura-petal-set.svg';
import sparkleSvg from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';
import butterflySvg from '../../assets/pastel-glass-dreamscape/glass-butterfly-pair.svg';
import wreathSvg from '../../assets/pastel-glass-dreamscape/rose-wreath-glass.svg';

export default function HeroGlassPanel() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[1.75rem] p-6 md:p-7 flex flex-col items-center text-center h-full min-h-full"
      style={{
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.86), rgba(255,241,248,0.64) 55%, rgba(232,251,255,0.58))',
        border: '1px solid rgba(255,255,255,0.72)',
        boxShadow:
          '0 18px 56px rgba(212,96,126,0.20), inset 0 1px 0 rgba(255,255,255,0.86)',
        backdropFilter: 'blur(18px)',
      }}
      initial={{ opacity: 0, x: -26, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), rgba(212,96,126,0.42), transparent)',
        }}
      />
      <img
        src={sakuraBranchSvg}
        aria-hidden="true"
        className="absolute -right-10 -top-8 w-48 opacity-[0.35] pointer-events-none"
      />
      <img
        src={sakuraPetalSvg}
        aria-hidden="true"
        className="absolute -right-3 bottom-10 w-32 opacity-25 pointer-events-none"
      />
      <img
        src={sparkleSvg}
        aria-hidden="true"
        className="absolute bottom-2 left-1 w-28 opacity-[0.22] pointer-events-none"
      />
      <img
        src={butterflySvg}
        aria-hidden="true"
        className="absolute bottom-5 left-5 w-20 opacity-40 pointer-events-none"
        style={{ animation: 'butterfly-flutter 6s ease-in-out infinite' }}
      />
      <img
        src={wreathSvg}
        aria-hidden="true"
        className="absolute -bottom-16 -right-14 w-64 opacity-10 pointer-events-none"
      />

      <motion.div
        className="relative z-10 mb-5 mt-2"
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="profile-orbit absolute -inset-7 rounded-full"
          aria-hidden="true"
          style={{
            background:
              'conic-gradient(from 120deg, rgba(212,96,126,0), rgba(212,96,126,0.42), rgba(91,186,208,0.36), rgba(139,75,171,0.42), rgba(212,96,126,0))',
            filter: 'blur(1px)',
            animation: 'crystal-rotate 18s linear infinite',
          }}
        />
        <div
          className="absolute -inset-4 rounded-full"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.74) 0%, rgba(212,96,126,0.16) 58%, transparent 74%)',
            filter: 'blur(9px)',
            animation: 'glow-pulse 5s ease-in-out infinite',
          }}
        />
        <div
          className="relative w-32 h-32 rounded-full p-1.5"
          style={{
            background: 'linear-gradient(135deg, #D4607E, #C090D8, #5BBAD0)',
            boxShadow: '0 12px 34px rgba(212,96,126,0.32)',
          }}
        >
          <div className="w-full h-full rounded-full p-1" style={{ background: 'rgba(255,255,255,0.86)' }}>
            <img
              src={avatarImg}
              alt={`Ảnh đại diện của ${personalInfo.name}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-3 text-xs font-heading font-semibold"
        style={{
          color: '#8B4BAB',
          background: 'rgba(255,255,255,0.58)',
          border: '1px solid rgba(139,75,171,0.16)',
        }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.45 }}
      >
        <Sparkles size={13} />
        Pastel glass profile
      </motion.div>

      <motion.h1
        className="relative z-10 text-2xl md:text-3xl font-heading font-bold mb-2"
        style={{ color: '#25233A' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5 }}
      >
        {personalInfo.name}
      </motion.h1>

      <motion.p
        className="relative z-10 text-sm font-heading font-semibold mb-5 max-w-xs"
        style={{ color: '#D4607E' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.52, duration: 0.5 }}
      >
        {personalInfo.subtitle}
      </motion.p>

      <motion.div
        className="relative z-10 grid grid-cols-1 gap-2 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.68, duration: 0.5 }}
      >
        {[
          { label: 'MSV', value: personalInfo.studentId },
          { label: 'Ngành', value: personalInfo.major },
          { label: 'Trường', value: personalInfo.school },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-2.5 rounded-2xl text-sm text-left"
            style={{
              background: 'rgba(255,255,255,0.56)',
              border: '1px solid rgba(212,96,126,0.14)',
              boxShadow: '0 6px 18px rgba(139,75,171,0.06)',
            }}
          >
            <span
              className="font-heading font-semibold shrink-0"
              style={{ color: '#D4607E', minWidth: '48px' }}
            >
              {label}
            </span>
            <span style={{ color: '#4A4A4A' }}>{value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mt-5 flex items-center gap-2 text-xs font-heading font-semibold"
        style={{ color: '#3A9A8A' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.82, duration: 0.5 }}
      >
        <GraduationCap size={15} />
        Luật kinh doanh x kỹ năng số
      </motion.div>
    </motion.div>
  );
}
