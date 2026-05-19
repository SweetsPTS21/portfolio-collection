import { motion } from 'framer-motion';
import { staggerContainer } from '../../app/motionConfig';

export default function AnemoneCluster({ title, children, className = '' }) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`mt-12 ${className}`}
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--ocean-deep)] text-center mb-8">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}
