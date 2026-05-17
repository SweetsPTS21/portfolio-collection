import seaCaseMark from "../../assets/summer-sea-case/sea-case-mark.svg";
import pearlCluster from "../../assets/summer-sea-case/pearl-cluster.svg";

export default function SeaCaseHero() {
  return (
    <div className="sea-case-hero" aria-hidden="true">
      <div className="sea-case-hero__halo" />
      <img className="sea-case-hero__case" src={seaCaseMark} alt="" />
      <img className="sea-case-hero__pearls" src={pearlCluster} alt="" />
      <div className="sea-case-hero__glass">
        <span />
        <span />
      </div>
    </div>
  );
}
