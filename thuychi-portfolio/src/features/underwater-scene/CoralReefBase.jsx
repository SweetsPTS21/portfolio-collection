import React from "react";
import coralReefScene from "../../assets/underwater-world/coral-reef-scene.svg";

export default function CoralReefBase() {
  return (
    <div className="coral-reef-base" aria-hidden="true">
      <img src={coralReefScene} alt="" />
    </div>
  );
}
