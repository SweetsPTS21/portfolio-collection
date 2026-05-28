import awningStripe from '../../assets/blue-cafe-bakery/svg/awning-stripe.svg';
import bakeryBag from '../../assets/blue-cafe-bakery/svg/bakery-bag.svg';
import blueWhisk from '../../assets/blue-cafe-bakery/svg/blue-whisk.svg';
import cafePlantWindow from '../../assets/blue-cafe-bakery/svg/cafe-plant-window.svg';
import cupcakeTower from '../../assets/blue-cafe-bakery/svg/cupcake-tower.svg';
import giantCoffeeCup from '../../assets/blue-cafe-bakery/svg/giant-coffee-cup.svg';
import giantCroissant from '../../assets/blue-cafe-bakery/svg/giant-croissant.svg';
import hangingCafeSign from '../../assets/blue-cafe-bakery/svg/hanging-cafe-sign.svg';
import recipeTicketLarge from '../../assets/blue-cafe-bakery/svg/recipe-ticket-large.svg';
import rollingPin from '../../assets/blue-cafe-bakery/svg/rolling-pin.svg';

const backgroundAssets = [
  { src: awningStripe, className: 'assetAwning' },
  { src: hangingCafeSign, className: 'assetSign' },
  { src: giantCoffeeCup, className: 'assetCoffee' },
  { src: giantCroissant, className: 'assetCroissant' },
  { src: cupcakeTower, className: 'assetCupcake' },
  { src: bakeryBag, className: 'assetBag' },
  { src: rollingPin, className: 'assetRollingPin' },
  { src: blueWhisk, className: 'assetWhisk' },
  { src: recipeTicketLarge, className: 'assetTicket' },
  { src: cafePlantWindow, className: 'assetPlant' },
];

export function CafeBakeryBackground() {
  return (
    <div className="cafeBackground" aria-hidden="true">
      <div className="backgroundAssetLayer">
        {backgroundAssets.map((asset) => (
          <img
            key={asset.className}
            src={asset.src}
            alt=""
            className={`backgroundAsset ${asset.className}`}
            data-testid="background-asset"
            draggable="false"
          />
        ))}
      </div>
      <div className="paperGrain" />
      <div className="windowBeam beamOne" />
      <div className="windowBeam beamTwo" />
      <div className="pastryShelf">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="steamCluster steamLeft">
        <i />
        <i />
        <i />
      </div>
      <div className="steamCluster steamRight">
        <i />
        <i />
        <i />
      </div>
      <div className="crumbs">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
      <div className="paintRibbon ribbonOne" />
      <div className="paintRibbon ribbonTwo" />
    </div>
  );
}
