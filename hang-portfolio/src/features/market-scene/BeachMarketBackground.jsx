import heroSceneUrl from "../../assets/beach-market-stroll/generated/beach-market-hero.png";
import sparkleOverlayUrl from "../../assets/beach-market-stroll/generated/sea-sparkle-overlay.png";

export default function BeachMarketBackground() {
    return (
        <div className="beach-market-background" aria-hidden="true">
            <img className="market-hero-generated" src={heroSceneUrl} alt="" />
            <img
                className="sea-sparkle-overlay"
                src={sparkleOverlayUrl}
                alt=""
            />
        </div>
    );
}
