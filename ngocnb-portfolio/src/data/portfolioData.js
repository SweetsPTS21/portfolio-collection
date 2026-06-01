const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'Nguyễn Bích Ngọc',
  studentId: '24063211',
  major: 'Luật Kinh doanh',
  school: 'Đại học Luật - ĐHQGHN',
  intro: [
    'Xin chào. Em là Nguyễn Bích Ngọc. Chào mừng mọi người đến với không gian lưu trữ kỹ thuật số của em.',
    'Nơi đây được thiết kế như một góc làm việc mang tông màu nâu - cafe điềm đạm, nơi sự chuyên nghiệp, trưởng thành của Luật Kinh doanh hòa quyện cùng tư duy tối giản nhưng vẫn đậm chất riêng.'
  ],
  interests: ['Nghe nhạc', 'Xem phim', 'Đọc truyện'],
  style: ['Tối giản', 'Chuyên nghiệp', 'Trưởng thành'],
  colorPref: 'Tông nâu - cafe mang lại cảm giác vững chãi, ấm áp và tập trung',
};

export const goals = [
  'Định hướng trở thành một chuyên gia pháp lý thực thụ, có năng lực quản trị rủi ro thương mại một cách độc lập và chuyên nghiệp.',
  'Ứng dụng công nghệ số như một công cụ bắt buộc để tự động hóa quy trình quản lý hồ sơ, tối ưu hóa thời gian và nâng cao hiệu suất làm việc nhóm.',
  'Hệ thống hóa toàn bộ dự án thực hành kỹ năng số, thể hiện năng lực lãnh đạo, khả năng tổ chức công việc bài bản và tư duy thẩm mỹ cá nhân.',
];

export const principles = {
  core: 'Tư duy phản biện độc lập và học thuật khắt khe.',
  details: [
    'Em sử dụng công nghệ như một trợ lý tìm kiếm dữ liệu, nhưng tuyệt đối không có thái độ xuôi chiều hay dễ dàng đồng ý với các kết quả do công cụ tự động xuất ra.',
    'Mọi lập luận, đánh giá đều phải là ý kiến riêng của bản thân, được thẩm định chéo kỹ lưỡng để bảo đảm tính chính xác.'
  ],
};

export const tools = [
  'Google Drive',
  'File Explorer',
  'CSDL Thư viện Quốc gia',
  'Các mô hình ngôn ngữ lớn (trợ lý ý tưởng)',
  'Google Meet',
  'Trello',
  'Canva (palette màu nâu cafe)',
  'CapCut',
  'Microsoft Word',
];

export const projects = [
  {
    chapter: 'Chương 1',
    title: 'Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.',
    process: [
      'Mang phong cách tối giản vào không gian số, em quy hoạch lại toàn bộ ổ đĩa máy tính.',
      'Thư mục gốc được định danh rõ ràng bằng mã sinh viên và tên thật, sau đó phân nhánh thành các tệp bài học chuyên ngành.',
      'Các thao tác đổi tên, dùng phím tắt sao chép, cắt dán được thực hiện chuẩn xác. Những dữ liệu rác được dọn dẹp triệt để.',
      'Kết quả là một không gian lưu trữ mạch lạc, chuyên nghiệp, hỗ trợ truy xuất tài liệu ngay lập tức khi cần thiết.'
    ],
    pdf: assignmentFiles[0],
    pdfName: 'Bt1.pdf',
    icon: 'coffee',
  },
  {
    chapter: 'Chương 2',
    title: 'Khai thác dữ liệu và thông tin',
    goal: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    process: [
      'Em thiết lập các bộ lọc nâng cao để bóc tách thông tin từ các tạp chí khoa học chuyên ngành.',
      'Em tập hợp đủ 10 nguồn tài liệu, bảo đảm 5 bài báo khoa học chất lượng.',
      'Từng nguồn đều được kiểm chứng chéo và đánh giá khách quan để bảo đảm tính chuẩn xác và trung thực học thuật.'
    ],
    pdf: assignmentFiles[1],
    pdfName: 'Bt2.pdf',
    icon: 'cup',
  },
  {
    chapter: 'Chương 3',
    title: 'Tổng quan về trí tuệ nhân tạo',
    goal: 'Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
    process: [
      'Em đưa ra ba tác vụ cho hệ thống: tóm tắt hợp đồng thương mại, phân tích thuật ngữ và lập bộ đề ôn tập.',
      'Thông qua việc nâng cấp câu lệnh, em nhận diện rõ những lỗ hổng logic của thuật toán.',
      'Thay vì phụ thuộc, em đưa ra những lời phê phán học thuật độc lập, phản biện trực diện lại các lập luận sai lệch của máy móc, qua đó bảo vệ sự sắc bén và nguyên bản trong tư duy pháp lý của mình.'
    ],
    pdf: assignmentFiles[2],
    pdfName: 'Bt3.pdf',
    icon: 'beans',
  },
  {
    chapter: 'Chương 4',
    title: 'Giao tiếp và hợp tác trong môi trường số',
    goal: 'Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
    process: [
      'Trong bài tập này, em đảm nhận vai trò Nhóm trưởng của Nhóm 25.',
      'Em trực tiếp lên kế hoạch, điều phối tiến độ công việc và tổ chức phiên họp trực tuyến trên Google Meet.',
      'Suốt 30 phút thảo luận, em duy trì không khí làm việc chuyên nghiệp, trưởng thành, bảo đảm mọi thành viên đều đóng góp ý kiến.',
      'Biên bản cuộc họp được hoàn thiện súc tích, đi kèm bảng phân công nhiệm vụ và đánh giá chéo hiệu quả làm việc của từng thành viên trong nhóm.'
    ],
    pdf: assignmentFiles[3],
    pdfName: 'Bt4.pdf',
    icon: 'saucer',
  },
  {
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số',
    goal: 'Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.',
    process: [
      'Là người chịu trách nhiệm chính về mặt hình ảnh cho nhóm, em đảm nhận toàn bộ khâu thiết kế slide, xây dựng nội dung và edit video.',
      'Sự hỗ trợ từ công cụ số giúp em lên khung kịch bản nhanh chóng.',
      'Sau đó, em tự tay chỉnh sửa từng frame hình, áp dụng tông màu nâu - cafe chủ đạo để slide thuyết trình toát lên vẻ trang nhã, tối giản nhưng vô cùng chuyên nghiệp.',
      'Quá trình edit video được thực hiện tỉ mỉ để âm thanh và hình ảnh khớp nối hoàn hảo.'
    ],
    pdf: assignmentFiles[4],
    pdfName: 'Bt5.pdf',
    icon: 'spill',
  },
  {
    chapter: 'Chương 6',
    title: 'An toàn và liêm chính học thuật trong môi trường số',
    goal: 'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.',
    process: [
      'Nắm vững quy chế đào tạo, em thực hiện một bài luận với sự minh bạch tuyệt đối trong việc trích dẫn và sử dụng công cụ hỗ trợ.',
      'Em tự thiết lập 7 quy tắc đạo đức học thuật cá nhân và thiết kế thành một đồ họa thông tin tối giản.',
      'Bộ quy tắc là lời cam kết mạnh mẽ về việc bảo vệ chất xám, kiên quyết từ chối đạo văn và luôn chịu trách nhiệm với sản phẩm của mình.'
    ],
    pdf: assignmentFiles[5],
    pdfName: 'Bt6.pdf',
    icon: 'bag',
  },
];

export const conclusion = {
  experience: [
    'Nhìn lại toàn bộ quá trình hoàn thiện các dự án thực hành, em cảm thấy đây là một bước đệm cực kỳ vững chắc để định hình phong cách làm việc của bản thân trong tương lai.',
    'Quá trình tự tay thiết lập quy trình làm việc số và lãnh đạo nhóm giúp em trưởng thành hơn rất nhiều.',
    'Công nghệ dưới góc nhìn của em không phải là sự phức tạp, mà là chìa khóa để đạt được sự tối giản. Nó giúp em giải quyết công việc nhanh gọn, rành mạch và có thêm thời gian để đầu tư cho chiều sâu nội dung.'
  ],
  assets: {
    title: 'Những hành trang quý giá nhất',
    items: [
      'Khả năng lãnh đạo, điều phối đội nhóm và kỹ năng tư duy phản biện độc lập là những tài sản lớn nhất.',
      'Kỹ năng thiết kế slide chuyên nghiệp và edit video chắc chắn sẽ là những công cụ đắc lực hỗ trợ em trong việc thuyết trình các dự án sau này.',
    ],
  },
  highlights: [
    'Đảm nhiệm xuất sắc vai trò Nhóm trưởng Nhóm 25, từ việc lên ý tưởng nội dung, điều phối thành viên đến việc tự tay edit video và thiết kế slide mang đậm bản sắc cá nhân.',
    'Đưa được phong cách tối giản, trưởng thành với tông màu nâu - cafe vào các sản phẩm học thuật, biến những bài tập khô khan trở nên thẩm mỹ và chuyên nghiệp.',
    'Giữ vững nguyên tắc phê phán học thuật độc lập, đưa ra các nhận định sắc bén thay vì thỏa hiệp với các kết quả tự động của công cụ trí tuệ nhân tạo.',
  ],
  challenges: [
    'Việc bao quát và điều phối công việc của toàn bộ Nhóm 25 đòi hỏi sự kiên nhẫn, khả năng sắp xếp thời gian nghiêm ngặt để bảo đảm tiến độ chung.',
    'Quá trình dựng và edit video tốn khá nhiều công sức để bảo đảm sự liền mạch về mặt nội dung cũng như sự chỉn chu về mặt hình ảnh.',
    'Sàng lọc dữ liệu từ các mô hình AI thường xuất hiện những phân tích pháp lý sai lệch, buộc em phải liên tục kiểm chứng bằng văn bản quy phạm pháp luật gốc.',
  ],
  nextSteps: 'Em sẽ mang theo sự chuyên nghiệp, tối giản này vào quá trình nghiên cứu chuyên sâu. Năng lực làm chủ công nghệ sẽ là đòn bẩy để em quản trị hồ sơ hiệu quả, đồng thời giữ được nhịp điệu cân bằng trong cuộc sống qua những sở thích như nghe nhạc, xem phim và đọc truyện.',
  thanks: 'Em xin chân thành cảm ơn các thầy cô đã mang đến một môn học vô cùng thực tiễn. Cảm ơn các bạn thành viên Nhóm 25 đã tin tưởng, đồng hành cùng em hoàn thành xuất sắc dự án chung. Cảm ơn mọi người đã dành thời gian theo dõi Portfolio của Bích Ngọc.',
};
