import React from 'react';
import cat from '../../assets/sakura-letter-desk/cat.png';
import icons from '../../assets/sakura-letter-desk/desk-stationery-icons.svg';

export default function BrushStrokeDraw() {
  return (
    <div className="brush-stroke-draw" aria-hidden="true">
      <img src={cat} alt="" className="brush-cat" />
    </div>
  );
}
