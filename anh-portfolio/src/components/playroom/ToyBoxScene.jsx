const blocks = ['T', 'R', 'A', 'AI', '01', '06', 'PDF', 'LAW'];

export default function ToyBoxScene() {
  return (
    <div className="toy-box-scene" aria-hidden="true">
      <div className="toy-box-scene__lid" />
      <div className="toy-box-scene__box" />
      {blocks.map((label, index) => (
        <span key={label} className={`toy-block toy-block--${index + 1}`}>
          {label}
        </span>
      ))}
    </div>
  );
}
