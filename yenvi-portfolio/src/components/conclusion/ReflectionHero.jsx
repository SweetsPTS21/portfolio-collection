import React from "react";
import compactMirror from "../../assets/magical-girl-ui/compact-mirror.svg";
import constellationMap from "../../assets/magical-girl-ui/constellation-map.svg";
import ChipCloud from "../ui/ChipCloud";

export default function ReflectionHero({ summary, skills }) {
    return (
        <section className="reflection-grid">
            <div className="mirror-card">
                <img src={compactMirror} alt="" />
                <p>{summary}</p>
            </div>
            <div className="constellation-card">
                <img src={constellationMap} alt="" />
                <ChipCloud items={skills} variant="dark" />
            </div>
        </section>
    );
}
