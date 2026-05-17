import crab from "../../assets/summer-sea-case/crab.svg";
import palmIsland from "../../assets/summer-sea-case/palm-island.svg";
import sandDune from "../../assets/summer-sea-case/sand-dune.svg";
import starfish from "../../assets/summer-sea-case/starfish.svg";
import summerSun from "../../assets/summer-sea-case/summer-sun.svg";
import waveRibbon from "../../assets/summer-sea-case/wave-ribbon.svg";

const backgroundAssets = [
  ["sun", "sun-a", summerSun],
  ["wave", "wave-a", waveRibbon],
  ["palm", "palm-a", palmIsland],
  ["crab", "crab-a", crab],
  ["starfish", "starfish-a", starfish],
  ["sand", "sand-a", sandDune],
  ["wave", "wave-b", waveRibbon],
  ["sun", "sun-b", summerSun],
  ["palm", "palm-b", palmIsland],
  ["starfish", "starfish-b", starfish],
  ["crab", "crab-b", crab],
  ["sand", "sand-b", sandDune],
];

export default function GlobalSummerBackground() {
  return (
    <div className="global-summer-bg" aria-hidden="true">
      {backgroundAssets.map(([type, placement, src], index) => (
        <img
          key={`${type}-${placement}-${index}`}
          className={`global-summer-bg__asset global-summer-bg__asset--${type} global-summer-bg__asset--${placement}`}
          src={src}
          alt=""
        />
      ))}
    </div>
  );
}
