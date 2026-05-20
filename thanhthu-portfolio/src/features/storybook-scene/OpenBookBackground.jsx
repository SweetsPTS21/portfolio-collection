import openBookScene from '../../assets/storybook-royal-forest/open-storybook-scene.svg';

export default function OpenBookBackground() {
  return (
    <>
      <div className="moon-glow" />
      <img className="scene-asset scene-asset--book" src={openBookScene} alt="" />
    </>
  );
}
