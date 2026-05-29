import { motion } from "framer-motion";
import { cardStagger, ticketHover } from "../../app/motionConfig";

export function StationCard({ children, className = "" }) {
  return (
    <motion.section
      className={`station-card glass-surface ${className}`}
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...ticketHover}
    >
      <span className="card-shine" aria-hidden="true" />
      <span className="ticket-stamp" aria-hidden="true" />
      {children}
    </motion.section>
  );
}

