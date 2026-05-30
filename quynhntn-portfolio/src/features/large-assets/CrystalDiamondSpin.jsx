export default function CrystalDiamondSpin() {
  return (
    <div
      className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[200px] md:w-[350px] opacity-45 md:opacity-60 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'diamond-spin 40s linear infinite', perspective: '800px' }}
    >
      <svg viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Diamond facets */}
        <polygon points="175,30 250,130 175,320 100,130" fill="url(#facet1)" opacity="0.65" />
        <polygon points="175,30 250,130 175,130" fill="url(#facet2)" opacity="0.75" />
        <polygon points="175,30 100,130 175,130" fill="url(#facet3)" opacity="0.7" />
        <polygon points="175,130 250,130 175,320" fill="url(#facet4)" opacity="0.6" />
        <polygon points="175,130 100,130 175,320" fill="url(#facet5)" opacity="0.55" />
        {/* Outline */}
        <polygon
          points="175,30 250,130 175,320 100,130"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        <line x1="175" y1="30" x2="175" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <line x1="100" y1="130" x2="250" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        {/* Glow */}
        <circle cx="175" cy="175" r="100" fill="url(#diamondGlow)" opacity="0.1" />
        <defs>
          <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B8D4FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="facet2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#E8D5FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="facet3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#D4A0FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8EECD4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="facet4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4A0FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="facet5" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B8D4FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF8EC7" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="diamondGlow">
            <stop offset="0%" stopColor="#E8D5FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
