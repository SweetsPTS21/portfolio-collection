import { SkyGardenBackground } from "../../features/flower-train-scene/SkyGardenBackground";
import { FlowerTrainLayer } from "../../features/flower-train-scene/FlowerTrainLayer";
import { RainbowLilacRailDraw } from "../../features/flower-train-scene/RainbowLilacRailDraw";
import { PetalSmokeLayer } from "../../features/flower-train-scene/PetalSmokeLayer";
import { TrainNav } from "./TrainNav";

export function GlassPageShell({ activePath, onNavigate, children }) {
  return (
    <div className="app-shell">
      <SkyGardenBackground />
      <RainbowLilacRailDraw />
      <PetalSmokeLayer />
      <FlowerTrainLayer activePath={activePath} />
      <TrainNav activePath={activePath} onNavigate={onNavigate} />
      <main className="page-stage">{children}</main>
    </div>
  );
}

