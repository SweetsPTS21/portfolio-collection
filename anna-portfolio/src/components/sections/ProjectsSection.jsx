import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  ChevronRight,
  Tag,
  FileText,
  Paperclip,
  BarChart3,
  Check,
} from "lucide-react";
import { projects } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

// ── Project Nav Item ──────────────────────────────────────
function NavItem({ project, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        width: "100%",
        padding: "14px 16px",
        background: isActive
          ? "var(--color-primary-10, rgba(27,58,92,0.08))"
          : "transparent",
        border: "none",
        borderLeft: `3px solid ${isActive ? "var(--color-primary)" : "transparent"}`,
        borderRadius: "0 4px 4px 0",
        cursor: "pointer",
        textAlign: "left",
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = "rgba(27,58,92,0.04)";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = "transparent";
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: isActive ? "var(--color-primary)" : "var(--color-muted)",
          letterSpacing: "0.08em",
          paddingTop: 2,
          minWidth: 28,
        }}
      >
        {String(project.id).padStart(2, "0")}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: 12,
            color: isActive ? "var(--color-primary)" : "var(--color-muted)",
            marginBottom: 2,
            fontWeight: 500,
          }}
        >
          {project.assignmentType}
        </p>
        <p
          style={{
            fontSize: 13,
            fontWeight: isActive ? 600 : 400,
            color: isActive ? "var(--color-text)" : "var(--color-text)",
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {project.title}
        </p>
      </div>
      {isActive && (
        <ChevronRight
          size={14}
          strokeWidth={2}
          style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }}
        />
      )}
    </button>
  );
}

// ── Report Table ──────────────────────────────────────────
function ReportTable({ toolEval }) {
  return (
    <div style={{ marginTop: 24, overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 13,
        }}
      >
        <thead>
          <tr style={{ background: "var(--color-surface, #F2EFE8)" }}>
            {["Công cụ", "Điểm mạnh", "Hạn chế", "Nhận xét"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "10px 14px",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {toolEval.map((row, i) => (
            <tr key={i}>
              {[row.tool, row.strength, row.limit, row.rating].map(
                (cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "10px 14px",
                      border: "1px solid var(--color-border)",
                      color:
                        j === 0 ? "var(--color-primary)" : "var(--color-text)",
                      fontWeight: j === 0 ? 600 : 400,
                      background:
                        i % 2 === 0 ? "#fff" : "rgba(250,250,247,0.6)",
                    }}
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Project Detail ────────────────────────────────────────
function ProjectDetail({ project }) {
  const spring = useSpring({
    from: { opacity: 0, transform: "translateX(12px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    reset: true,
    config: { tension: 200, friction: 26 },
  });

  return (
    <animated.div style={spring}>
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid var(--color-border)",
          paddingBottom: 24,
          marginBottom: 28,
        }}
      >
        <span
          className="section-number"
          style={{ display: "block", marginBottom: 8 }}
        >
          {project.chapter} · {project.assignmentType}
        </span>
        <h3
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 22,
            color: "var(--color-text)",
            marginBottom: 12,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "var(--color-muted)",
            fontStyle: "italic",
          }}
        >
          {project.summary}
        </p>

        {/* Tags */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}
        >
          {project.tags.map((t) => (
            <span
              className="tag-pill"
              key={t}
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <Tag size={10} strokeWidth={2} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <FileText
            size={14}
            strokeWidth={1.5}
            style={{ color: "var(--color-primary)" }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--color-muted)",
            }}
          >
            NỘI DUNG BÀI TẬP
          </span>
        </div>
        <p
          style={{ fontSize: 14, lineHeight: 1.85, color: "var(--color-text)" }}
        >
          {project.content}
        </p>
      </div>

      {/* Report table if applicable */}
      {project.hasReport && project.reportSummary && (
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <BarChart3
              size={14}
              strokeWidth={1.5}
              style={{ color: "var(--color-primary)" }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--color-muted)",
              }}
            >
              BÁO CÁO ĐÁNH GIÁ CÔNG CỤ
            </span>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--color-muted)",
              marginBottom: 12,
              fontStyle: "italic",
            }}
          >
            {project.reportSummary.title}
          </p>
          <ReportTable toolEval={project.reportSummary.toolEval} />
        </div>
      )}

      {/* Attachment placeholder */}
      <div
        style={{
          border: "1px dashed var(--color-border)",
          borderRadius: 4,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(250,250,247,0.6)",
        }}
      >
        <Paperclip
          size={16}
          strokeWidth={1.5}
          style={{ color: "var(--color-muted)" }}
        />
        <div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-muted)",
            }}
          >
            Minh chứng bài tập
          </p>
          <p
            style={{ fontSize: 12, color: "var(--color-border)", marginTop: 2 }}
          >
            Hình ảnh và tài liệu đính kèm sẽ được cập nhật · Nhấp để phóng to
          </p>
        </div>
      </div>
    </animated.div>
  );
}

// ── Main ──────────────────────────────────────────────────
export default function ProjectsSection() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="projects"
      style={{
        padding: "80px 0",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <ScrollReveal>
          <SectionTitle
            number="04"
            title="Dự án & Bài tập"
            subtitle="6 bài tập xuyên suốt khóa học — đầy đủ nội dung và minh chứng"
          />
        </ScrollReveal>

        {/* Tip */}
        <ScrollReveal delay={100}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 32,
              padding: "10px 14px",
              background: "rgba(27,58,92,0.05)",
              borderRadius: 4,
              border: "1px solid rgba(27,58,92,0.1)",
            }}
          >
            <Check
              size={13}
              strokeWidth={2}
              style={{ color: "var(--color-primary)" }}
            />
            <span style={{ fontSize: 12, color: "var(--color-muted)" }}>
              Mẹo: Chọn bài → kéo xuống xem từng trang/ảnh → click để xem rõ chữ
            </span>
          </div>
        </ScrollReveal>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 280px) 1fr",
            gap: 0,
            border: "1px solid var(--color-border)",
            borderRadius: 4,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {/* Sidebar nav */}
          <div
            style={{
              borderRight: "1px solid var(--color-border)",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid var(--color-border)",
                background: "var(--color-surface, #F2EFE8)",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--color-muted)",
                }}
              >
                CHỌN BÀI TẬP
              </span>
            </div>
            {projects.map((p) => (
              <NavItem
                key={p.id}
                project={p}
                isActive={selected.id === p.id}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>

          {/* Detail panel */}
          <div style={{ padding: "32px 36px", minHeight: 480 }}>
            <ProjectDetail key={selected.id} project={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}
