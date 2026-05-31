import { motion } from "framer-motion";
import bluePenSet from "../../assets/blue-rain-notebook/blue-pen-set.svg";
import signatureCheck from "../../assets/blue-rain-notebook/signature-check.svg";

export default function WritingObject() {
  return (
    <div className="writing-object">
      <motion.img
        src={bluePenSet}
        alt=""
        initial={{ x: -26, rotate: -10 }}
        animate={{ x: [0, 28, 0], rotate: [-7, 3, -7] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="signature-check-art"
        src={signatureCheck}
        alt=""
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
