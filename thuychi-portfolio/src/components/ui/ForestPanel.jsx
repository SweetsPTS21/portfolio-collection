import React from "react";

export default function ForestPanel({ title, icon, children }) {
  return (
    <article className="forest-panel">
      <div className="panel-title">
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}
