import diaryPageFrameUrl from "../../assets/ocean-wave-diary/diary-page-frame.svg";
import seashellCollectionUrl from "../../assets/ocean-wave-diary/seashell-collection.svg";
import anchorRopeIconsUrl from "../../assets/ocean-wave-diary/anchor-rope-icons.svg";

export default function DiaryCard({ title, eyebrow, children, className = "" }) {
  return (
    <article className={`diary-card ${className}`}>
      <img className="asset-diary-frame" src={diaryPageFrameUrl} alt="" aria-hidden="true" />
      <img className="asset-shell-card" src={seashellCollectionUrl} alt="" aria-hidden="true" />
      <img className="asset-anchor-rope" src={anchorRopeIconsUrl} alt="" aria-hidden="true" />
      {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <div className="diary-card__body">{children}</div>
    </article>
  );
}
