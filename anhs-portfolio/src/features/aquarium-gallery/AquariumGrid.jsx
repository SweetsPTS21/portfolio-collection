import { motion } from 'framer-motion';
import { staggerContainer } from '../../app/motionConfig';
import { projects } from '../../data/portfolioData';
import SpecimenCard from './SpecimenCard';

export default function AquariumGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {projects.items.map((project, i) => (
        <SpecimenCard key={project.chapter} project={project} index={i} />
      ))}
    </motion.div>
  );
}
