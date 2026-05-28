import React from "react";

export const GinghamBlanketLayer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      <defs>
        {/* Gingham Pattern */}
        <pattern id="ginghamBg" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#FFE8F0" />
          <rect width="20" height="40" fill="#FFB8D0" fillOpacity="0.4" />
          <rect width="40" height="20" fill="#FFB8D0" fillOpacity="0.4" />
          <rect width="20" height="20" fill="#FFB8D0" fillOpacity="0.3" />
        </pattern>
        {/* Soft Drop Shadow */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#4A2535" floodOpacity="0.06" />
        </filter>
      </defs>

      {/* Gingham Blanket positioned near the bottom */}
      <g transform="translate(720, 770) rotate(-3)" filter="url(#softShadow)">
        <rect x="-420" y="-120" width="840" height="240" rx="40" fill="url(#ginghamBg)" />
        {/* Double Border detail */}
        <rect x="-412" y="-112" width="824" height="224" rx="32" fill="none" stroke="#FFFFFF" strokeWidth="4" />
        <rect x="-408" y="-108" width="816" height="216" rx="28" fill="none" stroke="#F4C8D8" strokeWidth="2.5" strokeDasharray="12 6" />
      </g>

      {/* Cute Picnic Basket (Bottom Right Corner) */}
      <g transform="translate(1220, 780) scale(1.15)">
        {/* Shadow */}
        <ellipse cx="0" cy="30" rx="65" ry="12" fill="#4A2535" fillOpacity="0.08" />
        
        {/* Handle */}
        <path d="M -48,-8 C -48,-48 48,-48 48,-8" fill="none" stroke="#E8C99A" strokeWidth="6.5" strokeLinecap="round" />
        <path d="M -48,-8 C -48,-48 48,-48 48,-8" fill="none" stroke="#4A2535" strokeWidth="3" strokeLinecap="round" />
        <path d="M -48,-8 C -48,-48 48,-48 48,-8" fill="none" stroke="#D1A76E" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="8 5" />
        
        {/* Basket body */}
        <path d="M -50,-10 C -45,15 -35,30 0,30 C 35,30 45,15 50,-10 Z" fill="#E8C99A" stroke="#4A2535" strokeWidth="3.5" strokeLinejoin="round" />
        {/* Weaves */}
        <path d="M -40,-10 Q 0,0 40,-10 M -45,10 Q 0,20 45,10 M -20,-10 L -25,25 M 0,-10 L 0,30 M 20,-10 L 25,25" fill="none" stroke="#D1A76E" strokeWidth="1.8" />
        <rect x="-53" y="-14" width="106" height="8" rx="4" fill="#D1A76E" stroke="#4A2535" strokeWidth="3" />

        {/* Strawberries inside basket */}
        <g transform="translate(-14,-15) rotate(-20) scale(0.55)">
          <path d="M 0,25 C -15,22 -20,5 -20,-5 C -20,-15 -10,-20 0,-20 C 10,-20 20,-15 20,-5 C 20,5 15,22 0,25 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="5" />
          <path d="M 0,-20 L -8,-25 L -4,-18 L -12,-16 L -2,-12 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3" />
        </g>
        <g transform="translate(10,-14) rotate(15) scale(0.5)">
          <path d="M 0,25 C -15,22 -20,5 -20,-5 C -20,-15 -10,-20 0,-20 C 10,-20 20,-15 20,-5 C 20,5 15,22 0,25 Z" fill="#F9C8D8" stroke="#4A2535" stroke-width="5" />
          <path d="M 0,-20 L -8,-25 L -4,-18 L -12,-16 L -2,-12 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3" />
        </g>
      </g>
    </svg>
  );
};
