const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'HÀ THỊ YẾN VI',
  major: 'Luật học',
  school: 'Trường Đại học Luật - ĐHQGHN',
  quote:
    'Kỷ luật tạo nên nền tảng. Hiện đại mở ra tầm nhìn. Thanh lịch định hình phong thái.',
  intro:
    'Portfolio này ghi lại quá trình tiếp cận công nghệ một cách có chọn lọc: biết hiểu, biết kiểm chứng và biết ứng dụng AI có trách nhiệm trong học thuật pháp lý.',
  interests: ['Nghe nhạc', 'Du lịch', 'Nghiên cứu'],
  style: ['Thanh lịch', 'Hiện đại', 'Kỷ luật'],
};

export const goals = [
  'Xây dựng nền tảng kiến thức pháp luật chuyên sâu kết hợp với kỹ năng số nhạy bén.',
  'Ứng dụng công nghệ thông tin và AI để tối ưu quy trình nghiên cứu, tra cứu án lệ.',
  'Hướng tới hình mẫu chuyên gia pháp lý hiện đại: sắc sảo trong tư duy, chuyên nghiệp trong phương pháp.',
];

export const tools = [
  'Google Scholar',
  'Gemini Advanced',
  'Microsoft Word',
  'Zotero',
  'Notion',
  'Canva',
  'CapCut',
  'Synthesia',
];

export const strengths = [
  'Quản lý và tổ chức dữ liệu số bằng hệ thống lưu trữ khoa học.',
  'Khai thác tài liệu học thuật từ nguồn uy tín, có tính cập nhật cao.',
  'Tương tác với AI bằng yêu cầu có bối cảnh, đầu ra và tiêu chí đánh giá rõ ràng.',
  'Tái cấu trúc thông tin thành nội dung logic, phù hợp để công bố trên nền tảng số.',
];

export const projects = [
  {
    title: 'Chương 1: Máy tính & Thiết bị ngoại vi',
    goal: 'Nắm vững nền tảng vận hành của không gian số.',
    process:
      'Hệ thống hóa kiến thức phần cứng để tối ưu hiệu suất sử dụng phần mềm xử lý văn bản nặng và quản trị dữ liệu nghiên cứu.',
    pdf: assignmentFiles[0],
    pdfName: 'Bt1.pdf',
    icon: 'moon',
  },
  {
    title: 'Chương 2: Khai thác dữ liệu & Thông tin',
    goal: 'Tra cứu, chọn lọc và thẩm định nguồn tài liệu số.',
    process:
      'Ứng dụng bộ lọc tìm kiếm nâng cao để truy xuất án lệ, điều luật và bài nghiên cứu gốc, đồng thời loại bỏ tin rác.',
    pdf: assignmentFiles[1],
    pdfName: 'Bt2.pdf',
    icon: 'gem',
  },
  {
    title: 'Chương 3: Tổng quan AI',
    goal: 'Nắm bắt xu hướng Trí tuệ nhân tạo trong nghiên cứu và học thuật.',
    process:
      'Phân tích tác động của AI trong tra cứu thông tin, nhận diện vai trò trợ lý phản biện và giới hạn sử dụng AI.',
    pdf: assignmentFiles[2],
    pdfName: 'Bt3.pdf',
    icon: 'star',
  },
  {
    title: 'Chương 4: Giao tiếp môi trường số',
    goal: 'Ứng xử mạng chuyên nghiệp và cộng tác an toàn.',
    process:
      'Thiết lập nguyên tắc làm việc nhóm, bảo mật dữ liệu và giao tiếp có trách nhiệm trên nền tảng đám mây.',
    pdf: assignmentFiles[3],
    pdfName: 'Bt4.pdf',
    icon: 'planet',
  },
  {
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Dùng AI làm trợ lý đồng sáng tạo, kiểm soát bằng tư duy độc lập.',
    process:
      'Tự xây dựng thông điệp, dùng AI để phản biện logic và trực tiếp tinh chỉnh câu chữ, khung hình cuối cùng.',
    pdf: assignmentFiles[4],
    pdfName: 'Bt5.pdf',
    icon: 'wand',
  },
  {
    title: 'Chương 6: An toàn & Liêm chính học thuật',
    goal: 'Thiết lập hàng rào đạo đức số và trách nhiệm sử dụng công nghệ.',
    process:
      'Giữ tư duy độc lập, trích dẫn minh bạch, bảo mật dữ liệu và kiểm chứng kết quả AI với văn bản pháp luật.',
    pdf: assignmentFiles[5],
    pdfName: 'Bt6.pdf',
    icon: 'shield',
  },
];

export const conclusion = {
  summary:
    'Môn học giúp em chuyển từ việc xem Internet như công cụ giải trí sang một hệ sinh thái hỗ trợ học thuật có hệ thống, chủ động và có trách nhiệm.',
  skills: ['Prompt Engineering', 'Data Literacy', 'Chuẩn hóa trình bày'],
  highlights: [
    'Tối ưu quy trình nghiên cứu bằng bộ lọc tìm kiếm nâng cao.',
    'Biến AI thành đối tác phản biện thay vì công cụ viết hộ.',
    'Làm chủ công cụ soạn thảo và quy tắc trích dẫn.',
  ],
  challenges: [
    'Vượt qua cám dỗ văn mẫu.',
    'Duy trì áp lực kiểm chứng dữ liệu AI.',
    'Cân bằng thẩm mỹ portfolio với chiều sâu học thuật.',
  ],
  direction: [
    'Đào sâu nghiên cứu dựa trên phản biện đa chiều.',
    'Ứng dụng AI và khai thác dữ liệu để tự động hóa tra cứu pháp lý.',
    'Xây dựng phong cách làm việc minh bạch, chuẩn mực và nguyên bản.',
  ],
};
