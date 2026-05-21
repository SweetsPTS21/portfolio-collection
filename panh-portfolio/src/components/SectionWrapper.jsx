import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

export default function SectionWrapper({ children, className = '', style = {} }) {
  return (
    <motion.section
      className={`section ${className}`}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}
