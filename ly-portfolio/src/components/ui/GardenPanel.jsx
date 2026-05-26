import React from "react";

export default function GardenPanel({ title, icon, children }) {
  return (
    <article className="garden-panel">
      <div className="panel-title">
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}
