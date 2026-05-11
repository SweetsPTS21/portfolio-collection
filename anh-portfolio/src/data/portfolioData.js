import avatarUrl from '../../docs/avatar.png';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Trần Lan Anh',
  major: 'Luật học',
  university: 'Đại học Luật - Đại học Quốc gia Hà Nội',
  hobbies:
    'Nghe nhạc, xem phim, hát, tìm hiểu về công nghệ trí tuệ nhân tạo, đọc các nội dung liên quan đến pháp luật và tâm lý học.',
  style: 'Tối giản, hiện đại, chú trọng sự rõ ràng và tính thẩm mỹ trong cách trình bày.',
  footer: '© 2026 • Trần Lan Anh • Digital Portfolio',
  avatarUrl,
};

export const about = {
  title: 'ABOUT ME',
  kicker: 'Luật học - công nghệ số - AI có kiểm soát',
  profile: [
    ['Họ và tên', personalInfo.name],
    ['Ngành học', personalInfo.major],
    ['Trường', personalInfo.university],
    ['Sở thích', personalInfo.hobbies],
    ['Phong cách cá nhân', personalInfo.style],
  ],
  orientation:
    'Trong bối cảnh công nghệ số ngày càng chi phối cách con người tiếp cận tri thức, định hướng của tôi là kết hợp nền tảng pháp lý với tư duy công nghệ.',
  method: [
    'Thông tin được chọn lọc kỹ lưỡng',
    'Quy trình xử lý có hệ thống',
    'Kết quả có thể kiểm chứng rõ ràng',
  ],
  portfolioPurpose:
    'Portfolio này không chỉ đơn thuần là nơi lưu trữ bài tập, mà được thiết kế như một hệ thống thể hiện quá trình học tập một cách logic.',
  flow: 'Xác định vấn đề -> Cách tiếp cận -> Kết quả thực hiện -> Minh chứng đi kèm',
};

export const strengths = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Tổ chức thông tin số',
      text: 'Biết cách xây dựng hệ thống lưu trữ rõ ràng, phân loại tài liệu theo từng nhóm nội dung, giúp việc tìm kiếm trở nên nhanh chóng và chính xác.',
    },
    {
      title: 'Tìm kiếm và đánh giá nguồn thông tin',
      text: 'Có khả năng lựa chọn tài liệu phù hợp, ưu tiên nguồn chính thống và có độ tin cậy cao, đặc biệt trong lĩnh vực pháp lý.',
    },
    {
      title: 'Sử dụng AI có kiểm soát',
      text: 'Biết cách đặt yêu cầu cụ thể, xác định rõ đầu ra mong muốn và kiểm tra lại nội dung trước khi sử dụng.',
    },
    {
      title: 'Trình bày và hệ thống hóa nội dung',
      text: 'Có khả năng chuyển đổi thông tin phức tạp thành dạng dễ hiểu, có bố cục rõ ràng và phù hợp với người đọc.',
    },
  ],
};

export const principles = {
  title: 'Nguyên tắc thực hiện bài tập',
  items: [
    'Ưu tiên tính rõ ràng',
    'Đảm bảo tính minh bạch',
    'Kiểm soát việc sử dụng AI',
  ],
};

export const tools = {
  title: 'Công cụ và nền tảng sử dụng',
  items: [
    ['Lưu trữ và quản lý tài liệu', 'OneDrive, Dropbox'],
    ['Nguồn học liệu', 'Thư viện số, các cổng thông tin pháp luật chính thống'],
    ['Công cụ AI', 'Claude, Copilot, Gemini'],
    ['Thiết kế nội dung', 'Canva, PowerPoint'],
    ['Làm việc nhóm', 'Notion, Microsoft Teams'],
  ],
};

export const projects = {
  title: 'PROJECT',
  intro:
    'Danh sách bài tập được trình bày đầy đủ kèm theo nội dung và hình ảnh minh họa. Người xem có thể chọn từng bài để theo dõi chi tiết.',
  items: [
    {
      title: 'Bài 1: Máy tính và thiết bị ngoại vi',
      description:
        'Trình bày các thành phần cơ bản của máy tính và vai trò của các thiết bị ngoại vi trong quá trình sử dụng.',
      pdf: bt1Pdf,
    },
    {
      title: 'Bài 2: Khai thác dữ liệu và thông tin',
      description:
        'Thực hành tìm kiếm thông tin, đánh giá độ tin cậy của nguồn và cách sử dụng thông tin một cách hợp lý.',
      pdf: bt2Pdf,
    },
    {
      title: 'Bài 3: Tổng quan về trí tuệ nhân tạo',
      description:
        'Giới thiệu về AI, các ứng dụng phổ biến và những vấn đề cần lưu ý khi sử dụng trong học tập.',
      pdf: bt3Pdf,
    },
    {
      title: 'Bài 4: Giao tiếp và hợp tác trong môi trường số',
      description:
        'Tập trung vào kỹ năng làm việc nhóm online và cách tương tác hiệu quả trên nền tảng số.',
      pdf: bt4Pdf,
    },
    {
      title: 'Bài 5: Sáng tạo nội dung số',
      description:
        'Thực hành xây dựng nội dung số từ ý tưởng đến thiết kế, đồng thời chú ý đến yếu tố bản quyền.',
      pdf: bt5Pdf,
    },
    {
      title: 'Bài 6: An toàn và liêm chính học thuật',
      description:
        'Đề cập đến bảo mật thông tin cá nhân và việc sử dụng tài liệu một cách trung thực trong học tập.',
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  title: 'CONCLUSION',
  intro:
    'Quá trình hoàn thiện portfolio không chỉ dừng lại ở việc hoàn thành 6 bài tập, mà còn là quá trình hệ thống lại toàn bộ cách học và cách tiếp cận thông tin trong môi trường số.',
  skillsTitle: 'Những kỹ năng cốt lõi đã phát triển',
  skills: [
    {
      title: 'Tư duy làm việc có hệ thống',
      text: 'Hình thành thói quen xác định mục tiêu, xây dựng cấu trúc trước khi triển khai nội dung.',
    },
    {
      title: 'Khai thác và kiểm soát AI',
      text: 'Chuyển từ việc sử dụng AI một cách bị động sang chủ động định hướng.',
    },
    {
      title: 'Xử lý và chọn lọc thông tin',
      text: 'Chú trọng việc đối chiếu, đánh giá và lựa chọn thông tin dựa trên độ tin cậy và bối cảnh sử dụng.',
    },
  ],
  reflections: [
    {
      title: 'Điểm tâm đắc nhất',
      text: 'Sự thay đổi rõ rệt nằm ở cách tổ chức cả dữ liệu lẫn tư duy.',
    },
    {
      title: 'Thách thức lớn nhất',
      text: 'Khó khăn lớn nhất là cân bằng giữa việc sử dụng AI và việc giữ vững tư duy cá nhân.',
    },
  ],
  futureTitle: 'Định hướng phát triển trong thời gian tới',
  future: [
    'Tinh gọn nội dung nhưng tăng chiều sâu',
    'Tăng cường liên kết giữa lý thuyết và thực tiễn',
    'Hoàn thiện kỹ năng kiểm chứng thông tin',
    'Xây dựng quy trình kiểm tra rõ ràng hơn khi sử dụng AI và tài liệu số',
  ],
};
