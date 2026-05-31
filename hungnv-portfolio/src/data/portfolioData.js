import React from "react";

export const personalInfo = {
  name: "Nguyễn Việt Hùng",
  studentId: "24061166",
  major: "Luật",
  university: "Đại học Luật - ĐHQG Hà Nội",
  themeId: "azure-courtroom-brief",
  avatar: "/docs/avatar.jpg",
  introduction: "Kính chào quý thầy cô và các bạn. Em là Nguyễn Việt Hùng. Đây là không gian lưu trữ số của em, được thiết kế nhằm hệ thống hóa quá trình rèn luyện kỹ năng công nghệ ứng dụng trong nghiên cứu pháp lý.",
  hobbies: "Chơi thể thao để rèn luyện kỷ luật và thể lực; nghe nhạc để duy trì sự tập trung và cân bằng áp lực học tập.",
  style: "Lịch sự, trưởng thành. Em đề cao tính chuyên nghiệp, trách nhiệm trong công việc và ưu tiên phương pháp giải quyết vấn đề bằng tư duy logic, khách quan.",
  
  // Raw string for test suite assertions
  vision: "Mục tiêu của em là xây dựng nền tảng kiến thức pháp lý vững chắc, hướng tới hình ảnh một chuyên gia pháp lý đĩnh đạc và đáng tin cậy. Em nhìn nhận công nghệ thông tin là công cụ thiết yếu để quản trị khối lượng công việc phức tạp. Việc thành thạo kỹ năng số giúp em tự động hóa các thao tác hành chính, từ đó tập trung toàn bộ năng lực tư duy vào việc phân tích và thẩm định hồ sơ.",
  
  // Sentences broken down for granular step-by-step rendering
  visionList: [
    "Xây dựng nền tảng kiến thức pháp lý vững chắc, hướng tới hình ảnh một chuyên gia pháp lý đĩnh đạc và đáng tin cậy.",
    "Ứng dụng công nghệ thông tin như một công cụ thiết yếu để quản trị khối lượng công việc phức tạp.",
    "Thành thạo kỹ năng số để tự động hóa các thao tác hành chính, tập trung toàn bộ năng lực tư duy vào việc phân tích và thẩm định hồ sơ."
  ],
  
  portfolioGoal: "Dự án Portfolio này là minh chứng cụ thể cho tiến trình chuẩn hóa phương pháp làm việc của em trên không gian mạng. Nội dung được trình bày trực diện, tập trung vào hiệu quả công việc và thể hiện sự nghiêm cẩn của một sinh viên ngành Luật.",
  academicPrinciple: "Nguyên tắc cốt lõi của em là sự phê phán học thuật độc lập. Em kiên quyết không phụ thuộc hay mặc nhiên đồng tình với các luồng dữ liệu tự động. Mọi thông tin do máy móc xuất ra đều phải trải qua quá trình kiểm chứng khắt khe. Các lập luận trong bài làm hoàn toàn là ý kiến đánh giá riêng của em, được xây dựng dựa trên nền tảng luật định."
};

export const toolGroups = [
  {
    category: "Quản lý và lưu trữ dữ liệu",
    items: [
      { name: "Directory Opus", description: "Phần mềm quản lý tệp tin nâng cao" },
      { name: "Google Drive", description: "Hệ thống lưu trữ đám mây" }
    ]
  },
  {
    category: "Tra cứu và trích dẫn chuyên sâu",
    items: [
      { name: "HeinOnline", description: "Cơ sở dữ liệu pháp lý quốc tế" },
      { name: "Thư viện Pháp luật", description: "Cổng thông tin văn bản quy phạm Việt Nam" },
      { name: "Zotero", description: "Phần mềm quản lý danh mục tài liệu và trích dẫn" }
    ]
  },
  {
    category: "Hỗ trợ phân tích dữ liệu",
    items: [
      { name: "Claude AI", description: "Mô hình ngôn ngữ lớn sơ chế dữ liệu pháp lý" },
      { name: "Perplexity AI", description: "Tìm kiếm thông tin thô và tổng hợp dữ liệu" }
    ]
  },
  {
    category: "Giao tiếp và điều phối nhóm",
    items: [
      { name: "Google Meet", description: "Nền tảng hội nghị trực tuyến làm việc nhóm" },
      { name: "Trello", description: "Bảng phân chia công việc trực quan" }
    ]
  },
  {
    category: "Trình bày và đồ họa",
    items: [
      { name: "Prezi", description: "Nền tảng thiết kế trình chiếu động" },
      { name: "Canva", description: "Công cụ thiết kế đồ họa thông tin" },
      { name: "Microsoft Word", description: "Soạn thảo văn bản và tài liệu chuẩn mực" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    chapter: "Chương 1",
    title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
    objective: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.",
    process: "Em quy hoạch ổ đĩa máy tính theo cấu trúc phân tầng. Thư mục cấp 1 mang tên và mã sinh viên, các thư mục cấp 2 tương ứng với từng loại. Các tệp tin được đổi tên theo cú pháp thống nhất để tiện quản lý. Dữ liệu rác được định kỳ làm sạch nhằm giải phóng bộ nhớ. Kết quả là một hệ thống lưu trữ khoa học, bảo mật và tra cứu nhanh chóng.",
    processSteps: [
      "Quy hoạch ổ đĩa máy tính theo cấu trúc phân tầng khoa học.",
      "Tạo thư mục cấp 1 mang tên và mã số sinh viên, chia các thư mục cấp 2 tương ứng với từng loại bài tập.",
      "Đổi tên toàn bộ các tệp tin theo cú pháp thống nhất để dễ dàng theo dõi và quản lý dữ liệu.",
      "Làm sạch dữ liệu rác định kỳ nhằm giải phóng bộ nhớ và duy trì hiệu suất hoạt động.",
      "Thiết lập thành công hệ thống lưu trữ khoa học, bảo mật và hỗ trợ tra cứu văn bản cực kỳ nhanh chóng."
    ],
    pdfName: "bt1.pdf",
    pdfPath: "docs/bt1.pdf",
    exhibitNum: "EXHIBIT I",
    date: "Chương 1"
  },
  {
    id: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    objective: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
    process: "Em vận dụng các kỹ thuật tìm kiếm nâng cao để thu thập tài liệu khoa học chuyên ngành. Bộ dữ liệu thu thập gồm 10 tài liệu, trong đó có 5 bài báo khoa học chuẩn mực. Tất cả đều được đánh giá nghiêm ngặt về tính thời sự và độ tin cậy của tác giả.",
    processSteps: [
      "Vận dụng sáng tạo các kỹ thuật tìm kiếm thông tin nâng cao để chọn lọc tài liệu chuyên ngành.",
      "Thu thập và quy hoạch bộ dữ liệu học thuật gồm 10 tài liệu chính xác.",
      "Lọc ra 5 bài báo khoa học chuẩn mực đạt các chỉ số học thuật cao.",
      "Đánh giá nghiêm ngặt và toàn diện về tính thời sự cùng độ tin cậy cao của các tác giả trước khi đưa vào danh mục trích dẫn."
    ],
    pdfName: "bt2.pdf",
    pdfPath: "docs/bt2.pdf",
    exhibitNum: "EXHIBIT II",
    date: "Chương 2"
  },
  {
    id: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    objective: "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",
    process: "Em thiết lập các câu lệnh yêu cầu hệ thống tóm tắt quy phạm pháp luật, giải thích thuật ngữ và xây dựng câu hỏi trắc nghiệm. Quá trình thử nghiệm cho thấy máy móc chỉ thực hiện thống kê xác suất từ vựng và thường thiếu tư duy logic pháp lý. Em trực tiếp đưa ra các đánh giá phản biện, chỉ rõ những sai lầm của công cụ để khẳng định tầm quan trọng của việc nghiên cứu độc lập.",
    processSteps: [
      "Thiết lập các câu lệnh (prompts) chi tiết yêu cầu AI tóm tắt quy phạm pháp luật, giải thích thuật ngữ và xây dựng câu hỏi học tập.",
      "Thực hiện thử nghiệm thực tế và phát hiện máy móc chỉ thống kê xác suất từ vựng, thiếu hụt nghiêm trọng tư duy logic pháp luật chuyên sâu.",
      "Trực tiếp phản biện độc lập, phân tích và chỉ rõ các sai sót của công cụ tự động.",
      "Khẳng định tầm quan trọng hàng đầu của việc nghiên cứu pháp luật độc lập, không phụ thuộc vào trí tuệ nhân tạo."
    ],
    pdfName: "bt3.pdf",
    pdfPath: "docs/bt3.pdf",
    exhibitNum: "EXHIBIT III",
    date: "Chương 3"
  },
  {
    id: 4,
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    objective: "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
    process: "Tại dự án này, em là thành viên của Nhóm 13. Vai trò của em là trực tiếp xây dựng nội dung chuyên môn và lên kịch bản làm việc cho toàn nhóm. Dựa trên kịch bản đã chuẩn bị, phiên họp trên Google Meet diễn ra một cách trọng tâm, lịch sự và không bị mất thời gian vào các vấn đề ngoài lề. Biên bản cuộc họp được chốt lại rõ ràng cùng với bảng đánh giá năng lực làm việc chéo của các thành viên.",
    processSteps: [
      "Tham gia tích cực với vai trò thành viên cốt cán của Nhóm 13 môn học.",
      "Đảm nhận trách nhiệm trực tiếp xây dựng nội dung chuyên môn pháp lý và lên kịch bản họp trực tuyến chi tiết cho toàn nhóm.",
      "Điều phối cuộc họp trên nền tảng Google Meet diễn ra tập trung, nghiêm túc, lịch sự và tuyệt đối không lãng phí thời gian.",
      "Chốt biên bản phiên họp rõ ràng, minh bạch, đi kèm bảng đánh giá chéo năng lực làm việc của từng thành viên một cách khách quan."
    ],
    pdfName: "bt4.pdf",
    pdfPath: "docs/bt4.pdf",
    exhibitNum: "EXHIBIT IV",
    date: "Chương 4"
  },
  {
    id: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    objective: "Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
    process: "Em tiến hành thiết kế một bài thuyết trình chuyên đề. Công cụ tự động được sử dụng để xây dựng dàn ý thô. Sau đó, em tự tay chỉnh sửa lại toàn bộ câu từ, bảo đảm văn phong lịch sự, trưởng thành và đúng chuẩn mực của ngôn ngữ pháp lý. Phần báo cáo đi kèm được em viết với thái độ khách quan, đánh giá cả rủi ro và lợi ích khi ứng dụng công nghệ.",
    processSteps: [
      "Thiết kế bài thuyết trình chuyên đề phục vụ nghiên cứu và trình chiếu.",
      "Ứng dụng AI tạo sinh để hỗ trợ phác thảo dàn ý thô nhằm gia tăng tốc độ chuẩn bị.",
      "Tự tay biên tập lại toàn bộ câu từ, chuẩn hóa văn phong lịch sự, chững chạc và tuân thủ nghiêm ngặt ngôn từ pháp lý chuyên ngành.",
      "Hoàn thiện báo cáo phân tích đính kèm với thái độ khách quan, đánh giá đa chiều về cả rủi ro lẫn lợi ích của công nghệ số."
    ],
    pdfName: "bt5.pdf",
    pdfPath: "docs/bt5.pdf",
    exhibitNum: "EXHIBIT V",
    date: "Chương 5"
  },
  {
    id: 6,
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    objective: "Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
    process: "Em thực hiện bài luận cá nhân tuân thủ nghiêm ngặt quy chế liêm chính của nhà trường. Dù có sử dụng công cụ hỗ trợ, em vẫn minh bạch hóa toàn bộ quá trình bằng cách lưu vết các câu lệnh. Em tự xây dựng bộ quy tắc ứng xử học thuật cá nhân và trình bày dưới dạng đồ họa thông tin trực quan, khẳng định lập trường không khoan nhượng với hành vi đạo văn.",
    processSteps: [
      "Hoàn thành bài luận cá nhân nghiêm túc, tuân thủ tuyệt đối quy định về liêm chính học thuật của trường Đại học Luật.",
      "Minh bạch hóa toàn bộ việc sử dụng công cụ hỗ trợ bằng cách lưu trữ lịch sử câu lệnh rõ ràng.",
      "Tự thiết lập bộ quy tắc ứng xử học thuật cá nhân làm kim chỉ nam rèn luyện đạo đức nghề nghiệp.",
      "Thiết kế đồ họa thông tin trực quan sinh động để khẳng định mạnh mẽ lập trường không khoan nhượng đối với hành vi đạo văn."
    ],
    pdfName: "bt6.pdf",
    pdfPath: "docs/bt6.pdf",
    exhibitNum: "EXHIBIT VI",
    date: "Chương 6"
  }
];

export const conclusionData = {
  // Raw strings for test suite assertions
  experience: "Quá trình tổ chức không gian số giúp em hình thành thói quen làm việc có kế hoạch và lớp lang hơn. Việc ứng dụng linh hoạt các nền tảng công nghệ chuyên biệt không làm mất đi tính cẩn trọng vốn có, mà ngược lại, cung cấp cho em một môi trường xử lý thông tin vô cùng chuyên nghiệp và tối ưu hiệu suất.",
  preciousAsset: "Giá trị thiết thực nhất thu nhận được là phương pháp duy trì sự hoài nghi khoa học trước mọi nguồn dữ liệu. Kỹ năng thiết lập quy trình làm việc nhóm trực tuyến và khả năng làm chủ các công cụ hỗ trợ đa nhiệm cũng là những nền tảng cốt lõi em sẽ mang theo.",
  futurePath: "Em sẽ áp dụng các phương pháp này vào tiến trình học tập chuyên ngành và nghiên cứu khoa học sắp tới. Các kỹ năng số sẽ đóng vai trò công cụ hỗ trợ để em mở rộng năng lực phân tích hồ sơ pháp lý. Đồng thời, em sẽ tiếp tục duy trì thói quen chơi thể thao và nghe nhạc để bảo đảm sức khỏe thể chất lẫn sự nhạy bén trong tư duy.",
  acknowledgement: "Em xin trân trọng cảm ơn quý thầy cô đã giảng dạy và đặt ra những tiêu chuẩn đánh giá học thuật nghiêm túc. Cảm ơn các thành viên Nhóm 13 đã làm việc với một thái độ rất trưởng thành và trách nhiệm. Sự đồng hành của mọi người đã giúp em hoàn thành tốt học phần kỹ năng số này.",
  
  // Sentences broken down for granular rendering
  experienceSteps: [
    "Quá trình quy hoạch không gian số giúp em hình thành thói quen làm việc lớp lang, khoa học và có kế hoạch cụ thể hơn.",
    "Ứng dụng linh hoạt các công cụ hỗ trợ không làm giảm tính cẩn trọng vốn có của sinh viên Luật.",
    "Ngược lại, công nghệ số thiết lập một môi trường làm việc chuyên nghiệp, bảo mật văn bản và tối ưu hóa hiệu suất nghiên cứu."
  ],
  preciousAssetSteps: [
    "Phương pháp duy trì sự hoài nghi khoa học độc lập trước mọi luồng thông tin tự động.",
    "Quy trình tổ chức hoạt động và điều phối làm việc nhóm trực tuyến hiệu quả.",
    "Năng lực làm chủ và khai thác các công cụ số đa nhiệm phục vụ chuyên môn pháp lý."
  ],
  futurePathSteps: [
    "Áp dụng các kỹ năng số đã tích lũy vào tiến trình học tập các học phần chuyên ngành và nghiên cứu khoa học Luật học.",
    "Sử dụng công cụ số làm trợ thủ đắc lực hỗ trợ mở rộng năng lực phân tích tài liệu và thẩm định hồ sơ pháp luật phức tạp.",
    "Duy trì thói quen chơi thể thao và thưởng thức âm nhạc để giữ vững sức khỏe thể lực tốt cùng sự nhạy bén, logic trong tư duy khách quan."
  ],
  acknowledgementSteps: [
    "Trân trọng cảm ơn quý Thầy Cô đã tận tình giảng dạy và đưa ra những tiêu chuẩn đánh giá học thuật khắt khe, nghiêm túc.",
    "Cảm ơn các thành viên Nhóm 13 đã cộng tác với một tinh thần trách nhiệm, trưởng thành và lịch sự.",
    "Sự đồng hành của tập thể là nguồn động lực to lớn giúp em hoàn thành xuất sắc học phần kỹ năng số này."
  ],
  
  highlights: [
    "Quy hoạch thành công hệ thống lưu trữ dữ liệu cá nhân khoa học, bảo đảm tính an toàn và tra cứu văn bản luật nhanh chóng.",
    "Duy trì tư duy phản biện độc lập, kiên quyết đánh giá khắt khe và chỉ ra điểm sai sót của máy móc để bảo vệ tính logic của điều luật.",
    "Đảm nhiệm xuất sắc vai trò lên nội dung và kịch bản cho Nhóm 13, điều phối quy trình làm việc trên nền tảng số hiệu quả, tiết kiệm thời gian."
  ],
  challenges: [
    "Các công cụ hỗ trợ đôi khi trích dẫn sai hoặc bỏ sót các văn bản mới ban hành, buộc em phải tự tra cứu thủ công và đối chiếu chặt chẽ.",
    "Đòi hỏi sự linh hoạt và khả năng thích nghi nhanh để có thể làm quen cùng lúc với nhiều nền tảng phần mềm khác nhau.",
    "Phân bổ quỹ thời gian hợp lý để vừa thao tác phần mềm, vừa duy trì chất lượng nghiên cứu chuyên môn cao cho từng bài tập."
  ]
};
