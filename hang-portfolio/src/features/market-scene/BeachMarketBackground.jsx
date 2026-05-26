import heroSceneUrl from '../../assets/beach-market-stroll/generated/beach-market-hero.png';
import sparkleOverlayUrl from '../../assets/beach-market-stroll/generated/sea-sparkle-overlay.png';
import basketUrl from '../../assets/beach-market-stroll/generated/woven-basket-cutout.png';
import coastalCameraUrl from '../../assets/beach-market-stroll/generated/slices/coastal-camera.png';
import ReceiptSeascapePostcardUrl from '../../assets/beach-market-stroll/generated/slices/receipt-seascape-postcard.png';

export default function BeachMarketBackground() {
  return (
    <div className="beach-market-background" aria-hidden="true">
      <img className="market-hero-generated" src={heroSceneUrl} alt="" />
      <img className="sea-sparkle-overlay" src={sparkleOverlayUrl} alt="" />
      <div className="floating-market-props">
        <img
          className="floating-prop floating-prop-camera"
          src={coastalCameraUrl}
          alt=""
        />
        <img
          className="floating-prop floating-prop-basket"
          src={basketUrl}
          alt=""
        />
        <img
          className="floating-prop floating-prop-starfish"
          src={ReceiptSeascapePostcardUrl}
          alt=""
        />
      </div>
    </div>
  );
}
