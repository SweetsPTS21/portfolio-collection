// src/pages/AboutPage.jsx
import React from "react";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/layout/PageTransition";
import { NoteCard } from "../components/ui/NoteCard";
import { SealBadge } from "../components/ui/SealBadge";
import {
  LawBookOpen,
  DetectiveDiaryStickers,
} from "../components/ui/SvgSceneLayer";
import { Scale, BookOpen, Sparkles, CheckCircle2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function AboutPage() {
  const { person, about } = portfolioData;

  const toolIcons = {
    "Quản lý tệp tin": CheckCircle2,
    "Tra cứu chuyên sâu": Scale,
    "Hỗ trợ phân tích": Cpu,
    "Kết nối làm việc": Sparkles,
    "Trình bày báo cáo": BookOpen,
  };

  return (
    <PageTransition>
      <div
        className="heroStage"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {/* Editorial Splitting Grid */}
        <div
          className="aboutGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left: Academic Profile info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Header Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  background: "var(--lan-mint)",
                  color: "var(--lan-slate)",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  border: "1px solid var(--lan-border)",
                }}
              >
                Law Student Portfolio
              </span>
              <SealBadge size={44} />
            </div>

            {/* Title / Headline */}
            <h1
              style={{
                fontFamily: "var(--lan-font-heading)",
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "var(--lan-text)",
                margin: 0,
                lineHeight: "1.15",
                fontWeight: "800",
              }}
            >
              {about.headline}
            </h1>

            {/* Intro text */}
            <p
              style={{
                fontFamily: "var(--lan-font-body)",
                fontSize: "16px",
                lineHeight: "1.7",
                color: "var(--lan-text-muted)",
                margin: 0,
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(4px)",
                padding: "20px",
                borderRadius: "16px",
                border: "1.5px solid var(--lan-border)",
              }}
            >
              {about.intro}
            </p>

            {/* Personal Details Table */}
            <div
              style={{
                background: "var(--lan-bg-paper)",
                border: "1.5px solid var(--lan-border)",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 4px 15px var(--lan-shadow)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--lan-font-heading)",
                  margin: "0 0 16px 0",
                  color: "var(--lan-slate)",
                  fontSize: "18px",
                }}
              >
                Thông tin lưu trữ
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--lan-text-muted)" }}
                  >
                    Họ và tên
                  </div>
                  <div style={{ fontWeight: "bold", color: "var(--lan-text)" }}>
                    {person.fullName}
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--lan-text-muted)" }}
                  >
                    Mã sinh viên
                  </div>
                  <div style={{ fontWeight: "bold", color: "var(--lan-text)" }}>
                    {person.studentId}
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--lan-text-muted)" }}
                  >
                    Ngành học
                  </div>
                  <div style={{ fontWeight: "bold", color: "var(--lan-text)" }}>
                    {person.major}
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--lan-text-muted)" }}
                  >
                    Trường đào tạo
                  </div>
                  <div style={{ fontWeight: "bold", color: "var(--lan-text)" }}>
                    {person.university}
                  </div>
                </div>
              </div>

              {/* Interests Deck (Customized magnifying glass stickers) */}
              <div
                style={{
                  marginTop: "20px",
                  borderTop: "1px dashed var(--lan-border)",
                  paddingTop: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--lan-text-muted)",
                    marginBottom: "10px",
                  }}
                >
                  Xu hướng tư duy & Sở thích
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {person.interests.map((interest, i) => (
                    <span
                      key={i}
                      style={{
                        background: "var(--lan-bg-base)",
                        color: "var(--lan-text)",
                        fontSize: "13px",
                        fontWeight: "700",
                        padding: "6px 12px",
                        borderRadius: "var(--lan-radius-sticker, 12px)",
                        border: "1px solid var(--lan-sky)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <BookOpen size={13} strokeWidth={2.5} />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Avatar + SVG Stage */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              gap: "20px",
            }}
          >
            {/* Avatar frame — rounded rectangle */}
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer soft glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-8px",
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, var(--lan-sky), var(--lan-mint), var(--lan-blue-soft))",
                  opacity: 0.45,
                  filter: "blur(10px)",
                }}
              />
              {/* Blue gradient border */}
              <div
                style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "26px",
                  background:
                    "linear-gradient(145deg, var(--lan-blue), var(--lan-mint), var(--lan-blue-soft))",
                  opacity: 0.8,
                }}
              />
              {/* Avatar image */}
              <img
                src="/avatar.jpg"
                alt="Đặng Trà My"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                style={{
                  width: "220px",
                  height: "280px",
                  borderRadius: "24px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  border: "3px solid var(--lan-bg-paper)",
                  boxShadow: "0 12px 36px var(--lan-shadow)",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              {/* Name overlay at bottom of image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--lan-border)",
                  borderRadius: "999px",
                  padding: "5px 16px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "var(--lan-slate)",
                  letterSpacing: "0.4px",
                  whiteSpace: "nowrap",
                }}
              >
                Đặng Trà My · 24061293
              </div>
            </div>


            {/* Embedded 2D SVG open book stage */}
            <div style={{ width: "100%", maxWidth: "340px" }}>
              <LawBookOpen />
            </div>

            {/* Decorative Wiggling Stickers */}
            <div
              style={{ position: "absolute", bottom: "-20px", left: "10px" }}
            >
              <DetectiveDiaryStickers
                type="glasses"
                className="stickerWiggle float1"
              />
            </div>
            <div style={{ position: "absolute", top: "-10px", right: "20px" }}>
              <DetectiveDiaryStickers
                type="books"
                className="stickerWiggle float2"
              />
            </div>
          </div>
        </div>

        {/* Goals & principles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          {/* Target card */}
          <div
            style={{
              background: "var(--lan-bg-paper)",
              border: "1.5px solid var(--lan-border)",
              borderRadius: "16px",
              padding: "28px",
              boxShadow: "0 6px 18px var(--lan-shadow)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--lan-slate)",
              }}
            >
              <Scale size={22} strokeWidth={2.5} />
              <h2
                style={{
                  fontFamily: "var(--lan-font-heading)",
                  margin: 0,
                  fontSize: "22px",
                }}
              >
                Mục tiêu nghiên cứu
              </h2>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.65",
                color: "var(--lan-text-muted)",
                margin: 0,
              }}
            >
              <strong>Bản chất học thuật:</strong> {about.learningGoal}
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.65",
                color: "var(--lan-text-muted)",
                margin: 0,
              }}
            >
              <strong>Mục tiêu số hóa:</strong> {about.portfolioGoal}
            </p>
          </div>

          {/* Principle NoteCard (wiggling) */}
          <NoteCard colorType="mint" randomRotate={true}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--lan-slate)",
                marginBottom: "16px",
              }}
            >
              <Scale size={22} strokeWidth={2.5} />
              <h2
                style={{
                  fontFamily: "var(--lan-font-heading)",
                  margin: 0,
                  fontSize: "22px",
                }}
              >
                Nguyên tắc hành sự
              </h2>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.7",
                color: "var(--lan-text)",
                fontWeight: "600",
                margin: 0,
              }}
            >
              {about.principle}
            </p>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-end",
                opacity: 0.25,
              }}
            >
              <Scale size={48} strokeWidth={1} />
            </div>
          </NoteCard>
        </div>

        {/* Tools Grid */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "var(--lan-font-heading)",
                color: "var(--lan-text)",
                margin: "0 0 8px 0",
                fontSize: "24px",
              }}
            >
              Hệ thống công cụ
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--lan-text-muted)",
                margin: 0,
              }}
            >
              Môi trường làm việc số ngăn nắp hỗ trợ giải mã tri thức luật
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {about.tools.map((tool, index) => {
              // Extract label and tool category
              const bracketIndex = tool.indexOf("(");
              const toolLabel =
                bracketIndex !== -1
                  ? tool.substring(0, bracketIndex).trim()
                  : tool;
              const toolCategory =
                bracketIndex !== -1
                  ? tool.substring(bracketIndex + 1, tool.length - 1)
                  : "";

              // Pick icon based on keywords
              const Icon =
                Object.entries(toolIcons).find(([key]) =>
                  toolCategory.includes(key),
                )?.[1] || CheckCircle2;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -4 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.55)",
                    border: "1.5px solid var(--lan-border)",
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 2px 8px var(--lan-shadow)",
                  }}
                >
                  <div
                    style={{
                      background: "var(--lan-bg-mist)",
                      color: "var(--lan-blue)",
                      padding: "8px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "var(--lan-text)",
                      }}
                    >
                      {toolLabel}
                    </div>
                    {toolCategory && (
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--lan-text-muted)",
                          marginTop: "2px",
                        }}
                      >
                        {toolCategory}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
