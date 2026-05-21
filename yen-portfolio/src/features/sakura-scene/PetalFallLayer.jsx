import React from "react";
import petalBlush from "../../assets/sakura-letter-desk/sakura-petal-blush.svg";
import petalLight from "../../assets/sakura-letter-desk/sakura-petal-light.svg";
import petalRose from "../../assets/sakura-letter-desk/sakura-petal-rose.svg";
import petalSoft from "../../assets/sakura-letter-desk/sakura-petal-soft.svg";

const petalAssets = [petalBlush, petalSoft, petalRose, petalLight];

export default function PetalFallLayer({ count = 28 }) {
  return (
    <div className="petal-layer petal-backdrop" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <img
          key={index}
          src={petalAssets[index % petalAssets.length]}
          alt=""
          className={`falling-petal ${index % 3 === 0 ? "petal-depth-back" : "petal-depth-front"}`}
          style={{
            "--x": `${(index * 37) % 100}%`,
            "--drift": `${index % 2 === 0 ? "" : "-"}${36 + (index % 6) * 18}px`,
            "--drift-back": `${index % 2 === 0 ? "-" : ""}${28 + (index % 6) * 12}px`,
            "--delay": `${(index % 11) * -1.35}s`,
            "--duration": `${12 + (index % 8)}s`,
            "--duration-back": `${18 + (index % 9)}s`,
            "--scale": `${0.3 + (index % 5) * 0.11}`,
            "--scale-back": `${0.22 + (index % 5) * 0.08}`,
            "--rotation": `${(index * 41) % 360}deg`,
          }}
        />
      ))}
    </div>
  );
}
