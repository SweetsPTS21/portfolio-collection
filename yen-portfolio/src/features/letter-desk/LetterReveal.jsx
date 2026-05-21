import React from "react";
import { motion } from "framer-motion";
import avatarUrl from "../../../docs/avatar.jpg";
import envelopeArt from "../../assets/sakura-letter-desk/envelope-set.svg";

export default function LetterReveal({ profile }) {
  return (
    <motion.article className="letter-reveal" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <img src={envelopeArt} alt="" aria-hidden="true" className="letter-envelope" />
      <div className="avatar-stamp">
        <img src={avatarUrl} alt={profile.name} />
      </div>
      <p className="letter-kicker">Dear visitor,</p>
      <h2>{profile.name}</h2>
      <p>{profile.hobby}</p>
      <p>{profile.style}</p>
    </motion.article>
  );
}
