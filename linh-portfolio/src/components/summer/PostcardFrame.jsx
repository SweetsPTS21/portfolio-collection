import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function PostcardFrame({ id, title, eyebrow, children, accent = 'blue' }) {
  return (
    <ScrollReveal>
      <section id={id} className={`postcard-frame postcard-frame--${accent}`}>
        <div className="postcard-stamp" aria-hidden="true">
          <span />
        </div>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {children}
      </section>
    </ScrollReveal>
  );
}
