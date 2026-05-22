import OceanDiaryNav from "./OceanDiaryNav.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import { profile } from "../../data/portfolioData.js";
import bottleMessageUrl from "../../assets/ocean-wave-diary/bottle-message.svg";
import cuteCrabUrl from "../../assets/ocean-wave-diary/cute-crab.svg";
import foamDotsPatternUrl from "../../assets/ocean-wave-diary/foam-dots-pattern.svg";
import pinkCloudClustersUrl from "../../assets/ocean-wave-diary/pink-cloud-clusters.svg";
import seagullSilhouetteUrl from "../../assets/ocean-wave-diary/seagull-silhouette.svg";
import shorelineSandSceneUrl from "../../assets/ocean-wave-diary/shoreline-sand-scene.svg";
import sunReflectionRibbonUrl from "../../assets/ocean-wave-diary/sun-reflection-ribbon.svg";
import sunsetSkyPanoramaUrl from "../../assets/ocean-wave-diary/sunset-sky-panorama.svg";
import waveLayersSunsetUrl from "../../assets/ocean-wave-diary/wave-layers-sunset.svg";

export default function OceanDiaryShell({ children }) {
  return (
    <div className="ocean-diary-shell">
      <div className="ocean-scene" aria-hidden="true">
        <img className="asset-sky" src={sunsetSkyPanoramaUrl} alt="" />
        <img className="asset-clouds asset-clouds--one" src={pinkCloudClustersUrl} alt="" />
        <img className="asset-clouds asset-clouds--two" src={pinkCloudClustersUrl} alt="" />
        <img className="asset-seagull" src={seagullSilhouetteUrl} alt="" />
        <img className="asset-reflection" src={sunReflectionRibbonUrl} alt="" />
        <img className="asset-foam" src={foamDotsPatternUrl} alt="" />
        <img className="asset-wave asset-wave--back" src={waveLayersSunsetUrl} alt="" />
        <img className="asset-wave asset-wave--front" src={waveLayersSunsetUrl} alt="" />
        <img className="asset-shore" src={shorelineSandSceneUrl} alt="" />
        <img className="asset-crab" src={cuteCrabUrl} alt="" />
        <img className="asset-bottle" src={bottleMessageUrl} alt="" />
      </div>

      <header className="diary-header">
        <div>
          <p className="eyebrow">ocean-wave-diary</p>
          <h1>{profile.name}</h1>
        </div>
        <OceanDiaryNav />
      </header>

      <div className="player-dock">
        <MusicPlayer />
      </div>

      <main className="route-stage">{children}</main>

      <footer className="diary-footer">
        <span className="sun-dot" aria-hidden="true" />
        {profile.footer}
      </footer>
    </div>
  );
}
