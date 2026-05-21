import React from "react";

export default function ShellTag({ children, className = "" }) {
  return <span className={`shell-tag ${className}`.trim()}>{children}</span>;
}
