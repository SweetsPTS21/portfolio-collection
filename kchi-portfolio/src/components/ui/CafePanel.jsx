import React from "react";

export default function CafePanel({ title, icon, children }) {
    return (
        <article className="cafe-panel">
            <div className="panel-title">
                {icon}
                <h2>{title}</h2>
            </div>
            {children}
        </article>
    );
}
