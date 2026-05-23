import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, TrendingUp, Zap } from 'lucide-react';

const skills = [
  { icon: BookOpen, title: 'Thẩm định thông tin', desc: 'Kiểm tra nguồn dữ liệu, đánh giá lập luận dưới nhiều góc độ.' },
  { icon: Zap, title: 'AI tạo sinh', desc: 'Đặt prompt rõ ràng, định hướng AI đúng trọng tâm, loại bỏ nội dung khuôn mẫu.' },
  { icon: TrendingUp, title: 'Trình bày nội dung', desc: 'Bố cục mạch lạc, tối ưu trải nghiệm người xem, thể hiện dấu ấn cá nhân.' },
];

export default function Conclusion() {
  return (
    <section id="conclusion" className="page-section conclusion-section">
      <motion.div
        className="glass-panel conclusion-panel"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="hud-title">
          <span>Tầm nhìn</span>
          <span className="hud-star">✦</span>
        </div>

        <div className="conclusion-grid">
          <div className="conclusion-list">
            {skills.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                className="conclusion-skill"
                key={title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.08 }}
              >
                <div className="conclusion-skill__icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="conclusion-copy">
            <div className="conclusion-mini-card">
              <Target size={22} strokeWidth={1.7} />
              <h3>Điểm tâm đắc & thách thức</h3>
              <p>
                Công nghệ hỗ trợ con người tiếp cận tri thức nhanh hơn, nhưng không thể thay thế tư duy độc lập.
                Thách thức lớn nhất là cá nhân hóa sản phẩm công nghệ sao cho vừa thẩm mỹ vừa nghiêm túc với ngành Luật.
              </p>
            </div>
            <div className="conclusion-quote">
              "Công nghệ có thể giúp con người đi nhanh hơn. Nhưng chính tư duy độc lập và sự tử tế mới quyết định chúng ta sẽ đi xa đến đâu."
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
