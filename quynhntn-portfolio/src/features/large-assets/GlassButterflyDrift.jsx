export default function GlassButterflyDrift() {
  return (
    <div
      className="absolute top-[30%] right-4 md:right-[10%] w-[150px] md:w-[250px] opacity-50 md:opacity-65 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'butterfly-flutter 8s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left wing */}
        <path
          d="M125 100 C100 60 50 40 40 70 C30 100 60 120 80 110 C100 100 110 90 125 100Z"
          fill="url(#wingL1)"
          opacity="0.5"
        />
        <path
          d="M125 100 C110 120 80 150 90 170 C100 190 120 170 125 150 C130 130 125 110 125 100Z"
          fill="url(#wingL2)"
          opacity="0.4"
        />
        {/* Right wing */}
        <path
          d="M125 100 C150 60 200 40 210 70 C220 100 190 120 170 110 C150 100 140 90 125 100Z"
          fill="url(#wingR1)"
          opacity="0.5"
        />
        <path
          d="M125 100 C140 120 170 150 160 170 C150 190 130 170 125 150 C120 130 125 110 125 100Z"
          fill="url(#wingR2)"
          opacity="0.4"
        />
        {/* Body */}
        <ellipse cx="125" cy="105" rx="3" ry="20" fill="#8A5A72" opacity="0.5" />
        {/* Antennae */}
        <path d="M123 85 C120 70 115 60 110 55" stroke="#8A5A72" strokeWidth="1" opacity="0.4" fill="none" />
        <path d="M127 85 C130 70 135 60 140 55" stroke="#8A5A72" strokeWidth="1" opacity="0.4" fill="none" />
        <circle cx="110" cy="55" r="2" fill="#FF8EC7" opacity="0.6" />
        <circle cx="140" cy="55" r="2" fill="#D4A0FF" opacity="0.6" />
        <defs>
          <linearGradient id="wingL1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#B8D4FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4A0FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wingL2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A0FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8EECD4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wingR1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B8D4FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FF8EC7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E8D5FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wingR2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8EECD4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
