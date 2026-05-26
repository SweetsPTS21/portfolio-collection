import {
  BarChart2,
  Brain,
  FolderOpen,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import bt1Pdf from '../assets/Bt1.pdf';
import bt2Pdf from '../assets/Bt2.pdf';
import bt3Pdf from '../assets/Bt3.pdf';
import bt4Pdf from '../assets/Bt4.pdf';
import bt5Pdf from '../assets/Bt5.pdf';
import bt6Pdf from '../assets/Bt6.pdf';

export const person = {
  name: 'Trịnh Thị Thúy Nhung',
  code: '2406134',
  role: 'Sinh viên Luật học',
  major: 'Luật học',
  school: 'Trường Đại học Luật, Đại học Quốc gia Hà Nội (ĐHQGHN)',
  hobbies: 'Đọc sách, viết lách, nghiên cứu, thiết kế, khám phá công nghệ',
  style:
    'Dịu dàng trong cách thể hiện, sắc sảo trong tư duy và luôn đề cao chiều sâu học thuật.',
  quote:
    'Cuộc hành trình tri thức luôn bắt đầu từ những bước chân tĩnh lặng nhưng vô cùng kiên định. Tại không gian nhỏ này, những nguyên tắc pháp lý khô khan được kết hợp hài hòa cùng sự phát triển của công nghệ số, thông qua lăng kính của một tâm hồn luôn trân trọng sự tinh tế và chiều sâu học thuật.',
  intro:
    'Mình yêu sự tinh tế trong cách trình bày, sự mềm mại trong ngôn ngữ và chiều sâu trong tư duy. Định hướng của mình là trở thành một chuyên gia pháp lý không chỉ vững vàng về chuyên môn mà còn thấu hiểu sâu sắc các giá trị nhân văn.',
  technologyView:
    'Đối với mình, công nghệ không chỉ là những dòng dữ liệu vô cảm, mà còn là một không gian để con người thể hiện bản sắc, cảm xúc và giá trị riêng của mình. Mình ứng dụng công nghệ để làm cho quá trình nghiên cứu trở nên thanh thoát và hiệu quả hơn, từ đó dành trọn tâm trí cho việc đào sâu các vấn đề pháp lý phức tạp.',
  portfolioGoal:
    'Không gian lưu trữ này được xây dựng nhằm hệ thống hóa quá trình rèn luyện kỹ năng số, đồng thời minh chứng cho việc một sinh viên Luật hoàn toàn có thể sử dụng công cụ kỹ thuật số để truyền tải sự tinh tế trong ngôn ngữ pháp lý và khẳng định năng lực nghiên cứu độc lập.',
  homeStoryCards: [
    {
      title: 'Định hướng học tập',
      content:
        'Trở thành một chuyên gia pháp lý vững vàng về chuyên môn và thấu hiểu sâu sắc các giá trị nhân văn.',
    },
    {
      title: 'Ngôn ngữ thể hiện',
      content:
        'Yêu sự tinh tế trong cách trình bày, sự mềm mại trong ngôn ngữ và chiều sâu trong tư duy.',
    },
    {
      title: 'Không gian thể hiện bản thân',
      content:
        'Công nghệ là nơi con người thể hiện bản sắc, cảm xúc và giá trị riêng của mình.',
    },
    {
      title: 'Công cụ cho nghiên cứu',
      content:
        'Ứng dụng công nghệ để quá trình nghiên cứu khoa học, hiệu quả và có thêm không gian cho tư duy pháp lý.',
    },
    {
      title: 'Mục tiêu lưu trữ',
      content:
        'Hệ thống hóa quá trình rèn luyện kỹ năng số trong một không gian học thuật có trật tự.',
    },
    {
      title: 'Năng lực muốn chứng minh',
      content:
        'Một sinh viên Luật có thể dùng công cụ kỹ thuật số để truyền tải ngôn ngữ pháp lý tinh tế và năng lực nghiên cứu độc lập.',
    },
  ],
};

export const projectIntro =
  'Hành trình rèn luyện kỹ năng số của mình được đúc kết qua những bài thực hành cụ thể. Mỗi dự án là một bước mình học cách làm chủ không gian mạng. Mời bạn cùng lướt qua những thành quả nhỏ bé nhưng được chăm chút vô cùng tỉ mỉ nhé!';

export const projects = [
  {
    id: '01',
    icon: FolderOpen,
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    subtitle: 'Bài tập 1 (Chương 1): Tổ chức, sắp xếp và lưu trữ dữ liệu',
    goal: 'Rèn luyện thao tác quản lý tệp tin, xây dựng không gian lưu trữ tài liệu học thuật đề cao tính logic và sự tinh tế.',
    process:
      'Mình đã thực hành tuần tự các lệnh tạo mới, đổi tên, sao chép và phân loại thư mục trên hệ điều hành máy tính. Từ những dữ liệu ban đầu, mình sắp xếp mọi văn bản học tập thành một hệ thống phân tầng mạch lạc. Việc này giúp không gian làm việc số trở nên thanh thoát và quá trình tìm kiếm giáo trình diễn ra nhanh chóng hơn.',
    product: 'docs/Bt1.pdf',
    beats: [
      {
        label: 'Mục tiêu',
        text: 'Rèn luyện thao tác quản lý tệp tin và xây dựng không gian lưu trữ học thuật có logic.',
      },
      {
        label: 'Thao tác',
        text: 'Thực hành tuần tự các lệnh tạo mới, đổi tên, sao chép và phân loại thư mục.',
      },
      {
        label: 'Sắp xếp',
        text: 'Từ dữ liệu ban đầu, sắp xếp văn bản học tập thành một hệ thống phân tầng mạch lạc.',
      },
      {
        label: 'Kết quả',
        text: 'Không gian làm việc số trở nên thanh thoát, việc tìm giáo trình diễn ra nhanh chóng hơn.',
      },
    ],
    color: '#c084fc',
    pdf: bt1Pdf,
  },
  {
    id: '02',
    icon: BarChart2,
    title: 'Khai thác dữ liệu và thông tin',
    subtitle: 'Bài tập 2 (Chương 2): Khai thác dữ liệu và thông tin',
    goal: 'Vận dụng tư duy sắc sảo để tra cứu, thu thập và đánh giá độ tin cậy của các nguồn học liệu pháp lý.',
    process:
      'Mình đã tìm kiếm hơn 10 tài liệu chuyên sâu thông qua Google Scholar và cơ sở dữ liệu thư viện. Thay vì đọc lướt, mình cẩn thận đánh giá từng bài báo dựa trên uy tín tác giả và tính cập nhật, sau đó lập bảng tổng hợp và trích dẫn theo đúng chuẩn Harvard. Quá trình này giúp mình rèn luyện sự cẩn trọng và bảo đảm chiều sâu khi nghiên cứu.',
    product: 'docs/Bt2.pdf',
    beats: [
      {
        label: 'Mục tiêu',
        text: 'Tra cứu, thu thập và đánh giá độ tin cậy của các nguồn học liệu pháp lý.',
      },
      {
        label: 'Nguồn tìm kiếm',
        text: 'Tìm hơn 10 tài liệu chuyên sâu qua Google Scholar và cơ sở dữ liệu thư viện.',
      },
      {
        label: 'Thẩm định',
        text: 'Đánh giá từng bài báo theo uy tín tác giả và tính cập nhật trước khi tổng hợp.',
      },
      {
        label: 'Chuẩn học thuật',
        text: 'Lập bảng tổng hợp và trích dẫn theo chuẩn Harvard để giữ chiều sâu nghiên cứu.',
      },
    ],
    color: '#f472b6',
    pdf: bt2Pdf,
  },
  {
    id: '03',
    icon: Brain,
    title: 'Tổng quan về trí tuệ nhân tạo',
    subtitle: 'Bài tập 3 (Chương 3): Tổng quan về trí tuệ nhân tạo',
    goal: 'Phát triển kỹ năng giao tiếp với nền tảng trí tuệ nhân tạo thông qua việc xây dựng và tối ưu hóa các câu lệnh truy vấn (prompts).',
    process:
      'Mình chọn các tác vụ học tập quen thuộc và thử nghiệm tạo câu lệnh từ mức độ cơ bản đến nâng cao. Qua việc phân tích và so sánh kết quả, mình nhận ra máy móc chỉ thực sự hữu ích khi chúng ta biết dẫn dắt bằng tư duy logic và ngôn từ sắc bén. Từ đó, mình tự đúc kết được những nguyên tắc riêng để làm chủ công cụ này một cách hiệu quả.',
    product: 'docs/Bt3.pdf',
    beats: [
      {
        label: 'Mục tiêu',
        text: 'Phát triển kỹ năng giao tiếp với AI qua xây dựng và tối ưu hóa prompt.',
      },
      {
        label: 'Thử nghiệm',
        text: 'Chọn các tác vụ học tập quen thuộc và tạo câu lệnh từ cơ bản đến nâng cao.',
      },
      {
        label: 'So sánh',
        text: 'Phân tích kết quả để thấy AI hữu ích nhất khi được dẫn dắt bằng tư duy logic.',
      },
      {
        label: 'Đúc kết',
        text: 'Tự rút ra nguyên tắc riêng để làm chủ công cụ này một cách hiệu quả.',
      },
    ],
    color: '#818cf8',
    pdf: bt3Pdf,
  },
  {
    id: '04',
    icon: MessageSquare,
    title: 'Giao tiếp và hợp tác trong môi trường số',
    subtitle: 'Bài tập 4 (Chương 4): Giao tiếp và hợp tác trong môi trường số',
    goal: 'Tổ chức một cuộc họp trực tuyến chuyên nghiệp, đề cao sự tôn trọng, đề cao hiệu quả làm việc nhóm.',
    process:
      'Mình và các bạn đã cùng nhau lên chương trình nghị sự, phân công vai trò rõ ràng từ người điều phối đến thư ký ghi chép. Xuyên suốt cuộc họp, mọi người trao đổi rất nhẹ nhàng nhưng luôn đi đúng trọng tâm chuyên môn. Biên bản cuối cùng được tổng hợp cẩn thận, minh chứng cho một không gian làm việc văn minh và gắn kết.',
    product: 'docs/Bt4.pdf',
    beats: [
      {
        label: 'Mục tiêu',
        text: 'Tổ chức một cuộc họp trực tuyến chuyên nghiệp, đề cao hiệu quả làm việc nhóm.',
      },
      {
        label: 'Chuẩn bị',
        text: 'Lên chương trình nghị sự và phân công rõ vai trò điều phối, thư ký ghi chép.',
      },
      {
        label: 'Trao đổi',
        text: 'Các thành viên trao đổi tích cực, đúng trọng tâm nội dung cuộc họp.',
      },
      {
        label: 'Minh chứng',
        text: 'Biên bản cuối cùng được tổng hợp cẩn thận, thể hiện sự văn minh và gắn kết.',
      },
    ],
    color: '#fb7185',
    pdf: bt4Pdf,
  },
  {
    id: '05',
    icon: Sparkles,
    title: 'Sáng tạo nội dung số',
    subtitle: 'Bài tập 5 (Chương 5): Sáng tạo nội dung số',
    goal: 'Ứng dụng các công cụ tạo sinh để thổi hồn thẩm mỹ vào những sản phẩm truyền thông học thuật.',
    process:
      'Mình đã kết hợp nền tảng tạo văn bản và công cụ hỗ trợ thiết kế hình ảnh để xây dựng một sản phẩm học thuật trực quan. Máy móc giúp mình phác thảo ý tưởng và khung sườn, nhưng chính mình là người trực tiếp tinh chỉnh từng câu chữ và bố cục để sản phẩm cuối cùng mang đậm sự dịu dàng và nét tinh tế của riêng Thúy Nhung.',
    product: 'docs/Bt5.pdf',
    beats: [
      {
        label: 'Mục tiêu',
        text: 'Ứng dụng công cụ tạo sinh để thổi hồn thẩm mỹ vào sản phẩm truyền thông học thuật.',
      },
      {
        label: 'Kết hợp',
        text: 'Dùng nền tảng tạo văn bản cùng công cụ thiết kế hình ảnh để dựng sản phẩm trực quan.',
      },
      {
        label: 'Vai trò của AI',
        text: 'Máy móc hỗ trợ phác thảo ý tưởng và tạo khung sườn ban đầu.',
      },
      {
        label: 'Dấu ấn cá nhân',
        text: 'Tự tinh chỉnh câu chữ và bố cục để giữ nét dịu dàng, tinh tế của riêng mình.',
      },
    ],
    color: '#fbbf24',
    pdf: bt5Pdf,
  },
  {
    id: '06',
    icon: ShieldCheck,
    title: 'An toàn số & Liêm chính học thuật',
    subtitle:
      'Bài tập 6 (Chương 6): An toàn và liêm chính học thuật trong môi trường số',
    goal: 'Xác lập ranh giới đạo đức, xây dựng bộ nguyên tắc cá nhân khi ứng dụng công nghệ vào môi trường đại học.',
    process:
      'Sau khi nghiên cứu kỹ quy định của Trường Đại học Luật, mình đã tự tay thiết kế một bản đồ học thông tin vô cùng trực quan. Trong đó, mình đặt ra nguyên tắc minh bạch tuyệt đối: trân trọng chất xám nguyên bản, khai báo rõ ràng phần hỗ trợ từ công nghệ và luôn bảo vệ chiều sâu tư duy độc lập của bản thân trước mọi dữ liệu tự động.',
    product: 'docs/Bt6.pdf',
    beats: [
      {
        label: 'Mục tiêu',
        text: 'Xác lập ranh giới đạo đức khi ứng dụng công nghệ trong môi trường đại học.',
      },
      {
        label: 'Nền tảng',
        text: 'Nghiên cứu kỹ quy định của Đại học Luật trước khi xây dựng nguyên tắc cá nhân.',
      },
      {
        label: 'Sản phẩm',
        text: 'Thiết kế một bản đồ học thông tin trực quan về an toàn số và liêm chính học thuật.',
      },
      {
        label: 'Nguyên tắc',
        text: 'Minh bạch hỗ trợ từ công nghệ, trân trọng chất xám nguyên bản và bảo vệ tư duy độc lập.',
      },
    ],
    color: '#34d399',
    pdf: bt6Pdf,
  },
];

export const projectionsIntro =
  'Dưới đây là hai thông điệp cốt lõi định hình tư duy của mình xuyên suốt quá trình tiếp cận công nghệ số và trí tuệ nhân tạo:';

export const projections = [
  {
    type: 'PROJECTION',
    label: 'Thẻ Nhìn nhận',
    content:
      'Mình không muốn AI suy nghĩ thay mình, mà muốn học cách sử dụng nó như một công cụ hỗ trợ cho tư duy và học tập. Với mình, điều quan trọng nhất không phải là có câu trả lời nhanh, mà là biết chọn lọc thông tin và giữ được góc nhìn của chính mình.',
  },
  {
    type: 'CONCLUSION',
    label: 'Thẻ Kết luận',
    content:
      'Qua quá trình học tập và xây dựng portfolio, mình nhận ra rằng công nghệ chỉ thật sự có giá trị khi con người biết sử dụng nó bằng tư duy chủ động và phản biện. AI có thể hỗ trợ rất nhiều nhưng chính suy nghĩ và bản sắc cá nhân mới tạo nên giá trị khác biệt.',
  },
];

export const conclusion = {
  summary:
    'Quá trình thực hiện portfolio và học tập môn Nhập môn Công nghệ số & Ứng dụng AI đã giúp mình thay đổi rất nhiều trong cách nhìn về công nghệ. Trước đây, mình từng nghĩ máy tính hay Internet chỉ là những công cụ hỗ trợ học tập thông thường. Nhưng sau hành trình này, mình hiểu rằng công nghệ có thể trở thành một không gian học thuật mở – nơi con người lưu trữ tri thức, kết nối ý tưởng và phát triển tư duy theo những cách hoàn toàn mới. Điều quan trọng nhất mình học được không phải là cách sử dụng thật nhiều công cụ số, mà là học cách giữ được sự tỉnh táo giữa một thế giới có quá nhiều dữ liệu và quá nhiều câu trả lời được tạo ra bởi AI.',
  summaryParts: [
    'Quá trình thực hiện portfolio và học tập môn Nhập môn Công nghệ số & Ứng dụng AI đã giúp mình thay đổi rất nhiều trong cách nhìn về công nghệ.',
    'Trước đây, mình từng nghĩ máy tính hay Internet chỉ là những công cụ hỗ trợ học tập thông thường.',
    'Sau hành trình này, mình hiểu rằng công nghệ có thể trở thành một không gian học thuật mở.',
    'Đó là nơi con người lưu trữ tri thức, kết nối ý tưởng và phát triển tư duy theo những cách mới.',
    'Điều quan trọng nhất không phải là sử dụng thật nhiều công cụ số.',
    'Điều quan trọng là giữ được sự tỉnh táo giữa một thế giới có quá nhiều dữ liệu và câu trả lời do AI tạo ra.',
  ],
  coreSkills: [
    {
      title: 'Kỹ năng tổ chức và quản lý dữ liệu số',
      desc: 'Mình xây dựng thói quen lưu trữ tài liệu khoa học, sắp xếp thông tin hợp lý và tối ưu không gian học tập trên môi trường số.',
    },
    {
      title: 'Kỹ năng tìm kiếm và thẩm định thông tin',
      desc: 'Quá trình khai thác dữ liệu giúp mình biết cách tra cứu tài liệu học thuật, ưu tiên nguồn chính thống và đánh giá độ tin cậy của thông tin trước khi sử dụng.',
    },
    {
      title: 'Kỹ năng sử dụng AI có chọn lọc và tư duy phản biện',
      desc: 'Mình hiểu cách khai thác AI như một công cụ hỗ trợ học tập: biết đặt prompt rõ ràng, kiểm chứng thông tin và giữ vững góc nhìn cá nhân thay vì phụ thuộc hoàn toàn vào AI.',
    },
    {
      title: 'Kỹ năng giao tiếp và hợp tác trong môi trường số',
      desc: 'Thông qua hoạt động làm việc nhóm trực tuyến, mình rèn luyện khả năng trình bày ý kiến mạch lạc, giao tiếp văn minh và duy trì sự chuyên nghiệp trên nền tảng số.',
    },
    {
      title: 'Kỹ năng sáng tạo nội dung số',
      desc: 'Quá trình xây dựng sản phẩm bằng AI tạo sinh giúp mình biết kết hợp công nghệ với tư duy cá nhân để tạo ra nội dung có tính thẩm mỹ và mang dấu ấn riêng.',
    },
    {
      title: 'Ý thức về an toàn số và liêm chính học thuật',
      desc: 'Mình hiểu rõ hơn tầm quan trọng của bảo mật dữ liệu, tôn trọng bản quyền và sử dụng công nghệ một cách minh bạch, có trách nhiệm.',
    },
  ],
  highlightLabel: 'Điều mình tâm đắc nhất:',
  highlight:
    'Sau hành trình này, điều mình nhận ra là công nghệ có thể hỗ trợ con người tiếp cận tri thức nhanh hơn, nhưng không thể thay thế khả năng tư duy độc lập, phản biện và chiều sâu trong cách nhìn nhận vấn đề. Với mình, giá trị lớn nhất của việc học không nằm ở việc sử dụng được bao nhiêu công cụ, mà nằm ở việc vẫn giữ được tiếng nói học thuật và góc nhìn riêng của mình giữa một thế giới ngày càng nhiều nội dung được tạo ra bởi AI.',
  highlightParts: [
    'Công nghệ có thể hỗ trợ con người tiếp cận tri thức nhanh hơn.',
    'Công nghệ không thể thay thế khả năng tư duy độc lập, phản biện và chiều sâu nhìn nhận vấn đề.',
    'Giá trị lớn nhất của việc học là giữ được tiếng nói học thuật và góc nhìn riêng giữa thế giới nhiều nội dung do AI tạo ra.',
  ],
  challengeLabel: 'Thách thức lớn nhất:',
  challenge:
    'Việc cá nhân hóa các sản phẩm công nghệ sao cho vừa thể hiện được tính thẩm mỹ cá nhân bay bổng, vừa giữ được sự nghiêm túc, chặt chẽ đặc thù của ngành Luật học.',
  challengeParts: [
    'Cá nhân hóa sản phẩm công nghệ để thể hiện được tính thẩm mỹ cá nhân bay bổng.',
    'Giữ lại sự nghiêm túc và chặt chẽ đặc thù của ngành Luật học.',
  ],
  directionLabel: 'Tầm nhìn & Định hướng phát triển',
  direction:
    'Trong tương lai, mình mong muốn tiếp tục phát triển portfolio theo hướng chuyên nghiệp và mang tính cá nhân sâu sắc hơn: tối ưu trải nghiệm người xmình bằng phong cách tối giản, tinh tế, kết hợp công nghệ với tư duy học thuật chuyên sâu, và ứng dụng AI vào nghiên cứu pháp lý theo hướng có trách nhiệm, nhân văn và hiệu quả.',
  directionParts: [
    'Phát triển portfolio theo hướng chuyên nghiệp và mang tính cá nhân sâu sắc hơn.',
    'Tối ưu trải nghiệm người xmình bằng phong cách tối giản, tinh tế.',
    'Kết hợp công nghệ với tư duy học thuật chuyên sâu.',
    'Ứng dụng AI vào nghiên cứu pháp lý theo hướng có trách nhiệm, nhân văn và hiệu quả.',
  ],
  quote:
    'Công nghệ có thể giúp con người đi nhanh hơn. Nhưng chính tư duy độc lập và sự tử tế mới quyết định chúng ta sẽ đi xa đến đâu.',
};
