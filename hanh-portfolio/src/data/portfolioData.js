import avatarUrl from '../../docs/avatar.png';

export const personalInfo = {
  name: 'Trần Hồng Hạnh',
  major: 'Luật học',
  university: 'Đại học Luật - Đại học Quốc gia Hà Nội',
  hobbies: 'Đọc sách, Nghe nhạc, Nấu ăn, Chơi cầu lông',
  style: 'Gọn • Rõ • Có hệ thống',
  footer: '© 2026 • Trần Hồng Hạnh • Digital Portfolio',
  avatarUrl,
};

export const about = {
  title: 'ABOUT ME',
  kicker: 'Garden porfolio',
  profile: [
    ['Họ và tên', personalInfo.name],
    ['Ngành', personalInfo.major],
    ['Trường', personalInfo.university],
    ['Sở thích', personalInfo.hobbies],
    ['Phong cách', personalInfo.style],
  ],
};

export const goals = {
  title: 'Định hướng và mục tiêu phát triển',
  items: [
    {
      title: 'Mục tiêu học thuật',
      text: 'Tích hợp thành thạo công nghệ số vào quy trình nghiên cứu pháp lý, từ việc truy xuất tài liệu chuẩn xác đến xử lý dữ liệu phức tạp.',
    },
    {
      title: 'Định hướng cá nhân',
      text: 'Trở thành một cử nhân Luật hiện đại, có khả năng thích ứng nhanh với LegalTech và tận dụng AI một cách có trách nhiệm để tối ưu hóa hiệu suất làm việc mà không vi phạm các tiêu chuẩn đạo đức nghề nghiệp.',
    },
    {
      title: 'Mục tiêu của portfolio',
      text: 'Portfolio này được xây dựng dựa trên nguyên tắc tối ưu hóa trải nghiệm người xem. Nội dung không chỉ dừng lại ở việc liệt kê mà được cấu trúc hóa theo mô hình: Mục tiêu → Quy trình → Kết quả → Minh chứng. Mọi dữ liệu và tệp đính kèm đều được sắp xếp khoa học, giúp việc tra cứu và đối soát thông tin trở nên tức thì và chính xác.',
    },
  ],
};

export const practicingSkills = {
  title: 'Kỹ năng đang rèn luyện',
  items: [
    {
      title: 'Quản lý và lưu trữ tài liệu khoa học',
      text: 'Sắp xếp thư mục theo cấu trúc logic, phân loại rõ ràng từng phiên bản tài liệu nhằm hạn chế sai sót và nhầm lẫn trong quá trình sử dụng.',
    },
    {
      title: 'Kiểm chứng và đánh giá nguồn thông tin',
      text: 'Luôn đối chiếu dữ liệu từ nhiều nguồn, xem xét mức độ tin cậy trước khi đưa vào bài viết học thuật.',
    },
    {
      title: 'Khai thác AI có định hướng',
      text: 'Xây dựng prompt rõ ràng về mục tiêu, phạm vi và yêu cầu cụ thể để đảm bảo kết quả AI cung cấp đúng trọng tâm.',
    },
  ],
};

export const strengths = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Quản lý và tổ chức dữ liệu số',
      text: 'Thiết lập hệ thống lưu trữ khoa học cho tệp và thư mục, áp dụng quy ước đặt tên nhất quán giúp truy xuất nhanh theo từng mục đích sử dụng.',
    },
    {
      title: 'Khai thác tài liệu học thuật',
      text: 'Tìm kiếm và chọn lọc nguồn học thuật một cách hiệu quả, ưu tiên tác giả uy tín, nhà xuất bản đáng tin cậy và thông tin có tính cập nhật cao.',
    },
    {
      title: 'Kỹ năng tương tác với AI (Prompt Engineering)',
      text: 'Soạn yêu cầu có bối cảnh rõ ràng, xác định đầu ra mong muốn và tiêu chí đánh giá để nâng cao độ chính xác của phản hồi từ AI.',
    },
    {
      title: 'Tái cấu trúc và trình bày thông tin',
      text: 'Chuyển hóa dữ liệu và ý tưởng thành nội dung có bố cục logic, phù hợp để công bố trên website hoặc các nền tảng số.',
    },
  ],
};

export const tools = {
  title: 'Công cụ và nền tảng đã sử dụng',
  items: [
    {
      title: 'File Explorer',
      text: 'Quản lý tệp và tài liệu',
    },
    {
      title: 'Google Scholar',
      text: 'Cơ sở dữ liệu trực tuyến có độ tin cậy cao phục vụ nghiên cứu và học tập.',
    },
    {
      title: 'Chat GPT, Gemini',
      text: 'Dùng AI trong quá trình phát triển ý tưởng và rà soát nội dung, có điều chỉnh theo mục tiêu cá nhân và yêu cầu học thuật.',
    },
    {
      title: 'Canva, Midjourney/DALL·E',
      text: 'Dùng cho các bài tập liên quan đến hình ảnh và nội dung sáng tạo ứng dụng AI.',
    },
    {
      title: 'Trello, Google Docs, Slack',
      text: 'Hỗ trợ quản lý tiến độ, chia sẻ tài liệu và phối hợp trong các dự án học tập.',
    },
  ],
};

export const projects = {
  title: 'PROJECT',
  intro: 'Nội dung 6 bài được đưa vào đầy đủ (văn bản + hình ảnh)',
  chooser: 'Chọn bài',
  items: [
    {
      title: 'Bài tập 1 - Chương 1: Máy tính và các thiết bị ngoại vi',
      description:
        'Tổng quan về máy tính, các thành phần cơ bản và thiết bị ngoại vi (bàn phím, chuột, máy in…), kèm minh chứng thực hành trong file đính kèm.',
    },
    {
      title: 'Bài tập 2 - Chương 2: Khai thác dữ liệu và thông tin',
      description:
        'Thực hành tìm kiếm, thu thập và tổ chức thông tin; biết cách đánh giá độ tin cậy của nguồn và trích dẫn phù hợp.',
    },
    {
      title: 'Bài tập 2 - Chương 3: Tổng quan về trí tuệ nhân tạo',
      description:
        'Tổng quan về AI: khái niệm, ứng dụng phổ biến, lợi ích – rủi ro và ví dụ liên hệ thực tế trong học tập.',
    },
    {
      title: 'Bài tập 3 - Chương 4: Giao tiếp và hợp tác trong môi trường số',
      description:
        'Rèn kỹ năng giao tiếp số và làm việc nhóm online: phân công, trao đổi, chia sẻ tài liệu và quy tắc ứng xử trên môi trường số.',
    },
    {
      title: 'Bài tập 2 - Chương 5: Sáng tạo nội dung số',
      description:
        'Thực hành sáng tạo nội dung số: lên ý tưởng, lựa chọn công cụ, biên tập/thiết kế và lưu ý bản quyền khi sử dụng tài nguyên.',
    },
    {
      title:
        'Bài tập 4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số',
      description:
        'Tập trung vào an toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật (tránh đạo văn, trích dẫn đúng, dùng AI minh bạch).',
    },
  ],
};

export const conclusion = {
  title: 'CONCLUSION',
  intro:
    'Sau khi hoàn thành portfolio gồm 6 bài tập, toàn bộ quá trình học được nhìn lại theo một góc nhìn có hệ thống. Việc tự tay thiết kế giúp nhận ra: Công nghệ không thay thế tư duy pháp lý, nhưng giúp định hình sự chuyên nghiệp và tốc độ xử lý vấn đề của một sinh viên ngành Luật.',
  achievedTitle: 'Những kiến thức và kỹ năng cốt lõi đã đạt được',
  achievedItems: [
    {
      title: 'Cách làm việc trở nên có kế hoạch hơn',
      text: 'Trước khi bắt tay vào làm, cần dành thời gian xác định mục tiêu, chuẩn bị cấu trúc và lựa chọn công cụ phù hợp thay vì làm theo cảm tính.',
    },
    {
      title: 'Khai thác AI có định hướng và kiểm soát',
      text: 'Quá trình học giúp thay đổi tư duy từ nhờ AI viết hộ sang xem AI là công cụ hỗ trợ. Biết đặt câu hỏi đúng trọng tâm, tìm đúng nguồn và thực hiện kiểm tra chéo trước khi sử dụng.',
    },
    {
      title: 'Chủ động hơn trong việc xử lý thông tin',
      text: 'Việc xử lý thông tin trở nên chủ động hơn: chú ý đến độ phù hợp của tài liệu, không sử dụng nguồn một cách máy móc và luôn cân nhắc bối cảnh khi đưa thông tin vào bài.',
    },
  ],
  reflectionTitle: 'Điểm tâm đắc và thách thức lớn nhất',
  reflections: [
    {
      title: 'Điểm tâm đắc nhất',
      text: 'Sự mạch lạc trong cả hệ thống lưu trữ lẫn tư duy. Khi dữ liệu được dọn dẹp gọn gàng, các lập luận và tư duy phản biện cũng trở nên sắc bén và rõ ràng hơn. Portfolio này đã phản ánh đúng sự ngăn nắp đang hướng tới trong học tập và công việc.',
    },
    {
      title: 'Thách thức lớn nhất',
      text: 'Thách thức lớn nhất không nằm ở việc học công cụ, mà ở việc không được phép ỷ lại vào nó. Những lập luận nghe rất xuôi tai do AI tạo ra khi lật lại vấn đề và đưa ra các tình huống phản biện thực tế, chúng trở nên thiếu sức nặng và phi thực tế. Do đó, khó khăn lớn nhất là rèn luyện kỷ luật kiểm chứng chéo, luôn phải tra cứu ngược lại văn bản gốc, đạo luật gốc để chống lại sự ảo giác thông tin của AI..',
    },
  ],
  futureTitle: 'Hướng phát triển trong tương lai',
  futureIntro:
    'Trong các phiên bản tiếp theo, cấu trúc portfolio sẽ tiếp tục được điều chỉnh để:',
  futureItems: [
    'Trình bày ngắn gọn hơn nhưng rõ trọng tâm',
    'Làm nổi bật bài học rút ra từ từng bài',
    'Mở rộng nội dung theo hướng gắn với định hướng học tập và nghề nghiệp',
  ],
};
