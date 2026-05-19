import React from "react";
import rainbowArc from "../../assets/bunny-cloud-garden/rainbow-arc.svg";
import cloudShapes from "../../assets/bunny-cloud-garden/cloud-shapes.svg";
import butterflyPair from "../../assets/bunny-cloud-garden/butterfly-pair.svg";
import hotAirBalloon from "../../assets/bunny-cloud-garden/hot-air-balloon.svg";

export default function GardenScene() {
  return (
    <div className="garden-scene" aria-hidden="true">
      <img className="scene-rainbow" src={rainbowArc} alt="" />
      <img className="scene-clouds" src={cloudShapes} alt="" />
      <img className="scene-butterfly" src={butterflyPair} alt="" />
      <img className="scene-balloon" src={hotAirBalloon} alt="" />
    </div>
  );
}
