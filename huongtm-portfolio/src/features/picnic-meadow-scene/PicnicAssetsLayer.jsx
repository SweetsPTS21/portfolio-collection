import React from "react";

export const PicnicAssetsLayer = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <style>{`
        /* 1. Umbrella Sway */
        @keyframes umbrellaSway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-umbrella {
          animation: umbrellaSway 6s ease-in-out infinite;
          transform-origin: bottom center;
        }

        /* 2. Teapot Steam */
        @keyframes steamRise {
          0% { stroke-dashoffset: 24; opacity: 0; transform: translateY(5px) scaleX(0.8); }
          50% { opacity: 0.8; }
          100% { stroke-dashoffset: 0; opacity: 0; transform: translateY(-20px) scaleX(1.2); }
        }
        .animate-steam-1 { animation: steamRise 3s ease-in-out infinite; transform-origin: center bottom; }
        .animate-steam-2 { animation: steamRise 3.5s ease-in-out infinite; animation-delay: 1.2s; transform-origin: center bottom; }

        /* 3. Cupcake Sparkle & Wiggle */
        @keyframes cupcakeWiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(4deg) scale(1.05); }
        }
        @keyframes sparkleRotate {
          0% { transform: rotate(0deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(360deg); opacity: 0.4; }
        }
        .animate-cupcake { animation: cupcakeWiggle 4.5s ease-in-out infinite; transform-origin: bottom center; }
        .animate-sparkle { animation: sparkleRotate 8s linear infinite; transform-origin: 35px 25px; }

        /* 4. Lemonade Bobbing and Bubbles */
        @keyframes lemonBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(15deg); }
        }
        @keyframes bubbleRise {
          0% { transform: translateY(20px); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
        .animate-lemon { animation: lemonBob 5s ease-in-out infinite; transform-origin: center; }
        .animate-bubble-1 { animation: bubbleRise 4s ease-in-out infinite; }
        .animate-bubble-2 { animation: bubbleRise 3.2s ease-in-out infinite; animation-delay: 1.5s; }

        /* 5. Cushion Compress */
        @keyframes pillowSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scaleY(0.95) scaleX(1.03); }
        }
        .animate-pillow { animation: pillowSoft 5.5s ease-in-out infinite; transform-origin: bottom center; }

        /* 6. Peeking Bunny Bob Up & Down */
        @keyframes peeking {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes earsWiggle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-5deg); }
        }
        .animate-peeking-bunny { animation: peeking 4s ease-in-out infinite; }
        .animate-ears { animation: earsWiggle 2s ease-in-out infinite; transform-origin: center bottom; }

        /* 7. Sleeping Bunny Zzz Float */
        @keyframes zzzFloat {
          0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translate(12px, -24px) scale(1); opacity: 0; }
        }
        .animate-zzz-1 { animation: zzzFloat 3.5s ease-in-out infinite; }
        .animate-zzz-2 { animation: zzzFloat 3.5s ease-in-out infinite; animation-delay: 1.5s; }
        .animate-sleeping {
          animation: pillowSoft 4s ease-in-out infinite;
          transform-origin: center bottom;
        }

        /* 8. Cream Kitten Tail Wag & Paw Play */
        @keyframes tailWag {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes pawPlay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(-10deg); }
        }
        .animate-kitten-tail { animation: tailWag 2.5s ease-in-out infinite; transform-origin: 5px 35px; }
        .animate-kitten-paw { animation: pawPlay 1.8s ease-in-out infinite; transform-origin: center; }

        /* 9. Floppy Puppy Ears & Head Tilt */
        @keyframes puppyEarL {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes puppyEarR {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }
        @keyframes puppyHead {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-puppy-ear-l { animation: puppyEarL 3s ease-in-out infinite; transform-origin: top right; }
        .animate-puppy-ear-r { animation: puppyEarR 3s ease-in-out infinite; transform-origin: top left; }
        .animate-puppy-head { animation: puppyHead 5s ease-in-out infinite; transform-origin: center bottom; }

        /* Mobile Rules */
        @media (max-width: 768px) {
          .picnic-umbrella-wrapper { transform: scale(0.6) translate(-20px, 120px) !important; }
          .picnic-teapot-wrapper { transform: scale(0.65) translate(40px, -20px) !important; }
          .picnic-cupcake-wrapper { transform: scale(0.65) translate(-40px, -20px) !important; }
          .picnic-lemonade-wrapper, .picnic-pillow-wrapper { display: none !important; }
          .animal-peeking-bunny, .animal-sleeping-bunny, .animal-kitten, .animal-puppy { display: none !important; }
        }
      `}</style>

      {/* Asset 1: Large Picnic Umbrella - Left Side */}
      <div
        className="picnic-umbrella-wrapper"
        style={{
          position: "absolute",
          top: "18%",
          left: "2%",
          width: "220px",
          height: "380px",
          zIndex: 1,
          transition: "transform 0.3s ease",
        }}
      >
        <svg
          viewBox="0 0 200 350"
          width="100%"
          height="100%"
          className="animate-umbrella"
        >
          <rect
            x="98"
            y="140"
            width="6"
            height="200"
            rx="3"
            fill="#4A2535"
            fillOpacity="0.08"
          />
          <rect
            x="96"
            y="130"
            width="8"
            height="210"
            rx="4"
            fill="#E8C99A"
            stroke="#4A2535"
            strokeWidth="3"
          />
          <path
            d="M 90,340 C 90,345 110,345 110,340"
            fill="none"
            stroke="#4A2535"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="18"
            r="8"
            fill="#F4A7BE"
            stroke="#4A2535"
            strokeWidth="3"
          />
          <path
            d="M 100,10 Q 108,2 112,5"
            fill="none"
            stroke="#4A2535"
            strokeWidth="2"
          />
          <path
            d="M 10,130 C 10,70 190,70 190,130 C 190,130 160,110 135,130 C 110,110 90,110 65,130 C 40,110 10,130 10,130 Z"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M 65,130 C 65,130 80,75 100,65 C 120,75 135,130 135,130"
            fill="#FBDCE8"
            stroke="#4A2535"
            strokeWidth="3"
          />
          <path
            d="M 10,130 C 10,130 35,85 100,65 C 165,85 190,130 190,130"
            fill="none"
            stroke="#4A2535"
            strokeWidth="3"
          />
          <circle
            cx="65"
            cy="138"
            r="5"
            fill="#F4A7BE"
            stroke="#4A2535"
            strokeWidth="2"
          />
          <circle
            cx="135"
            cy="138"
            r="5"
            fill="#F4A7BE"
            stroke="#4A2535"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Asset 2: Steaming Teapot - Right */}
      <div
        className="picnic-teapot-wrapper"
        style={{
          position: "absolute",
          bottom: "100px",
          right: "22%",
          width: "140px",
          height: "140px",
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 150 150" width="100%" height="100%">
          <path
            d="M 32,25 Q 26,10 32,0"
            fill="none"
            stroke="#F4C8D8"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="24"
            className="animate-steam-1"
          />
          <path
            d="M 45,28 Q 39,15 45,3"
            fill="none"
            stroke="#F4C8D8"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="24"
            className="animate-steam-2"
          />
          <ellipse
            cx="75"
            cy="128"
            rx="45"
            ry="8"
            fill="#4A2535"
            fillOpacity="0.08"
          />
          <path
            d="M 115,85 C 145,85 140,45 110,48"
            fill="none"
            stroke="#E8C99A"
            strokeWidth="7.5"
            strokeLinecap="round"
          />
          <path
            d="M 115,85 C 145,85 140,45 110,48"
            fill="none"
            stroke="#4A2535"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 35,80 C 10,75 5,50 15,48 L 22,58 Z"
            fill="#FBDCE8"
            stroke="#4A2535"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle
            cx="75"
            cy="85"
            r="40"
            fill="#F4A7BE"
            stroke="#4A2535"
            strokeWidth="4"
          />
          <circle cx="60" cy="75" r="2.5" fill="#FFE89A" />
          <circle cx="90" cy="75" r="2.5" fill="#FFE89A" />
          <circle cx="75" cy="90" r="2.5" fill="#FFE89A" />
          <path
            d="M 50,48 C 50,48 60,32 75,32 C 90,32 100,48 100,48 Z"
            fill="#A8EDCA"
            stroke="#4A2535"
            strokeWidth="3"
          />
          <circle
            cx="75"
            cy="28"
            r="6"
            fill="#FFE89A"
            stroke="#4A2535"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      {/* Asset 3: Giant Cupcake - Left */}
      <div
        className="picnic-cupcake-wrapper"
        style={{
          position: "absolute",
          bottom: "70px",
          left: "24%",
          width: "125px",
          height: "150px",
          zIndex: 3,
        }}
      >
        <svg
          viewBox="0 0 100 120"
          width="100%"
          height="100%"
          className="animate-cupcake"
        >
          <g className="animate-sparkle" fill="#FFE89A">
            <path d="M 35,15 L 38,22 L 45,25 L 38,28 L 35,35 L 32,28 Z" />
          </g>
          <ellipse
            cx="50"
            cy="108"
            rx="35"
            ry="8"
            fill="#4A2535"
            fillOpacity="0.08"
          />
          <path
            d="M 22,105 L 12,65 L 88,65 L 78,105 Z"
            fill="#FFE8F0"
            stroke="#4A2535"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M 30,105 L 22,65 M 50,105 L 50,65 M 70,105 L 78,65"
            stroke="#FFB8D0"
            strokeWidth="3"
            strokeDasharray="3 3"
          />
          <path
            d="M 10,65 C 10,50 30,42 50,42 C 70,42 90,50 90,65 C 90,75 80,78 50,78 C 20,78 10,75 10,65 Z"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M 20,52 C 20,40 38,32 50,32 C 62,32 80,40 80,52 Z"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <g transform="translate(50, 24) scale(0.55)">
            <path
              d="M 0,35 C -18,32 -25,8 -25,-8 C -25,-22 -12,-30 0,-30 C 12,-30 25,-22 25,-8 C 25,8 18,35 0,35 Z"
              fill="#F4A7BE"
              stroke="#4A2535"
              strokeWidth="5"
            />
            <circle cx="-8" cy="-5" r="3" fill="#FFE89A" />
            <circle cx="8" cy="-5" r="3" fill="#FFE89A" />
            <path
              d="M 0,-30 L -12,-36 L -6,-22 Z"
              fill="#A8EDCA"
              stroke="#4A2535"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>

      {/* Asset 4: Lemonade Dispenser - Far Right */}
      <div
        className="picnic-lemonade-wrapper"
        style={{
          position: "absolute",
          bottom: "120px",
          right: "8%",
          width: "110px",
          height: "170px",
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 100 150" width="100%" height="100%">
          <ellipse
            cx="50"
            cy="138"
            rx="28"
            ry="6"
            fill="#4A2535"
            fillOpacity="0.08"
          />
          <rect
            x="22"
            y="30"
            width="56"
            height="100"
            rx="14"
            fill="#FFFFFF"
            fillOpacity="0.15"
            stroke="#4A2535"
            strokeWidth="4"
          />
          <rect
            x="25"
            y="55"
            width="50"
            height="70"
            rx="8"
            fill="#FFE89A"
            fillOpacity="0.85"
          />
          <g fill="#FFFFFF" fillOpacity="0.6">
            <circle cx="38" cy="90" r="3.5" className="animate-bubble-1" />
            <circle cx="62" cy="110" r="2.5" className="animate-bubble-2" />
          </g>
          <g className="animate-lemon">
            <circle
              cx="48"
              cy="85"
              r="14"
              fill="#FFF5CC"
              stroke="#4A2535"
              strokeWidth="2"
            />
            <line
              x1="48"
              y1="85"
              x2="56"
              y2="93"
              stroke="#4A2535"
              strokeWidth="1.5"
            />
            <line
              x1="48"
              y1="85"
              x2="38"
              y2="77"
              stroke="#4A2535"
              strokeWidth="1.5"
            />
          </g>
          <rect
            x="14"
            y="110"
            width="10"
            height="12"
            rx="2"
            fill="#E8C99A"
            stroke="#4A2535"
            strokeWidth="2.5"
          />
          <rect
            x="20"
            y="22"
            width="60"
            height="10"
            rx="4"
            fill="#E8C99A"
            stroke="#4A2535"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="18"
            r="5"
            fill="#FFE89A"
            stroke="#4A2535"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      {/* Asset 5: Giant Picnic Pillow/Cushion - Far Left */}
      <div
        className="picnic-pillow-wrapper"
        style={{
          position: "absolute",
          bottom: "60px",
          left: "8%",
          width: "130px",
          height: "100px",
          zIndex: 2,
        }}
      >
        <svg
          viewBox="0 0 120 90"
          width="100%"
          height="100%"
          className="animate-pillow"
        >
          <defs>
            <pattern
              id="pillowGingham"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <rect width="16" height="16" fill="#FFF8FA" />
              <rect width="8" height="16" fill="#A8EDCA" fillOpacity="0.4" />
              <rect width="16" height="8" fill="#A8EDCA" fillOpacity="0.4" />
            </pattern>
          </defs>
          <ellipse
            cx="60"
            cy="80"
            rx="45"
            ry="8"
            fill="#4A2535"
            fillOpacity="0.08"
          />
          <path
            d="M 15,20 C 35,10 85,10 105,20 C 115,35 115,55 105,70 C 85,80 35,80 15,70 Z"
            fill="url(#pillowGingham)"
            stroke="#4A2535"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M 60,18 L 60,72 M 12,45 L 108,45"
            stroke="#4A2535"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <g transform="translate(60, 45) scale(0.75)">
            <path
              d="M 0,0 C -20,-20 -30,0 -20,10 Z"
              fill="#F4A7BE"
              stroke="#4A2535"
              strokeWidth="2.5"
            />
            <path
              d="M 0,0 C 20,-20 30,0 20,10 Z"
              fill="#F4A7BE"
              stroke="#4A2535"
              strokeWidth="2.5"
            />
            <circle
              cx="0"
              cy="0"
              r="7"
              fill="#FFB8D0"
              stroke="#4A2535"
              strokeWidth="2.5"
            />
          </g>
        </svg>
      </div>

      {/* ----------------------------------------------------
         ANIMAL ASSETS (2 Bunnies, 1 Kitten, 1 Puppy)
         ---------------------------------------------------- */}

      {/* Asset 10: Peeking Bunny (Thỏ Con Nhấp Nhô - Left behind Pillow) */}
      <div
        className="animal-peeking-bunny"
        style={{
          position: "absolute",
          bottom: "100px",
          left: "11%",
          width: "60px",
          height: "80px",
          zIndex: 1, // Sits behind the pillow (zIndex 2)
        }}
      >
        <svg
          viewBox="0 0 100 120"
          width="100%"
          height="100%"
          className="animate-peeking-bunny"
        >
          {/* Bunny Ears */}
          <g className="animate-ears">
            <path
              d="M 32,50 C 20,10 32,5 40,30 Z"
              fill="#FFFFFF"
              stroke="#4A2535"
              strokeWidth="3"
            />
            <path d="M 30,42 C 22,20 28,15 34,32 Z" fill="#FFE8F0" />

            <path
              d="M 68,50 C 80,10 68,5 60,30 Z"
              fill="#FFFFFF"
              stroke="#4A2535"
              strokeWidth="3"
            />
            <path d="M 70,42 C 78,20 72,15 66,32 Z" fill="#FFE8F0" />
          </g>
          {/* Bunny Head */}
          <ellipse
            cx="50"
            cy="80"
            rx="35"
            ry="28"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="3.5"
          />
          <ellipse cx="38" cy="85" rx="5" ry="3.5" fill="#FFE8F0" />
          <ellipse cx="62" cy="85" rx="5" ry="3.5" fill="#FFE8F0" />
          {/* Eyes */}
          <circle cx="36" cy="76" r="3" fill="#4A2535" />
          <circle cx="64" cy="76" r="3" fill="#4A2535" />
          {/* Nose & Mouth */}
          <path d="M 50,82 L 48,80 L 52,80 Z" fill="#4A2535" />
          <path
            d="M 48,84 Q 50,88 52,84"
            fill="none"
            stroke="#4A2535"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Asset 11: Sleeping Bunny (Thỏ Con Ngủ Say - Blanket Center-Left) */}
      <div
        className="animal-sleeping-bunny"
        style={{
          position: "absolute",
          bottom: "60px",
          left: "33%",
          width: "55px",
          height: "45px",
          zIndex: 3,
        }}
      >
        <svg
          viewBox="0 0 100 80"
          width="100%"
          height="100%"
          className="animate-sleeping"
        >
          {/* Floating Zzz */}
          <text
            x="75"
            y="25"
            fontFamily="Quicksand, sans-serif"
            fontSize="14"
            fill="#4A2535"
            opacity="0.8"
            className="animate-zzz-1"
          >
            Z
          </text>
          <text
            x="65"
            y="35"
            fontFamily="Quicksand, sans-serif"
            fontSize="10"
            fill="#8B6474"
            opacity="0.6"
            className="animate-zzz-2"
          >
            z
          </text>

          {/* Bunny body curled up */}
          <ellipse
            cx="50"
            cy="55"
            rx="32"
            ry="22"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="3"
          />
          {/* Tail */}
          <circle
            cx="16"
            cy="55"
            r="9"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="2.5"
          />
          {/* Flapped Ear */}
          <path
            d="M 65,48 C 65,48 50,30 46,45 Z"
            fill="#FFFFFF"
            stroke="#4A2535"
            strokeWidth="2.5"
          />
          <path d="M 60,46 C 60,46 52,36 49,44 Z" fill="#FFE8F0" />
          {/* Sleeping eye */}
          <path
            d="M 72,55 Q 76,59 80,55"
            fill="none"
            stroke="#4A2535"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse cx="82" cy="62" rx="4" ry="2.5" fill="#FFE8F0" />
        </svg>
      </div>

      {/* Asset 12: Golden Floppy Puppy (Chó Con Tai Cụp - Blanket Center-Right) */}
      <div
        className="animal-puppy"
        style={{
          position: "absolute",
          bottom: "95px",
          right: "28%",
          width: "70px",
          height: "85px",
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 100 120" width="100%" height="100%">
          <ellipse
            cx="50"
            cy="108"
            rx="28"
            ry="6"
            fill="#4A2535"
            fillOpacity="0.08"
          />
          {/* Puppy Body */}
          <path
            d="M 30,105 C 30,85 70,85 70,105 Z"
            fill="#FFE89A"
            stroke="#4A2535"
            strokeWidth="3.5"
          />
          {/* Front paws */}
          <rect
            x="36"
            y="96"
            width="10"
            height="15"
            rx="5"
            fill="#FFF5CC"
            stroke="#4A2535"
            strokeWidth="2.5"
          />
          <rect
            x="54"
            y="96"
            width="10"
            height="15"
            rx="5"
            fill="#FFF5CC"
            stroke="#4A2535"
            strokeWidth="2.5"
          />

          {/* Animated Puppy Head */}
          <g className="animate-puppy-head">
            {/* Main Head */}
            <circle
              cx="50"
              cy="60"
              r="28"
              fill="#FFE89A"
              stroke="#4A2535"
              strokeWidth="3.5"
            />
            {/* Blushing cheeks */}
            <circle cx="36" cy="68" r="4.5" fill="#FFB8D0" />
            <circle cx="64" cy="68" r="4.5" fill="#FFB8D0" />
            {/* Eyes */}
            <circle cx="38" cy="58" r="3" fill="#4A2535" />
            <circle cx="62" cy="58" r="3" fill="#4A2535" />
            {/* Snout */}
            <ellipse
              cx="50"
              cy="67"
              rx="9"
              ry="7"
              fill="#FFFFFF"
              stroke="#4A2535"
              strokeWidth="2"
            />
            <polygon points="46,63 54,63 50,67" fill="#4A2535" />
            <path
              d="M 48,70 Q 50,73 52,70"
              fill="none"
              stroke="#4A2535"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Floppy Ears */}
            <g className="animate-puppy-ear-l">
              <path
                d="M 24,46 C 14,46 12,74 22,76 Z"
                fill="#E8C99A"
                stroke="#4A2535"
                strokeWidth="3"
              />
            </g>
            <g className="animate-puppy-ear-r">
              <path
                d="M 76,46 C 86,46 88,74 78,76 Z"
                fill="#E8C99A"
                stroke="#4A2535"
                strokeWidth="3"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Asset 13: Cream Kitten (Mèo Con Đùa Dâu - Far Right Blanket) */}
      <div
        className="animal-kitten"
        style={{
          position: "absolute",
          bottom: "65px",
          right: "15%",
          width: "65px",
          height: "75px",
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 100 110" width="100%" height="100%">
          <ellipse
            cx="50"
            cy="100"
            rx="30"
            ry="6"
            fill="#4A2535"
            fillOpacity="0.08"
          />

          {/* Animated Tail */}
          <path
            d="M 22,90 Q 5,82 14,62"
            fill="none"
            stroke="#E8C99A"
            strokeWidth="7"
            strokeLinecap="round"
            className="animate-kitten-tail"
          />
          <path
            d="M 22,90 Q 5,82 14,62"
            fill="none"
            stroke="#4A2535"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-kitten-tail"
          />

          {/* Kitten Body */}
          <ellipse
            cx="50"
            cy="82"
            rx="26"
            ry="20"
            fill="#FFF5CC"
            stroke="#4A2535"
            strokeWidth="3"
          />

          {/* Kitten Head */}
          <g transform="translate(0, 0)">
            {/* Ears */}
            <polygon
              points="26,45 14,20 38,36"
              fill="#FFF5CC"
              stroke="#4A2535"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <polygon points="28,40 18,25 35,34" fill="#FFE8F0" />

            <polygon
              points="74,45 86,20 62,36"
              fill="#FFF5CC"
              stroke="#4A2535"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <polygon points="72,40 82,25 65,34" fill="#FFE8F0" />

            {/* Face Circle */}
            <circle
              cx="50"
              cy="54"
              r="24"
              fill="#FFF5CC"
              stroke="#4A2535"
              strokeWidth="3.5"
            />
            {/* Cheeks */}
            <circle cx="38" cy="60" r="3.5" fill="#FBDCE8" />
            <circle cx="62" cy="60" r="3.5" fill="#FBDCE8" />
            {/* Eyes */}
            <ellipse cx="38" cy="50" rx="3" ry="4" fill="#4A2535" />
            <ellipse cx="62" cy="50" rx="3" ry="4" fill="#4A2535" />
            <circle cx="39" cy="49" r="1" fill="#FFFFFF" />
            <circle cx="63" cy="49" r="1" fill="#FFFFFF" />
            {/* Nose & Whiskers */}
            <path d="M 50,56 L 48,54 L 52,54 Z" fill="#4A2535" />
            <path
              d="M 24,56 L 14,54 M 24,60 L 12,62 M 76,56 L 86,54 M 76,60 L 88,62"
              stroke="#4A2535"
              strokeWidth="1.5"
            />
          </g>

          {/* Animated Paw playing with a strawberry */}
          <g className="animate-kitten-paw" transform="translate(62, 84)">
            {/* Tiny Strawberry */}
            <path
              d="M 0,10 C -5,9 -8,2 -8,-3 C -8,-7 -4,-10 0,-10 C 4,-10 8,-7 8,-3 Z"
              fill="#F4A7BE"
              stroke="#4A2535"
              strokeWidth="1.5"
            />
            <path d="M 0,-10 L -4,-12 L -2,-7 Z" fill="#A8EDCA" />
            {/* Paw */}
            <circle
              cx="-6"
              cy="2"
              r="7"
              fill="#FFFFFF"
              stroke="#4A2535"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
