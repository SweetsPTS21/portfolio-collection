import React from "react";
import swanMascot from "../../assets/ballet-swan-lake/swan-mascot.svg";
import swanReading from "../../assets/ballet-swan-lake/swan-reading.svg";
import swanSleeping from "../../assets/ballet-swan-lake/swan-sleeping.svg";
import swanWatering from "../../assets/ballet-swan-lake/swan-watering.svg";
import satinRibbon from "../../assets/ballet-swan-lake/satin-ribbon.svg";
import featherParticles from "../../assets/ballet-swan-lake/feather-particles.svg";
import lakeRipples from "../../assets/ballet-swan-lake/lake-ripples.svg";

export default function LakeScene() {
  return (
    <div className="lake-scene" aria-hidden="true">
      {/* Sun/Moon shine */}
      <div className="scene-moon" />
      
      {/* Satin Ribbons */}
      <img className="scene-ribbon scene-ribbon--one" src={satinRibbon} alt="" />
      <img className="scene-ribbon scene-ribbon--two" src={satinRibbon} alt="" />
      
      {/* Lake ripples */}
      <img className="scene-ripples" src={lakeRipples} alt="" />
      
      {/* Swan mascot floating */}
      <img className="scene-swan" src={swanMascot} alt="" />
      
      {/* Extra Background Swans */}
      <img className="scene-bg-swan scene-bg-swan--reading" src={swanReading} alt="" />
      <img className="scene-bg-swan scene-bg-swan--sleeping" src={swanSleeping} alt="" />
      <img className="scene-bg-swan scene-bg-swan--watering" src={swanWatering} alt="" />
      
      {/* Feather particles */}
      <img className="scene-feathers scene-feathers--one" src={featherParticles} alt="" />
      <img className="scene-feathers scene-feathers--two" src={featherParticles} alt="" />
    </div>
  );
}

