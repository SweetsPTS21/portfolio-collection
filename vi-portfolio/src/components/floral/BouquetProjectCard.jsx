export default function BouquetProjectCard({ title, description, flower, index }) {
  return (
    <article className="project-card">
      <div className="bouquet-wrap" aria-hidden="true">
        <div className="paper-cone" />
        <div className="project-flower">
          <img src={flower} alt="" />
        </div>
        <span className="bouquet-ribbon" />
      </div>
      <span className="project-number">
        Bouquet {String(index + 1).padStart(2, '0')}
      </span>
      <span className="ribbon-label project-ribbon">assignment</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
