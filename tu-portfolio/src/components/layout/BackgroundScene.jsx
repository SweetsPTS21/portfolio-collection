export default function BackgroundScene() {
  return (
    <div className="background-scene" aria-hidden="true">
      <div className="background-scene__wash" />
      <div className="background-scene__paper background-scene__paper--left" />
      <div className="background-scene__paper background-scene__paper--right" />
      <div className="background-scene__flower background-scene__flower--one">✿</div>
      <div className="background-scene__flower background-scene__flower--two">✽</div>
      <div className="background-scene__dots background-scene__dots--left" />
      <div className="background-scene__dots background-scene__dots--right" />
    </div>
  );
}
