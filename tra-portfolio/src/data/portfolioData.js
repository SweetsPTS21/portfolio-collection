/**
 * portfolioData.js
 * Dữ liệu portfolio của Phạm Thanh Trà
 * Nguồn: tra-portfolio/docs/portfolio.md
 */

// Avatar — import trực tiếp để Vite xử lý
import avatarImg from "../assets/avatar.png";
export const avatarPath = avatarImg;

export const aboutData = {
  name: "Phạm Thanh Trà",
  nameShort: "Trà",
  major: "Luật học",
  university: "Đại học Luật — Đại học Quốc gia Hà Nội",
  tagline: "Luật học × Tư duy số × Trí tuệ nhân tạo",
  bio: "Trong bối cảnh công nghệ số ngày càng chi phối cách con người tiếp cận tri thức, tôi hướng đến việc kết hợp nền tảng pháp lý với tư duy công nghệ — xây dựng phương pháp nghiên cứu dựa trên dữ liệu số, nơi thông tin được chọn lọc kỹ lưỡng, quy trình có hệ thống và kết quả có thể kiểm chứng rõ ràng.",
  vision:
    "Trở thành người làm luật có khả năng tận dụng công nghệ, đặc biệt là AI để nâng cao hiệu quả công việc, đảm bảo tính chuẩn xác và đạo đức nghề nghiệp.",
  interests: [
    "Nghe nhạc & xem phim",
    "Tìm hiểu về trí tuệ nhân tạo",
    "Pháp luật & tâm lý học",
    "Hát",
  ],
  style:
    "Tối giản, hiện đại, chú trọng sự rõ ràng và tính thẩm mỹ trong trình bày.",
  portfolioPurpose:
    "Portfolio được thiết kế như một hệ thống thể hiện quá trình học tập có logic — không chỉ là nơi lưu trữ bài tập, mà là minh chứng cho cách tiếp cận thông tin trong môi trường số.",
};

export const projectsData = [
  {
    id: "01",
    title: "Máy tính và thiết bị ngoại vi",
    subtitle: "Foundations of Computing",
    description:
      "Trình bày các thành phần cơ bản của máy tính và vai trò của thiết bị ngoại vi trong quá trình sử dụng. Phân tích cấu trúc phần cứng và mối quan hệ giữa các bộ phận.",
    category: "Hạ tầng số",
    pdf: "/docs/bt1.pdf",
  },
  {
    id: "02",
    title: "Khai thác dữ liệu và thông tin",
    subtitle: "Data Literacy",
    description:
      "Thực hành tìm kiếm thông tin, đánh giá độ tin cậy của nguồn và cách sử dụng thông tin một cách hợp lý. Xây dựng quy trình kiểm chứng tài liệu trong nghiên cứu pháp lý.",
    category: "Nghiên cứu",
    pdf: "/docs/bt2.pdf",
  },
  {
    id: "03",
    title: "Tổng quan về trí tuệ nhân tạo",
    subtitle: "AI & Law",
    description:
      "Giới thiệu về AI, các ứng dụng phổ biến và những vấn đề cần lưu ý khi sử dụng trong học tập. Phân tích tác động của AI đối với ngành pháp lý.",
    category: "Công nghệ & Pháp lý",
    pdf: "/docs/bt3.pdf",
  },
  {
    id: "04",
    title: "Giao tiếp và hợp tác trong môi trường số",
    subtitle: "Digital Collaboration",
    description:
      "Kỹ năng làm việc nhóm online và cách tương tác hiệu quả trên nền tảng số. Xây dựng giao thức giao tiếp chuyên nghiệp trong môi trường học thuật số.",
    category: "Kỹ năng số",
    pdf: "/docs/bt4.pdf",
  },
  {
    id: "05",
    title: "Sáng tạo nội dung số",
    subtitle: "Digital Content Creation",
    description:
      "Thực hành xây dựng nội dung số từ ý tưởng đến thiết kế, chú trọng yếu tố bản quyền và đạo đức nội dung. Ứng dụng công cụ thiết kế trong trình bày tài liệu pháp lý.",
    category: "Sáng tạo",
    pdf: "/docs/bt5.pdf",
  },
  {
    id: "06",
    title: "An toàn và liêm chính học thuật",
    subtitle: "Digital Ethics",
    description:
      "Bảo mật thông tin cá nhân và việc sử dụng tài liệu trung thực trong học tập. Xây dựng quy chuẩn đạo đức khi sử dụng AI và tài nguyên số trong nghiên cứu.",
    category: "Đạo đức số",
    pdf: "/docs/bt6.pdf",
  },
];

export const skillsData = [
  {
    area: "Quản lý thông tin số",
    items: [
      "Xây dựng hệ thống lưu trữ rõ ràng",
      "Phân loại tài liệu theo nhóm nội dung",
      "Tìm kiếm và định vị tài liệu nhanh chóng",
    ],
  },
  {
    area: "Đánh giá & kiểm chứng nguồn",
    items: [
      "Lựa chọn tài liệu từ nguồn chính thống",
      "Đối chiếu và kiểm tra tính tin cậy",
      "Ưu tiên cổng thông tin pháp luật chính thức",
    ],
  },
  {
    area: "Sử dụng AI có kiểm soát",
    items: [
      "Đặt yêu cầu cụ thể, rõ đầu ra",
      "Kiểm tra và xác minh nội dung AI tạo ra",
      "Kiểm soát phạm vi ứng dụng AI",
    ],
  },
  {
    area: "Trình bày & hệ thống hóa",
    items: [
      "Chuyển đổi thông tin phức tạp thành dễ hiểu",
      "Bố cục rõ ràng, phù hợp người đọc",
      "Thiết kế tài liệu chuyên nghiệp",
    ],
  },
];

export const toolsData = [
  { category: "Lưu trữ tài liệu", tools: ["OneDrive", "Dropbox"] },
  {
    category: "Nguồn học liệu",
    tools: ["Thư viện số ĐHQGHN", "Cổng pháp luật chính thống"],
  },
  { category: "Công cụ AI", tools: ["Claude", "Copilot", "Gemini"] },
  { category: "Thiết kế nội dung", tools: ["Canva", "PowerPoint"] },
  { category: "Làm việc nhóm", tools: ["Notion", "Microsoft Teams"] },
];

export const conclusionData = {
  pullQuote:
    "Công nghệ không thay thế tư duy, nhưng là công cụ giúp tổ chức tư duy một cách rõ ràng và có cấu trúc hơn.",
  reflection:
    "Quá trình hoàn thiện portfolio không chỉ dừng lại ở việc hoàn thành 6 bài tập, mà còn là quá trình hệ thống lại toàn bộ cách học và cách tiếp cận thông tin trong môi trường số.",
  coreGrowth: [
    {
      title: "Tư duy có hệ thống",
      desc: "Hình thành thói quen xác định mục tiêu, xây dựng cấu trúc trước khi triển khai nội dung.",
    },
    {
      title: "Kiểm soát AI chủ động",
      desc: "Chuyển từ sử dụng AI bị động sang chủ động định hướng — đặt yêu cầu rõ ràng và kiểm tra kết quả.",
    },
    {
      title: "Chọn lọc thông tin",
      desc: "Đối chiếu, đánh giá và lựa chọn thông tin dựa trên độ tin cậy và bối cảnh sử dụng.",
    },
  ],
  nextSteps: [
    "Tinh gọn nội dung, tăng chiều sâu phân tích",
    "Tăng liên kết giữa lý thuyết và thực tiễn pháp lý",
    "Hoàn thiện quy trình kiểm chứng thông tin",
  ],
};
