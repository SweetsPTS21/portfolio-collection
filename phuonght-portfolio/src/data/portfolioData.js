const assignmentFiles = [
  new URL('../../docs/bt1.pdf', import.meta.url).href,
  new URL('../../docs/bt2.pdf', import.meta.url).href,
  new URL('../../docs/bt3.pdf', import.meta.url).href,
  new URL('../../docs/bt4.pdf', import.meta.url).href,
  new URL('../../docs/bt5.pdf', import.meta.url).href,
  new URL('../../docs/bt6.pdf', import.meta.url).href,
];

export const profile = {
  name: 'Hoàng Thu Phương',
  major: 'Luật chất lượng cao',
  school: 'Trường Đại học Luật - ĐHQGHN',
  studentId: '24062033',
  quote: 'Chào mừng các bạn đến với góc học tập kỹ thuật số của em. Em muốn không gian này giống như một thước phim, ghi lại quá trình em làm quen và ứng dụng công nghệ vào chuyên ngành Luật.',
  intro: 'Chương trình Luật chất lượng cao đòi hỏi nền tảng kiến thức vững chắc và tư duy phân tích chiều sâu. Định hướng của em là trở thành một người làm nghề luật điềm đạm, xử lý công việc bằng sự thấu hiểu và cẩn trọng. Em sử dụng công nghệ như một người trợ lý thầm lặng giúp dọn dẹp, sắp xếp khối lượng tài liệu khổng lồ. Nhờ đó, em có được sự tĩnh tại cần thiết để đào sâu vào các vấn đề pháp lý phức tạp.',
  hobbies: ['Nghe nhạc', 'Xem phim', 'Nấu ăn'],
  style: ['Nhẹ nhàng', 'Sâu lắng', 'Cẩn thận'],
  mindset: 'Em tìm thấy sự bình yên qua việc nghe nhạc, xem phim và đặc biệt thích nấu ăn để tự tay chăm sóc bản thân cũng như những người xung quanh. Em thích làm việc một cách từ tốn, cẩn thận, luôn lắng nghe và quan sát để hiểu thấu đáo bản chất của vấn đề thay vì vội vàng đánh giá bề ngoài.',
};

export const goals = [
  'Trang web này là nơi em lưu giữ lại những bài tập thực hành kỹ năng số.',
  'Nó minh chứng cho việc một người có phong cách nhẹ nhàng, nội tâm vẫn có thể làm việc cực kỳ kỷ luật, logic và khai thác hiệu quả sức mạnh của công nghệ vào môi trường học thuật.',
];

export const principles = [
  'Đề cao sự độc lập trong học thuật.',
  'Sử dụng các công cụ tìm kiếm để tiết kiệm thời gian, nhưng việc tổng hợp, đánh giá và đưa ra kết luận cuối cùng bắt buộc phải qua lăng kính phân tích cá nhân.',
  'Kiên quyết không phụ thuộc hay sao chép thụ động các kết quả do thuật toán tạo ra.',
];

export const tools = [
  { name: 'File Explorer', category: 'Lưu trữ' },
  { name: 'Google Drive', category: 'Lưu trữ' },
  { name: 'Thư viện số & CSDL', category: 'Tra cứu' },
  { name: 'Gemini', category: 'Trợ lý AI' },
  { name: 'Claude', category: 'Trợ lý AI' },
  { name: 'Zalo', category: 'Giao tiếp' },
  { name: 'Discord', category: 'Giao tiếp' },
  { name: 'Google Meet', category: 'Giao tiếp' },
  { name: 'Canva', category: 'Thiết kế' },
  { name: 'Adobe', category: 'Thiết kế' },
];

export const projects = [
  {
    title: 'Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.',
    process: 'Em sắp xếp dữ liệu trên máy tính giống như cách mình chuẩn bị nguyên liệu trước khi nấu ăn, mọi thứ phải thật ngăn nắp và đúng vị trí. Em tạo thư mục gốc mang tên mình, sau đó phân chia thành các thư mục con theo từng môn học chuyên ngành. Các thao tác đổi tên tệp, sao chép và di chuyển được thực hiện đồng bộ. Những dữ liệu nháp được dọn sạch vào thùng rác. Nhờ vậy, không gian làm việc luôn gọn gàng, giúp em dễ dàng tìm lại tài liệu khi cần.',
    pdf: assignmentFiles[0],
    pdfName: 'bt1.pdf',
    icon: 'FolderOpen',
    colorClass: 'mint',
  },
  {
    title: 'Chương 2: Khai thác dữ liệu và thông tin',
    goal: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    process: 'Em sử dụng từ khóa chuyên môn kết hợp bộ lọc nâng cao để tìm kiếm tài liệu từ các tạp chí khoa học chuyên ngành. Em đã tập hợp 10 nguồn tài liệu tham khảo, trong đó có 5 bài báo khoa học chất lượng. Từng nguồn đều được kiểm chứng cẩn thận về uy tín tác giả và lập thành bảng đánh giá chi tiết.',
    pdf: assignmentFiles[1],
    pdfName: 'bt2.pdf',
    icon: 'Search',
    colorClass: 'blue',
  },
  {
    title: 'Chương 3: Tổng quan về trí tuệ nhân tạo',
    goal: 'Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
    process: 'Em đặt ra ba tác vụ cho hệ thống: tóm tắt văn bản luật, phân tích thuật ngữ và lập bộ đề ôn tập. Bằng cách nâng cấp dần câu lệnh từ cơ bản đến phức tạp, em tiến hành phân tích và nhận diện rõ giới hạn của thuật toán. Em tự đưa ra các luận điểm phê phán học thuật độc lập, chỉ ra những điểm rập khuôn và thiếu chính xác của máy móc để bảo vệ tính logic, chiều sâu của bài nghiên cứu.',
    pdf: assignmentFiles[2],
    pdfName: 'bt3.pdf',
    icon: 'Brain',
    colorClass: 'purple',
  },
  {
    title: 'Chương 4: Giao tiếp và hợp tác trong môi trường số',
    goal: 'Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
    process: 'Nhóm 29 của tụi em đã thiết lập một cuộc họp trực tuyến trên Google Meet. Trong dự án này, em đảm nhận ba vai trò: làm nội dung chính, làm thư ký hỗ trợ tiến độ cho mọi người và trực tiếp quay video. Tại buổi họp kéo dài 30 phút, em đã trình bày khung nội dung cốt lõi và ghi chép cẩn thận các ý kiến đóng góp. Mọi người làm việc trong không khí thấu hiểu và nhẹ nhàng. Biên bản họp được em hoàn thiện gọn gàng, chia sẻ đồng bộ cùng video ghi hình và bảng đánh giá tiến độ chung.',
    pdf: assignmentFiles[3],
    pdfName: 'bt4.pdf',
    icon: 'Video',
    colorClass: 'yellow',
  },
  {
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.',
    process: 'Em phụ trách thiết kế một Infographic mang phong cách sâu lắng, dễ chịu. Sự hỗ trợ từ các công cụ tự động giúp em phác thảo kịch bản, nhưng em trực tiếp can thiệp để tinh chỉnh lại màu sắc, biên tập câu chữ sao cho sản phẩm mang đúng văn phong pháp lý và sự tinh tế của mình. Đi kèm sản phẩm là một bài báo cáo phân tích nghiêm túc về ranh giới đạo đức khi ứng dụng công nghệ tạo sinh.',
    pdf: assignmentFiles[4],
    pdfName: 'bt5.pdf',
    icon: 'Palette',
    colorClass: 'coral',
  },
  {
    title: 'Chương 6: An toàn và liêm chính học thuật trong môi trường số',
    goal: 'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.',
    process: 'Trân trọng giá trị chất xám, em đã nghiên cứu rất kỹ quy chế học vụ của nhà trường. Em hoàn thiện một bài luận cá nhân có sử dụng công cụ số hỗ trợ nhưng lưu vết minh bạch toàn bộ các câu lệnh đã nhập. Đồng thời, em tự thiết lập 7 quy tắc đạo đức cá nhân và thiết kế thành một đồ họa thông tin mang tông màu nhẹ nhàng, khẳng định cam kết tuyệt đối nói không với đạo văn.',
    pdf: assignmentFiles[5],
    pdfName: 'bt6.pdf',
    icon: 'Shield',
    colorClass: 'pink',
  },
];

export const conclusion = {
  summary: 'Nhìn lại quá trình hoàn thiện chuỗi bài tập thực hành, em cảm thấy mình đã học hỏi thêm được rất nhiều kỹ năng hữu ích để chuẩn bị cho chặng đường dài phía trước. Ban đầu em khá bỡ ngỡ với các công cụ kỹ thuật mới, nhưng khi đã làm quen, em thấy chúng giúp công việc trở nên rất trôi chảy. Khả năng sắp xếp và quy hoạch dữ liệu số giúp em giảm bớt áp lực ghi nhớ, từ đó giữ được tinh thần thoải mái, nhẹ nhàng khi đối mặt với lượng kiến thức khổng lồ của ngành Luật.',
  skills: ['Kiểm chứng thông tin số', 'Làm việc nhóm trực tuyến', 'Thư ký hành chính nhóm', 'Quay & dựng video cơ bản'],
  highlights: [
    'Hoàn thành tốt vai trò làm nội dung, thư ký và quay video cho nhóm 29, giúp kết nối mọi người và tạo ra một sản phẩm nhóm chỉn chu.',
    'Tự thiết lập được một hệ thống lưu trữ tài liệu môn học thật sự gọn gàng, khoa học, giúp tiết kiệm đáng kể thời gian tìm kiếm.',
    'Giữ vững lập trường và tư duy phản biện độc lập, đưa ra được các đánh giá cá nhân sắc bén thay vì phụ thuộc hoàn toàn vào công cụ tự động.',
  ],
  challenges: [
    'Quá trình sàng lọc dữ liệu thô khá mất thời gian do các công cụ đôi khi cung cấp thông tin pháp lý chưa chính xác, đòi hỏi em phải đối chiếu liên tục với văn bản gốc.',
    'Khó khăn trong việc tinh chỉnh câu lệnh để hệ thống nắm bắt đúng các thuật ngữ chuyên ngành luật chất lượng cao.',
    'Phải cân đối quỹ thời gian hợp lý giữa việc làm quen với các phần mềm mới và việc bảo đảm chất lượng nội dung công việc của nhóm.',
  ],
  direction: [
    'Tiếp tục ứng dụng những kỹ năng quản lý dữ liệu này vào các môn học chuyên ngành tiếp theo.',
    'Tối ưu hóa việc học qua công nghệ, nhường không gian cho sự tĩnh tâm để nghiên cứu sâu hơn về pháp luật.',
    'Duy trì sự cân bằng cuộc sống bằng những sở thích như nấu ăn, xem phim và nghe nhạc.',
  ],
  acknowledgements: 'Em xin gửi lời cảm ơn đến các thầy cô đã hướng dẫn tận tình, giúp sinh viên làm chủ các kỹ năng số cần thiết. Cảm ơn các bạn trong nhóm 29 đã phối hợp ăn ý, thông cảm và cùng nhau hoàn thành tốt công việc chung. Cảm ơn người đọc vì đã dành thời gian theo dõi Portfolio của em.',
};
