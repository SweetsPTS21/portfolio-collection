import React from "react";

export default function InfoBadge({ label, value }) {
  return (
    <div className="info-badge">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
