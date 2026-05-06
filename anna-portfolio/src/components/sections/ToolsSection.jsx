import { HardDrive, GraduationCap, Bot, Palette, Users } from "lucide-react";
import { toolGroups } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const ICON_MAP = { HardDrive, GraduationCap, Bot, Palette, Users };

function ToolRow({ group, icon, tools, index }) {
  const Icon = ICON_MAP[icon] || HardDrive;

  return (
    <ScrollReveal delay={index * 80} direction="left">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: 24,
          padding: "20px 0",
          borderBottom: "1px solid var(--color-border)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon
              size={15}
              strokeWidth={1.5}
              style={{ color: "var(--color-primary)" }}
            />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--color-text)",
            }}
          >
            {group}
          </span>
        </div>
        <p
          style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.7 }}
        >
          {tools}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function ToolsSection() {
  return (
    <section
      id="tools"
      style={{
        padding: "80px 0",
        borderBottom: "1px solid var(--color-border)",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <ScrollReveal>
          <SectionTitle
            number="03"
            title="Công cụ & Nền tảng"
            subtitle="Các công cụ đã ứng dụng trong quá trình học tập và thực hành số"
          />
        </ScrollReveal>

        <div>
          {toolGroups.map((t, i) => (
            <ToolRow key={t.group} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
