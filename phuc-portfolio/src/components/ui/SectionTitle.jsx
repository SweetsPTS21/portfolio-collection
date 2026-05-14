export default function SectionTitle({ eyebrow, title, note }) {
  return (
    <div className="section-title">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </div>
  );
}
