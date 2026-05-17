import bt1Pdf from '../../docs/Bt1.pdf';
import bt2Pdf from '../../docs/Bt2.pdf';
import bt3Pdf from '../../docs/Bt3.pdf';
import bt4Pdf from '../../docs/Bt4.pdf';
import bt5Pdf from '../../docs/Bt5.pdf';
import bt6Pdf from '../../docs/Bt6.pdf';
import avatarUrl from '../../docs/avatar.png';

export const personalInfo = {
  name: 'Nguyễn Thị Xuân Mai',
  major: 'Ngành luật',
  university: 'Trường Đại học Luật - ĐHQG HN',
  hobbies: 'Đọc sách, viết lách',
  style: 'Đơn giản - Thanh lịch - Hiện đại',
  footer: '© 2026 • Nguyễn Thị Xuân Mai • Digital Portfolio',
  avatarUrl,
};

export const hero = {
  quote:
    'Luật pháp là lăng kính. Công nghệ là đòn bẩy. Tư duy nguyên bản là điểm tựa.',
  intro: 'Chào mừng đến với không gian lưu trữ tư duy và kỹ năng số của tôi.',
};

export const learningGoals = {
  title: 'Mục tiêu học tập & Định hướng',
  items: [
    {
      title: 'Học luật để thực chiến',
      text: 'Em không muốn chỉ là người thuộc làu các điều luật, mà muốn dùng tư duy phản biện để tháo gỡ những ca huống thực tế, bảo vệ quyền lợi thân chủ một cách linh hoạt nhất.',
    },
    {
      title: 'Làm việc thông minh hơn',
      text: 'Thay vì xử lý đống tài liệu giấy, mình đang chủ động tích hợp AI và lưu trữ đám mây vào thói quen hàng ngày để đọc án lệ và rà soát hồ sơ nhanh chóng.',
    },
    {
      title: 'Người làm luật tinh gọn',
      text: 'Xử lý khối lượng dữ liệu khổng lồ với tốc độ của công nghệ, nhưng luôn lập luận và giải quyết vấn đề bằng lăng kính của con người.',
    },
  ],
};

export const portfolioGoals = {
  title: 'Mục tiêu của Portfolio',
  items: [
    'Không phải bài tập nộp cho có, đây là bước chuyển mình từ cách học truyền thống sang chủ động làm chủ công nghệ.',
    'Màng lọc pháp lý: Nơi chuyển hóa dữ kiện thô thành giải pháp sáng tạo.',
    'Tôn trọng nguyên bản: Dùng công nghệ làm trợ lý, tuyệt đối nói không với văn mẫu. Tiếng nói quyết định luôn thuộc về con người.',
  ],
};

export const projects = {
  title: 'Dự án',
  intro:
    'Dưới đây là tập hợp các sản phẩm và quá trình nghiên cứu của em trong suốt khóa học, thể hiện sự giao thoa giữa kỹ năng số và tư duy học thuật.',
  items: [
    {
      title: 'Chương 1: Máy tính & Thiết bị ngoại vi',
      goal: 'Nắm bắt nền tảng vận hành của không gian số.',
      summary:
        'Báo cáo hệ thống hóa cấu trúc phần cứng và nguyên lý xử lý dữ liệu. Việc hiểu rõ nền tảng thiết bị giúp em tối ưu hóa hiệu suất làm việc với các phần mềm xử lý văn bản nặng và tổ chức thư mục nghiên cứu.',
      pdf: bt1Pdf,
      pdfName: 'Bt1.pdf',
    },
    {
      title: 'Chương 2: Khai thác dữ liệu và thông tin',
      goal: 'Kỹ năng tra cứu, chọn lọc và thẩm định nguồn tài liệu khổng lồ trên Internet.',
      summary:
        'Em đã ứng dụng các bộ lọc tìm kiếm nâng cao để tra cứu các án lệ, các nội dung còn khó hiểu và các học thuyết pháp lý phức tạp. Kỹ năng này giúp em loại bỏ những nguồn thông tin không chính thống, rèn luyện thói quen tiếp cận dữ liệu gốc và đánh giá các lập luận đa chiều.',
      pdf: bt2Pdf,
      pdfName: 'Bt2.pdf',
    },
    {
      title: 'Chương 3: Tổng quan trí tuệ nhân tạo',
      goal: 'Nắm bắt bản chất và xu hướng của làn sóng công nghệ AI.',
      summary:
        'Thử nghiệm dùng AI tra cứu thông tin và phân tích các điểm mù logic của công cụ này. AI là cỗ máy tổng hợp dữ liệu xuất sắc, nhưng hoàn toàn vô năng nếu thiếu đi tư duy phản biện và sự sàng lọc và kiểm chứng của người điều khiển.',
      pdf: bt3Pdf,
      pdfName: 'Bt3.pdf',
    },
    {
      title: 'Chương 4: Giao tiếp trong môi trường số',
      goal: 'Thiết lập văn hóa ứng xử chuyên nghiệp trên không gian mạng.',
      summary:
        'Tổ chức không gian làm việc nhóm, phân quyền tài liệu và cộng tác trên nền tảng đám mây. Giúp việc làm việc nhóm trở nên hiệu quả hơn, các thành viên có thể hiểu nhau hơn, chất lượng công việc cải tiến hơn với sự giúp sức của AI.',
      pdf: bt4Pdf,
      pdfName: 'Bt4.pdf',
    },
    {
      title: 'Chương 5: Sáng tạo nội dung số',
      goal: 'Ứng dụng AI như một trợ lý đồng sáng tạo, kiểm soát AI bằng tư duy độc lập.',
      summary:
        'Em trực tiếp xác định thông điệp cốt lõi và cấu trúc kịch bản; sử dụng các mô hình ngôn ngữ lớn như Gemini, Claude để phản biện lại chính lập luận của mình, tìm ra các lỗ hổng logic; đồng thời tự tay tinh chỉnh từng câu chữ và khung hình để đảm bảo sản phẩm phản ánh đúng tư duy và tiếng nói cá nhân.',
      pdf: bt5Pdf,
      pdfName: 'Bt5.pdf',
    },
    {
      title: 'Bài tập 5 - Chương 6: An toàn và Liêm chính học thuật',
      goal: 'Xây dựng hàng rào đạo đức, sử dụng công nghệ một cách có trách nhiệm.',
      summary:
        'Tư duy độc lập là tối thượng; trích dẫn minh bạch, chuẩn xác; chỉ dùng AI làm công cụ, không làm người thay thế; bảo mật dữ liệu; cập nhật và đối chiếu liên tục với các hệ thống văn bản pháp luật hiện hành mới nhất.',
      pdf: bt6Pdf,
      pdfName: 'Bt6.pdf',
    },
  ],
};

export const conclusion = {
  title: 'Tổng kết',
  intro:
    'Quá trình xây dựng Portfolio và tham gia môn học này đã giúp em thay đổi hoàn toàn tư duy tiếp cận công nghệ. Từ việc coi máy tính và Internet đơn thuần là công cụ giải trí, em đã biết cách biến chúng thành một hệ sinh thái hỗ trợ học thuật mạnh mẽ.',
  systemNote:
    'Việc lưu trữ, phân tích và trình bày thông tin trên môi trường số nay đã trở nên có hệ thống và chủ động hơn rất nhiều.',
  coreSkills: [
    {
      title: 'Kỹ năng thẩm định thông tin',
      text: 'Trở nên nhạy bén hơn trong việc bóc tách, đánh giá độ tin cậy của các luồng dữ liệu trên Internet.',
    },
    {
      title: 'Làm chủ AI tạo sinh',
      text: 'Nâng cao kỹ năng đặt prompt, ép AI đi vào trọng tâm, loại bỏ những câu trả lời khuôn mẫu để phục vụ hiệu quả cho việc nghiên cứu chuyên sâu.',
    },
    {
      title: 'Kỹ năng trình bày',
      text: 'Thành thạo việc cấu trúc hóa một tài liệu/website một cách chuyên nghiệp, từ việc thiết lập các thẻ Heading chuẩn xác đến việc tạo ra một không gian hiển thị mạch lạc.',
    },
  ],
  proudest: {
    title: 'Tâm đắc nhất',
    text: 'Em đặc biệt tự hào về phần xây dựng bộ nguyên tắc Liêm chính học thuật ở Chương 6. Nó là minh chứng cho việc em có thể ứng dụng các công cụ số mạnh mẽ nhưng vẫn giữ vững được cái tôi học thuật, sự chỉn chu trong trích dẫn và sự khắt khe trong việc lập luận.',
  },
  challenge: {
    title: 'Thách thức lớn nhất',
    text: 'Thách thức nằm ở việc làm sao để các ý tưởng không bị AI đồng hóa. Khi AI quá thông minh và đưa ra những đáp án có vẻ hoàn hảo, việc giữ được sự tỉnh táo để chỉ ra các lỗ hổng của nó, đồng thời viết lại bằng chính tư duy và ngôn ngữ sắc bén của mình là một rèn luyện không hề dễ dàng, nhưng em đã vượt qua được.',
  },
  futureTitle: 'Tầm nhìn và định hướng phát triển',
  futureIntro:
    'Trong thời gian tới, em dự định tiếp tục phát triển portfolio theo hướng chuyên nghiệp hóa để kết nối chặt chẽ hơn với định hướng nghề nghiệp:',
  futureItems: [
    'Tối ưu hóa trải nghiệm người dùng: Tinh gọn hình thức trình bày để làm nổi bật những giá trị cốt lõi nhất.',
    'Rút ra bài học kinh nghiệm: Không chỉ dừng lại ở kỹ năng, em sẽ chú trọng vào việc đúc kết những tư duy chiến lược sau mỗi dự án.',
    'Ứng dụng công nghệ vào thực tế: Mở rộng phạm vi ứng dụng của AI và công nghệ số vào việc nghiên cứu và giải quyết các vấn đề chuyên môn trong tương lai.',
  ],
};
