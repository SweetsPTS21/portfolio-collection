import React from 'react';

// Window Light & Study Desk Background
export function DeskSceneSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="windowGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF9FD" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFD1EA" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE06F" />
          <stop offset="100%" stopColor="#D89A5B" />
        </linearGradient>
        <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Pastel window silhouette */}
      <rect x="50" y="20" width="180" height="280" rx="30" fill="url(#windowGrad)" stroke="#30283F" strokeWidth="4" />
      <line x1="140" y1="20" x2="140" y2="300" stroke="#30283F" strokeWidth="4" />
      <line x1="50" y1="140" x2="230" y2="140" stroke="#30283F" strokeWidth="4" />
      
      {/* Cute Desk Lamp */}
      <path d="M360 380 C360 300, 420 280, 420 220" stroke="#30283F" strokeWidth="6" strokeLinecap="round" />
      <path d="M380 200 L460 230 L440 260 L380 200 Z" fill="#91D7FF" stroke="#30283F" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="420" cy="220" r="10" fill="#FFE06F" />
      
      {/* Window light rays beam */}
      <polygon points="50,140 320,480 480,480 230,140" fill="#FFE06F" fillOpacity="0.18" filter="url(#softGlow)" />
      
      {/* Small desk plant */}
      <rect x="80" y="340" width="60" height="70" rx="10" fill="#FF9A9A" stroke="#30283F" strokeWidth="4" />
      <path d="M110 340 Q90 310 70 320 Q90 290 110 340 Z" fill="#78E8C6" stroke="#30283F" strokeWidth="3" />
      <path d="M110 340 Q130 310 150 320 Q130 290 110 340 Z" fill="#78E8C6" stroke="#30283F" strokeWidth="3" />
      <path d="M110 340 Q110 280 110 340 Z" fill="#78E8C6" stroke="#30283F" strokeWidth="3" />
    </svg>
  );
}

// Sticker Sheet Set (Cute Star/Bow/Heart)
export function StickerSheetSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="stickerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#30283F" floodOpacity="0.1" />
        </filter>
      </defs>
      
      {/* Cute Bow Sticker */}
      <g filter="url(#stickerShadow)">
        <path d="M50 80 C70 50, 80 110, 100 80 C120 110, 130 50, 150 80 C140 110, 60 110, 50 80 Z" fill="#FF75B8" stroke="#30283F" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="100" cy="88" r="12" fill="#FFE06F" stroke="#30283F" strokeWidth="4" />
        {/* Ribbon tails */}
        <path d="M92 98 L70 140 L95 130 L100 98" fill="#FF75B8" stroke="#30283F" strokeWidth="3" strokeLinejoin="round" />
        <path d="M108 98 L130 140 L105 130 L100 98" fill="#FF75B8" stroke="#30283F" strokeWidth="3" strokeLinejoin="round" />
      </g>
      
      {/* Sparkly Star Sticker */}
      <g filter="url(#stickerShadow)" transform="translate(140, 20)">
        <path d="M50 10 L62 38 L90 42 L68 60 L76 88 L50 72 L24 88 L32 60 L10 42 L38 38 Z" fill="#FFE06F" stroke="#30283F" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="42" cy="46" r="3" fill="#30283F" />
        <circle cx="58" cy="46" r="3" fill="#30283F" />
        <path d="M46 56 Q50 60 54 56" stroke="#30283F" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      {/* Heart Paper Gem Sticker */}
      <g filter="url(#stickerShadow)" transform="translate(40, 150)">
        <path d="M60 30 C40 10, 10 20, 10 50 C10 80, 50 110, 60 120 C70 110, 110 80, 110 50 C110 20, 80 10, 60 30 Z" fill="#C9B3FF" stroke="#30283F" strokeWidth="4" strokeLinejoin="round" />
        {/* Facet lines */}
        <line x1="60" y1="30" x2="60" y2="120" stroke="#30283F" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="10" y1="50" x2="110" y2="50" stroke="#30283F" strokeWidth="2" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

// 2. Washi Tape SVG
export function WashiTapeSVG({ className, color = '#FF75B8', pattern = 'caro' }) {
  return (
    <svg className={className} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="caroPattern" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#fff" />
          <rect x="0" y="0" width="5" height="5" fill={color} fillOpacity="0.4" />
          <rect x="5" y="5" width="5" height="5" fill={color} fillOpacity="0.4" />
        </pattern>
        <pattern id="stripePattern" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="10" stroke={color} strokeWidth="3" />
        </pattern>
      </defs>
      
      {/* Torn Paper Tape Body */}
      <path 
        d="M 5,2 L 145,5 L 148,15 L 145,35 L 5,38 L 2,22 Z" 
        fill={pattern === 'caro' ? 'url(#caroPattern)' : 'url(#stripePattern)'} 
        stroke="#30283F" 
        strokeWidth="3.5" 
        strokeLinejoin="round"
      />
      {/* Torn Edge Details */}
      <path d="M 2,22 L 5,2 L 8,10" stroke="#30283F" strokeWidth="2.5" />
      <path d="M 145,35 L 148,15 L 143,25" stroke="#30283F" strokeWidth="2.5" />
    </svg>
  );
}

// 3. Heart Paperclip SVG
export function HeartPaperclipSVG({ className, size = 32, color = '#FF75B8' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16 28 C9 23, 4 17, 4 11 C4 6.5, 7.5 3, 12 3 C14.5 3, 15.5 4, 16 5.5 C16.5 4, 17.5 3, 20 3 C24.5 3, 28 6.5, 28 11 C28 17, 23 23, 16 28 Z" 
        fill="none" 
        stroke="#30283F" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Inner loop of paperclip */}
      <path 
        d="M16 22 C11.5 18, 8 14, 8 10 C8 7, 10 5, 12 5 C14 5, 15 6, 16 7.5 C17 6, 18 5, 20 5 C22 5, 24 7, 24 10 C24 14, 20.5 18, 16 22 Z" 
        fill={color} 
        stroke="#30283F" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// 4. Sparkle fleck
export function SparkleStarSVG({ className, size = 20 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9Z" />
    </svg>
  );
}

// 5. Cup of Tea
export function SteamingTeaSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="teaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE06F" />
          <stop offset="100%" stopColor="#C9B3FF" />
        </linearGradient>
      </defs>
      
      {/* Steaming Smoke Paths (Animate in CSS) */}
      <path d="M90 70 Q100 40 85 10" stroke="#FF75B8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M130 70 Q145 35 130 10" stroke="#91D7FF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M170 70 Q160 45 175 10" stroke="#78E8C6" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      
      {/* Cup Base & Handle */}
      <path d="M210 140 C240 140, 250 190, 210 200" stroke="#30283F" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <path d="M70 120 L210 120 C200 210, 80 210, 70 120 Z" fill="url(#teaGrad)" stroke="#30283F" strokeWidth="5.5" strokeLinejoin="round" />
      
      {/* Inside Liquid */}
      <ellipse cx="140" cy="120" rx="66" ry="12" fill="#D89A5B" stroke="#30283F" strokeWidth="4.5" />
      
      {/* Saucer plate */}
      <path d="M40 220 C40 220, 40 240, 140 240 C240 240, 240 220, 240 220 Z" fill="#FFFFFF" stroke="#30283F" strokeWidth="5.5" strokeLinejoin="round" />
      
      {/* Cat face emblem on cup */}
      <circle cx="140" cy="165" r="18" fill="#FFFFFF" stroke="#30283F" strokeWidth="3" />
      <circle cx="133" cy="162" r="2" fill="#30283F" />
      <circle cx="147" cy="162" r="2" fill="#30283F" />
      <path d="M137 170 Q140 172 143 170" stroke="#30283F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Gift Box thắt nơ ruy băng
export function GiftBoxSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bow thắt nơ */}
      <path d="M110 50 C70 10, 100 80, 140 70 C100 80, 70 130, 110 90" fill="#FF75B8" stroke="#30283F" strokeWidth="5" strokeLinejoin="round" />
      <path d="M170 50 C210 10, 180 80, 140 70 C180 80, 210 130, 170 90" fill="#FF75B8" stroke="#30283F" strokeWidth="5" strokeLinejoin="round" />
      
      {/* Ribbon Knot */}
      <rect x="130" y="65" width="20" height="20" rx="6" fill="#FFE06F" stroke="#30283F" strokeWidth="5" />
      
      {/* Box Lid */}
      <rect x="60" y="80" width="160" height="40" rx="10" fill="#91D7FF" stroke="#30283F" strokeWidth="5" />
      
      {/* Box Body */}
      <rect x="70" y="120" width="140" height="120" rx="8" fill="#C9B3FF" stroke="#30283F" strokeWidth="5" />
      
      {/* Vertical Ribbon band */}
      <rect x="130" y="80" width="20" height="160" fill="#FF75B8" stroke="#30283F" strokeWidth="4" />
    </svg>
  );
}
