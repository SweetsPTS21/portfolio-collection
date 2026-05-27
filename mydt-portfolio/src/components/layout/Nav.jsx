// src/components/layout/Nav.jsx
import React from "react";
import { Link, useRouter } from "../../app/routes";
import { motion } from "framer-motion";
import { Scale, BookOpen, FileText, Compass } from "lucide-react";

export function Nav() {
  const { currentPath } = useRouter();

  const navItems = [
    { to: "/about", label: "About", icon: BookOpen },
    { to: "/projects", label: "Projects", icon: FileText },
    { to: "/conclusion", label: "Conclusion", icon: Compass },
  ];

  return (
    <nav
      className="lanNav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 40px",
        background: "rgba(234, 244, 255, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1.5px solid var(--lan-border)",
        boxShadow: "0 4px 20px rgba(30, 111, 168, 0.05)",
      }}
    >
      {/* Stylized legal academic logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            background: "var(--lan-blue)",
            color: "#FFFFFF",
            padding: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Scale size={18} strokeWidth={2.5} />
        </div>
        <span
          style={{
            fontFamily: "var(--lan-font-heading)",
            fontSize: "20px",
            fontWeight: "800",
            color: "var(--lan-text)",
            letterSpacing: "0.5px",
          }}
        >
          My.LawDiary
        </span>
      </div>

      {/* Navigation tabs */}
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navItems.map((item) => {
          const isActive = currentPath === item.to;
          const Icon = item.icon;

          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`navLink ${isActive ? "active" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontFamily: "var(--lan-font-body)",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: isActive ? "#FFFFFF" : "var(--lan-text-muted)",
                  background: isActive ? "var(--lan-blue)" : "transparent",
                  border: isActive ? "1px solid var(--lan-slate)" : "1px solid transparent",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Icon size={15} strokeWidth={2.5} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
