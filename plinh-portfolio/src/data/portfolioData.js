// src/data/portfolioData.js

export const personalInfo = {
  name: "Đặng Phương Linh",
  class: "K69LKD-C",
  major: "Luật Kinh doanh",
  university: "Đại học Luật - Đại học Quốc gia Hà Nội",
  style: "Nhẹ nhàng, tự do",
  styleDescription: "Mình không thích sự gò bó và luôn muốn mọi thứ diễn ra một cách tự nhiên, thoải mái nhất.",
  hobbies: [
    { label: "Nghe nhạc", icon: "Music", desc: "Mình là một đứa cực kỳ mê nghe nhạc mọi lúc mọi nơi." },
    { label: "Vẽ tranh", icon: "Palette", desc: "Thích ngồi vẽ tranh những lúc rảnh rỗi để thể hiện bản thân." },
    { label: "Chơi game", icon: "Gamepad2", desc: "Thỉnh thoảng cày game để xả stress hiệu quả." }
  ],
  goal: "Nhiều người hay nghĩ học Luật là phải khô khan, nhưng mình muốn mang một tinh thần tự do, cởi mở vào ngành này. Mục tiêu của mình là trở thành một nhân viên pháp chế vững chuyên môn nhưng không bị máy móc. Mình học cách dùng công nghệ để xử lý nhanh mấy thủ tục giấy tờ lằng nhằng, từ đó tiết kiệm thời gian để bản thân có thể vẽ tranh, chơi game và tận hưởng cuộc sống.",
  purpose: "Trang web này giống như một cuốn nhật ký số của mình vậy. Nó lưu lại quá trình mình từ một đứa không thành thạo về công nghệ trở nên quen thuộc với các công cụ học tập mới. Đây là cách mình chứng minh rằng sinh viên trường Luật cũng có thể làm chủ không gian mạng một cách khoa học và mang đậm chất riêng.",
  principles: "Dù tự do nhưng mình rất tôn trọng chất xám. Nguyên tắc của mình là tự nghĩ, tự làm, có thể dùng công cụ để tìm gợi ý nhưng tuyệt đối không sao chép y nguyên. Mình luôn phải tự kiểm chứng lại mọi thứ.",
  tools: [
    { name: "Google Drive", desc: "Để cất giữ tài liệu gọn gàng và đồng bộ hóa." },
    { name: "Google Scholar", desc: "Để tìm kiếm bài nghiên cứu học thuật pháp lý tin cậy." },
    { name: "ChatGPT", desc: "Để thử nghiệm và lên ý tưởng sơ bộ cho các bài viết." },
    { name: "Canva", desc: "Để thiết kế tài liệu trình bày trực quan và đẹp mắt." }
  ]
};

export const projects = [
  {
    id: 1,
    chapter: "Chương 1",
    title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
    objective: "Chuẩn hóa hệ thống quản trị dữ liệu cá nhân, rèn luyện kỹ năng vận hành và phân loại tệp tin theo cấu trúc logic trên hệ điều hành.",
    process: "Quá trình chuẩn hóa bắt đầu bằng việc thiết lập cấu trúc thư mục phân tầng định danh cá nhân. Hệ thống tài liệu môn học lớp K69LKD-C, cơ sở dữ liệu nghệ thuật và tư liệu cá nhân được phân bổ vào các nhóm độc lập. Thao tác đồng bộ hóa định dạng tên tệp tin được thực hiện triệt để nhằm tối ưu hóa thuật toán tìm kiếm cục bộ. Các dữ liệu không còn giá trị lưu trữ được xử lý xóa vĩnh viễn, bảo đảm không gian làm việc số luôn duy trì trạng thái khoa học và đạt hiệu suất cao nhất.",
    fileUrl: "./docs/Bt1.pdf",
    fileName: "Bt1.pdf"
  },
  {
    id: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    objective: "Nâng cao năng lực truy xuất, phân tích và thẩm định nguồn học liệu pháp lý chuyên sâu từ các cơ sở dữ liệu quốc gia và quốc tế.",
    process: "Vận dụng các toán tử tìm kiếm logic, bản thân đã tiến hành truy xuất hệ thống thông tin hiện hành. Hơn 10 tài liệu khoa học được thu thập và tiến hành quy trình thẩm định chéo dựa trên độ tin cậy của tác giả và tính chính thống của cơ quan xuất bản. Danh mục tài liệu được hệ thống hóa tuân thủ nghiêm ngặt chuẩn mực trích dẫn Harvard.",
    fileUrl: "./docs/Bt2.pdf",
    fileName: "Bt2.pdf"
  },
  {
    id: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    objective: "Phân tích và tối ưu hóa khả năng tương tác với các mô hình ngôn ngữ lớn, đồng thời xác lập giới hạn nhận thức luận của công nghệ.",
    process: "Quá trình thử nghiệm được tiến hành qua ba tác vụ học thuật trọng điểm. Thông qua việc thiết lập hệ thống câu lệnh có cấu trúc và đánh giá kết quả đối chiếu, nghiên cứu chỉ ra rằng trí tuệ nhân tạo sở hữu năng lực tổng hợp dữ liệu vượt trội nhưng hoàn toàn khuyết thiếu tư duy logic biện chứng và khả năng diễn giải bản chất quy phạm pháp luật. Kết luận rút ra khẳng định trí tuệ nhân tạo chỉ đóng vai trò hỗ trợ tiền xử lý dữ liệu, quyền quyết định học thuật bắt buộc phải thuộc về chuyên gia nghiên cứu.",
    fileUrl: "./docs/Bt3.pdf",
    fileName: "Bt3.pdf"
  },
  {
    id: 4,
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    objective: "Tổ chức và vận hành không gian thảo luận chuyên môn trực tuyến, bảo đảm tính kỷ luật và hiệu quả hợp tác nhóm.",
    process: "Với vai trò là người phụ trách tìm kiếm tài liệu, tổng hợp thông tin và biên soạn nội dung phần “AI hỗ trợ học tập và quản lý thời gian”. Cuộc họp kéo dài 30 phút. Nền tảng làm việc trực tuyến được tận dụng tối đa nhằm bảo đảm quyền phát biểu bình đẳng của mọi thành viên. Không khí thảo luận duy trì sự nhã nhặn, khách quan và bám sát mục tiêu nghiên cứu. Biên bản làm việc được tổng hợp minh bạch, hệ thống hóa toàn bộ các quyết sách và phân bổ trách nhiệm cụ thể cho giai đoạn tiếp theo.",
    fileUrl: "./docs/Bt4.pdf",
    fileName: "Bt4.pdf"
  },
  {
    id: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    objective: "Ứng dụng công nghệ tạo sinh trong việc thiết kế sản phẩm truyền thông học thuật, kết hợp giữa tính chuẩn xác pháp lý và tư duy thẩm mỹ.",
    process: "Dự án yêu cầu giải cấu trúc các quy định pháp luật kinh doanh thành một nền tảng trình chiếu trực quan. Các thuật toán tự động được sử dụng để hỗ trợ phác thảo khung lập luận cơ sở. Tiếp đó, bằng tư duy nghệ thuật cá nhân, bản thân đã can thiệp tinh chỉnh toàn bộ hệ thống đồ họa và ngôn ngữ diễn đạt nhằm bảo đảm tính truyền tải cao nhất. Báo cáo đi kèm cung cấp cái nhìn phê phán về giới hạn đạo đức khi lạm dụng công cụ tự động hóa trong sáng tạo nội dung.",
    fileUrl: "./docs/Bt5.pdf",
    fileName: "Bt5.pdf"
  },
  {
    id: 6,
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    objective: "Phân tích quy chuẩn đạo đức và xác lập hệ thống tiêu chuẩn hành xử cá nhân nhằm bảo vệ tính liêm chính trong nghiên cứu.",
    process: "Dựa trên việc phân tích chuyên sâu bộ quy tắc liêm chính học thuật của Đại học Luật, bản thân đã tiến hành thiết kế một sơ đồ hệ thống hóa các giới hạn hành vi trên không gian mạng. Nội dung trọng tâm nhấn mạnh vào nguyên tắc bảo vệ quyền sở hữu trí tuệ, tính minh bạch trong quá trình trích dẫn và sự cam kết duy trì tính nguyên bản của tư duy độc lập trước sự can thiệp của các công cụ tự động hóa.",
    fileUrl: "./docs/Bt6.pdf",
    fileName: "Bt6.pdf"
  }
];

export const conclusionData = {
  title: "Đánh Giá Tổng Kết",
  intro: "Hoàn tất dự án Portfolio là cơ sở để tiến hành đánh giá tổng kết năng lực tiếp thu và chuyển hóa kiến thức vào thực tiễn nghiên cứu. Quá trình hệ thống hóa cơ sở dữ liệu số mang lại cho mình cái nhìn toàn diện về phương pháp tổ chức công việc khoa học. Việc chủ động thiết kế không gian lưu trữ chuyên nghiệp giúp bản thân khẳng định sự tự chủ, xóa bỏ những rào cản kỹ thuật để tập trung tối đa vào việc nâng cao chất lượng nghiên cứu pháp lý.",
  skillsLearned: {
    title: "Kiến thức và kỹ năng quan trọng nhất đã học",
    points: [
      { label: "Truy xuất dữ liệu nguyên bản", desc: "Năng lực giá trị truy xuất hệ thống học liệu học thuật uy tín." },
      { label: "Prompt Engineering", desc: "Kỹ năng thiết lập câu lệnh điều hướng tối ưu cho trí tuệ nhân tạo." },
      { label: "Quản trị dự án & Hội thảo số", desc: "Kỹ năng điều hành hội thảo trực tuyến và quản trị dự án nhóm chuyên nghiệp." }
    ]
  },
  reflection: {
    title: "Tâm đắc nhất & Thách thức",
    success: {
      title: "Điểm tâm đắc nhất",
      content: "Thành quả nổi bật nhất là việc tích hợp thành công tư duy nghệ thuật tự do vào cấu trúc logic, nghiêm ngặt của luật học mà vẫn bảo đảm tính chuẩn mực hàn lâm."
    },
    challenge: {
      title: "Thách thức lớn nhất",
      content: "Thách thức lớn nhất phát sinh từ việc thẩm định tính xác thực của dữ liệu do máy học cung cấp. Yêu cầu này đòi hỏi sự cẩn trọng tuyệt đối và thao tác đối chiếu liên tục với hệ thống văn bản quy phạm pháp luật hiện hành nhằm ngăn chặn rủi ro sai lệch kiến thức."
    }
  },
  future: {
    title: "Định hướng tương lai",
    content: "Trên cơ sở các kỹ năng số đã được kiện toàn, bản thân cam kết tiếp tục ứng dụng công nghệ để nâng cao chất lượng nghiên cứu ngành Luật Kinh doanh. Mục tiêu chiến lược là tối ưu hóa các quy trình tra cứu và xử lý hồ sơ, từ đó tạo dựng nền tảng vững chắc để trở thành một chuyên gia pháp lý hiện đại, làm việc với hiệu suất cao và tư duy độc lập."
  }
};
