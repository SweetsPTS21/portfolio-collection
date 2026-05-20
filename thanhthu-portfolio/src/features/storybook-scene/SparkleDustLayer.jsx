import sparkleDustParticles from '../../assets/storybook-royal-forest/sparkle-dust-particles.svg';

export default function SparkleDustLayer() {
  return (
    <>
      <img className="scene-asset scene-asset--sparkles" src={sparkleDustParticles} alt="" />
      {Array.from({ length: 18 }, (_, index) => (
        <i className={`sparkle sparkle--${(index % 6) + 1}`} key={index} />
      ))}
    </>
  );
}
