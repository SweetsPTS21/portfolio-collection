import React from "react";
import unicornMascot from "../../assets/unicorn-parfait-island/unicorn-character-set.svg";
import parfaitIsland from "../../assets/unicorn-parfait-island/parfait-glass-island.svg";
import cottonClouds from "../../assets/unicorn-parfait-island/cotton-candy-clouds.svg";
import starSprinkles from "../../assets/unicorn-parfait-island/star-candy-sprinkles.svg";

export default function ParfaitScene() {
  return (
    <div className="parfait-scene" aria-hidden="true">
      {/* Floating Cotton Candy Clouds */}
      <img className="scene-clouds" src={cottonClouds} alt="" />

      {/* Floating Parfait Dessert Island */}
      <img className="scene-island" src={parfaitIsland} alt="" />

      {/* Floating Unicorn Mascot */}
      <img className="scene-unicorn" src={unicornMascot} alt="" />

      {/* Tiny Background Sprinkle Stars (static/animated in CSS) */}
      <img 
        className="sparkle-particle" 
        src={starSprinkles} 
        style={{ top: '25%', left: '15%', width: '40px' }} 
        alt="" 
      />
      <img 
        className="sparkle-particle" 
        src={starSprinkles} 
        style={{ top: '55%', right: '22%', width: '30px' }} 
        alt="" 
      />
      <img 
        className="sparkle-particle" 
        src={starSprinkles} 
        style={{ bottom: '15%', left: '42%', width: '45px' }} 
        alt="" 
      />
    </div>
  );
}
