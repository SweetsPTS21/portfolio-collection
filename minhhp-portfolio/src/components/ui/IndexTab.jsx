export default function IndexTab({ tab, title, items }) {
  return (
    <section className="index-tab-card">
      <span>{tab}</span>
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <em key={item}>{item}</em>
        ))}
      </div>
    </section>
  );
}
