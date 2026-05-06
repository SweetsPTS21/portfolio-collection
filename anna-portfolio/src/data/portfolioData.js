// ============================================================
// portfolioData.js — Toàn bộ nội dung từ docs/portfolio.md
// Tống Thị An Na | Luật Kinh Doanh | ĐH Luật ĐHQGHN
// ============================================================

export const personalInfo = {
  name: "Tống Thị An Na",
  major: "Luật Kinh Doanh",
  university: "Đại học Luật – ĐHQGHN",
  role: "Sinh viên ngành Luật",
  tagline: "Về tôi",
  principle: "Tối ưu hóa trải nghiệm người xem",
  description:
    "Hồ sơ này được thiết lập dựa trên nguyên tắc Tối ưu hóa trải nghiệm người xem. Nội dung không chỉ dừng lại ở việc liệt kê mà được cấu trúc hóa theo mô hình: Mục tiêu → Quy trình → Kết quả → Minh chứng. Mọi dữ liệu và tệp đính kèm đều được sắp xếp khoa học, giúp việc tra cứu và đối soát thông tin trở nên tức thì và chính xác.",
  copyright: "© 2026 • Tống Thị An Na • Digital Portfolio",
};

export const hobbies = [
  { label: "Chơi cầu lông", icon: "Feather" },
  { label: "Đọc truyện", icon: "BookOpen" },
  { label: "Xem phim", icon: "Film" },
  { label: "Du lịch", icon: "MapPin" },
];

export const workingPrinciples = [
  {
    title: "Ưu tiên trải nghiệm người đọc",
    desc: "Nội dung được trình bày mạch lạc, chia thành các mục rõ ràng, có tiêu đề và bố cục hợp lý để dễ theo dõi.",
  },
  {
    title: "Minh chứng rõ ràng, minh bạch",
    desc: "Hình ảnh và tài liệu đính kèm đảm bảo chất lượng, hiển thị rõ ràng và có thể phóng to khi cần kiểm tra.",
  },
  {
    title: "Sử dụng AI có trách nhiệm",
    desc: "AI chỉ đóng vai trò hỗ trợ tham khảo, người thực hiện bài tập hoàn toàn chịu trách nhiệm về nội dung và bản chỉnh sửa cuối cùng.",
  },
];

export const skills = [
  {
    id: "01",
    title: "Quản lý và tổ chức dữ liệu số",
    icon: "FolderOpen",
    desc: "Thiết lập hệ thống lưu trữ khoa học cho tệp và thư mục, áp dụng quy ước đặt tên nhất quán giúp truy xuất nhanh theo từng mục đích sử dụng.",
  },
  {
    id: "02",
    title: "Khai thác tài liệu học thuật",
    icon: "Search",
    desc: "Tìm kiếm và chọn lọc nguồn học thuật một cách hiệu quả, ưu tiên tác giả uy tín, nhà xuất bản đáng tin cậy và thông tin có tính cập nhật cao.",
  },
  {
    id: "03",
    title: "Kỹ năng tương tác với AI (Prompt Engineering)",
    icon: "MessageSquare",
    desc: "Soạn yêu cầu có bối cảnh rõ ràng, xác định đầu ra mong muốn và tiêu chí đánh giá để nâng cao độ chính xác của phản hồi từ AI.",
  },
  {
    id: "04",
    title: "Tái cấu trúc và trình bày thông tin",
    icon: "LayoutGrid",
    desc: "Chuyển hóa dữ liệu và ý tưởng thành nội dung có bố cục logic, phù hợp để công bố trên website hoặc các nền tảng số.",
  },
];

export const skillsBeingPracticed = [
  {
    title: "Quản lý và lưu trữ tài liệu khoa học",
    desc: "Sắp xếp thư mục theo cấu trúc logic, phân loại rõ ràng từng phiên bản tài liệu nhằm hạn chế sai sót và nhầm lẫn trong quá trình sử dụng.",
  },
  {
    title: "Kiểm chứng và đánh giá nguồn thông tin",
    desc: "Luôn đối chiếu dữ liệu từ nhiều nguồn, xem xét mức độ tin cậy trước khi đưa vào bài viết học thuật.",
  },
  {
    title: "Khai thác AI có định hướng",
    desc: "Xây dựng prompt rõ ràng về mục tiêu, phạm vi và yêu cầu cụ thể để đảm bảo kết quả AI cung cấp đúng trọng tâm.",
  },
];

export const toolGroups = [
  {
    group: "Quản lý tệp và tài liệu",
    icon: "HardDrive",
    tools:
      "File Explorer, các công cụ nén dữ liệu và quản lý phiên bản nhằm tối ưu lưu trữ và chia sẻ.",
  },
  {
    group: "Nguồn học thuật",
    icon: "GraduationCap",
    tools:
      "Google Scholar cùng các cơ sở dữ liệu trực tuyến có độ tin cậy cao phục vụ nghiên cứu và học tập.",
  },
  {
    group: "Công cụ hỗ trợ AI",
    icon: "Bot",
    tools:
      "ChatGPT, Gemini dùng trong quá trình phát triển ý tưởng và rà soát nội dung, có điều chỉnh theo mục tiêu cá nhân và yêu cầu học thuật.",
  },
  {
    group: "Thiết kế và sáng tạo nội dung",
    icon: "Palette",
    tools:
      "Canva, Midjourney/DALL·E cho các bài tập liên quan đến hình ảnh và nội dung sáng tạo ứng dụng AI.",
  },
  {
    group: "Hợp tác và làm việc nhóm",
    icon: "Users",
    tools:
      "Trello, Google Docs, Slack hỗ trợ quản lý tiến độ, chia sẻ tài liệu và phối hợp trong các dự án học tập.",
  },
];

export const projects = [
  {
    id: 1,
    chapter: "Chương 1",
    assignmentType: "Bài tập 1",
    title: "Máy tính và các thiết bị ngoại vi",
    summary:
      "Tổng quan về máy tính, các thành phần cơ bản và thiết bị ngoại vi, kèm minh chứng thực hành trong file đính kèm.",
    content:
      "Tổng quan về máy tính, các thành phần cơ bản và thiết bị ngoại vi (bàn phím, chuột, máy in…), kèm minh chứng thực hành trong file đính kèm.",
    tags: ["Phần cứng", "Thiết bị ngoại vi", "Thực hành"],
  },
  {
    id: 2,
    chapter: "Chương 2",
    assignmentType: "Bài tập 2",
    title: "Khai thác dữ liệu và thông tin",
    summary:
      "Thực hành tìm kiếm, thu thập và tổ chức thông tin; biết cách đánh giá độ tin cậy của nguồn và trích dẫn phù hợp.",
    content:
      "Thực hành tìm kiếm, thu thập và tổ chức thông tin; biết cách đánh giá độ tin cậy của nguồn và trích dẫn phù hợp.",
    tags: ["Tìm kiếm thông tin", "Google Scholar", "Trích dẫn"],
  },
  {
    id: 3,
    chapter: "Chương 3",
    assignmentType: "Bài tập 2",
    title: "Tổng quan về trí tuệ nhân tạo",
    summary:
      "Tổng quan về AI: khái niệm, ứng dụng phổ biến, lợi ích – rủi ro và ví dụ liên hệ thực tế trong học tập.",
    content:
      "Tổng quan về AI: khái niệm, ứng dụng phổ biến, lợi ích – rủi ro và ví dụ liên hệ thực tế trong học tập.",
    tags: ["Trí tuệ nhân tạo", "ChatGPT", "Gemini", "Ứng dụng AI"],
  },
  {
    id: 4,
    chapter: "Chương 4",
    assignmentType: "Bài tập 3",
    title: "Giao tiếp và hợp tác trong môi trường số",
    summary:
      "Rèn kỹ năng giao tiếp số và làm việc nhóm online: phân công, trao đổi, chia sẻ tài liệu và quy tắc ứng xử trên môi trường số.",
    content:
      "Rèn kỹ năng giao tiếp số và làm việc nhóm online: phân công, trao đổi, chia sẻ tài liệu và quy tắc ứng xử trên môi trường số.",
    tags: ["Trello", "Google Docs", "Slack", "Làm việc nhóm"],
  },
  {
    id: 5,
    chapter: "Chương 5",
    assignmentType: "Bài tập 2",
    title: "Sáng tạo nội dung số",
    summary:
      "Thực hành sáng tạo nội dung số: lên ý tưởng, lựa chọn công cụ, biên tập/thiết kế và lưu ý bản quyền khi sử dụng tài nguyên.",
    content:
      "Thực hành sáng tạo nội dung số: lên ý tưởng, lựa chọn công cụ, biên tập/thiết kế và lưu ý bản quyền khi sử dụng tài nguyên.",
    tags: ["Canva", "Midjourney", "Nội dung số", "Bản quyền"],
  },
  {
    id: 6,
    chapter: "Chương 6",
    assignmentType: "Bài tập 4",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    summary:
      "Tập trung vào an toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật (tránh đạo văn, trích dẫn đúng, dùng AI minh bạch).",
    content:
      "Tập trung vào an toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật (tránh đạo văn, trích dẫn đúng, dùng AI minh bạch).",
    tags: ["An toàn số", "Liêm chính học thuật", "Đạo văn", "Bảo mật"],
  },
];

export const reflections = [
  {
    id: "01",
    title: "Cách làm việc trở nên có kế hoạch hơn",
    desc: "Trước khi bắt tay vào làm, em dành thời gian xác định mục tiêu, chuẩn bị cấu trúc và lựa chọn công cụ phù hợp thay vì làm theo cảm tính.",
    icon: "Target",
  },
  {
    id: "02",
    title: "Chủ động hơn trong xử lý thông tin",
    desc: "Em chú ý đến độ phù hợp của tài liệu, không sử dụng nguồn một cách máy móc và luôn cân nhắc bối cảnh khi đưa thông tin vào bài.",
    icon: "Brain",
  },
  {
    id: "03",
    title: "Nhận thức rõ hơn vai trò của AI",
    desc: "AI được sử dụng như công cụ hỗ trợ tư duy và kiểm tra lại nội dung, không thay thế quá trình suy nghĩ và viết của bản thân.",
    icon: "Cpu",
  },
];

export const lessons = [
  {
    title: "Chuẩn bị trước giúp tiết kiệm thời gian",
    desc: "Khi xác định rõ cần làm gì và làm theo hướng nào, quá trình thực hiện diễn ra mạch lạc và ít phải chỉnh sửa lại.",
    icon: "Clock",
  },
  {
    title: "Tiêu chí rõ ràng giúp tự đánh giá hiệu quả",
    desc: "Việc đặt ra yêu cầu cụ thể cho từng sản phẩm giúp em dễ nhận ra điểm đạt và điểm cần cải thiện.",
    icon: "CheckSquare",
  },
  {
    title: "Minh chứng là một phần của nội dung",
    desc: "Việc lưu lại quá trình làm bài giúp người xem hiểu cách tiếp cận, đồng thời giúp bản thân dễ rà soát và rút kinh nghiệm.",
    icon: "FileText",
  },
];

export const futureGoals = [
  "Trình bày ngắn gọn hơn nhưng rõ trọng tâm",
  "Làm nổi bật bài học rút ra từ từng bài",
  "Mở rộng nội dung theo hướng gắn với định hướng học tập và nghề nghiệp",
];

export const conclusionText = `Hoàn thành portfolio gồm 6 bài tập giúp em nhìn lại toàn bộ quá trình học theo một góc nhìn có hệ thống hơn. Thay vì chỉ tập trung hoàn thành yêu cầu từng bài, em bắt đầu chú ý đến cách tổ chức thông tin, cách ra quyết định trong quá trình làm và mức độ hiệu quả của các công cụ hỗ trợ, đặc biệt là AI.

Portfolio không chỉ phản ánh kết quả cuối cùng mà còn cho thấy cách em tiếp cận vấn đề, thử nghiệm phương pháp và điều chỉnh trong quá trình thực hiện.`;

export const finalConclusion = `Thông qua nền tảng từ môn học Nhập môn Trí tuệ nhân tạo, em nhận thức rõ AI không chỉ là một công cụ tự động hóa mà là đòn bẩy để nâng cao tư duy hệ thống. Việc kết hợp sự chặt chẽ, tư duy logic của ngành Luật với khả năng tổng hợp dữ liệu mạnh mẽ của AI giúp em tối ưu hóa hiệu suất học tập và nghiên cứu. Portfolio này là minh chứng thực tiễn cho khả năng làm chủ công nghệ: Khai thác AI một cách có chiến lược, có kiểm chứng và hoàn toàn chịu trách nhiệm về tính liêm chính học thuật.`;
