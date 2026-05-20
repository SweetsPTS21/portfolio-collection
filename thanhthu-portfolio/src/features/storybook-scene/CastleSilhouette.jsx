import castleSilhouetteSet from '../../assets/storybook-royal-forest/castle-silhouette-set.svg';

export default function CastleSilhouette() {
  return (
    <>
      <div className="castle-silhouette">
        <span />
        <span />
        <span />
      </div>
      <img className="scene-asset scene-asset--castle" src={castleSilhouetteSet} alt="" />
    </>
  );
}
