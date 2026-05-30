// ============================================================
// OCEAN WAVE DIARY — Portfolio Content Data
// Source: docs/portfolio.md — nội dung trung thành 100%
// ============================================================

export const portfolioContent = {
  // ── TRANG 1: GIỚI THIỆU ──────────────────────────────────
  intro: {
    hero: {
      title: 'Hành Trình Chuyển Đổi Số Của Một Cá Nhân',
      subtitle: 'Chào mừng đến với không gian lưu trữ tư duy và kỹ năng số của tôi.',
    },
    about: {
      greeting:
        'Chào mừng đã đến với không gian kỹ thuật số của mình. Góc nhỏ này được xây dựng với tinh thần thoải mái, không áp lực, nơi những kiến thức pháp lý được tiếp cận bằng một thái độ cởi mở và tối giản nhất.',
      info: [
        { label: 'Họ và tên', value: 'Nguyễn Thị Thu' },
        { label: 'Mã sinh viên', value: '24061410' },
        { label: 'Ngành học', value: 'Luật chung' },
        { label: 'Trường', value: 'Đại học Luật, ĐHQGHN' },
      ],
      hobbies:
        'Mình có đam mê với ẩm thực qua việc nấu ăn, rèn luyện phản xạ bằng bộ môn cầu lông, giải trí qua các tựa game, và tìm kiếm sự bình yên qua việc xem phim, đọc sách.',
      style:
        'Nhẹ nhàng và dễ tính. Mình luôn ưu tiên sự hài hòa, giải quyết vấn đề bằng thái độ điềm tĩnh, linh hoạt và không thích sự gò bó, căng thẳng.',
    },
    learningGoal: {
      title: 'Mục tiêu học tập và định hướng phát triển',
      content:
        'Việc học Luật không nhất thiết lúc nào cũng phải khô khan hay cứng nhắc. Mình mong muốn trở thành một người làm nghề luật mang phong thái gần gũi, biết lắng nghe và dễ dàng tháo gỡ các nút thắt pháp lý cho mọi người một cách nhẹ nhàng nhất. Việc ứng dụng công nghệ giúp mình tự động hóa những công việc lặp đi lặp lại, hệt như việc chuẩn bị sẵn nguyên liệu gọn gàng trước khi nấu một món ăn, từ đó có thêm thời gian để đọc, tư duy và tận hưởng cuộc sống.',
    },
    portfolioGoal: {
      title: 'Mục tiêu của Portfolio',
      content:
        'Dự án này là minh chứng cho việc một người có phong cách dễ tính, nhẹ nhàng vẫn có thể làm việc cực kỳ khoa học và kỷ luật trên môi trường số. Không gian này lưu lại toàn bộ hành trình rèn luyện kỹ năng công nghệ, phục vụ trực tiếp cho việc nghiên cứu pháp luật.',
    },
    principles: {
      title: 'Nguyên tắc thực hiện bài tập',
      content:
        'Sự dễ tính trong giao tiếp của mình không đồng nghĩa với việc dễ dãi trong học thuật. Nguyên tắc tối thượng của mình là duy trì tư duy phản biện độc lập. Mình tuyệt đối không có thói quen nghe theo máy móc một cách thụ động hay để thuật toán lấn át quan điểm cá nhân. Mọi đánh giá đưa ra đều là ý kiến phản biện riêng, sắc bén và độc lập của chính bản thân mình.',
    },
    tools: {
      title: 'Các công cụ đã sử dụng',
      intro:
        'Hệ thống làm việc của mình được tinh giản với các nền tảng thân thiện, dễ sử dụng:',
      list: [
        { category: 'Quản lý tệp tin', tools: 'File Explorer và Google Drive' },
        {
          category: 'Tra cứu chuyên sâu',
          tools: 'Thư viện điện tử Đại học Quốc gia và cơ sở dữ liệu pháp luật',
        },
        { category: 'Hỗ trợ phân tích', tools: 'Các mô hình ngôn ngữ lớn để khai phá dữ liệu thô' },
        { category: 'Kết nối làm việc', tools: 'Nền tảng Google Meet phục vụ thảo luận nhóm' },
        {
          category: 'Sáng tạo trực quan',
          tools: 'Nền tảng Canva và phần mềm xử lý văn bản Microsoft Word',
        },
      ],
    },
  },

  // ── TRANG 2: DỰ ÁN ──────────────────────────────────────
  projects: {
    intro:
      'Toàn bộ các bài thực hành dưới đây được ghi chép rành mạch, đi thẳng vào trọng tâm yêu cầu môn học và phản ánh rõ nét tư duy làm việc độc lập.',
    chapters: [
      {
        id: 1,
        title: 'Tổ chức, sắp xếp và lưu trữ dữ liệu',
        goal: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.',
        process:
          'Mình sắp xếp không gian máy tính tuần tự như cách phân loại nguyên liệu nấu ăn hay sắp xếp một giá sách. Mình tạo thư mục gốc, phân nhánh thành các tệp bài học và tài liệu tham khảo. Việc đổi tên, sử dụng phím tắt để cắt dán, di chuyển tài liệu được thực hiện nhịp nhàng. Những dữ liệu nháp được dọn sạch vào thùng rác và xóa vĩnh viễn. Không gian lưu trữ nhờ thế trở nên cực kỳ thoáng đãng, giúp việc tra cứu diễn ra nhanh gọn.',
        color: '#A7E4FF',
        accent: '#7CCDF2',
        pdfFile: '/Bài tập 1.1.pdf',
      },
      {
        id: 2,
        title: 'Khai thác dữ liệu và thông tin',
        goal: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
        process:
          'Mình thiết lập bộ lọc tìm kiếm nâng cao để bóc tách thông tin từ các tạp chí khoa học chuyên ngành. Mình tập hợp 10 tài liệu tham khảo, bảo đảm tỷ lệ 5 bài báo khoa học chất lượng. Từng nguồn tin đều được soi chiếu khắt khe về uy tín tác giả và tính thời sự, sau đó lập bảng đánh giá chi tiết.',
        color: '#7DDEC3',
        accent: '#7CCDF2',
        pdfFile: '/Bài tập 2.2.pdf',
      },
      {
        id: 3,
        title: 'Tổng quan về trí tuệ nhân tạo',
        goal: 'Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
        process:
          'Mình đưa ra ba tác vụ cho hệ thống: tóm tắt văn bản luật, phân tích thuật ngữ và lập bộ đề ôn tập. Thông qua ba phiên bản câu lệnh nâng cấp dần, mình nhận thấy rõ giới hạn logic của thuật toán. Thay vì dễ dàng chấp nhận thông tin, mình đưa ra các luận điểm phê phán học thuật độc lập, chỉ ra những điểm sai lệch của máy móc. Công nghệ chỉ đóng vai trò cung cấp dữ liệu thô, còn ý kiến đánh giá cuối cùng hoàn toàn là lập trường riêng của người nghiên cứu.',
        color: '#FFD978',
        accent: '#FFB7C8',
        pdfFile: '/bài tập 3.2.pdf',
      },
      {
        id: 4,
        title: 'Giao tiếp và hợp tác trong môi trường số',
        goal: 'Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
        process:
          'Nhóm mình tổ chức một phiên thảo luận chuyên môn trực tuyến. Việc thực hiện công việc và giao tiếp bằng các công cụ trực tuyến đôi khi cũng có những điểm mạnh và điểm yếu như sự thiếu đồng bộ về thông tin, không rõ trách nhiệm, tổ chức quá nhiều cuộc họp mà không hiệu quả hay việc xung đột khi chỉnh sửa tài liệu chung. Nhưng nhóm mình cũng đã cùng ngồi lại bàn bạc và quyết định dựa trên sự tôn trọng lẫn nhau và thành phẩm là một buổi thuyết trình và làm việc đầy hiệu quả.',
        color: '#FFB7C8',
        accent: '#FFD7E2',
        pdfFile: '/Bài tập 4.3.pdf',
      },
      {
        id: 5,
        title: 'Sáng tạo nội dung số',
        goal: 'Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.',
        process:
          'Mình thiết kế một bài thuyết trình chủ đề quyền riêng tư cá nhân trong môi trường số. Sự hỗ trợ từ các công cụ tự động giúp gợi ý ý tưởng và khung nội dung. Tuy nhiên, mình trực tiếp can thiệp để tinh chỉnh từng câu chữ sao cho thông điệp truyền tải giữ được sự chuyên nghiệp nhưng vẫn nhẹ nhàng, dễ tiếp nhận. Đi kèm là một bài báo cáo phân tích khách quan về ranh giới giữa việc ứng dụng công cụ và sự sao chép thụ động.',
        color: '#BFEAF8',
        accent: '#7CCDF2',
        pdfFile: '/Bài tập 5.2.pdf',
      },
      {
        id: 6,
        title: 'An toàn và liêm chính học thuật trong môi trường số',
        goal: 'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.',
        process:
          'Dựa trên quy tắc ứng xử học thuật của nhà trường, mình thực hiện một bài luận có dùng công cụ hỗ trợ, lưu vết hoàn toàn minh bạch các câu lệnh đã nhập. Mình tự thiết lập 7 quy tắc đạo đức cá nhân, thiết kế thành một đồ họa thông tin trực quan. Bộ quy tắc khẳng định cam kết bảo vệ tính nguyên bản của chất xám, kiên quyết từ chối mọi hình thức đạo văn và duy trì tinh thần kiểm chứng độc lập.',
        color: '#A7E4FF',
        accent: '#2F8FC8',
        pdfFile: '/Bài tập 6.4.pdf',
      },
    ],
  },

  // ── TRANG 3: TỔNG KẾT ───────────────────────────────────
  reflection: {
    intro:
      'Quá trình hoàn thiện chuỗi dự án này giúp mình hệ thống hóa lại phương pháp nghiên cứu trên không gian số một cách khoa học và kỷ luật.',
    experience: {
      title: 'Trải nghiệm và sự thay đổi của bản thân',
      content:
        'Việc tự tay thiết lập không gian lưu trữ và làm chủ các công cụ hiện đại giúp tiến độ học tập trở nên trơn tru hơn. Mình nhận ra công nghệ là một công cụ hỗ trợ xuất sắc, giúp giảm bớt căng thẳng trong việc xử lý khối lượng tài liệu lớn, tạo điều kiện để duy trì sự thư thái khi làm việc.',
    },
    takeaways: {
      title: 'Những hành trang quý giá nhất',
      content:
        'Giá trị cốt lõi thu nhận được là phương pháp duy trì lập trường học thuật độc lập và kỹ năng truy vấn thông tin chuyên sâu. Khả năng làm việc nhóm trực tuyến một cách hòa nhã nhưng kỷ luật, cùng việc phản biện sắc bén lại các luồng thông tin tự động là những nền tảng quan trọng.',
    },
    highlights: {
      title: 'Những điểm tâm đắc nhất',
      items: [
        'Vận dụng thành công tư duy phản biện độc lập vào các bài tập chuyên môn, kiên quyết đưa ra góc nhìn cá nhân thay vì phụ thuộc vào máy móc.',
        'Tạo lập được môi trường làm việc nhóm trực tuyến nhẹ nhàng, cởi mở nhưng vẫn bảo đảm tiến độ và chất lượng học thuật cao.',
        'Xây dựng hệ thống lưu trữ tài liệu phân tầng khoa học, hỗ trợ tối ưu hóa thời gian truy xuất các văn bản pháp lý chuyên sâu.',
      ],
    },
    challenges: {
      title: 'Những thách thức đã đối mặt',
      items: [
        'Khối lượng thông tin do các công cụ tự động tạo ra đôi khi sai lệch, đòi hỏi quy trình bóc tách và đối chiếu liên tục với các văn bản pháp luật gốc.',
        'Việc tinh chỉnh cấu trúc ngôn ngữ câu lệnh để hệ thống nắm bắt chính xác các thuật ngữ chuyên ngành luật, ngăn chặn tình trạng thuật toán diễn giải sai bản chất.',
        'Phân bổ thời gian hợp lý giữa việc làm quen với các nền tảng công nghệ mới và việc bảo đảm tính logic, chặt chẽ của từng bài luận chuyên môn.',
      ],
    },
    future: {
      title: 'Định hướng chặng đường phía trước',
      content:
        'Mình sẽ tiếp tục ứng dụng các kỹ năng số này để tiến sâu hơn vào lĩnh vực nghiên cứu pháp lý. Công nghệ sẽ được sử dụng để tinh giản hóa quy trình rà soát văn bản, giúp mình có thêm thời gian để phân tích các tình huống luật phức tạp, đồng thời duy trì sự cân bằng với những sở thích thường ngày như chơi thể thao, nấu ăn và đọc sách.',
    },
    closing:
      'Em xin gửi lời cảm ơn đến các thầy cô đã đặt ra những tiêu chuẩn học thuật rõ ràng, tạo nền tảng để sinh viên phát triển tư duy nghiên cứu độc lập. Cảm ơn mọi người đã dành thời gian theo dõi Portfolio này.',
  },
};
