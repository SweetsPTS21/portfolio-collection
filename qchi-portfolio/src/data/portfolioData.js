const assignmentFiles = [
  new URL('../../docs/bt1.pdf', import.meta.url).href,
  new URL('../../docs/bt2.pdf', import.meta.url).href,
  new URL('../../docs/bt3.pdf', import.meta.url).href,
  new URL('../../docs/bt4.pdf', import.meta.url).href,
  new URL('../../docs/bt5.pdf', import.meta.url).href,
  new URL('../../docs/bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'Vũ Thị Quỳnh Chi',
  major: 'Luật Kinh Doanh',
  school: 'Đại học Quốc gia Hà Nội',
  quote:
    'Xin chào, mình là Vũ Thị Quỳnh Chi! Chào mừng bạn đến với trạm phát sóng năng lượng của mình.',
  intro:
    'Hành trình số hóa của mình là nơi tư duy pháp lý sắc bén kết hợp cùng tốc độ của công nghệ hiện đại. Mình đam mê chơi thể thao, nghe nhạc và xem phim; những hoạt động này giúp mình duy trì nguồn năng lượng tích cực, rèn luyện sự bền bỉ và mở rộng góc nhìn đa chiều về cuộc sống.',
  interests: ['Chơi thể thao', 'Nghe nhạc', 'Xem phim'],
  style: ['Năng động', 'Tự tin', 'Bứt phá khỏi vùng an toàn'],
};

export const goals = [
  'Trở thành một chuyên gia pháp lý doanh nghiệp nhạy bén và bản lĩnh.',
  'Làm chủ công nghệ để tối ưu hóa quy trình xử lý khối lượng lớn hồ sơ pháp lý.',
  'Xây dựng portfolio như minh chứng cho khả năng thích ứng nhanh trên môi trường số của một sinh viên Luật Kinh Doanh.',
];

export const tools = [
  'Quản lý tệp tin',
  'Kho lưu trữ tài liệu học thuật',
  'Cơ sở dữ liệu thư viện',
  'Nền tảng học thuật quốc tế',
  'Công cụ AI tạo sinh',
  'Công cụ thiết kế hình ảnh',
  'Họp trực tuyến',
  'Trích dẫn Harvard',
];

export const strengths = [
  'Tổ chức, sắp xếp và lưu trữ dữ liệu pháp lý theo hệ thống rõ ràng.',
  'Tìm kiếm độc lập và đánh giá độ tin cậy của nguồn học liệu pháp lý chuyên sâu.',
  'Viết câu lệnh truy vấn để điều hướng mô hình ngôn ngữ lớn theo mục tiêu học thuật.',
  'Lên ý tưởng, viết, chỉnh sửa nội dung và phối hợp với các thành viên khác thực hiện nhiệm vụ được giao.',
  'Giữ tinh thần năng động và tự tin khi ứng dụng công nghệ vào học tập pháp lý.',
];

export const projects = [
  {
    title: 'Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Rèn luyện thao tác quản lý tệp tin linh hoạt, xây dựng không gian lưu trữ tài liệu học thuật tốc độ cao và khoa học.',
    process:
      'Mình thực hiện các lệnh tạo, đổi tên, sao chép và di chuyển tài liệu một cách dứt khoát. Hệ thống thư mục được phân tầng rành mạch giúp truy xuất hàng loạt văn bản quy phạm pháp luật chỉ trong tích tắc.',
    pdf: assignmentFiles[0],
    pdfName: 'bt1.pdf',
    icon: 'latte',
  },
  {
    title: 'Chương 2: Khai thác dữ liệu và thông tin',
    goal: 'Phát triển kỹ năng tìm kiếm độc lập và đánh giá độ tin cậy của các nguồn học liệu pháp lý chuyên sâu.',
    process:
      'Mình chủ động khai thác các cơ sở dữ liệu thư viện và nền tảng học thuật quốc tế. Hơn 10 tài liệu nghiên cứu được thẩm định dựa trên uy tín tác giả, tính cập nhật của ngành Luật Kinh Doanh, rồi tổng hợp và trích dẫn theo định dạng Harvard.',
    pdf: assignmentFiles[1],
    pdfName: 'bt2.pdf',
    icon: 'mocha',
  },
  {
    title: 'Chương 3: Tổng quan về trí tuệ nhân tạo',
    goal: 'Nâng cao kỹ năng viết câu lệnh truy vấn để làm chủ và điều hướng các mô hình ngôn ngữ lớn theo ý muốn.',
    process:
      'Mình thử nghiệm nhiều câu lệnh từ cơ bản đến nâng cao, so sánh kết quả khi yêu cầu AI tóm tắt tài liệu hoặc giải thích khái niệm pháp lý phức tạp. Từ đó, mình rút ra nguyên tắc giao tiếp sắc bén để biến công nghệ thành trợ lý học thuật đắc lực.',
    pdf: assignmentFiles[2],
    pdfName: 'bt3.pdf',
    icon: 'matcha',
  },
  {
    title: 'Chương 4: Giao tiếp và hợp tác trong môi trường số',
    goal: 'Lên ý tưởng, viết, chỉnh sửa nội dung và phối hợp với các thành viên khác thực hiện nhiệm vụ được giao.',
    process:
      'Với thế mạnh về nội dung, mình đảm nhận việc lên ý tưởng, biên soạn và chỉnh sửa tài liệu cho buổi họp trực tuyến; đồng thời phối hợp cùng các thành viên để hoàn thiện nhiệm vụ được giao một cách hiệu quả',
    pdf: assignmentFiles[3],
    pdfName: 'bt4.pdf',
    icon: 'cappuccino',
  },
  {
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Tích hợp đa dạng các công cụ tạo sinh để thiết kế một sản phẩm truyền thông học thuật mang đậm dấu ấn cá nhân.',
    process:
      'Mình kết hợp nền tảng tạo văn bản và công cụ thiết kế hình ảnh để xây dựng bài thuyết trình sinh động. Thuật toán hỗ trợ phác thảo khung sườn nhanh, còn cá tính năng động của mình thổi sức sống vào từng hình ảnh minh họa và câu chữ.',
    pdf: assignmentFiles[4],
    pdfName: 'bt5.pdf',
    icon: 'espresso',
  },
  {
    title: 'Chương 6: An toàn và liêm chính học thuật trong môi trường số',
    goal: 'Xác lập ranh giới đạo đức nghiêm ngặt và xây dựng bộ nguyên tắc hành xử trách nhiệm trên không gian mạng.',
    process:
      'Mình thiết kế một bản đồ họa thông tin ghi rõ các nguyên tắc cá nhân: nói không với gian lận, minh bạch trong mọi trích dẫn và bảo vệ tư duy độc lập trước sự cám dỗ của việc sao chép tự động.',
    pdf: assignmentFiles[5],
    pdfName: 'bt6.pdf',
    icon: 'macaron',
  },
];

export const conclusion = {
  summary:
    'Quá trình xây dựng portfolio giống như một trận đấu thể thao kịch tính, đòi hỏi sự tập trung và sức bền liên tục. Từ một sinh viên Luật quen với văn bản, mình đã mạnh dạn bứt phá để tự thiết kế, quản trị và hoàn thiện một không gian số mang đậm thương hiệu cá nhân.',
  skills: [
    'Khai thác dữ liệu chính xác',
    'Điều hành làm việc nhóm trực tuyến',
    'Kiểm chứng chéo độc lập',
    'Ứng dụng AI có trách nhiệm',
  ],
  highlights: [
    'Giữ trọn vẹn sự năng động và tự tin của bản thân xuyên suốt các dự án học thuật.',
    'Biến công cụ số thành đòn bẩy học tập thay vì bị lệ thuộc vào công nghệ.',
    'Hiểu rõ hơn bản chất hoạt động của thuật toán để luôn giữ thế chủ động khi sử dụng AI.',
  ],
  challenges: [
    'Khối lượng thông tin khổng lồ và đôi khi sai lệch do các hệ thống tự động tạo ra.',
    'Vượt qua rào cản bằng sự quyết đoán và nguyên tắc kiểm chứng chéo độc lập với mọi nguồn tài liệu.',
    'Cân bằng giữa năng lượng cá nhân, tính trực quan của portfolio và chiều sâu học thuật ngành Luật Kinh Doanh.',
  ],
  direction: [
    'Tối ưu hóa trải nghiệm người dùng để làm nổi bật những giá trị cốt lõi nhất.',
    'Chú trọng rút ra bài học kinh nghiệm và tư duy chiến lược sau mỗi dự án.',
    'Mở rộng ứng dụng AI và công nghệ số vào nghiên cứu, xử lý hồ sơ và giải quyết các vấn đề chuyên môn trong tương lai.',
  ],
};
