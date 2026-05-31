import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import LegalBriefCard from "../components/ui/LegalBriefCard.jsx";
import CitationTag from "../components/ui/CitationTag.jsx";
import ToolIndexGrid from "../features/legal-index/ToolIndexGrid.jsx";
import AvatarFrame from "../components/ui/AvatarFrame.jsx";
import { Scale, Heart, Music } from "lucide-react";

export default function CourtroomBriefHeroPage() {
  return (
    <div className="dossier-layout">
      {/* Intro Heading with slide-up effect */}
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
          Hồ Sơ Điện Tử Pháp Lý
        </span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--ink-navy)",
            marginTop: "8px",
          }}
        >
          {personalInfo.name}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          <CitationTag label={`Mã SV: ${personalInfo.studentId}`} />
          <CitationTag label={`Chuyên Ngành: ${personalInfo.major}`} />
        </div>
      </motion.div>

      {/* Main Grid content */}
      <div className="dossier-page-grid">
        {/* Left Column: Dossier Papers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <LegalBriefCard delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                color: "var(--ink-navy)",
                borderBottom: "1.5px solid var(--sky-border)",
                paddingBottom: "8px",
                marginBottom: "20px",
              }}
            >
              📖 GIỚI THIỆU CHUNG
            </h2>

            <div
              style={{
                display: "flex",
                gap: "24px",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <AvatarFrame />
              <div style={{ flex: 1, minWidth: "260px" }}>
                <p
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {personalInfo.introduction}
                </p>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                color: "var(--legal-blue)",
                marginBottom: "12px",
              }}
            >
              🎯 Định hướng phát triển & Học tập:
            </h3>
            <ul
              style={{
                paddingLeft: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {personalInfo.visionList.map((item, idx) => (
                <li
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
                    style={{ color: "var(--legal-blue)", fontWeight: "bold" }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                background: "var(--brief-azure)",
                borderLeft: "4px solid var(--legal-blue)",
                padding: "16px",
                borderRadius: "6px",
                fontSize: "0.9rem",
              }}
            >
              <strong>Mục tiêu của Portfolio:</strong>{" "}
              {personalInfo.portfolioGoal}
            </div>
          </LegalBriefCard>

          {/* Stance on Academic Integrity block */}
          <LegalBriefCard
            delay={0.2}
            style={{ borderLeft: "4px solid var(--stamp-red)" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.3rem",
                color: "var(--stamp-red)",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>🛡️</span> LẬP TRƯỜNG ĐỘC LẬP HỌC THUẬT
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--ink-navy)",
                lineHeight: 1.7,
                fontWeight: "500",
                fontStyle: "italic",
              }}
            >
              "{personalInfo.academicPrinciple}"
            </p>
          </LegalBriefCard>
        </div>

        {/* Right Column: Cabinets & Balance weights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Tool list grid */}
          <ToolIndexGrid />

          {/* Symmetrical Weight balancer panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              background: "var(--paper-white)",
              border: "1.5px solid var(--sky-border)",
              borderRadius: "10px",
              padding: "24px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "var(--ink-navy)",
                marginBottom: "16px",
                borderBottom: "1.5px solid var(--sky-border)",
                paddingBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Scale size={18} color="var(--legal-blue)" />
              CÂN BẰNG & PHONG CÁCH
            </h3>

            {/* Style detail */}
            <div style={{ marginBottom: "16px", fontSize: "0.88rem" }}>
              <span style={{ fontWeight: "bold", color: "var(--legal-blue)" }}>
                Phong cách cá nhân:
              </span>
              <p style={{ color: "var(--slate-grey)", marginTop: "4px" }}>
                {personalInfo.style}
              </p>
            </div>

            {/* Hobbies balance scale graphic representation */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "var(--legal-blue)",
                  fontSize: "0.88rem",
                }}
              >
                Hoạt động bổ trợ tư duy:
              </span>

              {/* Balance scale bars */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginTop: "4px",
                }}
              >
                {/* Sports weight */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Heart size={16} color="var(--stamp-red)" />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        marginBottom: "4px",
                      }}
                    >
                      <span>Thể thao (Thể lực & Kỷ luật)</span>
                      <span>50%</span>
                    </div>
                    <div
                      style={{
                        height: "6px",
                        background: "var(--brief-azure)",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                          height: "100%",
                          background: "var(--legal-blue)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Music weight */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Music size={16} color="var(--success-green)" />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        marginBottom: "4px",
                      }}
                    >
                      <span>Nghe nhạc (Tập trung & Áp lực)</span>
                      <span>50%</span>
                    </div>
                    <div
                      style={{
                        height: "6px",
                        background: "var(--brief-azure)",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                          height: "100%",
                          background: "var(--legal-blue)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--slate-grey)",
                fontStyle: "italic",
                marginTop: "16px",
                lineHeight: 1.4,
              }}
            >
              * Hai cán cân này duy trì sự đồng đều 50-50, giúp cơ thể dẻo dai
              kết hợp tinh thần nhạy bén trong nghiên cứu pháp lý.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
