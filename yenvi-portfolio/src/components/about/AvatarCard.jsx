import React from "react";
import avatar from "../../assets/magical-girl-ui/avatar.jpg";
import magicCircle from "../../assets/magical-girl-ui/magic-circle.svg";
import wandTrail from "../../assets/magical-girl-ui/wand-and-trail.svg";

export default function AvatarCard() {
    return (
        <div className="avatar-card">
            <img className="magic-circle" src={magicCircle} alt="" />
            <img className="avatar" src={avatar} alt="Hà Thị Yến Vi" />
            <img className="wand-trail" src={wandTrail} alt="" />
        </div>
    );
}
