// src/components/ui/CoffeeIllustration.jsx
// SVG inline coffee cup 2D illustration với steam

export default function CoffeeIllustration({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coffee cup illustration"
    >
      {/* Saucer */}
      <ellipse cx="90" cy="148" rx="58" ry="10" fill="#D4A056" opacity="0.35" />
      <ellipse cx="90" cy="146" rx="54" ry="8" fill="#C8915A" opacity="0.55" />

      {/* Cup body */}
      <path
        d="M42 98 Q44 140 90 142 Q136 140 138 98 Z"
        fill="#FAF3E8"
        stroke="#D4A056"
        strokeWidth="2.5"
      />
      {/* Cup top rim */}
      <ellipse cx="90" cy="98" rx="48" ry="9" fill="#E8D5BA" stroke="#D4A056" strokeWidth="2" />

      {/* Coffee surface */}
      <ellipse cx="90" cy="98" rx="42" ry="7" fill="#8B5E3C" opacity="0.88" />
      {/* Latte art — simple heart */}
      <path
        d="M82 97 Q84 93 88 96 Q92 93 94 97 Q93 101 88 104 Q83 101 82 97Z"
        fill="#C8915A"
        opacity="0.6"
      />

      {/* Handle */}
      <path
        d="M136 108 Q162 108 162 120 Q162 132 136 132"
        stroke="#D4A056"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Cup band decoration */}
      <path
        d="M48 116 Q90 122 132 116"
        stroke="#E8D5BA"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.7"
      />

      {/* Steam wisps — animated via CSS */}
      <g className="steam-group">
        {/* Steam 1 */}
        <path
          d="M75 90 Q71 80 75 70 Q79 60 75 50"
          stroke="#E8D5BA"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="steam"
          style={{ animationDelay: '0s' }}
          opacity="0.7"
        />
        {/* Steam 2 */}
        <path
          d="M90 86 Q86 76 90 66 Q94 56 90 46"
          stroke="#E8D5BA"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="steam"
          style={{ animationDelay: '0.7s' }}
          opacity="0.7"
        />
        {/* Steam 3 */}
        <path
          d="M105 90 Q101 80 105 70 Q109 60 105 50"
          stroke="#E8D5BA"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="steam"
          style={{ animationDelay: '1.4s' }}
          opacity="0.7"
        />
      </g>

      {/* Small sparkles */}
      <circle cx="60" cy="58" r="2" fill="#D4A056" className="twinkle-anim" style={{ animationDelay: '0.3s' }} />
      <circle cx="120" cy="50" r="1.5" fill="#C47A7A" className="twinkle-anim" style={{ animationDelay: '1s' }} />
      <circle cx="48" cy="74" r="1.5" fill="#7A9E7E" className="twinkle-anim" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}
