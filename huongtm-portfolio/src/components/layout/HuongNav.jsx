import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Sparkles, Heart } from "lucide-react";

export const HuongNav = () => {
  return (
    <nav className="nav-container">
      {/* About Tag */}
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-tag-item ${isActive ? "active" : ""}`}
        style={{ position: "relative" }}
      >
        {({ isActive }) => (
          <>
            <MapPin size={18} strokeWidth={2.5} />
            Giới Thiệu
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "12px",
                  pointerEvents: "none",
                }}
              >
                {/* Tiny Strawberry Active Indicator */}
                <svg viewBox="0 0 100 100" width="18" height="18">
                  <path d="M 50,85 C 15,80 0,40 0,15 C 0,-10 25,-20 50,-20 C 75,-20 100,-10 100,15 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="8" />
                  <path d="M 50,-20 L 30,-30 L 40,-13 L 20,-7 L 45,0 Z" fill="#A8EDCA" />
                </svg>
              </span>
            )}
          </>
        )}
      </NavLink>

      {/* Projects Tag */}
      <NavLink
        to="/projects"
        className={({ isActive }) => `nav-tag-item ${isActive ? "active" : ""}`}
        style={{ position: "relative" }}
      >
        {({ isActive }) => (
          <>
            <Sparkles size={18} strokeWidth={2.5} />
            Dự Án
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "12px",
                  pointerEvents: "none",
                }}
              >
                <svg viewBox="0 0 100 100" width="18" height="18">
                  <path d="M 50,85 C 15,80 0,40 0,15 C 0,-10 25,-20 50,-20 C 75,-20 100,-10 100,15 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="8" />
                  <path d="M 50,-20 L 30,-30 L 40,-13 L 20,-7 L 45,0 Z" fill="#A8EDCA" />
                </svg>
              </span>
            )}
          </>
        )}
      </NavLink>

      {/* Conclusion Tag */}
      <NavLink
        to="/conclusion"
        className={({ isActive }) => `nav-tag-item ${isActive ? "active" : ""}`}
        style={{ position: "relative" }}
      >
        {({ isActive }) => (
          <>
            <Heart size={18} strokeWidth={2.5} />
            Tổng Kết
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "12px",
                  pointerEvents: "none",
                }}
              >
                <svg viewBox="0 0 100 100" width="18" height="18">
                  <path d="M 50,85 C 15,80 0,40 0,15 C 0,-10 25,-20 50,-20 C 75,-20 100,-10 100,15 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="8" />
                  <path d="M 50,-20 L 30,-30 L 40,-13 L 20,-7 L 45,0 Z" fill="#A8EDCA" />
                </svg>
              </span>
            )}
          </>
        )}
      </NavLink>
    </nav>
  );
};
