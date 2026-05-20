import React from "react";
import mushroomSvg from "../../assets/fairy-mushroom-forest/mushroom-collection.svg";
import fairySvg from "../../assets/fairy-mushroom-forest/fairy-character.svg";
import fireflyDots from "../../assets/fairy-mushroom-forest/firefly-dots.svg";

export default function ForestScene() {
  return (
    <div className="forest-scene" aria-hidden="true">
      <img className="scene-mushrooms" src={mushroomSvg} alt="" />
      <img className="scene-fairy" src={fairySvg} alt="" />
      <img className="scene-fireflies" src={fireflyDots} alt="" />
      <span className="glow-dot dot-a" />
      <span className="glow-dot dot-b" />
      <span className="glow-dot dot-c" />
    </div>
  );
}
