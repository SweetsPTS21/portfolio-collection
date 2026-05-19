import React from "react";
import avatar from "../../../docs/avatar.jpg";
import bunnyMascot from "../../assets/bunny-cloud-garden/bunny-mascot.svg";

export default function AvatarCard() {
  return (
    <div className="avatar-card">
      <img className="bunny-decoration" src={bunnyMascot} alt="" />
      <img className="avatar" src={avatar} alt="Nguyễn Phương Nhi" />
    </div>
  );
}
