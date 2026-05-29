import { motion } from 'framer-motion';
import { HardDrive, BookOpen, Bot, Video, Pen, Wrench } from 'lucide-react';
import GlassBadge from '../../components/ui/GlassBadge';
import { tools } from '../../data/portfolioData';

const iconMap = { HardDrive, BookOpen, Bot, Video, Pen, Wrench };

export default function ToolBadgeRow() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-4 pb-16">
      <motion.h2
        className="text-2xl md:text-3xl font-heading font-bold text-center text-text-primary mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Công cụ đã sử dụng
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {tools.map((tool) => {
          const Icon = iconMap[tool.icon] || Wrench;
          return (
            <GlassBadge key={tool.name}>
              <Icon size={16} className="text-pastel-pink" />
              {tool.name}
            </GlassBadge>
          );
        })}
      </motion.div>
    </section>
  );
}
