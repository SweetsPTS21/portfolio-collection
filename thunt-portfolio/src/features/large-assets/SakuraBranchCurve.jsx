export default function SakuraBranchCurve() {
  return (
    <div
      className="absolute top-0 left-[-60px] md:left-0 w-[300px] md:w-[500px] opacity-50 md:opacity-70 pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'branch-sway 8s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Branch */}
        <path
          d="M0 20 C80 40 150 80 220 130 C290 180 350 200 420 190 C450 185 480 170 500 160"
          stroke="url(#branchGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 75 C170 90 190 110 200 120"
          stroke="url(#branchGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Blossoms */}
        {[
          { cx: 100, cy: 45 },
          { cx: 180, cy: 95 },
          { cx: 260, cy: 145 },
          { cx: 340, cy: 175 },
          { cx: 420, cy: 185 },
          { cx: 140, cy: 65 },
          { cx: 300, cy: 160 },
        ].map((pos, i) => (
          <g key={i}>
            <circle cx={pos.cx} cy={pos.cy} r="12" fill="url(#blossomGrad)" opacity="0.6" />
            <circle cx={pos.cx} cy={pos.cy} r="4" fill="#FFE4A8" opacity="0.8" />
            {/* Petals */}
            {[0, 72, 144, 216, 288].map((angle) => (
              <ellipse
                key={angle}
                cx={pos.cx + Math.cos((angle * Math.PI) / 180) * 10}
                cy={pos.cy + Math.sin((angle * Math.PI) / 180) * 10}
                rx="6"
                ry="4"
                fill="#FFB6D9"
                opacity="0.5"
                transform={`rotate(${angle} ${pos.cx + Math.cos((angle * Math.PI) / 180) * 10} ${pos.cy + Math.sin((angle * Math.PI) / 180) * 10})`}
              />
            ))}
          </g>
        ))}
        {/* Leaves */}
        <ellipse cx="120" cy="55" rx="8" ry="4" fill="#8EECD4" opacity="0.4" transform="rotate(-30 120 55)" />
        <ellipse cx="240" cy="140" rx="7" ry="3.5" fill="#8EECD4" opacity="0.35" transform="rotate(20 240 140)" />
        <ellipse cx="380" cy="185" rx="9" ry="4" fill="#8EECD4" opacity="0.3" transform="rotate(-15 380 185)" />
        <defs>
          <linearGradient id="branchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A5A72" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4A0FF" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="blossomGrad">
            <stop offset="0%" stopColor="#FF8EC7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
