import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake, Mail, Sparkles, WandSparkles } from "lucide-react";
import NotebookCard from "../components/ui/NotebookCard.jsx";
import WritingObject from "../features/writing-object/WritingObject.jsx";
import { challenges, pageCopy, profile, reflections } from "../data/portfolioData.js";
import signatureCheck from "../assets/blue-rain-notebook/signature-check.svg";

export default function SignatureContactPage() {
  return (
    <section className="signature-page">
      <motion.div
        className="page-heading signature-heading"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <span className="soft-badge"><Mail size={17} /> {pageCopy.conclusion.badge}</span>
        <h1>{pageCopy.conclusion.title}</h1>
        <p>{pageCopy.conclusion.intro}</p>
      </motion.div>

      <div className="signature-layout">
        <motion.div
          className="signature-stage"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <WritingObject />
          <img className="signature-stamp" src={signatureCheck} alt="" />
        </motion.div>

        <div className="summary-stack">
          {reflections.map((item, index) => (
            <NotebookCard key={item.title} delay={index * 0.06}>
              <CheckCircle2 size={25} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </NotebookCard>
          ))}
        </div>
      </div>

      <section className="notebook-section challenge-heading">
        <WandSparkles size={24} />
        <h2>{pageCopy.conclusion.challengeTitle}</h2>
      </section>

      <div className="challenge-grid">
        {challenges.map((item, index) => (
          <motion.article
            className="challenge-note"
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <WandSparkles size={22} />
            <p>{item}</p>
          </motion.article>
        ))}
      </div>

      <motion.section className="thanks-panel" whileHover={{ y: -5 }}>
        <HeartHandshake size={30} />
        <h2>{pageCopy.conclusion.thanksTitle}</h2>
        <p>{pageCopy.conclusion.thanks}</p>
        <Sparkles className="floating-sparkle" size={26} />
      </motion.section>
    </section>
  );
}
