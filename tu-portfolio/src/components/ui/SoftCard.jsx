import { motion } from 'framer-motion';
import IconBadge from './IconBadge.jsx';

export default function SoftCard({ className = '', icon, tone, title, label, children, action }) {
  return (
    <motion.article
      className={`soft-card ${className}`}
      style={tone ? { '--card-tone': tone } : undefined}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <div className="soft-card__glow" />
      {label || icon ? (
        <div className="soft-card__topline">
          {icon ? <IconBadge icon={icon} tone={tone} /> : null}
          {label ? <span>{label}</span> : null}
        </div>
      ) : null}
      {title ? <h3>{title}</h3> : null}
      <div className="soft-card__body">{children}</div>
      {action ? <div className="soft-card__action">{action}</div> : null}
    </motion.article>
  );
}
