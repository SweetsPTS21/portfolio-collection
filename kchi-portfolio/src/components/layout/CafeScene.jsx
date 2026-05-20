import React from "react";
import kittyMascot from "../../assets/kitty-cafe-menu/kitty-mascot.svg";
import pawPrints from "../../assets/kitty-cafe-menu/paw-prints.svg";
import steamWisps from "../../assets/kitty-cafe-menu/steam-wisps.svg";
import kittySleeping from "../../assets/kitty-cafe-menu/kitty-sleeping.svg";
import kittyPlaying from "../../assets/kitty-cafe-menu/kitty-playing.svg";
import kittyPeeking from "../../assets/kitty-cafe-menu/kitty-peeking.svg";
import kittyLicking from "../../assets/kitty-cafe-menu/kitty-licking.svg";

export default function CafeScene() {
    return (
        <div className="cafe-scene" aria-hidden="true">
            <img className="scene-kitty" src={kittyMascot} alt="" />
            <img className="scene-steam" src={steamWisps} alt="" />
            <img className="scene-paws" src={pawPrints} alt="" />
            <img className="scene-kitty-sleeping" src={kittySleeping} alt="" />
            <img className="scene-kitty-playing" src={kittyPlaying} alt="" />
            <img className="scene-kitty-peeking" src={kittyPeeking} alt="" />
            <img className="scene-kitty-licking" src={kittyLicking} alt="" />
            <span className="steam-dot dot-a" />
            <span className="steam-dot dot-b" />
            <span className="steam-dot dot-c" />
        </div>
    );
}
