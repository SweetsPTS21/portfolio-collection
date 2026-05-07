import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function Island({ id, title, eyebrow, children, variant = 'lavender' }) {
  return (
    <ScrollReveal>
      <section id={id} className={`floating-island floating-island--${variant}`}>
        <div className="island-canopy" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="island-soil" aria-hidden="true" />
        <article className="island-content">
          {eyebrow ? <p className="island-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {children}
        </article>
      </section>
    </ScrollReveal>
  );
}
