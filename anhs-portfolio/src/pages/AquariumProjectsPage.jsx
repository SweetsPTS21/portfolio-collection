import { motion } from 'framer-motion';
import { fadeUp } from '../app/motionConfig';
import { projects } from '../data/portfolioData';
import PageTransition from '../components/ui/PageTransition';
import AquariumGrid from '../features/aquarium-gallery/AquariumGrid';
import { Fish } from 'lucide-react';

export default function AquariumProjectsPage() {
  return (
    <PageTransition>
      <div className="pb-24 pt-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Fish size={24} className="text-[var(--deep-aqua)]" />
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-[var(--ocean-deep)]">
              {projects.title}
            </h1>
          </div>
          <p className="text-base text-[var(--ocean-deep)]/70 leading-relaxed">
            {projects.intro}
          </p>
        </motion.div>

        {/* Grid */}
        <AquariumGrid />
      </div>
    </PageTransition>
  );
}
