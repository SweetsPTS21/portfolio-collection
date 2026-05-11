import { Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal.jsx';

export default function SectionShell({
  eyebrow,
  title,
  lead,
  children,
  className = '',
}) {
  return (
    <ScrollReveal className={`garden-section ${className}`}>
      <div className="section-heading">
        {eyebrow ? (
          <p className="section-eyebrow">
            <Leaf size={16} aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}
        <h2>{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {children}
    </ScrollReveal>
  );
}
