import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import HandDrawnDivider from '../components/HandDrawnDivider';
import {
  Scale,
  BookOpen,
  Brain,
  Share2,
  Award,
  Compass,
  Heart,
} from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const skills = [
    {
      icon: BookOpen,
      title: 'Khai thác tài liệu học thuật',
      desc: 'Tìm kiếm và chọn lọc nguồn học thuật hiệu quả chuyên sâu, ưu tiên tác giả uy tín, nhà xuất bản đáng tin cậy và thông tin có tính cập nhật cao. Ứng dụng tra cứu án lệ, điều luật và bài nghiên cứu gốc.',
      asset: '/assets/images/book.png',
    },
    {
      icon: Scale,
      title: 'Quản lý và tổ chức dữ liệu số',
      desc: 'Thiết lập hệ thống lưu trữ khoa học cho tệp và thư mục pháp lý, áp dụng quy ước đặt tên nhất quán giúp truy xuất nhanh chóng theo từng mục đích học thuật và thực tiễn.',
      asset: '/assets/images/pillar.png',
    },
    {
      icon: Brain,
      title: 'Kỹ năng tương tác với AI',
      desc: 'Soạn yêu cầu (Prompt Engineering) có bối cảnh rõ ràng, xác định đầu ra mong muốn và tiêu chí đánh giá khắt khe để nâng cao độ chính xác của phản hồi, biến AI thành trợ lý phản biện đắc lực.',
      asset: '/assets/images/scale.png',
    },
    {
      icon: Share2,
      title: 'Tái cấu trúc và trình bày',
      desc: 'Chuyển hóa dữ liệu, ý tưởng và văn bản pháp luật thô thành nội dung có bố cục logic, lập luận gãy gọn, phù hợp để công bố trên website hoặc các nền tảng số.',
      asset: '/assets/images/quill.png',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="about-page-wrapper w-full"
    >
      {/* Hero Banner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        {/* Left Side: Scholarly Portrait Frame */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative p-3 hand-drawn-border bg-paper-breath max-w-[340px] w-full shadow-lg group">
            {/* Ambient graphite shadow */}
            <div className="absolute inset-0 bg-charcoal-black/5 -m-2 -z-10 hand-drawn-border select-none" />

            {/* Main portrait space */}
            <div className="aspect-[3/4] w-full overflow-hidden bg-bg-paper-dark relative flex items-center justify-center">
              <img
                src="/assets/images/avatar.jpg"
                alt="Chân dung nghệ thuật Trần Hà Vy"
                onError={(e) => {
                  // Fallback beautiful hand-drawn graphite style canvas placeholder if image not yet generated
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Graphic Pencil placeholder fallback */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center p-6 text-center select-none bg-paper-breath-dark">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="stroke-accent sketch-icon mb-4"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M8 11h8M8 15h5" />
                </svg>
                <span className="font-serif text-charcoal-black text-lg block">
                  Trần Hà Vy
                </span>
                <span className="text-xs font-mono text-pencil-stroke mt-1">
                  VNU University of Law
                </span>
                <span className="text-[10px] italic text-pencil-light mt-4 block">
                  (Tranh vẽ phác thảo chì)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Identity Core specs */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div>
            <span className="hand-drawn-pill mb-4">
              Welcome to my Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl mt-3 mb-4 font-serif leading-tight">
              Trần Hà <span className="font-italic-editorial text-4xl">vy</span>
            </h1>
            <p className="text-lg font-serif italic text-accent-sepia leading-relaxed">
              “Kỷ luật tạo nên nền tảng. Hiện đại mở ra tầm nhìn. Thanh lịch
              định hình phong thái”
            </p>
          </div>

          <GlassCard
            className="p-6"
            asset="/assets/images/book.png"
            assetTone="soft"
          >
            <p className="text-sm text-graphite-gray leading-relaxed mb-4">
              Trong thời đại mà trí tuệ nhân tạo (AI) có thể tạo ra mọi thứ
              trong chớp mắt, điều quan trọng cốt lõi không còn nằm ở việc biết
              dùng, mà là biết hiểu sâu sắc và thẩm định độc lập.
            </p>
            <p className="text-sm text-graphite-gray leading-relaxed">
              Portfolio này ghi lại hành trình học tập, rèn luyện kỹ năng số và
              nghiên cứu pháp luật của bản thân một cách khoa học, chọn lọc và
              tuân thủ nguyên tắc nghiêm ngặt.
            </p>
          </GlassCard>

          {/* Quick specs grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-2 border-accent-sepia pl-3 py-1">
              <span className="text-sm text-pencil-light font-mono block">
                Chuyên Ngành:
              </span>
              <span className="text-sm font-semibold text-charcoal-black">
                Luật
              </span>
            </div>
            <div className="border-l-2 border-accent-sepia pl-3 py-1">
              <span className="text-sm text-pencil-light font-mono block">
                Đại học:
              </span>
              <span className="text-sm font-semibold text-charcoal-black">
                Đại học Luật - ĐHQGHN
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <HandDrawnDivider />

      {/* Strategic Goals Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div variants={itemVariants}>
          <GlassCard
            className="p-6 h-full flex flex-col justify-between"
            asset="/assets/images/quill.png"
            assetTone="soft"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-sepia-light flex items-center justify-center mb-4">
                <Compass className="text-accent-sepia" size={20} />
              </div>
              <h3 className="text-lg font-serif mb-2">Định hướng học tập</h3>
              <p className="text-sm text-graphite-gray leading-relaxed">
                Xây dựng nền tảng kiến thức pháp lý vững chắc, tích hợp kỹ năng
                số nhạy bén để tối ưu hiệu suất giải quyết vấn đề.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard
            className="p-6 h-full flex flex-col justify-between"
            asset="/assets/images/scale.png"
            assetTone="soft"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-sepia-light flex items-center justify-center mb-4">
                <Brain className="text-accent-sepia" size={20} />
              </div>
              <h3 className="text-lg font-serif mb-2">Ứng dụng AI thực tiễn</h3>
              <p className="text-sm text-graphite-gray leading-relaxed">
                Ứng dụng AI và xử lý dữ liệu lớn để tự động hóa quy trình tra
                cứu văn bản pháp quy, hệ thống hóa án lệ một cách chính xác.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard
            className="p-6 h-full flex flex-col justify-between"
            asset="/assets/images/wreath.png"
            assetTone="soft"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-sepia-light flex items-center justify-center mb-4">
                <Award className="text-accent-sepia" size={20} />
              </div>
              <h3 className="text-lg font-serif mb-2">Hình mẫu hướng tới</h3>
              <p className="text-sm text-graphite-gray leading-relaxed">
                Chuyên gia pháp lý hiện đại, sắc sảo trong tư duy lập luận độc
                lập, minh bạch và chuyên nghiệp trong phong cách làm việc.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Interactive Skills 4-Quadrant Grid */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-accent-sepia uppercase tracking-wider">
            Năng lực bổ trợ
          </span>
          <h2 className="text-3xl font-serif mt-1">BẢNG NĂNG LỰC SỐ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <GlassCard
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                asset={skill.asset}
                assetTone="strong"
              >
                <div className="flex gap-4 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 hand-drawn-border-thin bg-paper-breath flex items-center justify-center">
                    <Icon className="text-accent-sepia" size={22} />
                  </div>
                  <div className="pr-12">
                    <h3 className="text-lg font-serif mb-2">{skill.title}</h3>
                    <p className="text-sm text-graphite-gray leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </motion.div>

      {/* Tools Showcase */}
      <motion.div
        variants={itemVariants}
        className="text-center p-8 hand-drawn-border-thin theme-panel-paper bg-glass-bg backdrop-blur-sm max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-serif mb-4">Hệ sinh thái công cụ hỗ trợ</h3>
        <div className="flex flex-wrap justify-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 bg-paper-breath rounded-full border border-pencil-light/40 text-charcoal-black">
            Gemini Advanced
          </span>
          <span className="px-3 py-1 bg-paper-breath rounded-full border border-pencil-light/40 text-charcoal-black">
            Zotero Scholar
          </span>
          <span className="px-3 py-1 bg-paper-breath rounded-full border border-pencil-light/40 text-charcoal-black">
            Notion Database
          </span>
          <span className="px-3 py-1 bg-paper-breath rounded-full border border-pencil-light/40 text-charcoal-black">
            Canva Design
          </span>
          <span className="px-3 py-1 bg-paper-breath rounded-full border border-pencil-light/40 text-charcoal-black">
            Synthesia AI Video
          </span>
          <span className="px-3 py-1 bg-paper-breath rounded-full border border-pencil-light/40 text-charcoal-black">
            CapCut Editor
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
