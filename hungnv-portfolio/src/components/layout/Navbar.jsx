import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "../../app/routes";
import scaleIcon from "../../assets/azure-courtroom-brief/legal-tool-icons.svg";

export default function Navbar() {
  return (
    <nav className="frosted-nav-bar">
      <div className="frosted-nav-container">
        {/* Branding Emblem */}
        <div className="brand-title">
          <div 
            style={{ 
              width: "28px", 
              height: "28px", 
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              background: "rgba(30, 120, 200, 0.1)",
              border: "1px solid var(--sky-border)"
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>⚖️</span>
          </div>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: "bold" }}>
            HUNG NV <span style={{ fontSize: "0.85rem", color: "var(--legal-blue)", fontWeight: "normal", letterSpacing: "1px" }}>[PORTFOLIO]</span>
          </span>
        </div>

        {/* Folder tab navigation items */}
        <div className="nav-tabs-wrapper">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-folder-tab active" : "nav-folder-tab"
                }
                style={{ position: "relative" }}
              >
                {({ isActive }) => (
                  <>
                    <Icon size={16} strokeWidth={2.2} />
                    <span>{item.label}</span>
                    
                    {/* Framer motion ink highlight underneath */}
                    {isActive && (
                      <motion.div
                        layoutId="activeInkTab"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          backgroundColor: "var(--legal-blue)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
