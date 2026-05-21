import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { Star, AlertTriangle, MessageCircle, Heart } from 'lucide-react';
import { OffsetBlock, DotGrid, CornerBrackets, LineAccent, VerticalText, EqualizerBars } from '../components/Decorative';
import { fadeInUp, staggerContainer } from '../animations';

const { Title, Paragraph } = Typography;

export default function Conclusion() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ═══ HEADER — Asymmetric ═══ */}
      <section style={{ position: 'relative', padding: '64px 0 32px', overflow: 'hidden' }}>
        <span className="watermark" style={{ top: -20, right: '5%', color: 'var(--color-primary)' }}>
          END
        </span>

        <OffsetBlock width={80} height={80} gradient="linear-gradient(135deg, #FFDEE9, #FF6B9D)" rotation={8} opacity={0.2} style={{ top: 20, right: '15%' }} />
        <OffsetBlock width={50} height={90} gradient="linear-gradient(135deg, #B5DEFF, #7EC8E3)" rotation={-12} opacity={0.2} style={{ bottom: 10, left: '8%' }} />

        <div className="section" style={{ position: 'relative', zIndex: 2 }}>
          <div className="conclusion-header-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'end' }}>
            {/* Vertical text */}
            <VerticalText text="REFLECTION" fontSize={14} opacity={0.4} style={{ position: 'relative' }} className="vertical-text-hide" />

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="oversized-text gradient-text" style={{ marginBottom: 8 }}>
                Tổng kết
              </h1>
              <p style={{ fontSize: 20, color: 'var(--color-text-secondary)', maxWidth: 560 }}>
                Xây dựng Portfolio này giống như một chuỗi hành trình đáng nhớ — từ lạ lẫm, thích nghi, đến kỷ niệm.
              </p>
            </motion.div>
          </div>
        </div>

        <LineAccent height={3} style={{ marginTop: 24 }} />
      </section>

      {/* ═══ CONTENT BLOCKS — 2 column asymmetric ═══ */}
      <motion.div
        className="section"
        style={{ paddingTop: 24 }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="conclusion-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Điểm tâm đắc — large, spans full width */}
          <motion.div
            variants={fadeInUp}
            style={{
              gridColumn: '1 / -1',
              padding: 36,
              background: 'white',
              border: '1px solid var(--color-border)',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: '56px 1fr',
              gap: 20,
            }}
            className="conclusion-card-inner"
          >
            <CornerBrackets size={22} position="top-left" />
            <CornerBrackets size={22} position="bottom-right" />

            {/* Icon block */}
            <div style={{ width: 56, height: 56, background: 'rgba(255,107,157,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary)' }}>
              <Star size={26} color="var(--color-primary)" />
            </div>

            {/* Content */}
            <div>
              <Title level={3} style={{ margin: 0, marginBottom: 12, fontSize: 20 }}>
                Điểm tâm đắc nhất
              </Title>
              <Paragraph style={{ color: 'var(--color-text-secondary)', fontSize: 20, margin: 0, lineHeight: 1.8 }}>
                Tạo được một portfolio mang đậm dấu ấn cá nhân, thể hiện được cá tính của bản thân,
                biến một môn học khô khan trở nên thú vị. Kỹ năng quý giá nhất là cách điều khiển AI
                phục vụ mình, chứ không để bản thân bị phụ thuộc vào nó.
              </Paragraph>
            </div>

            {/* Dot decoration */}
            <div style={{ position: 'absolute', bottom: 12, right: 12 }}>
              <DotGrid rows={2} cols={3} dotSize={4} gap={6} opacity={0.15} />
            </div>
          </motion.div>

          {/* Thách thức — left column */}
          <motion.div
            variants={fadeInUp}
            style={{
              padding: 28,
              background: 'white',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid #FFB347',
              position: 'relative',
            }}
          >
            <AlertTriangle size={24} color="#FFB347" style={{ marginBottom: 12 }} />
            <Title level={4} style={{ margin: 0, marginBottom: 10 }}>
              Thách thức
            </Title>
            <Paragraph style={{ color: 'var(--color-text-secondary)', fontSize: 19, margin: 0, lineHeight: 1.7 }}>
              AI tự bịa ra các điều luật không có thật. Nguyên tắc: "Nghe nhạc thì phiêu, nhưng đọc luật thì phải chuẩn."
            </Paragraph>
            <div style={{ position: 'absolute', top: -4, right: 12, width: 20, height: 20, background: 'linear-gradient(135deg, #FFD4A8, #FFB347)', opacity: 0.3 }} />
          </motion.div>

          {/* Cách vượt qua — right column */}
          <motion.div
            variants={fadeInUp}
            style={{
              padding: 28,
              background: 'linear-gradient(160deg, #FFF0F5, #F0F8FF)',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid #7EC8E3',
            }}
          >
            <MessageCircle size={24} color="#7EC8E3" style={{ marginBottom: 12 }} />
            <Title level={4} style={{ margin: 0, marginBottom: 10 }}>
              Cách vượt qua
            </Title>
            <Paragraph style={{ color: 'var(--color-text-secondary)', fontSize: 19, margin: 0, lineHeight: 1.7 }}>
              Luôn đối chiếu chéo mọi thông tin AI đưa ra với các cổng thông tin pháp luật chính thống của Nhà nước.
            </Paragraph>
          </motion.div>
        </div>

        {/* ═══ QUOTE — Full bleed ═══ */}
        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 32,
            padding: '48px 36px',
            background: 'var(--gradient-main)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="quote-section"
        >
          {/* Giant quote mark */}
          <span
            style={{
              position: 'absolute',
              top: -10,
              left: 20,
              fontSize: 140,
              fontFamily: "'Baloo 2', sans-serif",
              color: 'var(--color-primary)',
              opacity: 0.12,
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            "
          </span>

          <OffsetBlock width={40} height={40} gradient="linear-gradient(135deg, #FF6B9D, #FF85B1)" rotation={15} opacity={0.2} style={{ top: 16, right: 24 }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 640 }}>
            <Paragraph style={{ fontSize: 24, color: 'var(--color-text)', fontStyle: 'italic', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
              "Hành trình xây dựng Portfolio thực sự là một kỷ niệm đẹp. Cảm ơn thầy cô và các bạn
              đã cùng đồng hành. Chúc mọi người luôn có tinh thần học tập thật tươi mới, hiện đại
              và luôn tìm thấy niềm vui trong mỗi việc mình làm nha!"
            </Paragraph>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
              <Heart size={16} color="var(--color-primary)" fill="var(--color-primary)" />
              <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--color-text)' }}>— Phương Anh</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ THANK YOU — Oversized decoration ═══ */}
        <div style={{ position: 'relative', marginTop: 48, textAlign: 'center', paddingBottom: 24 }}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="oversized-text"
            style={{ color: 'var(--color-primary)', opacity: 0.08, marginBottom: -24, userSelect: 'none' }}
          >
            THANK YOU
          </motion.h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32 }}>
            <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--color-text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Stay tuned
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
