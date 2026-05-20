export default function InventoryItemBadge({ icon: Icon, label }) {
  return (
    <article className="tool-card">
      <Icon size={24} />
      <span>{label}</span>
    </article>
  );
}
