import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Download, FileText, ChevronDown, ChevronUp } from "lucide-react";
import CitationTag from "../../components/ui/CitationTag.jsx";

export default function CaseFileCard({ project, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  // Define relative paths for documents
  const absolutePdfPath = `/${project.pdfPath}`; // Starts with /docs/btX.pdf

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay }}
      style={{
        background: "var(--paper-white)",
        border: "1.5px solid var(--sky-border)",
        borderRadius: "10px",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      whileHover={{
        boxShadow: "var(--shadow-lg)",
        borderColor: "var(--tab-blue)",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Lined ruled sheet effect at top */}
      <div 
        style={{ 
          height: "12px", 
          background: "repeating-linear-gradient(90deg, var(--tab-blue) 0px, var(--tab-blue) 15px, #FFFFFF 15px, #FFFFFF 20px)",
          opacity: 0.55
        }} 
      />

      {/* Card Header Brief */}
      <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
        
        {/* Row 1: Exhibit Index Badge and Chapter */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CitationTag label={project.exhibitNum} color="var(--legal-blue)" />
          <span 
            style={{ 
              fontSize: "0.78rem", 
              fontWeight: "bold", 
              color: "var(--slate-grey)",
              letterSpacing: "1px" 
            }}
          >
            {project.chapter}
          </span>
        </div>

        {/* Row 2: Assignment Title */}
        <h3 
          style={{ 
            fontFamily: "var(--font-heading)", 
            fontSize: "1.15rem", 
            color: "var(--ink-navy)",
            lineHeight: 1.4,
            marginTop: "4px"
          }}
        >
          {project.title}
        </h3>

        {/* Goal summary */}
        <p 
          style={{ 
            fontSize: "0.85rem", 
            color: "var(--slate-grey)",
            fontStyle: "italic",
            lineHeight: 1.5,
            borderLeft: "2px solid var(--sky-border)",
            paddingLeft: "10px",
            marginTop: "4px"
          }}
        >
          <strong>Mục tiêu:</strong> {project.objective}
        </p>

        {/* Row 3: Toggle Button Indicator */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginTop: "8px",
            fontSize: "0.82rem",
            color: "var(--legal-blue)",
            fontWeight: "bold"
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FileText size={14} />
            Xem tài liệu chi tiết
          </span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {/* Stretched Content Sheet (Dossier expansion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div 
              style={{ 
                padding: "0 28px 24px 28px", 
                borderTop: "1px dashed var(--sky-border)",
                backgroundColor: "#F9FDFF" 
              }}
              onClick={(e) => e.stopPropagation()} // Stop propagation from closing when clicking details
            >
              {/* Detailed Process Description */}
              <div style={{ marginTop: "16px", fontSize: "0.9rem", color: "var(--ink-navy)", lineHeight: 1.6 }}>
                <strong style={{ display: "block", color: "var(--legal-blue)", marginBottom: "12px" }}>
                  ⚖️ Tiến trình thực hiện chuyên môn (Quy trình các bước):
                </strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "4px" }}>
                  {project.processSteps.map((step, sIdx) => (
                    <div key={sIdx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span 
                        style={{ 
                          background: "rgba(30, 120, 200, 0.08)",
                          color: "var(--legal-blue)",
                          border: "1px solid var(--sky-border)",
                          borderRadius: "4px",
                          width: "22px",
                          height: "22px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.72rem",
                          fontWeight: "bold",
                          flexShrink: 0
                        }}
                      >
                        {sIdx + 1}
                      </span>
                      <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-navy)", lineHeight: 1.5 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Document PDF */}
              <div 
                className="spell-actions"
                style={{ 
                  display: "flex", 
                  gap: "12px", 
                  marginTop: "20px" 
                }}
              >
                {/* View PDF action */}
                <a
                  href={absolutePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    background: "var(--legal-blue)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#155996"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "var(--legal-blue)"}
                >
                  <Eye size={14} />
                  Đọc Minh Chứng (PDF)
                </a>

                {/* Download PDF action */}
                <a
                  href={absolutePdfPath}
                  download={project.pdfName}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    background: "#FFFFFF",
                    border: "1.5px solid var(--sky-border)",
                    color: "var(--legal-blue)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--brief-azure)";
                    e.currentTarget.style.borderColor = "var(--legal-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--sky-border)";
                  }}
                >
                  <Download size={14} />
                  Tải Về (.pdf)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
