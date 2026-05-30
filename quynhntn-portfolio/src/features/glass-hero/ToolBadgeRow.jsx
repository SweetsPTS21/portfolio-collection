import { motion } from 'framer-motion';
import { HardDrive, BookOpen, Bot, Video, Pen, Wrench } from 'lucide-react';
import GlassBadge from '../../components/ui/GlassBadge';
import { tools } from '../../data/portfolioData';

const iconMap = { HardDrive, BookOpen, Bot, Video, Pen, Wrench };

export default function ToolBadgeRow() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 pb-16">
      <motion.div
        className="tool-prism-row relative overflow-hidden rounded-[1.75rem] px-4 py-6 md:px-7 md:py-7"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.66), rgba(248,244,255,0.42), rgba(240,253,248,0.40))',
          border: '1px solid rgba(255,255,255,0.68)',
          boxShadow: '0 18px 52px rgba(139,75,171,0.12), inset 0 1px 0 rgba(255,255,255,0.72)',
          backdropFilter: 'blur(16px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(212,96,126,0.48), rgba(91,186,208,0.48), transparent)',
          }}
        />
        <motion.h2
          className="text-2xl md:text-3xl font-heading font-bold text-center mb-2"
          style={{ color: '#25233A' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Công cụ đã sử dụng
        </motion.h2>
        <p className="text-center text-sm mb-6" style={{ color: '#5A5268' }}>
          Các lớp công cụ hỗ trợ nghiên cứu, thiết kế và cộng tác số.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon] || Wrench;
            const color = ['#D4607E', '#8B4BAB', '#3A9A8A', '#5BBAD0', '#D4784A'][i % 5];

            return (
              <GlassBadge key={tool.name} className="transition-transform duration-300 hover:-translate-y-1">
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full"
                  style={{
                    background: `${color}18`,
                    boxShadow: `0 6px 16px ${color}18`,
                  }}
                >
                  <Icon size={15} style={{ color }} />
                </span>
                {tool.name}
              </GlassBadge>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
