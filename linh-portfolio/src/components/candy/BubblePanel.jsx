import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function BubblePanel({ id, title, eyebrow, children, accent = 'pink' }) {
  return (
    <ScrollReveal>
      <section id={id} className={`bubble-panel bubble-panel--${accent}`}>
        <div className="bubble-panel__sparkles" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {children}
      </section>
    </ScrollReveal>
  );
}
