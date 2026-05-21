import React from "react";

export default function CoralCard({ title, icon, children, className = "" }) {
  return (
    <article className={`coral-card ${className}`.trim()}>
      <div className="coral-card-title">
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}
