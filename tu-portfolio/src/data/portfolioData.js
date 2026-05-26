export const visualAssets = {
  background: '/assets/generated/sweet-legal-background.png',
  cardTexture: '/assets/generated/card-paper-texture.png',
  projectStickerSheet: '/assets/generated/project-sticker-sheet.png',
  conclusionPanel: '/assets/generated/conclusion-soft-panel.png',
  decorations: [
    {
      id: 'flower-sprig',
      src: '/assets/decor/decor-flower-sprig.png',
      alt: '',
      className: 'background-scene__decor--flower-sprig',
    },
    {
      id: 'law-book',
      src: '/assets/decor/decor-law-book.png',
      alt: '',
      className: 'background-scene__decor--law-book',
    },
    {
      id: 'folder',
      src: '/assets/decor/decor-folder.png',
      alt: '',
      className: 'background-scene__decor--folder',
    },
    {
      id: 'laptop',
      src: '/assets/decor/decor-laptop.png',
      alt: '',
      className: 'background-scene__decor--laptop',
    },
    {
      id: 'ai-sparkle',
      src: '/assets/decor/decor-ai-sparkle.png',
      alt: '',
      className: 'background-scene__decor--ai-sparkle',
    },
    {
      id: 'shield',
      src: '/assets/decor/decor-shield.png',
      alt: '',
      className: 'background-scene__decor--shield',
    },
    {
      id: 'paperclip-note',
      src: '/assets/decor/decor-paperclip-note.png',
      alt: '',
      className: 'background-scene__decor--paperclip-note',
    },
    {
      id: 'scales',
      src: '/assets/decor/decor-scales.png',
      alt: '',
      className: 'background-scene__decor--scales',
    },
  ],
};

export const portfolioData = {
  visualAssets,
  profile: {
    name: 'Lê Thị Cẩm Tú',
    avatar: '/assets/avatar.jpg',
    major: 'Luật Kinh Doanh',
    school: 'Đại học Luật - Đại học Quốc gia Hà Nội',
    hobbies:
      'Khám phá công nghệ mới, đọc sách, nghe podcast về công nghệ, pháp luật, phát triển bản thân, chụp ảnh, trải nghiệm ẩm thực và thiết kế slide học thuật.',
    personality: ['Sáng tạo', 'Cá nhân hóa', 'Thân thiện', 'Dễ tiếp cận'],
    intro:
      'Đây không phải là một kho lưu trữ tài liệu khô khan, mà là một không gian mở nơi kiến thức pháp lý và công nghệ được kể lại bằng ngôn ngữ của sự sáng tạo, tính thẩm mỹ và tinh thần kết nối chân thành.',
    goal: 'Trở thành chuyên gia pháp chế doanh nghiệp kiêm người sáng tạo nội dung pháp lý, dùng tư duy thẩm mỹ và công nghệ để biến điều luật phức tạp thành sản phẩm có hồn, đẹp mắt và dễ hiểu.',
    portfolioGoal:
      'Portfolio hệ thống hóa quá trình thực hành kỹ năng số và chứng minh rằng sinh viên Luật có thể làm chủ công nghệ bằng tư duy nghệ thuật, rành mạch và đầy cảm hứng.',
  },
  principles: [
    {
      title: 'Giải pháp hiệu quả',
      description:
        'Mỗi dự án bắt đầu từ mục tiêu rõ ràng, thông tin chính xác và cách tổ chức dễ theo dõi.',
      icon: 'BadgeCheck',
    },
    {
      title: 'Giao diện tinh tế',
      description:
        'Nội dung học thuật được trình bày bằng card mềm, màu pastel và khoảng thở rộng để người xem muốn đọc tiếp.',
      icon: 'Palette',
    },
    {
      title: 'Tương tác chân thành',
      description:
        'Cách kể chuyện gần gũi, tôn trọng bản quyền, minh bạch quá trình dùng công cụ số và AI.',
      icon: 'HeartHandshake',
    },
  ],
  tools: [
    'File Explorer',
    'Google Drive',
    'Google Scholar',
    'Thư viện trường',
    'ChatGPT',
    'Google Gemini',
    'Google Meet',
    'Zoom',
    'Canva',
    'AI Image Tools',
  ],
  projects: [
    {
      id: 'bt1',
      chapter: 'Chương 1',
      title: 'Tổ chức, sắp xếp và lưu trữ dữ liệu',
      objective:
        'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục trên hệ điều hành.',
      process:
        'Cẩm Tú coi việc sắp xếp máy tính như trang trí lại căn phòng làm việc số: tạo thư mục gốc, phân chia tài liệu theo môn học, dự án cá nhân và kho podcast, sau đó dọn dẹp dữ liệu thừa để không gian luôn thoáng đãng.',
      pdf: '/docs/bt1.pdf',
      icon: 'FolderKanban',
      accent: '#EF7C82',
      visual: {
        image: visualAssets.projectStickerSheet,
        alt: 'Chương 1 visual sticker về thư mục, tài liệu và quản lý dữ liệu',
        motif: 'folder',
      },
    },
    {
      id: 'bt2',
      chapter: 'Chương 2',
      title: 'Khai thác dữ liệu và thông tin',
      objective:
        'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ nguồn đáng tin cậy.',
      process:
        'Tú tra cứu cơ sở dữ liệu thư viện và tạp chí khoa học mở, chọn lọc 10 tài liệu tham khảo, đánh giá độ tin cậy theo tác giả, nhà xuất bản, tính cập nhật và trình bày trích dẫn theo Harvard.',
      pdf: '/docs/bt2.pdf',
      icon: 'SearchCheck',
      accent: '#D8D99A',
      visual: {
        image: visualAssets.projectStickerSheet,
        alt: 'Chương 2 visual sticker về tìm kiếm học thuật và trích dẫn nguồn',
        motif: 'research',
      },
    },
    {
      id: 'bt3',
      chapter: 'Chương 3',
      title: 'Tổng quan về trí tuệ nhân tạo',
      objective:
        'Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng mô hình ngôn ngữ lớn trong học tập.',
      process:
        'Tú thử nghiệm prompt để tóm tắt án lệ kinh doanh, giải thích khái niệm luật phức tạp và tạo câu hỏi ôn tập tương tác, từ đó học cách biến AI thành cộng sự học thuật ăn ý.',
      pdf: '/docs/bt3.pdf',
      icon: 'Sparkles',
      accent: '#F3B6C2',
      visual: {
        image: visualAssets.projectStickerSheet,
        alt: 'Chương 3 visual sticker về AI, prompt và cộng sự học thuật',
        motif: 'ai',
      },
    },
    {
      id: 'bt4',
      chapter: 'Chương 4',
      title: 'Giao tiếp và hợp tác trong môi trường số',
      objective:
        'Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
      process:
        'Tú cùng nhóm chuẩn bị chương trình nghị sự, tổ chức buổi họp Google Meet 30 phút, phân công điều phối và ghi chép, rồi thiết kế lại biên bản để chia sẻ trực quan.',
      pdf: '/docs/bt4.pdf',
      icon: 'UsersRound',
      accent: '#EBD9C4',
      visual: {
        image: visualAssets.projectStickerSheet,
        alt: 'Chương 4 visual sticker về họp nhóm và hợp tác trực tuyến',
        motif: 'meeting',
      },
    },
    {
      id: 'bt5',
      chapter: 'Chương 5',
      title: 'Sáng tạo nội dung số',
      objective:
        'Thành thạo việc sử dụng công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ sáng tạo nội dung số.',
      process:
        'Đây là phần Tú yêu thích nhất: lên kịch bản thuyết trình pháp luật doanh nghiệp, tạo hình minh họa độc quyền, lắp ráp slide trên Canva và phân tích vai trò, ưu nhược điểm, đạo đức khi dùng AI tạo sinh.',
      pdf: '/docs/bt5.pdf',
      icon: 'Presentation',
      accent: '#EF7C82',
      featured: true,
      visual: {
        image: visualAssets.projectStickerSheet,
        alt: 'Chương 5 visual sticker về sáng tạo nội dung số và thiết kế slide',
        motif: 'content',
      },
    },
    {
      id: 'bt6',
      chapter: 'Chương 6',
      title: 'An toàn và liêm chính học thuật trong môi trường số',
      objective:
        'Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập, nghiên cứu.',
      process:
        'Tú nghiên cứu quy định về liêm chính học thuật, ghi lại minh bạch cách đặt câu lệnh và tự chỉnh sửa lập luận, sau đó xây dựng 7 nguyên tắc đạo đức cá nhân bằng infographic dễ tiếp cận.',
      pdf: '/docs/bt6.pdf',
      icon: 'ShieldCheck',
      accent: '#D8D99A',
      featured: true,
      flip: true,
      visual: {
        image: visualAssets.projectStickerSheet,
        alt: 'Chương 6 visual sticker về an toàn số và liêm chính học thuật',
        motif: 'integrity',
      },
    },
  ],
  conclusion: {
    opening:
      'Việc tự tay vun đắp không gian số này giúp Tú nhận ra rằng khi đặt tình yêu, tính thẩm mỹ và sự chân thành vào công việc, kể cả tệp dữ liệu hay dòng mã cũng có thể trở nên có sức sống.',
    lessons: [
      'Làm chủ nghệ thuật giao tiếp với trí tuệ nhân tạo thông qua thiết kế câu lệnh tối ưu.',
      'Rèn kỹ năng thẩm định thông tin sắc bén, biết chọn nguồn học thuật chuẩn xác.',
      'Tự tin điều phối, kết nối và cộng tác trong môi trường số chuyên nghiệp.',
    ],
    proudPoints: [
      'Mang được phong cách thiết kế tinh tế, thân thiện và cá tính thích chia sẻ vào từng phần của dự án.',
      'Biến các bài tập đúng yêu cầu thành sản phẩm học thuật đẹp mắt, có khả năng truyền cảm hứng.',
    ],
    challenges: [
      'Phải liên tục đối chiếu văn bản gốc để không làm sai lệch tính chính xác pháp lý.',
      'Cân bằng giữa sáng tạo thị giác và sự nghiêm túc cần có của nội dung Luật Kinh Doanh.',
    ],
    futureDirection:
      'Mang theo bộ kỹ năng số và tư duy thẩm mỹ này, Tú định hướng trở thành một chuyên gia pháp lý hiện đại, một người kể chuyện pháp luật dễ gần, giúp doanh nghiệp và cộng đồng tiếp cận pháp luật tự nhiên và hiệu quả hơn.',
    thanks:
      'Cảm ơn thầy cô, bạn bè đồng hành và những người đã ghé thăm góc nhỏ này. Hy vọng portfolio mang lại một chút cảm hứng ngọt ngào trong ngày hôm nay.',
  },
};
