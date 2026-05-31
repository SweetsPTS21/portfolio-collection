import { motion } from 'framer-motion';
import { stationDrop } from '../app/motionConfig';
import { ConclusionArrivalPanel } from '../features/journey-content/ConclusionArrivalPanel';

export function ArrivalConclutionPage() {
  return (
    <article className="route-page conclusion-page">
      <motion.header
        className="station-heading"
        variants={stationDrop}
        initial="hidden"
        animate="visible"
      >
        <p className="station-kicker">III. Conclusion</p>
        <h1>Trang Tổng kết</h1>
      </motion.header>
      <ConclusionArrivalPanel />
    </article>
  );
}
