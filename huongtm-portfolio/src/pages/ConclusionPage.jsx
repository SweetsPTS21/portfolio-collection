import React, { useState, useEffect } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { GinghamCard } from "../components/ui/GinghamCard";
import { BerryConfetti } from "../features/butterfly-bee/BerryConfetti";
import { portfolioData } from "../data/portfolioData";
import { Sparkles, Compass, AlertCircle, Award } from "lucide-react";

export const ConclusionPage = () => {
  const { conclusion } = portfolioData;
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti burst on load
    setTriggerConfetti(true);
    const timer = setTimeout(() => {
      // Keep it falling in the background of this page
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      {/* Canvas Confetti Layer */}
      <BerryConfetti active={triggerConfetti} />

      <div style={{ display: "flex", flexDirection: "column", gap: "36px", position: "relative" }}>
        
        {/* Header Title */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem", color: "var(--huong-text)", marginBottom: "8px" }}>
            Trang Tổng Kết
          </h2>
          <p style={{ color: "var(--huong-text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
            Hành trình xây dựng không gian số này khép lại nhẹ nhàng như dư âm của một bản nhạc hay.
          </p>
        </div>

        {/* Experience Overview */}
        <GinghamCard 
          title="Trải Nghiệm & Sự Thay Đổi" 
          stickerType="flower" 
          accentType="ribbon"
          index={0}
        >
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--huong-text)" }}>
            {conclusion.experience}
          </p>
        </GinghamCard>

        {/* Comparison Grid: Highlights vs Challenges */}
        <div className="conclusion-grid">
          
          {/* Highlights Card */}
          <GinghamCard
            title="Điểm Tâm Đắc Nhất"
            stickerType="strawberry"
            index={1}
            style={{ height: "100%" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {conclusion.highlights.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ padding: "6px", background: "var(--huong-bg-blush)", borderRadius: "50%", color: "var(--huong-pink)" }}>
                    <Award size={18} />
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--huong-text)", lineHeight: "1.5" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </GinghamCard>

          {/* Challenges Card */}
          <GinghamCard
            title="Thách Thức Đối Mặt"
            stickerType="basket"
            index={2}
            style={{ height: "100%" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {conclusion.challenges.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ padding: "6px", background: "var(--huong-yellow-soft)", borderRadius: "50%", color: "var(--huong-basket)" }}>
                    <AlertCircle size={18} />
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--huong-text)", lineHeight: "1.5" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </GinghamCard>

        </div>

        {/* Future Directions */}
        <GinghamCard 
          title="Định Hướng Chặng Đường Phía Trước" 
          stickerType="strawberry" 
          index={3}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ padding: "8px", background: "var(--huong-mint-soft)", borderRadius: "50%", color: "var(--huong-mint)" }}>
              <Compass size={24} />
            </div>
            <div>
              <p style={{ fontSize: "1.05rem", color: "var(--huong-text)", lineHeight: "1.7" }}>
                {conclusion.future}
              </p>
            </div>
          </div>
        </GinghamCard>

        {/* Heartfelt Thank You Card */}
        <GinghamCard
          title="Lời Cảm Ơn Sâu Sắc"
          stickerType="flower"
          accentType="ribbon"
          index={4}
          style={{ background: "var(--huong-bg-blush)" }}
        >
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <div style={{ display: "inline-block", padding: "10px", background: "#FFFFFF", border: "2.5px solid var(--huong-text)", borderRadius: "50%", marginBottom: "16px", boxShadow: "3px 3px 0 var(--huong-text)" }}>
              <Sparkles size={24} style={{ color: "var(--huong-pink)" }} />
            </div>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: "1.8", color: "var(--huong-text)", maxWidth: "800px", margin: "0 auto" }}>
              "{conclusion.thanks}"
            </p>
          </div>
        </GinghamCard>

      </div>
    </PageTransition>
  );
};
