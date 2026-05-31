import React from "react";
import { motion } from "framer-motion";
import { toolGroups } from "../../data/portfolioData";
import { Folder, Search, Database, MessageSquare, PenTool } from "lucide-react";

export default function ToolIndexGrid() {
  
  // Icon selectors matching the groups
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Quản lý và lưu trữ dữ liệu":
        return <Folder size={18} />;
      case "Tra cứu và trích dẫn chuyên sâu":
        return <Search size={18} />;
      case "Hỗ trợ phân tích dữ liệu":
        return <Database size={18} />;
      case "Giao tiếp và điều phối nhóm":
        return <MessageSquare size={18} />;
      default:
        return <PenTool size={18} />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3 
        style={{ 
          fontFamily: "var(--font-heading)", 
          fontSize: "1.1rem", 
          color: "var(--ink-navy)",
          borderBottom: "1.5px solid var(--sky-border)",
          paddingBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <span>💼</span> HỆ SINH THÁI CÔNG CỤ SỐ
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {toolGroups.map((group, gIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * gIdx, duration: 0.5 }}
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              border: "1.5px solid var(--sky-border)",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "var(--shadow-sm)",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            whileHover={{
              boxShadow: "var(--shadow-glow)",
              borderColor: "var(--tab-blue)"
            }}
          >
            {/* Category header */}
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "8px", 
                color: "var(--legal-blue)",
                fontWeight: "bold",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "10px"
              }}
            >
              {getCategoryIcon(group.category)}
              <span>{group.category}</span>
            </div>

            {/* List of tools inside category */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.items.map((tool) => (
                <div
                  key={tool.name}
                  title={tool.description}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "6px",
                    background: "var(--paper-white)",
                    border: "1px solid rgba(196, 226, 245, 0.5)",
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    color: "var(--ink-navy)",
                    cursor: "help",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--legal-blue)";
                    e.currentTarget.style.background = "var(--brief-azure)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(196, 226, 245, 0.5)";
                    e.currentTarget.style.background = "var(--paper-white)";
                  }}
                >
                  <span style={{ fontSize: "0.85rem", color: "var(--ink-navy)" }}>{tool.name}</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--slate-grey)", fontWeight: "normal", marginTop: "2px" }}>
                    {tool.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
