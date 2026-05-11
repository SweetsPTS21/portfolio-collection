import { Bot, FileSearch, FolderOpen, Layers3 } from "lucide-react";
import GlassCard from "../kbeauty/GlassCard.jsx";
import PastelTag from "../kbeauty/PastelTag.jsx";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import { capabilities, principles, tools } from "../../data/portfolioData.js";

const capIcons = [FolderOpen, FileSearch, Bot, Layers3];
const capColors = ["pink", "sky", "lavender", "mint"];
const capAccent = ["pink", "sky", "lavender", "mint"];

const toolColors = ["pink", "sky", "lavender", "peach", "mint"];

export default function CapabilitiesSection() {
  return (
    <section className="section-shell" id="capabilities">
      <ScrollReveal>
        <p className="section-kicker">✦ Soft Skills System</p>
        <h2 className="section-title">Năng lực &amp; Công cụ</h2>
        <p className="section-lead">
          Năng lực nổi bật, nguyên tắc thực hiện bài tập và công cụ sử dụng —
          tổng hợp trực tiếp từ hồ sơ.
        </p>
      </ScrollReveal>

      <div className="capability-grid">
        {capabilities.map((cap, i) => {
          const Icon = capIcons[i];
          return (
            <ScrollReveal key={cap.title}>
              <GlassCard className="content-card" accent={capAccent[i]}>
                <PastelTag icon={Icon} color={capColors[i]}>
                  {cap.title}
                </PastelTag>
                <p style={{ marginTop: "14px" }}>{cap.description}</p>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="" style={{ marginTop: "20px" }}>
        <ScrollReveal>
          <GlassCard className="content-card" accent="sky">
            <h3>Công cụ &amp; Nền tảng sử dụng</h3>
            <div className="conclusion-grid">
              {tools.map((tool, gi) => (
                <div
                  key={tool.group}
                  style={{ marginBottom: gi < tools.length - 1 ? "16px" : 0 }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: ".8rem",
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                      color: "var(--text-soft)",
                    }}
                  >
                    {tool.group}
                  </p>
                  <div className="tool-cloud">
                    {tool.items.map((item) => (
                      <PastelTag
                        key={item}
                        color={toolColors[gi % toolColors.length]}
                      >
                        {item}
                      </PastelTag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
