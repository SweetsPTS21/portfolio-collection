import React from "react";
import fishSchoolSet from "../../assets/underwater-world/fish-school-set.svg";

export default function FishSchoolSwim({ className = "" }) {
  return (
    <div className={`fish-school-swim ${className}`.trim()} aria-hidden="true">
      <img src={fishSchoolSet} alt="" />
    </div>
  );
}
