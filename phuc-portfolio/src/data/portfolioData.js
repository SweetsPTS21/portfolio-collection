import avatar from '../../docs/avatar.png';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Dương Thị Thủy Phúc',
  major: 'Luật học',
  university: 'Đại học Luật - ĐHQGHN',
  interests: 'Du lịch, xem phim, nghe nhạc',
  style: 'đơn giản - ngắn gọn - trọng tâm',
  avatar,
  footer: '© 2026 • Dương Thị Thủy Phúc • Digital Portfolio',
};

export const about = {
  headline: 'WELCOME TO MY PORTFOLIO',
  philosophy:
    'Luật pháp là khuôn mẫu, nhưng công nghệ là công cụ để phá vỡ giới hạn của những trang giấy khô khan.',
  orientation:
    'Là sinh viên Luật học tại VNU, em không chọn cách học thuộc lòng thụ động.',
  goals: [
    'Mục tiêu của em là hiện thực hóa các lý thuyết pháp lý thông qua công nghệ số: từ việc dùng dữ liệu để giải mã các tranh chấp bản quyền trong điện ảnh, âm nhạc, đến việc tối ưu hóa quy trình làm việc nhóm trên không gian đám mây.',
    'Sứ mệnh Portfolio: Lưu trữ các cột mốc chuyển đổi số của bản thân, minh chứng cho khả năng thích ứng với sự thay đổi của ngành luật trong kỷ nguyên AI.',
  ],
};

export const projects = [
  {
    title: 'Bài tập 1 - Chương 1',
    subtitle: 'Máy tính và các thiết bị ngoại vi',
    goal:
      'Hiểu nguyên lý hoạt động của phần cứng và thiết lập không gian làm việc số tối ưu cho việc nghiên cứu tài liệu dung lượng lớn.',
    process:
      'Xây dựng cấu hình máy tính và thiết lập hệ thống màn hình kép phục vụ việc đối chiếu các văn bản luật và hợp đồng song song. Phân tích các tiêu chí lựa chọn thiết bị lưu trữ (SSD vs HDD) để bảo đảm an toàn dữ liệu.',
    file: bt1Pdf,
  },
  {
    title: 'Bài tập 2 - Chương 2',
    subtitle: 'Khai thác dữ liệu và thông tin',
    goal:
      'Ứng dụng các toán tử tìm kiếm nâng cao để tra cứu tài liệu học thuật và văn bản quy phạm pháp luật chính xác, nhanh chóng.',
    process:
      'Sử dụng các kỹ thuật tìm kiếm để lọc các bài báo khoa học, án lệ quốc tế và các quy định pháp luật. Phân loại và đánh giá độ tin cậy của các nguồn tài liệu mở so với các cơ sở dữ liệu pháp lý chuyên sâu.',
    file: bt2Pdf,
  },
  {
    title: 'Bài tập 3 - Chương 3',
    subtitle: 'Tổng quan về trí tuệ nhân tạo',
    goal:
      'Nhận thức rõ bản chất, phân loại AI và đánh giá năng lực thực tế của AI trong việc xử lý ngôn ngữ tự nhiên.',
    process:
      'Khảo sát sự phát triển của AI. Thử nghiệm đưa một tình huống pháp lý cơ bản vào các mô hình ngôn ngữ lớn (LLMs) để kiểm tra khả năng tư duy logic và nhận diện lỗ hổng trong lập luận của AI, từ đó rút ra giới hạn của máy móc so với tư duy con người.',
    file: bt3Pdf,
  },
  {
    title: 'Bài tập 4 - Chương 4',
    subtitle: 'Giao tiếp và hợp tác trong môi trường số',
    goal:
      'Vận dụng các nền tảng đám mây để làm việc nhóm, quản lý phiên bản tài liệu và giao tiếp học thuật.',
    process:
      'Sử dụng Google Workspace (Docs, Drive dung lượng lớn) để cùng nhóm biên tập một tiểu luận. Thiết lập các quy tắc phân quyền (view/comment/edit) để bảo vệ tính toàn vẹn của văn bản và sử dụng tính năng theo dõi lịch sử chỉnh sửa.',
    file: bt4Pdf,
  },
  {
    title: 'Bài tập 5 - Chương 5',
    subtitle: 'Sáng tạo nội dung số',
    goal:
      'Sử dụng Generative AI để hỗ trợ tổng hợp kiến thức và sáng tạo định dạng nội dung mới (video/infographic).',
    process:
      'Em đã sử dụng AI (như ChatGPT/Gemini) để lên kịch bản tóm tắt một vấn đề phức tạp. Em cung cấp các từ khóa học thuật và yêu cầu AI tái cấu trúc nội dung thành ngôn ngữ súc tích, tránh lối viết lan man. Sau đó, em trực tiếp kiểm tra để loại bỏ các lập luận thiếu chặt chẽ, đảm bảo tính chính xác của pháp lý trước khi đưa vào sản xuất video/infographic.',
    file: bt5Pdf,
  },
  {
    title: 'Bài tập 6 - Chương 6',
    subtitle: 'An toàn và liêm chính học thuật trong môi trường số',
    goal:
      'Thiết lập bộ nguyên tắc cá nhân để sử dụng AI một cách có đạo đức, tránh đạo văn và bảo mật thông tin.',
    process:
      'Dựa trên các tiêu chuẩn học thuật khắt khe, em xây dựng "Bộ 5 nguyên tắc ứng dụng AI trong nghiên cứu".',
    file: bt6Pdf,
  },
];

export const aiPrinciples = [
  'Tính kiểm chứng độc lập: Không bao giờ sử dụng trực tiếp các số liệu, trích dẫn luật hay án lệ do AI cung cấp nếu chưa đối chiếu lại với văn bản gốc.',
  'Chỉ dùng để gợi ý cấu trúc, không dùng để lập luận: AI có vai trò hỗ trợ dàn ý và định dạng, nhưng các lập luận phản biện, đánh giá tính logic phải xuất phát từ tư duy độc lập của bản thân.',
  'Tuyệt đối tuân thủ chuẩn mực trích dẫn: Mọi tài liệu tham khảo tìm được qua môi trường số phải được trích dẫn chuẩn xác theo định dạng bắt buộc.',
  'Bảo mật dữ liệu: Không đưa các thông tin nhạy cảm, dữ liệu cá nhân hoặc các chi tiết chưa được công bố lên các công cụ AI công cộng.',
  'Minh bạch trong việc sử dụng AI: Luôn ghi chú rõ ràng các phần công việc có sự can thiệp của các công cụ AI trong các bài tập lớn.',
];

export const conclusion = {
  lead:
    'Portfolio này không chỉ là một bài tập; nó là bản ghi chép về sự thay đổi tư duy từ một sinh viên Luật truyền thống sang một người làm luật có tư duy số.',
  learnedSkill:
    'Kỹ năng quan trọng nhất là tư duy phản biện với dữ liệu: biết tra cứu chính xác, chọn nguồn tin cậy và kiểm chứng thông tin (đặc biệt là nội dung do AI tạo ra).',
  proud: 'Biến kiến thức công nghệ thành ứng dụng thực tế, gắn với sở thích cá nhân (du lịch, nghệ thuật).',
  challenge:
    'Thoát khỏi lối viết văn mẫu, xây dựng nội dung cá nhân hóa nhưng vẫn đảm bảo tính học thuật.',
  aiExample:
    'Ví dụ về ảo giác AI trong phân tích Án lệ: AI có thể tự “bịa” tình tiết nếu dữ liệu đầu vào không chuẩn.',
  solution:
    'Bài học: Cần đối chiếu với án lệ thực tế; công nghệ chỉ hiệu quả khi người dùng có nền tảng kiến thức để kiểm soát.',
};

export const futureDirections = [
  'Tinh gọn nội dung, tăng chiều sâu',
  'Làm nổi bật trọng tâm, tránh dàn trải',
  'Gắn kết lý thuyết với thực tiễn',
  'Hoàn thiện kỹ năng kiểm chứng thông tin',
  'Xây dựng quy trình kiểm tra rõ ràng khi sử dụng AI và tài liệu số',
];
