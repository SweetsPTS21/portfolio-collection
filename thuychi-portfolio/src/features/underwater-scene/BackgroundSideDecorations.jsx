import React from "react";
import messageBottleSet from "../../assets/underwater-world/message-bottle-set.svg";
import CrabWalkAnimation from "../ocean-mascot/CrabWalkAnimation";
import FishSchoolSwim from "../ocean-mascot/FishSchoolSwim";
import FishPassHover from "../reef-projects/FishPassHover";

export default function BackgroundSideDecorations() {
  return (
    <div className="background-side-decorations" aria-hidden="true">
      <div className="background-side left-side">
        <FishSchoolSwim className="background-fish-school-swim" />
        <CrabWalkAnimation className="background-crab-walk-animation" />
      </div>
      <div className="background-side right-side">
        <FishPassHover className="background-fish-pass-hover" />
        <img className="bottle-note-grid background-bottle-note-grid" src={messageBottleSet} alt="" />
      </div>
    </div>
  );
}
