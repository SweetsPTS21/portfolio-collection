import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import HandDrawnDivider from '../components/HandDrawnDivider';
import { Award, ShieldAlert, Sparkles, Milestone, Check } from 'lucide-react';

export default function Conclusion() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="conclusion-page-wrapper w-full max-w-4xl mx-auto"
    >
      {/* Page Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-accent-sepia uppercase tracking-widest font-bold">
          Hành trình chuyển đổi
        </span>
        <h1 className="text-4xl font-serif mt-2 mb-4">
          TỔNG KẾT & ĐỊNH HƯỚNG SỐ
        </h1>
      </div>

      {/* Main insights showcase box */}
      <motion.div variants={itemVariants} className="mb-12">
        <GlassCard
          className="p-8 relative overflow-hidden"
          asset="/assets/images/hourglass.png"
          assetTone="soft"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="flex-shrink-0 w-20 h-20 hand-drawn-border bg-paper-breath flex items-center justify-center">
              <Sparkles className="text-accent-sepia" size={36} />
            </div>
            <div className="pr-0 md:pr-16">
              <h3 className="text-2xl font-serif text-charcoal-black mb-3">
                Nhận Thức Thay Đổi Sâu Sắc
              </h3>
              <p className="text-sm text-graphite-gray leading-relaxed">
                Quá trình tham gia xây dựng portfolio và môn học đã giúp em thay
                đổi hoàn toàn tư duy tiếp cận công nghệ. Từ việc coi máy tính và
                Internet đơn thuần là các thiết bị ngoại vi để giải trí thụ
                động, em đã biết cách biến chúng thành một hệ sinh thái hỗ trợ
                học thuật mạnh mẽ, chủ động kiểm soát và phân tích dữ liệu một
                cách độc lập.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Core skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div variants={itemVariants}>
          <div className="p-6 hand-drawn-border-thin theme-panel-paper bg-glass-bg h-full">
            <img
              src="/assets/images/book.png"
              className="card-watermark-asset card-watermark-soft"
              alt=""
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-accent-sepia" size={24} />
              <h4 className="text-lg font-serif">Kỹ năng cốt lõi đã làm chủ</h4>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-graphite-gray">
              <li className="flex items-start gap-2">
                <Check
                  size={14}
                  className="text-accent-sepia mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong>Prompt Engineering:</strong> Kỹ năng đặt câu hỏi có
                  cấu trúc, cung cấp ngữ cảnh đầy đủ để ép AI ngôn ngữ đưa ra
                  câu trả lời sâu, tránh nhận các phản hồi sáo rỗng.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  size={14}
                  className="text-accent-sepia mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong>Data Literacy (Năng lực dữ liệu):</strong> Năng lực
                  sàng lọc, phân tích và thẩm định nguồn học thuật gốc uy tín,
                  xây dựng hệ thống lưu trữ dữ liệu khoa học.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  size={14}
                  className="text-accent-sepia mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong>Định dạng văn bản học thuật:</strong> Chuẩn hóa phong
                  cách, tuân thủ các quy tắc trích dẫn nguồn luật chuyên ngành
                  khắt khe bằng công cụ Zotero.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="p-6 hand-drawn-border-thin theme-panel-paper bg-glass-bg h-full">
            <img
              src="/assets/images/scale.png"
              className="card-watermark-asset card-watermark-soft"
              alt=""
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-accent-sepia" size={24} />
              <h4 className="text-lg font-serif">Thách thức đã vượt qua</h4>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-graphite-gray">
              <li className="flex items-start gap-2">
                <Check
                  size={14}
                  className="text-accent-sepia mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong>Khắc chế cám dỗ văn mẫu:</strong> Vượt qua các câu trả
                  lời rập khuôn của AI bằng cách viết lệnh ép AI ngôn ngữ tham
                  gia phản biện thay vì viết hộ.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  size={14}
                  className="text-accent-sepia mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong>Áp lực kiểm chứng liên tục:</strong> Đòi hỏi sự cẩn
                  trọng và kiên nhẫn tối đa để đối chiếu kết quả phản hồi của AI
                  với các văn bản pháp luật hiện hành mới nhất.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  size={14}
                  className="text-accent-sepia mt-0.5 flex-shrink-0"
                />
                <span>
                  <strong>Cân bằng thẩm mỹ & học thuật:</strong> Thiết kế giao
                  diện Portfolio vừa đạt tính nghệ thuật thanh lịch, tối giản
                  nhưng vẫn truyền tải đủ chiều sâu chuyên môn luật học.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <HandDrawnDivider />

      {/* Strategic commitments and career plans */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-accent-sepia uppercase tracking-wider">
            Định hướng tương lai
          </span>
          <h2 className="text-3xl font-serif mt-1">CAM KẾT HÀNH TRÌNH SỐ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard
            className="p-6 text-center relative overflow-hidden"
            asset="/assets/images/quill.png"
            assetTone="center"
          >
            <div className="w-12 h-12 rounded-full bg-accent-sepia-light flex items-center justify-center mx-auto mb-4 border border-accent-sepia/20 relative z-10">
              <span className="font-serif text-accent-sepia font-bold">01</span>
            </div>
            <h4 className="text-base font-serif mb-2 text-charcoal-black relative z-10">
              Tư duy thực tiễn
            </h4>
            <p className="text-[11px] text-graphite-gray leading-relaxed relative z-10">
              Đào sâu nghiên cứu pháp lý dựa trên phản biện lập luận đa chiều,
              kiên quyết bác bỏ tư duy lối mòn và sự rập khuôn thụ động.
            </p>
          </GlassCard>

          <GlassCard
            className="p-6 text-center relative overflow-hidden"
            asset="/assets/images/pillar.png"
            assetTone="center"
          >
            <div className="w-12 h-12 rounded-full bg-accent-sepia-light flex items-center justify-center mx-auto mb-4 border border-accent-sepia/20 relative z-10">
              <span className="font-serif text-accent-sepia font-bold">02</span>
            </div>
            <h4 className="text-base font-serif mb-2 text-charcoal-black relative z-10">
              Tối ưu công nghệ
            </h4>
            <p className="text-[11px] text-graphite-gray leading-relaxed relative z-10">
              Ứng dụng các công cụ AI thông minh và dữ liệu số để tối ưu hóa quy
              trình tra cứu văn bản pháp luật, nâng cao tối đa hiệu năng.
            </p>
          </GlassCard>

          <GlassCard
            className="p-6 text-center relative overflow-hidden"
            asset="/assets/images/wreath.png"
            assetTone="center"
          >
            <div className="w-12 h-12 rounded-full bg-accent-sepia-light flex items-center justify-center mx-auto mb-4 border border-accent-sepia/20 relative z-10">
              <span className="font-serif text-accent-sepia font-bold">03</span>
            </div>
            <h4 className="text-base font-serif mb-2 text-charcoal-black relative z-10">
              Kỷ luật & Liêm chính
            </h4>
            <p className="text-[11px] text-graphite-gray leading-relaxed relative z-10">
              Xây dựng hình thái làm việc liêm chính học thuật tối thượng. Lấy
              sự minh bạch, chuẩn mực pháp lý làm thước đo danh dự.
            </p>
          </GlassCard>
        </div>
      </motion.div>

      {/* Futuristic neoclassical building visual prompt frame */}
      <motion.div
        variants={itemVariants}
        className="relative p-2 hand-drawn-border theme-panel-paper bg-paper-breath max-w-lg mx-auto overflow-hidden"
      >
        <div className="aspect-[16/9] w-full overflow-hidden bg-bg-paper-dark relative">
          <img
            src="/assets/images/conclusion.jpg"
            alt="Con đường tri thức luật học"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            className="w-full h-full object-cover grayscale opacity-80"
          />
          {/* Graphite building architectural sketch fallback placeholder */}
          <div className="absolute inset-0 hidden flex-col items-center justify-center p-6 text-center select-none bg-paper-breath-dark">
            <Milestone
              className="text-accent-sepia mb-3 sketch-icon"
              size={36}
            />
            <span className="font-serif text-charcoal-black text-xl italic">
              “Kỷ luật là nền tảng. Hiện đại mở ra tầm nhìn.”
            </span>
            <span className="text-base text-pencil-light mt-2">
              Đại lộ tri thức Luật học - Trần Hà Vy
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
