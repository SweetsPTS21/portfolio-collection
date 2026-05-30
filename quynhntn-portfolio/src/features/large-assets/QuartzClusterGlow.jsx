export default function QuartzClusterGlow() {
  return (
    <div
      className="absolute bottom-[5%] left-[-30px] md:left-[5%] w-[250px] md:w-[400px] opacity-45 md:opacity-60 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'glow-pulse 5s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base */}
        <ellipse cx="200" cy="280" rx="120" ry="20" fill="url(#baseGrad)" opacity="0.3" />
        {/* Crystals */}
        <polygon points="160,280 150,120 170,100 180,280" fill="url(#crystal1)" opacity="0.75" />
        <polygon points="190,280 185,80 205,60 210,280" fill="url(#crystal2)" opacity="0.8" />
        <polygon points="220,280 215,140 235,120 240,280" fill="url(#crystal3)" opacity="0.7" />
        <polygon points="130,280 125,180 140,165 145,280" fill="url(#crystal4)" opacity="0.65" />
        <polygon points="250,280 248,160 262,145 265,280" fill="url(#crystal5)" opacity="0.65" />
        <polygon points="175,280 172,150 185,135 188,280" fill="url(#crystal6)" opacity="0.6" />
        <polygon points="235,280 232,190 245,178 248,280" fill="url(#crystal7)" opacity="0.6" />
        {/* Glow spots */}
        <circle cx="170" cy="110" r="15" fill="url(#crystalGlow)" opacity="0.5" />
        <circle cx="200" cy="70" r="18" fill="url(#crystalGlow)" opacity="0.55" />
        <circle cx="230" cy="130" r="12" fill="url(#crystalGlow)" opacity="0.45" />
        <defs>
          <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A0FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF8EC7" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="crystal1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="crystal2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E8D5FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="crystal3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#D4A0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF8EC7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="crystal4" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#E8D5FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="crystal5" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B8D4FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="crystal6" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#B8D4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4A0FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="crystal7" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFD4B8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF8EC7" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="crystalGlow">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
