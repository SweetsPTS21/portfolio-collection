import avatarUrl from '../../docs/avatar.png';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Vũ Minh Ánh',
  tagline: 'DIGITAL PORTFOLIO: KHI TƯ DUY LUẬT HỌC CHẠM NGÕ KỶ NGUYÊN SỐ',
  motto: 'Rời vùng an toàn. Làm chủ công cụ. Kiến tạo giải pháp.',
  major: 'Luật học',
  university: 'Đại học Luật - ĐHQGHN',
  hobbies: 'Khám phá thế giới, xem phim',
  style: 'Tối giản',
  avatarUrl,
};

export const vision = {
  title: 'Tầm nhìn & Định hướng hành nghề',
  content: [
    'Điện ảnh cho em thế giới quan đa chiều, việc khám phá thế giới cho em tư duy mở, và ngành Luật rèn luyện cho em sự duy lý.',
    'Em định hướng trở thành một chuyên gia pháp lý hiện đại trong lĩnh vực pháp luật.',
    'Đi ra các nước mạnh về mảng luật pháp trên thế giới để trau dồi thêm kiến thức, kỹ năng, kinh nghiệm và trải nghiệm cũng như bước ra khỏi vòng an toàn của bản thân để ngắm nhìn thế giới.',
  ],
};

export const mission = {
  title: 'Sứ mệnh của Portfolio',
  content:
    'Trang web này đóng vai trò là một kho lưu trữ dữ liệu kiến thức thu nhỏ. Đây là nơi em hệ thống hóa toàn bộ tiến trình chuyển đổi số của bản thân: Học cách chuyển hóa dữ liệu thô thành tri thức pháp lý, thẩm định thông tin bằng tư duy phản biện và thực thi công nghệ một cách có trách nhiệm.',
};

export const strengths = {
  title: 'Điểm mạnh cốt lõi',
  items: [
    {
      title: 'Tư duy phản biện',
      text: 'Không tiếp nhận thông tin thụ động. Luôn đặt câu hỏi và kiểm tra tính chính xác mọi dữ kiện thô trước khi đưa vào lập luận.',
    },
    {
      title: 'Tối ưu công nghệ',
      text: 'Biến công cụ số thành đòn bẩy tăng tốc độ nghiên cứu pháp lý.',
    },
    {
      title: 'Liêm chính tuyệt đối',
      text: 'Đề cao tính nguyên bản và chuẩn mực khắt khe trong trích dẫn.',
    },
  ],
};

export const toolsets = {
  title: 'Hệ sinh thái công cụ',
  items: [
    {
      title: 'Toán tử tìm kiếm (Google Scholar)',
      text: 'Truy xuất tài liệu, án lệ gốc và lọc sạch tin rác.',
    },
    {
      title: 'AI tạo sinh (Gemini, Claude)',
      text: 'Làm "đối tác phản biện" để rà soát lỗ hổng logic.',
    },
    {
      title: 'Google Workspace',
      text: 'Quản trị lưu trữ, phân quyền bảo mật và làm việc nhóm.',
    },
    {
      title: 'Canva & CapCut',
      text: 'Trực quan hóa các học thuyết pháp lý thành hình ảnh, video số.',
    },
  ],
};

export const projects = {
  title: 'Dự án',
  intro:
    'Đây là quá trình em tiếp cận công nghệ số và AI dưới góc nhìn của một sinh viên luật — ưu tiên tính logic, khả năng kiểm chứng và tư duy phản biện hơn là phụ thuộc hoàn toàn vào công nghệ.',
  items: [
    {
      chapter: 1,
      title: 'Máy tính & Thiết bị ngoại vi',
      content:
        'Tìm hiểu cấu trúc máy tính và cách dữ liệu được xử lý trong môi trường số.',
      process:
        'Hệ thống hóa kiến thức dưới dạng sơ đồ và ghi chú ngắn để dễ áp dụng vào việc quản lý tài liệu học tập hằng ngày.',
      pdf: bt1Pdf,
    },
    {
      chapter: 2,
      title: 'Khai thác dữ liệu và thông tin',
      content:
        'Rèn luyện kỹ năng tìm kiếm và đánh giá thông tin trên Internet.',
      process:
        'Sử dụng tìm kiếm nâng cao để tra cứu án lệ và tài liệu pháp lý, đồng thời tập thói quen đối chiếu nhiều nguồn trước khi sử dụng.',
      pdf: bt2Pdf,
    },
    {
      chapter: 3,
      title: 'Tổng quan trí tuệ nhân tạo',
      content: 'Tiếp cận khái niệm, xu hướng và giới hạn của AI hiện đại.',
      process:
        'Thử nghiệm dùng AI để phân tích nội dung học thuật, sau đó tự kiểm chứng lại nhằm nhận ra các điểm thiếu logic hoặc sai lệch thông tin.',
      pdf: bt3Pdf,
    },
    {
      chapter: 4,
      title: 'Giao tiếp trong môi trường số',
      content:
        'Xây dựng kỹ năng làm việc và cộng tác trên nền tảng trực tuyến.',
      process:
        'Tham gia phân chia tài liệu, phối hợp chỉnh sửa nội dung nhóm và duy trì trao đổi công việc trên nền tảng số.',
      pdf: bt4Pdf,
    },
    {
      chapter: 5,
      title: 'Sáng tạo nội dung số',
      content:
        'Ứng dụng AI tạo sinh trong thiết kế và xây dựng nội dung học tập.',
      process:
        'Em tự xây dựng ý tưởng và định hướng nội dung, sử dụng AI để hỗ trợ phản biện, minh họa và tối ưu cách trình bày.',
      pdf: bt5Pdf,
    },
    {
      chapter: 6,
      title: 'An toàn và Liêm chính học thuật',
      content:
        'Nâng cao nhận thức về đạo đức số và trách nhiệm khi sử dụng AI.',
      process:
        'Em chủ động trích dẫn nguồn minh bạch, kiểm tra lại dữ liệu từ AI và hạn chế chia sẻ thông tin cá nhân trên các nền tảng mở.',
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  doubleSword: {
    title: 'Tổng kết',
    content:
      'AI giúp sinh viên luật xử lý hồ sơ nhanh hơn, nhưng đồng thời làm suy giảm khả năng đọc sâu và tư duy phản biện độc lập. Công nghệ chỉ là công cụ tăng tốc — tư duy độc lập mới quyết định giá trị pháp lý. Học cách hoài nghi kết quả do máy kết xuất là kỹ năng sống còn của người làm luật hiện đại.',
  },
  coreValues: {
    title: 'Giá trị cốt lõi tích lũy',
    items: [
      {
        title: 'Năng lực quản trị thông tin',
        text: 'Chuyển đổi từ mô hình lưu trữ phân tán sang quản lý tập trung và tối giản, tối ưu tốc độ xử lý tác vụ nghiên cứu.',
      },
      {
        title: 'Kỹ năng giao tiếp số',
        text: 'Thành thục kỹ năng giao tiếp và vận hành dự án số trong môi trường đa nền tảng.',
      },
    ],
  },
  insights: {
    title: 'Điểm đắc ý và Thách thức lớn nhất',
    highlight: {
      title: 'Điểm đắc ý',
      text: 'Thiết lập thành công một hệ thống trích dẫn nguồn minh bạch và tự động. Điều này tạo ra nền tảng vững chắc cho sự túc và chuyên nghiệp trong các công trình nghiên cứu khoa học pháp lý sau này.',
    },
    challenge: {
      title: 'Thách thức lớn nhất',
      text: 'Giữ vững triết lý Tối giản. Trong một không gian mạng đầy rẫy công cụ và thông tin, việc kiềm chế sự rườm rà, loại bỏ các hiệu ứng phức tạp để website tập trung hoàn toàn vào nội dung cốt lõi và tính logic của lập luận là một bài toán cân não. Portfolio này chính là câu trả lời của em cho bài toán đó.',
    },
  },
};
