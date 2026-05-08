export default function StickerBadge({ icon: Icon, label, tone = 'blue' }) {
  return (
    <div className={`sticker-badge sticker-badge--${tone}`}>
      {Icon ? <Icon size={18} strokeWidth={2.3} /> : null}
      <span>{label}</span>
    </div>
  );
}
