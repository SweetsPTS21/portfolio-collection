import React from "react";
import icons from "../../assets/sakura-letter-desk/desk-stationery-icons.svg";

export default function BrushStrokeDraw() {
  return (
    <div className="brush-stroke-draw" aria-hidden="true">
      <span />
      <img src={icons} alt="" />
    </div>
  );
}
