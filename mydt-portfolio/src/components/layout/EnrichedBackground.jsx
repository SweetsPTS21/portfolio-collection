// src/components/layout/EnrichedBackground.jsx
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  LargeFloatingLawScroll,
  LargeOpenBookSilhouette,
  DigitalInkWave,
  MusicNotesCluster,
  AcademicSealOrbiter,
  HeadphoneSticker,
} from "../ui/SvgSceneLayer";

export function EnrichedBackground() {
  const [mouseActive, setMouseActive] = useState(false);

  // Setup motion values for cursor coordinate tracking
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-damped dynamics for smooth parallax (stiffness 50, damping 15)
  const springX = useSpring(rawX, { stiffness: 50, damping: 15 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 15 });

  useEffect(() => {
    // Disable parallax tracking on touch-first mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setMouseActive(true);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Map absolute pixel positions to relative viewport offsets (-0.5 to 0.5)
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;
      rawX.set(x);
      rawY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  // Layer 1 Midground parallax — subtle drift (×8)
  const bgX = useTransform(springX, (val) => (mouseActive ? val * -8 : 0));
  const bgY = useTransform(springY, (val) => (mouseActive ? val * -8 : 0));

  // Layer 2 Foreground parallax — stronger drift (×25)
  const fgX = useTransform(springX, (val) => (mouseActive ? val * 25 : 0));
  const fgY = useTransform(springY, (val) => (mouseActive ? val * 25 : 0));

  return (
    <div
      className="enrichedBackgroundContainer"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ==================================================================
          LAYER 0: STATIC SKY BASE
          Sky gradient, sunbeam sweep, clouds, diary grid lines
          ================================================================== */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "100%",
          height: "100vh",
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -3,
        }}
        aria-hidden="true"
      >
        <defs>
          {/* Main sky gradient — distinctly blue-to-mist to separate from flat body bg */}
          <linearGradient id="enrichSkyGrad" x1="0%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#C8E6FF" />
            <stop offset="35%" stopColor="#EAF4FF" />
            <stop offset="70%" stopColor="#F5FAFF" />
            <stop offset="100%" stopColor="#B2D8F5" />
          </linearGradient>

          {/* Soft glow filter for sun rays */}
          <filter id="sunRayGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sky base fill */}
        <rect width="1440" height="900" fill="url(#enrichSkyGrad)" />

        {/* Ambient sunbeam sweeps — slow CSS animation */}
        <g className="sunbeamArea" opacity="0.55">
          <path
            d="M 0,0 L 380,900 L 180,900 Z"
            fill="#FFFFFF"
            opacity="0.3"
            filter="url(#sunRayGlow)"
          />
          <path
            d="M 0,0 L 820,900 L 620,900 Z"
            fill="#FFFFFF"
            opacity="0.2"
            filter="url(#sunRayGlow)"
          />
          <path
            d="M 0,0 L 1200,900 L 1020,900 Z"
            fill="#FFFFFF"
            opacity="0.15"
            filter="url(#sunRayGlow)"
          />
        </g>

        {/* Drifting clouds */}
        <g opacity="0.7">
          {/* Cloud A — slow */}
          <path
            className="skyCloud cloudSlow"
            d="M 80,180 C 110,150 170,150 195,180 C 218,168 265,180 265,215 C 265,245 80,245 80,215 Z"
            fill="#FFFFFF"
          />
          {/* Cloud B — medium speed */}
          <path
            className="skyCloud cloudMedium"
            d="M 1150,100 C 1170,78 1215,78 1235,100 C 1255,88 1295,100 1295,125 C 1295,148 1150,148 1150,125 Z"
            fill="#FFFFFF"
          />
          {/* Cloud C — fast, small */}
          <path
            className="skyCloud cloudFast"
            d="M 600,60 C 614,44 642,44 655,60 C 668,52 690,60 690,76 C 690,92 600,92 600,76 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </g>

        {/* Diary / legal notebook grid lines */}
        <g stroke="var(--lan-sky)" strokeWidth="0.6" opacity="0.22">
          <line x1="0" y1="180" x2="1440" y2="180" />
          <line x1="0" y1="360" x2="1440" y2="360" />
          <line x1="0" y1="540" x2="1440" y2="540" />
          <line x1="0" y1="720" x2="1440" y2="720" />
        </g>

        {/* Tiny ambient sparkle dots (static) */}
        <circle
          cx="180"
          cy="480"
          r="2.5"
          fill="var(--lan-blue-soft)"
          opacity="0.35"
          className="noteFloat floatY1"
        />
        <circle
          cx="920"
          cy="210"
          r="3.5"
          fill="var(--lan-mint)"
          opacity="0.4"
          className="noteFloat floatY2"
        />
        <circle
          cx="1320"
          cy="640"
          r="2"
          fill="var(--lan-blue)"
          opacity="0.3"
          className="noteFloat floatY3"
        />
        <circle
          cx="400"
          cy="720"
          r="1.8"
          fill="var(--lan-sky)"
          opacity="0.35"
          className="noteFloat floatY1"
        />
      </svg>

      {/* ==================================================================
          LAYER 1: MIDGROUND PARALLAX (bgX/bgY — spring ×8)
          Asset 1: LargeFloatingLawScroll (top-left)
          Asset 2: LargeOpenBookSilhouette (top-right)
          Asset 3: DigitalInkWave (bottom-center)
          ================================================================== */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          x: bgX,
          y: bgY,
        }}
      >
        {/* Asset 1 — Law Scroll, top-left */}
        <div
          className="bgScrollWrapper"
          style={{
            position: "absolute",
            top: "10%",
            left: "2.5%",
            opacity: 0.78,
            width: "160px",
          }}
        >
          <LargeFloatingLawScroll style={{ width: "160px", height: "220px" }} />
        </div>

        {/* Asset 2 — Open Book, top-right */}
        <div
          className="bgBook"
          style={{
            position: "absolute",
            top: "7%",
            right: "3%",
            opacity: 0.72,
            width: "200px",
          }}
        >
          <LargeOpenBookSilhouette />
        </div>

        {/* Asset 3 — Digital Ink Wave, mid-page center (in viewport) */}
        <div
          className="bgInkWaveWrapper"
          style={{
            position: "absolute",
            top: "55%",
            left: "28%",
            opacity: 0.85,
            width: "360px",
          }}
        >
          <DigitalInkWave />
        </div>

        {/* Second ink wave — upper area, mirrored */}
        <div
          className="bgInkWaveWrapper"
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            opacity: 0.5,
            width: "260px",
            transform: "scaleX(-1)",
          }}
        >
          <DigitalInkWave />
        </div>
      </motion.div>

      {/* ==================================================================
          LAYER 2: FOREGROUND PARALLAX (fgX/fgY — spring ×25)
          Asset 4: MusicNotesCluster (top-left area)
          Asset 5: AcademicSealOrbiter (mid-right)
          Asset 6: HeadphoneSticker (bottom-right)
          ================================================================== */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          x: fgX,
          y: fgY,
        }}
      >
        {/* Asset 4 — Music Notes Cluster, foreground top-left */}
        <div
          className="bgMusicNotes"
          style={{
            position: "absolute",
            top: "16%",
            left: "7%",
            opacity: 0.82,
            width: "160px",
          }}
        >
          <MusicNotesCluster />
        </div>

        {/* Additional smaller music note cluster — upper right center */}
        <div
          className="bgMusicNotes"
          style={{
            position: "absolute",
            top: "22%",
            left: "55%",
            opacity: 0.5,
            width: "80px",
            transform: "scale(0.55) rotate(10deg)",
            transformOrigin: "top left",
          }}
        >
          <MusicNotesCluster />
        </div>

        {/* Asset 5 — Academic Seal Orbiter, mid-right foreground */}
        <div
          className="bgSealWrapper"
          style={{
            position: "absolute",
            top: "33%",
            right: "5%",
            opacity: 0.72,
            width: "120px",
            height: "120px",
          }}
        >
          <AcademicSealOrbiter />
        </div>

        {/* Asset 6 — Headphone Sticker, lower-right but in viewport */}
        <div
          className="bgHeadphoneWrapper"
          style={{
            position: "absolute",
            top: "58%",
            right: "6%",
            opacity: 0.75,
            width: "110px",
          }}
        >
          <HeadphoneSticker />
        </div>
      </motion.div>
    </div>
  );
}
