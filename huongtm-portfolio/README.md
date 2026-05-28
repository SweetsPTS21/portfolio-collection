# Style Catalog — Strawberry Picnic Meadow (`strawberry-picnic-meadow`)

## Dành riêng cho `huongtm-portfolio`

> Chủ đề: Strawberry Picnic Meadow  
> Nguồn phong cách: `catalog-5.md` — cute, dreamy, 2D SVG-first, nhiều animation mềm, background-first scene.  
> Cá nhân hóa: Trịnh Mai Hương, sinh viên Luật, phong cách nhẹ nhàng, êm ả, tinh tế, yêu du lịch, điện ảnh và âm nhạc.  
> Tone màu bắt buộc: hồng pastel nhạt, dịu, tươi sáng — không dùng hồng đậm gắt, không dùng đỏ dâu thuần, không neon.  
> Techstack bắt buộc: React 18, Framer Motion, Lenis, Lucide icons. Không dùng Tailwind.

---

## 1. Tinh thần thiết kế

Theme phải kết hợp hai lớp tính cách trong `docs/portfolio.md`:

- Tư duy Luật học: nhẹ nhàng nhưng lập luận vững chắc, phản biện độc lập, minh bạch, không thụ động với kết quả AI.
- Đời sống cá nhân: du lịch để mở rộng thế giới quan, điện ảnh chữa lành, âm nhạc xoa dịu tâm hồn sau giờ học.
- Phong cách: tĩnh tại, dịu dàng, tinh tế — như lời cô mô tả bản thân trong portfolio.

Concept giao diện: một buổi picnic dâu giữa đồng cỏ mùa xuân êm ả. Nền đồng cỏ nhiều lớp SVG 2D có khăn caro hồng nhạt, giỏ mây, hoa cúc trắng vàng, bướm và ong nhỏ bay qua. Toàn bộ nền là điểm nhấn thị giác chính — không phải decoration góc màn hình. Palette hồng pastel nhạt, dịu, mang lại cảm giác bình yên và thanh lịch nhưng vẫn đủ sức sống. Background phải sống động ngay từ khi vào trang.

---

## 2. Techstack bắt buộc

Không dùng Tailwind trong project này. Toàn bộ layout và styling viết bằng CSS thuần, CSS modules hoặc file CSS theo component.

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Công nghệ     | Vai trò                                                                                                      |
| :------------ | :----------------------------------------------------------------------------------------------------------- |
| React 18      | UI framework chính.                                                                                          |
| Framer Motion | Route transition, section entrance, card hover, blanket unfurl, berry pop, sticker wiggle, stagger entrance. |
| Lenis         | Smooth scroll toàn app, meadow parallax, cleanup khi unmount, tắt khi reduced motion.                        |
| Lucide React  | Icon hệ thống: MapPin, Film, Music, FileText, Search, Sparkles, ShieldCheck, Users, BookOpen, Heart.         |
| CSS thuần     | Theme tokens, responsive layout, keyframes idle, SVG layer positioning, animation nền.                       |

Không cài hoặc import `tailwindcss`, `@tailwindcss/vite`, `tailwind.config.js`, class utility kiểu `flex gap-6 p-8`. Nếu cần layout thì tạo class CSS có tên rõ nghĩa như `.routeShell`, `.projectGrid`, `.heroMeadow`, `.picnicCard`.

---

## 3. Theme token riêng cho Hương

Theme ID: `strawberry-picnic-meadow`.

```js
// src/app/theme.js
export const theme = {
  id: "strawberry-picnic-meadow",
  color: {
    // Nền & bề mặt — hồng kem nhạt, dịu
    bgBase: "#FFF8FA",
    bgSurface: "#FFFFFF",
    bgBlush: "#FFE8F0",
    bgMeadow: "#F5FFF7",

    // Primary — hồng pastel nhạt chủ đạo (không đỏ dâu)
    primary: "#F4A7BE",
    primarySoft: "#F9C8D8",
    primaryMuted: "#FBDCE8",

    // Accent — mint cỏ, vàng nắng, tím mứt nhạt
    accentMint: "#A8EDCA",
    accentYellow: "#FFE89A",
    accentLavender: "#D8B8FF",
    accentBasket: "#E8C99A",

    // Text — nâu hồng ấm, không đen thuần
    textBase: "#4A2535",
    textMuted: "#8B6474",
    textLight: "#C8A0B0",

    // Border & shadow
    border: "#F4C8D8",
    shadow: "rgba(200, 120, 150, 0.12)",
    gingham: "#FFB8D0",
  },
  radius: {
    card: 20,
    button: 999,
    sticker: 16,
    badge: 12,
  },
  font: {
    heading: "'Fredoka', sans-serif",
    body: "'Nunito', sans-serif",
  },
};
```

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap");

:root {
  /* Nền */
  --huong-bg-base: #fff8fa;
  --huong-bg-surface: #ffffff;
  --huong-bg-blush: #ffe8f0;
  --huong-bg-meadow: #f5fff7;

  /* Primary hồng pastel nhạt */
  --huong-pink: #f4a7be;
  --huong-pink-soft: #f9c8d8;
  --huong-pink-muted: #fbdce8;

  /* Accent */
  --huong-mint: #a8edca;
  --huong-yellow: #ffe89a;
  --huong-lavender: #d8b8ff;
  --huong-basket: #e8c99a;

  /* Text */
  --huong-text: #4a2535;
  --huong-text-muted: #8b6474;
  --huong-text-light: #c8a0b0;

  /* Border & gingham */
  --huong-border: #f4c8d8;
  --huong-shadow: rgba(200, 120, 150, 0.12);
  --huong-gingham: #ffb8d0;
}
```

Quy định màu:

- Hồng pastel nhạt (`#F4A7BE`, `#F9C8D8`) dùng cho điểm nhấn chính, CTA, active nav, card header.
- Mint cỏ (`#A8EDCA`) dùng cho background đồng cỏ, hover nhẹ, border card thứ cấp.
- Vàng nắng (`#FFE89A`) dùng cho badge, glow nhẹ, sticker highlight.
- Tím mứt nhạt (`#D8B8FF`) dùng cho accent thứ ba, jam jar reference, berry detail.
- Text chính dùng nâu hồng đậm `#4A2535`, không dùng đen thuần.
- Nền phải sáng, nhạt, dịu; không tạo giao diện tối.
- Mỗi viewport phải thấy đủ hồng pastel, mint cỏ, vàng nắng, nền kem sáng và text nâu hồng. Không viewport nào chỉ một màu phẳng.

---

## 4. Route architecture bắt buộc: 3 routes

App chỉ có 3 route nội dung chính. Không tạo thêm trang phụ nếu chưa có yêu cầu.

```txt
huongtm-portfolio/
├── /            -> redirect nhẹ sang /about
├── /about       -> Trang 1: About Me (I. Trang Giới thiệu)
├── /projects    -> Trang 2: Projects (II. Trang Dự án)
└── /conclusion  -> Trang 3: Conclusion (III. Trang Tổng kết)
```

Quy định route:

- `/` redirect nhẹ về `/about` hoặc render cùng nội dung.
- `/about` dùng dữ liệu phần `I. Trang Giới thiệu (About Me)` trong `portfolio.md`.
- `/projects` dùng dữ liệu 6 chương trong `II. Trang Dự án (Projects)`.
- `/conclusion` dùng dữ liệu phần `III. Trang Tổng kết (Conclusion)`.
- Navigation chỉ có 3 item: About, Projects, Conclusion — trình bày như các sticker label hay picnic tag.
- Route transition dùng Framer Motion `AnimatePresence` và variants chung trong `src/app/motionConfig.js`.
- Lenis chỉ xử lý scroll trong route hiện tại; khi đổi route phải scroll về top có kiểm soát.

---

## 5. Nội dung từng route

### Route 1: About Me (`/about`)

Concept: `Meadow Picnic Opening` — đồng cỏ mùa xuân mở ra, trang giới thiệu như tờ ghi chú viết tay đặt trên khăn caro hồng nhạt.

Nội dung bắt buộc — lấy từ `docs/portfolio.md`, không thêm thông tin ngoài file:

- Họ và tên: Trịnh Mai Hương.
- Ngày sinh: 06/06/2006.
- Mã sinh viên: 24063110.
- Ngành học: Luật.
- Trường: Đại học Luật, ĐHQGHN.
- Sở thích: du lịch, điện ảnh, âm nhạc — trình bày bằng icon Lucide tương ứng (`MapPin`, `Film`, `Music`).
- Phong cách cá nhân: nhẹ nhàng, êm ả, tinh tế — trích từ portfolio.md, không suy diễn thêm.
- Mục tiêu học tập và định hướng: trở thành người thực hành nghề luật phong thái nhẹ nhàng nhưng lập luận vững chắc; ứng dụng công nghệ để sắp xếp, tối ưu quy trình; đưa ra góc nhìn pháp lý nhân văn.
- Mục tiêu portfolio: cuốn nhật ký hành trình ghi lại những bước chân vào thế giới công nghệ, minh chứng sự nhẹ nhàng có thể song hành với tư duy phản biện.
- Nguyên tắc thực hiện: không bao giờ sao chép thụ động kết quả AI; mọi góc nhìn là ý kiến riêng; phản biện lại thông tin tự động.
- Công cụ đã sử dụng: File Explorer, Google Drive, thư viện điện tử và nền tảng học thuật quốc gia, Gemini, Copilot, Google Meet, Zoom, Canva, Microsoft Word.

UI bắt buộc:

- Hero có avatar từ `docs/avatar.jpg` đặt như ảnh polaroid kẹp bằng strawberry clip SVG.
- Hero background là scene SVG đồng cỏ nhiều lớp — không phải gradient phẳng.
- Có bướm và ong nhỏ SVG bay qua hero, hoa cỏ sway nhẹ.
- Nguyên tắc học thuật đặt trong card dạng picnic note / paper tag, viền caro nhạt.
- Icon Lucide: `MapPin` cho du lịch, `Film` cho điện ảnh, `Music` cho âm nhạc, `BookOpen` cho học thuật, `ShieldCheck` cho liêm chính.

### Route 2: Projects (`/projects`)

Concept: `Picnic Basket Treats` — 6 chương học tập được trình bày như các hộp bánh dễ thương trong giỏ picnic. Mỗi card có berry sticker, ribbon, và flower accent riêng.

Phải render đúng 6 chương sau, lấy từ `portfolio.md`, không thêm chương:

1. Tổ chức, sắp xếp và lưu trữ dữ liệu.
2. Khai thác dữ liệu và thông tin.
3. Tổng quan về trí tuệ nhân tạo.
4. Giao tiếp và hợp tác trong môi trường số.
5. Sáng tạo nội dung số.
6. An toàn và liêm chính học thuật trong môi trường số.

Mỗi project card phải có:

- Số chương (kiểu sticker số dâu nhỏ hoặc jam label).
- Tiêu đề chương.
- Mục tiêu ngắn gọn.
- Quá trình thực hiện tóm lược trung thành từ `portfolio.md`, giữ nguyên văn phong nhẹ nhàng của Hương.
- Link minh chứng PDF nếu file tồn tại.
- Icon Lucide phù hợp từng chương.
- Card decoration: viền gingham nhạt, berry sticker nhỏ ở góc, flower badge icon.

Mapping minh chứng:

| Chương   | File           |
| :------- | :------------- |
| Chương 1 | `docs/Bt1.pdf` |
| Chương 2 | `docs/bt2.pdf` |
| Chương 3 | `docs/bt3.pdf` |
| Chương 4 | `docs/bt4.pdf` |
| Chương 5 | `docs/bt5.pdf` |
| Chương 6 | `docs/Bt6.pdf` |

> **Lưu ý:** File thực tế trong `docs/` có tên `Bt1.pdf` và `Bt6.pdf` (chữ hoa B), còn lại là `bt2.pdf` đến `bt5.pdf`. Kiểm tra tồn tại file trước khi render link.

Mapping icon Lucide theo chương:

| Chương   | Icon Lucide  | Lý do                             |
| :------- | :----------- | :-------------------------------- |
| Chương 1 | `FileText`   | Tổ chức tệp tin và thư mục        |
| Chương 2 | `Search`     | Khai thác và tra cứu thông tin    |
| Chương 3 | `Sparkles`   | Trí tuệ nhân tạo                 |
| Chương 4 | `Users`      | Hợp tác nhóm trực tuyến          |
| Chương 5 | `Film`       | Sáng tạo nội dung — cô yêu phim  |
| Chương 6 | `ShieldCheck`| An toàn và liêm chính học thuật   |

### Route 3: Conclusion (`/conclusion`)

Concept: `Golden Hour Picnic Close` — cảnh hoàng hôn nhẹ trên đồng cỏ, trang tổng kết như note viết tay đặt cạnh lọ mứt dâu, có bướm bay qua và berry confetti khi kết thúc.

Nội dung bắt buộc — lấy từ `portfolio.md`:

- Trải nghiệm và sự thay đổi: cảm giác bình yên khi thiết lập góc học tập số; nhận ra công nghệ không áp lực nếu dùng tư duy tĩnh tại; hành trình nghiên cứu trở nên trôi chảy và thi vị.
- Hành trang quý giá nhất: thái độ học thuật độc lập; kỹ năng tra cứu văn bản chuyên sâu; năng lực phản biện sắc bén; sự nhịp nhàng khi làm việc nhóm trực tuyến.
- Điểm tâm đắc (3 gạch đầu dòng theo `portfolio.md`): bảo vệ tính nguyên bản và tư duy phản biện; thổi phong cách nhẹ nhàng vào bài tập pháp lý vẫn giữ chuẩn mực; xây dựng hệ thống lưu trữ ngăn nắp.
- Thách thức (3 gạch đầu dòng theo `portfolio.md`): nguy cơ tiếp nhận phân tích pháp lý sai lệch từ AI; tinh chỉnh ngôn ngữ câu lệnh trái ngược ngôn từ bay bổng thường ngày; vượt rào cản kỹ thuật ban đầu.
- Định hướng phía trước: mang sự nhẹ nhàng và tư duy độc lập vào con đường pháp lý; công nghệ là bạn đồng hành tinh giản quy trình; duy trì cân bằng qua du lịch và điện ảnh.
- Lời cảm ơn: trích đúng từ `portfolio.md`, không suy diễn thêm.

UI bắt buộc:

- Card so sánh `Điểm tâm đắc` và `Thách thức` phải cân đối, dễ đọc, dùng berry sticker và flower accent phân biệt hai nhóm.
- Berry confetti rải nhẹ khi scroll đến cuối trang hoặc khi trang load xong.
- Không thêm thông tin liên hệ (email, mạng xã hội) vì `portfolio.md` không có.

---

## 6. `portfolioData` trích xuất chuẩn từ `docs/portfolio.md`

Tạo file bắt buộc: `src/data/portfolioData.js`.

Không parse markdown trực tiếp trong component. Component chỉ import object đã chuẩn hóa. Nội dung phải bám `docs/portfolio.md`; được phép tóm lược câu dài nhưng không thêm thông tin mới, không thay đổi lập trường học thuật của Hương.

```js
// src/data/portfolioData.js
export const portfolioData = {
  person: {
    fullName: "Trịnh Mai Hương",
    dob: "06/06/2006",
    studentId: "24063110",
    major: "Luật",
    university: "Đại học Luật, ĐHQGHN",
    interests: ["Du lịch", "Điện ảnh", "Âm nhạc"],
    style: "Nhẹ nhàng, êm ả và tinh tế",
  },
  about: {
    intro:
      "Chào bạn, người đang dừng chân tại góc nhỏ bình yên của mình. Hy vọng nơi đây mang lại cảm giác êm ái, nhẹ nhàng như một bản nhạc du dương hay một thước phim chữa lành.",
    learningGoal:
      "Trở thành người thực hành nghề luật mang phong thái nhẹ nhàng nhưng lập luận vững chắc. Ứng dụng công nghệ như lên kế hoạch cho một chuyến đi — giúp mọi thứ ngăn nắp để dành trọn tâm trí cho góc nhìn pháp lý nhân văn.",
    portfolioGoal:
      "Không gian này như một cuốn nhật ký hành trình ghi lại những bước chân vào thế giới công nghệ. Minh chứng rằng sự nhẹ nhàng hoàn toàn có thể song hành với tư duy phản biện và năng lực làm chủ công cụ kỹ thuật số.",
    principle:
      "Độc lập trong học thuật — tuyệt đối không sao chép thụ động kết quả AI. Mọi góc nhìn là ý kiến riêng, đúc kết từ nghiên cứu tài liệu gốc và phản biện lại thông tin tự động.",
    tools: [
      "File Explorer",
      "Google Drive",
      "Thư viện điện tử và nền tảng học thuật quốc gia",
      "Gemini",
      "Copilot",
      "Google Meet",
      "Zoom",
      "Canva",
      "Microsoft Word",
    ],
  },
  projects: [
    {
      chapter: 1,
      title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.",
      process:
        "Dọn dẹp không gian máy tính như chuẩn bị hành lý cho một chuyến du lịch êm ả. Tạo thư mục gốc mang tên mình, phân nhánh thành các tệp bài học, thao tác đổi tên, sao chép, di chuyển và dọn dữ liệu vào thùng rác. Không gian làm việc trở nên trong trẻo, gọn gàng.",
      evidence: "docs/Bt1.pdf",
      icon: "FileText",
    },
    {
      chapter: 2,
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
      process:
        "Tra cứu chậm rãi, có chọn lọc qua các tạp chí khoa học uy tín. Tập hợp 10 nguồn tài liệu với 5 bài báo khoa học chất lượng. Từng nguồn được soi chiếu cẩn thận về uy tín tác giả, lập bảng đánh giá chi tiết và khách quan.",
      evidence: "docs/bt2.pdf",
      icon: "Search",
    },
    {
      chapter: 3,
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",
      process:
        "Đặt ba tác vụ cho hệ thống: tóm tắt văn bản, phân tích thuật ngữ và lập bộ đề ôn tập. Nâng cấp phiên bản câu lệnh qua nhiều lần. Nhận thấy công cụ số nhanh bén nhưng thiếu chiều sâu cảm xúc, từ đó đưa ra ý kiến phản biện riêng và chỉ ra điểm chưa hợp lý trong logic thuật toán.",
      evidence: "docs/bt3.pdf",
      icon: "Sparkles",
    },
    {
      chapter: 4,
      title: "Giao tiếp và hợp tác trong môi trường số",
      goal: "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
      process:
        "Tham gia chỉnh sửa trực tiếp trên Google Docs, viết nội dung chính cho các phần được phân công. Nhóm có phiên thảo luận trực tuyến hòa nhã: thống nhất chương trình từ trước, phân định vai trò điều phối, chia sẻ góc nhìn cởi mở, lắng nghe ý kiến nhau để tìm tiếng nói chung. Biên bản được đúc kết súc tích.",
      evidence: "docs/bt4.pdf",
      icon: "Users",
    },
    {
      chapter: 5,
      title: "Sáng tạo nội dung số",
      goal: "Thành thạo việc sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
      process:
        "Thiết kế bài thuyết trình chuyên đề như một thước phim ngắn giàu cảm xúc. Công cụ hỗ trợ phác thảo khung nội dung và hình ảnh, nhưng tự tay tinh chỉnh lại tông màu pastel và biên tập từng ngôn từ để truyền tải sự êm ả, chuyên nghiệp. Kèm theo phân tích sâu về ranh giới giữa mượn công cụ sáng tạo và đánh mất bản sắc cá nhân.",
      evidence: "docs/bt5.pdf",
      icon: "Film",
    },
    {
      chapter: 6,
      title: "An toàn và liêm chính học thuật trong môi trường số",
      goal: "Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
      process:
        "Trân trọng tri thức nguyên bản, thực hiện bài luận với sự hỗ trợ công cụ số nhưng lưu vết toàn bộ câu lệnh một cách minh bạch. Thiết kế 7 quy tắc đạo đức cá nhân thành bản đồ họa thông tin tối giản, nhẹ nhàng. Cam kết bảo vệ sự trong sáng học thuật, nói không với đạo văn.",
      evidence: "docs/Bt6.pdf",
      icon: "ShieldCheck",
    },
  ],
  conclusion: {
    experience:
      "Quá trình tự tay thiết lập góc học tập kỹ thuật số mang lại cảm giác vô cùng bình yên. Nhận ra công nghệ không khô cứng hay áp lực nếu ta biết cách điều hướng bằng tư duy tĩnh tại. Hành trình nghiên cứu trở nên trôi chảy và thi vị hơn rất nhiều.",
    highlights: [
      "Bảo vệ thành công tính nguyên bản và tư duy phản biện độc lập, đưa ra ý kiến riêng sắc nét thay vì mượn lời của các công cụ trí tuệ nhân tạo.",
      "Thổi được phong cách nhẹ nhàng, tinh tế vào các bài tập chuyên môn mà vẫn giữ được sự chuẩn mực, logic của ngành Luật.",
      "Xây dựng được hệ thống lưu trữ tài liệu ngăn nắp, tối ưu hóa đáng kể thời gian truy xuất thông tin, tạo cảm giác thư thái mỗi khi mở máy tính làm việc.",
    ],
    challenges: [
      "Nguy cơ tiếp nhận những phân tích pháp lý sai lệch từ thuật toán, đòi hỏi phải kiên nhẫn đối chiếu chậm rãi với các văn bản quy phạm pháp luật gốc.",
      "Việc tinh chỉnh ngôn ngữ câu lệnh đôi khi khá máy móc, trái ngược với thói quen sử dụng ngôn từ bay bổng, giàu cảm xúc thường ngày.",
      "Vượt qua rào cản kỹ thuật ban đầu để kết hợp hài hòa giữa sự tiện lợi của công nghệ và chiều sâu học thuật của từng bài nghiên cứu chuyên môn.",
    ],
    future:
      "Mang theo sự nhẹ nhàng và tư duy độc lập để tiến sâu hơn trên con đường pháp lý. Công nghệ sẽ là người bạn đồng hành giúp tinh giản quy trình tài liệu, để có thêm không gian tĩnh lặng đi sâu vào giải quyết các vấn đề luật học nhân văn, đồng thời duy trì sự cân bằng cuộc sống bằng những chuyến đi và những thước phim đẹp.",
    thanks:
      "Em xin gửi lời cảm ơn đến các thầy cô đã đặt ra những tiêu chuẩn học thuật nghiêm ngặt, tạo nền tảng để sinh viên phát triển tư duy nghiên cứu độc lập. Cảm ơn các thành viên trong nhóm đã cùng nhau tạo nên những phiên thảo luận chất lượng. Cảm ơn người đọc đã dành thời gian theo dõi Portfolio này.",
  },
};
```

Quy định dữ liệu:

- Không hardcode text rải rác trong component nếu text đó thuộc nội dung portfolio.
- Không thêm email, số điện thoại, mạng xã hội, kỹ năng lập trình hoặc kinh nghiệm làm việc vì `portfolio.md` không có.
- Nếu cần rút ngắn đoạn văn, giữ đúng ý gốc và không thay đổi văn phong nhẹ nhàng đặc trưng của Hương.
- Evidence PDF phải kiểm tra file tồn tại trước khi render link — lưu ý chữ hoa/thường của `Bt1.pdf` và `Bt6.pdf`.

---

## 7. Background là điểm nhấn chính — Quy định bắt buộc

Đây là yêu cầu thiết kế ưu tiên hàng đầu, không được giảm nhẹ:

- Background meadow SVG phải **phủ toàn bộ** viewport, không chỉ một dải hay góc màn hình.
- Background phải có **ít nhất 3 lớp parallax** tách biệt: sky (mây nhạt), mid-ground (đồng cỏ hoa), foreground (butterfly, bee, grass sway).
- Mỗi lớp có tốc độ parallax khác nhau khi scroll bằng Lenis.
- Ong và bướm SVG phải thực sự bay — không chỉ là static decor.
- Hoa cỏ phải sway nhẹ theo CSS keyframes.
- Card, text content nằm **trên lớp background** này, không thay thế nó.
- Background không được chỉ là gradient màu phẳng.

Các lớp background bắt buộc:

```
Layer 0 (xa nhất): Bầu trời hồng kem nhạt, vài đám mây trắng drift chậm
Layer 1: Đồng cỏ giữa — hoa cúc trắng vàng, tulip mini, clover sway
Layer 2: Khăn caro hồng nhạt trải trên cỏ — GinghamBlanketLayer
Layer 3: Foreground — bướm bay theo path cong, ong vòng quanh hoa, berry confetti rải nhẹ
Layer 4: UI content cards (bên trên tất cả)
```

---

## 8. Card design độc đáo — Quy định bắt buộc

Mỗi card trong app phải có **ít nhất 3** trong 5 đặc điểm sau — không được dùng card phẳng trơn:

1. **Viền gingham nhạt** (pattern caro hồng, không đặc): `border: 2px solid var(--huong-gingham)` hoặc SVG pattern.
2. **Berry sticker** ở một hoặc hai góc: hình dâu nhỏ SVG, hoặc badge tròn màu hồng pastel.
3. **Flower/bow accent**: hoa nhỏ hoặc ribbon nhỏ SVG ở header card.
4. **Paper texture nhẹ**: `box-shadow` mềm nhiều lớp tạo cảm giác giấy nổi.
5. **Patterned corner**: góc card có pattern mini — dot, tiny heart, leaf.

Card About (profile):

- Dạng polaroid: ảnh avatar có viền trắng dày, kẹp bằng strawberry clip SVG phía trên.
- Phần thông tin bên dưới ảnh như caption viết tay trên giấy.
- Card nổi lên nhẹ trên khăn caro background.

Card Projects (6 chương):

- Header card có số chương kiểu sticker jam label tròn nhỏ (màu theo nhóm: hồng / mint / vàng xen kẽ).
- Góc trên phải có berry sticker nhỏ (dâu, cherry, hoặc flower).
- Nội dung bên trong có viền trái màu hồng mềm như bookmark giấy.
- Hover: card nhấc lên 6px, sticker wiggle nhẹ, berry sparkle burst ở góc.

Card Conclusion:

- Dạng note viết tay đặt cạnh lọ mứt — nền hơi vàng kem (`--huong-bg-blush`).
- Có dải washi tape SVG ở đầu card.
- Viền nét đứt hoặc dashed border nhẹ.

---

## 9. Cấu trúc mã nguồn đề xuất

```txt
huongtm-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── app/
    │   ├── routes.jsx               ← React Router 6 setup, 3 routes
    │   ├── theme.js                 ← Token màu và font
    │   ├── motionConfig.js          ← Framer Motion variants chung
    │   └── lenisSetup.js            ← Lenis init, cleanup, reduced-motion check
    ├── data/
    │   └── portfolioData.js         ← Toàn bộ nội dung lấy từ portfolio.md
    ├── pages/
    │   ├── AboutPage.jsx            ← Route /about
    │   ├── ProjectsPage.jsx         ← Route /projects
    │   └── ConclusionPage.jsx       ← Route /conclusion
    ├── features/
    │   ├── picnic-meadow-scene/
    │   │   ├── MeadowBackground.jsx      ← Container toàn bộ bg SVG scene
    │   │   ├── SkyLayer.jsx              ← Layer 0: trời + mây
    │   │   ├── GrassMidLayer.jsx         ← Layer 1: đồng cỏ + hoa
    │   │   ├── GinghamBlanketLayer.jsx   ← Layer 2: khăn caro
    │   │   └── FlowerGrassSway.jsx       ← CSS keyframe sway cho hoa cỏ
    │   ├── butterfly-bee/
    │   │   ├── ButterflyDriftLayer.jsx   ← Layer 3: bướm bay path cong
    │   │   ├── BeeHoverLoop.jsx          ← Ong vòng quanh hoa
    │   │   └── BerryConfetti.jsx         ← Hạt confetti dâu nhỏ
    │   └── picnic-projects/
    │       ├── BasketProjectGrid.jsx     ← Grid 6 card
    │       ├── TreatProjectCard.jsx      ← Card từng chương
    │       └── BerryStickerFrame.jsx     ← Sticker decoration overlay
    ├── components/
    │   ├── layout/
    │   │   ├── AppShell.jsx         ← Wrapper chứa nav + outlet
    │   │   ├── HuongNav.jsx         ← Navigation 3 item dạng picnic tag
    │   │   └── PageTransition.jsx   ← AnimatePresence wrapper
    │   ├── sections/
    │   │   ├── PolaroidProfile.jsx  ← Avatar polaroid + info card
    │   │   ├── AboutInfoCards.jsx   ← Goals, principles, tools cards
    │   │   ├── ProjectGrid.jsx      ← Projects grid section
    │   │   └── ConclusionCards.jsx  ← Highlights + challenges + future
    │   └── ui/
    │       ├── BerryButton.jsx      ← CTA button hồng pastel
    │       ├── GinghamCard.jsx      ← Card base với viền caro và sticker
    │       ├── JamTag.jsx           ← Badge tròn kiểu jam label
    │       ├── FlowerBadge.jsx      ← Badge icon + hoa nhỏ
    │       └── SvgSceneLayer.jsx    ← Wrapper cho SVG layer có aria-hidden
    └── assets/
        └── strawberry-picnic-meadow/
            ├── svg/
            │   ├── meadow-picnic-scene.svg
            │   ├── strawberry-basket-set.svg
            │   ├── gingham-pattern-frames.svg
            │   ├── picnic-treat-icons.svg
            │   ├── bee-butterfly-set.svg
            │   ├── flower-grass-clusters.svg
            │   ├── berry-confetti.svg
            │   └── picnic-note-labels.svg
            └── images/
                └── (avatar được dùng từ docs/avatar.jpg, không copy)
```

---

## 10. Quy định SVG 2D bắt buộc

Theo `catalog-5.md`, project ưu tiên SVG 2D cho scene, decoration, pattern và animation nền. SVG phải tạo nhận diện chính cho theme — không chỉ là vài hình nhỏ góc màn hình.

Danh sách 8 SVG cần tạo (theo catalog):

| File                         | Nội dung cần vẽ                                        | Dùng cho               | Gợi ý kỹ thuật                                           |
| :--------------------------- | :----------------------------------------------------- | :--------------------- | :------------------------------------------------------- |
| `meadow-picnic-scene.svg`    | Đồng cỏ, khăn caro, giỏ mây, hoa, mây pastel nhạt      | Background chính       | Tách sky, grass, blanket, basket, flowers để parallax    |
| `strawberry-basket-set.svg`  | Giỏ dâu, quả dâu nhiều trạng thái, leaf, seed sparkle  | Hero / card decoration | Dâu là symbol reuse, seed tách để pop sparkle            |
| `gingham-pattern-frames.svg` | Khung caro hồng nhạt, ribbon, tape, corner patch        | Card frame             | Pattern fill nhẹ, viền nhiều màu, không flat             |
| `picnic-treat-icons.svg`     | Cake slice, macaron, jam jar, lemonade, sandwich cute   | Project badges         | Icon 24/32px, fill pastel nhạt, stroke trắng mềm         |
| `bee-butterfly-set.svg`      | Ong nhỏ, bướm nhiều màu pastel, trail dotted path       | Motion layer           | Tách cánh để flap, dùng path animation                   |
| `flower-grass-clusters.svg`  | Hoa cúc, tulip mini, cỏ, clover, leaf                   | Background / footer    | Stem group riêng để sway, opacity khác nhau              |
| `berry-confetti.svg`         | Dâu mini, heart seed, star, dot, ribbon bit             | Particle layer         | Random bằng CSS vars, giới hạn số visible                |
| `picnic-note-labels.svg`     | Note viết tay, price tag, sticker label, paper tape     | About / conclusion     | Paper grain nhẹ, tape group riêng để wiggle              |

Quy định kỹ thuật SVG:

- SVG phải là vector 2D, không export bitmap bọc trong SVG.
- Text nội dung không đặt trong SVG. Mọi heading, paragraph, button text phải là HTML.
- SVG phải có `viewBox`, không hardcode width/height cố định trong markup React nếu cần responsive.
- Dùng `currentColor` cho icon đơn sắc; dùng CSS variables cho SVG multi-color.
- Các phần animate phải tách thành group có class rõ: `.butterflyWing`, `.beeBody`, `.petalSway`, `.berryPop`, `.ginghamWave`.
- Animation SVG nhẹ (idle loop) dùng CSS keyframes; entrance/interaction dùng Framer Motion wrapper.
- Tối ưu SVG bằng SVGO trước khi ship.
- Không render quá 20–30 phần tử SVG động cùng lúc — đặc biệt trên mobile.
- `aria-hidden="true"` cho SVG trang trí; SVG có nội dung thông tin phải có `<title>`.

---

## 11. Palette màu — Quy định chặt

Palette hồng pastel nhạt, dịu là yêu cầu cốt lõi của project này. Tuân thủ các ràng buộc sau:

**Được dùng:**
- Hồng pastel nhạt: `#F4A7BE`, `#F9C8D8`, `#FBDCE8`, `#FFE8F0`
- Mint cỏ nhạt: `#A8EDCA`, `#C8F5E2`, `#F5FFF7`
- Vàng nắng nhạt: `#FFE89A`, `#FFF5CC`
- Tím mứt nhạt: `#D8B8FF`, `#EDD8FF`
- Nâu giỏ mây nhạt: `#E8C99A`
- Text nâu hồng ấm: `#4A2535`, `#8B6474`

**Không được dùng:**
- Đỏ dâu đậm gắt (`#FF5F8F` trở lên theo catalog gốc) — thay bằng phiên bản nhạt hơn `#F4A7BE`.
- Hồng neon hay màu rực rỡ quá mức.
- Đen thuần `#000000` hay trắng thuần `#FFFFFF` cho text chính.
- Gradient rực rỡ nhiều màu neon.
- Background tối (dark mode).

**Điều chỉnh so với catalog gốc:**  
Catalog gốc dùng `#FF5F8F` làm primary — quá đậm và đỏ cho tone nhạt dịu của Hương. Project này điều chỉnh xuống `#F4A7BE` (hồng pastel nhạt, dịu hơn) làm primary chính thức.

---

## 12. Motion và interaction rules

| Sự kiện             | Effect                                           | Tool                |
| :------------------ | :----------------------------------------------- | :------------------ |
| Route enter         | Fade + y 16px + scale 0.97 → 1, easing soft      | Framer Motion       |
| Page load           | Meadow layers fade-in stagger + blanket unfurl   | Framer Motion + CSS |
| Background idle     | Flower sway, cloud drift chậm, bee loop          | CSS keyframes       |
| Butterfly drift     | Bay theo path cong, rotate theo hướng di chuyển  | CSS / Framer Motion |
| Card enter          | Slide-up + scale 0.96 → 1, stagger theo card     | Framer Motion       |
| Card hover          | Lift 6px + sticker wiggle + berry sparkle burst   | Framer Motion       |
| Berry confetti      | Rải nhẹ khi scroll đến cuối hoặc page load xong  | Framer Motion / CSS |
| Gingham wave        | Wave rất nhẹ ở mép khăn, không làm text rung      | CSS keyframes       |
| Nav item hover/active | Sticker scale nhẹ + gingham highlight           | Framer Motion       |
| Scroll              | Smooth scroll toàn app, meadow parallax          | Lenis               |

Animation timing:

```js
// src/app/motionConfig.js
export const pageVariants = {
  initial: { opacity: 0, y: 16, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.3 } },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const stickerWiggle = {
  hover: { rotate: [0, -4, 4, -2, 2, 0], transition: { duration: 0.4 } },
};
```

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Lenis setup chuẩn:

```js
// src/app/lenisSetup.js
import Lenis from "lenis";

export function initLenis() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  const lenis = new Lenis({ lerp: 0.08, smooth: true });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}
```

---

## 13. Responsive

| Breakpoint | Layout                                                                     |
| :--------- | :------------------------------------------------------------------------- |
| Mobile ≤ 480px | 1 cột, meadow + khăn caro giữ nguyên, giảm bướm/ong về 1–2 cái, card full-width |
| Tablet 481–768px | 2 cột project cards, nav horizontal pill                               |
| Desktop ≥ 769px | 3 cột project cards, meadow scene full parallax, full butterfly/bee count |

Mobile rules:

- Giữ meadow background và blanket background chính.
- Giảm số lượng bướm/ong/confetti particle xuống còn 1–2 visible.
- Card về 1 cột, padding giảm nhẹ.
- Nav thu gọn thành 3 pill icons hoặc bottom tab.

---

## 14. Checklist triển khai

- [ ] App có đúng 3 routes: `/about`, `/projects`, `/conclusion`; `/` redirect về About.
- [ ] Không cài Tailwind, không tạo `tailwind.config.js`, không dùng utility class Tailwind.
- [ ] Cài đúng `react@18`, `react-dom@18`, `framer-motion`, `lenis`, `lucide-react`.
- [ ] Tạo `src/data/portfolioData.js` theo cấu trúc trong README này.
- [ ] Nội dung UI chỉ lấy từ `portfolioData`, không bịa thêm thông tin ngoài `docs/portfolio.md`.
- [ ] Theme hồng pastel nhạt — palette đúng theo mục 3, không dùng màu đỏ đậm catalog gốc.
- [ ] Background SVG meadow phủ toàn viewport, có ≥ 3 lớp parallax tách biệt.
- [ ] Ong và bướm SVG thực sự animated — không chỉ static.
- [ ] Hoa cỏ có CSS keyframe sway.
- [ ] Mỗi card có ≥ 3 đặc điểm decoration: viền gingham, berry sticker, flower/bow accent, paper shadow, patterned corner.
- [ ] Avatar dùng từ `docs/avatar.jpg` kiểu polaroid với strawberry clip SVG.
- [ ] Link PDF tồn tại trước khi render — lưu ý `Bt1.pdf`, `Bt6.pdf` (chữ hoa B).
- [ ] Icon Lucide đúng mapping: `MapPin`, `Film`, `Music`, `FileText`, `Search`, `Sparkles`, `Users`, `ShieldCheck`, `BookOpen`.
- [ ] Đủ 8 SVG assets trong `src/assets/strawberry-picnic-meadow/svg/`.
- [ ] Desktop/mobile không vỡ layout ở 375px, 768px, 1280px.
- [ ] Có reduced motion fallback CSS.
- [ ] Lenis cleanup đúng khi unmount, không chạy khi `prefers-reduced-motion`.
- [ ] Berry confetti animation khi scroll đến cuối hoặc conclusion page load.
- [ ] Không render quá 20–30 SVG particle cùng lúc.
- [ ] Chạy `npm run dev` không có lỗi trước khi bàn giao.

---

*Cập nhật: 2026-05-28. README này là quy chuẩn thiết kế và dữ liệu cho `huongtm-portfolio`, dựa trên `catalog-5.md` (theme `strawberry-picnic-meadow`) và `huongtm-portfolio/docs/portfolio.md`.*

> **Nguyên tắc cốt lõi:** Dữ liệu trong `docs/portfolio.md` là nguồn duy nhất (single source of truth). UI là lớp hiển thị — không phải nơi sáng tác nội dung. Palette hồng pastel nhạt là bất khả xâm phạm — không làm đậm hơn, không thêm màu gắt.
