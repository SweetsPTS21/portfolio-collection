import { motion } from 'framer-motion';
import PriceTag from './PriceTag.jsx';

export default function StallCard({ eyebrow, title, children, actionHref, actionLabel, index = 0 }) {
  return (
    <motion.article
      className="stall-card"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { delay: index * 0.05, duration: 0.45 } },
      }}
      whileHover={{ y: -8 }}
    >
      <div className="stall-card-awning" aria-hidden="true" />
      <PriceTag>{eyebrow}</PriceTag>
      <h3>{title}</h3>
      <div className="stall-card-body">{children}</div>
      {actionHref ? (
        <a className="stall-card-link" href={actionHref} target="_blank" rel="noreferrer">
          {actionLabel}
        </a>
      ) : null}
    </motion.article>
  );
}
