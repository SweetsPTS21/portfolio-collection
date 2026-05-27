import React from "react";
import bubbleParticles from "../../assets/unicorn-parfait-island/bubble-pop-particles.svg";
import creamSwirlPortal from "../../assets/unicorn-parfait-island/cream-swirl-portal.svg";
import cottonClouds from "../../assets/unicorn-parfait-island/cotton-candy-clouds.svg";
import floatingMacaronMoons from "../../assets/unicorn-parfait-island/floating-macaron-moons.svg";
import jellyBeanConstellation from "../../assets/unicorn-parfait-island/jelly-bean-constellation.svg";
import marshmallowShapes from "../../assets/unicorn-parfait-island/marshmallow-shapes.svg";
import parfaitIsland from "../../assets/unicorn-parfait-island/parfait-glass-island.svg";
import parfaitIcons from "../../assets/unicorn-parfait-island/parfait-icons.svg";
import rainbowSyrupRibbons from "../../assets/unicorn-parfait-island/rainbow-syrup-ribbons.svg";
import starSprinkles from "../../assets/unicorn-parfait-island/star-candy-sprinkles.svg";
import unicornMascot from "../../assets/unicorn-parfait-island/unicorn-character-set.svg";
import waffleStarBalloons from "../../assets/unicorn-parfait-island/waffle-star-balloons.svg";

const sceneLayers = [
  { className: "scene-texture scene-texture-left drift-slow", src: jellyBeanConstellation },
  { className: "scene-texture scene-texture-right drift-slower", src: jellyBeanConstellation },
  { className: "scene-ribbon scene-ribbon-top drift-ribbon", src: rainbowSyrupRibbons },
  { className: "scene-ribbon scene-ribbon-mid drift-ribbon-reverse", src: rainbowSyrupRibbons },
  { className: "scene-bubbles scene-bubbles-left bob-soft", src: bubbleParticles },
  { className: "scene-bubbles scene-bubbles-right bob-soft-reverse", src: bubbleParticles },
  { className: "scene-macaron scene-macaron-left bob-soft", src: floatingMacaronMoons },
  { className: "scene-macaron scene-macaron-right bob-soft-reverse", src: floatingMacaronMoons },
  { className: "scene-waffle scene-waffle-left bob-soft", src: waffleStarBalloons },
  { className: "scene-waffle scene-waffle-right bob-soft-reverse", src: waffleStarBalloons },
  { className: "scene-cream-swirl spin-haze", src: creamSwirlPortal },
  { className: "scene-marshmallows scene-marshmallows-top bob-soft", src: marshmallowShapes },
  { className: "scene-icons scene-icons-bottom drift-slow", src: parfaitIcons },
];

const sparkleLayers = [
  { top: "21%", left: "15%", width: "42px", animationDelay: "0s" },
  { top: "54%", right: "22%", width: "30px", animationDelay: "0.6s" },
  { bottom: "15%", left: "42%", width: "46px", animationDelay: "1.2s" },
  { top: "34%", right: "9%", width: "38px", animationDelay: "1.7s" },
  { bottom: "28%", left: "8%", width: "34px", animationDelay: "2.1s" },
];

export default function ParfaitScene() {
  return (
    <div className="parfait-scene" aria-hidden="true">
      {sceneLayers.map((layer) => (
        <img key={layer.className} className={layer.className} src={layer.src} alt="" />
      ))}

      <img className="scene-clouds" src={cottonClouds} alt="" />
      <img className="scene-island" src={parfaitIsland} alt="" />
      <img className="scene-unicorn" src={unicornMascot} alt="" />

      {sparkleLayers.map((style, index) => (
        <img
          key={index}
          className="sparkle-particle twinkle-soft"
          src={starSprinkles}
          style={style}
          alt=""
        />
      ))}
    </div>
  );
}
