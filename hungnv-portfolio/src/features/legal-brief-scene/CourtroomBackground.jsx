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

export default function CourtroomBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Active parallax interaction based on mouse coordinates
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; // Max offset 15px
      const y = (clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  // Generate coordinates for scattered floating paper fibers
  const particles = [
    { top: "10%", left: "5%", size: 60, delay: 0 },
    { top: "35%", left: "85%", size: 50, delay: 2 },
    { top: "80%", left: "15%", size: 70, delay: 4 },
    { top: "70%", left: "75%", size: 55, delay: 1 },
    { top: "20%", left: "50%", size: 65, delay: 3 },
  ];

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
      <motion.div
        style={{
          position: "fixed",
          bottom: "5%",
          left: "2%",
          width: "min(24vw, 240px)",
          height: "auto",
          x: assetL1X,
          y: assetL1Y,
          opacity: 0.28,
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0px 8px 16px rgba(30, 120, 200, 0.12))",
        }}
        animate={{
          y: [0, -8, 0],
          rotate: [-15, -13, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
      >
        <img src={gavelBg} alt="Background Gavel" style={{ width: "100%" }} />
      </motion.div>

      {/* 2. Classical Legal Pillars (Center-Left) */}
      <motion.div
        style={{
          position: "fixed",
          top: "25%",
          left: "4%",
          width: "min(20vw, 200px)",
          height: "auto",
          x: assetL2X,
          y: assetL2Y,
          opacity: 0.22,
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0px 8px 16px rgba(30, 120, 200, 0.1))",
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      >
        <img
          src={pillarBg}
          alt="Background Pillars"
          style={{ width: "100%" }}
        />
      </motion.div>

      {/* 3. Open Lawbook of Statutes (Top-Left) */}
      <motion.div
        style={{
          position: "fixed",
          top: "6%",
          left: "15%",
          width: "min(18vw, 180px)",
          height: "auto",
          x: assetL1X,
          y: assetL1Y,
          opacity: 0.24,
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0px 8px 16px rgba(30, 120, 200, 0.12))",
        }}
        animate={{
          y: [0, -6, 0],
          rotate: [5, 7, 5],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
      >
        <img
          src={lawbookBg}
          alt="Background Lawbook"
          style={{ width: "100%" }}
        />
      </motion.div>

      {/* 4. Shield of Protection & Justice (Top-Right) */}
      <motion.div
        style={{
          position: "fixed",
          top: "8%",
          right: "12%",
          width: "min(19vw, 190px)",
          height: "auto",
          x: assetL2X,
          y: assetL2Y,
          opacity: 0.26,
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0px 8px 16px rgba(30, 120, 200, 0.12))",
        }}
        animate={{
          scale: [1, 1.03, 1],
          rotate: [-2, 2, -2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      >
        <img src={shieldBg} alt="Background Shield" style={{ width: "100%" }} />
      </motion.div>

      {/* 5. Quill Feather & Glass Inkwell (Center-Right) */}
      <motion.div
        style={{
          position: "fixed",
          top: "40%",
          right: "3%",
          width: "min(16vw, 160px)",
          height: "auto",
          x: assetL1X,
          y: assetL1Y,
          opacity: 0.29,
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0px 8px 16px rgba(30, 120, 200, 0.12))",
        }}
        animate={{
          y: [0, -10, 0],
          rotate: [12, 15, 12],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      >
        <img src={quillBg} alt="Background Quill" style={{ width: "100%" }} />
      </motion.div>

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
      <motion.div
        style={{
          position: "fixed",
          bottom: "3%",
          right: "2%",
          width: "min(35vw, 360px)",
          height: "auto",
          x: scaleParallaxX,
          y: scaleParallaxY,
          zIndex: 2,
          pointerEvents: "none",
          opacity: 0.32, // Elevated opacity as requested
          filter: "drop-shadow(0px 10px 20px rgba(30, 120, 200, 0.25))",
        }}
        animate={{
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <img
          src={balanceScale}
          alt="Scales of Justice"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>

      {/* Floating Paper Folder background sheets */}
      <motion.div
        style={{
          position: "fixed",
          top: "15%",
          left: "-50px",
          width: "280px",
          height: "280px",
          opacity: 0.08,
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
