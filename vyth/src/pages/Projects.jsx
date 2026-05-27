import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import PDFViewerDrawer from '../components/PDFViewerDrawer';
import HandDrawnDivider from '../components/HandDrawnDivider';
import { Eye, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 220, damping: 20 },
    },
  };

  const projectList = [
    {
      id: 'BÀI TẬP 1',
      chapter: 'Chương 1: Máy tính & Thiết bị ngoại vi',
      title: 'Vận Hành Hệ Thống Giao Tiếp Số',
      desc: 'Nắm vững nền tảng kết cấu phần cứng của không gian số. Hệ thống hóa kiến thức để nâng cấp tối ưu hóa hiệu năng máy tính cá nhân khi giải quyết các văn bản và tệp dữ liệu pháp lý nặng.',
      process:
        'Hệ thống hóa thiết bị ngoại vi -> Cấu hình tài nguyên -> Quản trị bộ nhớ đệm.',
      filePath: '/assets/documents/Bt1.pdf',
    },
    {
      id: 'BÀI TẬP 2',
      chapter: 'Chương 2: Khai thác dữ liệu & Thông tin',
      title: 'Chọn Lọc & Thẩm Định Nguồn Tin Học Thuật',
      desc: 'Ứng dụng chuyên sâu các bộ lọc tìm kiếm nâng cao (Google Scholar, cơ sở dữ liệu luật thư viện) nhằm truy xuất trực tiếp văn bản quy phạm gốc, án lệ. Rèn luyện tư duy loại bỏ tin rác.',
      process:
        'Thiết lập từ khóa chuyên ngành -> Lọc nguồn chính quy -> Kiểm duyệt tác giả uy tín.',
      filePath: '/assets/documents/Bt2.pdf',
    },
    {
      id: 'BÀI TẬP 3',
      chapter: 'Chương 3 & 4: Tổng quan AI & Giao tiếp số',
      title: 'Chuyển Đổi Số & Hợp Tác Không Gian Mây',
      desc: 'Nghiên cứu tác động đột phá của AI trong khoa học luật. Thiết kế quy chuẩn ứng xử chuyên nghiệp trên mạng xã hội học thuật, thiết lập giao thức làm việc cộng tác nhóm an toàn đám mây.',
      process:
        'Phân tích xu hướng AI -> Thiết lập tài liệu dùng chung -> Giao thức bảo mật.',
      filePath: '/assets/documents/Bt3.pdf',
    },
    {
      id: 'BÀI TẬP 4',
      chapter: 'Chương 5: Sáng tạo nội dung số',
      title: 'Ứng Dụng AI Đồng Sáng Tạo Có Kiểm Duyệt',
      desc: "Sử dụng AI tạo sinh như một trợ lý phản biện thông tin dưới sự điều phối độc lập của trí tuệ cá nhân. Tinh chỉnh tỉ mỉ cấu trúc kịch bản và đồ họa để loại bỏ hoàn toàn 'văn mẫu'.",
      process:
        'Tự viết kịch bản gốc -> Dùng AI phản biện lỗi lập luận -> Trực tiếp thiết kế đồ họa.',
      filePath: '/assets/documents/Bt4.pdf',
    },
    {
      id: 'BÀI TẬP 5',
      chapter: 'Chương 6: An toàn & Liêm chính học thuật',
      title: 'Hàng Rào Đạo Đức Số & Trách Nhiệm',
      desc: 'Bản tuyên cáo liêm chính số cá nhân với 5 tiêu chuẩn nghiêm ngặt: Độc lập tư duy tối thượng, Trích dẫn minh bạch, Không cung cấp dữ liệu nhạy cảm, Kiểm chứng thực tế liên tục.',
      process:
        'Tự kiểm duyệt đạo đức -> Trích dẫn khoa học Zotero -> Tra cứu luật hiện hành đối chiếu.',
      filePath: '/assets/documents/bt5.PDF',
    },
    {
      id: 'BÀI TẬP 6',
      chapter: 'Chương chuyên đề chuyên sâu',
      title: 'Chuẩn Hóa Trình Bày Học Thuật Pháp Lý',
      desc: 'Thực hành tiêu chuẩn hóa định dạng văn bản học thuật khắt khe, tuân thủ các quy tắc trích dẫn nguồn luật chuyên nghiệp bậc nhất, trình bày bố cục lập luận chặt chẽ.',
      process:
        'Chuẩn hóa Styles -> Biên dịch Zotero -> Rà soát lỗi logic và hình thức.',
      filePath: '/assets/documents/Bt6.pdf',
    },
  ];

  const projectAssets = [
    '/assets/images/book.png',
    '/assets/images/quill.png',
    '/assets/images/scale.png',
    '/assets/images/pillar.png',
    '/assets/images/hourglass.png',
    '/assets/images/wreath.png',
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="projects-page-wrapper w-full"
    >
      {/* Page Header */}
      <div className="text-center mb-12 relative overflow-visible flex flex-col items-center">
        <img
          src="/assets/images/scale.png"
          className="w-16 h-16 object-contain mix-blend-mode-multiply opacity-65 mb-4 select-none pointer-events-none"
          alt="Justice Scale"
        />
        <span className="hand-drawn-pill mb-2">Quá trình rèn luyện</span>
        <h1 className="text-4xl font-serif mt-2 mb-4">
          DANH MỤC BÀI TẬP NGHIÊN CỨU
        </h1>
        <p className="text-sm text-graphite-gray max-w-xl mx-auto italic">
          Các sản phẩm nghiên cứu chuyên môn được thiết kế giao thoa giữa tư duy
          luật sắc bén và kỹ năng khai thác tài nguyên số hiện đại.
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projectList.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <GlassCard
              className="h-full p-6 flex flex-col justify-between"
              asset={projectAssets[index % projectAssets.length]}
              assetTone="soft"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-accent-sepia bg-accent-sepia-light px-2 py-0.5 rounded">
                    {project.id}
                  </span>
                  <CheckCircle2
                    size={16}
                    className="text-accent-sepia opacity-60"
                  />
                </div>

                <h4 className="text-sm font-mono text-pencil-light mt-3">
                  {project.chapter}
                </h4>
                <h3 className="text-2xl font-serif text-charcoal-black mt-1 mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-graphite-gray leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Cognitive Flow */}
                <div className="border-l-2 border-pencil-stroke pl-3 py-1 my-3 bg-charcoal-black/[0.02]">
                  <span className="text-[10px] font-mono text-pencil-light uppercase font-bold block mb-1">
                    Phương pháp thực hiện:
                  </span>
                  <p className="text-[10px] italic text-graphite-gray leading-relaxed">
                    {project.process}
                  </p>
                </div>
              </div>

              {/* Interaction Elements */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-pencil-light/20">
                <button
                  onClick={() => setSelectedPDF(project)}
                  data-testid={`btn-preview-bt${index + 1}`}
                  id={`btn-view-bt${index + 1}`}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium border border-charcoal-black rounded-lg hover:bg-charcoal-black hover:text-bg-paper transition-all duration-300"
                >
                  <Eye size={14} /> Xem nghiên cứu
                </button>

                <a
                  href={project.filePath}
                  download
                  data-testid={`btn-download-bt${index + 1}`}
                  id={`btn-download-bt${index + 1}`}
                  className="flex-shrink-0 p-2 bg-accent-sepia text-white hover:bg-charcoal-black rounded-lg transition-all duration-300"
                >
                  <Download size={14} />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <HandDrawnDivider />

      {/* Quality commitment */}
      <motion.div
        variants={itemVariants}
        className="max-w-xl mx-auto text-center p-6 border-2 border-dashed border-accent-sepia rounded-xl theme-panel-paper bg-glass-bg"
      >
        <span className="text-xs font-mono font-bold text-accent-sepia block mb-1">
          CAM KẾT CHẤT LƯỢNG
        </span>
        <p className="text-xs text-graphite-gray leading-relaxed">
          Tất cả các tệp tài liệu PDF đính kèm đều là văn bản nghiên cứu học
          thuật chuẩn mực, được thẩm định tính logic khắt khe và bảo mật dữ liệu
          an toàn.
        </p>
      </motion.div>

      {/* PDF View Sliding Tray Drawer */}
      <PDFViewerDrawer
        isOpen={!!selectedPDF}
        filePath={selectedPDF?.filePath}
        title={selectedPDF?.title}
        onClose={() => setSelectedPDF(null)}
      />
    </motion.div>
  );
}
