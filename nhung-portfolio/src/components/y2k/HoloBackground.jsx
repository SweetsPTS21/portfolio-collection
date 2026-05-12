import bg from '../../assets/dreamy-y2k/y2k-gradient-bg.svg';

export default function HoloBackground() {
  return (
    <div className="holo-background" aria-hidden="true">
      <img src={bg} alt="" />
      <span className="holo-background__mesh holo-background__mesh--one" />
      <span className="holo-background__mesh holo-background__mesh--two" />
      <span className="holo-background__mesh holo-background__mesh--three" />
    </div>
  );
}
