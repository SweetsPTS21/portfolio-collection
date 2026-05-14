import gelDoodles from '../../assets/kawaii-stationery/gel-pen-doodles.svg';

export default function RiveReadyMascot() {
  return (
    <div className="rive-ready-mascot" aria-label="Rive-ready mascot fallback">
      <img src={gelDoodles} alt="" />
      <span>digital notes</span>
    </div>
  );
}
