import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { FolderOpen, Search, Brain, Users, Video, Shield, ArrowRight, FileText } from 'lucide-react';
import { OffsetBlock, DotGrid, CornerBrackets, LineAccent, EqualizerBars } from '../components/Decorative';
import { staggerContainer, fadeInUp, hoverLift } from '../animations';

const { Title, Paragraph } = Typography;

const projects = [
  {
    num: '01',
    title: 'Tổ chức & Lưu trữ dữ liệu',
    icon: FolderOpen,
    color: '#FF6B9D',
    gradient: 'linear-gradient(135deg, #FFDEE9, #FF6B9D)',
    desc: 'Thiết lập Google Drive theo chủ nghĩa tối giản. Thư mục chia thành 3 nhóm: Học thuật, Cá nhân, và Hành chính — gọn gàng như playlist nhạc trên Spotify.',
    file: new URL('../../docs/Bt1.pdf', import.meta.url).href,
  },
  {
    num: '02',
    title: 'Khai thác dữ liệu',
    icon: Search,
    color: '#7EC8E3',
    gradient: 'linear-gradient(135deg, #B5DEFF, #7EC8E3)',
    desc: 'Sử dụng từ khóa nâng cao để lọc đúng dữ liệu chuẩn. Tra cứu nhanh và chính xác — hiểu và tìm đúng luật là nguyên tắc tối thượng!',
    file: new URL('../../docs/Bt2.pdf', import.meta.url).href,
  },
  {
    num: '03',
    title: 'Trí tuệ nhân tạo (AI)',
    icon: Brain,
    color: '#FFB347',
    gradient: 'linear-gradient(135deg, #FFD4A8, #FFB347)',
    desc: 'AI soạn thảo nhanh nhưng không có cảm xúc. Pháp luật cần sự thấu cảm — AI chỉ là công cụ hỗ trợ, cái "tâm" phải đến từ người làm luật.',
    featured: true,
    file: new URL('../../docs/Bt3.pdf', import.meta.url).href,
  },
  {
    num: '04',
    title: 'Giao tiếp & Hợp tác số',
    icon: Users,
    color: '#7DCEA0',
    gradient: 'linear-gradient(135deg, #B8F0CE, #7DCEA0)',
    desc: 'Làm việc nhóm trên Notion với tinh thần Hiện đại và Tôn trọng. Công việc chia theo bảng, trao đổi nhẹ nhàng, tôn trọng thời gian nghỉ ngơi.',
    file: new URL('../../docs/Bt4.pdf', import.meta.url).href,
  },
  {
    num: '05',
    title: 'Sáng tạo nội dung số',
    icon: Video,
    color: '#FF85B1',
    gradient: 'linear-gradient(135deg, #FFDEE9, #FF85B1)',
    desc: 'Dùng AI phác thảo kịch bản, làm video ngắn về kiến thức pháp luật. Phong cách dễ thương, nhạc nền chill, hiệu ứng chữ đơn giản.',
    file: new URL('../../docs/Bt5.pdf', import.meta.url).href,
  },
  {
    num: '06',
    title: 'An toàn & Liêm chính học thuật',
    icon: Shield,
    color: '#7EC8E3',
    gradient: 'linear-gradient(135deg, #B5DEFF, #7EC8E3)',
    desc: 'Dễ thương nhưng phải nghiêm túc! Hạn chế copy-paste AI, mọi gợi ý đều kiểm chứng, tài liệu tham khảo trích dẫn minh bạch.',
    file: new URL('../../docs/Bt6.pdf', import.meta.url).href,
  },
];

export default function Projects() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ═══ HEADER ═══ */}
      <section style={{ position: 'relative', padding: '64px 0 24px', overflow: 'hidden' }}>
        {/* Watermark background text */}
        <span className="watermark" style={{ top: -10, left: '50%', transform: 'translateX(-50%)', color: 'var(--color-primary)' }}>
          PLAYLIST
        </span>

        <div className="section" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="oversized-text gradient-text" style={{ marginBottom: 12 }}>
              Dự án
            </h1>
            <Paragraph style={{ fontSize: 20, color: 'var(--color-text-secondary)', maxWidth: 500 }}>
              Các dự án được sắp xếp ngắn gọn như một playlist nhạc yêu thích. Cậu cùng nghe thử nha!
            </Paragraph>
          </motion.div>
        </div>

        <LineAccent height={3} style={{ marginTop: 16 }} />
      </section>

      {/* ═══ PROJECT CARDS — Zigzag layout ═══ */}
      <motion.div
        className="section"
        style={{ paddingTop: 24 }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isEven = idx % 2 === 1;
            const isFeatured = project.featured;

            if (isFeatured) {
              // Featured card — full width, horizontal layout
              return (
                <motion.div key={project.num} variants={fadeInUp}>
                  <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 1fr',
                        border: '1px solid var(--color-border)',
                        background: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Left — number + gradient */}
                      <div
                        style={{
                          background: project.gradient,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 24,
                        }}
                      >
                        <span style={{ fontSize: 72, fontWeight: 700, fontFamily: "'Baloo 2', sans-serif", color: 'white', lineHeight: 1 }}>
                          {project.num}
                        </span>
                        <Icon size={32} color="white" style={{ marginTop: 12 }} />
                      </div>

                      {/* Right — content */}
                      <div style={{ padding: 32, position: 'relative' }}>
                        <CornerBrackets size={20} position="top-right" color={project.color} style={{ top: 8, right: 8 }} />
                        <Title level={3} style={{ margin: 0, marginBottom: 12, fontSize: 22 }}>
                          {project.title}
                        </Title>
                        <Paragraph style={{ color: 'var(--color-text-secondary)', fontSize: 19, margin: 0, lineHeight: 1.8 }}>
                          {project.desc}
                        </Paragraph>
                        <a
                          href={project.file}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Mở file ${project.title}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            marginTop: 18,
                            padding: '10px 16px',
                            border: `1px solid ${project.color}55`,
                            background: `${project.color}14`,
                            color: project.color,
                            fontWeight: 700,
                            fontSize: 15,
                            textDecoration: 'none',
                          }}
                        >
                          <FileText size={17} />
                          <span>Mở file</span>
                          <ArrowRight size={16} />
                        </a>
                        <div style={{ position: 'absolute', bottom: 12, right: 16 }}>
                          <DotGrid rows={2} cols={4} dotSize={4} gap={6} opacity={0.2} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            }

            // Regular cards — zigzag offset
            return (
              <motion.div
                key={project.num}
                variants={fadeInUp}
                style={{
                  marginLeft: isEven ? 'auto' : 0,
                  marginRight: isEven ? 0 : 'auto',
                  maxWidth: '85%',
                }}
              >
                <motion.div initial="rest" whileHover="hover" variants={hoverLift}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr',
                      border: '1px solid var(--color-border)',
                      background: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Number column */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRight: `3px solid ${project.color}`,
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 48,
                          fontWeight: 700,
                          fontFamily: "'Baloo 2', sans-serif",
                          color: project.color,
                          opacity: 0.7,
                          lineHeight: 1,
                        }}
                      >
                        {project.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: 24, position: 'relative' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${project.color}12`,
                            border: `1px solid ${project.color}30`,
                          }}
                        >
                          <Icon size={18} color={project.color} />
                        </div>
                        <Title level={4} style={{ margin: 0, fontSize: 17 }}>
                          {project.title}
                        </Title>
                      </div>
                      <Paragraph style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: 19, lineHeight: 1.7 }}>
                        {project.desc}
                      </Paragraph>
                      <a
                        href={project.file}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Mở file ${project.title}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          marginTop: 16,
                          padding: '9px 14px',
                          border: `1px solid ${project.color}55`,
                          background: `${project.color}14`,
                          color: project.color,
                          fontWeight: 700,
                          fontSize: 14,
                          textDecoration: 'none',
                        }}
                      >
                        <FileText size={16} />
                        <span>Mở file</span>
                        <ArrowRight size={15} />
                      </a>

                      {/* Accent block */}
                      <div
                        style={{
                          position: 'absolute',
                          top: -6,
                          right: -6,
                          width: 24,
                          height: 24,
                          background: project.gradient,
                          opacity: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
