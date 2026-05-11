import avatarUrl from "../../docs/avatar.pnd.png";
import bt1Url from "../../docs/bt1.pdf";
import bt2Url from "../../docs/bt2.pdf";
import bt3Url from "../../docs/bt3.pdf";
import bt4Url from "../../docs/bt4.pdf";
import bt5Url from "../../docs/bt5.pdf";
import bt6Url from "../../docs/bt6.pdf";

export const personalInfo = {
    name: "Nguyễn Hải Linh",
    major: "Luật học",
    university: "Trường Đại học Luật - Đại học Quốc gia Hà Nội",
    hobbies: "Đọc sách, xem phim, tìm hiểu công nghệ và tham gia hoạt động xã hội",
    style: "Có tinh thần trách nhiệm, thích nghi nhanh và tôn trọng ý kiến đóng góp",
    footer: "© 2026 • Nguyễn Hải Linh • Digital Portfolio",
    avatarUrl,
};

export const about = {
    title: "VỀ TÔI",
    kicker: "Khái quát bản thân + định hướng ứng dụng AI trong học tập luật học",
    intro: "Portfolio này thể hiện quá trình học tập, khả năng tổ chức thông tin và tư duy nghiên cứu khi tiếp cận học phần Nhập môn Trí tuệ nhân tạo và AI. Nội dung được sắp xếp theo mạch Định hướng - Phương pháp thực hiện - Kết quả đạt được - Minh chứng liên quan, giúp người xem nhanh chóng nắm bắt thông tin và kiểm tra tài liệu đi kèm.",
    profile: [
        ["Họ và tên", personalInfo.name],
        ["Ngành học", personalInfo.major],
        ["Trường", personalInfo.university],
        ["Sở thích", personalInfo.hobbies],
        ["Phong cách cá nhân", personalInfo.style],
    ],
};

export const practicingSkills = {
    title: "Kỹ năng",
    items: [
        {
            title: "Quản trị tài liệu số",
            text: "Sắp xếp tài liệu học tập và dữ liệu theo hệ thống logic để việc tra cứu, sử dụng và đối chiếu thông tin diễn ra nhanh hơn.",
        },
        {
            title: "Tìm kiếm và chọn lọc dữ liệu",
            text: "Tiếp cận nguồn thông tin đáng tin cậy, ưu tiên dữ liệu có tính học thuật và cập nhật nhằm nâng cao chất lượng nghiên cứu.",
        },
        {
            title: "Ứng dụng AI trong học tập",
            text: "Sử dụng AI để hỗ trợ tổng hợp nội dung, phân tích tài liệu và định hướng xử lý thông tin thông qua yêu cầu rõ ràng.",
        },
    ],
};

export const principles = {
    title: "Nguyên tắc",
    items: [
        {
            title: "Tư duy trình bày thông tin",
            text: "Ưu tiên cách trình bày ngắn gọn, rõ ý và có hệ thống để người đọc dễ nắm bắt nội dung chính cùng quá trình lập luận.",
        },
        {
            title: "Minh bạch và khả năng đối chiếu",
            text: "Các nội dung quan trọng được gắn kèm minh chứng hoặc liên kết nguồn để hỗ trợ kiểm tra thông tin thuận tiện hơn.",
        },
        {
            title: "Sử dụng AI có trách nhiệm",
            text: "AI là công cụ hỗ trợ tìm kiếm và xử lý dữ liệu, còn việc đánh giá, chọn lọc và hoàn thiện nội dung vẫn cần kiểm soát trực tiếp.",
        },
    ],
};

export const coreSkills = {
    title: "Trọng tâm",
    items: [
        {
            title: "Quản lý thông tin số",
            text: "Xây dựng cách lưu trữ tài liệu rõ ràng, phân nhóm dữ liệu theo mục đích học tập để giảm sai sót khi tra cứu.",
        },
        {
            title: "Khai thác tài liệu học thuật",
            text: "Chọn lọc thư viện số, cơ sở dữ liệu pháp luật và website học thuật chính thống để bảo đảm độ tin cậy của thông tin.",
        },
        {
            title: "Làm việc với công cụ AI",
            text: "Đặt câu hỏi có mục tiêu cụ thể, kiểm chứng kết quả phản hồi và sử dụng AI như công cụ hỗ trợ tư duy.",
        },
        {
            title: "Trình bày nội dung số",
            text: "Thiết kế bố cục khoa học, trực quan và dễ theo dõi để hỗ trợ người xem tiếp cận nội dung học thuật.",
        },
    ],
};

export const tools = {
    title: "Công cụ AI",
    items: [
        {
            title: "Quản lý tài liệu",
            text: "Google Drive, OneDrive và các nền tảng lưu trữ đám mây hỗ trợ quản lý, đồng bộ dữ liệu học tập.",
        },
        {
            title: "Nguồn học thuật",
            text: "Thư viện số, cơ sở dữ liệu pháp luật và website học thuật chính thống được dùng để kiểm chứng nguồn.",
        },
        {
            title: "Hỗ trợ AI",
            text: "ChatGPT, Gemini và Microsoft Copilot hỗ trợ tổng hợp thông tin, phân tích nội dung và tối ưu quá trình học tập.",
        },
        {
            title: "Thiết kế nội dung",
            text: "Canva, PowerPoint và công cụ thiết kế hình ảnh bằng AI được dùng để xây dựng nội dung trực quan.",
        },
        {
            title: "Làm việc nhóm",
            text: "Notion, Microsoft Teams và nền tảng cộng tác trực tuyến hỗ trợ trao đổi thông tin và quản lý công việc nhóm.",
        },
    ],
};

export const projects = {
    title: "PROJECT",
    intro: "Phần Project tổng hợp 6 bài tập tiêu biểu trong học phần Nhập môn Trí tuệ nhân tạo và AI, kèm tài liệu minh chứng để theo dõi quá trình học tập.",
    chooser: "Mở từng bài để xem toàn bộ nội dung và minh chứng",
    items: [
        {
            title: "Bài tập 1 - Chương 1: Máy tính và các thiết bị ngoại vi",
            description:
                "Tổng hợp kiến thức về máy tính, thiết bị ngoại vi và cách nhận diện vai trò của từng thiết bị trong quá trình học tập, làm việc.",
            documentUrl: bt1Url,
        },
        {
            title: "Bài tập 2 - Chương 2: Khai thác dữ liệu và thông tin",
            description:
                "Rèn luyện kỹ năng tìm kiếm, thu thập, chọn lọc và tổ chức dữ liệu từ các nguồn thông tin phù hợp với mục tiêu học tập.",
            documentUrl: bt2Url,
        },
        {
            title: "Bài tập 2 - Chương 3: Tổng quan về trí tuệ nhân tạo",
            description:
                "Trình bày khái quát về AI, các ứng dụng nổi bật và cách sử dụng công cụ AI có kiểm soát trong môi trường học thuật.",
            documentUrl: bt3Url,
        },
        {
            title: "Bài tập 3 - Chương 4: Giao tiếp và hợp tác trong môi trường số",
            description:
                "Tập trung vào kỹ năng phối hợp trực tuyến, chia sẻ tài liệu, trao đổi thông tin và ứng xử văn minh trong không gian số.",
            documentUrl: bt4Url,
        },
        {
            title: "Bài tập 2 - Chương 5: Sáng tạo nội dung số",
            description:
                "Thể hiện quy trình xây dựng nội dung trực quan, lựa chọn công cụ thiết kế phù hợp và chú ý tới bản quyền tài nguyên số.",
            documentUrl: bt5Url,
        },
        {
            title: "Bài tập 4 - Chương 6: An toàn và liêm chính học thuật trong môi trường số",
            description:
                "Nhấn mạnh bảo mật tài khoản, quyền riêng tư, chống đạo văn, trích dẫn minh bạch và trách nhiệm khi sử dụng AI.",
            documentUrl: bt6Url,
        },
    ],
};

export const conclusion = {
    title: "CONCLUSION",
    intro: "Sau khi hoàn thiện portfolio gồm 6 bài tập của học phần Nhập môn Trí tuệ nhân tạo và AI, quá trình học được nhìn nhận không chỉ qua kết quả cuối cùng mà còn qua cách tổ chức tư duy, xử lý thông tin và xây dựng phương pháp làm việc phù hợp với môi trường số.",
    mindsetTitle: "Những thay đổi nhận thấy",
    mindsetItems: [
        {
            title: "Làm việc có kế hoạch hơn",
            text: "Trước khi bắt tay vào làm, quá trình học chú trọng xác định mục tiêu, chuẩn bị cấu trúc và lựa chọn công cụ phù hợp.",
        },
        {
            title: "Chủ động xử lý thông tin",
            text: "Tài liệu được xem xét theo độ phù hợp, tránh sử dụng nguồn một cách máy móc và luôn cân nhắc bối cảnh khi đưa vào bài.",
        },
        {
            title: "Nhận thức rõ hơn vai trò của AI",
            text: "AI được dùng như công cụ hỗ trợ tư duy và kiểm tra lại nội dung, không thay thế quá trình suy nghĩ và viết độc lập.",
        },
    ],
    reflectionTitle: "Ưu điểm và thách thức khi làm portfolio",
    highlights: [
        {
            title: "Hệ thống nội dung có tính liên kết",
            text: "Tài liệu được sắp xếp logic, giúp việc học và triển khai ý tưởng rõ ràng hơn; portfolio phản ánh quá trình phát triển tư duy và kỹ năng.",
        },
        {
            title: "Bố cục dễ theo dõi",
            text: "Nội dung giữ tính nhất quán giữa các bài, minh chứng được lựa chọn có chủ đích và hỗ trợ người xem hiểu nhanh cách triển khai.",
        },
    ],
    challenges: [
        {
            title: "Kiểm soát chất lượng thông tin khi dùng AI",
            text: "Nội dung do AI tạo ra có thể thuyết phục nhưng chưa chắc chính xác hoặc phù hợp với thực tế pháp lý, vì vậy cần kiểm tra nguồn và đối chiếu tài liệu gốc.",
        },
        {
            title: "Đảm bảo trách nhiệm học thuật",
            text: "Công nghệ chỉ nên đóng vai trò hỗ trợ, còn việc đánh giá và chịu trách nhiệm về nội dung vẫn thuộc về người sử dụng.",
        },
    ],
    futureTitle: "Tầm nhìn và định hướng phát triển",
    futureIntro:
        "Trong thời gian tới, portfolio tiếp tục được hoàn thiện theo hướng gắn với kỹ năng nghề nghiệp và định hướng chuyên ngành Luật:",
    futureItems: [
        {
            title: "Tối ưu bố cục",
            text: "Trình bày nội dung ngắn gọn, trực quan và dễ tiếp cận hơn.",
        },
        {
            title: "Bổ sung bài học kinh nghiệm",
            text: "Mỗi bài tập có thể mở rộng thêm phần phân tích kinh nghiệm sau quá trình thực hiện.",
        },
        {
            title: "Nâng cao kiểm chứng thông tin",
            text: "Ứng dụng AI hiệu quả hơn trong nghiên cứu, quản lý tài liệu và xây dựng nội dung học thuật có kiểm soát.",
        },
    ],
};
