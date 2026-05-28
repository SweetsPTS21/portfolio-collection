import React from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { GinghamCard } from "../components/ui/GinghamCard";
import { JamTag } from "../components/ui/JamTag";
import { BerryButton } from "../components/ui/BerryButton";
import { portfolioData } from "../data/portfolioData";
import { FileText, Search, Sparkles, Users, Film, ShieldCheck, ExternalLink } from "lucide-react";

// Mapping Lucide icons according to the chapter
const iconMap = {
  FileText: FileText,
  Search: Search,
  Sparkles: Sparkles,
  Users: Users,
  Film: Film,
  ShieldCheck: ShieldCheck,
};

// Rotating color scheme for JamTags
const variantMap = {
  1: "pink",
  2: "mint",
  3: "yellow",
  4: "pink",
  5: "mint",
  6: "yellow",
};

export const ProjectsPage = () => {
  const { projects } = portfolioData;

  return (
    <PageTransition>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* Title Section */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem", color: "var(--huong-text)", marginBottom: "8px" }}>
            Hành Trình Dự Án
          </h2>
          <p style={{ color: "var(--huong-text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
            Từng bài tập đều được thực hiện cẩn trọng, đi thẳng vào trọng tâm và thể hiện tư duy độc lập của mình.
          </p>
        </div>

        {/* 3-column project cards grid */}
        <div className="project-grid">
          {projects.map((project, idx) => {
            const IconComponent = iconMap[project.icon] || FileText;
            const tagVariant = variantMap[project.chapter];

            return (
              <GinghamCard
                key={project.chapter}
                stickerType={idx % 2 === 0 ? "strawberry" : "flower"}
                accentType={idx % 3 === 0 ? "ribbon" : null}
                index={idx}
                className="project-pastry-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                {/* Header Container (Icon + JamTag side by side) */}
                <div 
                  style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "flex-start",
                    marginBottom: "16px"
                  }}
                >
                  <div 
                    style={{ 
                      padding: "10px", 
                      background: "var(--huong-bg-blush)", 
                      border: "2px solid var(--huong-border)",
                      borderRadius: "14px",
                      color: "var(--huong-pink)"
                    }}
                  >
                    <IconComponent size={24} strokeWidth={2.5} />
                  </div>
                  <JamTag chapter={project.chapter} variant={tagVariant} />
                </div>

                {/* Body Content */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                  <h3 
                    style={{ 
                      fontSize: "1.25rem", 
                      lineHeight: "1.4",
                      fontFamily: "Quicksand, sans-serif",
                      fontWeight: "600"
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  <div>
                    <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--huong-text-light)", display: "block", marginBottom: "4px" }}>
                      Mục tiêu
                    </strong>
                    <p style={{ fontSize: "0.9rem", color: "var(--huong-text-muted)", lineHeight: "1.5" }}>
                      {project.goal}
                    </p>
                  </div>

                  <div style={{ borderLeft: "3px solid var(--huong-pink-soft)", paddingLeft: "12px", marginTop: "8px" }}>
                    <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--huong-pink)", display: "block", marginBottom: "4px" }}>
                      Thực hiện
                    </strong>
                    <p style={{ fontSize: "0.9rem", color: "var(--huong-text)", lineHeight: "1.5", fontStyle: "italic" }}>
                      {project.process}
                    </p>
                  </div>
                </div>

                {/* Evidence Link Button */}
                <div style={{ alignSelf: "flex-start" }}>
                  <a href={`/${project.evidence}`} target="_blank" rel="noopener noreferrer">
                    <BerryButton
                      icon={<ExternalLink size={16} />}
                      variant={idx % 2 === 0 ? "primary" : "secondary"}
                      style={{ fontSize: "0.9rem", padding: "8px 18px" }}
                    >
                      Minh chứng PDF
                    </BerryButton>
                  </a>
                </div>

              </GinghamCard>
            );
          })}
        </div>

      </div>
    </PageTransition>
  );
};
