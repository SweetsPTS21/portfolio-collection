import CruiseNav from './CruiseNav.jsx';
import { profile } from '../../data/portfolioData.js';
import lanternSetUrl from '../../assets/sunset-cruise-log/lantern-set.svg';
import cruiseLogIconsUrl from '../../assets/sunset-cruise-log/cruise-log-icons.svg';
import shipSilhouetteUrl from '../../assets/sunset-cruise-log/ship-silhouette.svg';
import skyGradientUrl from '../../assets/sunset-cruise-log/sunset-sky-gradient.svg';
import waveGentleUrl from '../../assets/sunset-cruise-log/wave-gentle.svg';

export default function CruiseShell({ children }) {
  return (
    <div className="cruise-shell">
      <div className="sunset-sky" aria-hidden="true">
        <img className="asset-sky" src={skyGradientUrl} alt="" />
        <span className="cloud cloud--one" />
        <span className="cloud cloud--two" />
        <img className="asset-ship" src={shipSilhouetteUrl} alt="" />
        <img
          className="asset-lantern asset-lantern--left"
          src={lanternSetUrl}
          alt=""
        />
        <img
          className="asset-wave asset-wave--back"
          src={waveGentleUrl}
          alt=""
        />
        <img
          className="asset-wave asset-wave--front"
          src={waveGentleUrl}
          alt=""
        />
      </div>

      <header className="ship-header">
        <div>
          <p className="eyebrow">sunset-cruise-log</p>
          <h1>{profile.name}</h1>
        </div>
        <CruiseNav />
      </header>

      <main className="route-stage">{children}</main>

      <footer className="ship-footer">
        <span className="lantern-dot" aria-hidden="true" />
        {profile.footer}
      </footer>
    </div>
  );
}
