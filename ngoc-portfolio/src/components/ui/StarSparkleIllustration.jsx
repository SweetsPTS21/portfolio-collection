// src/components/ui/StarSparkleIllustration.jsx
// SVG inline star & sparkle 2D illustration

export default function StarSparkleIllustration({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Star and sparkle illustration"
    >
      {/* Glow backdrop */}
      <circle cx="90" cy="90" r="70" fill="url(#glowGradient)" opacity="0.18" />

      <defs>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A056" stopOpacity="1" />
          <stop offset="100%" stopColor="#C47A7A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="starGold" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFE08A" />
          <stop offset="100%" stopColor="#C8852A" />
        </radialGradient>
        <radialGradient id="starRose" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFCDD8" />
          <stop offset="100%" stopColor="#C47A7A" />
        </radialGradient>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Large central 6-point star ── */}
      <g filter="url(#softGlow)" className="float-anim">
        <path
          d="M90 30 L98 72 L138 72 L106 96 L118 138 L90 114 L62 138 L74 96 L42 72 L82 72 Z"
          fill="url(#starGold)"
          stroke="#D4A056"
          strokeWidth="1.2"
          opacity="0.95"
        />
        {/* Inner star highlight */}
        <path
          d="M90 46 L95 72 L118 72 L100 86 L107 112 L90 98 L73 112 L80 86 L62 72 L85 72 Z"
          fill="#FFF5D6"
          opacity="0.3"
        />
      </g>

      {/* ── 4-point sparkle — top right ── */}
      <g transform="translate(134, 44)" className="twinkle-anim" style={{ animationDelay: '0.2s' }}>
        <path
          d="M0,-18 C2,-6 6,-2 18,0 C6,2 2,6 0,18 C-2,6 -6,2 -18,0 C-6,-2 -2,-6 0,-18Z"
          fill="url(#starRose)"
          opacity="0.9"
        />
        <circle cx="0" cy="0" r="2.5" fill="#FFE0E8" opacity="0.8" />
      </g>

      {/* ── 4-point sparkle — bottom left ── */}
      <g transform="translate(46, 130)" className="twinkle-anim" style={{ animationDelay: '0.9s' }}>
        <path
          d="M0,-14 C2,-5 5,-2 14,0 C5,2 2,5 0,14 C-2,5 -5,2 -14,0 C-5,-2 -2,-5 0,-14Z"
          fill="url(#starGold)"
          opacity="0.85"
        />
        <circle cx="0" cy="0" r="2" fill="#FFF5D6" opacity="0.8" />
      </g>

      {/* ── Small 4-point sparkle — top left ── */}
      <g transform="translate(42, 52)" className="twinkle-anim" style={{ animationDelay: '0.5s' }}>
        <path
          d="M0,-10 C1.5,-3.5 3.5,-1.5 10,0 C3.5,1.5 1.5,3.5 0,10 C-1.5,3.5 -3.5,1.5 -10,0 C-3.5,-1.5 -1.5,-3.5 0,-10Z"
          fill="#C47A7A"
          opacity="0.75"
        />
      </g>

      {/* ── Small 4-point sparkle — bottom right ── */}
      <g transform="translate(136, 126)" className="twinkle-anim" style={{ animationDelay: '1.3s' }}>
        <path
          d="M0,-10 C1.5,-3.5 3.5,-1.5 10,0 C3.5,1.5 1.5,3.5 0,10 C-1.5,3.5 -3.5,1.5 -10,0 C-3.5,-1.5 -1.5,-3.5 0,-10Z"
          fill="#D4A056"
          opacity="0.8"
        />
      </g>

      {/* ── Tiny dot sparkles ── */}
      <circle cx="58" cy="42" r="3" fill="#FFE08A" className="twinkle-anim" style={{ animationDelay: '0.1s' }} opacity="0.9" />
      <circle cx="128" cy="148" r="2.5" fill="#FFCDD8" className="twinkle-anim" style={{ animationDelay: '0.7s' }} opacity="0.85" />
      <circle cx="150" cy="82" r="2" fill="#D4A056" className="twinkle-anim" style={{ animationDelay: '1.1s' }} opacity="0.8" />
      <circle cx="32" cy="98" r="2" fill="#C47A7A" className="twinkle-anim" style={{ animationDelay: '0.4s' }} opacity="0.75" />
      <circle cx="108" cy="24" r="1.8" fill="#7A9E7E" className="twinkle-anim" style={{ animationDelay: '1.6s' }} opacity="0.7" />

      {/* ── Orbit ring ── */}
      <ellipse
        cx="90" cy="90" rx="64" ry="64"
        stroke="rgba(212,160,86,0.18)"
        strokeWidth="1"
        strokeDasharray="6 5"
        fill="none"
      />
    </svg>
  );
}
