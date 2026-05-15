import React from "react";
import magicCircle from "../../assets/magical-girl-ui/magic-circle.svg";
import moonStars from "../../assets/magical-girl-ui/moon-star-stickers.svg";
import wandTrail from "../../assets/magical-girl-ui/wand-and-trail.svg";

export default function MagicalScene() {
    return (
        <div className="magical-scene" aria-hidden="true">
            <img className="scene-circle" src={magicCircle} alt="" />
            <img className="scene-wand" src={wandTrail} alt="" />
            <img className="scene-stickers" src={moonStars} alt="" />
            <span className="sparkle-dot dot-a" />
            <span className="sparkle-dot dot-b" />
            <span className="sparkle-dot dot-c" />
        </div>
    );
}
