// src/components/ui/SvgSceneLayer.jsx
import React from "react";

// Sky Diary Background SVG Scene
export function SkyDiaryBg({ className = "", children }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`skyDiaryBg ${className}`}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EAF4FF" />
          <stop offset="60%" stopColor="#F5FAFF" />
          <stop offset="100%" stopColor="#D3EAFB" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sky Background */}
      <rect width="1440" height="900" fill="url(#skyGrad)" />

      {/* Soft Sunlight Rays */}
      <g opacity="0.6">
        <path d="M 0,0 L 400,900 L 250,900 Z" fill="#FFFFFF" opacity="0.4" filter="url(#softGlow)" />
        <path d="M 0,0 L 800,900 L 600,900 Z" fill="#FFFFFF" opacity="0.3" filter="url(#softGlow)" />
        <path d="M 0,0 L 1200,900 L 1050,900 Z" fill="#FFFFFF" opacity="0.25" filter="url(#softGlow)" />
      </g>

      {/* Drifting Clouds */}
      <g className="skyCloudGroup">
        {/* Cloud 1 */}
        <path
          className="skyCloud cloudSlow"
          d="M 120,250 C 150,220 210,220 230,250 C 250,240 290,250 290,280 C 290,310 120,310 120,280 Z"
          fill="#FFFFFF"
          opacity="0.85"
        />
        {/* Cloud 2 */}
        <path
          className="skyCloud cloudFast"
          d="M 1100,150 C 1130,120 1190,120 1210,150 C 1230,140 1270,150 1270,180 C 1270,210 1100,210 1100,180 Z"
          fill="#FFFFFF"
          opacity="0.75"
        />
        {/* Cloud 3 */}
        <path
          className="skyCloud cloudMedium"
          d="M 700,80 C 720,60 760,60 775,80 C 790,70 820,80 820,100 C 820,120 700,120 700,100 Z"
          fill="#FFFFFF"
          opacity="0.65"
        />
      </g>

      {/* Diary Thin Gridlines representing logic */}
      <g stroke="var(--lan-sky)" strokeWidth="0.5" opacity="0.3">
        <line x1="0" y1="150" x2="1440" y2="150" />
        <line x1="0" y1="300" x2="1440" y2="300" />
        <line x1="0" y1="450" x2="1440" y2="450" />
        <line x1="0" y1="600" x2="1440" y2="600" />
        <line x1="0" y1="750" x2="1440" y2="750" />
      </g>

      {/* Floating Logic Sparkles & Notes */}
      <g className="floatingParticles">
        <circle cx="150" cy="500" r="3" fill="var(--lan-blue-soft)" opacity="0.5" className="noteFloat floatY1" />
        <circle cx="850" cy="220" r="4.5" fill="var(--lan-mint)" opacity="0.6" className="noteFloat floatY2" />
        <circle cx="1300" cy="650" r="2.5" fill="var(--lan-blue)" opacity="0.4" className="noteFloat floatY3" />
      </g>

      {children}
    </svg>
  );
}

// Law Book + Detective Magnifying Glass SVG Scene
export function LawBookOpen({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`lawBookOpen ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="bookShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="var(--lan-blue)" floodOpacity="0.12" />
        </filter>
        <linearGradient id="pageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="48%" stopColor="#F0F6FC" />
          <stop offset="50%" stopColor="#D5E5F5" />
          <stop offset="52%" stopColor="#F0F6FC" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      {/* Closed Leather Cover base */}
      <path
        d="M 30,220 C 30,230 40,240 65,240 L 335,240 C 360,240 370,230 370,220 L 370,55 C 370,45 360,35 335,35 L 65,35 C 40,35 30,45 30,55 Z"
        fill="var(--lan-blue)"
        opacity="0.8"
        filter="url(#bookShadow)"
      />
      <path
        d="M 28,222 C 28,232 38,242 65,242 L 335,242 C 362,242 372,232 372,222 L 372,57 C 372,47 362,37 335,37 L 65,37 C 38,37 28,47 28,57 Z"
        stroke="var(--lan-slate)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Thick Paper Stack Edge */}
      <path d="M 40,223 L 40,227 Q 40,234 65,234 L 335,234 Q 360,234 360,227 L 360,223 Z" fill="var(--lan-sky)" />

      {/* Open Pages */}
      <path
        d="M 45,215 Q 120,215 195,225 L 195,45 Q 120,35 45,45 Z"
        fill="url(#pageGrad)"
        stroke="var(--lan-sky)"
        strokeWidth="1"
      />
      <path
        d="M 355,215 Q 280,215 205,225 L 205,45 Q 280,35 355,45 Z"
        fill="url(#pageGrad)"
        stroke="var(--lan-sky)"
        strokeWidth="1"
      />

      {/* Bookmark Ribbon */}
      <path d="M 194,40 L 194,250 L 206,238 L 218,250 L 218,40 Z" fill="var(--lan-blue)" opacity="0.9" />

      {/* Notebook lines representing legal clauses */}
      <g stroke="var(--lan-sky)" strokeWidth="1" opacity="0.4" strokeDasharray="3 2">
        <line x1="60" y1="75" x2="175" y2="75" />
        <line x1="60" y1="100" x2="170" y2="100" />
        <line x1="60" y1="125" x2="175" y2="125" />
        <line x1="60" y1="150" x2="160" y2="150" />
        <line x1="60" y1="175" x2="170" y2="175" />

        <line x1="225" y1="75" x2="340" y2="75" />
        <line x1="225" y1="100" x2="335" y2="100" />
        <line x1="225" y1="125" x2="340" y2="125" />
        <line x1="225" y1="150" x2="320" y2="150" />
        <line x1="225" y1="175" x2="340" y2="175" />
      </g>

      {/* Logical Scales of Justice Motif on Left Page */}
      <g transform="translate(110, 110) scale(0.65)" stroke="var(--lan-blue)" strokeWidth="2.5" opacity="0.25">
        <line x1="0" y1="-25" x2="0" y2="35" />
        <line x1="-30" y1="-15" x2="30" y2="-15" />
        <line x1="-30" y1="-15" x2="-30" y2="15" strokeWidth="1.5" />
        <line x1="30" y1="-15" x2="30" y2="15" strokeWidth="1.5" />
        <path d="M -40,15 L -20,15 Q -30,28 -40,15 Z" fill="none" />
        <path d="M 20,15 L 40,15 Q 30,28 20,15 Z" fill="none" />
        <line x1="-15" y1="35" x2="15" y2="35" strokeWidth="4.5" />
      </g>

      {/* Cute Detective Magnifying Glass - representing My's analytical thinking */}
      <g className="detectiveLens" style={{ transformOrigin: "260px 150px" }}>
        {/* Shadow */}
        <circle cx="258" cy="152" r="32" fill="rgba(30, 111, 168, 0.15)" filter="url(#bookShadow)" />
        {/* Metal rim */}
        <circle cx="260" cy="150" r="32" stroke="var(--lan-blue)" strokeWidth="4.5" fill="#EAF4FF" fillOpacity="0.4" />
        <circle cx="260" cy="150" r="28" stroke="var(--lan-mint)" strokeWidth="1.5" fill="none" />
        {/* Reflection flare */}
        <path d="M 240,135 A 25 25 0 0 1 275,124" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        {/* Handle */}
        <line x1="282" y1="172" x2="325" y2="215" stroke="var(--lan-slate)" strokeWidth="7.5" strokeLinecap="round" />
        <line x1="284" y1="174" x2="323" y2="213" stroke="var(--lan-blue-soft)" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Intellectual Legal Seal SVG
export function LegalSealBlue({ className = "", size = 64 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`legalSealBlue ${className}`}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sealGrad" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#F7FBFF" />
          <stop offset="100%" stopColor="#D3EAFB" />
        </radialGradient>
      </defs>

      {/* Outer Wavy Seal base */}
      <circle cx="50" cy="50" r="46" fill="url(#sealGrad)" stroke="var(--lan-blue)" strokeWidth="3" />
      <circle cx="50" cy="50" r="41" stroke="var(--lan-blue-soft)" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="37" stroke="var(--lan-blue)" strokeWidth="1.5" />

      {/* Inner Scales of Justice */}
      <g stroke="var(--lan-slate)" strokeWidth="2" fill="none" transform="translate(50, 48) scale(0.8)">
        <line x1="0" y1="-18" x2="0" y2="22" />
        <line x1="-20" y1="-8" x2="20" y2="-8" />
        <line x1="-20" y1="-8" x2="-20" y2="10" strokeWidth="1" />
        <line x1="20" y1="-8" x2="20" y2="10" strokeWidth="1" />
        {/* Pans */}
        <path d="M -26,10 C -26,16 -14,16 -14,10 Z" fill="var(--lan-sky)" opacity="0.5" />
        <path d="M 14,10 C 14,16 26,16 26,10 Z" fill="var(--lan-sky)" opacity="0.5" />
        {/* Pedestal */}
        <line x1="-10" y1="22" x2="10" y2="22" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Academic Wreath Leaves */}
      <path
        d="M 22,65 Q 16,50 22,35 Q 26,45 28,55 Z"
        fill="var(--lan-sky)"
        stroke="var(--lan-blue-soft)"
        strokeWidth="0.75"
      />
      <path
        d="M 78,65 Q 84,50 78,35 Q 74,45 72,55 Z"
        fill="var(--lan-sky)"
        stroke="var(--lan-blue-soft)"
        strokeWidth="0.75"
      />

      {/* Verified Shield Ribbon at bottom */}
      <g transform="translate(38, 70)">
        <path d="M 2,0 L 22,0 L 22,10 L 12,16 L 2,10 Z" fill="var(--lan-blue)" stroke="var(--lan-slate)" strokeWidth="1" />
        <path d="M 7,6 L 10,9 L 17,3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// Case File Folder SVG for project display
export function CaseFileBlue({ className = "", chapterNumber = "01" }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`caseFileBlue ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="var(--lan-blue)" floodOpacity="0.08" />
        </filter>
        <linearGradient id="folderBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D3EAFB" />
          <stop offset="100%" stopColor="#90CAF9" />
        </linearGradient>
        <linearGradient id="folderFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F7FBFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>
      </defs>

      {/* Back Folder Layer & Tab */}
      <path
        d="M 10,25 C 10,20 15,15 20,15 L 55,15 C 60,15 63,18 67,22 L 75,30 L 110,30 C 115,30 120,35 120,40 L 120,90 C 120,95 115,100 110,100 L 20,100 C 15,100 10,95 10,90 Z"
        fill="url(#folderBackGrad)"
        stroke="var(--lan-blue-soft)"
        strokeWidth="1.5"
        filter="url(#cardShadow)"
      />

      {/* Inner Document Sheets peek out */}
      <g stroke="var(--lan-sky)" strokeWidth="1" fill="#FFFFFF">
        <rect x="22" y="10" width="84" height="75" rx="3" transform="rotate(-3, 64, 47)" />
        <rect x="25" y="8" width="82" height="75" rx="3" transform="rotate(1, 66, 45)" />
      </g>
      <g stroke="var(--lan-blue-soft)" strokeWidth="0.5" opacity="0.6">
        <line x1="35" y1="20" x2="80" y2="20" transform="rotate(1, 66, 45)" />
        <line x1="35" y1="28" x2="90" y2="28" transform="rotate(1, 66, 45)" />
        <line x1="35" y1="36" x2="70" y2="36" transform="rotate(1, 66, 45)" />
      </g>

      {/* Front Folder Cover (Lowered) */}
      <path
        d="M 10,40 C 10,35 15,33 20,33 L 110,33 C 115,33 120,35 120,40 L 120,90 C 120,95 115,100 110,100 L 20,100 C 15,100 10,95 10,90 Z"
        fill="url(#folderFrontGrad)"
        stroke="var(--lan-blue)"
        strokeWidth="1.75"
      />

      {/* Metal clip binder representation */}
      <path d="M 12,50 L 12,80" stroke="var(--lan-blue)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M 8,58 L 16,58" stroke="var(--lan-blue)" strokeWidth="1" />
      <path d="M 8,72 L 16,72" stroke="var(--lan-blue)" strokeWidth="1" />

      {/* Stamp Label for the Chapter */}
      <g transform="translate(68, 52)">
        <rect width="42" height="32" rx="4" fill="#FFFFFF" stroke="var(--lan-blue-soft)" strokeWidth="1.5" />
        <rect width="38" height="28" x="2" y="2" rx="2" stroke="var(--lan-mint)" strokeWidth="0.75" fill="none" />
        <text
          x="21"
          y="21"
          fill="var(--lan-slate)"
          fontSize="13"
          fontFamily="'Nunito', sans-serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          C.{chapterNumber}
        </text>
      </g>
    </svg>
  );
}

// AI Dialogue Prompt Bubble SVG
export function AiEthicsBubble({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`aiEthicsBubble ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bubbleGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </radialGradient>
      </defs>

      {/* Dialogue Bubble */}
      <path
        d="M 8,48 C 8,24 22,8 50,8 C 78,8 92,24 92,48 C 92,62 78,72 50,72 C 40,72 32,70 24,76 C 24,76 26,68 22,64 C 12,58 8,54 8,48 Z"
        fill="url(#bubbleGrad)"
        stroke="var(--lan-blue-soft)"
        strokeWidth="1.5"
      />

      {/* Logic Sparkle */}
      <g transform="translate(32, 28) scale(0.65)" stroke="var(--lan-blue)" strokeWidth="2.5" fill="none">
        <path d="M 12,0 C 12,6 6,12 0,12 C 6,12 12,18 12,24 C 12,18 18,12 24,12 C 18,12 12,6 12,0 Z" fill="var(--lan-mint)" />
      </g>

      {/* Logical Checkmark Shield in bubble */}
      <g transform="translate(56, 32) scale(0.7)">
        <path d="M 2,4 L 12,0 L 22,4 L 22,12 C 22,18 12,24 12,24 C 12,24 2,18 2,12 Z" fill="var(--lan-sky)" stroke="var(--lan-slate)" strokeWidth="1.5" />
        <path d="M 7,12 L 10,15 L 17,9" stroke="var(--lan-slate)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

// Logic / Reader stickers set for card decorations
export function DetectiveDiaryStickers({ className = "", type = "glasses" }) {
  if (type === "glasses") {
    // Elegant analytical reading glasses sticker
    return (
      <svg
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`diarySticker ${className}`}
        width="64"
        height="32"
        aria-hidden="true"
      >
        <rect width="80" height="40" rx="6" fill="#FFFFFF" fillOpacity="0.1" />
        <g stroke="var(--lan-blue)" strokeWidth="2" fill="var(--lan-sky)" fillOpacity="0.2">
          {/* Left Lens */}
          <circle cx="25" cy="20" r="12" />
          <path d="M 17,14 A 8 8 0 0 1 28,11" stroke="#FFFFFF" strokeWidth="1" />
          {/* Right Lens */}
          <circle cx="55" cy="20" r="12" />
          <path d="M 47,14 A 8 8 0 0 1 58,11" stroke="#FFFFFF" strokeWidth="1" />
          {/* Bridge */}
          <path d="M 37,17 Q 40,13 43,17" fill="none" strokeWidth="2.5" />
          {/* Temple arms */}
          <path d="M 13,20 Q 5,16 2,8" fill="none" strokeLinecap="round" />
          <path d="M 67,20 Q 75,16 78,8" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (type === "books") {
    // Stack of two colorful notebooks/novels
    return (
      <svg
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`diarySticker ${className}`}
        width="48"
        height="40"
        aria-hidden="true"
      >
        <g stroke="var(--lan-blue)" strokeWidth="1.5">
          {/* Bottom Book */}
          <rect x="5" y="24" width="45" height="16" rx="2" fill="var(--lan-sky)" />
          <line x1="42" y1="24" x2="42" y2="40" stroke="var(--lan-slate)" />
          {/* Top Book (angled) */}
          <g transform="translate(10, 10) rotate(-10)">
            <rect x="0" y="0" width="42" height="14" rx="2" fill="var(--lan-mint)" />
            <line x1="34" y1="0" x2="34" y2="14" stroke="var(--lan-blue)" />
          </g>
        </g>
      </svg>
    );
  }

  // Fallback Sparkle sticker
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`diarySticker ${className}`}
      width="32"
      height="32"
      aria-hidden="true"
    >
      <path
        d="M 20,0 C 20,11 11,20 0,20 C 11,20 20,29 20,40 C 20,29 29,20 40,20 C 29,20 20,11 20,0 Z"
        fill="var(--lan-mint)"
        stroke="var(--lan-blue)"
        strokeWidth="1"
      />
    </svg>
  );
}

// ==========================================================================
// Phase 2 — 6 Large Animated Background Assets
// ==========================================================================

// Asset 1: Large Floating Law Scroll
export function LargeFloatingLawScroll({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bgScroll ${className}`}
      aria-hidden="true"
      width="160"
      height="220"
      style={style}
    >
      <defs>
        <linearGradient id="scrollPaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7FBFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>
        <filter id="scrollShadow" x="-15%" y="-10%" width="130%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#2E86C1" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Top wooden rod */}
      <rect x="10" y="8" width="140" height="14" rx="7" fill="var(--lan-slate)" opacity="0.75" filter="url(#scrollShadow)" />
      <rect x="10" y="8" width="140" height="7" rx="5" fill="var(--lan-blue-soft)" opacity="0.4" />
      {/* Rod end caps */}
      <circle cx="10" cy="15" r="8" fill="var(--lan-blue)" opacity="0.8" />
      <circle cx="150" cy="15" r="8" fill="var(--lan-blue)" opacity="0.8" />

      {/* Main scroll paper body */}
      <rect x="18" y="18" width="124" height="168" rx="4" fill="url(#scrollPaperGrad)" stroke="var(--lan-border)" strokeWidth="1.5" filter="url(#scrollShadow)" />

      {/* Paper curl at top */}
      <path d="M 18,18 Q 80,28 142,18 L 142,32 Q 80,42 18,32 Z" fill="var(--lan-bg-mist)" opacity="0.5" />

      {/* Legal diary lines */}
      <g stroke="var(--lan-sky)" strokeWidth="1" opacity="0.45" strokeDasharray="4 3">
        <line x1="30" y1="52" x2="130" y2="52" />
        <line x1="30" y1="68" x2="130" y2="68" />
        <line x1="30" y1="84" x2="118" y2="84" />
        <line x1="30" y1="100" x2="126" y2="100" />
        <line x1="30" y1="116" x2="112" y2="116" />
        <line x1="30" y1="132" x2="124" y2="132" />
        <line x1="30" y1="148" x2="108" y2="148" />
      </g>

      {/* Scales of Justice watermark in center */}
      <g transform="translate(80, 100)" stroke="var(--lan-blue)" strokeWidth="2" fill="none" opacity="0.15">
        <line x1="0" y1="-28" x2="0" y2="28" />
        <line x1="-28" y1="-12" x2="28" y2="-12" />
        <line x1="-28" y1="-12" x2="-28" y2="8" strokeWidth="1.5" />
        <line x1="28" y1="-12" x2="28" y2="8" strokeWidth="1.5" />
        <path d="M -36,8 C -36,16 -20,16 -20,8 Z" fill="var(--lan-sky)" opacity="0.5" />
        <path d="M 20,8 C 20,16 36,16 36,8 Z" fill="var(--lan-sky)" opacity="0.5" />
        <line x1="-12" y1="28" x2="12" y2="28" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Academic seal stamp (top-right corner) */}
      <circle cx="118" cy="46" r="14" fill="var(--lan-sky)" opacity="0.18" stroke="var(--lan-blue)" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="118" cy="46" r="10" stroke="var(--lan-blue-soft)" strokeWidth="0.75" fill="none" />
      {/* Checkmark inside */}
      <path d="M 112,46 L 116,50 L 124,41" stroke="var(--lan-slate)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Blue ribbon hanging from bottom */}
      <path d="M 72,186 L 80,210 L 88,186" fill="var(--lan-blue)" opacity="0.6" />
      <path d="M 72,186 L 88,186" stroke="var(--lan-blue-soft)" strokeWidth="1.5" fill="none" />

      {/* Bottom wooden rod */}
      <rect x="10" y="184" width="140" height="14" rx="7" fill="var(--lan-slate)" opacity="0.6" />
      <rect x="10" y="184" width="140" height="6" rx="4" fill="var(--lan-blue-soft)" opacity="0.35" />
      <circle cx="10" cy="191" r="8" fill="var(--lan-blue)" opacity="0.7" />
      <circle cx="150" cy="191" r="8" fill="var(--lan-blue)" opacity="0.7" />
    </svg>
  );
}

// Asset 2: Large Open Book Silhouette with page corner lift
export function LargeOpenBookSilhouette({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bgBook ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bookPageGradL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>
        <linearGradient id="bookPageGradR" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EAF4FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="bookSpineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E86C1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <filter id="bookDropShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#2E86C1" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Book shadow */}
      <ellipse cx="100" cy="148" rx="80" ry="6" fill="var(--lan-blue)" opacity="0.08" />

      {/* Left page */}
      <path
        d="M 12,15 Q 98,12 100,14 L 100,132 Q 98,134 12,138 Z"
        fill="url(#bookPageGradL)"
        stroke="var(--lan-border)"
        strokeWidth="1.2"
        filter="url(#bookDropShadow)"
      />

      {/* Right page */}
      <path
        d="M 188,15 Q 102,12 100,14 L 100,132 Q 102,134 188,138 Z"
        fill="url(#bookPageGradR)"
        stroke="var(--lan-border)"
        strokeWidth="1.2"
      />

      {/* Left page lines */}
      <g stroke="var(--lan-sky)" strokeWidth="0.9" opacity="0.5" strokeDasharray="5 3">
        <line x1="22" y1="35" x2="90" y2="34" />
        <line x1="22" y1="50" x2="90" y2="49" />
        <line x1="22" y1="65" x2="88" y2="64" />
        <line x1="22" y1="80" x2="90" y2="79" />
        <line x1="22" y1="95" x2="86" y2="94" />
        <line x1="22" y1="110" x2="90" y2="109" />
      </g>

      {/* Right page lines */}
      <g stroke="var(--lan-sky)" strokeWidth="0.9" opacity="0.5" strokeDasharray="5 3">
        <line x1="110" y1="35" x2="178" y2="34" />
        <line x1="110" y1="50" x2="178" y2="49" />
        <line x1="110" y1="65" x2="176" y2="64" />
        <line x1="110" y1="80" x2="178" y2="79" />
        <line x1="110" y1="95" x2="174" y2="94" />
        <line x1="110" y1="110" x2="178" y2="109" />
      </g>

      {/* Spine */}
      <path d="M 97,12 L 103,12 L 103,134 L 97,134 Z" fill="url(#bookSpineGrad)" opacity="0.85" />
      <line x1="100" y1="12" x2="100" y2="134" stroke="#FFFFFF" strokeWidth="0.75" opacity="0.4" />

      {/* Bookmark ribbon left page */}
      <path d="M 42,12 L 42,30 L 46,26 L 50,30 L 50,12 Z" fill="var(--lan-blue)" opacity="0.7" />

      {/* Small scale watermark on left page */}
      <g transform="translate(55, 75)" stroke="var(--lan-blue)" strokeWidth="1.5" fill="none" opacity="0.12">
        <line x1="0" y1="-18" x2="0" y2="18" />
        <line x1="-18" y1="-8" x2="18" y2="-8" />
        <line x1="-18" y1="-8" x2="-18" y2="6" strokeWidth="1" />
        <line x1="18" y1="-8" x2="18" y2="6" strokeWidth="1" />
        <path d="M -22,6 C -22,12 -14,12 -14,6 Z" />
        <path d="M 14,6 C 14,12 22,12 22,6 Z" />
      </g>

      {/* Page corner that lifts (bottom-right of right page) */}
      <g className="bgBookPageCorner">
        <path
          d="M 170,118 L 188,118 L 188,136 Q 180,134 170,118 Z"
          fill="var(--lan-bg-mist)"
          stroke="var(--lan-sky)"
          strokeWidth="1"
        />
        {/* Shadow under lifted corner */}
        <path
          d="M 170,120 Q 178,126 184,130"
          stroke="var(--lan-blue)"
          strokeWidth="0.75"
          opacity="0.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Book cover edge/binding detail at bottom */}
      <path d="M 12,137 Q 100,142 188,137 L 190,145 Q 100,150 10,145 Z" fill="var(--lan-blue)" opacity="0.12" />
    </svg>
  );
}

// Asset 3: Digital Ink Wave
export function DigitalInkWave({ className = "" }) {
  return (
    <svg
      viewBox="0 0 360 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bgInkWave ${className}`}
      aria-hidden="true"
    >
      {/* Ink wave line 1 — longest, most visible */}
      <g className="inkLine1">
        <circle cx="8" cy="20" r="2.5" fill="var(--lan-blue)" opacity="0.35" />
        <path
          d="M 12,20 Q 60,14 100,20 Q 140,26 180,18 Q 220,10 260,20 Q 300,30 340,20"
          stroke="var(--lan-blue)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />
      </g>

      {/* Ink wave line 2 */}
      <g className="inkLine2">
        <circle cx="18" cy="35" r="2" fill="var(--lan-slate)" opacity="0.3" />
        <path
          d="M 22,35 Q 70,28 110,36 Q 150,44 190,34 Q 230,24 270,35 Q 310,46 345,34"
          stroke="var(--lan-slate)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
      </g>

      {/* Ink wave line 3 — thin */}
      <g className="inkLine3">
        <circle cx="5" cy="50" r="1.8" fill="var(--lan-blue-soft)" opacity="0.3" />
        <path
          d="M 9,50 Q 55,44 95,52 Q 135,60 175,48 Q 215,36 255,50 Q 295,64 338,50"
          stroke="var(--lan-blue-soft)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.18"
        />
      </g>

      {/* Ink wave line 4 — faintest */}
      <g className="inkLine4">
        <circle cx="22" cy="64" r="1.5" fill="var(--lan-sky)" opacity="0.25" />
        <path
          d="M 26,64 Q 72,58 112,66 Q 152,74 192,62 Q 232,50 272,64 Q 312,78 350,63"
          stroke="var(--lan-sky)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
        />
      </g>

      {/* Small ink splatter dots */}
      <circle cx="80" cy="15" r="1.2" fill="var(--lan-blue)" opacity="0.18" />
      <circle cx="200" cy="42" r="1" fill="var(--lan-slate)" opacity="0.15" />
      <circle cx="310" cy="28" r="1.5" fill="var(--lan-sky)" opacity="0.2" />
    </svg>
  );
}

// Asset 4: Music Notes Cluster (6 floating notes)
export function MusicNotesCluster({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bgMusicNotes ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="noteGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Note 1 — large quarter note, top-left */}
      <g className="note1" style={{ transformOrigin: "30px 38px" }}>
        <ellipse cx="30" cy="52" rx="11" ry="8" fill="var(--lan-blue)" opacity="0.72" />
        <line x1="41" y1="52" x2="41" y2="18" stroke="var(--lan-blue)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Glow halo */}
        <ellipse cx="30" cy="52" rx="14" ry="10" fill="var(--lan-sky)" opacity="0.15" filter="url(#noteGlow)" />
      </g>

      {/* Note 2 — eighth note with flag, top-right area */}
      <g className="note2" style={{ transformOrigin: "118px 44px" }}>
        <ellipse cx="118" cy="58" rx="9" ry="7" fill="var(--lan-slate)" opacity="0.65" />
        <line x1="127" y1="58" x2="127" y2="24" stroke="var(--lan-slate)" strokeWidth="3" strokeLinecap="round" />
        {/* Flag */}
        <path d="M 127,24 Q 148,32 138,46" stroke="var(--lan-slate)" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>

      {/* Note 3 — large beamed double note, mid-left */}
      <g className="note3" style={{ transformOrigin: "48px 108px" }}>
        <ellipse cx="36" cy="122" rx="10" ry="7.5" fill="var(--lan-mint)" opacity="0.8" stroke="var(--lan-blue)" strokeWidth="1" />
        <ellipse cx="64" cy="116" rx="10" ry="7.5" fill="var(--lan-mint)" opacity="0.8" stroke="var(--lan-blue)" strokeWidth="1" />
        <line x1="46" y1="122" x2="46" y2="86" stroke="var(--lan-blue-soft)" strokeWidth="3" strokeLinecap="round" />
        <line x1="74" y1="116" x2="74" y2="80" stroke="var(--lan-blue-soft)" strokeWidth="3" strokeLinecap="round" />
        {/* Beam bar */}
        <line x1="46" y1="86" x2="74" y2="80" stroke="var(--lan-blue-soft)" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Note 4 — small quarter note, mid-right */}
      <g className="note4" style={{ transformOrigin: "130px 100px" }}>
        <ellipse cx="130" cy="114" rx="8" ry="6" fill="var(--lan-blue-soft)" opacity="0.6" />
        <line x1="138" y1="114" x2="138" y2="84" stroke="var(--lan-blue-soft)" strokeWidth="2.8" strokeLinecap="round" />
        {/* Small sparkle beside */}
        <path d="M 146,90 C 146,93 143,96 140,96 C 143,96 146,99 146,102 C 146,99 149,96 152,96 C 149,96 146,93 146,90 Z"
          fill="var(--lan-sky)" opacity="0.6" />
      </g>

      {/* Note 5 — double-beamed pair, bottom area */}
      <g className="note5" style={{ transformOrigin: "55px 162px" }}>
        <ellipse cx="44" cy="172" rx="9" ry="6.5" fill="var(--lan-blue)" opacity="0.55" />
        <ellipse cx="72" cy="168" rx="9" ry="6.5" fill="var(--lan-blue)" opacity="0.55" />
        <line x1="53" y1="172" x2="53" y2="140" stroke="var(--lan-blue)" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="81" y1="168" x2="81" y2="136" stroke="var(--lan-blue)" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="53" y1="140" x2="81" y2="136" stroke="var(--lan-blue)" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="53" y1="148" x2="81" y2="144" stroke="var(--lan-blue)" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Note 6 — tiny eighth note, far right bottom */}
      <g className="note6" style={{ transformOrigin: "138px 156px" }}>
        <ellipse cx="138" cy="168" rx="7" ry="5.5" fill="var(--lan-sky)" opacity="0.7" stroke="var(--lan-blue-soft)" strokeWidth="0.75" />
        <line x1="145" y1="168" x2="145" y2="142" stroke="var(--lan-sky)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 145,142 Q 160,148 154,158" stroke="var(--lan-sky)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

// Asset 5: Academic Seal Orbiter (outer ring rotates, inner content stays upright via counter-rotate)
export function AcademicSealOrbiter({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="bgSealFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#EAF4FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D3EAFB" stopOpacity="0.5" />
        </radialGradient>
        <path id="sealTextCircle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
      </defs>

      {/* Outer spinning ring */}
      <g className="bgSealOuter" style={{ transformOrigin: "60px 60px" }}>
        {/* Outer decorative ring with dashes */}
        <circle cx="60" cy="60" r="52" stroke="var(--lan-blue)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.5" />
        {/* Middle ring */}
        <circle cx="60" cy="60" r="46" stroke="var(--lan-blue-soft)" strokeWidth="2.5" fill="none" opacity="0.4" />
        {/* Fine inner ring */}
        <circle cx="60" cy="60" r="40" stroke="var(--lan-mint)" strokeWidth="1" fill="none" opacity="0.6" />

        {/* Laurel leaf decorations (evenly around the ring) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 60 + 43 * Math.cos(rad);
          const y = 60 + 43 * Math.sin(rad);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="var(--lan-sky)"
              opacity="0.55"
              stroke="var(--lan-blue-soft)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Circular text path (renders as decorative lines since font isn't embedded in SVG) */}
        <text fontSize="7" fill="var(--lan-blue-soft)" opacity="0.45" letterSpacing="3.5" fontFamily="'Nunito', sans-serif" fontWeight="600">
          <textPath href="#sealTextCircle">NGUYỄN NGỌC LAN · LUẬT · ĐHQGHN ·</textPath>
        </text>
      </g>

      {/* Glass fill background (static) */}
      <circle cx="60" cy="60" r="36" fill="url(#bgSealFill)" stroke="var(--lan-blue)" strokeWidth="2" />

      {/* Inner content — counter-rotates to stay upright */}
      <g className="bgSealInner" style={{ transformOrigin: "60px 60px" }}>
        {/* Scales of justice */}
        <g transform="translate(60, 58)" stroke="var(--lan-slate)" strokeWidth="2" fill="none">
          <line x1="0" y1="-20" x2="0" y2="22" />
          <line x1="-22" y1="-10" x2="22" y2="-10" />
          <line x1="-22" y1="-10" x2="-22" y2="8" strokeWidth="1.5" />
          <line x1="22" y1="-10" x2="22" y2="8" strokeWidth="1.5" />
          <path d="M -28,8 C -28,15 -16,15 -16,8 Z" fill="var(--lan-sky)" opacity="0.6" />
          <path d="M 16,8 C 16,15 28,15 28,8 Z" fill="var(--lan-sky)" opacity="0.6" />
          <line x1="-12" y1="22" x2="12" y2="22" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Shield with check at bottom of inner area */}
        <g transform="translate(48, 84)">
          <path d="M 2,0 L 12,0 L 22,0 L 22,10 C 22,17 12,22 12,22 C 12,22 2,17 2,10 Z"
            fill="var(--lan-blue)" stroke="var(--lan-slate)" strokeWidth="1.2" opacity="0.85" />
          <path d="M 7,10 L 10,13 L 17,7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Sparkle top */}
        <path d="M 60,28 C 60,31 57,34 54,34 C 57,34 60,37 60,40 C 60,37 63,34 66,34 C 63,34 60,31 60,28 Z"
          fill="var(--lan-mint)" opacity="0.7" />
      </g>
    </svg>
  );
}

// Asset 6: Headphone Sticker (large, over-ear style)
export function HeadphoneSticker({ className = "" }) {
  return (
    <svg
      viewBox="0 0 110 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`bgHeadphone ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hpCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5BA8D8" />
          <stop offset="100%" stopColor="#2E86C1" />
        </linearGradient>
        <linearGradient id="hpCupGradR" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5BA8D8" />
          <stop offset="100%" stopColor="#2E86C1" />
        </linearGradient>
        <filter id="hpShadow" x="-15%" y="-10%" width="130%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#1565C0" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Headband arc */}
      <path
        d="M 22,70 C 22,25 88,25 88,70"
        stroke="var(--lan-slate)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        filter="url(#hpShadow)"
      />
      {/* Headband highlight */}
      <path
        d="M 27,68 C 27,32 83,32 83,68"
        stroke="var(--lan-blue-soft)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Headband top cushion */}
      <path
        d="M 38,36 Q 55,28 72,36"
        stroke="var(--lan-mint)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Left ear cup */}
      <g className="headphoneCup">
        <ellipse cx="24" cy="74" rx="20" ry="22" fill="url(#hpCupGrad)" filter="url(#hpShadow)" />
        <ellipse cx="24" cy="74" rx="14" ry="16" fill="var(--lan-slate)" opacity="0.85" />
        {/* Driver detail */}
        <ellipse cx="24" cy="74" rx="8" ry="9" fill="var(--lan-blue-soft)" opacity="0.4" />
        <ellipse cx="24" cy="74" rx="4" ry="4.5" fill="var(--lan-mint)" opacity="0.5" />
        {/* Highlight flare */}
        <path d="M 14,64 A 10 12 0 0 1 22,60" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Right ear cup */}
      <g className="headphoneCup">
        <ellipse cx="86" cy="74" rx="20" ry="22" fill="url(#hpCupGradR)" filter="url(#hpShadow)" />
        <ellipse cx="86" cy="74" rx="14" ry="16" fill="var(--lan-slate)" opacity="0.85" />
        <ellipse cx="86" cy="74" rx="8" ry="9" fill="var(--lan-blue-soft)" opacity="0.4" />
        <ellipse cx="86" cy="74" rx="4" ry="4.5" fill="var(--lan-mint)" opacity="0.5" />
        <path d="M 76,64 A 10 12 0 0 1 84,60" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* 3.5mm cord hanging from left cup */}
      <path
        d="M 20,96 Q 18,110 28,118 Q 38,126 55,122"
        stroke="var(--lan-blue)"
        strokeWidth="2"
        strokeLinecap="round"
        className="headphoneCord"
        fill="none"
        opacity="0.65"
      />
      {/* Jack plug */}
      <rect x="50" y="118" width="12" height="7" rx="3.5" fill="var(--lan-slate)" opacity="0.7" />
      <line x1="62" y1="121.5" x2="68" y2="121.5" stroke="var(--lan-blue)" strokeWidth="2" strokeLinecap="round" />

      {/* Small music note decal on right cup */}
      <g opacity="0.5">
        <ellipse cx="88" cy="76" rx="4" ry="3" fill="var(--lan-mint)" />
        <line x1="92" y1="76" x2="92" y2="67" stroke="var(--lan-mint)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 92,67 Q 98,69 96,73" stroke="var(--lan-mint)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

