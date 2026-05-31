export const navigationRoutes = [
  { path: '/about', label: 'About me' },
  { path: '/projects', label: 'Projects' },
  { path: '/conclusion', label: 'Conclusion' },
];

export const focalAssetsByRoute = {
  '/about': [
    {
      id: 'moon',
      file: 'lavender-moon-scene.svg',
      label: 'Trăng lavender',
      kind: 'large-focal',
      desktopVw: 42,
      mobileVw: 72,
    },
    {
      id: 'notebook',
      file: 'giant-glass-notebook.svg',
      label: 'Sổ tay kính',
      kind: 'large-focal',
      desktopVw: 34,
      mobileVw: 62,
    },
  ],
  '/projects': [
    {
      id: 'folder',
      file: 'dream-folder-landscape.svg',
      label: 'Folder pastel lớn',
      kind: 'large-focal',
      desktopVw: 58,
      mobileVw: 88,
    },
    {
      id: 'papers',
      file: 'floating-study-papers.svg',
      label: 'Cụm giấy học tập',
      kind: 'large-focal',
      desktopVw: 30,
      mobileVw: 58,
    },
  ],
  '/conclusion': [
    {
      id: 'window',
      file: 'constellation-dream-window.svg',
      label: 'Cửa sổ chòm sao',
      kind: 'large-focal',
      desktopVw: 52,
      mobileVw: 86,
    },
    {
      id: 'gate',
      file: 'thank-you-moon-gate.svg',
      label: 'Cổng trăng cảm ơn',
      kind: 'large-focal',
      desktopVw: 44,
      mobileVw: 76,
    },
  ],
};

export const profile = {
  name: 'Nguyễn Phương Anh',
  studentId: '24061051',
  role: 'Sinh viên kỹ năng số',
  greeting:
    'Chào mọi người, em là Nguyễn Phương Anh. Chào mừng mọi người đến với trang portfolio cá nhân của em.',
  interests: [
    'Nghe nhạc để thư giãn',
    'Xem phim để cân bằng sau giờ học',
    'Quan sát và tìm hiểu bản chất vấn đề',
  ],
  style: 'Nhẹ nhàng, sâu lắng, từ tốn và cẩn thận trong từng phần việc.',
  goals: [
    'Nắm kiến thức nền tảng và biết đánh giá nguồn thông tin đáng tin cậy.',
    'Rèn tư duy phản biện, trình bày lập luận logic và có căn cứ.',
    'Ứng dụng công nghệ và AI tạo sinh có trách nhiệm trong học tập.',
  ],
  direction:
    'Rèn năng lực nghiên cứu, trình bày, làm việc số và kết hợp kiến thức học tập với công nghệ trong chuyển đổi số.',
  principle:
    'Không ỷ lại vào công cụ. Máy móc hỗ trợ tìm kiếm nhanh hơn, còn chắt lọc và kết luận cuối cùng đến từ tư duy độc lập.',
  tools: [
    'File Explorer',
    'Google Drive',
    'Thư viện số',
    'Nguồn học thuật trực tuyến',
    'Mô hình ngôn ngữ lớn',
    'Google Meet',
    'Canva',
    'Microsoft Word',
  ],
  avatarSpec: {
    desktopPx: 260,
    mobilePx: 220,
    frame: 'avatar-moon-frame',
  },
  aboutCards: [
    {
      title: 'Nhịp học tập nhẹ nhàng',
      text: 'Em giữ cách làm việc chậm rãi, quan sát kỹ và ưu tiên hiểu bản chất trước khi kết luận.',
      icon: 'BookOpen',
      frame: 'about-frame-notebook',
      backgroundAsset: 'notebook',
      palette: ['#C9A7FF', '#FFF7E8', '#BFF7E5'],
    },
    {
      title: 'Cân bằng cảm xúc',
      text: 'Âm nhạc và phim ảnh giúp em thư giãn, lấy lại năng lượng và giữ tinh thần mềm mại sau giờ học.',
      icon: 'Music2',
      frame: 'about-frame-media',
      backgroundAsset: 'notes',
      palette: ['#F6B8E8', '#B8E3FF', '#FFE7A8'],
    },
    {
      title: 'Tư duy độc lập',
      text: 'Công cụ số hỗ trợ tốc độ, nhưng đánh giá cuối cùng luôn cần sự kiểm chứng và lập trường riêng.',
      icon: 'ShieldCheck',
      frame: 'about-frame-principle',
      backgroundAsset: 'sparkle',
      palette: ['#BFF7E5', '#C9A7FF', '#FFFFFF'],
    },
  ],
};

export const projectChapters = [
  {
    number: 1,
    title: 'Thao tác cơ bản tệp tin và thư mục',
    icon: 'FolderKanban',
    skill: 'Quản lý dữ liệu',
    goal: 'Tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục thành thạo.',
    summary:
      'Em xây hệ thống thư mục theo mã sinh viên và tên thật, tách dữ liệu theo từng chuyên đề, đặt tên đồng nhất và dọn dữ liệu thừa để truy xuất nhanh hơn.',
    card: {
      frame: 'frame-folder-archive',
      accent: 'accent-mint',
      backgroundAsset: 'folderCard',
      paperLabel: 'Archive map',
      palette: ['#C9A7FF', '#BFF7E5', '#FFF7E8'],
    },
  },
  {
    number: 2,
    title: 'Khai thác dữ liệu và thông tin',
    icon: 'SearchCheck',
    skill: 'Đánh giá nguồn',
    goal: 'Tìm kiếm và đánh giá thông tin học thuật từ nguồn đáng tin cậy.',
    summary:
      'Em dùng từ khóa chuyên sâu, tập hợp 10 tài liệu tham khảo, chọn 5 bài báo khoa học chất lượng và lập bảng đánh giá uy tín nguồn.',
    card: {
      frame: 'frame-research-window',
      accent: 'accent-blue',
      backgroundAsset: 'papers',
      paperLabel: 'Source lens',
      palette: ['#B8E3FF', '#C9A7FF', '#FFFFFF'],
    },
  },
  {
    number: 3,
    title: 'Tổng quan về trí tuệ nhân tạo',
    icon: 'Brain',
    skill: 'Prompt AI',
    goal: 'Viết câu lệnh hiệu quả để khai thác mô hình ngôn ngữ lớn trong học tập.',
    summary:
      'Em thử tóm tắt văn bản học tập, phân tích thuật ngữ và lập bộ đề ôn tập, đồng thời nhận diện giới hạn của thuật toán để giữ đánh giá độc lập.',
    card: {
      frame: 'frame-ai-orbit',
      accent: 'accent-gold',
      backgroundAsset: 'sparkle',
      paperLabel: 'Prompt orbit',
      palette: ['#FFE7A8', '#F6B8E8', '#C9A7FF'],
    },
  },
  {
    number: 4,
    title: 'Giao tiếp và hợp tác trong môi trường số',
    icon: 'Video',
    skill: 'Hợp tác trực tuyến',
    goal: 'Tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.',
    summary:
      'Nhóm tổ chức phiên thảo luận trực tuyến về ứng dụng AI trong nghiên cứu khoa học, phân vai điều phối và thư ký rõ ràng, chia sẻ biên bản đồng bộ.',
    card: {
      frame: 'frame-meeting-glow',
      accent: 'accent-pink',
      backgroundAsset: 'window',
      paperLabel: 'Meet notes',
      palette: ['#F6B8E8', '#B8E3FF', '#FFF7E8'],
    },
  },
  {
    number: 5,
    title: 'Sáng tạo nội dung số',
    icon: 'Palette',
    skill: 'Thiết kế nội dung',
    goal: 'Dùng công cụ tạo sinh để hỗ trợ sáng tạo nội dung số.',
    summary:
      'Em thiết kế infographic về ô nhiễm môi trường tại Hà Nội, dùng công cụ để phác thảo rồi tự chỉnh màu sắc và câu chữ để giữ thông điệp riêng.',
    card: {
      frame: 'frame-creative-ribbon',
      accent: 'accent-lavender',
      backgroundAsset: 'notes',
      paperLabel: 'Design board',
      palette: ['#F6B8E8', '#FFE7A8', '#BFF7E5'],
    },
  },
  {
    number: 6,
    title: 'An toàn và liêm chính học thuật trong môi trường số',
    icon: 'ShieldCheck',
    skill: 'Đạo đức học tập',
    goal: 'Sử dụng AI có trách nhiệm và minh bạch trong học tập.',
    summary:
      'Em thực hiện bài luận có lưu vết prompt, xây 7 quy tắc đạo đức cá nhân và giữ tinh thần kiểm chứng trước dữ liệu điện tử.',
    card: {
      frame: 'frame-integrity-moon',
      accent: 'accent-violet',
      backgroundAsset: 'moon',
      paperLabel: 'Integrity seal',
      palette: ['#C9A7FF', '#FFE7A8', '#B8E3FF'],
    },
  },
];

export const reflectionItems = [
  {
    title: 'Trải nghiệm thiết thực',
    text: 'Portfolio giúp em bớt ngại thao tác máy tính và thấy công nghệ hữu ích khi biết dùng đúng cách.',
  },
  {
    title: 'Hành trang quý giá',
    text: 'Em rèn thói quen kiểm chứng thông tin, làm việc nhóm trực tuyến và giao tiếp hiệu quả qua màn hình.',
  },
  {
    title: 'Điểm tâm đắc',
    text: 'Em tổ chức được hệ thống lưu trữ gọn gàng, biết đặt câu hỏi đúng mục đích và giữ lập trường riêng.',
  },
  {
    title: 'Thách thức',
    text: 'Khó nhất là sàng lọc thông tin, viết prompt đúng ý và cân đối thời gian giữa kỹ thuật với chất lượng nội dung.',
  },
  {
    title: 'Chặng đường tiếp theo',
    text: 'Em sẽ duy trì thói quen làm việc số này để phục vụ cho các môn học chuyên ngành sắp tới. Việc lưu trữ tốt và tra cứu nhanh sẽ giúp quá trình làm khóa luận sau này của em bớt vất vả hơn rất nhiều.',
  },
];

export const thanks =
  'Em xin cảm ơn thầy cô đã hướng dẫn tận tình, cảm ơn các bạn trong nhóm đã hợp tác ăn ý và cảm ơn người đọc vì đã dành thời gian đọc portfolio của em.';
