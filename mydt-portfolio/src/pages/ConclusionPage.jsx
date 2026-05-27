// src/pages/ConclusionPage.jsx
import React from "react";
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/layout/PageTransition";
import { SealBadge } from "../components/ui/SealBadge";
import { NoteCard } from "../components/ui/NoteCard";
import { BlueButton } from "../components/ui/BlueButton";
import { Scale, ShieldAlert, Award, ArrowUpRight, Send, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function ConclusionPage() {
  const { conclusion } = portfolioData;

  const handleSendEmail = () => {
    // Standard trigger for mail client
    window.location.href = "mailto:?subject=Góp ý về Portfolio học thuật Đặng Trà My";
  };

  return (
    <PageTransition>
      <div
        className="conclusionShell"
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Header Title */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              background: "var(--lan-bg-mist)",
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
            Route 3: Conclusion
          </span>
          <h1
            style={{
              fontFamily: "var(--lan-font-heading)",
              fontSize: "36px",
              color: "var(--lan-text)",
              margin: "8px 0",
              fontWeight: "800",
            }}
          >
            Tổng kết & Chiêm nghiệm
          </h1>
          <p style={{ fontSize: "14px", color: "var(--lan-text-muted)", margin: 0 }}>
            Dư âm của hành trình số, khép lại trang nhật ký học thuật để mở ra chương mới.
          </p>
        </div>

        {/* Reflection welcome introduction */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(6px)",
            border: "1.5px solid var(--lan-border)",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 4px 15px var(--lan-shadow)",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <SealBadge size={74} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h3
              style={{
                fontFamily: "var(--lan-font-heading)",
                fontSize: "20px",
                color: "var(--lan-slate)",
                margin: 0,
              }}
            >
              Hành trình tự chủ không gian số
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.65",
                color: "var(--lan-text)",
                margin: 0,
              }}
            >
              {conclusion.reflection}
            </p>
          </div>
        </div>

        {/* Custom Winding SVG Timeline linking crucial steps */}
        <div style={{ position: "relative", padding: "10px 0" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "24px",
              width: "2px",
              background: "linear-gradient(180deg, var(--lan-blue) 0%, var(--lan-sky) 50%, var(--lan-mint) 100%)",
              opacity: 0.6,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px", position: "relative", zIndex: 10 }}>
            {/* Timeline node 1 */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--lan-blue)",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 0 0 2px var(--lan-blue)",
                  marginLeft: "15px",
                  marginTop: "6px",
                }}
              />
              <div>
                <h4 style={{ margin: "0 0 4px 0", color: "var(--lan-text)", fontWeight: "bold" }}>
                  Bắt đầu: Thao tác nền tảng & Sắp xếp ngăn nắp
                </h4>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--lan-text-muted)" }}>
                  Quy hoạch dữ liệu khoa học, dọn dẹp không gian nháp, sẵn sàng cho công việc học thuật lâu dài.
                </p>
              </div>
            </div>

            {/* Timeline node 2 */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--lan-sky)",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 0 0 2px var(--lan-sky)",
                  marginLeft: "15px",
                  marginTop: "6px",
                }}
              />
              <div>
                <h4 style={{ margin: "0 0 4px 0", color: "var(--lan-text)", fontWeight: "bold" }}>
                  Tăng tốc: Khai phá thông tin & Tranh biện độc lập
                </h4>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--lan-text-muted)" }}>
                  Truy vấn dữ liệu tạp chí khoa học chuyên sâu, đúc kết câu lệnh kiểm chứng giới hạn thuật toán AI.
                </p>
              </div>
            </div>

            {/* Timeline node 3 */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--lan-mint)",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 0 0 2px var(--lan-mint)",
                  marginLeft: "15px",
                  marginTop: "6px",
                }}
              />
              <div>
                <h4 style={{ margin: "0 0 4px 0", color: "var(--lan-text)", fontWeight: "bold" }}>
                  Bền vững: An toàn và Liêm chính học thuật số
                </h4>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--lan-text-muted)" }}>
                  Thiết lập bộ quy tắc đạo đức cá nhân, kiên quyết từ chối đạo văn, bảo vệ bản quyền chất xám.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side Duality Comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* Highlights Card */}
          <div
            style={{
              background: "var(--lan-slate)",
              color: "#FFFFFF",
              borderRadius: "16px",
              padding: "28px",
              boxShadow: "0 8px 24px rgba(21, 101, 192, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Award size={24} strokeWidth={2.5} style={{ color: "var(--lan-mint)" }} />
              <h3
                style={{
                  fontFamily: "var(--lan-font-heading)",
                  fontSize: "20px",
                  margin: 0,
                }}
              >
                Điểm tâm đắc nhất
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#E1F0FF",
              }}
            >
              {conclusion.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Challenges Card */}
          <div
            style={{
              background: "var(--lan-bg-mist)",
              border: "1.5px solid var(--lan-border)",
              color: "var(--lan-text)",
              borderRadius: "16px",
              padding: "28px",
              boxShadow: "0 6px 15px var(--lan-shadow)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--lan-slate)" }}>
              <ShieldAlert size={24} strokeWidth={2.5} />
              <h3
                style={{
                  fontFamily: "var(--lan-font-heading)",
                  fontSize: "20px",
                  margin: 0,
                }}
              >
                Thách thức đối mặt
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "var(--lan-text-muted)",
              }}
            >
              {conclusion.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Future Roadmap */}
        <NoteCard colorType="paper" randomRotate={false}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--lan-blue)" }}>
              <ArrowUpRight size={20} strokeWidth={2.5} />
              <span style={{ fontWeight: "800", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                Future Roadmap
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--lan-font-heading)",
                fontSize: "22px",
                color: "var(--lan-text)",
                margin: 0,
              }}
            >
              Định hướng chặng đường phía trước
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--lan-text-muted)", margin: 0 }}>
              {conclusion.future}
            </p>
          </div>
        </NoteCard>

        {/* Thank You & Send CTA Envelope Section */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(6px)",
            border: "1.5px solid var(--lan-border)",
            borderRadius: "16px",
            padding: "32px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 6px 15px var(--lan-shadow)",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "var(--lan-bg-mist)",
              color: "var(--lan-blue)",
              padding: "12px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heart size={24} strokeWidth={2.5} fill="var(--lan-blue-soft)" />
          </div>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: "1.6",
              color: "var(--lan-text)",
              maxWidth: "600px",
              margin: 0,
            }}
          >
            "{conclusion.thanks}"
          </p>

          <BlueButton onClick={handleSendEmail} style={{ marginTop: "8px" }}>
            <Send size={15} strokeWidth={2.5} />
            <span>Gửi phản hồi</span>
          </BlueButton>
        </div>
      </div>
    </PageTransition>
  );
}
