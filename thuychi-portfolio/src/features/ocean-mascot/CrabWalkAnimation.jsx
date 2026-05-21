import React from "react";
import crabStarfishSet from "../../assets/underwater-world/crab-starfish-set.svg";

export default function CrabWalkAnimation({ className = "" }) {
  return (
    <div className={`crab-walk-animation ${className}`.trim()} aria-hidden="true">
      <img src={crabStarfishSet} alt="" />
    </div>
  );
}
