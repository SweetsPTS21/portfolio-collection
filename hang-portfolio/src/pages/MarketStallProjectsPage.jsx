import { motion } from 'framer-motion';
import StallProjectGrid from '../features/market-stalls/StallProjectGrid.jsx';
import { pageReveal } from '../app/motionConfig.js';

export default function MarketStallProjectsPage() {
  return (
    <section className="market-section projects-section" id="stalls">
      <motion.div className="section-heading" variants={pageReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="section-kicker">Market stalls</span>
        <h2>Những quầy bài thực hành</h2>
        <p>
          Mỗi dự án được trình bày như một quầy nhỏ trong chợ biển: có bảng giá, sticker trái cây,
          souvenir và đường dẫn tới tài liệu PDF.
        </p>
      </motion.div>
      <StallProjectGrid />
    </section>
  );
}
