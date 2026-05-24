const pdfUrl = (fileName) =>
  new URL(`../../docs/${fileName}`, import.meta.url).href;

export const profile = {
  name: 'Nguyễn Tống Sỹ Phương',
  displayName: 'Nguyễn Tống Sỹ Phương',
  major: 'Luật',
  university: 'Trường Đại học Luật - ĐHQGHN',
  themeTag: 'Law x Technology',
  intro:
    'Nơi lưu trữ những bước tiến đầu tiên trong hành trình giao thoa giữa tư duy pháp lý và kỹ năng số.',
  interests: 'Bơi lội, thiết bị công nghệ',
  personality: 'Ít nói, tích cực và tận tâm',
  goal: 'Định hướng trở thành một luật sư nhạy bén với công nghệ, bền bỉ, kỷ luật và tối ưu hóa quy trình xử lý hồ sơ pháp lý bằng tư duy hệ thống.',
  portfolioGoal:
    'Hệ thống hóa các kỹ năng thực hành số, biến kiến thức lý thuyết thành công cụ thực chiến hỗ trợ chuyên ngành Luật.',
};

export const navItems = [
  { label: 'Giới thiệu', path: '/about' },
  { label: 'Dự án', path: '/projects' },
  { label: 'Tổng kết', path: '/conclutions' },
];

export const skills = [
  {
    title: 'Tư duy pháp lý',
    detail:
      'Đánh giá thông tin, đối chiếu nguồn và giữ lập trường độc lập khi ứng dụng công nghệ.',
  },
  {
    title: 'Quản trị dữ liệu',
    detail:
      'Sắp xếp, lưu trữ và truy xuất tệp học tập theo hệ thống rõ ràng, chính xác.',
  },
  {
    title: 'Nghiên cứu nguồn tin',
    detail:
      'Lọc nguồn học thuật theo tác giả, cơ quan xuất bản, tính cập nhật và độ tin cậy.',
  },
  {
    title: 'Prompting AI',
    detail:
      'Viết câu lệnh có mục tiêu rõ, kiểm chứng đầu ra và biến AI thành công cụ hỗ trợ.',
  },
  {
    title: 'Làm việc nhóm',
    detail:
      'Chuẩn bị lịch họp, phân công vai trò, ghi biên bản và giữ tính kỷ luật trong hợp tác.',
  },
  {
    title: 'Đạo đức số',
    detail:
      'Minh bạch khi dùng công cụ số và không để công nghệ thay thế năng lực phân tích cá nhân.',
  },
];

export const projects = [
  {
    id: '01',
    chapter: 'Chương 1',
    title: 'Tổ chức, sắp xếp và lưu trữ dữ liệu',
    short: 'Sắp xếp, lưu trữ và truy xuất tệp tin khoa học, chính xác.',
    goal: 'Thiết lập hệ thống lưu trữ tệp tin trên hệ điều hành chuẩn xác, khoa học và đạt tốc độ truy xuất cao.',
    process:
      'Áp dụng tư duy hệ thống để phân rã và cấu trúc lại ổ đĩa máy tính. Các thao tác tạo thư mục, đổi tên, sao chép và di chuyển tệp tin được thực hiện dứt khoát bằng phím tắt.',
    evidencePath: '/docs/bt1.pdf',
    evidenceHref: pdfUrl('bt1.pdf'),
  },
  {
    id: '02',
    chapter: 'Chương 2',
    title: 'Khai thác dữ liệu và thông tin',
    short:
      'Thu thập nguồn học thuật, đánh giá độ tin cậy và trích dẫn chuẩn xác.',
    goal: 'Thu thập tài liệu học thuật và đánh giá khắt khe độ tin cậy của các nguồn thông tin chuyên ngành.',
    process:
      'Chủ động truy cập các cơ sở dữ liệu học thuật uy tín, sàng lọc theo tác giả, cơ quan xuất bản và tính cập nhật trước khi tổng hợp thành bảng đánh giá.',
    evidencePath: '/docs/bt2.pdf',
    evidenceHref: pdfUrl('bt2.pdf'),
  },
  {
    id: '03',
    chapter: 'Chương 3',
    title: 'Trí tuệ nhân tạo',
    short:
      'Rèn luyện kỹ năng viết câu lệnh, biến AI thành công cụ hỗ trợ pháp lý hiệu quả.',
    goal: 'Tối ưu hóa kỹ năng thiết lập câu lệnh để khai thác năng lực xử lý của các mô hình ngôn ngữ lớn.',
    process:
      'Thử nghiệm cấu trúc lệnh từ cơ bản đến chuyên sâu, phân tích hiệu suất phản hồi trong tác vụ tóm tắt tài liệu và giải thích khái niệm pháp lý.',
    evidencePath: '/docs/bt3.pdf',
    evidenceHref: pdfUrl('bt3.pdf'),
  },
  {
    id: '04',
    chapter: 'Chương 4',
    title: 'Giao tiếp và hợp tác trong môi trường số',
    short:
      'Lên kế hoạch họp trực tuyến, phối hợp nhóm và ghi chép biên bản chuyên nghiệp.',
    goal: 'Tổ chức và điều hành cuộc họp trực tuyến chuyên nghiệp, bảo đảm tính kỷ luật và hiệu suất làm việc nhóm.',
    process:
      'Chuẩn bị nền tảng, chương trình nghị sự và phân công vai trò rõ ràng. Biên bản cuộc họp ghi chép đầy đủ các quyết định quan trọng.',
    evidencePath: '/docs/bt4.pdf',
    evidenceHref: pdfUrl('bt4.pdf'),
  },
  {
    id: '05',
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số',
    short:
      'Kết hợp công cụ tạo sinh và tư duy pháp lý để tạo sản phẩm trực quan.',
    goal: 'Phối hợp đồng bộ các công cụ công nghệ tạo sinh để hoàn thiện một dự án truyền thông pháp lý trực quan.',
    process:
      'Kết hợp nền tảng xử lý ngôn ngữ và công cụ thiết kế đồ họa, chủ động chỉnh sửa đầu ra bằng tư duy pháp lý logic để bảo đảm tính chính xác.',
    evidencePath: '/docs/bt5.pdf',
    evidenceHref: pdfUrl('bt5.pdf'),
  },
  {
    id: '06',
    chapter: 'Chương 6',
    title: 'An toàn và liêm chính học thuật',
    short: 'Đề cao minh bạch, đạo đức số và kiểm chứng thông tin nghiêm ngặt.',
    goal: 'Nghiên cứu chính sách học thuật và thiết lập bộ nguyên tắc đạo đức cá nhân khi ứng dụng công nghệ.',
    process:
      'Mọi sự hỗ trợ từ công cụ số đều phải được khai báo minh bạch. Lập trường là duy trì tư duy độc lập và không để công nghệ làm mờ năng lực phân tích cá nhân.',
    evidencePath: '/docs/bt6.pdf',
    evidenceHref: pdfUrl('bt6.pdf'),
  },
];

export const conclusion = {
  summary:
    'Quá trình xây dựng portfolio đòi hỏi sự bền bỉ tương tự như duy trì sức lực trên đường bơi dài. Việc tự thiết lập không gian lưu trữ và trình bày chuyên nghiệp giúp mình củng cố tư duy hệ thống và rèn luyện tính kỷ luật.',
  highlights: [
    {
      title: 'Kiến thức nổi bật',
      text: 'Quản trị dữ liệu, phương pháp viết câu lệnh tối ưu và cách phối hợp các nền tảng công nghệ số.',
    },
    {
      title: 'Điều tâm đắc',
      text: 'Ứng dụng niềm đam mê máy tính vào việc tối ưu hóa quá trình xử lý để tạo ra giá trị thực tiễn.',
    },
    {
      title: 'Thách thức',
      text: 'Bảo đảm độ chính xác của dữ liệu tự động sinh ra bằng cách kiểm chứng chéo với văn bản pháp luật gốc.',
    },
  ],
  solution:
    'Giải pháp: luôn đối chiếu với hệ thống văn bản pháp luật gốc và giữ tư duy phân tích độc lập.',
};
