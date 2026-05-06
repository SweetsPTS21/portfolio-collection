import {
  FolderOpen,
  Search,
  MessageSquare,
  LayoutGrid,
  Target,
  Brain,
  Cpu,
} from "lucide-react";
import { skills } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const ICON_MAP = {
  FolderOpen,
  Search,
  MessageSquare,
  LayoutGrid,
  Target,
  Brain,
  Cpu,
};

function SkillCard({ id, title, icon, desc, index }) {
  const Icon = ICON_MAP[icon] || FolderOpen;

  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div
        style={{
          border: "1px solid var(--color-border)",
          padding: "24px",
          borderRadius: 4,
          background: "#fff",
          position: "relative",
          height: "100%",
          transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-primary)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(27,58,92,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Decorative number */}
        <span
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 28,
            fontWeight: 700,
            color: "var(--color-primary)",
            opacity: 0.08,
            lineHeight: 1,
          }}
        >
          {id}
        </span>

        {/* Icon */}
        <div
          style={{
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--color-border)",
            borderRadius: 4,
            marginBottom: 16,
            background: "var(--color-surface, #F2EFE8)",
          }}
        >
          <Icon
            size={18}
            strokeWidth={1.5}
            style={{ color: "var(--color-primary)" }}
          />
        </div>

        <h3
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 15,
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: 10,
            lineHeight: 1.35,
          }}
        >
          {title}
        </h3>
        <p
          style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.7 }}
        >
          {desc}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 0",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <ScrollReveal>
          <SectionTitle
            number="02"
            title="Năng lực nổi bật"
            subtitle="Các kỹ năng cốt lõi hình thành trong quá trình học tập và thực hành số"
          />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} index={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
