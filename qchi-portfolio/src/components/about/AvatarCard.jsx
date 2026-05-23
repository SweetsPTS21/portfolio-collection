import React from "react";
import avatar from "../../assets/kitty-cafe-menu/avatar.jpg";
import kittyMascot from "../../assets/kitty-cafe-menu/kitty-mascot.svg";
import latteCup from "../../assets/kitty-cafe-menu/latte-cup.svg";

export default function AvatarCard() {
    return (
        <div className="avatar-card">
            <img className="avatar-kitty" src={kittyMascot} alt="" />
            <img className="avatar" src={avatar} alt="Nguyễn Khánh Chi" />
            <img className="avatar-latte" src={latteCup} alt="" />
        </div>
    );
}
