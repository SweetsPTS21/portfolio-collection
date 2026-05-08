import WaveLayer from './WaveLayer.jsx';

export default function SummerSky() {
  return (
    <div className="summer-sky" aria-hidden="true">
      <div className="sun-orb" />
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="palm-leaf palm-left" />
      <div className="palm-leaf palm-right" />
      <WaveLayer variant="back" />
      <WaveLayer variant="front" />
    </div>
  );
}
