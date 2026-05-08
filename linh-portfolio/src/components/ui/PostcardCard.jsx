export default function PostcardCard({ number, title, children }) {
  return (
    <article className="postcard-card">
      <div className="postcard-card-stamp" aria-hidden="true">
        {number}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
