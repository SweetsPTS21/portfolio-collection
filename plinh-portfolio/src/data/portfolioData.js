import avatarUrl from '../../docs/avatar.png';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  welcome: 'WELCOME TO MY PORTFOLIO',
  name: 'Giang Lê Phương Linh',
  major: 'Luật học',
  university: 'Đại học Luật - Đại học Quốc gia Hà Nội',
  hobbies: 'Đọc sách và tìm hiểu, khám phá những điều mới trên mạng xã hội',
  style: 'Thân thiện, thích sự đơn giản, học hỏi cái mới và luôn cố gắng cân bằng giữa học tập với cuộc sống',
  footer: '© 2026 • Giang Lê Phương Linh • Digital Portfolio',
  avatarUrl,
};

export const about = {
  title: 'VỀ TÔI',
  kicker: 'Luật học - Công nghệ số - Trí tuệ nhân tạo',
  intro:
    'Chào mừng bạn đã ghé thăm không gian số nhỏ - nơi mình lưu trữ hành trình khám phá công nghệ, tư duy sáng tạo và những góc nhìn mới mẻ trong kỷ nguyên số.',
  bio:
    'Mình là sinh viên năm hai chuyên ngành Luật Học với niềm đam mê đọc sách, tìm hiểu, khám phá trí tuệ nhân tạo và cách sử dụng AI trong bối cảnh công nghệ số đang từng bước thống trị đời sống con người.',
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
      title: 'Định hướng học tập',
      text: 'Không chỉ tiếp thu kiến thức trên giảng đường mà còn chủ động mở rộng hiểu biết thông qua việc tìm hiểu các vấn đề thực tế và những thay đổi của xã hội. Rèn luyện khả năng tư duy, kỹ năng phân tích và xây dựng cách nhìn nhận vấn đề đa chiều.',
    },
    {
      title: 'Mục tiêu dài hạn',
      text: 'Phát triển bản thân theo hướng tự tin, linh hoạt và không ngừng học hỏi để thích nghi với môi trường làm việc trong tương lai. Học cách sử dụng và ứng dụng trí tuệ nhân tạo và công nghệ số vào đời sống để theo kịp sự phát triển của thời đại.',
    },
    {
      title: 'Mục tiêu của Portfolio',
      text: 'Minh chứng kỹ năng số, lưu trữ và sẻ chia sản phẩm cá nhân, đồng thời đánh dấu bước đi đầu tiên đầy tự hào của một sinh viên Luật trong việc phá vỡ giới hạn bản thân, ứng dụng AI có trách nhiệm và liêm chính.',
    },
  ],
};

export const practicingSkills = {
  title: 'KỸ NĂNG',
  items: [
    {
      title: 'Tư duy xử lý dữ liệu số',
      text: 'Biết cách tìm kiếm, sàng lọc và kiểm chứng thông tin giữa biển dữ liệu mênh mông một cách nhanh chóng và chính xác.',
    },
    {
      title: 'Kỹ năng làm chủ AI tạo sinh',
      text: 'Học được cách viết prompt hiệu quả để biến AI thành người trợ lý đắc lực hỗ trợ lên ý tưởng, viết kịch bản và sản xuất video truyền thông số.',
    },
    {
      title: 'Nhận thức về An toàn và Đạo đức',
      text: 'Hiểu rõ ranh giới giữa việc sử dụng AI làm công cụ hỗ trợ và phụ thuộc vào AI, xây dựng bộ lọc đạo đức nghiêm túc khi hoạt động trong môi trường số.',
    },
  ],
};

export const strengths = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Thiết kế Portfolio cá nhân',
      text: 'Thiết kế được giao diện Portfolio theo đúng phong cách sống: Đơn giản, thân thiện và gọn gàng.',
    },
    {
      title: 'Tư duy pháp lý kết hợp công nghệ',
      text: 'Lồng ghép thành công tư duy pháp lý để xây dựng Bộ 6 nguyên tắc liêm chính học thuật khi sử dụng AI.',
    },
    {
      title: 'Sản xuất nội dung số',
      text: 'Ứng dụng Gemini, Canva, CapCut để sản xuất sản phẩm truyền thông kỹ thuật số trực quan, sinh động, tiết kiệm 50% thời gian sản xuất.',
    },
    {
      title: 'Làm việc nhóm trực tuyến',
      text: 'Điều phối, phân công công việc qua bảng Kanban, chia sẻ tài liệu qua Google Drive và tuân thủ văn hóa mạng.',
    },
  ],
};

export const tools = {
  title: 'Công cụ và nền tảng đã sử dụng',
  items: [
    {
      title: 'Gemini',
      text: 'Hỗ trợ tối ưu hóa lời thoại, phát triển ý tưởng nội dung.',
    },
    {
      title: 'Canva',
      text: 'Thiết kế slide hình ảnh minh họa theo phong cách tối giản.',
    },
    {
      title: 'CapCut',
      text: 'Biên tập, cắt ghép video và tạo phụ đề tự động bằng AI.',
    },
    {
      title: 'Google Drive, Google Scholar',
      text: 'Chia sẻ tài liệu, tìm kiếm văn bản pháp luật và đề tài nghiên cứu chính thống.',
    },
    {
      title: 'Kanban, Google Drive',
      text: 'Quản lý công việc nhóm và đồng chỉnh sửa tài liệu trực tuyến.',
    },
  ],
};

export const projects = {
  title: 'DỰ ÁN',
  intro:
    'Tập hợp 6 bài tập thực hành tương ứng với 6 chương học, thể hiện trọn vẹn tiến trình nâng cao năng lực số.',
  chooser: 'Danh mục bài tập',
  items: [
    {
      title: 'Bài 1: Máy tính và các thiết bị ngoại vi',
      description:
        'Hiểu rõ cấu trúc phần cứng, nguyên lý vận hành cơ bản của hệ thống máy tính và các thiết bị ngoại vi nhằm tối ưu hóa không gian làm việc số phục vụ ngành học.',
      pdf: bt1Pdf,
    },
    {
      title: 'Bài 2: Khai thác dữ liệu và thông tin',
      description:
        'Thành thạo kỹ năng tìm kiếm nâng cao, bộ lọc thông tin và đánh giá độ tin cậy của nguồn dữ liệu số. Quy trình gồm lập bảng từ khóa, truy vấn trên Google Scholar và Cơ sở dữ liệu quốc gia về văn bản pháp luật, rồi sàng lọc theo nguồn gốc, tính cập nhật và tính khách quan.',
      pdf: bt2Pdf,
    },
    {
      title: 'Bài 3: Tổng quan về trí tuệ nhân tạo (AI)',
      description:
        'Xây dựng cái nhìn toàn diện về lịch sử, phân loại và cơ chế hoạt động của AI. Bài thực hành liên hệ cách các văn phòng luật sư tự động hóa việc soát xét hợp đồng và tóm tắt án lệ bằng mô hình ngôn ngữ lớn.',
      pdf: bt3Pdf,
    },
    {
      title: 'Bài 4: Giao tiếp và hợp tác trong môi trường số',
      description:
        'Phát triển kỹ năng tương tác, làm việc nhóm từ xa và đồng sáng tạo tài liệu trực tuyến. Nhóm phân công qua bảng Kanban, chia sẻ tài liệu qua Google Drive, đồng chỉnh sửa bài thảo luận pháp lý và kiểm soát quyền truy cập thư mục để bảo mật thông tin nội bộ.',
      pdf: bt4Pdf,
    },
    {
      title: 'Bài 5: Sáng tạo nội dung số',
      description:
        'Ứng dụng Gemini để tối ưu lời thoại, Canva để thiết kế slide tối giản và CapCut để biên tập video, đồng thời dùng AI tạo phụ đề tự động để hoàn thiện sản phẩm truyền thông số chuyên nghiệp.',
      pdf: bt5Pdf,
    },
    {
      title: 'Bài 6: An toàn và liêm chính học thuật trong môi trường số',
      description:
        'Phân tích đạo đức sử dụng AI trong học đường, nghiên cứu quy định về liêm chính học thuật của ĐHQGHN và xây dựng bộ quy tắc trách nhiệm. Nội dung nhấn mạnh rủi ro AI ảo tưởng có thể tạo ra các điều luật hoặc án lệ giả mạo nếu người học không tỉnh táo kiểm chứng.',
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  title: 'TỔNG KẾT',
  intro:
    'Hành trình xây dựng không gian Portfolio này là một trải nghiệm vô cùng ý nghĩa và đáng nhớ. Từ một cô sinh viên ngành Luật vốn quen thuộc với những trang sách dày cộp, việc tự tay thiết kế và hoàn thiện một trang website cá nhân thực sự là một bước đi ra khỏi vùng an toàn.',
  achievedTitle: 'Những kiến thức và kỹ năng quan trọng nhất đã gặt hái được',
  achievedItems: [
    {
      title: 'Tư duy xử lý dữ liệu số',
      text: 'Biết cách tìm kiếm, sàng lọc và kiểm chứng thông tin giữa biển dữ liệu mênh mông một cách nhanh chóng và chính xác.',
    },
    {
      title: 'Kỹ năng làm chủ AI tạo sinh',
      text: 'Học được cách viết prompt hiệu quả để biến AI thành người trợ lý đắc lực hỗ trợ lên ý tưởng, viết kịch bản và sản xuất video truyền thông số.',
    },
    {
      title: 'Nhận thức sâu sắc về An toàn và Đạo đức',
      text: 'Hiểu rõ ranh giới giữa việc sử dụng AI làm công cụ hỗ trợ và phụ thuộc vào AI, xây dựng cho mình một bộ lọc đạo đức nghiêm túc khi hoạt động trong môi trường số.',
    },
  ],
  reflectionTitle: 'Điểm tâm đắc và thách thức lớn nhất',
  reflections: [
    {
      title: 'Điểm tâm đắc nhất',
      text: 'Thiết kế được giao diện Portfolio theo đúng phong cách sống: Đơn giản, thân thiện và gọn gàng. Đồng thời, lồng ghép thành công tư duy pháp lý để xây dựng Bộ 6 nguyên tắc liêm chính học thuật khi sử dụng AI.',
    },
    {
      title: 'Thách thức lớn nhất',
      text: 'Phân bổ thời gian để vừa hoàn thành các bài luận chuyên ngành Luật, vừa tự mày mò học cách edit video, học cách sử dụng các nền tảng tạo web mới lạ. Đôi lúc bị choáng ngợp trước tốc độ tạo ra thông tin quá nhanh của AI.',
    },
  ],
  futureTitle: 'Cách vượt qua thách thức',
  futureIntro:
    'Áp dụng triết lý sự đơn giản và cân bằng:',
  futureItems: [
    'Chia nhỏ mục tiêu mỗi ngày một chút, không chạy theo sự cầu kỳ phức tạp',
    'Tập trung vào chất lượng nội dung cốt lõi',
    'Luôn giữ cái đầu lạnh để hoài nghi và kiểm chứng lại mọi điều luật mà AI đưa ra',
  ],
  thanks:
    'Phương Linh chân thành cảm ơn Thầy/Cô và các bạn đã dành thời gian theo dõi Portfolio này.',
};
