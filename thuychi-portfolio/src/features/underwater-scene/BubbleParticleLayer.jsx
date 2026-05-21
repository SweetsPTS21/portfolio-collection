import React from "react";
import bubbleParticleSet from "../../assets/underwater-world/bubble-particle-set.svg";

const bubbles = Array.from({ length: 18 }, (_, index) => index);

export default function BubbleParticleLayer() {
  return (
    <div className="bubble-particle-layer" aria-hidden="true">
      <img className="bubble-sheet" src={bubbleParticleSet} alt="" />
      {bubbles.map((bubble) => (
        <span
          key={bubble}
          className="floating-bubble"
          style={{
            "--bubble-left": `${(bubble * 17) % 96}%`,
            "--bubble-size": `${10 + (bubble % 5) * 6}px`,
            "--bubble-delay": `${(bubble % 6) * -1.3}s`,
            "--bubble-duration": `${5 + (bubble % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
