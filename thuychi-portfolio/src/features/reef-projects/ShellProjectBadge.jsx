import React from "react";
import shellPearlIcons from "../../assets/underwater-world/shell-pearl-icons.svg";

export default function ShellProjectBadge({ children }) {
  return (
    <span className="shell-project-badge">
      <img src={shellPearlIcons} alt="" />
      {children}
    </span>
  );
}
