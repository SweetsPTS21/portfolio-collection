export default function CandyProjectCard({ number, title, children }) {
  return (
    <article className="candy-project-card">
      <div className="candy-project-card__number" aria-hidden="true">
        {number}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
