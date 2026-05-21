import React from "react";

export default function BubbleButton({ children, className = "", ...props }) {
  return (
    <a className={`bubble-button ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
