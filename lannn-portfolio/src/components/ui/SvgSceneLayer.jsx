import stageBg from "../../assets/sunset-concert-law-diary/svg/sunset-stage-bg.svg";
import ticketStickers from "../../assets/sunset-concert-law-diary/svg/concert-ticket-stickers.svg";
import legalSeal from "../../assets/sunset-concert-law-diary/svg/legal-seal-set.svg";
import sunHalo from "../../assets/sunset-concert-law-diary/svg/golden-sun-halo.svg";
import vinylRings from "../../assets/sunset-concert-law-diary/svg/vinyl-record-rings.svg";
import bookStack from "../../assets/sunset-concert-law-diary/svg/book-stack-silhouette.svg";
import spotlights from "../../assets/sunset-concert-law-diary/svg/spotlight-fan-beams.svg";
import musicNotes from "../../assets/sunset-concert-law-diary/svg/floating-music-notes.svg";

export function SvgSceneLayer() {
  return (
    <div className="sceneLayer" aria-hidden="true" data-testid="scene-layer">
      <img className="sceneLayer__stage" src={stageBg} alt="" />
      <img className="sceneLayer__spotlights" src={spotlights} alt="" />
      <img className="sceneLayer__sunHalo" src={sunHalo} alt="" />
      <img className="sceneLayer__vinyl" src={vinylRings} alt="" />
      <img className="sceneLayer__bookStack" src={bookStack} alt="" />
      <img className="sceneLayer__musicNotes" src={musicNotes} alt="" />
      <img className="sceneLayer__tickets" src={ticketStickers} alt="" />
      <img className="sceneLayer__seal" src={legalSeal} alt="" />
    </div>
  );
}
