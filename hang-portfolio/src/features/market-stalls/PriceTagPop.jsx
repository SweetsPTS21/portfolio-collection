import { motion } from 'framer-motion';
import PriceTag from '../../components/ui/PriceTag.jsx';

export default function PriceTagPop({ children, tone }) {
  return (
    <motion.span whileHover={{ rotate: -3, scale: 1.05 }} transition={{ type: 'spring', stiffness: 320 }}>
      <PriceTag tone={tone}>{children}</PriceTag>
    </motion.span>
  );
}
