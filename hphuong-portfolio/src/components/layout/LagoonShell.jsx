import LagoonNav from "./LagoonNav.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import { profile } from "../../data/portfolioData.js";
import lagoonMapSceneUrl from "../../assets/lagoon-kayak-adventure/lagoon-map-scene.svg";
import kayakPaddleUrl from "../../assets/lagoon-kayak-adventure/kayak-paddle-set.svg";
import waterRippleUrl from "../../assets/lagoon-kayak-adventure/water-ripple-bubbles.svg";
import tropicalFlowerUrl from "../../assets/lagoon-kayak-adventure/tropical-flower-leaves.svg";
import fishDartUrl from "../../assets/lagoon-kayak-adventure/fish-dart-set.svg";
import seagullCloudUrl from "../../assets/lagoon-kayak-adventure/seagull-cloud-set.svg";
import tropicalSunUrl from "../../assets/lagoon-kayak-adventure/tropical-sun.svg";
import seaTurtleUrl from "../../assets/lagoon-kayak-adventure/sea-turtle.svg";

export default function LagoonShell({ children }) {
  return (
    <div className="lagoon-shell">
      {/* Background Graphic Layers */}
      <div className="lagoon-background" aria-hidden="true">
        {/* Full-bleed background map */}
        <img className="asset-map-bg" src={lagoonMapSceneUrl} alt="" />

        {/* Glowing Tropical Sun */}
        <img className="asset-sun" src={tropicalSunUrl} alt="" />

        {/* Swimming Sea Turtle */}
        <img className="asset-turtle" src={seaTurtleUrl} alt="" />

        {/* Drifting Clouds */}
        <div className="cloud-layer">
          <svg
            viewBox="200 50 150 100"
            className="asset-cloud asset-cloud--one"
          >
            <use href={`${seagullCloudUrl}#cloud-one`} />
            <image
              href={seagullCloudUrl}
              x="0"
              y="0"
              width="400"
              height="200"
            />
          </svg>
          <svg
            viewBox="200 50 150 100"
            className="asset-cloud asset-cloud--two"
          >
            <use href={`${seagullCloudUrl}#cloud-one`} />
            <image
              href={seagullCloudUrl}
              x="0"
              y="0"
              width="400"
              height="200"
            />
          </svg>
        </div>

        {/* Gliding Seagulls */}
        <div className="seagull-layer">
          <svg
            viewBox="30 20 100 100"
            className="asset-seagull asset-seagull--one"
          >
            <use href={`${seagullCloudUrl}#seagull-one`} />
            <image
              href={seagullCloudUrl}
              x="0"
              y="0"
              width="400"
              height="200"
            />
          </svg>
          <svg
            viewBox="150 20 60 60"
            className="asset-seagull asset-seagull--two"
          >
            <use href={`${seagullCloudUrl}#seagull-two`} />
            <image
              href={seagullCloudUrl}
              x="0"
              y="0"
              width="400"
              height="200"
            />
          </svg>
        </div>

        {/* Floating/Bobbing Kayak */}
        <img className="asset-kayak" src={kayakPaddleUrl} alt="" />

        {/* Swaying Tropical Leaves */}
        <img
          className="asset-leaves asset-leaves--top-left"
          src={tropicalFlowerUrl}
          alt=""
        />
        <img
          className="asset-leaves asset-leaves--bottom-right"
          src={tropicalFlowerUrl}
          alt=""
        />

        {/* Bubbles and Ripples */}
        <img
          className="asset-ripples asset-ripples--one"
          src={waterRippleUrl}
          alt=""
        />
        <img
          className="asset-ripples asset-ripples--two"
          src={waterRippleUrl}
          alt=""
        />

        {/* Swimming Fishes */}
        <img className="asset-fish-dart" src={fishDartUrl} alt="" />
      </div>

      {/* Floating Header */}
      <header className="lagoon-header">
        <div className="header-logo">
          <p className="eyebrow">Adventure Portfolio</p>
          <h1>{profile.name}</h1>
        </div>
        <LagoonNav />
      </header>

      {/* Music Player Dock */}
      <div className="player-dock">
        <MusicPlayer />
      </div>

      {/* Primary Page Canvas */}
      <main className="lagoon-canvas">{children}</main>

      {/* Footer */}
      <footer className="lagoon-footer">
        <span className="signal-dot" aria-hidden="true" />
        {profile.footer}
      </footer>
    </div>
  );
}
