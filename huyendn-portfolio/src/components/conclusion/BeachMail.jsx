import React from 'react';
import { motion } from 'framer-motion';
import shellMail from '../../assets/kawaii-beach-day/shell-mail-bottle.svg';
import ChipBucket from '../ui/ChipBucket';

export default function BeachMail({ summary, change, skills }) {
  return (
    <section className="beach-mail-hero">
      <motion.div
        className="mail-copy"
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="quote">{summary}</p>
        <p>{change}</p>
        <ChipBucket items={skills} />
      </motion.div>
      <motion.div
        className="mail-object"
        initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      >
        <img src={shellMail} alt="" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
