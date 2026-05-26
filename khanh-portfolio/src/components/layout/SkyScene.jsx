import React, { useMemo, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import skyLibraryBg from "../../assets/theme/sky-library-bg.png";
import mascotUrl from "../../assets/theme/cloudy-owl-mascot.png";
import cozyCrescentMoon from "../../assets/theme/cozy-crescent-moon.png";
import dreamyBalloon from "../../assets/theme/dreamy-balloon.png";
import floatingBooks from "../../assets/theme/floating-books.png";

export default function SkyScene() {
  const { pathname } = useLocation();
  const sceneRef = useRef(null);

  // Derive variant string without triggering a re-render on route change.
  // Instead we mutate the DOM class directly via useLayoutEffect so React
  // never unmounts/remounts this subtree — the mascot stays composited.
  const initialVariant = pathname.startsWith("/projects")
    ? "projects"
    : pathname.startsWith("/conclusion")
      ? "conclusion"
      : "about";

  useLayoutEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const variant = pathname.startsWith("/projects")
      ? "projects"
      : pathname.startsWith("/conclusion")
        ? "conclusion"
        : "about";
    // Swap only the variant modifier class — no React re-render, no layout flash
    el.className = `sky-scene sky-scene--${variant}`;
  }, [pathname]);

  const cloudClusters = [
    { className: "scene-cloud--one", viewBox: "0 0 100 60" },
    { className: "scene-cloud--two", viewBox: "0 0 100 60" },
    { className: "scene-cloud--three", viewBox: "0 0 100 60" },
    { className: "scene-cloud--four", viewBox: "0 0 120 62" },
  ];

  const stars = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => {
      const top = (index * 37 + 11) % 96;
      const left = (index * 53 + 7) % 98;
      const size = 2 + (index % 4);
      const delay = (index % 7) * 0.42;
      const palette = ["#ffffff", "#ffe27a", "#8aeed2", "#ffd6f0"];

      return {
        id: index,
        top,
        left,
        size,
        delay,
        color: palette[index % palette.length],
      };
    });
  }, []);

  return (
    <div ref={sceneRef} className={`sky-scene sky-scene--${initialVariant}`}>
      <div className="sky-gradient-field" aria-hidden="true" />
      <div className="scene-glow scene-glow--library" aria-hidden="true" />
      <div className="scene-glow scene-glow--content" aria-hidden="true" />
      <div className="scene-glow scene-glow--warm" aria-hidden="true" />

      <img src={skyLibraryBg} className="sky-library-bg-img" alt="" aria-hidden="true" />

      <div className="cloud-band cloud-band--back" aria-hidden="true" />
      <div className="cloud-band cloud-band--front" aria-hidden="true" />

      {cloudClusters.map((cloud) => (
        <div key={cloud.className} className={`scene-cloud ${cloud.className}`} aria-hidden="true">
          <svg viewBox={cloud.viewBox} fill="none">
            <path
              d="M14 43C14 33.1 22.1 25 32 25C36.4 15.3 48.1 10.8 58.1 14.7C63.7 16.9 68.1 21.2 70.6 26.5C79.9 24.7 89 31.8 89 41.3C89 50 81.9 54 72 54H30.5C21.2 54 14 50.6 14 43Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}

      <div className="scene-particle-layer" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="scene-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              backgroundColor: star.color,
              color: star.color,
            }}
          />
        ))}
      </div>

      <img src={cozyCrescentMoon} className="scene-moon" alt="" aria-hidden="true" />
      <img src={dreamyBalloon} className="scene-balloon" alt="" aria-hidden="true" />
      <img
        src={floatingBooks}
        className="scene-flying-books scene-flying-books--one"
        alt=""
        aria-hidden="true"
      />
      <img
        src={floatingBooks}
        className="scene-flying-books scene-flying-books--two"
        alt=""
        aria-hidden="true"
      />
      <img
        src={floatingBooks}
        className="scene-flying-books scene-flying-books--three"
        alt=""
        aria-hidden="true"
      />
      <img src={mascotUrl} className="scene-owl-mascot" alt="" aria-hidden="true" />
    </div>
  );
}
