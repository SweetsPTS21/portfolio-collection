import { motion } from 'framer-motion';
import { Bot, Download, ExternalLink, FileText, Folder, Handshake, Search, ShieldCheck } from 'lucide-react';

const icons = [Folder, Search, Bot, Handshake, FileText, ShieldCheck];

export default function ChapterTalismanCard({ chapter, index, pdfFile }) {
  const Icon = icons[index] ?? Folder;

  return (
    <motion.article
      className="chapter-card"
      initial={{ opacity: 0, y: 28, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.52, delay: Math.min(index * 0.06, 0.28), ease: 'easeOut' }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
    >
      <div className="chapter-seal">
        <Icon size={24} aria-hidden="true" />
      </div>
      <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
      <h3>{chapter.title}</h3>
      <p className="label">Mục tiêu</p>
      <p>{chapter.objective}</p>
      <p className="label">Quá trình thực hiện</p>
      <p>{chapter.process}</p>
      {pdfFile ? (
        <div className="project-file-actions" aria-label={`Tệp minh chứng ${pdfFile.fileName}`}>
          <a href={pdfFile.href} target="_blank" rel="noreferrer">
            <ExternalLink size={18} aria-hidden="true" />
            <span>Mở PDF</span>
          </a>
          <a href={pdfFile.href} download>
            <Download size={18} aria-hidden="true" />
            <span>Tải PDF</span>
          </a>
        </div>
      ) : null}
    </motion.article>
  );
}
