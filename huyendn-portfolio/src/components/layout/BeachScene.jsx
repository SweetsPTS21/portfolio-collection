import React from 'react';
import heroScene from '../../assets/kawaii-beach-day/pastel-beach-hero-scene.svg';
import floaties from '../../assets/kawaii-beach-day/heart-floatie-set.svg';
import floats from '../../assets/kawaii-beach-day/floats.png';
import stickers from '../../assets/kawaii-beach-day/kawaii-beach-stickers.svg';
import particles from '../../assets/kawaii-beach-day/foam-bubble-particles.svg';
import sandcastle from '../../assets/kawaii-beach-day/sandcastle-shells.svg';
import towel from '../../assets/kawaii-beach-day/umbrella-towel-pattern.svg';

const bubbleItems = Array.from({ length: 18 }, (_, index) => index);

export default function BeachScene() {
  return (
    <div className="beach-scene" aria-hidden="true">
      <img className="scene-hero" src={heroScene} alt="" />
      <img className="scene-towel" src={towel} alt="" />
      <img className="scene-floatie" src={floaties} alt="" />
      <img className="scene-float" src={floats} alt="" />
      <img className="scene-sandcastle" src={sandcastle} alt="" />
      <img className="scene-stickers" src={stickers} alt="" />
      <img className="scene-particles" src={particles} alt="" />
      <div className="bubble-field">
        {bubbleItems.map((item) => (
          <span key={item} className={`bubble bubble-${(item % 6) + 1}`} />
        ))}
      </div>
    </div>
  );
}
