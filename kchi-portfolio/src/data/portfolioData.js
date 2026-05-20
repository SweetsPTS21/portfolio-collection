const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'NGUYỄN KHÁNH CHI',
  major: 'Luật học',
  school: 'Đại học Luật - ĐHQGHN (VNU-UL)',
  quote:
    'Mộng mơ, Hiện đại và Tối giản. Chừa lại không gian cho những ý tưởng bay bổng và những khung hình điện ảnh.',
  intro:
    'Portfolio này ghi lại hành trình khám phá thế giới Công nghệ dưới góc nhìn của một sinh viên ngành Luật – một thước phim tối giản về kỹ năng số, tư duy phản biện và ứng dụng AI có trách nhiệm.',
  interests: ['Nhiếp ảnh', 'Điện ảnh', 'Thể thao'],
  style: ['Mộng mơ', 'Hiện đại', 'Tối giản'],
};

export const goals = [
  'Trở thành Luật sư Sở hữu trí tuệ chuyên sâu trong lĩnh vực nghệ thuật, điện ảnh và truyền thông.',
  'Làm chủ công nghệ, tổ chức dữ liệu khoa học và ứng dụng AI linh hoạt trong kỷ nguyên số.',
  'Chứng minh sinh viên Luật hoàn toàn có thể tư duy sắc bén, hiện đại nhưng vẫn giữ tâm hồn mộng mơ, nghệ thuật.',
];

export const tools = [
  'Google Drive',
  'OneDrive',
  'Gemini',
  'Notion',
  'CapCut',
  'Canva',
  'Google Scholar',
  'Microsoft Word',
];

export const strengths = [
  'Quy hoạch và tổ chức dữ liệu số bằng tư duy hệ thống trên nền tảng đám mây.',
  'Khai thác dữ liệu pháp lý chính xác bằng kỹ năng tìm kiếm nâng cao.',
  'Nhận diện bản chất AI và giới hạn của nó trong tư duy pháp luật.',
  'Thiết lập quy tắc đạo đức và liêm chính khi ứng dụng AI trong học thuật.',
];

export const projects = [
  {
    title: 'Chương 1: Tổ chức & Lưu trữ dữ liệu số',
    goal: 'Xây dựng không gian lưu trữ số trên nền tảng điện toán đám mây theo phong cách tối giản.',
    process:
      'Quy hoạch lại toàn bộ Google Drive/OneDrive bằng tư duy hệ thống. Tối giản không phải xóa hết, mà là sắp xếp mọi thứ về đúng vị trí.',
    pdf: assignmentFiles[0],
    pdfName: 'Bt1.pdf',
    icon: 'latte',
  },
  {
    title: 'Chương 2: Khai thác dữ liệu & Thông tin',
    goal: 'Ứng dụng kỹ năng tìm kiếm nâng cao để bóc tách thông tin pháp lý chính xác.',
    process:
      'Sử dụng các toán tử để tra cứu trực tiếp văn bản gốc từ cổng thông tin chính thống. Tìm đúng nguồn tài liệu chuẩn xác là nền tảng tối quan trọng của tư duy pháp lý.',
    pdf: assignmentFiles[1],
    pdfName: 'Bt2.pdf',
    icon: 'mocha',
  },
  {
    title: 'Chương 3: Tổng quan về Trí tuệ nhân tạo',
    goal: 'Nhận diện bản chất của AI và giới hạn của nó trong tư duy pháp luật.',
    process:
      'AI có thể xử lý hàng vạn bản án trong vài giây, nhưng không thể thấu cảm hoàn cảnh con người. Quyền đánh giá đạo đức và quyết định cuối cùng phải thuộc về các luật gia.',
    pdf: assignmentFiles[2],
    pdfName: 'Bt3.pdf',
    icon: 'matcha',
  },
  {
    title: 'Chương 4: Giao tiếp & Hợp tác môi trường số',
    goal: 'Tối ưu hóa làm việc nhóm trên không gian mạng, đề cao sự tôn trọng và hiệu quả.',
    process:
      'Phân công công việc minh bạch qua Notion. Giao tiếp bất đồng bộ được ưu tiên nhằm tôn trọng không gian cá nhân. Tiến độ cập nhật liên tục giúp phối hợp nhịp nhàng.',
    pdf: assignmentFiles[3],
    pdfName: 'Bt4.pdf',
    icon: 'cappuccino',
  },
  {
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Sản xuất video học thuật về Quyền sở hữu trí tuệ dưới góc nhìn điện ảnh tối giản.',
    process:
      'Sử dụng Gemini để tinh gọn kịch bản, dùng công cụ edit hiện đại lồng ghép hình ảnh và nhạc nền không bản quyền. AI giúp rút ngắn 50% thời gian lên ý tưởng.',
    pdf: assignmentFiles[4],
    pdfName: 'Bt5.pdf',
    icon: 'espresso',
  },
  {
    title: 'Chương 6: An toàn & Liêm chính học thuật',
    goal: 'Khẳng định sự độc lập tư duy và thiết lập quy tắc đạo đức khi ứng dụng AI.',
    process:
      'Mọi dữ liệu do AI cung cấp phải được kiểm chứng chéo; tuyệt đối không vay mượn lập luận; luôn tuân thủ chuẩn mực trích dẫn học thuật của Đại học Luật.',
    pdf: assignmentFiles[5],
    pdfName: 'Bt6.pdf',
    icon: 'macaron',
  },
];

export const conclusion = {
  summary:
    'Xây dựng Portfolio này giống như tự tay bấm máy, dựng phim và cho ra mắt một tác phẩm điện ảnh độc lập. Nó phản chiếu rõ nét con người mình: mộng mơ, yêu cái đẹp nhưng cũng rất hiện đại, dứt khoát và tôn trọng kỷ luật học thuật.',
  skills: ['Prompt Engineering', 'Data Literacy', 'Tư duy phản biện'],
  highlights: [
    'Dám đưa ra góc nhìn phản biện độc lập về AI, không đi theo lối mòn tung hô công nghệ.',
    'Học cách tư duy tối giản giữa thế giới số ồn ào để tập trung vào mục tiêu dài hạn.',
    'Trở thành người làm luật hiện đại, biết dùng công cụ số để phụng sự công lý.',
  ],
  challenges: [
    'Nguy cơ ảo giác AI và khối lượng thông tin khổng lồ dễ làm nhiễu loạn tư duy pháp lý.',
    'Giữ lại yếu tố cốt lõi và luôn kiểm chứng chéo dữ liệu AI bằng văn bản luật gốc.',
    'Cân bằng thẩm mỹ portfolio với chiều sâu học thuật.',
  ],
  direction: [
    'Trở thành Luật sư Sở hữu trí tuệ chuyên sâu trong nghệ thuật và truyền thông.',
    'Ứng dụng AI và khai thác dữ liệu để tự động hóa tra cứu pháp lý.',
    'Xây dựng phong cách làm việc minh bạch, chuẩn mực và nguyên bản.',
  ],
};
