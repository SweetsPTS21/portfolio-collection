import React from "react";
import palmFrame from "../../assets/tropical-postcard/palm-leaf-frame.svg";
import flowerLayer from "../../assets/tropical-postcard/tropical-flowers.svg";
import planePath from "../../assets/tropical-postcard/travel-plane-path.svg";
import stampSet from "../../assets/tropical-postcard/postcard-stamp-set.svg";

const clouds = Array.from({ length: 8 }, (_, index) => index + 1);
const waves = Array.from({ length: 4 }, (_, index) => index + 1);
const stamps = Array.from({ length: 5 }, (_, index) => index + 1);

export default function TropicalBackground() {
    return (
        <div className="tropical-background" aria-hidden="true">
            <div className="sky-gradient" />
            <img className="palm-frame palm-frame-left" src={palmFrame} alt="" />
            <img className="palm-frame palm-frame-right" src={palmFrame} alt="" />
            <img className="flower-corner flower-corner-a" src={flowerLayer} alt="" />
            <img className="flower-corner flower-corner-b" src={flowerLayer} alt="" />
            <img className="plane-path" src={planePath} alt="" />

            <div className="cloud-field">
                {clouds.map((cloud) => (
                    <span key={cloud} className={`cloud cloud-${cloud}`} />
                ))}
            </div>

            <div className="stamp-field">
                {stamps.map((stamp) => (
                    <img key={stamp} className={`floating-stamp stamp-${stamp}`} src={stampSet} alt="" />
                ))}
            </div>

            <div className="wave-field">
                {waves.map((wave) => (
                    <span key={wave} className={`wave wave-${wave}`} />
                ))}
            </div>
        </div>
    );
}
