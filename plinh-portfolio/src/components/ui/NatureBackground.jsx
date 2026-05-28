import React from 'react';

import canopyTopLeft from '../../assets/botanical/background/canopy-top-left.svg';
import canopyTopRight from '../../assets/botanical/background/canopy-top-right.svg';
import vineColumnLeft from '../../assets/botanical/background/vine-column-left.svg';
import vineColumnRight from '../../assets/botanical/background/vine-column-right.svg';
import leafCluster1 from '../../assets/botanical/background/leaf-cluster-1.svg';
import leafCluster2 from '../../assets/botanical/background/leaf-cluster-2.svg';
import pressedFlower from '../../assets/botanical/background/pressed-flower.svg';
import seedPod from '../../assets/botanical/background/seed-pod.svg';
import sunRayMask from '../../assets/botanical/background/sun-ray-mask.svg';
import paperSpeckles from '../../assets/botanical/background/paper-speckles.svg';
import butterflyWhite from '../../assets/botanical/background/butterfly-white.svg';
import butterflyGold from '../../assets/botanical/background/butterfly-gold.svg';

const FALLING_LEAVES = [
  { id: 'leaf-01', asset: leafCluster1, left: 2, size: 48, delay: -4, duration: 24, drift: 86, spin: 32, opacity: 0.34 },
  { id: 'leaf-02', asset: leafCluster2, left: 9, size: 34, delay: -16, duration: 31, drift: 116, spin: -42, opacity: 0.3 },
  { id: 'leaf-03', asset: seedPod, left: 15, size: 36, delay: -8, duration: 28, drift: 72, spin: 24, opacity: 0.28 },
  { id: 'leaf-04', asset: leafCluster1, left: 22, size: 58, delay: -19, duration: 34, drift: 128, spin: -36, opacity: 0.24 },
  { id: 'leaf-05', asset: leafCluster2, left: 29, size: 42, delay: -11, duration: 22, drift: 90, spin: 48, opacity: 0.32 },
  { id: 'leaf-06', asset: pressedFlower, left: 35, size: 40, delay: -27, duration: 33, drift: 104, spin: -28, opacity: 0.23 },
  { id: 'leaf-07', asset: leafCluster1, left: 41, size: 32, delay: -7, duration: 20, drift: 66, spin: 38, opacity: 0.31 },
  { id: 'leaf-08', asset: seedPod, left: 47, size: 46, delay: -22, duration: 29, drift: 132, spin: -30, opacity: 0.26 },
  { id: 'leaf-09', asset: leafCluster2, left: 53, size: 54, delay: -13, duration: 32, drift: 84, spin: 44, opacity: 0.29 },
  { id: 'leaf-10', asset: leafCluster1, left: 59, size: 38, delay: -25, duration: 23, drift: 118, spin: -54, opacity: 0.34 },
  { id: 'leaf-11', asset: pressedFlower, left: 64, size: 44, delay: -9, duration: 30, drift: 74, spin: 26, opacity: 0.22 },
  { id: 'leaf-12', asset: leafCluster2, left: 70, size: 35, delay: -18, duration: 21, drift: 110, spin: -40, opacity: 0.31 },
  { id: 'leaf-13', asset: seedPod, left: 76, size: 48, delay: -6, duration: 27, drift: 96, spin: 36, opacity: 0.25 },
  { id: 'leaf-14', asset: leafCluster1, left: 82, size: 52, delay: -21, duration: 35, drift: 138, spin: -34, opacity: 0.28 },
  { id: 'leaf-15', asset: leafCluster2, left: 88, size: 40, delay: -12, duration: 26, drift: 78, spin: 52, opacity: 0.33 },
  { id: 'leaf-16', asset: pressedFlower, left: 94, size: 36, delay: -29, duration: 31, drift: 112, spin: -24, opacity: 0.22 },
  { id: 'leaf-17', asset: leafCluster1, left: 5, size: 30, delay: -32, duration: 18, drift: 62, spin: 45, opacity: 0.26 },
  { id: 'leaf-18', asset: seedPod, left: 18, size: 42, delay: -3, duration: 25, drift: 124, spin: -32, opacity: 0.24 },
  { id: 'leaf-19', asset: leafCluster2, left: 31, size: 50, delay: -30, duration: 36, drift: 102, spin: 30, opacity: 0.21 },
  { id: 'leaf-20', asset: leafCluster1, left: 44, size: 45, delay: -15, duration: 27, drift: 88, spin: -48, opacity: 0.3 },
  { id: 'leaf-21', asset: pressedFlower, left: 57, size: 33, delay: -24, duration: 24, drift: 136, spin: 34, opacity: 0.24 },
  { id: 'leaf-22', asset: leafCluster2, left: 68, size: 57, delay: -5, duration: 34, drift: 94, spin: -36, opacity: 0.23 },
  { id: 'leaf-23', asset: seedPod, left: 79, size: 39, delay: -17, duration: 22, drift: 118, spin: 40, opacity: 0.27 },
  { id: 'leaf-24', asset: leafCluster1, left: 91, size: 49, delay: -10, duration: 29, drift: 80, spin: -44, opacity: 0.29 }
];

const POLLEN_PARTICLES = [
  { id: 'pollen-01', left: 6, size: 5, delay: -2, duration: 12, drift: 34, opacity: 0.38 },
  { id: 'pollen-02', left: 12, size: 3, delay: -8, duration: 18, drift: -28, opacity: 0.32 },
  { id: 'pollen-03', left: 18, size: 6, delay: -13, duration: 20, drift: 52, opacity: 0.28 },
  { id: 'pollen-04', left: 25, size: 4, delay: -5, duration: 15, drift: -42, opacity: 0.36 },
  { id: 'pollen-05', left: 33, size: 5, delay: -16, duration: 21, drift: 44, opacity: 0.3 },
  { id: 'pollen-06', left: 41, size: 3, delay: -9, duration: 13, drift: -30, opacity: 0.34 },
  { id: 'pollen-07', left: 49, size: 6, delay: -1, duration: 19, drift: 58, opacity: 0.26 },
  { id: 'pollen-08', left: 56, size: 4, delay: -14, duration: 17, drift: -46, opacity: 0.35 },
  { id: 'pollen-09', left: 63, size: 5, delay: -6, duration: 22, drift: 38, opacity: 0.3 },
  { id: 'pollen-10', left: 70, size: 3, delay: -19, duration: 14, drift: -26, opacity: 0.38 },
  { id: 'pollen-11', left: 77, size: 6, delay: -11, duration: 20, drift: 48, opacity: 0.26 },
  { id: 'pollen-12', left: 84, size: 4, delay: -3, duration: 16, drift: -36, opacity: 0.34 },
  { id: 'pollen-13', left: 90, size: 5, delay: -17, duration: 21, drift: 42, opacity: 0.28 },
  { id: 'pollen-14', left: 96, size: 3, delay: -7, duration: 13, drift: -32, opacity: 0.32 }
];

const FLYING_BUTTERFLIES = [
  { id: 'butterfly-01', asset: butterflyWhite, left: 8, top: 20, size: 68, delay: -3, duration: 18, x1: 24, y1: -18, x2: 86, y2: 22, x3: 42, y3: 48, x4: 124, y4: 6, bank1: 18, bank2: -16, bank3: 10, opacity: 0.74 },
  { id: 'butterfly-02', asset: butterflyGold, left: 19, top: 68, size: 55, delay: -11, duration: 22, x1: 32, y1: -46, x2: 116, y2: -18, x3: 78, y3: 24, x4: 148, y4: -62, bank1: -14, bank2: 20, bank3: -8, opacity: 0.66 },
  { id: 'butterfly-03', asset: butterflyWhite, left: 31, top: 34, size: 44, delay: -7, duration: 20, x1: -26, y1: -32, x2: -78, y2: 18, x3: -42, y3: 50, x4: -118, y4: 8, bank1: -18, bank2: 14, bank3: -12, opacity: 0.62 },
  { id: 'butterfly-04', asset: butterflyGold, left: 46, top: 16, size: 62, delay: -15, duration: 24, x1: 38, y1: 24, x2: 92, y2: -28, x3: 44, y3: 64, x4: 116, y4: 42, bank1: 16, bank2: -20, bank3: 12, opacity: 0.64 },
  { id: 'butterfly-05', asset: butterflyWhite, left: 58, top: 76, size: 49, delay: -5, duration: 21, x1: -34, y1: -54, x2: -94, y2: -14, x3: -62, y3: -72, x4: -138, y4: -48, bank1: -16, bank2: 18, bank3: -10, opacity: 0.6 },
  { id: 'butterfly-06', asset: butterflyGold, left: 72, top: 42, size: 73, delay: -13, duration: 23, x1: -44, y1: 28, x2: -120, y2: -18, x3: -84, y3: 56, x4: -154, y4: 34, bank1: 18, bank2: -18, bank3: 8, opacity: 0.68 },
  { id: 'butterfly-07', asset: butterflyWhite, left: 84, top: 24, size: 57, delay: -9, duration: 19, x1: -24, y1: -22, x2: -86, y2: 18, x3: -38, y3: 44, x4: -128, y4: -16, bank1: -14, bank2: 20, bank3: -12, opacity: 0.65 },
  { id: 'butterfly-08', asset: butterflyGold, left: 91, top: 64, size: 47, delay: -17, duration: 26, x1: -42, y1: -36, x2: -126, y2: 8, x3: -84, y3: -64, x4: -160, y4: -42, bank1: -18, bank2: 16, bank3: -10, opacity: 0.58 }
];

const PRESSED_SPECIMENS = [
  { id: 'pressed-01', asset: pressedFlower, left: 5, top: 18, size: 138, delay: -8, duration: 24, opacity: 0.13, rotate: -12 },
  { id: 'pressed-02', asset: seedPod, left: 86, top: 16, size: 130, delay: -14, duration: 28, opacity: 0.14, rotate: 10 },
  { id: 'pressed-03', asset: leafCluster1, left: 10, top: 62, size: 168, delay: -5, duration: 30, opacity: 0.11, rotate: 16 },
  { id: 'pressed-04', asset: leafCluster2, left: 78, top: 58, size: 180, delay: -18, duration: 26, opacity: 0.12, rotate: -18 },
  { id: 'pressed-05', asset: pressedFlower, left: 44, top: 12, size: 104, delay: -11, duration: 22, opacity: 0.08, rotate: 8 },
  { id: 'pressed-06', asset: seedPod, left: 48, top: 74, size: 116, delay: -20, duration: 32, opacity: 0.09, rotate: -6 }
];

const EDGE_CLUSTERS = [
  { id: 'edge-01', asset: leafCluster1, className: 'nature-bg__edge nature-bg__edge--left-top' },
  { id: 'edge-02', asset: leafCluster2, className: 'nature-bg__edge nature-bg__edge--right-mid' },
  { id: 'edge-03', asset: seedPod, className: 'nature-bg__edge nature-bg__edge--left-bottom' }
];

export default function NatureBackground() {
  return (
    <div className="nature-bg" aria-hidden="true">
      <div className="nature-bg__paper" style={{ backgroundImage: `url(${paperSpeckles})` }} />
      <div className="nature-bg__wash" />
      <div className="nature-bg__sun-rays" style={{ backgroundImage: `url(${sunRayMask})` }} />

      <img className="nature-bg__canopy nature-bg__canopy--left" src={canopyTopLeft} alt="" draggable="false" />
      <img className="nature-bg__canopy nature-bg__canopy--right" src={canopyTopRight} alt="" draggable="false" />
      <img className="nature-bg__vine nature-bg__vine--left" src={vineColumnLeft} alt="" draggable="false" />
      <img className="nature-bg__vine nature-bg__vine--right" src={vineColumnRight} alt="" draggable="false" />

      {EDGE_CLUSTERS.map((cluster) => (
        <img key={cluster.id} className={cluster.className} src={cluster.asset} alt="" draggable="false" />
      ))}

      {PRESSED_SPECIMENS.map((specimen) => (
        <img
          key={specimen.id}
          className="nature-bg__pressed"
          src={specimen.asset}
          alt=""
          draggable="false"
          style={{
            '--left': `${specimen.left}%`,
            '--top': `${specimen.top}%`,
            '--size': `${specimen.size}px`,
            '--delay': `${specimen.delay}s`,
            '--duration': `${specimen.duration}s`,
            '--opacity': specimen.opacity,
            '--rotate': `${specimen.rotate}deg`
          }}
        />
      ))}

      {POLLEN_PARTICLES.map((pollen) => (
        <span
          key={pollen.id}
          className="nature-bg__pollen"
          style={{
            '--left': `${pollen.left}%`,
            '--size': `${pollen.size}px`,
            '--delay': `${pollen.delay}s`,
            '--duration': `${pollen.duration}s`,
            '--drift': `${pollen.drift}px`,
            '--opacity': pollen.opacity
          }}
        />
      ))}

      {FLYING_BUTTERFLIES.map((butterfly) => (
        <span
          key={butterfly.id}
          className="nature-bg__butterfly-flight"
          style={{
            '--left': `${butterfly.left}%`,
            '--top': `${butterfly.top}%`,
            '--size': `${butterfly.size}px`,
            '--delay': `${butterfly.delay}s`,
            '--duration': `${butterfly.duration}s`,
            '--x1': `${butterfly.x1}px`,
            '--y1': `${butterfly.y1}px`,
            '--x2': `${butterfly.x2}px`,
            '--y2': `${butterfly.y2}px`,
            '--x3': `${butterfly.x3}px`,
            '--y3': `${butterfly.y3}px`,
            '--x4': `${butterfly.x4}px`,
            '--y4': `${butterfly.y4}px`,
            '--bank-1': `${butterfly.bank1}deg`,
            '--bank-2': `${butterfly.bank2}deg`,
            '--bank-3': `${butterfly.bank3}deg`,
            '--opacity': butterfly.opacity
          }}
        >
          <img className="nature-bg__butterfly" src={butterfly.asset} alt="" draggable="false" />
        </span>
      ))}

      {FALLING_LEAVES.map((leaf) => (
        <img
          key={leaf.id}
          className="nature-bg__leaf"
          src={leaf.asset}
          alt=""
          draggable="false"
          style={{
            '--left': `${leaf.left}%`,
            '--size': `${leaf.size}px`,
            '--delay': `${leaf.delay}s`,
            '--duration': `${leaf.duration}s`,
            '--drift': `${leaf.drift}px`,
            '--spin': `${leaf.spin}deg`,
            '--opacity': leaf.opacity
          }}
        />
      ))}
    </div>
  );
}
