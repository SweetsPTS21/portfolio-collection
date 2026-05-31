import { motion } from 'framer-motion';
import { stationDrop } from '../app/motionConfig';
import { StationProjectGrid } from '../features/station-projects/StationProjectGrid';

export function TrainCarProjectsPage() {
  return (
    <article className="route-page projects-page">
      <motion.header
        className="station-heading"
        variants={stationDrop}
        initial="hidden"
        animate="visible"
      >
        <p className="station-kicker">II. Projects</p>
        <h1>Trang Dự án</h1>
        <p>
          Dưới đây là các sản phẩm thực hành được em hoàn thiện một cách chỉn
          chu, đi thẳng vào trọng tâm chuyên môn và bám sát yêu cầu từ môn học.
        </p>
      </motion.header>
      <StationProjectGrid />
    </article>
  );
}
