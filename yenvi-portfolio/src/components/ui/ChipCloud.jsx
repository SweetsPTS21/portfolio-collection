import React from "react";

export default function ChipCloud({ items, variant = "default" }) {
    return (
        <div className={`chip-cloud ${variant === "dark" ? "dark" : ""}`}>
            {items.map((item) => (
                <span key={item}>{item}</span>
            ))}
        </div>
    );
}
