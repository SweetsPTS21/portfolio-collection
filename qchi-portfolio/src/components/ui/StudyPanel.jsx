import React from "react";

export default function StudyPanel({ title, icon, children }) {
    return (
        <article className="study-panel">
            <div className="panel-title">
                {icon}
                <h2>{title}</h2>
            </div>
            {children}
        </article>
    );
}
