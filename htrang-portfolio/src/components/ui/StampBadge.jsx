import React from "react";

export default function StampBadge({ children, tone = "blue" }) {
    return <span className={`stamp-badge stamp-badge-${tone}`}>{children}</span>;
}
