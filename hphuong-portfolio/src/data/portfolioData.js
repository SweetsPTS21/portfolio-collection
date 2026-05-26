import avatarUrl from "../../docs/avatar.jpg";
import bt1Pdf from "../../docs/bt1.pdf";
import bt2Pdf from "../../docs/bt2.pdf";
import bt3Pdf from "../../docs/bt3.pdf";
import bt4Pdf from "../../docs/bt4.pdf";
import bt5Pdf from "../../docs/bt5.pdf";
import bt6Pdf from "../../docs/bt6.pdf";

export const profile = {
  name: "Trịnh Hoài Phương",
  headline: "Welcome To My Digital Portfolio",
  subtitle: "Hành trình kết nối Luật học và Công nghệ hiện đại",
  motto:
    "Chính xác về mặt dữ liệu, Tối giản về mặt hình thức, Độc lập về mặt tư duy.",
  major: "Luật chất lượng cao",
  university: "Đại học Luật",
  hobbies: "Yêu động vật nhỏ • Vẽ tranh • Nghiên cứu luật học • Học ngoại ngữ",
  style: "Tối giản - Dễ thương - Tinh gọn - Tươi vui",
  footer: "© 2026 • Trịnh Hoài Phương • Adventure Portfolio",
  avatarUrl,
};

export const direction = {
  title: "Định hướng phát triển",
  text: "Là một sinh viên hệ chất lượng cao, mình luôn tự đặt ra tiêu chuẩn khắt khe cho bản thân trong việc tích lũy tri thức. Định hướng của mình là trở thành một chuyên gia pháp lý quốc tế, sử dụng thành thạo ngoại ngữ để nghiên cứu luật so sánh. Trong kỷ nguyên số, mình muốn học cách làm chủ các công cụ hiện đại một cách tối giản nhất, biến công nghệ thành một trợ lý thông minh giúp xử lý thông tin thô, từ đó giải phóng thời gian để tập trung vào lập luận và tư duy phản biện sâu sắc.",
};

export const portfolioGoal = {
  title: "Mục tiêu của Portfolio",
  text: "Không gian này được xây dựng để hệ thống hóa toàn bộ các sản phẩm thực hành kỹ năng số một cách ngăn nắp. Đây là minh chứng cho việc một sinh viên Luật hoàn toàn có thể sử dụng công nghệ một cách thông minh, gọn gàng, đồng thời thể hiện bản sắc cá nhân riêng biệt và liêm chính học thuật.",
};

export const strengths = [
  "Chính xác về mặt dữ liệu - Luôn kiểm chứng thông tin đa chiều.",
  "Tối giản về mặt hình thức - Tinh gọn, rõ ràng, không rườm rà.",
  "Độc lập về mặt tư duy - Không lạm dụng AI thay thế chất xám.",
  "Đam mê nghiên cứu luật so sánh và ngoại ngữ.",
];

export const tools = [
  {
    group: "Quản lý tệp",
    items: ["File Explorer", "Nén dữ liệu", "Git/GitHub"],
  },
  {
    group: "Nguồn học thuật",
    items: ["Google Scholar", "Thư viện Trường"],
  },
  {
    group: "Công cụ hỗ trợ AI",
    items: ["ChatGPT", "Gemini AI"],
  },
  {
    group: "Sáng tạo nội dung",
    items: ["Canva", "Midjourney", "DALL·E"],
  },
  {
    group: "Làm việc nhóm",
    items: ["Trello", "Google Docs", "Slack"],
  },
];

export const projectsIntro =
  "Hành trình thực hành kỹ năng số được mình sắp xếp ngắn gọn và khoa học theo từng điểm dừng khám phá dưới đây:";

export const projects = [
  {
    label: "Bài tập 1",
    title: "Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu",
    goal: "Thành thạo các thao tác quản lý tệp tin trên hệ điều hành, xây dựng không gian lưu trữ tài liệu ngăn nắp và tối giản.",
    process:
      "Thực hành các lệnh tạo mới, đổi tên, sao chép, di chuyển và xóa tệp tin hệ thống. Quy hoạch toàn bộ tài liệu học tập CLC, tệp ngoại ngữ và tranh vẽ vào các thư mục đám mây riêng biệt, sử dụng các biểu tượng động vật nhỏ đáng yêu để phân loại trực quan giúp truy xuất trong vài giây.",
    pdf: bt1Pdf,
    pdfName: "bt1.pdf",
  },
  {
    label: "Bài tập 2",
    title: "Chương 2: Khai thác dữ liệu và thông tin",
    goal: "Rèn luyện kỹ năng tìm kiếm nâng cao và đánh giá độ tin cậy của các nguồn học liệu pháp lý chuyên sâu.",
    process:
      "Sử dụng toán tử logic để khai thác sâu dữ liệu từ Google Scholar và thư viện trường để thu thập hơn 10 tài liệu nghiên cứu uy tín. Lập bảng đánh giá độ tin cậy và trích dẫn chuẩn Harvard để đảm bảo chiều sâu học thuật.",
    pdf: bt2Pdf,
    pdfName: "bt2.pdf",
  },
  {
    label: "Bài tập 3",
    title: "Chương 3: Tổng quan về trí tuệ nhân tạo",
    goal: "Phát triển kỹ năng viết câu lệnh hiệu quả và định hình tư duy phản biện độc lập trước công nghệ tạo sinh.",
    process:
      "Thử nghiệm 3 cấp độ câu lệnh từ đơn giản đến nâng cao để xử lý tóm tắt văn bản và giải thích thuật ngữ luật học bằng cả tiếng Việt và ngoại ngữ. Rút ra các mẹo viết prompt riêng để luôn giữ thế chủ động điều khiển công nghệ.",
    pdf: bt3Pdf,
    pdfName: "bt3.pdf",
  },
  {
    label: "Bài tập 4",
    title: "Chương 4: Giao tiếp và hợp tác trong môi trường số",
    goal: "Tổ chức và tham gia điều hành cuộc họp trực tuyến chuyên nghiệp, tối ưu hóa năng lực làm việc nhóm.",
    process:
      "Lên kế hoạch chi tiết cho buổi thảo luận nhóm từ xa: phân công rõ điều phối, thư ký, chuẩn bị tài liệu trước khi họp. Cuộc họp diễn ra mạch lạc, tôn trọng không gian riêng và biên bản được tổng hợp cẩn thận.",
    pdf: bt4Pdf,
    pdfName: "bt4.pdf",
  },
  {
    label: "Bài tập 5",
    title: "Chương 5: Sáng tạo nội dung số",
    goal: "Thành thạo việc tích hợp các công cụ tạo sinh để thiết kế một sản phẩm truyền thông pháp lý trực quan.",
    process:
      "Phối hợp công cụ tạo văn bản và thiết kế hình ảnh để sản xuất bài thuyết trình sinh động. Tự tay vẽ các hình ảnh minh họa dễ thương và gọt giũa câu từ tối giản để kiến thức pháp luật trở nên gần gũi, thu hút.",
    pdf: bt5Pdf,
    pdfName: "bt5.pdf",
  },
  {
    label: "Bài tập 6",
    title: "Chương 6: An toàn và liêm chính học thuật trong môi trường số",
    goal: "Nghiên cứu quy định đạo đức trường học, xây dựng bộ quy tắc cá nhân khi ứng dụng công nghệ trong nghiên cứu.",
    process:
      "Tìm hiểu chính sách liêm chính học thuật của trường, thiết kế bảng đồ họa thông tin tổng hợp. Tự đặt lằn ranh đỏ: không sao chép nguyên văn lời AI, luôn khai báo minh bạch sự hỗ trợ công nghệ và bảo vệ tính nguyên bản tư duy.",
    pdf: bt6Pdf,
    pdfName: "bt6.pdf",
  },
];

export const conclusion = {
  title: "Conclusion",
  items: [
    {
      title: "Trải nghiệm & Cảm nhận cá nhân",
      text: "Việc tự tay thiết kế và quản trị trang web này mang lại cho mình một trải nghiệm bứt phá. Mình nhận ra công nghệ không hề khô khan nếu biết cách thổi vào đó cá tính của bản thân. Nhìn thấy các sản phẩm học thuật được sắp xếp ngăn nắp, tối giản mang lại cho mình niềm vui lớn.",
    },
    {
      title: "Kiến thức & Kỹ năng quan trọng nhất",
      points: [
        "Làm chủ dữ liệu: Khai thác chính xác và chọn lọc các nguồn học thuật đáng tin cậy.",
        "Điều khiển AI: Sử dụng ngôn ngữ câu lệnh hiệu quả, biến AI thành trợ lý thông minh thay vì lệ thuộc.",
        "Làm việc nhóm văn minh: Hợp tác trực tuyến hiệu quả qua các nền tảng Trello, Slack.",
      ],
    },
    {
      title: "Điểm tâm đắc & Thách thức lớn nhất",
      text: "Sản phẩm phản ánh đúng phong cách chỉn chu, gọn gàng và trách nhiệm của mình. Thách thức lớn nhất là rủi ro 'ảo giác' luật bịa đặt từ AI. Mình đã vượt qua bằng cách luôn kiểm chứng chéo với văn bản gốc trên cơ sở dữ liệu quốc gia trước khi đưa vào bài viết.",
    },
    {
      title: "Định hướng tương lai",
      text: "Mình sẽ tiếp tục sử dụng kỹ năng số để hỗ trợ học ngoại ngữ và nghiên cứu sâu luật thương mại quốc tế. Công nghệ sẽ là trợ lý tối giản hóa công việc văn phòng, để mình tập trung bảo vệ các giá trị công bằng bằng tư duy sắc bén và một trái tim nhân văn.",
    },
  ],
};
