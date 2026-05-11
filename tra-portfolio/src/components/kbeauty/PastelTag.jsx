export default function PastelTag({ icon: Icon, color = '', children }) {
  return (
    <span className={`pastel-tag ${color}`.trim()}>
      {Icon ? <Icon size={14} strokeWidth={2.2} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
