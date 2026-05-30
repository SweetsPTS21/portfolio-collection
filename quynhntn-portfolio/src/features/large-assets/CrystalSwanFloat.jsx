export default function CrystalSwanFloat() {
  return (
    <div
      className="absolute top-[5%] left-[5%] w-[200px] md:w-[350px] opacity-50 md:opacity-65 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'swan-sway 6s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 350 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="200" cy="220" rx="80" ry="50" fill="url(#swanBody)" opacity="0.7" />
        {/* Neck */}
        <path
          d="M160 200 C150 160 140 120 145 90 C150 60 165 50 175 55 C185 60 180 75 175 85"
          stroke="url(#swanNeck)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        {/* Head */}
        <circle cx="175" cy="82" r="12" fill="url(#swanHead)" opacity="0.8" />
        {/* Beak */}
        <path d="M185 80 L200 78 L185 82Z" fill="#FFD4B8" opacity="0.6" />
        {/* Wing */}
        <path
          d="M180 200 C220 180 260 170 280 180 C300 190 290 210 270 215 C250 220 220 215 200 220"
          fill="url(#swanWing)"
          opacity="0.6"
        />
        {/* Water reflection */}
        <ellipse cx="200" cy="270" rx="90" ry="15" fill="url(#swanReflection)" opacity="0.25" />
        {/* Crown */}
        <path d="M168 70 L172 60 L175 68 L178 58 L182 70" stroke="#FFE4A8" strokeWidth="1.5" fill="none" opacity="0.6" />
        <defs>
          <radialGradient id="swanBody">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="swanNeck" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="swanHead">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E8D5FF" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="swanWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E8D5FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="swanReflection">
            <stop offset="0%" stopColor="#B8D4FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
