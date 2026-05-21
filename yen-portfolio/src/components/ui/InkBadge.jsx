import React from "react";

export default function InkBadge({ children, tone = "sakura" }) {
  return <span className={`ink-badge tone-${tone}`}>{children}</span>;
}
