const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'Trần Thị Thùy Chi',
  major: 'Luật chung',
  school: 'Trường Đại học Luật – ĐHQGHN',
  quote:
    'Sự mềm mỏng, thanh lịch hoàn toàn có thể song hành cùng một tư duy pháp lý sắc bén.',
  intro:
    'Xin chào, mình là Trần Thị Thùy Chi! Portfolio này giống như một thế giới đại dương kỹ thuật số trong trẻo, nơi mình cất giữ những mảnh ghép tri thức đầu tiên về Công nghệ và Pháp luật.',
  interests: ['Nghe lofi', 'Dạo phố mua sắm', 'Du lịch'],
  style: ['Soft girl', 'Nhẹ nhàng', 'Nữ tính'],
};

export const goals = [
  'Trở thành nữ luật gia linh hoạt, kết hợp sự mềm mỏng với sức mạnh công cụ số.',
  'Chứng minh sinh viên Luật có thể tư duy sắc bén, hiện đại mà vẫn giữ tâm hồn mộng mơ.',
  'Biến công nghệ thành người bạn đồng hành đắc lực cho hành trình pháp lý.',
];

export const tools = [
  'Google Drive',
  'Google Scholar',
  'ChatGPT',
  'Notion',
  'Canva',
  'CapCut',
  'Microsoft Office',
  'Figma',
];

export const strengths = [
  'Tinh thần học hỏi và khả năng thích nghi nhanh với công nghệ mới.',
  'Tư duy làm việc logic, khoa học, hướng đến sự tối giản nhưng hiệu quả.',
  'Tổ chức công việc gọn gàng, phân loại tài liệu khoa học.',
  'Kết hợp sự mềm mỏng, thấu cảm với tư duy pháp lý sắc bén.',
];

export const projects = [
  {
    title: 'Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Quy hoạch lại không gian lưu trữ đám mây thành một chiếc tủ gọn gàng.',
    process:
      'Dùng icon phân loại thư mục (📚 Học tập, ✈️ Cá nhân), đồng bộ tên file. Việc tìm kiếm tài liệu luật chỉ mất vài giây, nhẹ nhàng và thư thái.',
    pdf: assignmentFiles[0],
    pdfName: 'bt1.pdf',
  },
  {
    title: 'Chương 2: Khai thác dữ liệu và thông tin',
    goal: 'Trở thành người tìm kiếm thông tin thông thái.',
    process:
      'Nhờ các toán tử tìm kiếm nâng cao, đi thẳng tới nguồn gốc, tra cứu và cập nhật nhanh chóng thông tin chính gốc mà không bị nhiễu bởi bài viết rác.',
    pdf: assignmentFiles[1],
    pdfName: 'bt2.pdf',
  },
  {
    title: 'Chương 3: Tổng quan về trí tuệ nhân tạo',
    goal: 'Hiểu rõ vai trò hỗ trợ của AI và giới hạn của nó trong lĩnh vực pháp lý.',
    process:
      'AI có thể soạn hợp đồng trong nháy mắt, nhưng vĩnh viễn không thấu hiểu được tình người. AI là công cụ hỗ trợ, còn quyền quyết định và sự thấu cảm thuộc về con người.',
    pdf: assignmentFiles[2],
    pdfName: 'bt3.pdf',
  },
  {
    title: 'Chương 4: Giao tiếp và hợp tác trong môi trường số',
    goal: 'Biến làm việc nhóm thành những buổi tụ tập online hiệu quả.',
    process:
      'Phân công nhiệm vụ rõ ràng trên Notion, duy trì năng lượng tích cực và luôn tôn trọng thời gian nghỉ ngơi, riêng tư của mỗi thành viên.',
    pdf: assignmentFiles[3],
    pdfName: 'bt4.pdf',
  },
  {
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Sản xuất video ngắn mang âm hưởng vlog chữa lành về kiến thức Luật.',
    process:
      'Dùng AI hỗ trợ kịch bản, nhạc nền lofi êm ái và thiết kế tone màu pastel để kiến thức Luật học trở nên gần gũi và dễ chịu.',
    pdf: assignmentFiles[4],
    pdfName: 'bt5.pdf',
  },
  {
    title: 'Chương 6: An toàn và liêm chính học thuật',
    goal: 'Sự thanh lịch thực sự luôn đến từ sự trung thực.',
    process:
      'Cam kết không dùng AI viết hộ tiểu luận, luôn kiểm chứng chéo sự thật pháp lý, và tôn trọng trí tuệ người khác qua trích dẫn chuẩn mực.',
    pdf: assignmentFiles[5],
    pdfName: 'bt6.pdf',
  },
];

export const conclusion = {
  summary:
    'Quá trình tự tay thiết kế trang web giúp mình từ một cô gái khá ngại máy móc trở nên tự tin hơn, biết cách biến các công cụ số thành người bạn đồng hành đắc lực.',
  skills: ['Digital Literacy', 'Tư duy phản biện', 'Thiết kế nội dung'],
  highlights: [
    'Mang trọn vẹn vibe nhẹ nhàng, nữ tính vào không gian học thuật vốn khô khan.',
    'Mạnh dạn đưa ra góc nhìn phản biện độc lập về AI trong pháp lý.',
    'Khẳng định sự mềm mỏng có thể song hành cùng tư duy pháp lý sắc bén.',
  ],
  challenges: [
    'Nguy cơ AI cung cấp thông tin luật sai lệch (ảo giác AI).',
    'Tiếp cận công nghệ từ tốn: chậm rãi lọc đi tạp âm, kiểm chứng chéo mọi dữ liệu.',
    'Cải thiện kỹ năng quản lý thời gian và ứng dụng công nghệ chuyên sâu hơn.',
  ],
  direction: [
    'Trở thành nữ luật gia linh hoạt, dùng sự thấu cảm kết hợp công cụ số.',
    'Bảo vệ công lý một cách nhân văn nhất nhờ công nghệ.',
    'Tiếp tục biến công nghệ thành người bạn đồng hành trong hành trình pháp lý.',
  ],
};
