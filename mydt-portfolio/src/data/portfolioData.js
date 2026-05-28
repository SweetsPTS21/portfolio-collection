// src/data/portfolioData.js

const assignmentFiles = [
  new URL('../../docs/Bt1.pdf', import.meta.url).href,
  new URL('../../docs/Bt2.pdf', import.meta.url).href,
  new URL('../../docs/Bt3.pdf', import.meta.url).href,
  new URL('../../docs/Bt4.pdf', import.meta.url).href,
  new URL('../../docs/Bt5.pdf', import.meta.url).href,
  new URL('../../docs/Bt6.pdf', import.meta.url).href,
];

export const portfolioData = {
  person: {
    fullName: "Đặng Trà My",
    studentId: "24061293",
    major: "Luật",
    university: "Đại học Luật - Đại học Quốc gia Hà Nội",
    interests: ["Đọc truyện", "Phân tích cốt truyện", "Xâu chuỗi dữ kiện"],
  },

  about: {
    headline: "Không gian lưu trữ học thuật Đặng Trà My",
    intro:
      "Chào mừng mọi người đến với không gian lưu trữ học thuật của Đặng Trà My. Nơi đây được thiết kế với tiêu chí tối giản, chuyên nghiệp, tập trung hoàn toàn vào chiều sâu tri thức và tư duy logic của ngành Luật.",
    learningGoal:
      "Quá trình nghiên cứu pháp luật đối với mình tương đồng với việc giải mã một cốt truyện trinh thám phức tạp, đòi hỏi sự xâu chuỗi thông tin tỉ mỉ và tư duy phản biện sắc bén. Định hướng của mình là trở thành một chuyên gia pháp lý vững chuyên môn, có khả năng phân tích độc lập. Việc ứng dụng công nghệ số là phương tiện để tối ưu hóa quy trình tra cứu, giúp mình tập trung toàn bộ trí lực vào việc đưa ra các lập luận pháp lý chặt chẽ và khách quan nhất.",
    portfolioGoal:
      "Dự án này là minh chứng trực quan cho quá trình hệ thống hóa kỹ năng làm việc trên môi trường số. Portfolio được xây dựng không nhằm mục đích phô diễn kỹ thuật, mà để khẳng định năng lực làm chủ công nghệ, duy trì sự nghiêm cẩn trong học thuật và khả năng tổ chức dữ liệu chuyên nghiệp của một sinh viên Luật.",
    principle:
      "Mọi nội dung trong dự án đều tuân thủ nguyên tắc độc lập tư duy và khắt khe trong kiểm chứng. Mình không chấp nhận sự phụ thuộc vào các công cụ tự động hóa. Mọi lập luận đưa ra đều xuất phát từ lăng kính cá nhân, được đối chiếu chéo với các nguồn dữ liệu nguyên bản và bảo đảm tính minh bạch tuyệt đối.",
    tools: [
      "File Explorer & Google Drive (Quản lý tệp tin)",
      "Thư viện điện tử Đại học Quốc gia & các cơ sở dữ liệu pháp luật uy tín (Tra cứu chuyên sâu)",
      "Gemini, ChatGPT, Claude (Hỗ trợ phân tích dữ liệu thô)",
      "Google Meet, Zoom, Zalo (Kết nối làm việc nhóm)",
      "Canva & Microsoft Word (Trình bày báo cáo trực quan)",
    ],
  },

  projects: [
    {
      chapter: 1,
      title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.",
      process:
        "Thiết lập ổ đĩa máy tính theo cấu trúc phân tầng nghiêm ngặt. Bắt đầu bằng việc khởi tạo thư mục gốc mang tên cá nhân, tiếp đó phân nhánh thành các tệp tin bài học cụ thể. Các lệnh đổi tên định dạng, phím tắt cắt dán và di chuyển tài liệu được thao tác dứt khoát, chính xác. Những dữ liệu nháp được dọn dẹp vào thùng rác và xóa vĩnh viễn. Kết quả thu được là một không gian học tập ngăn nắp, hỗ trợ truy xuất thông tin hệ thống và nhanh chóng.",
      evidence: assignmentFiles[0],
      pdfName: "Bt1.pdf",
      icon: "FileText",
    },
    {
      chapter: 2,
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
      process:
        "Thông qua các bộ lọc tìm kiếm nâng cao, mình tiến hành bóc tách thông tin từ các tạp chí khoa học chuyên ngành. Tổng cộng 10 tài liệu tham khảo đã được tập hợp, bảo đảm tỷ lệ 5 bài báo khoa học chuẩn mực. Từng nguồn tin đều trải qua quá trình soi chiếu uy tín tác giả và tính thời sự, sau đó lập bảng đánh giá chi tiết.",
      evidence: assignmentFiles[1],
      pdfName: "Bt2.pdf",
      icon: "Search",
    },
    {
      chapter: 3,
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",
      process:
        "Ba yêu cầu cốt lõi được đặt ra cho hệ thống: tóm tắt văn bản luật, giải thích thuật ngữ chuyên ngành và lập bộ đề ôn tập. Cấu trúc câu lệnh được nâng cấp qua ba phiên bản để đo lường giới hạn của thuật toán. Đánh giá độc lập của mình chỉ ra rằng công nghệ này chỉ thực hiện việc lắp ghép xác suất từ vựng, hoàn toàn thiếu đi tư duy logic và sự thấu hiểu bản chất pháp lý. Do đó, mình trực tiếp phản biện lại các kết quả máy móc cung cấp, khẳng định vai trò quyết định của tư duy con người trong nghiên cứu.",
      evidence: assignmentFiles[2],
      pdfName: "Bt3.pdf",
      icon: "Sparkles",
    },
    {
      chapter: 4,
      title: "Giao tiếp và hợp tác trong môi trường số",
      goal: "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
      process:
        "Một phiên thảo luận chuyên môn trực tuyến được thiết lập bài bản. Các thành viên thống nhất chương trình làm việc, phân định rõ vai trò điều phối và thư ký. Với vai trò Thư ký nhóm 22, em chịu trách nhiệm chính trong việc ghi chép biên bản họp và đóng góp trực tiếp vào nội dung cốt lõi của dự án là \"Tổng hợp địa điểm bonding\". Phiên họp hơn 1 tiếng diễn ra với sự nghiêm túc, các thành viên tranh biện dựa trên luận cứ rõ ràng để tìm ra giải pháp tối ưu. Biên bản cuộc họp cùng tài liệu liên quan được chia sẻ đồng bộ ngay sau đó, đi kèm phần đánh giá chéo khách quan về năng lực hợp tác của từng cá nhân.",
      evidence: assignmentFiles[3],
      pdfName: "Bt4.pdf",
      icon: "Users",
    },
    {
      chapter: 5,
      title: "Sáng tạo nội dung số",
      goal: "Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
      process:
        "Mình đã thiết kế các infographic với ba công cụ tự động được sử dụng để phác thảo kịch bản và tạo lập hình ảnh minh họa cơ bản. Tuy nhiên, mình đóng vai trò kiểm duyệt và biên tập lại toàn bộ hệ thống ngôn từ, tinh chỉnh bố cục để sản phẩm thể hiện đúng tính chuyên nghiệp. Đi kèm là một bài báo cáo phân tích nghiêm khắc về ranh giới giữa việc ứng dụng công nghệ và sự phụ thuộc tư duy.",
      evidence: assignmentFiles[4],
      pdfName: "Bt5.pdf",
      icon: "Palette",
    },
    {
      chapter: 6,
      title: "An toàn và liêm chính học thuật trong môi trường số",
      goal: "Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
      process:
        "Dựa trên việc nghiên cứu quy tắc ứng xử học thuật của nhà trường, mình thực hiện một bài luận có dùng công cụ hỗ trợ, lưu vết minh bạch toàn bộ các câu lệnh đã nhập. Mình tự xây dựng 7 quy tắc đạo đức cá nhân, thiết kế thành một đồ họa thông tin trực quan. Thông điệp được truyền tải rất rõ ràng: kiên quyết từ chối đạo văn, tôn trọng bản quyền tác giả và duy trì tinh thần hoài nghi khoa học trước mọi luồng dữ liệu điện tử.",
      evidence: assignmentFiles[5],
      pdfName: "Bt6.pdf",
      icon: "ShieldCheck",
    },
  ],

  conclusion: {
    reflection:
      "Quá trình hoàn thiện chuỗi dự án này đóng vai trò quan trọng trong việc hệ thống hóa phương pháp nghiên cứu và làm việc trên không gian số của bản thân. Việc tự tay thiết lập một hệ thống lưu trữ và làm chủ các công cụ hiện đại giúp mình nâng cao tính chủ động. Công nghệ được nhìn nhận đúng với vai trò của nó là một công cụ hỗ trợ, đòi hỏi người sử dụng phải có năng lực kiểm soát và tư duy điều hướng rõ ràng để phục vụ mục tiêu học thuật.",
    highlights: [
      "Thiết lập thành công một hệ thống lưu trữ dữ liệu cá nhân theo cấu trúc logic, hỗ trợ tối ưu hóa thời gian truy xuất tài liệu pháp lý chuyên sâu.",
      "Duy trì nghiêm ngặt tư duy phản biện độc lập khi xử lý dữ liệu từ các công cụ tự động, bảo vệ triệt để tính nguyên bản của bài làm.",
      "Kết hợp hiệu quả giữa kỹ năng làm việc nhóm trực tuyến và khả năng tập trung nghiên cứu độc lập, đáp ứng tiêu chuẩn khắt khe của môi trường đại học.",
    ],
    challenges: [
      "Khối lượng thông tin khổng lồ và đôi khi thiếu tính xác thực từ các công cụ tự động đòi hỏi quy trình sàng lọc và đối chiếu liên tục với văn bản gốc.",
      "Việc tinh chỉnh ngôn ngữ câu lệnh để hệ thống hiểu đúng thuật ngữ chuyên ngành luật, ngăn chặn tình trạng máy móc diễn giải sai lệch bản chất pháp lý.",
      "Quản lý thời gian hiệu quả giữa việc thao tác các phần mềm công nghệ mới và việc bảo đảm chiều sâu học thuật của từng bài tập chuyên môn.",
    ],
    future:
      "Các kỹ năng số này sẽ được ứng dụng trực tiếp vào con đường nghiên cứu pháp lý chuyên sâu. Công nghệ sẽ đóng vai trò tinh giản quy trình tra cứu án lệ, hỗ trợ mình tập trung phân tích các tình huống luật phức tạp, đồng thời tiếp tục duy trì thói quen đọc truyện để trau dồi khả năng tư duy logic và xâu chuỗi vấn đề.",
    thanks:
      "Em xin chân thành cảm ơn thầy cô và các bạn đã bỏ thời gian quý báu để cùng lật ngắm Portfolio này và chứng kiến quá trình em học tập, rèn luyện và định hướng sau môn học.",
  },
};
