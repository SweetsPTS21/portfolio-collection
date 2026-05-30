import React from 'react';
import { useLocation } from 'react-router-dom';
import { DeskSceneSVG, StickerSheetSVG, SteamingTeaSVG, GiftBoxSVG, SparkleStarSVG } from '../ui/SVGs';
import SakuraPetals from '../ui/SakuraPetals';

export default function StationeryShell() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="stationery-scene" aria-hidden="true">
      {/* Falling Sakura Petals Layer */}
      <SakuraPetals />

      {/* Soft warm light rays from window */}
      <div className="window-light" />

      {/* Parallax / Adaptive 2D Vector Assets based on current route */}
      {path === '/about' || path === '/' ? (
        <>
          <DeskSceneSVG className="scene-asset left-top" />
          <StickerSheetSVG className="scene-asset right-bottom" />
        </>
      ) : path === '/projects' ? (
        <>
          <StickerSheetSVG className="scene-asset left-top" />
          <DeskSceneSVG className="scene-asset right-bottom" />
        </>
      ) : (
        <>
          <SteamingTeaSVG className="scene-asset left-top" />
          <GiftBoxSVG className="scene-asset right-bottom" />
        </>
      )}

      {/* Twinkling ambient sparkles */}
      <SparkleStarSVG className="sparkle-particle sp-a" size={18} />
      <SparkleStarSVG className="sparkle-particle sp-b" size={24} />
      <SparkleStarSVG className="sparkle-particle sp-c" size={20} />
    </div>
  );
}
