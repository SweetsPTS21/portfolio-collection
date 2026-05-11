export default function GardenBackground() {
  return (
    <div className="garden-background" aria-hidden="true">
      <div className="garden-sun" />
      <div className="garden-vine garden-vine--left" />
      <div className="garden-vine garden-vine--right" />
      {Array.from({ length: 10 }, (_, index) => (
        <span key={index} className={`leaf leaf--${index + 1}`} />
      ))}
    </div>
  );
}
