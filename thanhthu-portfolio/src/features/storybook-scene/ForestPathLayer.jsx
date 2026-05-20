import enchantedForestPath from '../../assets/storybook-royal-forest/enchanted-forest-path.svg';

export default function ForestPathLayer() {
  return (
    <>
      <div className="forest-line forest-line--back" />
      <div className="forest-line forest-line--front" />
      <img className="scene-asset scene-asset--forest" src={enchantedForestPath} alt="" />
    </>
  );
}
