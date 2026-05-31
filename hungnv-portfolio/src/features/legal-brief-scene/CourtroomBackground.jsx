import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import balanceScale from "../../assets/azure-courtroom-brief/balance-scale-blue.svg";
import particlesAsset from "../../assets/azure-courtroom-brief/paper-motion-particles.svg";

// Import the 5 brand new high-opacity courtroom background assets
import gavelBg from "../../assets/azure-courtroom-brief/gavel-background.svg";
import pillarBg from "../../assets/azure-courtroom-brief/pillar-background.svg";
import lawbookBg from "../../assets/azure-courtroom-brief/lawbook-background.svg";
import shieldBg from "../../assets/azure-courtroom-brief/shield-background.svg";
import quillBg from "../../assets/azure-courtroom-brief/quill-background.svg";

const particles = [
  { top: "10%", left: "5%", size: 60, delay: 0 },
  { top: "35%", left: "85%", size: 50, delay: 2 },
  { top: "80%", left: "15%", size: 70, delay: 4 },
  { top: "70%", left: "75%", size: 55, delay: 1 },
  { top: "20%", left: "50%", size: 65, delay: 3 },
];

function LegalBackgroundAsset({
  src,
  alt,
  style,
  x,
  y,
  animate,
  transition,
}) {
  return (
    <motion.div
      className="legal-bg-parallax"
      style={{
        ...style,
        x,
        y,
      }}
    >
      <motion.img
        className="legal-bg-float"
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto" }}
        animate={animate}
        transition={transition}
        draggable="false"
      />
    </motion.div>
  );
}

const loopTransition = (duration) => ({
  repeat: Infinity,
  duration,
  ease: "easeInOut",
});

export default function CourtroomBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const frameRef = React.useRef(null);
  const pendingPointRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const applyParallax = () => {
      frameRef.current = null;
      mouseX.set(pendingPointRef.current.x);
      mouseY.set(pendingPointRef.current.y);
    };

    const handlePointerMove = (e) => {
      pendingPointRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      };

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(applyParallax);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [mouseX, mouseY]);

  // Transform values for multi-layered depth
  const scaleParallaxX = useTransform(mouseX, (x) => x * 0.4);
  const scaleParallaxY = useTransform(mouseY, (y) => y * 0.4);
  const particleParallaxX = useTransform(mouseX, (x) => x * -0.7);
  const particleParallaxY = useTransform(mouseY, (y) => y * -0.7);

  // Different parallax levels for the 5 legal background elements
  const assetL1X = useTransform(mouseX, (x) => x * -0.3);
  const assetL1Y = useTransform(mouseY, (y) => y * -0.3);
  const assetL2X = useTransform(mouseX, (x) => x * 0.25);
  const assetL2Y = useTransform(mouseY, (y) => y * 0.25);

  return (
    <div className="particles-layer">
      {/* Background radial paper shadow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 40%, rgba(237, 248, 255, 0.55) 0%, rgba(195, 226, 248, 0.35) 100%)",
          zIndex: 0,
        }}
      />

      {/* 5 High-Opacity Legal Background Decor Elements (Wow visual factors) */}

      {/* 1. Large Gavel of Justice (Bottom-Left) */}
      <LegalBackgroundAsset
        src={gavelBg}
        alt="Background Gavel"
        x={assetL1X}
        y={assetL1Y}
        style={{
          position: "fixed",
          bottom: "5%",
          left: "2%",
          width: "min(24vw, 240px)",
          opacity: 0.5,
          zIndex: 1,
        }}
        animate={{
          y: [0, -8, 0],
          rotate: [-15, -13, -15],
        }}
        transition={loopTransition(9)}
      />

      {/* 2. Classical Legal Pillars (Center-Left) */}
      <LegalBackgroundAsset
        src={pillarBg}
        alt="Background Pillars"
        x={assetL2X}
        y={assetL2Y}
        style={{
          position: "fixed",
          top: "25%",
          left: "4%",
          width: "min(20vw, 200px)",
          opacity: 0.4,
          zIndex: 1,
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={loopTransition(12)}
      />

      {/* 3. Open Lawbook of Statutes (Top-Left) */}
      <LegalBackgroundAsset
        src={lawbookBg}
        alt="Background Lawbook"
        x={assetL1X}
        y={assetL1Y}
        style={{
          position: "fixed",
          top: "6%",
          left: "15%",
          width: "min(18vw, 180px)",
          opacity: 0.42,
          zIndex: 1,
        }}
        animate={{
          y: [0, -6, 0],
          rotate: [5, 7, 5],
        }}
        transition={loopTransition(7)}
      />

      {/* 4. Shield of Protection & Justice (Top-Right) */}
      <LegalBackgroundAsset
        src={shieldBg}
        alt="Background Shield"
        x={assetL2X}
        y={assetL2Y}
        style={{
          position: "fixed",
          top: "8%",
          right: "12%",
          width: "min(19vw, 190px)",
          opacity: 0.46,
          zIndex: 1,
        }}
        animate={{
          scale: [1, 1.03, 1],
          rotate: [-2, 2, -2],
        }}
        transition={loopTransition(10)}
      />

      {/* 5. Quill Feather & Glass Inkwell (Center-Right) */}
      <LegalBackgroundAsset
        src={quillBg}
        alt="Background Quill"
        x={assetL1X}
        y={assetL1Y}
        style={{
          position: "fixed",
          top: "40%",
          right: "3%",
          width: "min(16vw, 160px)",
          opacity: 0.52,
          zIndex: 1,
        }}
        animate={{
          y: [0, -10, 0],
          rotate: [12, 15, 12],
        }}
        transition={loopTransition(8)}
      />

      {/* Floating Parchment Dust/Particles layer */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          x: particleParallaxX,
          y: particleParallaxY,
          zIndex: 1,
        }}
      >
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle-item"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundImage: `url(${particlesAsset})`,
              backgroundSize: "contain",
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Swaying Scales of Justice Visual Anchor (Large Core Asset at Bottom-Right) */}
      <LegalBackgroundAsset
        src={balanceScale}
        alt="Scales of Justice"
        x={scaleParallaxX}
        y={scaleParallaxY}
        style={{
          position: "fixed",
          bottom: "3%",
          right: "2%",
          width: "min(35vw, 360px)",
          zIndex: 2,
          opacity: 0.56,
        }}
        animate={{
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={loopTransition(16)}
      />

      {/* Floating Paper Folder background sheets */}
      <motion.div
        style={{
          position: "fixed",
          top: "15%",
          left: "-50px",
          width: "280px",
          height: "280px",
          opacity: 0.16,
          rotate: -20,
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #1E78C8 0%, #8ABBEA 100%)",
            borderRadius: "20px",
            filter: "blur(2px)",
          }}
        />
      </motion.div>
    </div>
  );
}
