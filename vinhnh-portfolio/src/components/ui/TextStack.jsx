export default function TextStack({ items, className = "" }) {
  const paragraphs = Array.isArray(items) ? items : [items];

  return (
    <div className={`text-stack ${className}`.trim()}>
      {paragraphs.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
}
