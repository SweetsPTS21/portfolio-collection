export default function StickerBadge({ children, tone = 'pink' }) {
  return <span className={`sticker-badge sticker-badge--${tone}`}>{children}</span>;
}
