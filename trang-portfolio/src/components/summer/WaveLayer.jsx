export default function WaveLayer({ variant = 'front' }) {
  return (
    <div className={`wave-layer wave-layer--${variant}`} aria-hidden="true">
      <span />
      <span />
    </div>
  );
}
