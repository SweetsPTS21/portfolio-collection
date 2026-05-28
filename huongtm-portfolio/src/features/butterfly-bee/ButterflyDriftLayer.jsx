import React from "react";

export const ButterflyDriftLayer = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* Butterfly 1: Soft Pink & Purple */}
      <div
        className="butterfly-drift"
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "48px",
          height: "48px",
          transformOrigin: "center",
        }}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <style>{`
            @keyframes flapL { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.25); } }
            @keyframes flapR { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.25); } }
            .flL { animation: flapL 0.12s ease-in-out infinite; transform-origin: 20px 0px; }
            .flR { animation: flapR 0.12s ease-in-out infinite; transform-origin: -20px 0px; }
          `}</style>
          <g transform="translate(100, 100) scale(1.4)">
            {/* Left Wings */}
            <g className="flL" transform="translate(-4, 0)">
              <path d="M 0,0 C -30,-40 -45,-15 -25,5 C -15,15 0,0 0,0" fill="#F4A7BE" stroke="#4A2535" strokeWidth="3.5" />
              <circle cx="-16" cy="-12" r="4" fill="#FFE89A" />
              <path d="M 0,0 C -25,25 -35,5 -15,-5 Z" fill="#D8B8FF" stroke="#4A2535" strokeWidth="2.5" />
            </g>
            {/* Right Wings */}
            <g className="flR" transform="translate(4, 0)">
              <path d="M 0,0 C 30,-40 45,-15 25,5 C 15,15 0,0 0,0" fill="#F4A7BE" stroke="#4A2535" strokeWidth="3.5" />
              <circle cx="16" cy="-12" r="4" fill="#FFE89A" />
              <path d="M 0,0 C 25,25 35,5 15,-5 Z" fill="#D8B8FF" stroke="#4A2535" strokeWidth="2.5" />
            </g>
            {/* Body */}
            <rect x="-3" y="-14" width="6" height="28" rx="3" fill="#E8C99A" stroke="#4A2535" strokeWidth="2.5" />
            <circle cx="0" cy="-14" r="5" fill="#E8C99A" stroke="#4A2535" strokeWidth="2.5" />
          </g>
        </svg>
      </div>

      {/* Butterfly 2: Mint & Yellow (Drifts with offset and delay) */}
      <div
        className="butterfly-drift"
        style={{
          position: "absolute",
          top: "45%",
          left: "15%",
          width: "40px",
          height: "40px",
          animationDelay: "-6s",
          animationDuration: "24s",
          transformOrigin: "center",
        }}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <g transform="translate(100, 100) scale(1.2) rotate(15)">
            {/* Left Wings */}
            <g className="flL" transform="translate(-4, 0)">
              <path d="M 0,0 C -30,-40 -45,-15 -25,5 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3.5" />
              <circle cx="-16" cy="-12" r="3.5" fill="#FFE89A" />
              <path d="M 0,0 C -25,25 -35,5 -15,-5 Z" fill="#FFE89A" stroke="#4A2535" strokeWidth="2.5" />
            </g>
            {/* Right Wings */}
            <g className="flR" transform="translate(4, 0)">
              <path d="M 0,0 C 30,-40 45,-15 25,5 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3.5" />
              <circle cx="16" cy="-12" r="3.5" fill="#FFE89A" />
              <path d="M 0,0 C 25,25 35,5 15,-5 Z" fill="#FFE89A" stroke="#4A2535" strokeWidth="2.5" />
            </g>
            {/* Body */}
            <rect x="-3" y="-14" width="6" height="28" rx="3" fill="#E8C99A" stroke="#4A2535" strokeWidth="2.5" />
            <circle cx="0" cy="-14" r="5" fill="#E8C99A" stroke="#4A2535" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
};
