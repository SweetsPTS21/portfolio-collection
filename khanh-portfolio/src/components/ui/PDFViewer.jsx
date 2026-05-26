import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import owlMascot from "../../assets/theme/cloudy-owl-mascot.png";

export default function PDFViewer({ pdfUrl, title }) {
  return (
    <div className="cloud-card pdf-viewer-card">
      <div
        className="panel-header"
        style={{ justifyContent: "space-between", marginBottom: "16px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FileText size={20} />
          <h2>Tài Liệu</h2>
        </div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="back-btn"
          style={{ padding: "6px 14px", margin: 0, fontSize: "0.85rem" }}
        >
          <ExternalLink size={14} />
          <span>Xem thêm</span>
        </a>
      </div>

      {/* Embed PDF with fallback */}
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <object
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{
            border: "1px solid rgba(137, 207, 240, 0.2)",
            borderRadius: "12px",
          }}
        >
          {/* Cute Fallback for unsupported devices/browsers */}
          <div className="pdf-fallback-container">
            <img
              src={owlMascot}
              className="pdf-fallback-owl"
              alt="Cú mây học bài"
            />
            <div>
              <h3 style={{ marginBottom: "8px" }}>Xem tài liệu của Khánh</h3>
              <p
                style={{
                  color: "var(--deep-navy)",
                  opacity: 0.8,
                  fontSize: "0.9rem",
                  marginBottom: "16px",
                }}
              >
                Trình duyệt của bạn không hỗ trợ hiển thị file PDF trực tiếp.
                Hãy click nút bên dưới để xem hoặc tải xuống bài tập của mình
                nhé!
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="back-btn"
                style={{ display: "inline-flex", margin: 0 }}
              >
                <ExternalLink size={16} />
                <span>Mở Xem PDF: {title}</span>
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
}
