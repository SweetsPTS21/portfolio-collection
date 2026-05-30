import { motion } from 'framer-motion';
import IconBadge from './IconBadge.jsx';

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

export function PrototypePanel({ className = '', eyebrow, title, children, ...props }) {
  return (
    <section className={cx('prototype-panel', className)} {...props}>
      {eyebrow || title ? (
        <div className="prototype-panel__header">
          {eyebrow ? <span>{eyebrow}</span> : null}
          {title ? <h2>{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function MosaicGrid({ className = '', children }) {
  return <div className={cx('mosaic-grid', className)}>{children}</div>;
}

export function PrototypeCard({
  className = '',
  icon,
  tone,
  title,
  label,
  span,
  variant,
  decor,
  children,
  action,
}) {
  return (
    <motion.article
      className={cx(
        'prototype-card',
        span ? `prototype-card--${span}` : '',
        variant ? `prototype-card--${variant}` : '',
        className,
      )}
      style={tone ? { '--card-tone': tone } : undefined}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <div className="prototype-card__wash" />
      {decor ? (
        <div className="prototype-card__decor" aria-hidden="true">
          <img src={decor.src} alt="" loading="lazy" />
        </div>
      ) : null}
      {label || icon ? (
        <div className="prototype-card__topline">
          {icon ? <IconBadge icon={icon} tone={tone} /> : null}
          {label ? <span>{label}</span> : null}
        </div>
      ) : null}
      {title ? <h3>{title}</h3> : null}
      <div className="prototype-card__body">{children}</div>
      {action ? <div className="prototype-card__action">{action}</div> : null}
    </motion.article>
  );
}

export function InfoTile({ className = '', icon, label, value, children }) {
  return (
    <div className={cx('info-tile', className)}>
      {icon ? <IconBadge icon={icon} size="small" /> : null}
      {label ? <span>{label}</span> : null}
      {value ? <strong>{value}</strong> : null}
      {children}
    </div>
  );
}

