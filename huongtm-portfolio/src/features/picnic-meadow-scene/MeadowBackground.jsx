import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SkyLayer } from "./SkyLayer";
import { GrassMidLayer } from "./GrassMidLayer";
import { GinghamBlanketLayer } from "./GinghamBlanketLayer";
import { PicnicAssetsLayer } from "./PicnicAssetsLayer";
import { ButterflyDriftLayer } from "../butterfly-bee/ButterflyDriftLayer";

export const MeadowBackground = () => {
  const { scrollY } = useScroll();

  // Fine-tuned parallax values using useTransform
  // Sky shifts down very slowly
  const ySky = useTransform(scrollY, [0, 1000], [0, 80]);
  // Grass shifts up/down moderately
  const yGrass = useTransform(scrollY, [0, 1000], [0, -40]);
  // Blanket shifts slightly faster to emphasize depth
  const yBlanket = useTransform(scrollY, [0, 1000], [0, -110]);

  return (
    <div className="scenic-backdrop">
      {/* Layer 0 (Distant): Sky + Drifting Clouds */}
      <motion.div 
        style={{ y: ySky, position: "absolute", width: "100%", height: "100%" }}
        className="parallax-layer-0"
      >
        <SkyLayer />
      </motion.div>

      {/* Layer 1 (Midground): Grass Hills + Swaying Flowers */}
      <motion.div 
        style={{ y: yGrass, position: "absolute", width: "100%", height: "100%" }}
        className="parallax-layer-1"
      >
        <GrassMidLayer />
      </motion.div>

      {/* Layer 2 (Near): Gingham Picnic Blanket + Basket + 5 Giant Animated Assets */}
      <motion.div 
        style={{ y: yBlanket, position: "absolute", width: "100%", height: "100%" }}
        className="parallax-layer-2"
      >
        <GinghamBlanketLayer />
        <PicnicAssetsLayer />
      </motion.div>

      {/* Layer 3 (Foreground): Flying Butterflies and Bees */}
      <ButterflyDriftLayer />
    </div>
  );
};
