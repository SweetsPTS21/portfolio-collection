import avatarUrl from "../../docs/avatar.png";
import bt1Pdf from "../../docs/bt1.pdf";
import bt2Pdf from "../../docs/bt2.pdf";
import bt3Pdf from "../../docs/bt3.pdf";
import bt4Pdf from "../../docs/bt4.pdf";
import bt5Pdf from "../../docs/bt5.pdf";
import bt6Pdf from "../../docs/bt6.pdf";

export const personalInfo = {
    name: "Mai Hồng Thắm",
    major: "Luật học",
    university: "Đại học Luật - ĐHQGHN",
    hobbies: "Nghe nhạc - Chơi thể thao - Hát",
    style: "Tối giản - Minh bạch - Hệ thống.",
    footer: "© 2026 • Mai Hồng Thắm • Digital Portfolio",
    avatarUrl,
};

export const about = {
    title: "ABOUT ME",
    intro: "Portfolio được trình bày gọn, rõ luồng thông tin và thuận tiện kiểm tra minh chứng.",
    profile: [
        ["Họ và tên", personalInfo.name],
        ["Ngành", personalInfo.major],
        ["Trường", personalInfo.university],
        ["Sở thích", personalInfo.hobbies],
    ],
    directionTitle: "Định hướng",
    directions: [
        "Chuyển nghiên cứu truyền thống sang mô hình số, ưu tiên truy xuất chính xác và xử lý dữ liệu pháp lý chuyên sâu.",
        "Cộng tác hiệu quả với AI để tăng hiệu suất, đồng thời giữ đạo đức nghề nghiệp làm nguyên tắc trung tâm.",
    ],
    portfolioGoalTitle: "Mục tiêu",
    portfolioGoal:
        "Hồ sơ là hệ sinh thái bằng chứng trực quan: xác định mục tiêu, thực thi quy trình, đúc kết kết quả và đối soát minh chứng.",
};

export const standoutSkills = {
    title: "Năng lực",
    items: [
        {
            title: "Dữ liệu số",
            text: "Thiết lập hệ thống lưu trữ khoa học cho tệp và thư mục, áp dụng quy ước đặt tên nhất quán giúp truy xuất nhanh theo từng mục đích sử dụng",
        },
        {
            title: "Nguồn học thuật",
            text: "Tìm kiếm và chọn lọc nguồn học thuật một cách hiệu quả, ưu tiên tác giả uy tín, nhà xuất bản đáng tin cậy và thông tin có tính cập nhật cao",
        },
        {
            title: "Tương tác AI",
            text: "Soạn yêu cầu có bối cảnh rõ ràng, xác định đầu ra mong muốn và tiêu chí đánh giá để nâng cao độ chính xác của phản hồi từ AI",
        },
        {
            title: "Trình bày",
            text: "Chuyển hóa dữ liệu và ý tưởng thành nội dung có bố cục logic, phù hợp để công bố trên website hoặc các nền tảng số",
        },
    ],
};

export const practicingSkills = {
    title: "Đang rèn",
    items: [
        {
            title: "Kiến trúc dữ liệu",
            text: "Xây dựng thư viện số có gắn thẻ, phân loại và quản lý vòng đời tài liệu.",
        },
        {
            title: "Thẩm định dữ liệu",
            text: "Đối chiếu văn bản luật với nguồn học thuật để loại bỏ thông tin thiếu căn cứ.",
        },
        {
            title: "Kiểm chứng AI",
            text: "Thiết lập ngữ cảnh, giới hạn và kiểm tra phản hồi trong phân tích pháp lý.",
        },
    ],
};

export const principles = {
    title: "Nguyên tắc",
    items: [
        {
            title: "Thiết kế thông tin",
            text: "Trình bày phân tầng, có điểm nhấn và dễ nắm bắt mạch tư duy pháp lý.",
        },
        {
            title: "Đối soát",
            text: "Giữ dấu vết số cho từng bài, liên kết luận điểm với minh chứng gốc.",
        },
        {
            title: "Kiểm soát AI",
            text: "AI chỉ hỗ trợ gợi mở và tối ưu thời gian; quyết định nội dung và đạo đức thuộc về người thực hiện.",
        },
    ],
};

export const tools = {
    title: "Công cụ",
    items: [
        {
            title: "Lưu trữ",
        },
        {
            title: "Nguồn luật",
        },
        {
            title: "AI",
        },
        {
            title: "Thiết kế",
        },
        {
            title: "Làm nhóm",
        },
    ],
};

export const projects = {
    title: "PROJECT",
    intro: "Nội dung 6 bài được đưa vào đầy đủ (văn bản + hình ảnh). Có thể click ảnh để phóng to.",
    chooser: "Chọn bài",
    tip: "Mẹo: mở bài → kéo xuống xem từng trang/ảnh → click để xem rõ chữ.",
    items: [
        {
            title: "Chương 1: Thiết bị ngoại vi",
            description:
                "Tổng quan máy tính, thành phần cơ bản và thiết bị ngoại vi.",
            pdf: bt1Pdf,
            pdfName: "bt1.pdf",
        },
        {
            title: "Chương 2: Dữ liệu & thông tin",
            description:
                "Tìm kiếm, thu thập, tổ chức thông tin và đánh giá độ tin cậy của nguồn.",
            pdf: bt2Pdf,
            pdfName: "bt2.pdf",
        },
        {
            title: "Chương 3: Trí tuệ nhân tạo",
            description:
                "Khái niệm AI, ứng dụng, lợi ích, rủi ro và liên hệ trong học tập.",
            pdf: bt3Pdf,
            pdfName: "bt3.pdf",
        },
        {
            title: "Chương 4: Hợp tác số",
            description:
                "Giao tiếp số, phân công, chia sẻ tài liệu và quy tắc ứng xử online.",
            pdf: bt4Pdf,
            pdfName: "bt4.pdf",
        },
        {
            title: "Chương 5: Nội dung số",
            description:
                "Lên ý tưởng, chọn công cụ, biên tập, thiết kế và lưu ý bản quyền.",
            pdf: bt5Pdf,
            pdfName: "bt5.pdf",
        },
        {
            title: "Chương 6: An toàn học thuật",
            description:
                "An toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật.",
            pdf: bt6Pdf,
            pdfName: "bt6.pdf",
        },
    ],
};

export const conclusion = {
    title: "CONCLUSION",
    intro: "Portfolio 6 bài tập giúp nhìn lại quá trình học một cách hệ thống: công nghệ không thay thế tư duy pháp lý, nhưng tăng tính chuyên nghiệp và tốc độ xử lý vấn đề.",
    coreTitle: "Kỹ năng đạt được",
    coreSkills: [
        "Làm việc có kế hoạch: xác định mục tiêu, chuẩn bị cấu trúc và chọn công cụ phù hợp.",
        "Khai thác AI có kiểm soát: đặt câu hỏi đúng trọng tâm, tìm nguồn và kiểm tra chéo.",
        "Xử lý thông tin chủ động: chọn tài liệu phù hợp và cân nhắc bối cảnh sử dụng.",
    ],
    reflectionTitle: "Tâm đắc & thách thức",
    reflections: [
        {
            title: "Tâm đắc",
            text: "Sự mạch lạc trong hệ thống lưu trữ và tư duy giúp lập luận rõ hơn, phản biện sắc hơn.",
        },
        {
            title: "Thách thức",
            text: "Khó nhất là không ỷ lại vào công cụ, luôn kiểm chứng chéo và tra cứu ngược văn bản gốc.",
        },
    ],
    futureTitle: "Tiếp theo",
    futureIntro: "Các phiên bản sau sẽ điều chỉnh cấu trúc để:",
    futureItems: [
        "Trình bày ngắn gọn hơn nhưng rõ trọng tâm",
        "Làm nổi bật bài học rút ra từ từng bài",
        "Mở rộng nội dung theo hướng gắn với định hướng học tập và nghề nghiệp",
    ],
};
