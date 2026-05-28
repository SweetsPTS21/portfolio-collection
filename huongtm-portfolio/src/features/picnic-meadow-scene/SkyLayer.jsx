import React from "react";

export const SkyLayer = () => {
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
        {/* Soft Gradient Sky */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8FA" />
          <stop offset="70%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#FFE8F0" />
        </linearGradient>
        {/* Gentle Sun Glow */}
        <radialGradient id="sunGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFE89A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFF8FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* CSS Styles for Sun Animations */}
      <style>{`
        @keyframes sunPulse {
          0%, 100% { transform: scale(0.96); }
          50% { transform: scale(1.04); }
        }
        @keyframes raysRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .sun-body-animate {
          animation: sunPulse 6s ease-in-out infinite;
          transform-origin: 1200px 150px;
        }
        .sun-rays-animate {
          animation: raysRotate 24s linear infinite;
          transform-origin: 1200px 150px;
        }
        @media (max-width: 768px) {
          .sun-group {
            transform: translate(-100px, 20px) scale(0.7) !important;
            transform-origin: 1200px 150px;
          }
        }
      `}</style>

      {/* Background Gradient */}
      <rect width="1440" height="900" fill="url(#skyGrad)" />
      <circle cx="720" cy="200" r="600" fill="url(#sunGlow)" />

      {/* Drifting Clouds Group */}
      <g className="cloud-slow-1" fill="#FFFFFF" fillOpacity="0.85">
        <path d="M 50,150 C 65,130 95,130 110,150 C 125,140 145,150 150,165 C 160,175 155,195 140,200 L 40,200 C 25,195 20,175 30,165 C 35,150 45,140 50,150 Z" />
      </g>
      <g className="cloud-slow-2" fill="#FFFFFF" fillOpacity="0.65">
        <path d="M 300,80 C 315,60 345,60 360,80 C 375,70 395,80 400,95 C 410,105 405,125 390,130 L 290,130 C 275,125 270,105 280,95 C 285,80 295,70 300,80 Z" />
      </g>
      <g className="cloud-slow-1" fill="#FFFFFF" fillOpacity="0.75" style={{ animationDelay: "-30s" }}>
        <path d="M 800,120 C 815,100 845,100 860,120 C 875,110 895,120 900,135 C 910,145 905,165 890,170 L 790,170 C 775,165 770,145 780,135 C 785,120 795,110 800,120 Z" />
      </g>

      {/* Asset 6: Soft Sun (Mặt Trời Nắng Nhẹ) - Top Right */}
      <g className="sun-group">
        {/* Slow Rotating Rays */}
        <g className="sun-rays-animate">
          {/* Loop of rays */}
          <path d="M 1200,60 L 1200,40 M 1200,240 L 1200,260 M 1110,150 L 1090,150 M 1290,150 L 1310,150 M 1136,86 L 1122,72 M 1264,214 L 1278,228 M 1136,214 L 1122,228 M 1264,86 L 1278,72" stroke="#FFB8D0" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
          <path d="M 1200,70 L 1200,55 M 1200,230 L 1200,245 M 1125,150 L 1110,150 M 1275,150 L 1290,150 M 1147,97 L 1136,86 M 1253,203 L 1264,214 M 1147,203 L 1136,214 M 1253,97 L 1264,86" stroke="#FFE89A" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Pulsing Sun Body */}
        <g className="sun-body-animate">
          {/* Main Glowing Circle */}
          <circle cx="1200" cy="150" r="60" fill="#FFE89A" stroke="#4A2535" strokeWidth="4" />
          <circle cx="1200" cy="150" r="50" fill="#FFF5CC" />
          
          {/* Blushing Cheeks */}
          <ellipse cx="1180" cy="160" rx="6" ry="4" fill="#FBDCE8" />
          <ellipse cx="1220" cy="160" rx="6" ry="4" fill="#FBDCE8" />
          
          {/* Happy Closed Eyes */}
          <path d="M 1172,150 Q 1178,144 1184,150" fill="none" stroke="#4A2535" strokeWidth="3" strokeLinecap="round" />
          <path d="M 1216,150 Q 1222,144 1228,150" fill="none" stroke="#4A2535" strokeWidth="3" strokeLinecap="round" />
          
          {/* Happy Blushing Mouth */}
          <path d="M 1195,162 Q 1200,167 1205,162" fill="none" stroke="#4A2535" strokeWidth="3" strokeLinecap="round" />
          
          {/* Tiny flower crown decoration */}
          <circle cx="1195" cy="98" r="4" fill="#FFFFFF" stroke="#4A2535" strokeWidth="1.5" />
          <circle cx="1205" cy="98" r="4" fill="#FFFFFF" stroke="#4A2535" strokeWidth="1.5" />
          <circle cx="1200" cy="92" r="4" fill="#FFFFFF" stroke="#4A2535" strokeWidth="1.5" />
          <circle cx="1200" cy="98" r="4" fill="#F4A7BE" />
        </g>
      </g>
    </svg>
  );
};
