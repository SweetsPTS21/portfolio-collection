import avatarUrl from '../../docs/avatar.png';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Vũ Duy Đức Toàn',
  major: 'Luật CLC',
  university: 'Trường Đại học Luật - Đại học Quốc gia Hà Nội',
  hobbies: 'Liên quân, cờ vua, học tập.',
  style: 'Hiền lành, chan hòa, dễ gần.',
  footer: '© 2026 • Vũ Duy Đức Toàn • Digital Portfolio',
  avatarUrl,
};

export const about = {
  title: 'ABOUT ME',
  kicker: 'Hành trình chuyển đổi số của một cá nhân',
  profile: [
    ['Họ và tên', personalInfo.name],
    ['Ngành học', personalInfo.major],
    ['Trường', personalInfo.university],
    ['Sở thích', personalInfo.hobbies],
    ['Phong cách cá nhân', personalInfo.style],
  ],
  orientation:
    'Trong quá trình học tại Trường Đại học Luật - Đại học Quốc gia Hà Nội, em hướng tới việc phát triển đồng đều tư duy pháp lý, kỹ năng phản biện và khả năng sử dụng ngoại ngữ trong môi trường học thuật quốc tế.',
  method: [
    'Nâng cao kiến thức pháp lý về luật hình sự, luật dân sự và ngoại ngữ pháp lý',
    'Kết hợp học tập trên giảng đường với tự nghiên cứu và thực hành thực tế',
    'Rèn luyện giao tiếp, làm việc nhóm và quản lý thời gian',
  ],
  portfolioPurpose:
    'Portfolio này ghi lại quá trình học tập, phát triển tư duy và khả năng thích nghi với môi trường số. Đây không chỉ là nơi tổng hợp bài tập, mà còn thể hiện cách em tiếp cận tri thức một cách hệ thống, chủ động và có trách nhiệm.',
  flow: 'Chọn lọc thông tin -> Phân tích -> Tổ chức dữ liệu -> Ứng dụng công nghệ vào học tập',
};

export const strengths = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Tư duy pháp lý và phản biện',
      text: 'Chủ động xây dựng nền tảng chuyên môn vững chắc, biết đặt câu hỏi và đánh giá vấn đề từ nhiều góc nhìn học thuật.',
    },
    {
      title: 'Khai thác dữ liệu có chọn lọc',
      text: 'Biết sử dụng cú pháp tìm kiếm nâng cao, bộ lọc thời gian và định dạng file để tiếp cận nguồn tin chính thống, hạn chế dữ liệu rác.',
    },
    {
      title: 'Ứng dụng AI có giới hạn đạo đức',
      text: 'Xem AI là công cụ hỗ trợ xử lý thông tin, đồng thời giữ quyền quyết định, đánh giá bối cảnh và trách nhiệm học thuật ở phía con người.',
    },
    {
      title: 'Hợp tác và sáng tạo nội dung số',
      text: 'Có khả năng phối hợp nhóm trên nền tảng số, tổ chức tài liệu chung và dùng công cụ thiết kế, biên tập để trình bày nội dung dễ hiểu.',
    },
  ],
};

export const principles = {
  title: 'Nguyên tắc thực hiện bài tập',
  items: [
    'Học tập chủ động',
    'Kiểm chứng nguồn tin',
    'Giữ liêm chính học thuật',
  ],
};

export const tools = {
  title: 'Công cụ và nền tảng sử dụng',
  items: [
    ['Lưu trữ và quản lý tài liệu', 'Google Drive, Google Workspace'],
    ['Nguồn học liệu', 'Cổng thông tin điện tử Chính phủ, tài liệu pháp luật chính thống'],
    ['Công cụ AI', 'Gemini và các công cụ hỗ trợ học tập'],
    ['Thiết kế nội dung', 'Canva, CapCut'],
    ['Kỹ năng cá nhân', 'Cờ vua, làm việc nhóm, quản lý thời gian'],
  ],
};

export const projects = {
  title: 'PROJECT',
  intro:
    'Dưới đây là 6 mảnh ghép tương ứng với 6 chương học, thể hiện quá trình biến công nghệ từ một khái niệm trừu tượng thành công cụ thực chiến.',
  items: [
    {
      title: 'Bài tập 1 - Chương 1: Máy tính và các thiết bị ngoại vi',
      description:
        'Xây dựng không gian làm việc số tối ưu, sắp xếp tài liệu, hình ảnh và đề cương có hệ thống để thuận tiện tìm kiếm lại dữ liệu.',
      pdf: bt1Pdf,
    },
    {
      title: 'Bài tập 2 - Chương 2: Khai thác dữ liệu và thông tin',
      description:
        'Rèn luyện kỹ năng bóc tách dữ liệu gốc, đánh giá nguồn tin học thuật và pháp lý bằng cú pháp tìm kiếm nâng cao, bộ lọc thời gian và định dạng file.',
      pdf: bt2Pdf,
    },
    {
      title: 'Bài tập 2 - Chương 3: Tổng quan về trí tuệ nhân tạo (AI)',
      description:
        'Phân tích AI như công cụ hỗ trợ xử lý thông tin: có thể quét và tóm tắt nhanh, nhưng không thay thế được sự thấu cảm, bối cảnh và quyết định đạo đức của con người.',
      pdf: bt3Pdf,
    },
    {
      title: 'Bài tập 3 - Chương 4: Giao tiếp và hợp tác trong môi trường số',
      description:
        'Xây dựng văn hóa làm việc nhóm online hiệu quả, kỷ luật và thân thiện thông qua phân vai, chia sẻ Google Drive và góp ý trên Google Docs.',
      pdf: bt4Pdf,
    },
    {
      title: 'Bài tập 2 - Chương 5: Sáng tạo nội dung số',
      description:
        'Tích hợp Gemini, Canva và CapCut để sản xuất video học thuật ngắn gọn, dễ hiểu, có hình ảnh minh họa và phụ đề tự động.',
      pdf: bt5Pdf,
    },
    {
      title: 'Bài tập 4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số',
      description:
        'Khẳng định tư duy độc lập và ranh giới đạo đức khi dùng AI, tránh phó mặc học thuật cho các câu trả lời trơn tru nhưng thiếu kiểm chứng.',
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  title: 'CONCLUSION',
  intro:
    'Quá trình xây dựng Portfolio này giống như đang giải một thế cờ thú vị: từ những bước đầu làm quen với thiết kế web đến lúc hệ thống hóa toàn bộ kiến thức, em đã rèn luyện được sự kiên nhẫn và tư duy sắp xếp logic.',
  skillsTitle: 'Những kỹ năng cốt lõi đã phát triển',
  skills: [
    {
      title: 'Tư duy sắp xếp logic',
      text: 'Biết hệ thống hóa kiến thức, tổ chức nội dung và biến một sản phẩm công nghệ khô cứng thành dấu ấn cá nhân.',
    },
    {
      title: 'Kết hợp con người và công nghệ',
      text: 'Hiểu rằng AI giỏi thu thập và tính toán, nhưng con người mới gắn kết thông tin bằng đạo đức, tình cảm và sự thấu hiểu xã hội.',
    },
    {
      title: 'Kỷ luật học tập và làm việc nhóm',
      text: 'Biết cân bằng thời gian giữa học chuyên ngành, làm đồ án và giải trí bằng cách áp dụng kỷ luật cá nhân cùng kỹ năng phối hợp nhóm.',
    },
  ],
  reflections: [
    {
      title: 'Điểm tâm đắc nhất',
      text: 'Điểm tâm đắc nhất là thể hiện được sự độc lập trong tư duy ở Chương 6, không chạy theo công nghệ một cách mù quáng mà thiết lập màng lọc an toàn cho chất lượng học thuật.',
    },
    {
      title: 'Thách thức lớn nhất',
      text: 'Thách thức lớn nhất là cân bằng thời gian giữa học tập chuyên ngành, làm đồ án và những trận game giải trí cùng bạn bè.',
    },
  ],
  futureTitle: 'Định hướng phát triển trong thời gian tới',
  future: [
    'Tiếp tục phát triển tư duy pháp lý và phản biện',
    'Nâng cao ngoại ngữ pháp lý trong môi trường học thuật quốc tế',
    'Ứng dụng công nghệ số có trách nhiệm vào học tập',
    'Duy trì liêm chính học thuật khi sử dụng AI',
  ],
};
