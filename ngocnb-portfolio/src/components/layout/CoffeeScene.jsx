import React from 'react';
import cupSmoke from '../../assets/ngocnb-afternoon-coffee/coffee-cup-smoke.svg';
import sunlightRay from '../../assets/ngocnb-afternoon-coffee/sunlight-ray.svg';
import beansScatter from '../../assets/ngocnb-afternoon-coffee/coffee-beans-scatter.svg';
import dustParticles from '../../assets/ngocnb-afternoon-coffee/dust-particles.svg';
import cuteCat from '../../assets/ngocnb-afternoon-coffee/cute-cat-silhouette.svg';
import cappuccinoArt from '../../assets/ngocnb-afternoon-coffee/cappuccino-art.svg';
import coffeeSignboard from '../../assets/ngocnb-afternoon-coffee/coffee-signboard.svg';
import decoRibbon from '../../assets/ngocnb-afternoon-coffee/deco-ribbon.svg';

export default function CoffeeScene() {
  return (
    <div className="coffee-scene" aria-hidden="true">
      <img className="scene-sunlight" src={sunlightRay} alt="" />
      <img className="scene-cup-smoke" src={cupSmoke} alt="" />
      <img className="scene-beans" src={beansScatter} alt="" />
      <img className="dust-layer" src={dustParticles} alt="" />
      
      {/* Cat Coffee Theme additions */}
      <img className="scene-signboard" src={coffeeSignboard} alt="" />
      <img className="scene-cat" src={cuteCat} alt="" />
      <img className="scene-cappuccino" src={cappuccinoArt} alt="" />
      <img className="scene-ribbon-a" src={decoRibbon} alt="" />
      <img className="scene-ribbon-b" src={decoRibbon} alt="" />
    </div>
  );
}
