import ScrollReveal from './ScrollReveal.jsx';

export default function BlockCard({ title, children, tone = 'blue', className = '' }) {
  return (
    <ScrollReveal className={`block-card block-card--${tone} ${className}`}>
      <span className="block-card__stud" aria-hidden="true" />
      <h3>{title}</h3>
      <div className="block-card__body">{children}</div>
    </ScrollReveal>
  );
}
