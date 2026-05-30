export default function CrystalRoseFloat() {
  return (
    <div
      className="absolute top-8 right-[-40px] md:right-8 w-[250px] md:w-[400px] opacity-50 md:opacity-65 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'crystal-rotate 60s linear infinite' }}
    >
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center */}
        <circle cx="200" cy="200" r="20" fill="url(#roseCenter)" />
        {/* Petals */}
        <path
          d="M200 180 C180 140 140 130 160 100 C180 70 200 80 200 80 C200 80 220 70 240 100 C260 130 220 140 200 180Z"
          fill="url(#petal1)"
          opacity="0.85"
        />
        <path
          d="M220 200 C260 180 270 140 300 160 C330 180 320 200 320 200 C320 200 330 220 300 240 C270 260 260 220 220 200Z"
          fill="url(#petal2)"
          opacity="0.8"
        />
        <path
          d="M200 220 C220 260 260 270 240 300 C220 330 200 320 200 320 C200 320 180 330 160 300 C140 270 180 260 200 220Z"
          fill="url(#petal3)"
          opacity="0.8"
        />
        <path
          d="M180 200 C140 220 130 260 100 240 C70 220 80 200 80 200 C80 200 70 180 100 160 C130 140 140 180 180 200Z"
          fill="url(#petal4)"
          opacity="0.75"
        />
        <path
          d="M185 185 C160 160 130 165 140 135 C150 105 175 115 185 115 C185 115 195 105 210 135 C225 165 195 160 185 185Z"
          fill="url(#petal5)"
          opacity="0.7"
          transform="rotate(45 200 200)"
        />
        {/* Glow */}
        <circle cx="200" cy="200" r="80" fill="url(#roseGlow)" opacity="0.3" />
        <defs>
          <radialGradient id="roseCenter">
            <stop offset="0%" stopColor="#FFE4A8" />
            <stop offset="100%" stopColor="#FFD4B8" />
          </radialGradient>
          <linearGradient id="petal1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="petal2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E8D5FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="petal3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFD4B8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="petal4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="petal5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B8D4FF" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="roseGlow">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
