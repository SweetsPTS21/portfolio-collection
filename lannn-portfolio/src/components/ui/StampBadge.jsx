export function StampBadge({ icon: Icon, children, tone = "red" }) {
  return (
    <span className={`stampBadge stampBadge--${tone}`}>
      {Icon ? <Icon size={16} aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  );
}
