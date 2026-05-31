import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import waxSealSvg from "../../assets/azure-courtroom-brief/courtroom-seal-set.svg";

export default function SealBadge({ isStamped, onClick, label = "CLICK TO APPROVE" }) {
  
  // Synthesizes a satisfying mechanical/organic stamp sound using Web Audio API!
  const playStampSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      
      // Node 1: Heavy stamp thud (low-frequency triangle wave sweep)
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.25);
      
      gainNode.gain.setValueAtTime(0.6, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Node 2: Subtle paper crisp friction (noise buffer)
      const bufferSize = ctx.sampleRate * 0.1; // 100ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(800, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.5, ctx.currentTime);
      
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.12, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      
      osc.start();
      noise.start();
      
      osc.stop(ctx.currentTime + 0.25);
      noise.stop(ctx.currentTime + 0.12);
    } catch (e) {
      console.warn("Audio Context stamp synthesis skipped due to user gesture block.", e);
    }
  };

  const handlePress = () => {
    playStampSound();
    if (onClick) onClick();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <div style={{ position: "relative" }}>
        
        {/* Luminous Ripple Glow underneath seal when active */}
        <AnimatePresence>
          {isStamped && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.7, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "50%",
                background: "rgba(217, 87, 106, 0.4)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
          )}
        </AnimatePresence>

        {/* The Wax Stamp Button */}
        <motion.button
          onClick={handlePress}
          className={isStamped ? "glow-pulse-anim" : ""}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          animate={
            isStamped 
              ? { scale: [1, 1.25, 0.95, 1.05, 1], rotate: [0, 5, -5, 2, 0] } 
              : {}
          }
          transition={{ duration: 0.5 }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "120px",
            height: "120px",
            outline: "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={waxSealSvg}
            alt="Wax Seal of Authenticity"
            style={{
              width: "100%",
              height: "100%",
              filter: isStamped 
                ? "drop-shadow(0 0 12px rgba(219, 87, 106, 0.7))" 
                : "grayscale(30%) opacity(0.85) drop-shadow(2px 4px 6px rgba(18, 48, 74, 0.15))",
              transition: "filter 0.3s ease",
            }}
          />
        </motion.button>
      </div>

      {/* Label for Stamp */}
      <span 
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.8rem",
          fontWeight: "bold",
          color: isStamped ? "var(--stamp-red)" : "var(--slate-grey)",
          letterSpacing: "2px",
          textAlign: "center",
          transition: "color 0.3s ease",
        }}
      >
        {isStamped ? "APPROVED & SEALED" : label}
      </span>
    </div>
  );
}
