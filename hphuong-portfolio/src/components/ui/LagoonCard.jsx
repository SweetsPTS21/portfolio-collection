import tropicalFlowerUrl from "../../assets/lagoon-kayak-adventure/tropical-flower-leaves.svg";

export default function LagoonCard({ title, eyebrow, children, className = "" }) {
  return (
    <article className={`lagoon-card ${className}`}>
      {/* Visual Accent Trim Bar */}
      <span className="card-trim-bar" aria-hidden="true" />

      {/* Corner leaf ornament */}
      <img className="card-ornament" src={tropicalFlowerUrl} alt="" aria-hidden="true" />

      {/* Monstera Background Watermark */}
      <img className="card-watermark" src={tropicalFlowerUrl} alt="" aria-hidden="true" />

      <div className="lagoon-card__body">
        {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
        {title ? <h3>{title}</h3> : null}
        <div className="card-text-container">{children}</div>
      </div>
    </article>
  );
}
