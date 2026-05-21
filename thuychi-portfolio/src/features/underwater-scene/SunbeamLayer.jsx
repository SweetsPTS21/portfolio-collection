import React from "react";
import sunbeamCaustics from "../../assets/underwater-world/sunbeam-caustics.svg";

export default function SunbeamLayer() {
  return (
    <div className="sunbeam-layer" aria-hidden="true">
      <img src={sunbeamCaustics} alt="" />
    </div>
  );
}
