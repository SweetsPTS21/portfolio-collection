import avatarUrl from '../../docs/avatar.jpg';
import bt1Pdf from '../../docs/Bt1.pdf';
import bt2Pdf from '../../docs/Bt2.pdf';
import bt3Pdf from '../../docs/Bt3.pdf';
import bt4Pdf from '../../docs/Bt4.pdf';
import bt5Pdf from '../../docs/Bt5.pdf';
import bt6Pdf from '../../docs/Bt6.pdf';

export const profile = {
  name: 'Đỗ Thị Huyền Trang',
  headline: 'Lời chào từ Huyền Trang',
  subtitle: 'Một không gian lưu trữ số nhẹ nhàng, thanh lịch và chỉn chu.',
  motto:
    'Công nghệ là bộ lọc tinh gọn để mình dành nhiều tập trung hơn cho tư duy pháp lý nhân văn.',
  major: 'Luật chung',
  university: 'Đại học Luật - Đại học Quốc gia Hà Nội (VNU-UL)',
  hobbies: 'Âm nhạc, nghệ thuật ẩm thực, điện ảnh có chiều sâu tâm lý',
  style: 'Nhẹ nhàng, thanh lịch, tỉ mỉ và từ tốn',
  footer: '© 2026 • Đỗ Thị Huyền Trang • Ocean Wave Diary Portfolio',
  avatarUrl,
};

export const direction = {
  title: 'Định hướng và góc nhìn cá nhân',
  text: 'Mình đặc biệt quan tâm đến pháp luật bảo vệ người đi vay trong các hợp đồng tín dụng tiêu dùng. Mục tiêu là rèn luyện sự điềm đạm và nhạy bén để bảo vệ quyền lợi của những nhóm chủ thể yếu thế.',
};

export const portfolioGoal = {
  title: 'Mục tiêu của Portfolio',
  text: 'Portfolio hệ thống hóa kỹ năng công nghệ một cách tinh gọn, biến không gian số thành công cụ hỗ trợ xử lý dữ liệu phức tạp để mình có thể tập trung vào các khía cạnh nhân văn của pháp luật.',
};

export const strengths = [
  'Tiếp cận công nghệ nhanh và chủ động trong học tập.',
  'Tư duy sắp xếp logic, khoa học và tỉ mỉ.',
  'Ứng dụng công cụ số và AI để tối ưu nghiên cứu, xử lý thông tin.',
  'Duy trì tiêu chuẩn học thuật khắt khe và phản biện độc lập.',
];

export const tools = [
  {
    group: 'Thiết kế và trình bày',
    items: ['Microsoft PowerPoint', 'Canva'],
  },
  {
    group: 'Tra cứu thông tin',
    items: ['Google Lens', 'Google Scholar'],
  },
  {
    group: 'AI hỗ trợ',
    items: ['ChatGPT', 'Gemini'],
  },
  {
    group: 'Nội dung số',
    items: ['CapCut'],
  },
  {
    group: 'Ghi chú và tiến độ',
    items: ['Notion'],
  },
];

export const projectsIntro =
  'Hành trình làm chủ công cụ số được chắt lọc qua 6 hạng mục cốt lõi, tập trung vào hiệu quả, sự thanh lịch và tính chỉn chu.';

export const projects = [
  {
    label: 'Bài tập 1',
    title: 'Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Xây dựng hệ sinh thái lưu trữ trên Google Drive dựa trên nguyên tắc tối giản và mạch lạc.',
    process:
      'Cấu trúc thư mục được phân nhánh rõ ràng, đồng bộ tên file theo quy chuẩn để giảm áp lực khi xử lý khối lượng tài liệu luật học lớn.',
    pdf: bt1Pdf,
    pdfName: 'Bt1.pdf',
    scene: 'Bờ cát',
  },
  {
    label: 'Bài tập 2',
    title: 'Chương 2: Khai thác dữ liệu và thông tin',
    goal: 'Rèn luyện kỹ năng tìm kiếm có chọn lọc giữa lượng thông tin lớn và nhiều nhiễu.',
    process:
      'Áp dụng toán tử tìm kiếm nâng cao để truy xuất tài liệu cập nhật, chính xác và có tính liên quan cao.',
    pdf: bt2Pdf,
    pdfName: 'Bt2.pdf',
    scene: 'Mây hồng',
  },
  {
    label: 'Bài tập 2',
    title: 'Chương 3: Tổng quan về trí tuệ nhân tạo (AI)',
    goal: 'Nhìn nhận AI như công cụ hỗ trợ thay vì thay thế tư duy phản biện pháp lý.',
    process:
      'Phân tích rủi ro khi phụ thuộc hoàn toàn vào AI, đặc biệt trong bối cảnh bảo vệ cá nhân đi vay trước định chế tài chính.',
    pdf: bt3Pdf,
    pdfName: 'Bt3.pdf',
    scene: 'Vệt nắng',
  },
  {
    label: 'Bài tập 3',
    title: 'Chương 4: Giao tiếp và hợp tác trong môi trường số',
    goal: 'Giữ sự thanh lịch trong làm việc nhóm bằng nguyên tắc, thời gian và phản biện văn minh.',
    process:
      'Sử dụng Notion và phương pháp IRAC để thống nhất ý kiến thảo luận, trình bày lập luận và giải quyết vấn đề hiệu quả.',
    pdf: bt4Pdf,
    pdfName: 'Bt4.pdf',
    scene: 'Thuyền xa',
  },
  {
    label: 'Bài tập 2',
    title: 'Chương 5: Sáng tạo nội dung số',
    goal: 'Sản xuất ấn phẩm truyền thông số có nhịp điệu chậm rãi, hình ảnh trau chuốt và nội dung dễ tiếp nhận.',
    process:
      'Kết hợp AI để tinh chỉnh lời thoại, CapCut để dựng sản phẩm và giữ ngôn từ nhã nhặn khi truyền tải kiến thức pháp lý.',
    pdf: bt5Pdf,
    pdfName: 'Bt5.pdf',
    scene: 'Sóng nhẹ',
  },
  {
    label: 'Bài tập 4',
    title: 'Chương 6: An toàn và liêm chính học thuật',
    goal: 'Xây dựng nguyên tắc minh bạch khi dùng AI và không phụ thuộc vào công cụ.',
    process:
      'Luôn đối chiếu nguồn, không tạo luận điểm thiếu căn cứ và tuân thủ định dạng trích dẫn chuẩn mực.',
    pdf: bt6Pdf,
    pdfName: 'Bt6.pdf',
    scene: 'Sun stamp',
  },
];

export const conclusion = {
  title: 'Tổng kết',
  intro:
    'Công cụ số không đối lập với sự thanh lịch. Khi được dùng đúng cách, chúng giúp tối ưu công việc và nuôi dưỡng tư duy pháp lý sắc sảo, điềm tĩnh.',
  items: [
    {
      title: 'Trải nghiệm và điểm tâm đắc nhất',
      text: 'Điều mình tự hào nhất là duy trì tư duy phản biện độc lập và tiêu chuẩn học thuật khắt khe xuyên suốt các bài tập dự án.',
    },
    {
      title: 'Thách thức và cách vượt qua',
      text: 'Thách thức lớn nhất là lượng thông tin pháp lý khổng lồ và đôi khi sai lệch từ AI. Cách giải quyết là đối chiếu từng điều khoản với văn bản quy phạm pháp luật gốc.',
    },
    {
      title: 'Lời nhắn nhủ',
      text: 'Cảm ơn Thầy/Cô và các bạn đã theo dõi toàn bộ dự án. Hy vọng sự nhẹ nhàng và chỉn chu từ không gian của Huyền Trang để lại một ấn tượng tốt đẹp.',
    },
  ],
};
