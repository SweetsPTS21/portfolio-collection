import React from "react";
import avatar from "../../../docs/avatar.jpg";
import swanMascot from "../../assets/ballet-swan-lake/swan-mascot.svg";

export default function AvatarCard() {
  return (
    <div className="avatar-card">
      <img className="bunny-decoration" src={swanMascot} alt="" />
      <img className="avatar" src={avatar} alt="Tô Khánh Ly" />
    </div>
  );
}
