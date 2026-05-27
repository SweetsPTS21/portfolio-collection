import React from "react";

export default function ParfaitPanel({ title, icon, children }) {
  return (
    <article className="parfait-panel">
      <div className="panel-title">
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}
