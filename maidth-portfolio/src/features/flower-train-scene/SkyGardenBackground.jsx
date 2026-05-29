import skyGarden from "../../assets/dreamy-flower-train/sky-garden-panorama.svg";
import cloudStation from "../../assets/dreamy-flower-train/cloud-station-set.svg";

export function SkyGardenBackground() {
  return (
    <div className="sky-garden-background" aria-hidden="true">
      <img className="sky-panorama" src={skyGarden} alt="" />
      <img className="cloud-station station-left" src={cloudStation} alt="" />
      <img className="cloud-station station-right" src={cloudStation} alt="" />
      <div className="aurora-glow one" />
      <div className="aurora-glow two" />
    </div>
  );
}

