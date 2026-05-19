import avatarUrl from '../../docs/avatar.jpg';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Nguyễn Phương Nhi',
  tagline: 'WELCOME TO MY PORTFOLIO',
  motto: 'Đơn giản, thẳng thắn và luôn sẵn sàng thích nghi.',
  major: 'Luật Học',
  university: 'Đại học Luật — Đại học Quốc gia Hà Nội',
  hobbies: 'Xem phim, nấu ăn, chơi cầu lông, đi du lịch',
  style: 'Đơn giản, thẳng tính, thích nghi nhanh, có tinh thần trách nhiệm',
  avatarUrl,
};

export const orientation = {
  title: 'La Bàn Định Hướng',
  content: [
    'Trở thành người hành nghề luật trong kỷ nguyên số.',
    'Hoàn thiện tư duy pháp lý, đặc biệt mài giũa chuyên sâu trong mảng pháp luật kinh tế quốc tế và bảo vệ quyền lợi người tiêu dùng.',
    'Không chỉ dừng lại ở việc nắm vững các văn bản quy phạm, mà còn làm chủ công nghệ để tối ưu hóa quá trình tra cứu, phân tích và lập luận pháp lý một cách sắc bén, hiện đại.',
  ],
};

export const portfolioMission = {
  title: 'Không gian lưu trữ',
  content:
    'Website này vượt ra khỏi khuôn khổ của một bài báo cáo môn học thông thường. Đây là một không gian lưu trữ tư duy và kỹ năng số, nơi ghi nhận toàn bộ quá trình tiếp nhận dữ liệu, đánh giá tính logic của thông tin, và ứng dụng công nghệ để sáng tạo có trách nhiệm.',
};

export const coreSkills = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Tư duy số',
      text: 'Biết cách học tập, lưu trữ và xử lý thông tin khoa học hơn trên nền tảng số.',
    },
    {
      title: 'Khai thác AI hiệu quả',
      text: 'Thành thạo trong việc đặt prompt, chọn lọc và kiểm chứng nội dung AI tạo ra.',
    },
    {
      title: 'Kỹ năng học thuật',
      text: 'Nâng cao khả năng tìm kiếm tài liệu, đánh giá nguồn tin và trình bày thông tin logic.',
    },
    {
      title: 'Thiết kế & trình bày',
      text: 'Biết cách xây dựng portfolio rõ ràng, trực quan và có tính hệ thống.',
    },
  ],
};

export const toolsets = {
  title: 'Công cụ sử dụng',
  items: [
    { title: 'Quản lý tài liệu', text: 'Google Drive, OneDrive' },
    { title: 'Nguồn học thuật', text: 'Google Scholar, ResearchGate' },
    { title: 'AI hỗ trợ', text: 'ChatGPT, Claude' },
    { title: 'Thiết kế nội dung', text: 'Figma, Adobe' },
    { title: 'Làm việc nhóm', text: 'Notion, Microsoft' },
  ],
};

export const projects = {
  title: 'Dự án',
  intro:
    'Dưới đây là tập hợp các sản phẩm và quá trình nghiên cứu trong suốt khóa học, thể hiện sự giao thoa giữa kỹ năng số và tư duy học thuật.',
  items: [
    {
      chapter: 1,
      title: 'Máy tính & Thiết bị ngoại vi',
      content: 'Nắm bắt nền tảng vận hành của không gian số.',
      process:
        'Báo cáo hệ thống hóa cấu trúc phần cứng và nguyên lý xử lý dữ liệu. Việc hiểu rõ nền tảng thiết bị giúp tối ưu hóa hiệu suất làm việc với các phần mềm xử lý văn bản.',
      pdf: bt1Pdf,
    },
    {
      chapter: 2,
      title: 'Khai thác dữ liệu và thông tin',
      content: 'Kỹ năng tra cứu, chọn lọc và thẩm định nguồn tài liệu trên Internet.',
      process:
        'Ứng dụng các bộ lọc tìm kiếm nâng cao để tra cứu án lệ và học thuyết pháp lý phức tạp. Rèn luyện thói quen tiếp cận dữ liệu gốc và đánh giá lập luận đa chiều.',
      pdf: bt2Pdf,
    },
    {
      chapter: 3,
      title: 'Tổng quan trí tuệ nhân tạo',
      content: 'Nắm bắt bản chất và xu hướng của làn sóng công nghệ AI.',
      process:
        'Thử nghiệm dùng AI tra cứu thông tin và phân tích các điểm mù logic. AI là cỗ máy tổng hợp dữ liệu xuất sắc, nhưng hoàn toàn vô năng nếu thiếu tư duy phản biện.',
      pdf: bt3Pdf,
    },
    {
      chapter: 4,
      title: 'Giao tiếp trong môi trường số',
      content: 'Xây dựng kỹ năng làm việc và cộng tác trên nền tảng trực tuyến.',
      process:
        'Tham gia phân chia tài liệu, phối hợp chỉnh sửa nội dung nhóm và duy trì trao đổi công việc trên nền tảng số.',
      pdf: bt4Pdf,
    },
    {
      chapter: 5,
      title: 'Sáng tạo nội dung số',
      content: 'Ứng dụng AI tạo sinh trong thiết kế và xây dựng nội dung học tập.',
      process:
        'Tự xây dựng ý tưởng và định hướng nội dung, sử dụng AI để hỗ trợ phản biện, minh họa và tối ưu cách trình bày.',
      pdf: bt5Pdf,
    },
    {
      chapter: 6,
      title: 'An toàn và Liêm chính học thuật',
      content: 'Nâng cao nhận thức về đạo đức số và trách nhiệm khi sử dụng AI.',
      process:
        'Chủ động trích dẫn nguồn minh bạch, kiểm tra lại dữ liệu từ AI và hạn chế chia sẻ thông tin cá nhân trên các nền tảng mở.',
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  summary:
    'Môn học Nhập môn Công nghệ số và Trí tuệ nhân tạo đã giúp em thay đổi cách nhìn về công nghệ: từ một công cụ hỗ trợ đơn thuần trở thành trợ lý học thuật giúp tối ưu tư duy, nghiên cứu và sáng tạo nội dung số.',
  skills: [
    'Tư duy số: Biết cách học tập, lưu trữ và xử lý thông tin khoa học hơn trên nền tảng số.',
    'Khai thác AI hiệu quả: Thành thạo hơn trong việc đặt prompt, chọn lọc và kiểm chứng nội dung AI tạo ra.',
    'Kỹ năng học thuật: Nâng cao khả năng tìm kiếm tài liệu, đánh giá nguồn tin và trình bày thông tin logic.',
    'Thiết kế & trình bày: Biết cách xây dựng portfolio rõ ràng, trực quan và có tính hệ thống.',
  ],
  insight:
    'AI không thay thế tư duy con người, mà giá trị thật sự nằm ở cách con người sử dụng và kiểm soát công nghệ. Từ việc dùng AI để làm nhanh, em học được cách dùng AI để làm tốt hơn.',
  challenge:
    'Làm quen với nhiều công cụ và nền tảng mới trong thời gian ngắn. Giữ được dấu ấn cá nhân và tư duy phản biện thay vì phụ thuộc hoàn toàn vào nội dung do AI tạo ra.',
  future: [
    'Tiếp tục hoàn thiện portfolio theo hướng chuyên nghiệp và hiện đại hơn.',
    'Ứng dụng AI và công nghệ số vào học tập, nghiên cứu và các hoạt động chuyên môn trong tương lai.',
    'Phát triển tư duy công nghệ đi cùng với trách nhiệm và liêm chính học thuật.',
  ],
};
