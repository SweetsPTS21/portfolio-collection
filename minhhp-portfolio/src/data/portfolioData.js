export const profile = {
  themeId: "blue-rain-notebook",
  name: "Hoàng Phương Minh",
  field: "Luật học",
  school: "Trường đại học Luật - ĐHQGHN",
  style: "Trang nhã, cá tính, chỉn chu và sắc bén",
  hobbies: ["Chơi thể thao", "Nấu ăn", "Xem phim"],
  intro:
    "Một không gian học thuật nơi tư duy pháp lý nghiêm túc gặp gu thẩm mỹ mềm mại, cá tính và hiện đại.",
  objective:
    "Minh chứng rằng học thuật nghiêm túc có thể song hành cùng trình bày đẹp, tư duy công nghệ và phản biện độc lập.",
  principle:
    "Công nghệ cung cấp dữ liệu thô; lập luận, đánh giá và trách nhiệm học thuật phải mang dấu ấn cá nhân.",
};

export const skillGroups = [
  {
    tab: "Research",
    title: "Tra cứu và đánh giá nguồn",
    items: ["Cơ sở dữ liệu pháp luật", "Thư viện số ĐHQGHN", "Bộ lọc tìm kiếm nâng cao"],
  },
  {
    tab: "Media",
    title: "Xử lý đa phương tiện",
    items: ["Quay hình", "Ghi âm", "Dựng video", "Canva", "CapCut"],
  },
  {
    tab: "AI Ethics",
    title: "AI có trách nhiệm",
    items: ["Prompt nâng cấp", "Đối chiếu pháp luật", "Liêm chính học thuật"],
  },
  {
    tab: "Workflow",
    title: "Tổ chức dữ liệu",
    items: ["Google Drive", "Quy tắc đặt tên", "Dọn file nháp", "Phím tắt"],
  },
];

export const pageCopy = {
  about: {
    badge: "Trang Giới thiệu",
    sectionTitle: "Thông tin cá nhân",
    toolsTitle: "Các công cụ đã sử dụng",
    toolsIntro:
      "Hệ sinh thái công cụ được lựa chọn dựa trên tiêu chí hiệu suất cao và giao diện thẩm mỹ.",
    principleTitle: "Nguyên tắc thực hiện bài tập",
  },
  projects: {
    badge: "Trang Dự án",
    title: "Toàn bộ các bài thực hành",
    intro:
      "Các bài thực hành được thực hiện với thái độ cẩn trọng, đi thẳng vào trọng tâm yêu cầu môn học và phản ánh tư duy làm việc độc lập.",
    summary: "Bài thực hành môn kỹ năng số",
    methodTitle: "Cách trình bày",
    method:
      "Mỗi bài giữ rõ mục tiêu, quá trình thực hiện và liên kết đến file minh chứng tương ứng.",
    closing:
      "Từ tổ chức dữ liệu, khai thác thông tin, trí tuệ nhân tạo, hợp tác số, sáng tạo nội dung đến liêm chính học thuật.",
  },
  conclusion: {
    badge: "Trang Tổng kết",
    title: "Khép lại dự án Portfolio",
    intro:
      "Dự án hệ thống hóa quá trình rèn luyện kỹ năng số và cho thấy học thuật nghiêm túc có thể song hành cùng gu thẩm mỹ trang nhã.",
    challengeTitle: "Những thách thức đã đối mặt",
    thanksTitle:
      "Cảm ơn các thầy cô đã thiết kế một bài tập đủ khó để sinh viên phải tự phá vỡ giới hạn an toàn của mình.",
    thanks:
      "Cảm ơn bạn đã dành thời gian nán lại để hiểu thêm về một Hoàng Phương Minh rất khác trên không gian kỹ thuật số.",
  },
};

export const projects = [
  {
    id: "bt1",
    chapter: "Chương 1",
    title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
    file: "docs/Bt1.pdf",
    goal: "Rèn luyện thao tác tạo, đổi tên, sao chép, di chuyển, xóa tệp và thư mục.",
    process:
      "Quy hoạch ổ đĩa làm việc mạch lạc, phân nhánh theo chuyên đề môn học, đặt tên file đồng nhất và dọn sạch file nháp để truy xuất nhanh.",
    tag: "Storage",
  },
  {
    id: "bt2-info",
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    file: "docs/Bt2.pdf",
    goal: "Tìm kiếm và đánh giá thông tin học thuật từ nguồn đáng tin cậy.",
    process:
      "Dùng bộ lọc nâng cao để chọn tài liệu học thuật, soi chiếu tư cách tác giả và lập bảng đánh giá minh bạch.",
    tag: "Research",
  },
  {
    id: "bt2-ai",
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    file: "docs/Bt3.pdf",
    goal: "Viết câu lệnh hiệu quả để khai thác mô hình ngôn ngữ lớn trong học tập.",
    process:
      "Tạo chuỗi prompt tóm tắt, phân tích thuật ngữ luật và lập bộ đề; sau đó phản biện các điểm rập khuôn, thiếu nhạy bén của thuật toán.",
    tag: "Prompt",
  },
  {
    id: "bt3-team",
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    file: "docs/Bt4.pdf",
    goal: "Tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
    process:
      "Trong Nhóm 20, phụ trách quay hình, ghi âm, dựng video, hỗ trợ kỹ thuật và phản biện nội dung để hoàn thiện báo cáo nhóm.",
    tag: "Nhóm 20",
  },
  {
    id: "bt2-content",
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    file: "docs/Bt5.pdf",
    goal: "Dùng công cụ AI tạo sinh hỗ trợ quá trình sáng tạo nội dung số.",
    process:
      "Dùng AI phác thảo khung thô, tự quyết định màu sắc, chỉnh câu chữ và truyền tải thông điệp pháp lý sắc bén.",
    tag: "Creative",
  },
  {
    id: "bt4-ethics",
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    file: "docs/Bt6.pdf",
    goal: "Sử dụng AI có trách nhiệm và đạo đức trong học tập, nghiên cứu.",
    process:
      "Lưu vết prompt minh bạch, đúc kết 7 quy tắc đạo đức cá nhân và giữ lập trường từ chối đạo văn.",
    tag: "Integrity",
  },
];

export const reflections = [
  {
    title: "Trải nghiệm và sự thay đổi",
    text: "Biết tận dụng công nghệ giúp không gian học Luật gọn gàng, thẩm mỹ và cá tính hơn.",
  },
  {
    title: "Hành trang quý giá",
    text: "Giá trị lớn nhất là tư duy phản biện độc lập trước kỷ nguyên bùng nổ thông tin.",
  },
  {
    title: "Điểm tâm đắc",
    text: "Các kỹ năng quay, thu, dựng và làm việc nhóm tạo nền tảng thực chiến cho nghiên cứu sâu hơn.",
  },
];

export const challenges = [
  "AI đôi khi sai lệch so với pháp luật thực định Việt Nam, cần tra cứu đối chiếu bằng văn bản gốc.",
  "Prompt cho thuật ngữ chuyên ngành cần chính xác để tránh diễn giải lan man.",
  "Tối ưu âm thanh và hình ảnh cho sản phẩm nhóm tốn nhiều thời gian hậu kỳ.",
];
