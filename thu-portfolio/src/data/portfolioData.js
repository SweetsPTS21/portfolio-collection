export const profile = {
  name: 'Lê Thị Hảo',
  studentId: '24064072',
  school: 'Đại học Luật – Đại học Quốc gia Hà Nội',
  major: 'Luật Thương mại quốc tế',
  greeting: 'Chào mừng bạn đến với portfolio của mình nhé!',
  intro:
    'Là sinh viên Luật tại trường Đại học Luật – Đại học Quốc gia Hà Nội, mình luôn dành một góc nhỏ đam mê cho công nghệ. Với mình, việc mày mò các giải pháp số đơn giản là để hành trình học Luật trở nên dễ thở và cảm hứng hơn.',
  interests: ['Trekking & Đạp xe', 'Lắp ráp Lego', 'Đọc truyện trinh thám', 'Nghe nhạc Lo-fi'],
  style: 'Kỷ luật, sáng tạo và liêm chính.',
  motto:
    'Trí tuệ nhân tạo có thể tổng hợp vạn điều lý thuyết trong một giây, nhưng chỉ có tư duy sắc bén và sự thấu cảm của con người mới tìm thấy công lý ẩn sau những dòng văn bản. Sử dụng AI không phải để ngừng tư duy, mà là để nâng tầm tư duy lên những tầng cao mới.',
  philosophy:
    'Mục tiêu là xây dựng nền tảng tư duy pháp lý toàn cầu vững chắc, kết hợp tư duy phản biện sắc bén, năng lực ngoại ngữ chuyên sâu cùng việc ứng dụng các công nghệ số (AI tạo sinh, Big Data) để tối ưu hóa hiệu suất nghiên cứu.',
  portfolioDesc:
    'Đây là nơi lưu giữ thành quả của mình sau 6 bài học đầu tiên của môn học (CS300) Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo. Hy vọng bạn sẽ tìm thấy chút niềm vui và sự mới lạ trong không gian thú vị này.',
  email: '24064072@vnu.edu.vn',
};

export const courseInfo = {
  name: 'CS300 — Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo',
  description:
    'Học phần giúp sinh viên tiếp cận công nghệ một cách có chọn lọc: biết hiểu, biết kiểm chứng và biết ứng dụng AI có trách nhiệm trong học thuật.',
  semester: 'Mùa Thu 2024',
};

export const projects = [
  {
    id: 1,
    title: 'Bài tập 1',
    chapter: 'Chương 1: Quản lý tập tin và thư mục cá nhân',
    objective:
      'Thiết kế và tạo cấu trúc thư mục logic, áp dụng quy tắc đặt tên tệp thống nhất (Snake_case/CamelCase) và thực hiện thành thạo các thao tác quản lý dữ liệu.',
    lessons: [
      'Tạo cây thư mục và tệp tin văn bản.',
      'Đổi tên, Sao chép (Copy) và Di chuyển (Cut) dữ liệu chính xác.',
      'Quản lý rác thải số: Xóa tệp và Khôi phục từ Recycle Bin.',
    ],
    emoji: '🎧',
  },
  {
    id: 2,
    title: 'Bài tập 2',
    chapter: 'Chương 2: Tìm kiếm và đánh giá thông tin',
    objective:
      'Vận dụng các kỹ năng tìm kiếm nâng cao để thu thập thông tin học thuật chất lượng. Rèn luyện tư duy phản biện để đánh giá độ tin cậy của các nguồn tài liệu.',
    lessons: [
      'Hiệu quả công cụ: Google Scholar vượt trội trong việc loại bỏ tin nhiễu.',
      'Sức mạnh cú pháp: Toán tử " ", filetype:, site: tiết kiệm 70% thời gian lọc tài liệu.',
      'Tư duy phản biện: Kiểm tra chéo thông tin tác giả và nơi xuất bản.',
    ],
    emoji: '🔍',
  },
  {
    id: 3,
    title: 'Bài tập 3',
    chapter: 'Chương 3: Kỹ thuật Prompt Engineering',
    objective:
      'Phát triển kỹ năng Prompt Engineering để chuyển đổi câu lệnh mơ hồ thành câu lệnh có cấu trúc, ngữ cảnh rõ ràng. Thực hiện: Tóm tắt tài liệu, Giải thích khái niệm, Tạo bộ câu hỏi ôn tập.',
    lessons: [
      'Ngữ cảnh là Vua: AI hoạt động tốt nhất khi được gán vai trò cụ thể.',
      'Cấu trúc tạo ra Chất lượng: Yêu cầu định dạng đầu ra cụ thể buộc AI tổ chức thông tin logic.',
      'Dẫn dắt tư duy: Yêu cầu AI "suy nghĩ từng bước" giảm thiểu sai sót.',
    ],
    emoji: '🤖',
  },
  {
    id: 4,
    title: 'Bài tập 4',
    chapter: 'Chương 4: Công cụ Hợp tác Trực tuyến',
    objective:
      'Áp dụng công cụ quản lý dự án (Trello) để lập kế hoạch, phân công và theo dõi tiến độ. Thiết kế không gian lưu trữ chung (Google Drive) và môi trường cộng tác (Google Docs).',
    lessons: [
      'Quản lý dự án: Chia nhỏ đầu việc và theo dõi tiến độ trực quan.',
      'Tối ưu hóa dữ liệu: Sắp xếp thư mục khoa học và phân quyền bảo mật.',
      'Kỹ năng cộng tác: Tôn trọng ý kiến qua Suggesting và duy trì luồng thông tin.',
    ],
    emoji: '☕',
  },
  {
    id: 5,
    title: 'Bài tập 5',
    chapter: 'Chương 5: Sáng tạo nội dung với AI',
    objective:
      'Làm chủ quy trình sáng tạo nội dung hiện đại bằng cách phối hợp ChatGPT, Midjourney, Canva AI để thiết kế Infographic chủ đề "Ô nhiễm rác thải nhựa".',
    lessons: [
      'Làm chủ quy trình: Phối hợp ChatGPT (nội dung), Midjourney (hình ảnh), Canva AI (bố cục).',
      'Tư duy phản biện: Tra cứu chéo dữ liệu từ các nguồn uy tín.',
      'Trách nhiệm: Con người quyết định tính thẩm mỹ và kiểm soát chất lượng.',
    ],
    emoji: '🎨',
  },
  {
    id: 6,
    title: 'Bài tập 6',
    chapter: 'Chương 6: Đạo đức & Trách nhiệm khi sử dụng AI',
    objective:
      'Phân tích có phê phán các chính sách và vấn đề đạo đức liên quan đến AI. Xây dựng bộ quy tắc ứng xử cá nhân gồm 5-7 nguyên tắc cho việc sử dụng AI minh bạch, hiệu quả và liêm chính.',
    lessons: [
      'Từ công cụ thành đối tác: AI là đối tác tư duy giúp khám phá góc nhìn mới.',
      'Trách nhiệm là chìa khóa: Mọi kết quả cuối cùng đều là trách nhiệm cá nhân.',
      'Kỹ năng tương lai: Sử dụng AI có đạo đức là rèn luyện kỹ năng thế kỷ 21.',
    ],
    emoji: '⚖️',
  },
];

export const conclusion = {
  journey:
    'Khi bước vào môn học CS300, em mang theo sự hoài nghi của một sinh viên thuần xã hội. Ba bài học đầu tiên giống như một cú tát vào thói quen cũ. Nhưng bước ngoặt thực sự nằm ở nửa sau hành trình, khi em đối mặt với AI và các nền tảng cộng tác số.',
  mindshift:
    'Sự thay đổi lớn nhất không nằm ở việc biết thêm vài công cụ, mà là sự sụp đổ của một định kiến. Giờ đây em tin rằng: "Tư duy là cốt lõi, công nghệ là đòn bẩy." AI có thể đọc hàng triệu trang tài liệu trong một giây, nhưng nó không có sự thấu cảm, không biết đấu tranh cho công lý.',
  highlight:
    'Giữ được sự Liêm chính học thuật khi đứng trước một công cụ quá quyền năng như AI. Ở Chương 6, khi xây dựng bộ quy tắc ứng xử cá nhân, em nhận ra giá trị của bản thân không nằm ở câu trả lời bóng bẩy mà AI tạo ra, mà nằm ở sự khắt khe khi em kiểm chứng, phản biện lại chính câu trả lời đó.',
  challenge:
    'Đã có những lúc em suýt bị cám dỗ bởi những đáp án có vẻ hoàn hảo của AI. Việc giữ cho mình sự tỉnh táo, không để tư duy cá nhân bị hòa tan vào các thuật toán, và kiên quyết viết lại mọi thứ bằng ngôn ngữ sắc bén của riêng mình là một trải nghiệm đấu tranh nội tâm cực kỳ khó khăn.',
  vision:
    'Em không muốn trở thành một luật sư truyền thống ẩn mình sau những chồng hồ sơ giấy. Mục tiêu là mang tư duy toàn cầu của Luật Thương mại Quốc tế hòa vào dòng chảy của nền kinh tế số, biến AI và Big Data thành vũ khí chiến lược.',
  thanks:
    'Em xin gửi lời cảm ơn sâu sắc nhất đến Thầy/Cô — những người đã kiên nhẫn dắt một sinh viên Luật bước qua bức tường ngăn cách với thế giới công nghệ. Cảm ơn Thầy/Cô đã không chỉ dạy công cụ, mà đã trao cho chúng em tư duy làm chủ công nghệ một cách liêm chính và trách nhiệm.',
};

export const themeConfig = {
  spring: { emoji: '🌸', label: 'Xuân', icons: ['🌸', '🌷', '🌿', '🦋', '🐝'] },
  summer: { emoji: '🌻', label: 'Hạ', icons: ['🌻', '☀️', '🌴', '🍉', '🌊'] },
  autumn: { emoji: '🍂', label: 'Thu', icons: ['🍂', '🍁', '🎃', '🌰', '🍄'] },
  winter: { emoji: '❄️', label: 'Đông', icons: ['❄️', '⛄', '🌨️', '✨', '🎄'] },
};
