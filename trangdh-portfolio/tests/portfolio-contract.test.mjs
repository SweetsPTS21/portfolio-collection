import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");
const exists = (path) => existsSync(join(root, path));

assert.ok(exists("src/main.jsx"), "Vite React entry should exist");
assert.ok(exists("src/App.jsx"), "App shell should exist");
assert.ok(exists("src/app/routes.jsx"), "3-page route config should exist");
assert.ok(exists("src/app/AnimatedRoutes.jsx"), "animated routes should be separated");
assert.ok(exists("src/app/theme.js"), "tropical-postcard theme tokens should exist");
assert.ok(exists("src/data/portfolioData.js"), "portfolio content data should exist");
assert.ok(exists("src/components/layout/TropicalPostcardShell.jsx"), "theme shell should exist");
assert.ok(exists("src/features/tropical-scene/TropicalBackground.jsx"), "animated background scene should exist");
assert.ok(exists("src/pages/TropicalHeroPage.jsx"), "home page should exist");
assert.ok(exists("src/pages/PostcardProjectsPage.jsx"), "projects page should exist");
assert.ok(exists("src/pages/PassportAboutPage.jsx"), "passport page should exist");
assert.ok(exists("src/assets/tropical-postcard/palm-leaf-frame.svg"), "palm leaf svg asset should exist");
assert.ok(exists("src/assets/tropical-postcard/postcard-stamp-set.svg"), "stamp svg asset should exist");
assert.ok(exists("public/avatar.jpg"), "avatar should be available as public asset");

for (const image of [
    "hero-travel-girl-cutout.png",
    "blue-postcard-stack-cutout.png",
    "tropical-suitcase-cutout.png",
    "plumeria-flower-cluster-cutout.png",
    "coconut-cocktail-cutout.png",
    "flamingo-float-cutout.png",
]) {
    assert.ok(
        exists(`src/assets/tropical-postcard/generated/${image}`),
        `${image} should exist as generated transparent image asset`,
    );
}

const app = read("src/App.jsx");
const routes = read("src/app/routes.jsx");
const animatedRoutes = read("src/app/AnimatedRoutes.jsx");
assert.match(app, /BrowserRouter/, "App should use BrowserRouter");
assert.match(routes, /path:\s*"\/"/, "home route should be configured");
assert.match(routes, /path:\s*"\/postcards"/, "postcards route should be configured");
assert.match(routes, /path:\s*"\/passport"/, "passport route should be configured");
assert.match(animatedRoutes, /AnimatePresence/, "route transitions should use Framer Motion");

const data = read("src/data/portfolioData.js");
assert.match(data, /Đỗ Huyền Trang/, "portfolio should identify Huyen Trang");
assert.match(data, /Luật Kinh Doanh/, "portfolio should include major");
assert.match(data, /Google Scholar/, "portfolio should include research tools");
assert.match(data, /liêm chính học thuật/i, "portfolio should include academic integrity");
assert.match(data, /Chương 6/, "project data should include chapter 6");

const portfolioData = await import(pathToFileURL(join(root, "src/data/portfolioData.js")).href);
assert.match(
    portfolioData.profile.intro,
    /Giữa thế giới số vô vàn âm thanh và dữ liệu/,
    "profile intro should map the about opening from portfolio.md",
);
assert.match(
    portfolioData.profile.direction,
    /Ứng dụng công nghệ và AI nhằm tối ưu hóa quy trình/,
    "profile direction should include the AI development goal from portfolio.md",
);
assert.equal(portfolioData.projects.length, 6, "project data should map all six chapters from portfolio.md");
assert.match(
    portfolioData.projects[2].steps.join(" "),
    /máy móc có thể tổng hợp từ ngữ rất nhanh/,
    "chapter 3 should preserve the reflective AI critique from portfolio.md",
);
assert.match(
    portfolioData.projects[5].steps.join(" "),
    /7 nguyên tắc cá nhân/,
    "chapter 6 should include the seven personal principles artifact from portfolio.md",
);
assert.match(
    portfolioData.reflections.join(" "),
    /Hoàn thành xong dự án, em xin gửi lời cảm ơn chân thành nhất/,
    "reflections should include the closing thanks from portfolio.md",
);
assert.deepEqual(
    portfolioData.values,
    [
        "Mọi sản phẩm của mình đều tuân thủ sự tĩnh tại trong tư duy: độc lập khi đánh giá vấn đề, tối giản trong hình thức trình bày và tuyệt đối minh bạch, tôn trọng tính nguyên bản của nguồn học liệu.",
    ],
    "values should keep the principles section exactly as sentences from portfolio.md",
);
assert.deepEqual(
    portfolioData.projects.map((project) => project.steps),
    [
        [
            "Mình tiếp cận việc tổ chức dữ liệu máy tính giống như cách mình sắp xếp một giá sách tĩnh lặng.",
            "Mình mở trình quản lý tệp tin, tạo một thư mục mang tên mình.",
            "Sau đó, mình thiết lập các tệp văn bản ghi chú, đổi tên tệp tài liệu quan trọng và cẩn thận phân chia các thư mục con theo từng môn học.",
            "Các thao tác sao chép, di chuyển được thực hiện tuần tự để đưa tài liệu về đúng vị trí.",
            "Những tệp dữ liệu không còn giá trị được mình xóa vào thùng rác và dọn dẹp vĩnh viễn, trả lại một không gian làm việc số vô cùng gọn gàng, tối giản và thư thái.",
        ],
        [
            "Giữa hàng vạn thông tin ở khắp các nền tảng mạng xã hội, mình chọn cách tra cứu chậm rãi và có chọn lọc thông qua các cơ sở dữ liệu học thuật và tạp chí khoa học.",
            "Mình đã tập hợp được 10 tài liệu tham khảo chuyên sâu, trong đó có hơn 5 bài báo khoa học.",
            "Mình tiến hành đánh giá độ tin cậy của từng nguồn dựa trên tác giả, cơ quan xuất bản, sau đó lập bảng tổng hợp và xếp hạng.",
            "Cuối cùng, mọi thứ được đúc kết thành một báo cáo đính kèm danh mục tài liệu theo chuẩn Harvard.",
        ],
        [
            "Mình chọn ba tác vụ gồm tóm tắt bài đọc học thuật, giải thích khái niệm luật kinh doanh và tạo bộ câu hỏi ôn tập.",
            "Ở mỗi tác vụ, mình thiết lập ba phiên bản câu lệnh từ cơ bản đến nâng cao.",
            "Qua quá trình quan sát kết quả, mình đưa ra góc nhìn phản biện độc lập: máy móc có thể tổng hợp từ ngữ rất nhanh, nhưng chúng hoàn toàn thiếu đi chiều sâu cảm xúc, sự thấu cảm và linh hồn của một người viết lách.",
            "Do đó, mình luôn tự tay gọt giũa lại mọi văn bản, chỉ dùng thuật toán như một công cụ hỗ trợ dàn ý ban đầu.",
        ],
        [
            "Nhóm mình đã lên kế hoạch cho một cuộc họp trực tuyến mang không khí nhẹ nhàng và tập trung.",
            "Bọn mình chọn nền tảng phù hợp, xác định chương trình nghị sự và phân công rõ vai trò điều phối, trình bày, thư ký.",
            "Cuộc họp diễn ra trong một tiếng, đề cao sự lắng nghe trọn vẹn và tôn trọng ý kiến của từng người.",
            "Sau cuộc họp, mình hỗ trợ nhóm hoàn thiện biên bản, tổng hợp các quyết định, chia sẻ tài liệu chung và mỗi cá nhân đều viết một đoạn đánh giá ngắn về hiệu quả làm việc.",
        ],
        [
            "Mình thực hiện một dự án bài viết kết hợp hình ảnh đồ họa thông tin theo phong cách tối giản.",
            "Mình sử dụng ít nhất 3 công cụ tự động để hỗ trợ xây dựng cấu trúc văn bản, tạo ảnh minh họa tông màu trầm ấm và thiết kế bố cục tổng thể.",
            "Mình cẩn thận ghi lại các câu lệnh đã dùng, tự tay biên tập lại từng đoạn văn để giữ nguyên chất giọng nhẹ nhàng, trầm lắng của bản thân.",
            "Tiếp đó, mình hoàn thiện bài phân tích chuyên sâu về vai trò của công nghệ và những vấn đề đạo đức khi sáng tạo nội dung.",
        ],
        [
            "Lấy cảm hứng từ sự trân trọng từng câu chữ khi viết lách, mình bắt đầu bằng việc nghiên cứu chính sách của trường về liêm chính học thuật.",
            "Mình thực hiện một bài luận có sử dụng công cụ hỗ trợ, ghi chép lại toàn bộ câu lệnh và cách mình đánh giá, tích hợp đầu ra.",
            "Mình phân tích rõ ranh giới giữa việc mượn ý tưởng và đạo văn.",
            "Cuối cùng, mình thiết kế một đồ họa thông tin tối giản minh họa cho 7 nguyên tắc cá nhân, khẳng định sự cam kết bảo vệ tính nguyên bản của tư duy.",
        ],
    ],
    "project steps should keep the exact sentences and pronouns from portfolio.md",
);

const theme = read("src/app/theme.js");
assert.match(theme, /tropical-postcard/, "theme id should be tropical-postcard");
assert.match(theme, /#3FA9F5/i, "primary color should be blue");
assert.doesNotMatch(theme, /colorPrimary:\s*["']#FF85A8/i, "pink should not be primary");

const css = read("src/index.css");
const heroPage = read("src/pages/TropicalHeroPage.jsx");
const projectsPage = read("src/pages/PostcardProjectsPage.jsx");
const passportPage = read("src/pages/PassportAboutPage.jsx");
for (const animation of [
    "leaf-sway",
    "cloud-drift",
    "plane-fly",
    "wave-shimmer",
    "stamp-pop",
    "postcard-float",
]) {
    assert.match(css, new RegExp(`@keyframes\\s+${animation}`), `${animation} animation should exist`);
}
assert.match(css, /prefers-reduced-motion/, "reduced motion should be handled");
assert.match(css, /\.tropical-background/, "background component should be styled");
assert.match(heroPage, /heroTravelGirl/, "hero should use generated travel girl cutout");
assert.match(heroPage, /tropicalSuitcase/, "home should use generated suitcase cutout");
assert.match(heroPage, /className="profile-copy"/, "profile postcard should wrap text in profile-copy");
assert.match(heroPage, /className="tools-copy"/, "tools panel should wrap text in tools-copy");
assert.match(heroPage, /className="values-copy"/, "values panel should wrap text in values-copy");
assert.match(css, /\.profile-postcard\s*{[\s\S]*grid-template-areas:\s*["']copy avatar["']/, "profile postcard should use balanced copy/avatar areas");
assert.match(css, /\.profile-copy\s*{[\s\S]*grid-area:\s*copy/, "profile copy should occupy named copy area");
assert.match(css, /\.profile-postcard\s*{[\s\S]*transform:\s*none/, "profile postcard should not be rotated off-balance");
assert.match(css, /\.profile-postcard\s*{[\s\S]*animation:\s*profile-postcard-float/, "profile postcard should use non-rotating float animation");
assert.match(css, /@keyframes\s+profile-postcard-float/, "profile postcard should define non-rotating float keyframes");
assert.match(css, /\.hero-girl-cutout\s*{[\s\S]*width:\s*min\(30%, 150px\)/, "generated hero cutout should stay decorative and not dominate card");
assert.match(css, /\.tools-panel,\s*\n\.values-panel\s*{[\s\S]*grid-template-areas:\s*["']media copy["']/, "tools and values panels should use balanced media/copy areas");
assert.match(css, /\.tools-copy,\s*\n\.values-copy\s*{[\s\S]*grid-area:\s*copy/, "tools and values copy should occupy named copy area");
assert.match(css, /\.panel-media,\s*\n\.luggage-stack\s*{[\s\S]*grid-area:\s*media/, "tools and values art should occupy named media area");
assert.match(css, /\.suitcase-cutout\s*{[\s\S]*animation:\s*panel-art-float/, "suitcase should use non-rotating panel art animation");
assert.match(css, /@keyframes\s+panel-art-float/, "panel art float should not rotate the panel art");
assert.match(projectsPage, /postcardStack/, "projects should use generated postcard stack cutout");
assert.match(projectsPage, /flowerCluster/, "projects should use generated flower cluster cutout");
assert.match(passportPage, /coconutCocktail/, "passport should use generated coconut cocktail cutout");
assert.match(passportPage, /flamingoFloat/, "passport should use generated flamingo float cutout");

const assetDir = join(root, "src/assets/tropical-postcard");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 6, "theme should include at least six SVG assets");

const jsxFiles = [
    "src/App.jsx",
    "src/main.jsx",
    "src/app/AnimatedRoutes.jsx",
    "src/app/routes.jsx",
    "src/components/layout/TropicalPostcardShell.jsx",
    "src/features/tropical-scene/TropicalBackground.jsx",
    "src/pages/TropicalHeroPage.jsx",
    "src/pages/PostcardProjectsPage.jsx",
    "src/pages/PassportAboutPage.jsx",
];

for (const file of jsxFiles) {
    assert.match(read(file), /import React(?:,\s*\{[^}]+\})? from ["']react["'];/, `${file} should import React explicitly`);
}
