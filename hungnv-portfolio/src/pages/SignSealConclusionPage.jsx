import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { conclusionData, personalInfo } from "../data/portfolioData";
import LegalBriefCard from "../components/ui/LegalBriefCard.jsx";
import SealBadge from "../components/ui/SealBadge.jsx";
import signatureLine from "../assets/azure-courtroom-brief/signature-underline.svg";
import {
  Trophy,
  Compass,
  ShieldAlert,
  Sparkles,
  Award,
  Pin,
} from "lucide-react";

export default function SignSealConclusionPage() {
  const [isApproved, setIsApproved] = useState(false);
  const [signerName, setSignerName] = useState(personalInfo.name);

  return (
    <div className="dossier-layout">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "36px", textAlign: "center" }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: "bold",
            color: "var(--legal-blue)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          KẾT LUẬN & CAM KẾT
        </span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            color: "var(--ink-navy)",
            marginTop: "8px",
          }}
        >
          Tổng Kết Hành Trình Số
        </h1>
      </motion.div>

      {/* Grid of dossier and stamp box - Perfectly Balanced Column Layout */}
      <div className="dossier-page-grid">
        {/* Left Column: Ruled Book and Notebook elements */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Card 1: Trải nghiệm & Thay đổi -> RENDERED AS A CLASSIC BINDER BOOK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="book-spine-card"
          >
            {/* Ornate Binder Spine Rings Visual */}
            <div className="book-spine-rings">
              <div className="book-spine-ring-item" />
              <div className="book-spine-ring-item" />
              <div className="book-spine-ring-item" />
              <div className="book-spine-ring-item" />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                color: "var(--ink-navy)",
                borderBottom: "1.5px solid var(--sky-border)",
                paddingBottom: "8px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Compass size={20} color="var(--legal-blue)" />
              1. TRẢI NGHIỆM & SỰ THAY ĐỔI
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {conclusionData.experienceSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{ color: "var(--legal-blue)", fontWeight: "bold" }}
                  >
                    ⚖️
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.92rem",
                      color: "var(--ink-navy)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Điểm tâm đắc nhất -> RENDERED AS A RULED IVORY LEGAL PAD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="ruled-pad-card"
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                color: "var(--success-green)",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Trophy size={20} />
              ĐIỂM TÂM ĐẮC NHẤT:
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {conclusionData.highlights.map((hl, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--success-green)",
                      fontSize: "0.9rem",
                    }}
                  >
                    ✔
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--ink-navy)",
                      lineHeight: 1.5,
                    }}
                  >
                    {hl}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Thách thức đã đối mặt -> RENDERED AS A STICKY NOTE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sticky-note-card"
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                color: "var(--stamp-red)",
                opacity: 0.8,
              }}
            >
              <Pin size={18} />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                color: "var(--stamp-red)",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ShieldAlert size={18} />
              THÁCH THỨC ĐÃ ĐỐI MẶT:
            </h3>

            <ul
              style={{
                paddingLeft: "16px",
                fontSize: "0.88rem",
                color: "var(--slate-grey)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {conclusionData.challenges.map((ch, i) => (
                <li
                  key={i}
                  style={{ listStyleType: "circle", lineHeight: 1.4 }}
                >
                  {ch}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Integrity Scroll, Future Path and Acknowledgements */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Card 4: Cam kết liêm chính -> CERTIFICATE SCROLL WITH WAX SEAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: "var(--paper-white)",
              border: "3px double var(--legal-blue)",
              borderRadius: "12px",
              padding: "32px 24px",
              boxShadow: "var(--shadow-lg), 0 0 0 4px rgba(30, 120, 200, 0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Holographic header stripe when stamped */}
            {isApproved && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "8px",
                  background:
                    "linear-gradient(90deg, var(--stamp-red), var(--legal-blue))",
                }}
              />
            )}

            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                color: "var(--ink-navy)",
                textAlign: "center",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Award size={22} color="var(--legal-blue)" />
              CAM KẾT LIÊM CHÍNH HỌC THUẬT
            </h3>

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--slate-grey)",
                textAlign: "center",
                lineHeight: 1.5,
                marginBottom: "24px",
              }}
            >
              Hãy nhấn nút để đóng con dấu sáp chính thức của hồ sơ nhằm xác
              thực cam kết liêm chính học thuật và phê duyệt toàn bộ minh chứng
              pháp lý.
            </p>

            {/* Stamping Form */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    color: "var(--legal-blue)",
                    letterSpacing: "1px",
                  }}
                >
                  NGƯỜI XÁC THỰC CAM KẾT (KÝ TÊN):
                </label>
                <input
                  type="text"
                  value={signerName}
                  onChange={(e) => setSignerName(e.target.value)}
                  disabled={isApproved}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "6px",
                    border: "1.5px solid var(--sky-border)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: "var(--ink-navy)",
                    outline: "none",
                    background: isApproved ? "var(--brief-azure)" : "#FFFFFF",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--legal-blue)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--sky-border)")
                  }
                />
              </div>
            </div>

            {/* Clickable Wax Seal Badge */}
            <SealBadge
              isStamped={isApproved}
              onClick={() => setIsApproved(true)}
              label="BẤM VÀO ĐỂ ĐÓNG DẤU PHÊ DUYỆT"
            />

            {/* Dynamic Signature flourish */}
            <AnimatePresence>
              {isApproved && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "160px",
                      height: "45px",
                    }}
                  >
                    <img
                      src={signatureLine}
                      alt="Signature flourish"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontFamily: "var(--font-heading)",
                        fontStyle: "italic",
                        fontSize: "0.95rem",
                        color: "var(--ink-navy)",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {signerName}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--success-green)",
                      fontWeight: "bold",
                      marginTop: "6px",
                      letterSpacing: "1px",
                    }}
                  >
                    ✓ XÁC THỰC THÀNH CÔNG
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Card 5: Định hướng tương lai -> RULED DOSSIER card */}
          <LegalBriefCard delay={0.3}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.2rem",
                color: "var(--ink-navy)",
                borderBottom: "1.5px solid var(--sky-border)",
                paddingBottom: "8px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Sparkles size={20} color="var(--legal-blue)" />
              2. ĐỊNH HƯỚNG TƯƠNG LAI
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {conclusionData.futurePathSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontSize: "0.9rem",
                    color: "var(--slate-grey)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--success-green)",
                      fontWeight: "bold",
                    }}
                  >
                    ★
                  </span>
                  <span style={{ lineHeight: 1.4 }}>{step}</span>
                </div>
              ))}
            </div>
          </LegalBriefCard>
        </div>
      </div>

      {/* Rộng hơn, để riêng xuống cuối */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          background: "var(--paper-white)",
          border: "1.5px solid var(--sky-border)",
          borderRadius: "10px",
          padding: "32px",
          boxShadow: "var(--shadow-md)",
          borderTop: "5px solid var(--legal-blue)",
          marginTop: "32px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.1rem",
            color: "var(--ink-navy)",
            marginBottom: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>📜</span> Lời cảm ơn chân thành
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {conclusionData.acknowledgementSteps.map((step, idx) => (
            <p
              key={idx}
              style={{
                fontSize: "0.9rem",
                color: "var(--slate-grey)",
                lineHeight: 1.6,
                margin: 0,
                textIndent: "18px",
                textAlign: "justify",
              }}
            >
              {step}
            </p>
          ))}
        </div>
      </motion.div>

      <div style={{ height: "40px" }} />
    </div>
  );
}
