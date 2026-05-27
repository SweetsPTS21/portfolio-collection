import React from "react";

export default function ChipCloud({ items }) {
  return (
    <div className="chip-cloud">
      {items.map((item) => (
        <span className="chip-tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
