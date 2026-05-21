import React from "react";
import envelopeArt from "../../assets/sakura-letter-desk/envelope-set.svg";
import washiTape from "../../assets/sakura-letter-desk/washi-tape-japanese.svg";

export default function EnvelopeCard({ title, children, className = "", variant = "letter-note" }) {
  return (
    <article className={`envelope-card desk-object desk-object-${variant} ${className}`}>
      <img src={washiTape} alt="" aria-hidden="true" className="washi-tape" />
      <img src={envelopeArt} alt="" aria-hidden="true" className="envelope-watermark" />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
