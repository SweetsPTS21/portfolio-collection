export default function PlantLabelCard({
  number,
  title,
  text,
  icon: Icon,
  actionLabel,
  onAction,
}) {
  return (
    <article className="plant-label-card">
      <div className="plant-label-card__top">
        <span>{number}</span>
        {Icon ? <Icon size={20} aria-hidden="true" /> : null}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      {onAction ? (
        <button type="button" className="plant-card-action" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
}
