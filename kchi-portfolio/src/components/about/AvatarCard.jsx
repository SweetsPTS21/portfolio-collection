import React from "react";
import kittyMascot from "../../assets/kitty-cafe-menu/kitty-mascot.svg";
import latteCup from "../../assets/kitty-cafe-menu/latte-cup.svg";

export default function AvatarCard() {
    return (
        <div className="avatar-card">
            <img className="avatar-kitty" src={kittyMascot} alt="" />
            <img className="avatar-latte" src={latteCup} alt="" />
        </div>
    );
}
