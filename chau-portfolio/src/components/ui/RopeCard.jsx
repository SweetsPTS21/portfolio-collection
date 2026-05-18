import ropeKnotBordersUrl from "../../assets/sunset-cruise-log/rope-knot-borders.svg";

export default function RopeCard({ title, eyebrow, children, className = "" }) {
  return (
    <article className={`rope-card ${className}`}>
      <img className="asset-rope" src={ropeKnotBordersUrl} alt="" aria-hidden="true" />
      {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <div className="rope-card__body">{children}</div>
    </article>
  );
}
