export default function HangingTag({ title, text, tone = 'rose' }) {
  return (
    <article className={`hanging-tag hanging-tag--${tone}`}>
      <span className="twine-line" aria-hidden="true" />
      <span className="tag-pin" aria-hidden="true" />
      <span className="ribbon-label tag-label">{tone}</span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
    </article>
  );
}
