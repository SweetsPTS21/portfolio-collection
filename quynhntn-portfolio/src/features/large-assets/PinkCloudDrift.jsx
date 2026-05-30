export default function PinkCloudDrift() {
  return (
    <>
      {/* Left cloud */}
      <div
        className="absolute top-[40%] left-[-20px] md:left-[3%] w-[180px] md:w-[300px] opacity-50 md:opacity-65 pointer-events-none"
        aria-hidden="true"
        style={{ animation: 'cloud-drift 25s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="150" cy="90" rx="100" ry="45" fill="url(#cloud1)" opacity="0.5" />
          <ellipse cx="110" cy="75" rx="60" ry="35" fill="url(#cloud1)" opacity="0.4" />
          <ellipse cx="190" cy="80" rx="55" ry="30" fill="url(#cloud1)" opacity="0.4" />
          <ellipse cx="140" cy="65" rx="45" ry="28" fill="url(#cloud1Inner)" opacity="0.3" />
          <defs>
            <radialGradient id="cloud1">
              <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF8EC7" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="cloud1Inner">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Right cloud */}
      <div
        className="absolute top-[55%] right-[-20px] md:right-[3%] w-[160px] md:w-[260px] opacity-45 md:opacity-60 pointer-events-none"
        aria-hidden="true"
        style={{ animation: 'cloud-drift 30s ease-in-out 5s infinite reverse' }}
      >
        <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="80" rx="90" ry="40" fill="url(#cloud2)" opacity="0.45" />
          <ellipse cx="95" cy="65" rx="50" ry="30" fill="url(#cloud2)" opacity="0.35" />
          <ellipse cx="165" cy="70" rx="48" ry="28" fill="url(#cloud2)" opacity="0.35" />
          <ellipse cx="125" cy="58" rx="38" ry="22" fill="url(#cloud2Inner)" opacity="0.25" />
          <defs>
            <radialGradient id="cloud2">
              <stop offset="0%" stopColor="#E8D5FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D4A0FF" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="cloud2Inner">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E8D5FF" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
