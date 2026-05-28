import React from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { GinghamCard } from "../components/ui/GinghamCard";
import { FlowerBadge } from "../components/ui/FlowerBadge";
import { portfolioData } from "../data/portfolioData";
import { MapPin, Film, Music, BookOpen, ShieldCheck, Heart } from "lucide-react";
import avatarImg from "../../docs/avatar.jpg";

export const AboutPage = () => {
  const { person, about } = portfolioData;

  return (
    <PageTransition>
      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        
        {/* Welcome Section */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h1 style={{ fontSize: "2.8rem", color: "var(--huong-text)", marginBottom: "8px" }}>
            Trịnh Mai Hương
          </h1>
          <p style={{ fontStyle: "italic", color: "var(--huong-text-muted)", fontSize: "1.1rem" }}>
            "Nhẹ nhàng, êm ả và tinh tế"
          </p>
        </div>

        {/* About Grid (Polaroid Left, Cards Right) */}
        <div className="about-grid-sections">
          
          {/* Left Column: Polaroid Profile Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
            
            {/* Polaroid Frame */}
            <div 
              style={{ 
                position: "relative",
                background: "#FFFFFF",
                padding: "20px 20px 48px 20px",
                border: "3.5px solid var(--huong-text)",
                borderRadius: "16px",
                boxShadow: "0 15px 35px var(--huong-shadow-deep)",
                transform: "rotate(-2deg)",
                maxWidth: "320px",
                width: "100%",
                transition: "transform 0.3s ease",
              }}
              className="wiggle-hover"
            >
              {/* Strawberry peg clip hanging on top */}
              <div 
                style={{ 
                  position: "absolute", 
                  top: "-24px", 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  zIndex: 20,
                  pointerEvents: "none"
                }}
              >
                <svg viewBox="0 0 100 120" width="36" height="44">
                  <rect x="44" y="0" width="12" height="60" rx="4" fill="#E8C99A" stroke="#4A2535" strokeWidth="3" />
                  <circle cx="50" cy="30" r="8" fill="none" stroke="#4A2535" strokeWidth="4" />
                  {/* Little strawberry clip icon */}
                  <g transform="translate(50, 42) scale(0.35)">
                    <path d="M 0,35 C -18,32 -25,8 -25,-8 C -25,-22 -12,-30 0,-30 C 12,-30 25,-22 25,-8 C 25,8 18,35 0,35 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="6" />
                    <circle cx="-8" cy="-5" r="3" fill="#FFE89A" />
                    <circle cx="8" cy="-5" r="3" fill="#FFE89A" />
                    <path d="M 0,-30 L -12,-36 L -6,-22 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3" />
                  </g>
                </svg>
              </div>

              {/* Dotted inner line */}
              <div 
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  right: "14px",
                  bottom: "14px",
                  border: "2px dashed var(--huong-pink-soft)",
                  borderRadius: "10px",
                  pointerEvents: "none"
                }}
              />

              {/* Photo Area */}
              <div 
                style={{ 
                  width: "100%", 
                  aspectRatio: "1/1", 
                  borderRadius: "8px", 
                  overflow: "hidden", 
                  border: "3.5px solid var(--huong-text)",
                  marginBottom: "20px",
                  position: "relative"
                }}
              >
                <img 
                  src={avatarImg} 
                  alt="Trịnh Mai Hương" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>

              {/* Profile Details in Handwritten style */}
              <div 
                style={{ 
                  fontFamily: "'Quicksand', sans-serif", 
                  color: "var(--huong-text)", 
                  textAlign: "center",
                  fontSize: "1.05rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <div style={{ fontSize: "1.3rem", fontWeight: "600", color: "var(--huong-pink)" }}>
                  {person.fullName}
                </div>
                <div>Sinh ngày: {person.dob}</div>
                <div>MSSV: {person.studentId}</div>
                <div>Ngành: {person.major}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--huong-text-muted)" }}>
                  {person.university}
                </div>
              </div>
            </div>

            {/* Hobby Board */}
            <div style={{ width: "100%", maxWidth: "320px" }}>
              <h4 style={{ textAlign: "center", fontSize: "1.2rem", color: "var(--huong-text)", marginBottom: "12px", fontFamily: "Quicksand, sans-serif" }}>
                Sở Thích Cá Nhân
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--huong-bg-surface)", border: "2px solid var(--huong-border)", borderRadius: "14px", padding: "10px 16px", boxShadow: "0 4px 12px var(--huong-shadow)" }}>
                  <MapPin size={20} strokeWidth={2.5} style={{ color: "var(--huong-pink)" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>Du lịch</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--huong-text-muted)" }}>Mở rộng thế giới quan</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--huong-bg-surface)", border: "2px solid var(--huong-border)", borderRadius: "14px", padding: "10px 16px", boxShadow: "0 4px 12px var(--huong-shadow)" }}>
                  <Film size={20} strokeWidth={2.5} style={{ color: "var(--huong-mint)" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>Điện ảnh</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--huong-text-muted)" }}>Chữa lành tâm hồn</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--huong-bg-surface)", border: "2px solid var(--huong-border)", borderRadius: "14px", padding: "10px 16px", boxShadow: "0 4px 12px var(--huong-shadow)" }}>
                  <Music size={20} strokeWidth={2.5} style={{ color: "var(--huong-lavender)" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>Âm nhạc</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--huong-text-muted)" }}>Xoa dịu mệt mỏi</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: About Info & Academic Value Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            
            {/* Intro Card */}
            <GinghamCard 
              title="Góc Nhỏ Bình Yên" 
              stickerType="flower" 
              accentType="flower"
              index={0}
            >
              <p style={{ fontSize: "1.1rem", color: "var(--huong-text)" }}>
                {about.intro}
              </p>
            </GinghamCard>

            {/* Learning and Portfolio Goals */}
            <GinghamCard 
              title="Mục Tiêu & Định Hướng" 
              stickerType="basket" 
              index={1}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.15rem", marginBottom: "8px", color: "var(--huong-pink)" }}>
                    <BookOpen size={18} />
                    Mục tiêu học tập Luật học
                  </h4>
                  <p style={{ color: "var(--huong-text-muted)" }}>
                    {about.learningGoal}
                  </p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.15rem", marginBottom: "8px", color: "var(--huong-mint)" }}>
                    <Heart size={18} />
                    Ý nghĩa của Portfolio
                  </h4>
                  <p style={{ color: "var(--huong-text-muted)" }}>
                    {about.portfolioGoal}
                  </p>
                </div>
              </div>
            </GinghamCard>

            {/* Academic Principles */}
            <GinghamCard 
              title="Nguyên Tắc Học Thuật Độc Lập" 
              stickerType="strawberry"
              accentType="ribbon"
              index={2}
              className="gingham-border-box"
              style={{ border: "3px solid var(--huong-pink)" }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "8px", background: "var(--huong-bg-blush)", borderRadius: "50%", border: "2px solid var(--huong-border)" }}>
                  <ShieldCheck size={28} style={{ color: "var(--huong-pink)" }} />
                </div>
                <div>
                  <p style={{ fontWeight: "600", fontSize: "1.05rem", marginBottom: "8px" }}>
                    Tuyệt đối nói không với sao chép thụ động kết quả AI
                  </p>
                  <p style={{ color: "var(--huong-text-muted)", fontSize: "0.95rem" }}>
                    {about.principle}
                  </p>
                </div>
              </div>
            </GinghamCard>

            {/* Tools Board */}
            <div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "16px", fontFamily: "Quicksand, sans-serif" }}>
                Hộp Công Cụ Số Tinh Gọn
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {about.tools.map((tool, idx) => (
                  <FlowerBadge key={idx} text={tool} />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
};
