import OpenBookBackground from '../../features/storybook-scene/OpenBookBackground.jsx';
import CastleSilhouette from '../../features/storybook-scene/CastleSilhouette.jsx';
import ForestPathLayer from '../../features/storybook-scene/ForestPathLayer.jsx';
import SparkleDustLayer from '../../features/storybook-scene/SparkleDustLayer.jsx';
import royalMascotPair from '../../assets/storybook-royal-forest/royal-mascot-pair.svg';
import storybookIcons from '../../assets/storybook-royal-forest/storybook-icons.svg';
import StorybookNav from './StorybookNav.jsx';

export default function StorybookShell({ children, routeIds }) {
  return (
    <div className="storybook-app" data-routes={routeIds}>
      <div className="storybook-bg" aria-hidden="true">
        <OpenBookBackground />
        <CastleSilhouette />
        <ForestPathLayer />
        <SparkleDustLayer />
        <img
          className="scene-asset scene-asset--royal-couple"
          src={royalMascotPair}
          alt=""
        />
      </div>
      <StorybookNav />
      {children}
    </div>
  );
}
