import React from "react";
import macaronStack from "../../assets/kitty-cafe-menu/macaron-stack.svg";
import cafeCounter from "../../assets/kitty-cafe-menu/cafe-counter.svg";
import kittyStretching from "../../assets/kitty-cafe-menu/kitty-stretching.svg";
import ChipCloud from "../ui/ChipCloud";

export default function ReflectionHero({ summary, skills }) {
    return (
        <section className="reflection-grid">
            <div className="mirror-card">
                <img src={macaronStack} alt="" />
                <p>{summary}</p>
            </div>
            <div className="constellation-card">
                <img src={cafeCounter} alt="" />
                <img className="panel-kitty-stretching" src={kittyStretching} alt="" />
                <ChipCloud items={skills} variant="dark" />
            </div>
        </section>
    );
}
