import React from "react";

export default function MagicPanel({ title, icon, children }) {
    return (
        <article className="magic-panel">
            <div className="panel-title">
                {icon}
                <h2>{title}</h2>
            </div>
            {children}
        </article>
    );
}
