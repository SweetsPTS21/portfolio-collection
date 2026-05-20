import { Sparkles } from 'lucide-react';

export default function SectionShell({ eyebrow, title, lead, children, id }) {
  return (
    <section className="chapter-section" id={id}>
      <div className="section-heading">
        <p className="eyebrow">
          <Sparkles size={16} />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}
