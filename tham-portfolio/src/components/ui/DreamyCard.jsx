export default function DreamyCard({ icon: Icon, title, children, className = '' }) {
  return (
    <article className={`dreamy-card ${className}`}>
      {Icon ? (
        <div className="dreamy-card-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={2.2} />
        </div>
      ) : null}
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </article>
  );
}
