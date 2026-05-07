export default function CloudLayer({ variant }) {
  return (
    <div className={`cloud-layer cloud-layer--${variant}`}>
      <span className="cloud cloud--one" />
      <span className="cloud cloud--two" />
      <span className="cloud cloud--three" />
    </div>
  );
}
