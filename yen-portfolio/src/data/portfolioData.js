const assignmentFiles = [
  new URL("../../docs/BT1.pdf", import.meta.url).href,
  new URL("../../docs/BT2.pdf", import.meta.url).href,
  new URL("../../docs/BT3.pdf", import.meta.url).href,
  new URL("../../docs/BT4.pdf", import.meta.url).href,
  new URL("../../docs/BT5.pdf", import.meta.url).href,
  new URL("../../docs/BT6.pdf", import.meta.url).href,
];

export const siteMeta = {
  themeId: "sakura-letter-desk",
  title: "Sakura Letter Desk Portfolio",
};

export const profile = {
  name: "Lê Thị Hoàng Yến",
  major: "Luật học",
  school: "Trường Đại học Luật - Đại học Quốc gia Hà Nội (VNU-UL)",
  greeting:
    "Xin chào, mình là Lê Thị Hoàng Yến! Cảm ơn vì đã dừng chân ghé lại góc nhỏ bình yên này.",
  invitation:
    "Hãy pha một tách trà ấm và cùng mình lật mở những trang nhật ký kỹ thuật số xinh xắn nhé.",
  hobby:
    "Mình có một tình yêu to lớn với việc đọc tiểu thuyết. Học Luật chính là học cách đọc hiểu và tháo gỡ những cuốn tiểu thuyết cuộc đời ấy một cách công bằng nhất.",
  style:
    "Dễ thương và nhẹ nhàng. Mình thích những điều dịu dàng, một cuộc sống ngăn nắp, êm ả và một trái tim luôn biết lắng nghe.",
  interests: ["Đọc tiểu thuyết", "Trà ấm", "Không gian ngăn nắp", "Nhật ký số"],
};

export const goals = [
  {
    title: "Viết nên câu chuyện số của riêng mình",
    text: "Lưu giữ lại hành trình làm quen với công nghệ giống như cách mình nâng niu từng chương của một cuốn sách hay.",
  },
  {
    title: "Hòa quyện sự mềm mại và tính logic",
    text: "Chứng minh rằng sự nhẹ nhàng, dễ thương hoàn toàn có thể kết hợp ăn ý với tư duy pháp lý sắc bén và kỹ năng sử dụng AI hiện đại.",
  },
  {
    title: "Lan tỏa năng lượng tích cực",
    text: "Xây dựng một không gian học thuật gọn gàng, tạo cảm giác thư giãn và chữa lành cho bất cứ ai ghé thăm.",
  },
];

export const futureDirection = [
  "Mình ấp ủ ước mơ trở thành một chuyên gia pháp lý hoặc Luật sư chuyên về mảng Sở hữu trí tuệ để bảo vệ bản quyền cho các nhà văn, tác giả tiểu thuyết.",
  "Mình tin rằng những nút thắt pháp lý không nhất thiết lúc nào cũng phải giải quyết bằng sự cứng nhắc.",
  "Công nghệ và AI là những trợ lý đắc lực giúp mình sắp xếp, tra cứu khối lượng hồ sơ khổng lồ, để có nhiều thời gian hơn thấu hiểu câu chuyện đằng sau mỗi con người tìm đến mình.",
];

export const inkSkills = [
  { name: "Tổ chức dữ liệu", tone: "sakura", text: "Sắp xếp Google Drive và chuẩn hóa tên file như một kệ sách tiểu thuyết." },
  { name: "Khai thác thông tin", tone: "sky", text: "Dùng toán tử tìm kiếm để đi thẳng tới nguồn tài liệu chính thống." },
  { name: "Phản biện AI", tone: "plum", text: "Giữ quyền quyết định và đánh giá đạo đức thuộc về con người." },
  { name: "Cộng tác số", tone: "leaf", text: "Làm việc nhóm rõ ràng, nhẹ nhàng và tôn trọng không gian riêng." },
  { name: "Sáng tạo nội dung", tone: "gold", text: "Dùng AI gợi ý kịch bản, tự kiểm soát phong cách chữa lành của video." },
  { name: "Liêm chính học thuật", tone: "ink", text: "Tự viết bằng ngôn từ của mình và trích dẫn nguồn học thuật nghiêm túc." },
];

export const projects = [
  {
    id: 1,
    title: "Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu",
    focus:
      "Mình đã dọn dẹp lại Google Drive giống như cách mình sắp xếp một kệ sách tiểu thuyết. Các thư mục được phân loại gọn gàng và tên file được đặt theo một công thức chuẩn.",
    imageNote: "Tìm một tài liệu Luật dễ dàng như rút đúng cuốn sách yêu thích trên kệ.",
    pdf: assignmentFiles[0],
    pdfName: "BT1.pdf",
    stamp: "Kệ sách",
    cardVariant: "library-slip",
  },
  {
    id: 2,
    title: "Chương 2: Khai thác dữ liệu và thông tin",
    focus:
      "Để không bị lạc giữa biển chữ trên mạng, mình dùng các toán tử tìm kiếm để đi thẳng tới nguồn tài liệu chính thống.",
    imageNote: "Tra cứu đúng thông tin giúp việc học trở nên đỡ nặng nề hơn.",
    pdf: assignmentFiles[1],
    pdfName: "BT2.pdf",
    stamp: "Tra cứu",
    cardVariant: "source-note",
  },
  {
    id: 3,
    title: "Chương 3: Tổng quan về trí tuệ nhân tạo (AI)",
    focus:
      "AI có thể viết nhanh, nhưng không có sự rung cảm như nhân vật trong một cuốn tiểu thuyết. Pháp luật cần sự thấu cảm và lòng trắc ẩn.",
    imageNote: "AI là cỗ máy hỗ trợ thống kê; quyền đánh giá đạo đức thuộc về con người.",
    pdf: assignmentFiles[2],
    pdfName: "BT3.pdf",
    stamp: "AI",
    cardVariant: "folded-ai-letter",
  },
  {
    id: 4,
    title: "Chương 4: Giao tiếp và hợp tác trong môi trường số",
    focus:
      "Nhóm mình giống như một câu lạc bộ đọc sách nhỏ trên Notion: phân chia công việc rõ ràng, giao tiếp nhẹ nhàng và dùng ngôn từ tích cực.",
    imageNote: "Tôn trọng không gian riêng tư và thời gian nghỉ ngơi của mọi người.",
    pdf: assignmentFiles[3],
    pdfName: "BT4.pdf",
    stamp: "Notion",
    cardVariant: "club-postcard",
  },
  {
    id: 5,
    title: "Chương 5: Sáng tạo nội dung số",
    focus:
      "Mình dùng AI gợi ý kịch bản để tạo video ngắn tóm tắt kiến thức Luật sở hữu trí tuệ.",
    imageNote: "Video được edit theo phong cách chữa lành, dễ thương và êm ái.",
    pdf: assignmentFiles[4],
    pdfName: "BT5.pdf",
    stamp: "Video",
    cardVariant: "film-strip-card",
  },
  {
    id: 6,
    title: "Chương 6: An toàn và liêm chính học thuật",
    focus:
      "Copy nội dung AI mà không trích dẫn cũng giống như đánh cắp bản thảo của một nhà văn.",
    imageNote: "Luôn giữ tư duy độc lập, tự viết bằng ngôn từ của mình và trích dẫn nguồn học thuật.",
    pdf: assignmentFiles[5],
    pdfName: "BT6.pdf",
    stamp: "Liêm chính",
    cardVariant: "integrity-certificate",
  },
];

export const conclusion = {
  heading: "Khép lại chương sách nhỏ",
  quote:
    "Giống như cảm giác khi lật đến trang cuối cùng của một cuốn tiểu thuyết hay, Portfolio này khép lại mang theo biết bao cảm xúc và sự trưởng thành.",
  summary:
    "Nhìn lại toàn bộ những sản phẩm được sắp xếp cẩn thận trên trang web này, mình nhận ra bản thân đã tự tin bước ra khỏi vùng an toàn để làm chủ những công cụ số hiện đại.",
  highlight:
    "Điểm khiến mình ưng ý nhất là đã đưa được trọn vẹn sự nhẹ nhàng, dễ thương vào một dự án môn học khô khan.",
  challenge:
    "Thách thức lớn nhất là đôi khi AI cung cấp các điều luật ảo không có thật. Để vượt qua, mình chậm rãi chắt lọc thông tin và luôn kiểm chứng chéo với văn bản pháp luật gốc.",
  message:
    "Cảm ơn thầy cô và cậu đã dành thời gian lật mở những trang nhật ký này cùng mình. Hy vọng năng lượng nhẹ nhàng từ góc nhỏ này sẽ giúp mọi người có một ngày thật vui vẻ và bình yên.",
};
