export default function PriceTag({ children, tone = 'pink' }) {
  return (
    <span className={`price-tag price-tag-${tone}`}>
      <span aria-hidden="true" />
      {children}
    </span>
  );
}
