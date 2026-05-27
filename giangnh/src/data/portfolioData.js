const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'NGUYỄN HƯƠNG GIANG',
  major: 'Luật kinh doanh',
  school: 'Trường Đại học Luật - Đại học Quốc gia Hà Nội',
  quote:
    'Sâu lắng trong tư duy, sôi nổi trong hành động, tối giản trong cách trình bày và mang một chút âm hưởng cổ điển, hoài niệm.',
  intro:
    'Chào mừng bạn đến với góc nhìn số của Nguyễn Hương Giang, nơi sự giao thoa giữa nét cổ điển tĩnh lặng và nhịp điệu sôi nổi của hiện đại được thể hiện qua lăng kính tối giản nhất.',
  interests: ['Khám phá ngôn ngữ', 'Thưởng thức âm nhạc', 'Trải nghiệm món ăn', 'Giấc ngủ ngon'],
  style: ['Sâu lắng', 'Sôi nổi', 'Tối giản', 'Cổ điển hoài niệm'],
};

export const goals = [
  'Trở thành một nhà nghiên cứu ngôn ngữ pháp lý và cố vấn đàm phán thương mại quốc tế sắc sảo.',
  'Ứng dụng công nghệ và trí tuệ nhân tạo để tối giản hóa khối lượng tra cứu thông tin khổng lồ.',
  'Duy trì tư duy độc lập phản biện khắt khe, không bao giờ thỏa hiệp hay nghe theo kết quả của máy học thụ động.',
];

export const tools = [
  'Microsoft OneDrive',
  'Notion',
  'Google Scholar',
  'Thư viện Quốc gia',
  'Perplexity AI',
  'Microsoft Copilot',
  'Microsoft Teams',
  'Adobe Express',
  'Figma',
];

export const strengths = [
  'Duy trì tư duy phản biện độc lập và hoài nghi học thuật sắc sảo.',
  'Khai thác dữ liệu pháp luật gốc từ LexisNexis, HeinOnline, Thư viện quốc gia.',
  'Điều phối sôi nổi, quản lý làm việc nhóm và bảo mật dữ liệu số.',
  'Kết hợp sáng tạo AI và tinh chỉnh bố cục thẩm mỹ cổ điển.',
];

export const projects = [
  {
    title: 'Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên OneDrive.',
    process:
      'Lập các tệp văn bản mới, đổi tên theo cấu trúc thống nhất và phân bổ vào các thư mục con tương ứng. Thao tác phím tắt mượt mà, dọn dẹp không gian để bảo đảm một môi trường số luôn tĩnh lặng và gọn gàng.',
    pdf: assignmentFiles[0],
    pdfName: 'Bt1.pdf',
    icon: 'jelly',
    color: '#FFA3DF', // Pink
  },
  {
    title: 'Chương 2: Khai thác dữ liệu và thông tin',
    goal: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    process:
      'Đào sâu vào các nền tảng LexisNexis và thư viện điện tử. Áp dụng lệnh tìm kiếm nâng cao để trích xuất án lệ và nghiên cứu luật sửa đổi năm 2025. Thu thập và thẩm định nghiêm ngặt 10 nguồn tài liệu chuẩn Harvard.',
    pdf: assignmentFiles[1],
    pdfName: 'Bt2.pdf',
    icon: 'cherry',
    color: '#8EECD4', // Mint
  },
  {
    title: 'Chương 3: Tổng quan về trí tuệ nhân tạo',
    goal: 'Phát triển kỹ năng viết câu lệnh hiệu quả áp dụng tư duy chuỗi và kiểm chứng thuật toán.',
    process:
      'Xây dựng ba phiên bản câu lệnh đi từ cơ bản đến phức tạp trên Perplexity AI và Copilot. Giữ vững lập trường học thuật độc lập: dùng máy học để thu thập dữ liệu thô nhưng tự mình đưa ra các đánh giá phản biện đa chiều.',
    pdf: assignmentFiles[2],
    pdfName: 'Bt3.pdf',
    icon: 'wand',
    color: '#FFE893', // Yellow
  },
  {
    title: 'Chương 4: Giao tiếp và hợp tác trong môi trường số',
    goal: 'Rèn luyện kỹ năng tổ chức và điều phối cuộc họp trực tuyến chuyên nghiệp trên Teams.',
    process:
      'Đóng vai trò điều phối viên sôi nổi trên Microsoft Teams, thống nhất chương trình nghị sự từ sớm, ghi hình cuộc họp, và biên tập biên bản cuộc họp tối giản kèm đánh giá cá nhân sắc sảo.',
    pdf: assignmentFiles[3],
    pdfName: 'Bt4.pdf',
    icon: 'bubble',
    color: '#A3D8FF', // Blue
  },
  {
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Thành thạo việc kết hợp các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung mang phong cách cổ điển.',
    process:
      'Sáng tạo bài thuyết trình ngôn ngữ hợp đồng mang đậm thẩm mỹ vintage. Kết hợp Adobe Express cùng AI tạo văn bản và hình nền. Tự tay biên tập lại từng câu chữ để ngôn từ mang độ sâu lắng đúng với cá tính cá nhân.',
    pdf: assignmentFiles[4],
    pdfName: 'Bt5.pdf',
    icon: 'star',
    color: '#D5B3FF', // Purple
  },
  {
    title: 'Chương 6: An toàn và liêm chính học thuật',
    goal: 'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm, đạo đức và liêm chính.',
    process:
      'Nghiên cứu quy chế học vụ, minh bạch hóa mọi quá trình hỏi đáp AI trong bài tiểu luận. Tự đúc kết 7 nguyên tắc đạo đức học thuật cá nhân và thể hiện sinh động qua bản đồ họa Figma tự thiết kế.',
    pdf: assignmentFiles[5],
    pdfName: 'Bt6.pdf',
    icon: 'heart',
    color: '#FFA3DF', // Pink
  },
];

export const conclusion = {
  summary:
    'Hoàn thiện không gian số này mang lại cho mình một cảm giác viên mãn như vừa thưởng thức trọn vẹn một bữa ăn ngon và chuẩn bị bước vào một giấc ngủ thật êm đềm.',
  skills: ['Tư duy phản biện độc lập', 'Hoài nghi học thuật', 'Cố vấn đàm phán quốc tế', 'Tối giản hóa thông tin số'],
  highlights: [
    'Tạo ra một không gian số không hề bị công nghiệp hóa, mà vẫn giữ được cái hồn cổ điển, mộc mạc và tĩnh lặng.',
    'Rèn luyện thái độ hoài nghi học thuật: đặt câu hỏi, truy vấn ngược và tự mình đưa ra kết luận độc lập.',
    'Làm chủ công nghệ và khai thác dữ liệu từ các nền tảng khó nhằn như LexisNexis hay HeinOnline.',
  ],
  challenges: [
    'Kiểm soát dòng chảy thông tin quá nhanh của các công cụ mới.',
    'Luôn phải dừng lại một nhịp, đối chiếu cẩn thận từng thuật ngữ pháp lý với văn bản gốc trước khi phán quyết.',
    'Tránh sự thỏa hiệp hay nghe theo kết quả máy học một cách thụ động.',
  ],
  direction: [
    'Ứng dụng công nghệ để tinh gọn công việc học thuật, tối ưu hóa thời gian đọc sách hay nghe nhạc.',
    'Tiếp tục tích lũy tri thức pháp luật so sánh phục vụ con đường trở thành cố vấn đàm phán quốc tế nhạy bén.',
    'Giữ cho tâm hồn luôn được làm đầy một cách bình dị, kết hợp nét đẹp cổ điển mộc mạc với công nghệ hiện đại.',
  ],
};
