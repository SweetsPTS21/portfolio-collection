import { motion } from 'framer-motion';
import { stationDrop } from '../app/motionConfig';
import { AboutJourneyPanel } from '../features/journey-content/AboutJourneyPanel';

export function CloudStationAboutPage() {
  return (
    <article className="route-page about-page">
      <AboutJourneyPanel />
    </article>
  );
}
