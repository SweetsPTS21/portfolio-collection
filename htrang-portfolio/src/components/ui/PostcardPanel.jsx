import React from "react";

export default function PostcardPanel({ children, className = "", label }) {
    return (
        <section className={`postcard-panel ${className}`.trim()}>
            {label && <span className="postcard-label">{label}</span>}
            {children}
        </section>
    );
}
