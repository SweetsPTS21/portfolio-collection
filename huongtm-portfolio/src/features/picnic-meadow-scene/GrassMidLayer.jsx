import React from "react";

export const GrassMidLayer = () => {
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
        {/* Hill Gradients */}
        <linearGradient id="hillBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C8F5E2" />
          <stop offset="100%" stopColor="#A8EDCA" />
        </linearGradient>
        <linearGradient id="hillFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B2F7D6" />
          <stop offset="100%" stopColor="#9CEABF" />
        </linearGradient>
      </defs>

      {/* CSS Styles for Tree Wind Sways */}
      <style>{`
        @keyframes treeSwayL {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes treeSwayR {
          0%, 100% { transform: rotate(0.8deg); }
          50% { transform: rotate(-0.8deg); }
        }
        .animate-tree-left {
          animation: treeSwayL 8s ease-in-out infinite;
          transform-origin: 60px 650px;
        }
        .animate-tree-right {
          animation: treeSwayR 9s ease-in-out infinite;
          transform-origin: 1380px 650px;
        }
        .animate-tree-mid {
          animation: treeSwayL 10s ease-in-out infinite;
          transform-origin: 400px 580px;
        }
        @media (max-width: 768px) {
          .tree-left-group {
            transform: scale(0.65) translate(-40px, 80px) !important;
            transform-origin: 60px 650px;
          }
          .tree-right-group {
            transform: scale(0.65) translate(40px, 80px) !important;
            transform-origin: 1380px 650px;
          }
          .tree-mid-group {
            display: none !important;
          }
        }
      `}</style>

      {/* Layer 1: Distant Soft Hills */}
      <path d="M 0,530 Q 360,450 720,510 T 1440,470 L 1440,900 L 0,900 Z" fill="url(#hillBack)" opacity="0.8" />

      {/* Asset 7: Distant Whimsical Daisy Tree (Cây Hoa Cúc Lùn - Mid Back) */}
      <g className="tree-mid-group animate-tree-mid">
        {/* Distant Tree Trunk */}
        <path d="M 400,580 L 400,520 Q 396,490 380,480 M 400,510 Q 405,490 415,485" fill="none" stroke="#4A2535" strokeWidth="4.5" strokeLinecap="round" />
        {/* Crown of daisies */}
        <g transform="translate(400, 470) scale(0.85)">
          <circle cx="0" cy="0" r="30" fill="#FFF8FA" stroke="#4A2535" strokeWidth="3" />
          <circle cx="-15" cy="-10" r="8" fill="#FFE89A" stroke="#4A2535" strokeWidth="2" />
          <circle cx="15" cy="10" r="8" fill="#FFE89A" stroke="#4A2535" strokeWidth="2" />
          <circle cx="-5" cy="15" r="10" fill="#F4A7BE" stroke="#4A2535" strokeWidth="2" />
          <circle cx="12" cy="-12" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
        </g>
      </g>

      {/* Layer 2: Mid Hills */}
      <path d="M 0,600 Q 380,530 780,610 T 1440,560 L 1440,900 L 0,900 Z" fill="url(#hillFront)" />

      {/* Asset 8: Giant Cherry Blossom Tree (Cây Anh Đào Cổ Thụ - Far Left) */}
      <g className="tree-left-group animate-tree-left">
        {/* Gnarly trunk */}
        <path d="M 40,680 Q 60,600 60,520 L 50,440 M 60,540 Q 80,480 95,450 M 55,480 Q 35,460 25,450" fill="none" stroke="#4A2535" strokeWidth="12" strokeLinecap="round" />
        <path d="M 60,640 Q 58,560 56,480" fill="none" stroke="#E8C99A" strokeWidth="4" strokeLinecap="round" />
        
        {/* Fluffy Blossom Crown (Layered pink cloud paths) */}
        <g transform="translate(60, 420)">
          {/* Back leaves */}
          <path d="M -90,10 C -120,-30 -80,-80 -40,-70 C -20,-90 40,-90 60,-60 C 90,-70 120,-30 90,10 C 100,50 60,70 0,60 C -60,70 -90,50 -90,10 Z" fill="#FBDCE8" stroke="#4A2535" strokeWidth="4.5" strokeLinejoin="round" />
          {/* Front leaves details */}
          <path d="M -70,0 C -95,-30 -60,-65 -30,-55 C -10,-75 30,-75 50,-50 C 75,-60 95,-30 70,0 C 80,30 50,45 0,40 C -50,45 -70,30 -70,0 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="3" />
          
          {/* Small floating blossom petals */}
          <circle cx="-110" cy="40" r="3" fill="#F4A7BE" stroke="#4A2535" strokeWidth="1.5" />
          <circle cx="100" cy="50" r="4.5" fill="#FBDCE8" stroke="#4A2535" strokeWidth="1.5" />
        </g>
      </g>

      {/* Asset 9: Whimsical Strawberry Fruit Tree (Cây Dâu Tây Trĩu Quả - Far Right) */}
      <g className="tree-right-group animate-tree-right">
        {/* Trunk */}
        <path d="M 1390,680 Q 1370,610 1370,530 L 1380,450 M 1372,550 Q 1350,490 1335,460 M 1375,490 Q 1395,470 1405,460" fill="none" stroke="#4A2535" strokeWidth="10" strokeLinecap="round" />
        
        {/* Soft Mint-Green Leaf Crown */}
        <g transform="translate(1370, 420)">
          {/* Back Crown */}
          <path d="M -90,10 C -120,-30 -80,-80 -40,-70 C -20,-90 40,-90 60,-60 C 90,-70 120,-30 90,10 C 100,50 60,70 0,60 C -60,70 -90,50 -90,10 Z" fill="#C8F5E2" stroke="#4A2535" strokeWidth="4.5" strokeLinejoin="round" />
          {/* Front highlight crown */}
          <path d="M -70,0 C -95,-30 -60,-65 -30,-55 C -10,-75 30,-75 50,-50 C 75,-60 95,-30 70,0 C 80,30 50,45 0,40 C -50,45 -70,30 -70,0 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3" />
          
          {/* Hanging Sweet Strawberry Fruits! */}
          {/* Fruit 1 */}
          <g transform="translate(-40, 20) rotate(-15) scale(0.45)">
            <path d="M 0,35 C -18,32 -25,8 -25,-8 C -25,-22 -12,-30 0,-30 C 12,-30 25,-22 25,-8 C 25,8 18,35 0,35 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="5.5" />
            <path d="M 0,-30 L -12,-36 L -6,-22 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="2.5" />
          </g>
          {/* Fruit 2 */}
          <g transform="translate(45, 15) rotate(20) scale(0.4)">
            <path d="M 0,35 C -18,32 -25,8 -25,-8 C -25,-22 -12,-30 0,-30 C 12,-30 25,-22 25,-8 C 25,8 18,35 0,35 Z" fill="#F9C8D8" stroke="#4A2535" stroke-width="5.5" />
            <path d="M 0,-30 L -12,-36 L -6,-22 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="2.5" />
          </g>
        </g>
      </g>

      {/* Swaying Daisies Stalks (Left Side) */}
      <g className="sway-element" transform="translate(180, 680) scale(0.95)" style={{ transformOrigin: "180px 750px" }}>
        <path d="M 0,50 Q -10,10 -5,-35" fill="none" stroke="#A8EDCA" strokeWidth="4" strokeLinecap="round" />
        <g className="sway-head-element" transform="translate(-5, -35)">
          <circle cx="0" cy="0" r="8" fill="#FFE89A" stroke="#4A2535" strokeWidth="2.5" />
          <circle cx="-12" cy="0" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="12" cy="0" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="0" cy="-12" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="0" cy="12" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="-8" cy="-8" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="8" cy="8" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="-8" cy="8" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="8" cy="-8" r="7" fill="#FFFFFF" stroke="#4A2535" strokeWidth="2" />
          <circle cx="0" cy="0" r="8" fill="#FFE89A" />
        </g>
      </g>

      {/* Swaying Tulip (Right Side) */}
      <g className="sway-element" transform="translate(1250, 690) scale(0.9)" style={{ transformOrigin: "1250px 740px" }}>
        <path d="M 0,50 Q 8,18 2,-20" fill="none" stroke="#A8EDCA" strokeWidth="4" strokeLinecap="round" />
        <g className="sway-head-element" transform="translate(2, -20)">
          <path d="M -15,10 C -25,-15 0,-25 0,-25 C 0,-25 25,-15 15,10 C 10,20 -10,20 -15,10 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M -8,5 C -12,-10 0,-18 0,-18 C 0,-18 12,-10 8,5 C 6,12 -6,12 -8,5 Z" fill="#F9C8D8" stroke="#4A2535" strokeWidth="1.5" />
          <circle cx="0" cy="-5" r="2.5" fill="#FFE89A" />
        </g>
      </g>
    </svg>
  );
};
