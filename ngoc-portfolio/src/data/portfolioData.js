// src/data/portfolioData.js
// Single source of truth — lấy từ ngoc-portfolio/docs/portfolio.md

export const personalInfo = {
  name: 'Lê Phương Bảo Ngọc',
  heroTitle: 'Welcome to my portfolio',
  heroSubtitle: 'Dự án cá nhân của Bảo Ngọc',
  intro:
    'Xin chào! Hiện mình đang là sinh viên năm thứ 2 chuyên ngành Luật Học. Bên cạnh niềm đam mê với các bộ luật và quy định pháp lý, mình luôn dành sự quan tâm đặc biệt cho dòng chảy của công nghệ. Dưới đây là một số thông tin về mình.',
  major: 'Luật học',
  university: 'Trường Đại học Luật — Đại học Quốc gia Hà Nội',
  hobbies: ['Hát', 'Chơi nhạc cụ', 'Đi du lịch', 'Nuôi mèo'],
  learningGoal:
    'Trong kỷ nguyên số, mình tin rằng một Luật sư tương lai không chỉ cần nắm vững cán cân công lý mà còn phải làm chủ được công cụ công nghệ. Mục tiêu của mình là tối ưu hóa kỹ năng nghiên cứu pháp luật thông qua AI và các nền tảng số, nhằm nâng cao hiệu quả và tính chính xác trong công việc.',
  portfolioGoal:
    'Portfolio này không chỉ là nơi lưu trữ các sản phẩm học thuật của môn học mà còn là minh chứng cho quá trình chuyển mình, từ một người học Luật truyền thống sang một cá nhân có tư duy số. Đây là không gian để mình kết nối, chia sẻ và học hỏi.',
};

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'Máy tính và Thiết bị ngoại vi',
    goal: 'Hiểu rõ cấu tạo hệ thống máy tính để tối ưu hóa không gian làm việc số.',
    process:
      'Tìm hiểu và lựa chọn cấu hình máy tính phù hợp với đặc thù ngành Luật — cần đa nhiệm cao, lưu trữ văn bản lớn và màn hình bảo vệ mắt.',
    highlight:
      'Thay vì chỉ liệt kê linh kiện, mình tập trung vào việc thiết lập một "văn phòng ảo" an toàn và hiệu quả.',
  },
  {
    id: 2,
    number: '02',
    title: 'Khai thác dữ liệu và Thông tin',
    goal: 'Kỹ năng truy vấn thông tin chính xác trên Internet.',
    process:
      'Sử dụng các toán tử tìm kiếm nâng cao để lọc thông tin từ các cổng thông tin Chính phủ và các thư viện pháp luật trực tuyến.',
    highlight:
      'Áp dụng quy trình kiểm chứng nguồn tin để đảm bảo các văn bản quy phạm pháp luật luôn là phiên bản mới nhất.',
  },
  {
    id: 3,
    number: '03',
    title: 'Tổng quan về Trí tuệ nhân tạo (AI)',
    goal: 'Nắm bắt cơ chế hoạt động và tiềm năng của AI.',
    process:
      'Nghiên cứu về mô hình ngôn ngữ lớn (LLM) và cách chúng có thể hỗ trợ tóm tắt các bản án dài hàng trăm trang.',
    highlight:
      'AI không thay thế Luật sư, nhưng Luật sư biết dùng AI sẽ thay thế những người không biết.',
  },
  {
    id: 4,
    number: '04',
    title: 'Giao tiếp và Hợp tác trong môi trường số',
    goal: 'Sử dụng các công cụ làm việc nhóm trực tuyến.',
    process:
      'Cùng các cộng sự thực hiện dự án nghiên cứu qua Google Workspace và Slack.',
    highlight:
      'Thể hiện khả năng điều phối và quản lý xung đột trong không gian số.',
  },
  {
    id: 5,
    number: '05',
    title: 'Sáng tạo nội dung số với AI',
    goal: 'Ứng dụng Generative AI để hỗ trợ sáng tạo.',
    process:
      'Sử dụng các công cụ AI để thiết kế hình ảnh minh họa cho các thuật ngữ pháp lý khô khan, giúp người dân dễ tiếp cận hơn với pháp luật.',
    highlight:
      'Quy trình: Viết Prompt → Tinh chỉnh → Kiểm tra bản quyền hình ảnh.',
  },
  {
    id: 6,
    number: '06',
    title: 'An toàn và Liêm chính học thuật trong môi trường số',
    goal: 'Xây dựng bộ quy tắc ứng xử AI trách nhiệm.',
    process:
      'Phân tích các vấn đề đạo đức khi sử dụng AI trong học tập và nghiên cứu luật pháp.',
    highlight:
      'Nhấn mạnh việc trích dẫn nguồn khi AI tham gia vào quá trình tạo nội dung và bảo mật dữ liệu cá nhân.',
  },
];

export const conclusion = {
  experience: {
    label: 'Trải nghiệm cá nhân',
    text: 'Hành trình xây dựng Portfolio này là một chuyến du hành đầy bất ngờ. Từ những bỡ ngỡ ban đầu khi làm quen với giao diện web, mình đã học được cách sắp xếp tư duy một cách logic và trực quan.',
  },
  knowledge: {
    label: 'Kiến thức & Kỹ năng quan trọng',
    text: 'Điều quý giá nhất mình nhận được không chỉ là cách dùng một công cụ AI cụ thể, mà là khả năng thích nghi. Mình đã hiểu rằng công nghệ là đòn bẩy, còn kiến thức chuyên môn Luật là điểm tựa.',
  },
  challenge: {
    label: 'Thách thức & Tái bút',
    challengeText:
      'Thách thức: Việc cá nhân hóa các sản phẩm công nghệ sao cho vẫn giữ được sự nghiêm túc của ngành Luật.',
    highlightText:
      'Tái bút: Mình đã tạo ra được một hồ sơ số chuyên nghiệp, nơi mình tự hào giới thiệu bản thân với nhà tuyển dụng trong tương lai.',
  },
};
