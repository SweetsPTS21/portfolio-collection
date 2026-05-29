import { motion } from "framer-motion";
import { stationDrop } from "../app/motionConfig";
import { AboutJourneyPanel } from "../features/journey-content/AboutJourneyPanel";

export function CloudStationAboutPage() {
  return (
    <article className="route-page about-page">
      <motion.header className="station-heading" variants={stationDrop} initial="hidden" animate="visible">
        <span className="station-kicker">I. Trang Giới thiệu (About Me)</span>
        <h1>Đỗ Thị Huyền Mai</h1>
      </motion.header>
      <AboutJourneyPanel />
    </article>
  );
}

