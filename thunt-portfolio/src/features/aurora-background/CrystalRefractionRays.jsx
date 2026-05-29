export default function CrystalRefractionRays() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Ray 1 */}
      <div
        className="absolute w-[2px] h-[120%] opacity-[0.08]"
        style={{
          left: '20%',
          top: '-10%',
          background: 'linear-gradient(180deg, #FF8EC7, #B8D4FF, #8EECD4, #E8D5FF, #FFB6D9)',
          transform: 'rotate(25deg)',
          animation: 'glow-pulse 20s ease-in-out infinite',
        }}
      />
      {/* Ray 2 */}
      <div
        className="absolute w-[1.5px] h-[130%] opacity-[0.06]"
        style={{
          left: '55%',
          top: '-15%',
          background: 'linear-gradient(180deg, #D4A0FF, #FFB6D9, #B8D4FF, #8EECD4)',
          transform: 'rotate(-20deg)',
          animation: 'glow-pulse 25s ease-in-out 5s infinite',
        }}
      />
      {/* Ray 3 */}
      <div
        className="absolute w-[1px] h-[110%] opacity-[0.05]"
        style={{
          left: '80%',
          top: '-5%',
          background: 'linear-gradient(180deg, #8EECD4, #E8D5FF, #FF8EC7, #B8D4FF)',
          transform: 'rotate(15deg)',
          animation: 'glow-pulse 22s ease-in-out 10s infinite',
        }}
      />
    </div>
  );
}
