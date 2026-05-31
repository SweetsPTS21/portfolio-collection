import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../../assets/azure-courtroom-brief/avatar.jpg";
import sealSvg from "../../assets/azure-courtroom-brief/courtroom-seal-set.svg";

export default function AvatarFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        maxWidth: "260px",
        margin: "0 auto 24px auto",
      }}
    >
      {/* Visual background glow (luminous cobalt blue) */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          right: "10px",
          bottom: "10px",
          borderRadius: "14px",
          background: "rgba(30, 120, 200, 0.22)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Main Ornate Courtroom Frame Container */}
      <motion.div
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{
          background: "var(--paper-white)",
          border: "4px double var(--legal-blue)",
          borderRadius: "12px",
          padding: "12px",
          boxShadow: "var(--shadow-lg), 0 0 0 4px rgba(30, 120, 200, 0.08)",
          width: "100%",
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box"
        }}
      >
        {/* Golden Ornate Corner L-Lines */}
        <div style={{ position: "absolute", top: "4px", left: "4px", width: "16px", height: "16px", borderTop: "2px solid #D9AE38", borderLeft: "2px solid #D9AE38" }} />
        <div style={{ position: "absolute", top: "4px", right: "4px", width: "16px", height: "16px", borderTop: "2px solid #D9AE38", borderRight: "2px solid #D9AE38" }} />
        <div style={{ position: "absolute", bottom: "4px", left: "4px", width: "16px", height: "16px", borderBottom: "2px solid #D9AE38", borderLeft: "2px solid #D9AE38" }} />
        <div style={{ position: "absolute", bottom: "4px", right: "4px", width: "16px", height: "16px", borderBottom: "2px solid #D9AE38", borderRight: "2px solid #D9AE38" }} />

        {/* Ornate Top Emblem (Balance silhouette) */}
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--paper-white)",
            border: "1.5px solid var(--legal-blue)",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-sm)",
            fontSize: "1rem",
            zIndex: 3
          }}
        >
          ⚖️
        </div>

        {/* Image wrapper */}
        <div
          style={{
            width: "100%",
            height: "230px",
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid var(--sky-border)",
            background: "var(--brief-azure)",
            position: "relative"
          }}
        >
          <img
            src={avatarImg}
            alt="Nguyễn Việt Hùng"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.05) brightness(1.02)"
            }}
          />

          {/* Vignette desk-shadow mask over portrait */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              boxShadow: "inset 0 0 16px rgba(18, 48, 74, 0.15)",
              pointerEvents: "none"
            }}
          />
        </div>

        {/* Ornate Label Ribbon at bottom of frame */}
        <div
          style={{
            background: "linear-gradient(90deg, var(--legal-blue), #155996)",
            color: "#FFFFFF",
            fontFamily: "var(--font-heading)",
            fontWeight: "bold",
            fontSize: "0.8rem",
            letterSpacing: "1px",
            textAlign: "center",
            padding: "4px 8px",
            borderRadius: "4px",
            marginTop: "10px",
            boxShadow: "var(--shadow-sm)",
            textTransform: "uppercase"
          }}
        >
          COUNSEL CARD
        </div>

        {/* Mini hanging Wax Seal at bottom-right corner of frame */}
        <motion.div
          animate={{ rotate: [0, 4, 0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-10px",
            right: "-10px",
            width: "48px",
            height: "48px",
            zIndex: 4,
            pointerEvents: "none",
            filter: "drop-shadow(2px 3px 4px rgba(18, 48, 74, 0.25))"
          }}
        >
          <img
            src={sealSvg}
            alt="Mini seal decoration"
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
