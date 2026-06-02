import { motion } from "framer-motion";
import stadiumCrowdRibbon from "../../assets/stadium-ocean-motion/stadium-crowd-ribbon.svg";

export default function RecapTimelineCard({ title, items = [], index, featured = false }) {
  const cardClassName = featured ? "recap-play-card featured" : "recap-play-card";

  return (
    <motion.article
      className={cardClassName}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06, duration: 0.42 }}
    >
      <img className="card-football-asset recap-crowd-asset" src={stadiumCrowdRibbon} alt="" />
      <div className="play-card-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="recap-card-copy">
        <h3>{title}</h3>
        <ul className="recap-points">
          {items.map((item) => (
            <li className="recap-point-row" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
