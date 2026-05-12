import avatarUrl from '../../docs/avatar.jpg';
import bt1Url from '../../docs/bt1.pdf';
import bt2Url from '../../docs/bt2.pdf';
import bt3Url from '../../docs/bt3.pdf';
import bt4Url from '../../docs/bt4.pdf';
import bt5Url from '../../docs/bt5.pdf';
import bt6Url from '../../docs/bt6.pdf';

export const personalInfo = {
  heroTitle: 'Welcome To My Portfolio',
  fullName: 'Nguyễn Thị Hồng Nhung',
  nameFromDocs: 'Nguyễn Thị Hồng Nhung',
  major: 'Luật học',
  school: 'Trường Đại học Luật - Đại học Quốc gia Hà Nội',
  intro:
    'Xin chào! Mình là Nguyễn Thị Hồng Nhung, hiện đang theo đuổi ngành Luật học tại Trường Đại học Luật - Đại học Quốc gia Hà Nội (VNU-UL). Mình là một người yêu thích sự chỉn chu, nhẹ nhàng nhưng không kém phần năng động. Dưới đây là một vài thông tin về mình.',
  personality:
    'Bên cạnh những trang giáo trình luật, mình tìm thấy cảm hứng từ âm nhạc, xu hướng thời trang và việc sáng tạo nội dung trên mạng xã hội. Những sở thích này giúp mình rèn luyện tư duy thẩm mỹ và khả năng nắm bắt xu hướng - những yếu tố bổ trợ đắc lực cho việc trình bày thông tin một cách khoa học và thu hút.',
  portfolioGoal:
    'Portfolio này là hành trình mình chinh phục môn học Nhập môn Công nghệ số và Trí tuệ nhân tạo. Tại đây, mình mong muốn chứng minh rằng: Một sinh viên Luật hiện đại không chỉ am hiểu văn bản pháp luật mà còn là một công dân số nhạy bén, biết sử dụng công nghệ để làm đẹp và chuyên nghiệp hóa kho tàng tri thức của mình.',
  imageNote: 'ảnh cá nhân, ảnh thẻ hoặc mặt chính diện',
  avatar: avatarUrl,
};

export const goals = [
  {
    title: 'Mục tiêu ngắn hạn',
    text: 'Hoàn thành tốt chương trình đào tạo tại VNU-UL, đồng thời làm chủ các công cụ công nghệ số và AI để tối ưu hóa việc nghiên cứu, phân tích tài liệu pháp luật. Mình hướng tới việc xây dựng các sản phẩm học thuật có tính trình bày khoa học, thẩm mỹ cao.',
  },
  {
    title: 'Định hướng dài hạn',
    text: 'Trở thành một chuyên gia pháp lý hiện đại, không chỉ giỏi chuyên môn mà còn có khả năng truyền tải kiến thức pháp luật đến cộng đồng thông qua các nền tảng số. mình muốn ứng dụng tư duy sáng tạo nội dung để biến những quy định pháp lý khô khan trở nên gần gũi, dễ hiểu và chuyên nghiệp.',
  },
];

export const toolGroups = [
  {
    title: 'Nhóm Công cụ Cộng tác & Quản lý',
    tools: ['Google Workspace (Docs, Sheets, Slides)', 'Notion', 'Zalo/Slack'],
  },
  {
    title: 'Nhóm Công cụ Soạn thảo & Xử lý Nội dung, Microsoft Word',
    tools: ['Gemini / ChatGPT', 'Google Forms'],
  },
  {
    title: 'Nhóm Công cụ Thiết kế & Sáng tạo',
    tools: ['Canva', 'CapCutLeonardo.ai / Bing Image Creator'],
  },
  {
    title: 'Nhóm Công cụ Xây dựng Website',
    tools: ['Google Sites / Wix'],
  },
];

export const projects = [
  {
    title: 'Bài tập 1: Hệ thống máy tính & Tư duy tối giản',
    goal: 'Thiết lập môi trường làm việc số chuyên nghiệp.',
    action:
      'Mình lựa chọn và sắp xếp các thiết bị ngoại vi dựa trên tiêu chí: Hiệu suất cao - Thẩm mỹ - Gọn gàng. Một không gian làm việc chỉn chu là khởi đầu cho những ý tưởng sáng tạo.',
    product: 'File mô tả sơ đồ thiết bị làm việc của Nhung',
    file: bt1Url,
  },
  {
    title: 'Bài tập 2: Khai thác dữ liệu pháp luật khoa học',
    goal: 'Kỹ năng truy xuất và quản lý thông tin số.',
    action:
      'Áp dụng các phương pháp lọc dữ liệu để xây dựng danh mục tài liệu tham khảo cho các môn luật chuyên ngành. Cách mình trình bày bảng dữ liệu luôn đảm bảo tính logic, dễ tra cứu.',
    product: 'Bảng tổng hợp dữ liệu/Kết quả tìm kiếm văn bản pháp luật',
    file: bt2Url,
  },
  {
    title: 'Bài tập 3: AI - Cánh tay nối dài của Luật gia',
    goal: 'Hiểu về bản chất và tiềm năng của trí tuệ nhân tạo.',
    action:
      'Nghiên cứu cách AI có thể hỗ trợ phân loại hồ sơ và dự báo xu hướng pháp lý. Mình tập trung vào việc biến những khái niệm AI khô khan thành các sơ đồ thông tin (Infographic) đẹp mắt.',
    product: 'Sơ đồ/Bản đồ tư duy về ứng dụng AI trong ngành Luật',
    file: bt3Url,
  },
  {
    title: 'Bài tập 4: Giao tiếp & Cộng tác số năng động',
    goal: 'Phối hợp hiệu quả trong môi trường làm việc trực tuyến.',
    action:
      'Đóng góp vai trò điều phối trong nhóm, sử dụng các nền tảng số để quản lý dự án chung. Sự chỉn chu trong giao tiếp văn bản là chìa khóa để nhóm mình đạt kết quả tốt nhất.',
    product: 'Nhật ký làm việc nhóm/Hình ảnh minh họa quá trình hợp tác',
    file: bt4Url,
  },
  {
    title: 'Bài tập 5: Sáng tạo nội dung số - Khi Luật học trở nên thú vị',
    goal: 'Sử dụng AI để tạo ra các sản phẩm nội dung đa phương tiện.',
    action:
      'Vận dụng kỹ năng sáng tạo nội dung mạng xã hội để thiết kế một video ngắn giới thiệu về một quy định pháp luật. Mình sử dụng AI để hỗ trợ chỉnh sửa hình ảnh và tạo kịch bản hấp dẫn.',
    product: 'Video clip/Hình ảnh thiết kế sáng tạo',
    file: bt5Url,
  },
  {
    title: 'Bài tập 6: Liêm chính học thuật & Đạo đức AI',
    goal: 'Xây dựng bộ quy tắc ứng xử trong kỷ nguyên số.',
    action:
      'Phân tích các vấn đề bản quyền trong thời trang và nội dung số khi có sự can thiệp của AI. Đề xuất các nguyên tắc cá nhân để sử dụng AI một cách trung thực.',
    product: 'Bản cam kết/Quy tắc liêm chính học thuật cá nhân',
    file: bt6Url,
  },
];

export const conclusion = {
  opening:
    'Xây dựng Portfolio này không chỉ là làm bài tập, mà là quá trình mình định hình phong cách cá nhân trên không gian số. Nó phản ánh sự chỉn chu mà mình luôn theo đuổi.',
  achieved: [
    'Tư duy số: Khả năng thích nghi nhanh với các công cụ công nghệ mới.',
    'Trình bày thông tin khoa học: Kỹ năng biến những nội dung phức tạp thành định dạng dễ hiểu, đẹp mắt.',
    'Quản lý dữ liệu: Thành thạo việc tìm kiếm và lưu trữ thông tin pháp luật trên môi trường số.',
    'Sáng tạo nội dung: Sử dụng tốt các công cụ thiết kế và biên tập video hỗ trợ bởi AI.',
  ],
  developing: [
    'Prompt Engineering chuyên sâu: Học cách đặt lệnh tối ưu cho AI để phân tích các tình huống pháp lý phức tạp.',
    'An toàn thông tin nâng cao: Tìm hiểu sâu hơn về bảo mật dữ liệu khách hàng trong tương lai.',
    'Phân tích dữ liệu lớn: Định hướng sử dụng dữ liệu để dự đoán các biến động trong luật kinh doanh.',
  ],
  lessons: [
    'Bài học lớn nhất: Công nghệ không làm mất đi tính nhân văn của ngành Luật, ngược lại, nếu biết cách trình bày khoa học và sáng tạo, công nghệ sẽ giúp luật học gần gũi với mọi người hơn.',
    'Thách thức: Cân bằng giữa sự sáng tạo cá nhân nhẹ nhàng, năng động với yêu cầu khắt khe, chính xác của ngành Luật. Và đây chính là sản phẩm dung hòa được cả hai yếu tố đó.',
  ],
};
