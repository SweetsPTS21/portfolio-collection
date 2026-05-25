import flagsUrl from '../../assets/beach-market-stroll/generated/bunting-flags.png';

export default function FlagFlutterLayer() {
  return (
    <div className="flag-flutter-layer" aria-hidden="true">
      <img src={flagsUrl} alt="" />
      <img src={flagsUrl} alt="" />
    </div>
  );
}
