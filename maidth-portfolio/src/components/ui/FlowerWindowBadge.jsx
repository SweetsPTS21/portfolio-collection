export function FlowerWindowBadge({ icon: Icon, children }) {
  return (
    <span className="flower-window-badge">
      {Icon ? <Icon aria-hidden="true" size={16} /> : <span className="badge-flower" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}

