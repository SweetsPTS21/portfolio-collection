import avatarUrl from '../../docs/avatar.png';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Phạm Thanh Trà',
  major: 'Luật học',
  university: 'Đại học Luật - Đại học Quốc gia Hà Nội',
  hobbies:
    'Nghe nhạc, xem phim, hát, tìm hiểu AI, đọc sách về pháp luật và tâm lý học',
  style: 'Tối giản, hiện đại, rõ ràng và thẩm mỹ',
  footer: '© 2026 • Phạm Thanh Trà • Digital Portfolio',
  avatarUrl,
};

export const about = {
  title: 'VỀ TÔI',
  kicker: 'Luật học - Tư duy số - Trí tuệ nhân tạo',
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
      title: 'Định hướng phát triển',
      text: 'Kết hợp nền tảng pháp lý với tư duy công nghệ, xây dựng phương pháp học tập và nghiên cứu dựa trên dữ liệu số.',
    },
    {
      title: 'Mục tiêu dài hạn',
      text: 'Trở thành người làm luật có khả năng tận dụng công nghệ, đặc biệt là AI, để nâng cao hiệu quả công việc nhưng vẫn đảm bảo tính chuẩn xác và đạo đức nghề nghiệp.',
    },
    {
      title: 'Mục tiêu của portfolio',
      text: 'Portfolio được thiết kế như một hệ thống thể hiện quá trình học tập logic theo trình tự: Xác định vấn đề - Cách tiếp cận - Kết quả thực hiện - Minh chứng đi kèm.',
    },
  ],
};

export const practicingSkills = {
  title: 'KỸ NĂNG',
  items: [
    {
      title: 'Tư duy làm việc có hệ thống',
      text: 'Xác định mục tiêu, xây dựng cấu trúc trước khi triển khai nội dung để bài làm mạch lạc và dễ kiểm soát hơn.',
    },
    {
      title: 'Khai thác và kiểm soát AI',
      text: 'Chủ động định hướng yêu cầu, kiểm tra lại nội dung và đảm bảo kết quả phù hợp với bối cảnh học tập.',
    },
    {
      title: 'Xử lý và chọn lọc thông tin',
      text: 'Đối chiếu, đánh giá và lựa chọn thông tin dựa trên độ tin cậy và bối cảnh sử dụng.',
    },
  ],
};

export const strengths = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Tổ chức thông tin số',
      text: 'Xây dựng hệ thống lưu trữ rõ ràng, phân loại tài liệu theo từng nhóm nội dung để tìm kiếm nhanh và chính xác.',
    },
    {
      title: 'Tìm kiếm và đánh giá nguồn',
      text: 'Lựa chọn tài liệu phù hợp, ưu tiên nguồn chính thống và có độ tin cậy cao, đặc biệt trong lĩnh vực pháp lý.',
    },
    {
      title: 'Sử dụng AI có kiểm soát',
      text: 'Đặt yêu cầu cụ thể, xác định rõ đầu ra mong muốn và kiểm tra lại nội dung trước khi sử dụng.',
    },
    {
      title: 'Trình bày và hệ thống hóa',
      text: 'Chuyển đổi thông tin phức tạp thành dạng dễ hiểu, có bố cục rõ ràng và phù hợp với người đọc.',
    },
  ],
};

export const tools = {
  title: 'Công cụ và nền tảng đã sử dụng',
  items: [
    {
      title: 'OneDrive, Dropbox',
      text: 'Lưu trữ và quản lý tài liệu học tập.',
    },
    {
      title: 'Nguồn học liệu',
      text: 'Thư viện số và các cổng thông tin pháp luật chính thống.',
    },
    {
      title: 'Claude, Copilot, Gemini',
      text: 'Công cụ AI hỗ trợ phát triển ý tưởng, rà soát và xử lý nội dung.',
    },
    {
      title: 'Canva, PowerPoint',
      text: 'Thiết kế nội dung và trình bày tài liệu trực quan.',
    },
    {
      title: 'Notion, Microsoft Teams',
      text: 'Làm việc nhóm, trao đổi thông tin và quản lý tiến độ.',
    },
  ],
};

export const projects = {
  title: 'DỰ ÁN',
  intro:
    'Danh sách bài tập được trình bày đầy đủ kèm nội dung và minh chứng. Người xem có thể chọn từng bài để theo dõi chi tiết.',
  chooser: 'Danh mục bài tập',
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
  title: 'TỔNG KẾT',
  intro:
    'Quá trình hoàn thiện portfolio không chỉ dừng lại ở việc hoàn thành 6 bài tập, mà còn là quá trình hệ thống lại toàn bộ cách học và cách tiếp cận thông tin trong môi trường số.',
  achievedTitle: 'Những kỹ năng cốt lõi đã phát triển',
  achievedItems: [
    {
      title: 'Tư duy làm việc có hệ thống',
      text: 'Hình thành thói quen xác định mục tiêu, xây dựng cấu trúc trước khi triển khai nội dung để bài làm mạch lạc hơn.',
    },
    {
      title: 'Khai thác và kiểm soát AI',
      text: 'Chuyển từ việc sử dụng AI bị động sang chủ động định hướng, biết đặt yêu cầu rõ ràng và kiểm tra lại nội dung.',
    },
    {
      title: 'Xử lý và chọn lọc thông tin',
      text: 'Chú trọng đối chiếu, đánh giá và lựa chọn thông tin dựa trên độ tin cậy và bối cảnh sử dụng.',
    },
  ],
  reflectionTitle: 'Điểm tâm đắc và thách thức lớn nhất',
  reflections: [
    {
      title: 'Điểm tâm đắc nhất',
      text: 'Sự thay đổi rõ rệt nằm ở cách tổ chức cả dữ liệu lẫn tư duy. Khi tài liệu được sắp xếp khoa học, việc xây dựng lập luận cũng trở nên chặt chẽ và rõ ràng hơn.',
    },
    {
      title: 'Thách thức lớn nhất',
      text: 'Khó khăn lớn nhất là cân bằng giữa việc sử dụng AI và giữ vững tư duy cá nhân, bởi nội dung do AI tạo ra cần được kiểm tra sâu theo bối cảnh pháp lý cụ thể.',
    },
  ],
  futureTitle: 'Hướng phát triển trong tương lai',
  futureIntro:
    'Trong các phiên bản tiếp theo, cấu trúc portfolio sẽ tiếp tục được điều chỉnh để:',
  futureItems: [
    'Tinh gọn nội dung nhưng tăng chiều sâu',
    'Tăng cường liên kết giữa lý thuyết và thực tiễn',
    'Hoàn thiện kỹ năng kiểm chứng thông tin',
  ],
};
