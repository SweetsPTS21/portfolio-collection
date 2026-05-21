import { useMemo } from 'react';
import mushroomCluster from '../../assets/fairy-mushroom-forest/mushroom-cluster.svg';
import forestTreesSilhouette from '../../assets/fairy-mushroom-forest/forest-trees-silhouette.svg';
import moonbeamRays from '../../assets/fairy-mushroom-forest/moonbeam-rays.svg';
import mossPattern from '../../assets/fairy-mushroom-forest/moss-pattern.svg';
import forestFloor from '../../assets/fairy-mushroom-forest/forest-floor.svg';
import mushroomHouse from '../../assets/fairy-mushroom-forest/mushroom-house.svg';
import canopyTop from '../../assets/fairy-mushroom-forest/canopy-top.svg';
import grassFlowers from '../../assets/fairy-mushroom-forest/grass-flowers.svg';
import skyClouds from '../../assets/fairy-mushroom-forest/sky-clouds.svg';
import fairyFlying from '../../assets/fairy-mushroom-forest/fairy-flying.svg';

export default function ForestScene() {
  const fireflies = useMemo(() =>
    Array.from({ length: 45 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${2.5 + Math.random() * 4}s`,
      size: 3 + Math.random() * 5,
    })), []);

  const fallingLeaves = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      left: `${5 + Math.random() * 90}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${8 + Math.random() * 6}s`,
      size: 8 + Math.random() * 10,
      color: ['#34D399', '#FBBF24', '#2DD4BF', '#86EFAC'][Math.floor(Math.random() * 4)],
    })), []);

  return (
    <div className="forest-scene" aria-hidden="true">
      {/* Layer 1: Sky gradient */}
      <div className="forest-layer forest-sky" />

      {/* Layer 2: Clouds (drift animation) */}
      <img src={skyClouds} alt="" className="forest-clouds" />

      {/* Layer 3: Moonbeam rays */}
      <img src={moonbeamRays} alt="" className="forest-moonbeam" />

      {/* Layer 4: Moss pattern */}
      <img src={mossPattern} alt="" className="forest-moss" />

      {/* Layer 5: Tree silhouettes */}
      <img src={forestTreesSilhouette} alt="" className="forest-trees" />

      {/* Layer 6: Canopy hanging from top */}
      <img src={canopyTop} alt="" className="forest-canopy" />

      {/* Layer 7: Giant mushroom cluster - left */}
      <img src={mushroomCluster} alt="" className="forest-mushroom-left" />

      {/* Layer 8: Mushroom house - right */}
      <img src={mushroomHouse} alt="" className="forest-mushroom-right" />

      {/* Layer 9: Mist */}
      <div className="forest-layer forest-mist" />

      {/* Layer 10: Grass & flowers foreground */}
      <img src={grassFlowers} alt="" className="forest-grass" />

      {/* Layer 11: Forest floor */}
      <img src={forestFloor} alt="" className="forest-floor-img" />

      {/* Fireflies (50+) */}
      {fireflies.map((f, i) => (
        <div
          key={`ff-${i}`}
          className="firefly"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            animationDelay: f.animationDelay,
            animationDuration: f.animationDuration,
          }}
        />
      ))}

      {/* Falling leaves */}
      {fallingLeaves.map((l, i) => (
        <div
          key={`leaf-${i}`}
          className="falling-leaf"
          style={{
            left: l.left,
            animationDelay: l.animationDelay,
            animationDuration: l.animationDuration,
            width: l.size,
            height: l.size,
            background: l.color,
          }}
        />
      ))}

      {/* Fairy flying */}
      <img src={fairyFlying} alt="" className="forest-fairy" />
    </div>
  );
}
