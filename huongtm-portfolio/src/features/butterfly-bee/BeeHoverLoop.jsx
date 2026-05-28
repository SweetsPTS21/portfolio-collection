import React from "react";

export const BeeHoverLoop = ({ style = {}, className = "" }) => {
  return (
    <div
      className={`bee-hover-loop ${className}`}
      style={{
        display: "inline-block",
        pointerEvents: "none",
        width: "36px",
        height: "36px",
        zIndex: 5,
        ...style,
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <style>{`
          @keyframes wings { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.2); } }
          .wL { animation: wings 0.1s ease-in-out infinite; transform-origin: 20px -5px; }
          .wR { animation: wings 0.1s ease-in-out infinite; transform-origin: -20px -5px; }
        `}</style>
        <g transform="translate(50, 50) scale(1.3)">
          {/* Wings */}
          <g className="wL" transform="translate(-8, -12)">
            <ellipse cx="0" cy="0" rx="10" ry="6" fill="#FFF8FA" fillOpacity="0.85" stroke="#4A2535" strokeWidth="2" transform="rotate(-30)" />
          </g>
          <g className="wR" transform="translate(8, -12)">
            <ellipse cx="0" cy="0" rx="10" ry="6" fill="#FFF8FA" fillOpacity="0.85" stroke="#4A2535" strokeWidth="2" transform="rotate(30)" />
          </g>
          {/* Bee Body */}
          <rect x="-14" y="-8" width="28" height="18" rx="9" fill="#FFE89A" stroke="#4A2535" strokeWidth="2.5" />
          {/* Stripes */}
          <path d="M -4,-8 L -4,10 M 4,-8 L 4,10" stroke="#4A2535" strokeWidth="3" />
          {/* Eye */}
          <circle cx="-8" cy="-2" r="2" fill="#4A2535" />
          {/* Cheek */}
          <circle cx="-5" cy="2" r="2" fill="#F4A7BE" />
          {/* Stinger */}
          <path d="M 14,-2 L 18,0 L 14,2 Z" fill="#4A2535" />
        </g>
      </g>
    </div>
  );
};
