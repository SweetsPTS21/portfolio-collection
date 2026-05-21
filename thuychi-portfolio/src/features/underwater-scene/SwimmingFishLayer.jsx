import React from "react";
import angelfish from "../../assets/underwater-world/angelfish.svg";
import blueTang from "../../assets/underwater-world/blue-tang.svg";
import butterflyfish from "../../assets/underwater-world/butterflyfish.svg";
import clownfish from "../../assets/underwater-world/clownfish.svg";
import seahorse from "../../assets/underwater-world/seahorse.svg";

const fish = [
  { src: clownfish, name: "Clownfish", size: "small", direction: "left-to-right", top: 18, delay: -1 },
  { src: angelfish, name: "Angelfish", size: "large", direction: "right-to-left", top: 31, delay: -4 },
  { src: blueTang, name: "Blue tang", size: "medium", direction: "left-to-right", top: 50, delay: -7 },
  { src: butterflyfish, name: "Butterflyfish", size: "small", direction: "right-to-left", top: 64, delay: -10 },
  { src: seahorse, name: "Seahorse", size: "tiny", direction: "left-to-right", top: 76, delay: -13 },
];

export default function SwimmingFishLayer() {
  return (
    <div className="swimming-fish-layer" aria-hidden="true">
      {fish.map((item) => (
        <img
          key={item.name}
          className={`swimming-fish fish-${item.size} swim-${item.direction}`}
          src={item.src}
          alt=""
          style={{
            "--fish-top": `${item.top}%`,
            "--fish-delay": `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
