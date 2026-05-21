import React from "react";
import fishSchoolSet from "../../assets/underwater-world/fish-school-set.svg";

export default function FishPassHover({ className = "" }) {
  return <img className={`fish-pass-hover ${className}`.trim()} src={fishSchoolSet} alt="" />;
}
