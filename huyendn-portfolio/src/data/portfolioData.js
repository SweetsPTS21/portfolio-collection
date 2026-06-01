const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'Đoàn Ngọc Huyền',
  studentId: '24061186',
  major: 'Luật',
  school: 'Đại học Luật - ĐHQGHN',
  intro:
    'Xin chào, em là Đoàn Ngọc Huyền. Chào mừng mọi người đến với trang Portfolio cá nhân của em.',
  quote:
    'Thay vì một không gian học thuật khô cứng, em muốn biến nơi này thành một góc nhỏ sinh động, nơi tư duy logic của ngành Luật được kết hợp với sự sáng tạo và nhịp nhàng.',
  interests: [
    'Vẽ tranh để phát huy trí tưởng tượng',
    'Chơi đá cầu để rèn luyện sự nhanh nhẹn',
    'Gảy đàn Kalimba để tìm thấy sự tĩnh tại, mộc mạc',
  ],
  style: ['Sáng tạo', 'Năng động', 'Mộc mạc'],
  portfolioGoal:
    'Trang web này là nơi em lưu giữ lại toàn bộ quá trình thực hành kỹ năng số của mình.',
  principle:
    'Em luôn đề cao sự độc lập trong học thuật. Em sử dụng các công cụ tìm kiếm và trí tuệ nhân tạo để tiết kiệm thời gian lọc dữ liệu, nhưng tuyệt đối không ỷ lại.',
};

export const goals = [
  'Duy trì GPA ở mức trên 3.0.',
  'Hoàn thiện các chứng chỉ ngoại ngữ cần thiết để bảo đảm tiến độ ra trường đúng hạn.',
  'Tích cực tham gia các cuộc thi học thuật pháp lý trong trường.',
  'Thực hiện các đề tài nghiên cứu khoa học.',
  'Rèn luyện tư duy phản biện, tự tin đưa ra những lập luận sắc bén và độc lập.',
];

export const tools = [
  'Notion',
  'Microsoft OneDrive',
  'Thư viện Pháp luật',
  'LexisNexis',
  'HeinOnline',
  'Perplexity AI',
  'Claude',
  'Microsoft Teams',
  'Discord',
  'Figma',
  'Adobe Express',
];

export const strengths = [
  'Tổ chức công việc trên không gian mạng một cách khoa học, logic và kỷ luật.',
  'Linh hoạt, nhạy bén khi xử lý tình huống.',
  'Giữ tâm thế điềm tĩnh, đi từ những điều cơ bản và cốt lõi nhất.',
  'Kiên quyết không nhắm mắt nghe theo những kết quả tự động thiếu kiểm chứng.',
];

export const projects = [
  {
    title: 'Bài tập 1 - Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal:
      'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.',
    process:
      'Em phân loại dữ liệu trên máy tính giống như cách sắp xếp một hộp màu vẽ, mọi thứ phải đúng ngăn và đúng vị trí để khi cần là lấy được ngay.',
    pdf: assignmentFiles[0],
    pdfName: 'Bt1.pdf',
    sticker: 'sandcastle',
  },
  {
    title: 'Bài tập 2 - Chương 2: Khai thác dữ liệu và thông tin',
    goal:
      'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    process:
      'Em sử dụng các từ khóa chuyên sâu kết hợp bộ lọc nâng cao trên các cơ sở dữ liệu để bóc tách thông tin.',
    pdf: assignmentFiles[1],
    pdfName: 'Bt2.pdf',
    sticker: 'shell',
  },
  {
    title: 'Bài tập 2 - Chương 3: Tổng quan về trí tuệ nhân tạo',
    goal:
      'Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
    process:
      'Em đặt ra ba tác vụ cho hệ thống: tóm tắt văn bản luật, phân tích thuật ngữ và lập bộ đề ôn tập.',
    pdf: assignmentFiles[2],
    pdfName: 'Bt3.pdf',
    sticker: 'sun',
  },
  {
    title: 'Bài tập 3 - Chương 4: Giao tiếp và hợp tác trong môi trường số',
    goal:
      'Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
    process:
      'Nhóm 15 của tụi em đã thiết lập một cuộc họp trực tuyến trên Microsoft Teams để triển khai bài tập chung.',
    pdf: assignmentFiles[3],
    pdfName: 'Bt4.pdf',
    sticker: 'floatie',
  },
  {
    title: 'Bài tập 2 - Chương 5: Sáng tạo nội dung số',
    goal:
      'Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.',
    process:
      'Phát huy sở thích vẽ tranh, em đảm nhận phần thiết kế trực quan cho bài thuyết trình chuyên đề.',
    pdf: assignmentFiles[4],
    pdfName: 'Bt5.pdf',
    sticker: 'starfish',
  },
  {
    title: 'Bài tập 4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số',
    goal:
      'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.',
    process:
      'Em hoàn thiện một bài luận cá nhân có sử dụng công cụ số hỗ trợ nhưng lưu vết minh bạch toàn bộ các câu lệnh đã nhập.',
    pdf: assignmentFiles[5],
    pdfName: 'Bt6.pdf',
    sticker: 'bottle',
  },
];

export const conclusion = {
  summary:
    'Hoàn thành chuỗi bài tập thực hành của dự án Portfolio mang lại cho em một trải nghiệm học tập vô cùng thiết thực.',
  change:
    'Quá trình làm việc giúp em nhận ra công nghệ không hề triệt tiêu đi sự sáng tạo.',
  skills: [
    'Thói quen kiểm chứng thông tin',
    'Năng lực phản biện học thuật độc lập',
    'Kỹ năng thiết kế câu lệnh tìm kiếm',
    'Sự nhanh nhẹn trong làm việc nhóm trực tuyến',
    'Tư duy trình bày dữ liệu trực quan',
  ],
  highlights: [
    'Tự thiết lập được một hệ thống lưu trữ tài liệu môn học gọn gàng, khoa học.',
    'Đóng góp tích cực vào tiến độ chung của Nhóm 15.',
    'Giữ vững lập trường học thuật khắt khe, tự mình đưa ra đánh giá phân tích.',
  ],
  challenges: [
    'Quá trình sàng lọc dữ liệu thô khá vất vả do các công cụ tự động đôi khi cung cấp thông tin pháp lý chưa cập nhật.',
    'Ban đầu, em gặp chút rào cản trong việc tinh chỉnh câu lệnh để hệ thống nắm bắt đúng các thuật ngữ chuyên ngành luật một cách tự nhiên nhất.',
    'Phải cân đối quỹ thời gian hợp lý giữa việc học cách thao tác các phần mềm mới và việc bảo đảm chất lượng nội dung học thuật cho từng bài tập.',
  ],
  direction:
    'Em sẽ tiếp tục duy trì những thói quen làm việc số này để phục vụ cho các môn học chuyên ngành.',
  thanks:
    'Em xin gửi lời cảm ơn đến các thầy cô đã giảng dạy tận tình, giúp sinh viên làm chủ các kỹ năng số thiết thực. Cảm ơn mọi người vì đã dành thời gian theo dõi Portfolio của Ngọc Huyền.',
};
