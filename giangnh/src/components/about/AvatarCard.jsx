import React from "react";
import avatar from "../../../docs/avatar.jpg";
import cloudDeco from "../../assets/unicorn-parfait-island/cotton-candy-clouds.svg";
import starDeco from "../../assets/unicorn-parfait-island/star-candy-sprinkles.svg";

export default function AvatarCard() {
  return (
    <div className="avatar-card">
      {/* Decorative Cloud background */}
      <img 
        className="avatar-deco" 
        src={cloudDeco} 
        alt="" 
        style={{ top: '-10px', left: '-15px', width: '120px', height: 'auto', opacity: 0.65, transform: 'rotate(-10deg)', zIndex: 0 }} 
      />

      {/* Avatar Container */}
      <div className="avatar-image-container" style={{ zIndex: 1 }}>
        <img className="avatar-image" src={avatar} alt="Nguyễn Hương Giang" />
      </div>

      {/* Decorative Star foreground */}
      <img 
        className="avatar-deco" 
        src={starDeco} 
        alt="" 
        style={{ bottom: '15px', right: '15px', width: '80px', height: 'auto', opacity: 0.85, zIndex: 2 }} 
      />
    </div>
  );
}
