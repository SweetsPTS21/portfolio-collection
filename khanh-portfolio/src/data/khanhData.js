import avatarUrl from "../../docs/avatar.jpg";
import bt1Pdf from "../../docs/BT1.pdf";
import bt2Pdf from "../../docs/BT2.pdf";
import bt3Pdf from "../../docs/BT3.pdf";
import bt4Pdf from "../../docs/BT4.pdf";
import bt5Pdf from "../../docs/BT5.pdf";
import bt6Pdf from "../../docs/BT6.pdf";

/* ── Lucide icons used as data references ── */
import {
  Scale,
  Rocket,
  Zap,
  Target,
  Lightbulb,
  Eye,
  FolderOpen,
  Search,
  Bot,
  Video,
  Palette,
  FileText,
  Handshake,
  Sparkles,
  Shield,
  AlertTriangle,
  PenLine,
  CalendarDays,
} from "lucide-react";

export const personalInfo = {
  name: "Đào Ngọc Khánh",
  tagline: "WELCOME TO MY DIGITAL SKY",
  motto:
    "Chào mừng thầy cô và các bạn đến với không gian số của mình! Nơi đây không có những lý thuyết rập khuôn, mà là một sân chơi năng động, nơi những dòng lý thuyết khô khan, khó hiểu được đơn giản và trực quan hóa thông qua một trang web mang những màu sắc, dấu ấn đậm chất cá nhân.",
  major: "Luật học",
  university: "Đại học Luật",
  style:
    "Giản dị, đời thường trong cuộc sống hằng ngày nhưng luôn hướng ngoại và tràn đầy năng lượng khi bước vào các hoạt động tập thể hay thử thách mới.",
  avatarUrl,
};

/* ── Orientation: display-optimised short items with Lucide Icon ── */
export const orientationDisplay = [
  {
    Icon: Scale,
    headline: "Chuyên gia pháp lý hiện đại",
    detail:
      "Điều khiển công cụ thông minh để tối ưu hóa quy trình nghiên cứu thông tin pháp lý.",
  },
  {
    Icon: Rocket,
    headline: "Công nghệ là bệ phóng",
    detail:
      "Giải quyết dữ liệu khổng lồ nhanh chóng, dành thời gian cho phân tích chuyên sâu và giải pháp thực tiễn.",
  },
  {
    Icon: Zap,
    headline: "Người làm luật thế hệ mới",
    detail:
      "Kết hợp sự năng động hướng ngoại với tư duy cập nhật liên tục của công nghệ hiện đại.",
  },
];

export const portfolioMission = {
  title: "Mục tiêu của Portfolio",
  points: [
    "Hệ thống hóa toàn bộ hành trình rèn luyện kỹ năng số của bản thân.",
    "Minh chứng cho năng lực thích ứng nhanh, tư duy độc lập trước làn sóng AI.",
  ],
};

export const coreSkills = {
  title: "Nguyên tắc thực hiện",
  intro: "Mọi dự án đều dựa trên ba nguyên tắc bất di dịch:",
  items: [
    {
      Icon: Target,
      title: "Dữ liệu chính xác nguyên bản",
      text: "Đảm bảo tính chân thực, nguyên bản và có căn cứ pháp lý rõ ràng.",
    },
    {
      Icon: Lightbulb,
      title: "Tư duy phản biện độc lập",
      text: "Không phụ thuộc máy móc, luôn phân tích, suy luận và đưa ra góc nhìn cá nhân sâu sắc.",
    },
    {
      Icon: Eye,
      title: "Công nghệ minh bạch hoàn toàn",
      text: "Công khai, minh bạch quá trình ứng dụng và kết hợp công nghệ hỗ trợ.",
    },
  ],
};

/* ── Toolsets: Lucide Icon + short tool list ── */
export const toolsets = {
  title: "Các công cụ số đã sử dụng",
  items: [
    {
      Icon: FolderOpen,
      title: "Quản lý & lưu trữ dữ liệu",
      tools: ["Windows", "File Explorer", "Google Drive"],
      text: "Hệ điều hành, trình quản lý tệp tin và nền tảng lưu trữ đám mây.",
    },
    {
      Icon: Search,
      title: "Tra cứu & khai thác thông tin",
      tools: ["Google Scholar", "Thư viện điện tử", "Chrome"],
      text: "Hệ thống tìm kiếm học thuật và mạng lưới thư viện trực tuyến.",
    },
    {
      Icon: Bot,
      title: "Trí tuệ nhân tạo tạo sinh",
      tools: ["ChatGPT", "Google Gemini", "Claude AI"],
      text: "Các mô hình ngôn ngữ lớn hỗ trợ học tập và sáng tạo nội dung.",
    },
    {
      Icon: Video,
      title: "Họp trực tuyến & hợp tác",
      tools: ["Google Meet", "Zoom", "Notion"],
      text: "Phần mềm điều hành cuộc họp và quản lý tiến độ nhóm.",
    },
    {
      Icon: Palette,
      title: "Thiết kế & sáng tạo số",
      tools: ["Canva", "AI Image Gen", "PowerPoint"],
      text: "Nền tảng thiết kế đồ họa, AI tạo hình và trình chiếu chuyên nghiệp.",
    },
    {
      Icon: FileText,
      title: "Soạn thảo & biên tập",
      tools: ["Microsoft Word", "Google Docs"],
      text: "Công cụ xử lý văn bản cho bài luận và báo cáo pháp lý.",
    },
  ],
};

/* ── Projects: Lucide Icon + tags per chapter ── */
export const projects = {
  title: "Tập Sách Dự Án",
  intro:
    "Hành trình nâng cấp kỹ năng số của mình được ghi lại qua 6 bài tập thực chiến dưới đây. Mọi nội dung đều bám sát yêu cầu chuyên môn nhưng được thể hiện bằng tinh thần năng động và thực tế nhất.",
  items: [
    {
      chapter: 1,
      Icon: FolderOpen,
      title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      content:
        "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.",
      tags: ["File Explorer", "Windows", "Google Drive"],
      process: [
        "Mở trình quản lý tệp tin để thiết lập thư mục lớn mang tên mình.",
        "Tạo tệp văn bản ghi chú, đổi tên sang dạng tài liệu quan trọng và lập thêm thư mục con chứa học liệu.",
        "Dùng phím tắt sao chép và cắt dán để di chuyển tệp mượt mà giữa các không gian lưu trữ đám mây.",
        "Thực hành xóa tệp vào thùng rác và lệnh xóa vĩnh viễn. Máy tính luôn gọn gàng, khoa học.",
      ],
      pdf: bt1Pdf,
    },
    {
      chapter: 2,
      Icon: Search,
      title: "Khai thác dữ liệu và thông tin",
      content:
        "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
      tags: ["Google Scholar", "Thư viện điện tử", "Harvard Format"],
      process: [
        "Lựa chọn một chủ đề lớn trong ngành Luật học để tra cứu sâu trên các cơ sở dữ liệu học thuật và tạp chí chuyên ngành.",
        "Thu thập đủ 10 nguồn học liệu chuyên sâu, đảm bảo ít nhất 5 bài báo khoa học chất lượng.",
        "Thẩm định độ tin cậy của từng nguồn dựa trên danh tiếng tác giả, cơ quan xuất bản và tính cập nhật (Luật TCTD 2024, văn bản sửa đổi 2025).",
        "Xếp hạng thành bảng tổng hợp bài bản và lập danh mục theo chuẩn định dạng Harvard.",
      ],
      pdf: bt2Pdf,
    },
    {
      chapter: 3,
      Icon: Bot,
      title: "Tổng quan về trí tuệ nhân tạo",
      content:
        "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn.",
      tags: ["ChatGPT", "Gemini", "Prompt Engineering"],
      process: [
        "Chọn ba tác vụ học tập cốt lõi: tóm tắt tài liệu, giải thích khái niệm phức tạp và xây dựng bộ câu hỏi ôn tập.",
        "Thiết kế ba phiên bản câu lệnh cho mỗi tác vụ: cơ bản → cải tiến → nâng cao (kỹ thuật tư duy chuỗi và nhập vai).",
        "Thử nghiệm trực tiếp, so sánh kết quả đầu ra và tổng hợp bộ mẹo làm chủ công nghệ cho riêng mình.",
      ],
      pdf: bt3Pdf,
    },
    {
      chapter: 4,
      Icon: Handshake,
      title: "Giao tiếp và hợp tác trong môi trường số",
      content:
        "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
      tags: ["Google Meet", "Zoom", "Notion"],
      process: [
        "Lựa chọn nền tảng họp trực tuyến phù hợp, lên chương trình nghị sự và phân định vai trò điều phối, trình bày, thư ký.",
        "Cuộc họp diễn ra sôi nổi trong 30 phút, được ghi hình đầy đủ với sự đồng ý của tất cả thành viên.",
        "Hoàn thiện biên bản họp, tổng hợp đầu việc tiếp theo, chia sẻ tài liệu chung và tự đánh giá hiệu quả tương tác của bản thân.",
      ],
      pdf: bt4Pdf,
    },
    {
      chapter: 5,
      Icon: Sparkles,
      title: "Sáng tạo nội dung số",
      content:
        "Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
      tags: ["Canva", "AI Image Gen", "PowerPoint"],
      process: [
        "Triển khai dự án thuyết trình bằng cách kết hợp ít nhất 3 công cụ tự động: xây dựng kịch bản, kết xuất hình ảnh và thiết kế giao diện trực quan.",
        "Ghi lại chi tiết câu lệnh đã dùng, can thiệp chỉnh sửa và tích hợp phần sáng tạo cá nhân để nội dung không bị rập khuôn.",
        "Viết bài phân tích chuyên sâu về vai trò công nghệ, mặt tích cực, hạn chế và các vấn đề đạo đức cần cân nhắc.",
      ],
      pdf: bt5Pdf,
    },
    {
      chapter: 6,
      Icon: Shield,
      title: "An toàn và liêm chính học thuật trong môi trường số",
      content:
        "Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
      tags: ["Liêm chính học thuật", "Infographic", "Đạo đức AI"],
      process: [
        "Tìm hiểu kỹ chính sách của trường đại học về việc sử dụng công nghệ trong học đường.",
        "Hoàn thiện bài luận cá nhân với sự trợ giúp của AI, ghi chép minh bạch câu lệnh và mô tả cách đánh giá, chỉnh sửa kết quả.",
        "Phân tích ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, xây dựng bộ 7 nguyên tắc cá nhân và thiết kế infographic trực quan.",
      ],
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  summary:
    "Khép lại một chặng đường dài với nhiều trải nghiệm thú vị, đây là lúc mình lùi lại một bước để tổng kết những giá trị quý giá đã gặt hái được. Quá trình tự tay xây dựng và hoàn thiện trang web này mang lại cho mình một cảm giác phấn khích, giống như việc chiến thắng một trận cầu lông kịch tính vậy. Từ một người chỉ quen với việc đọc sách luật truyền thống, mình đã tự tin làm chủ nhiều công cụ số hiện đại.",
  skills: [
    "Thiết lập câu lệnh tối ưu để điều khiển trí tuệ nhân tạo hiệu quả.",
    "Phương pháp sàng lọc, thẩm định thông tin chuyên sâu đa chiều trên môi trường mạng.",
    "Điều hành cuộc họp và phối hợp làm việc nhóm trực tuyến một cách chuyên nghiệp.",
    "Giao tiếp hướng ngoại hiệu quả, năng động và cởi mở.",
  ],
  highlights: [
    "Giữ trọn vẹn phong cách giản dị, thực tế đời thường vào các dự án chuyên môn mà không hề khô khan.",
    "Phối hợp nhịp nhàng các công cụ tự động hóa giúp tối ưu hóa thời gian nghiên cứu.",
    "Làm chủ các dòng lệnh phức tạp, biến công nghệ thành một trợ lý đắc lực.",
  ],
  /* Split the long challenge paragraph into 3 focused bullets with Lucide Icons */
  challengePoints: [
    {
      Icon: AlertTriangle,
      label: "Thông tin pháp lý AI bịa ra",
      text: "Giải quyết bằng phản xạ kiểm chứng chéo — luôn đối chiếu với văn bản quy phạm pháp luật gốc.",
    },
    {
      Icon: PenLine,
      label: "Văn phong máy móc của thuật toán",
      text: "Biên tập lại từng đoạn để giữ vững chất giọng đời thường chân chất cá nhân.",
    },
    {
      Icon: CalendarDays,
      label: "Điều phối lịch họp trực tuyến",
      text: "Cân đối quỹ thời gian của tất cả thành viên nhóm để cuộc họp diễn ra thuận lợi.",
    },
  ],
  future: [
    "Quyết tâm tiếp tục theo đuổi con đường nghiên cứu pháp lý có sự hỗ trợ chuyên sâu từ trí tuệ nhân tạo.",
    "Ứng dụng kỹ năng số để phân tích các mô hình luật kinh tế quốc tế, biến công nghệ thành bệ đòn bẩy vững chắc để cống hiến giải pháp pháp lý sắc bén.",
  ],
  acknowledgement:
    "Em xin gửi lời cảm ơn sâu sắc nhất đến thầy cô bộ môn đã luôn mở đường, định hướng và truyền cảm hứng công nghệ số tuyệt vời cho chúng em. Cảm ơn những người bạn đồng hành đã cùng nhau thảo luận, tranh biện hết mình trong các bài tập nhóm. Cuối cùng, cảm ơn bạn rất nhiều vì đã ghé thăm và lắng nghe câu chuyện của Đào Ngọc Khánh!",
};
