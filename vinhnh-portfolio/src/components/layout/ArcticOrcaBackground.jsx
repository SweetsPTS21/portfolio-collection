export default function ArcticOrcaBackground() {
  return (
    <div className="arctic-orca-background" aria-hidden="true">
      <div className="polar-sky" />
      <svg className="iceberg iceberg-one" viewBox="0 0 240 160">
        <path d="M16 128 66 38l32 56 30-72 66 106Z" />
        <path d="M44 128h156l-28 28H76Z" />
      </svg>
      <svg className="iceberg iceberg-two" viewBox="0 0 260 160">
        <path d="M20 120 76 54l24 34 42-62 84 94Z" />
        <path d="M52 120h172l-34 34H82Z" />
      </svg>
      <svg className="orca orca-swim" viewBox="0 0 320 180">
        <path className="orca-body" d="M46 94C80 34 172 22 244 56c30 14 46 38 46 38s-30 8-56 4c-36 34-96 45-151 20-18-8-37-14-37-24Z" />
        <path className="orca-belly" d="M118 105c42 22 86 18 120-4-22 32-74 48-128 20Z" />
        <path className="orca-fin" d="M154 55 184 4l14 66Z" />
        <path className="orca-tail" d="M48 92 2 58l34 50L4 140Z" />
        <circle cx="226" cy="68" r="5" />
      </svg>
      <svg className="submarine" viewBox="0 0 220 130">
        <path d="M28 76c26-42 122-48 164-8 10 10 10 22 0 30-40 30-132 28-164-2-10-10-10-16 0-20Z" />
        <path d="M84 50h54l-14-24H98Z" />
        <circle cx="84" cy="82" r="13" />
        <circle cx="128" cy="82" r="13" />
        <path d="M190 82h28M18 82 0 68v56Z" />
      </svg>
      <div className="sonar sonar-pulse" />
      <div className="sonar sonar-pulse sonar-two" />
      <div className="bubble bubble-one" />
      <div className="bubble bubble-two" />
      <div className="bubble bubble-three" />
      <div className="arctic-wave wave-one" />
      <div className="arctic-wave wave-two" />
    </div>
  );
}
