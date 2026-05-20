import React from "react";
import avatar from "../../../docs/avatar.png";
import mushroomSvg from "../../assets/fairy-mushroom-forest/mushroom-collection.svg";
import fairySvg from "../../assets/fairy-mushroom-forest/fairy-character.svg";

export default function AvatarCard() {
  return (
    <div className="avatar-card">
      <img className="avatar-mushroom" src={mushroomSvg} alt="" />
      <img className="avatar" src={avatar} alt="Avatar" />
      <img className="avatar-fairy" src={fairySvg} alt="" />
    </div>
  );
}
