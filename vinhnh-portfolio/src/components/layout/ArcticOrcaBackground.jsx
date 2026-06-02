export default function ArcticOrcaBackground() {
  const assetRoot = '/assets/arctic-orca-expedition';

  return (
    <div className="arctic-orca-background" aria-hidden="true">
      <img
        className="background-asset polar-sky"
        src={`${assetRoot}/polar-sky-gradient.svg`}
        alt=""
      />
      <img
        className="background-asset iceberg iceberg-one"
        src={`${assetRoot}/iceberg-field-large.svg`}
        alt=""
      />
      <img
        className="background-asset iceberg iceberg-two"
        src={`${assetRoot}/iceberg-field-large.svg`}
        alt=""
      />
      <img
        className="background-asset orca orca-swim"
        src={`${assetRoot}/orca-swim-path.png`}
        alt=""
      />
      <img
        className="background-asset submarine"
        src={`${assetRoot}/mini-submarine.png`}
        alt=""
      />
      <img
        className="background-asset sonar sonar-pulse"
        src={`${assetRoot}/sonar-buoy.svg`}
        alt=""
      />
      <img
        className="background-asset sonar sonar-pulse sonar-two"
        src={`${assetRoot}/sonar-buoy.svg`}
        alt=""
      />
      <img
        className="background-asset compass-route-map"
        src={`${assetRoot}/compass-route-map.svg`}
        alt=""
      />
      <img
        className="background-asset bubble-trail bubble-one"
        src={`${assetRoot}/bubble-trail.svg`}
        alt=""
      />
      <img
        className="background-asset bubble-trail bubble-two"
        src={`${assetRoot}/bubble-trail.svg`}
        alt=""
      />
      <img
        className="background-asset ice-lighthouse"
        src={`${assetRoot}/ice-lighthouse.svg`}
        alt=""
      />
      <div className="arctic-wave wave-one" />
      <div className="arctic-wave wave-two" />
    </div>
  );
}
