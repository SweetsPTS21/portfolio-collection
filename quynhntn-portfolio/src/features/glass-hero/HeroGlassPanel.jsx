import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import avatarImg        from '../../assets/pastel-glass-dreamscape/avatar.jpg';
import sakuraBranchSvg from '../../assets/pastel-glass-dreamscape/sakura-branch-curve.svg';
import sakuraPetalSvg  from '../../assets/pastel-glass-dreamscape/sakura-petal-set.svg';
import sparkleSvg      from '../../assets/pastel-glass-dreamscape/dream-sparkle-set.svg';
import butterflySvg    from '../../assets/pastel-glass-dreamscape/glass-butterfly-pair.svg';
import wreathSvg       from '../../assets/pastel-glass-dreamscape/rose-wreath-glass.svg';

/**
 * Profile panel — dạng sticky card, dùng bên trái cột 2-col.
 * Không còn min-h toàn màn hình, compact hơn để compose.
 */
export default function HeroGlassPanel() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-8 flex flex-col items-center text-center h-full min-h-full"
      style={{
        background: '#FFFFFF',
        borderTop:    '1px solid rgba(212,96,126,0.18)',
        borderRight:  '1px solid rgba(212,96,126,0.18)',
        borderBottom: '1px solid rgba(212,96,126,0.18)',
        borderLeft:   '5px solid #D4607E',
        boxShadow: '0 8px 40px rgba(212,96,126,0.14), 0 2px 8px rgba(0,0,0,0.05)',
      }}
      initial={{ opacity: 0, x: -30, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Sakura branch — top-right */}
      <img
        src={sakuraBranchSvg}
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-20px', right: '-24px',
          width: '170px', opacity: 0.30, pointerEvents: 'none',
        }}
      />
      {/* Petal scatter — bottom-right */}
      <img
        src={sakuraPetalSvg}
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '-8px', right: '-6px',
          width: '120px', opacity: 0.24, pointerEvents: 'none',
        }}
      />
      {/* Sparkles — bottom-left */}
      <img
        src={sparkleSvg}
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '0', left: '0',
          width: '100px', opacity: 0.18, pointerEvents: 'none',
        }}
      />
      {/* Butterfly — bottom-left, above sparkles */}
      <img
        src={butterflySvg}
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '12px', left: '10px',
          width: '80px', opacity: 0.35, pointerEvents: 'none',
          animation: 'butterfly-flutter 6s ease-in-out infinite',
        }}
      />
      {/* Rose wreath — full-card faint overlay */}
      <img
        src={wreathSvg}
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '-40px', right: '-40px',
          width: '220px', opacity: 0.08, pointerEvents: 'none',
        }}
      />

      {/* Avatar */}
      <motion.div
        className="relative mb-5 z-10"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {/* Glow halo */}
        <div
          className="absolute -inset-3 rounded-full"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, rgba(212,96,126,0.22) 0%, rgba(212,96,126,0.04) 70%, transparent 100%)',
            filter: 'blur(8px)',
            animation: 'glow-pulse 5s ease-in-out infinite',
          }}
        />
        {/* Gradient ring */}
        <div
          className="relative w-28 h-28 rounded-full p-1.5"
          style={{
            background: 'linear-gradient(135deg, #D4607E, #C090D8, #5BBAD0)',
            boxShadow: '0 6px 24px rgba(212,96,126,0.28)',
          }}
        >
          <div
            className="w-full h-full rounded-full p-1"
            style={{ background: 'rgba(255,255,255,0.80)' }}
          >
            <img
              src={avatarImg}
              alt={`Ảnh đại diện của ${personalInfo.name}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-2xl font-heading font-bold mb-1 z-10"
        style={{ color: '#2D2D2D' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        {personalInfo.name}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-sm font-heading font-semibold mb-3 z-10"
        style={{ color: '#D4607E' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {personalInfo.subtitle}
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-12 h-0.5 rounded-full mb-4 z-10"
        style={{ background: 'linear-gradient(90deg, #D4607E, #C090D8)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      />

      {/* Meta info pills */}
      <motion.div
        className="flex flex-col gap-2 w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {[
          { label: 'MSV', value: personalInfo.studentId },
          { label: 'Ngành', value: personalInfo.major },
          { label: 'Trường', value: personalInfo.school },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
            style={{ background: 'rgba(212,96,126,0.06)', border: '1px solid rgba(212,96,126,0.12)' }}
          >
            <span className="font-heading font-semibold shrink-0" style={{ color: '#D4607E', minWidth: '48px' }}>
              {label}
            </span>
            <span style={{ color: '#4A4A4A' }}>{value}</span>
          </div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-xs leading-relaxed mt-4 z-10"
        style={{ color: '#7A7A7A', fontStyle: 'italic' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.5 }}
      >
        {personalInfo.tagline}
      </motion.p>
    </motion.div>
  );
}
