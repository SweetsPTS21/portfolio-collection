export const personalInfo = {
  name: 'Nguyễn Thị Như Quỳnh',
  studentId: '24063261',
  major: 'Luật kinh doanh',
  school: 'Đại học Luật - ĐHQGHN',
  subtitle: 'Hành trình rèn luyện kỹ năng số của một sinh viên Luật kinh doanh',
  tagline: 'Chào mừng mọi người bước vào không gian lưu trữ kỹ thuật số của em',
};

export const aboutCards = [
  {
    id: 'info',
    title: 'Thông tin cá nhân',
    icon: 'User',
    content: 'MSV: 24063261 | Ngành: Luật kinh doanh | Trường: Đại học Luật - ĐHQGHN',
  },
  {
    id: 'hobbies',
    title: 'Sở thích',
    icon: 'Heart',
    content:
      'Em có thói quen đọc truyện để rèn luyện tư duy logic, nghe nhạc để duy trì sự cân bằng và đặc biệt yêu thích việc học ngoại ngữ để mở rộng lăng kính văn hóa.',
  },
  {
    id: 'style',
    title: 'Phong cách',
    icon: 'Smile',
    content:
      'Tối giản và trang nhã. Em hướng tới sự gọn gàng, tinh tế trong cả lối sống lẫn phương pháp làm việc, luôn ưu tiên giải quyết đúng bản chất vấn đề thay vì để bản thân bị cuốn vào những tiểu tiết rườm rà.',
  },
  {
    id: 'goal',
    title: 'Mục tiêu học tập',
    icon: 'Target',
    content: [
      'Chuyên ngành Luật kinh doanh đòi hỏi sự mạch lạc, chuẩn xác và khả năng bao quát thông tin.',
      'Định hướng kết hợp nền tảng pháp lý vững chắc với năng lực ngoại ngữ để hướng tới môi trường tư vấn thương mại quốc tế.',
      'Làm chủ các kỹ năng số để tối ưu hóa quy trình quản lý hồ sơ, tinh giản các thao tác hành chính và nâng cao hiệu suất.',
    ],
  },
  {
    id: 'portfolio-goal',
    title: 'Mục tiêu Portfolio',
    icon: 'Award',
    content: [
      'Hệ thống hóa lại toàn bộ quá trình thực hành công nghệ số trong học tập.',
      'Minh chứng ứng dụng công cụ số vào nghiên cứu học thuật một cách khoa học và có tổ chức.',
      'Trình bày kết quả trực quan, đậm chất trang nhã và phản ánh đúng cá tính cá nhân.',
    ],
  },
  {
    id: 'principle',
    title: 'Nguyên tắc',
    icon: 'Shield',
    content: [
      'Luôn đặt tính chính xác và độc lập trong tư duy lên hàng đầu.',
      'Coi công nghệ và thuật toán thông minh là trợ lý đắc lực để hỗ trợ thu thập dữ liệu thô.',
      'Phân tích, thẩm định tính đúng đắn và kết luận cuối cùng dựa trên sự phê phán học thuật độc lập của bản thân.',
    ],
  },
];

export const tools = [
  { name: 'File Explorer & Google Drive', icon: 'HardDrive' },
  { name: 'Cơ sở dữ liệu học thuật & Thư viện số', icon: 'BookOpen' },
  { name: 'Mô hình ngôn ngữ lớn (LLM)', icon: 'Bot' },
  { name: 'Google Meet', icon: 'Video' },
  { name: 'Microsoft Word & Canva', icon: 'Pen' },
];

export const projects = [
  {
    id: 1,
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    icon: 'FolderOpen',
    objective: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.',
    summary:
      'Em áp dụng tư duy tối giản để quy hoạch lại toàn bộ không gian lưu trữ máy tính. Em khởi tạo thư mục gốc mang tên thật của mình, sau đó phân chia thành các thư mục con theo từng chuyên đề môn học và tài liệu học ngoại ngữ. Mọi thao tác đổi tên tệp, dùng phím tắt sao chép, di chuyển tài liệu được thực hiện tuần tự để bảo đảm tính hệ thống. Những dữ liệu nháp không còn giá trị được dọn dẹp vào thùng rác và xóa vĩnh viễn, trả lại giao diện làm việc vô cùng ngăn nắp.',
    pdf: '/bt1.pdf',
  },
  {
    id: 2,
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    icon: 'Search',
    objective: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    summary:
      'Em sử dụng các từ khóa chuyên ngành kết hợp bộ lọc nâng cao để bóc tách thông tin từ các tạp chí khoa học uy tín. Em đã tập hợp 10 nguồn tài liệu tham khảo chất lượng, trong đó có 5 bài báo khoa học chuẩn mực. Từng nguồn đều được kiểm chứng về tư cách tác giả, thời gian xuất bản và lập thành bảng đánh giá chi tiết theo chuẩn Harvard.',
    pdf: '/bt2.pdf',
  },
  {
    id: 3,
    title: 'Viết prompt hiệu quả cho các tác vụ học tập',
    icon: 'Brain',
    objective: 'Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
    summary:
      'Em đặt ra ba tác vụ cụ thể cho hệ thống: tóm tắt một điều ước thương mại, phân tích thuật ngữ luật kinh doanh và thiết lập bộ câu hỏi ôn tập. Thông qua ba phiên bản câu lệnh nâng cấp dần từ cơ bản đến cấu trúc nâng cao, em tiến hành phân tích và nhận diện rõ giới hạn logic của thuật toán. Em đưa ra các luận điểm phê phán học thuật độc lập, chỉ ra những điểm rập khuôn và thiếu chính xác của máy móc, khẳng định vai trò tối thượng của bộ óc người nghiên cứu.',
    pdf: '/bt3.pdf',
  },
  {
    id: 4,
    title: 'Giao tiếp và hợp tác trong môi trường số',
    icon: 'Video',
    objective: 'Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
    summary:
      'Nhóm 28 của tụi em đã thiết lập một cuộc họp trực tuyến trên nền tảng Google Meet để thảo luận bài tập chuyên môn. Trong bài tập nhóm này, em chịu trách nhiệm đảm nhận vai trò làm nội dung chính và viết kịch bản chi tiết cho dự án. Phiên họp kéo dài 30 phút diễn ra rất nghiêm túc và có sự đồng thuận ghi hình từ các thành viên. Sau khi cuộc họp kết thúc, biên bản họp được em tóm tắt lại một cách gọn gàng, chia sẻ đồng bộ tài liệu chung và đính kèm bảng tự đánh giá chéo khách quan.',
    pdf: '/bt4.pdf',
  },
  {
    id: 5,
    title: 'Sử dụng AI tạo sinh để sáng tạo nội dung',
    icon: 'Palette',
    objective: 'Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.',
    summary:
      'Em phụ trách thiết kế một Infographic với tiêu chí trình bày trang nhã và tinh gọn. Sự hỗ trợ từ 3 công cụ tự động giúp em phác thảo kịch bản và khung bố cục hình ảnh, nhưng em trực tiếp can thiệp để tinh chỉnh lại màu sắc, biên tập câu chữ sao cho sản phẩm mang đúng văn phong pháp lý và cá tính của mình. Đi kèm sản phẩm là một bài báo cáo phân tích nghiêm túc về ưu nhược điểm và ranh giới đạo đức khi ứng dụng công nghệ tạo sinh.',
    pdf: '/bt5.pdf',
  },
  {
    id: 6,
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    icon: 'Shield',
    objective: 'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.',
    summary:
      'Để bảo vệ tính liêm chính trong học đường, em đã nghiên cứu rất kỹ quy chế học vụ của nhà trường. Em hoàn thiện một bài luận cá nhân có sử dụng công cụ số hỗ trợ nhưng lưu vết minh bạch toàn bộ các câu lệnh đã nhập và cách thức biên tập lại dữ liệu đầu ra. Đồng thời, em tự thiết lập 7 quy tắc đạo đức cá nhân và thiết kế thành một đồ họa thông tin tối giản, khẳng định cam kết tuyệt đối nói không với đạo văn.',
    pdf: '/bt6.pdf',
  },
];

export const conclusion = {
  experience:
    'Quá trình tự tay xây dựng và quản lý không gian lưu trữ số giúp em loại bỏ sự e ngại ban đầu đối với các thao tác kỹ thuật phức tạp. Em nhận ra công nghệ nếu được sử dụng với một tư duy có tổ chức sẽ giúp đơn giản hóa khối lượng công việc, tạo ra một phong cách làm việc vô cùng chuyên nghiệp và thư thái.',
  baggage:
    'Điều lớn nhất em tích lũy được là thói quen luôn kiểm chứng chéo thông tin thay vì tin tưởng thụ động vào các kết quả tìm kiếm tự động. Kỹ năng thiết kế câu lệnh tối ưu, năng lực đàm phán hợp tác trực tuyến và thói quen làm việc minh bạch là những bài học thực chiến giá trị cho công việc của em sau này.',
  highlights: [
    'Thiết lập thành công hệ thống lưu trữ dữ liệu cá nhân đồng bộ và khoa học, giúp tối ưu hóa thời gian tra cứu các văn bản pháp luật kinh doanh.',
    'Hoàn thành xuất sắc nhiệm vụ làm nội dung và viết kịch bản cho nhóm 28, đóng góp nền tảng cốt lõi giúp sản phẩm chung của nhóm đạt chất lượng cao.',
    'Giữ vững lập trường học thuật khắt khe, kiên quyết phản biện lại các lỗi logic của máy móc để bảo vệ tính chính xác nguyên bản của bài làm.',
  ],
  challenges: [
    'Quy trình sàng lọc dữ liệu tốn nhiều thời gian do các công cụ tự động thỉnh thoảng cung cấp những quy định pháp luật cũ hoặc bị sai lệch bản chất, đòi hỏi phải đối chiếu lại bằng văn bản gốc.',
    'Việc tinh chỉnh cấu trúc ngôn ngữ câu lệnh sao cho hệ thống máy móc hiểu đúng thuật ngữ chuyên ngành luật kinh doanh mà không bị rập khuôn, khô cứng.',
    'Cân đối và phân bổ quỹ thời gian hợp lý giữa việc làm quen với các phần mềm công nghệ mới và việc bảo đảm chiều sâu nội dung học thuật cho từng bài tập.',
  ],
  future: [
    'Mang theo tư duy tối giản và hệ thống kỹ năng số làm hành trang vững chắc vào học tập các môn chuyên ngành sắp tới.',
    'Kết hợp tối ưu năng lực công nghệ với nền tảng ngoại ngữ để phát triển kỹ năng đàm phán thương mại, phân tích hợp đồng kinh tế quốc tế.',
    'Chủ động tối ưu hóa quy trình học tập để tiếp tục nuôi dưỡng niềm đam mê đọc truyện và nghe nhạc nhằm duy trì sự cân bằng cuộc sống.',
  ],
  thanks:
    'Em xin chân thành cảm ơn các thầy cô bộ môn đã tận tình hướng dẫn và đặt ra những tiêu chuẩn học thuật nghiêm ngặt, giúp em hoàn thiện phương pháp nghiên cứu. Cảm ơn các bạn thành viên nhóm 28 đã phối hợp rất ăn ý và trách nhiệm. Cảm ơn mọi người đã dành thời gian theo dõi Portfolio của Như Quỳnh.',
};
