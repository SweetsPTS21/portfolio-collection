import { motion } from 'framer-motion';
import { Typography, Tag } from 'antd';
import { Headphones, Sparkles, GraduationCap, Target, Radio } from 'lucide-react';
import { EqualizerBars, DotGrid, OffsetBlock, VerticalText, LineAccent, CornerBrackets } from '../components/Decorative';
import { slideInLeft, slideInRight, staggerContainer, fadeInUp, floatAnimation } from '../animations';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 0 48px',
          background: 'var(--gradient-main)',
        }}
      >
        {/* Decorative blocks — bold, higher opacity */}
        <OffsetBlock width={120} height={120} gradient="linear-gradient(135deg, #FF6B9D, #FF85B1)" rotation={12} opacity={0.25} style={{ top: '8%', right: '5%' }} />
        <OffsetBlock width={80} height={140} gradient="linear-gradient(135deg, #B5DEFF, #7EC8E3)" rotation={-8} opacity={0.3} style={{ bottom: '10%', left: '3%' }} />
        <OffsetBlock width={100} height={60} gradient="linear-gradient(135deg, #FFD4A8, #FFB347)" rotation={5} opacity={0.35} style={{ top: '55%', right: '20%' }} />
        <OffsetBlock width={50} height={50} gradient="linear-gradient(135deg, #FFDEE9, #FF6B9D)" rotation={-15} opacity={0.2} style={{ top: '30%', left: '15%' }} />
        <OffsetBlock width={70} height={70} gradient="linear-gradient(135deg, #7EC8E3, #B5DEFF)" rotation={20} opacity={0.2} style={{ bottom: '25%', right: '35%' }} />

        {/* Vertical text side */}
        <VerticalText
          text="PORTFOLIO 2025"
          fontSize={16}
          opacity={0.3}
          style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)' }}
        />

        {/* Equalizer top-left */}
        <div style={{ position: 'absolute', top: 24, left: 24, opacity: 0.6 }}>
          <EqualizerBars size={48} />
        </div>

        {/* Dot grid bottom-right */}
        <div style={{ position: 'absolute', bottom: 32, right: 60 }}>
          <DotGrid rows={4} cols={4} dotSize={4} gap={8} opacity={0.3} />
        </div>

        {/* Main content */}
        <div className="section" style={{ position: 'relative', zIndex: 2 }}>
          {/* Big name — oversized */}
          <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
            <p style={{ fontSize: 19, color: 'var(--color-text-secondary)', marginBottom: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Xin chào, mình là
            </p>
            <h1
              className="oversized-text gradient-text"
              style={{ marginBottom: 16 }}
            >
              Phương Anh
            </h1>
            <p style={{ fontSize: 22, color: 'var(--color-text)', marginBottom: 20, maxWidth: 500 }}>
              Sinh viên Luật học • Yêu âm nhạc • Dễ thương nhưng nghiêm túc
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
              <Tag color="magenta" style={{ fontSize: 18, padding: '6px 16px', fontWeight: 600 }}>🎵 Âm nhạc</Tag>
              <Tag color="blue" style={{ fontSize: 18, padding: '6px 16px', fontWeight: 600 }}>⚖️ Luật học</Tag>
              <Tag color="orange" style={{ fontSize: 18, padding: '6px 16px', fontWeight: 600 }}>✨ Sáng tạo</Tag>
            </div>
          </motion.div>

          {/* Avatar row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="hero-avatar-row"
            style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginTop: 16 }}
          >
            {/* Avatar with offset block behind */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  width: '100%',
                  height: '100%',
                  background: 'var(--gradient-accent)',
                  zIndex: 0,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1, border: '3px solid white' }}>
                <img
                  src="/avatar.jpg"
                  alt="Phương Anh"
                  className="hero-avatar"
                  style={{ width: 300, height: 360, objectFit: 'cover', display: 'block', maxWidth: '100%' }}
                />
              </div>
              <CornerBrackets size={28} position="top-left" style={{ top: -8, left: -8 }} />
              <CornerBrackets size={28} position="bottom-right" style={{ bottom: -8, right: -8 }} />
            </div>

            {/* Side info */}
            <div style={{ paddingBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Radio size={18} color="var(--color-primary)" />
                <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Trạm phát sóng nhỏ
                </span>
              </div>
              <p style={{ fontSize: 19, color: 'var(--color-text-secondary)', maxWidth: 260 }}>
                Một không gian tối giản, hiện đại và ngập tràn năng lượng tích cực.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <LineAccent height={4} style={{ position: 'absolute', bottom: 0, left: 0 }} />
      </section>

      {/* ═══ ABOUT INFO — Bento Layout ═══ */}
      <section style={{ position: 'relative', padding: '0 0 24px' }}>
        {/* Overlapping heading */}
        <div className="section" style={{ paddingBottom: 0 }}>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: 'clamp(48px, 7vw, 72px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: -20,
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span className="gradient-text">Về mình</span>
          </motion.h2>
        </div>

        <motion.div
          className="section"
          style={{ paddingTop: 32 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bento grid: 1 large + 2 small */}
          <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: 'auto auto', gap: 16 }}>
            {/* Large card — spans 1 row, left */}
            <motion.div
              variants={fadeInUp}
              style={{
                padding: 32,
                background: 'linear-gradient(160deg, #FFF0F5, #F0F8FF)',
                border: '1px solid var(--color-border)',
                position: 'relative',
                gridRow: '1 / 3',
              }}
            >
              <CornerBrackets size={20} position="top-left" />
              <CornerBrackets size={20} position="bottom-right" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, background: 'rgba(255,107,157,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <strong style={{ fontSize: 18 }}>Chuyên ngành</strong>
                  <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0 }}>VNU-UL</p>
                </div>
              </div>
              <p style={{ fontSize: 26, fontWeight: 600, color: 'var(--color-text)', marginBottom: 12 }}>
                Luật học
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 22, lineHeight: 1.8 }}>
                Đại học Luật, Đại học Quốc gia Hà Nội. Mình muốn biến công nghệ thành người bạn thân thiết
                trong hành trình học luật — tối giản hóa việc học, phát triển tư duy pháp lý sáng tạo.
              </p>
              <div style={{ position: 'absolute', bottom: 16, right: 16, opacity: 0.15 }}>
                <DotGrid rows={3} cols={3} dotSize={5} gap={8} />
              </div>
            </motion.div>

            {/* Small card — top right */}
            <motion.div
              variants={fadeInUp}
              style={{
                padding: 24,
                background: 'white',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid #7EC8E3',
              }}
            >
              <Headphones size={28} color="#7EC8E3" style={{ marginBottom: 12 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>Sở thích</strong>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 19, margin: 0 }}>
                Nghe nhạc — liều thuốc chữa lành sau những giờ đọc tài liệu luật căng thẳng.
              </p>
            </motion.div>

            {/* Small card — bottom right */}
            <motion.div
              variants={fadeInUp}
              style={{
                padding: 24,
                background: 'white',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid #FFB347',
              }}
            >
              <Sparkles size={28} color="#FFB347" style={{ marginBottom: 12 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>Phong cách</strong>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 19, margin: 0 }}>
                Dễ thương, Đơn giản, Hiện đại — rõ ràng nhưng luôn có điểm nhấn cute.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══ ĐỊNH HƯỚNG — Full bleed gradient ═══ */}
      <section
        style={{
          background: 'linear-gradient(160deg, #FFF0F5 0%, #F0F8FF 50%, #FFF0F5 100%)',
          padding: '48px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watermark */}
        <span className="watermark" style={{ top: -20, left: '5%', color: 'var(--color-primary)' }}>
          GOAL
        </span>

        <OffsetBlock width={90} height={90} gradient="linear-gradient(135deg, #FFDEE9, #FFB347)" rotation={10} opacity={0.15} style={{ top: 20, right: '8%' }} />

        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="orientation-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'start' }}>
            {/* Left icon block */}
            <div style={{ width: 56, height: 56, background: 'rgba(255,107,157,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary)' }}>
              <Target size={28} color="var(--color-primary)" />
            </div>

            {/* Content */}
            <div>
              <Title level={2} style={{ fontSize: 28, marginBottom: 16 }}>
                <span className="gradient-text">Định hướng cá nhân</span>
              </Title>
              <Paragraph style={{ fontSize: 22, color: 'var(--color-text-secondary)', lineHeight: 1.9, marginBottom: 16 }}>
                Trở thành một sinh viên Luật trong kỷ nguyên số, mình muốn học cách biến công nghệ thành
                một người bạn thân thiết. Mục tiêu là ứng dụng các công cụ hiện đại để tối giản hóa việc học hành,
                từ đó có thêm thời gian tận hưởng những bản nhạc yêu thích và phát triển tư duy pháp lý sáng tạo.
              </Paragraph>
              <Paragraph style={{ fontSize: 22, color: 'var(--color-text-secondary)', lineHeight: 1.9, margin: 0 }}>
                Website này là không gian lưu trữ kiến thức số — hệ thống hóa quá trình chuyển đổi số:
                từ tiếp nhận dữ liệu thô, đánh giá tính logic, đến ứng dụng công nghệ sáng tạo có trách nhiệm.
              </Paragraph>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ CÔNG CỤ — Dense tag wall ═══ */}
      <section style={{ padding: '48px 0', position: 'relative' }}>
        <div className="section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Title level={2} style={{ fontSize: 28, marginBottom: 24 }}>
              <span className="gradient-text">Công cụ & Nền tảng</span>
            </Title>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { name: 'Moodle', color: '#FF6B9D' },
                { name: 'Google Classroom', color: '#7EC8E3' },
                { name: 'Microsoft Word', color: '#FFB347' },
                { name: 'PowerPoint', color: '#FF85B1' },
                { name: 'Canva', color: '#7DCEA0' },
                { name: 'Google Scholar', color: '#7EC8E3' },
                { name: 'ChatGPT', color: '#FFB347' },
                { name: 'Copilot', color: '#FF6B9D' },
                { name: 'Gmail', color: '#FF85B1' },
                { name: 'Google Drive', color: '#7EC8E3' },
                { name: 'Zalo', color: '#7DCEA0' },
                { name: 'Notion', color: '#2D2040' },
              ].map((tool) => (
                <Tag
                  key={tool.name}
                  style={{
                    fontSize: 18,
                    padding: '9px 18px',
                    background: 'white',
                    border: `1px solid ${tool.color}40`,
                    borderLeft: `3px solid ${tool.color}`,
                    fontWeight: 500,
                  }}
                >
                  {tool.name}
                </Tag>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
