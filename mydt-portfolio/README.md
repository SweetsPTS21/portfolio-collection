# Style Catalog — Serene Blue Law Diary (`serene-blue-law-diary`)

## Dành riêng cho `lannn-portfolio`

> Chủ đề: Serene Blue Law Diary
> Nguồn phong cách: `catalog-5.md` — cute, dreamy, 2D SVG-first, nhiều animation mềm, background-first scene.
> Cá nhân hóa: Nguyễn Ngọc Lan, sinh viên Luật, yêu đọc sách, nghe nhạc và không khí concert.
> Tone màu bắt buộc: xanh dương nhẹ nhàng (`#EAF4FF` → `#5BA8D8` → `#1E6FA8`), phân cấp tự nhiên từ trời cao xuống nước mát. Không dùng neon, không dùng theme tối, không dùng pastel hồng/tím mặc định.
> Techstack bắt buộc: React 18, Framer Motion, Lenis, Lucide icons. Không dùng Tailwind.

---

## 1. Tinh thần thiết kế

Theme kết hợp hai lớp tính cách trong `docs/portfolio.md`:

- **Tư duy Luật học**: nghiêm cẩn, phản biện độc lập, minh bạch, học thuật khắt khe.
- **Đời sống cá nhân**: bình yên khi đọc sách, nạp lại năng lượng bằng âm nhạc và không khí concert.
- **Trải nghiệm số**: làm chủ dữ liệu, dùng AI như công cụ hỗ trợ, luôn kiểm chứng và giữ lập trường cá nhân.

Concept giao diện: **một cuốn nhật ký pháp lý đặt trong không gian yên bình màu trời xanh nước biếc** — ánh sáng ban mai, trang giấy trắng ngập nắng xanh nhạt, note pháp lý dán lên như vết mực mát dịu, headphone treo bên trang sách, đường kẻ nhật ký mảnh, nốt nhạc trôi nhẹ. Tổng thể phải đủ cute và dreamy theo Catalog 5 nhưng giữ nguyên cấu trúc trang rõ ràng, dễ đọc — phù hợp ngành Luật.

---

## 2. Techstack bắt buộc

Không dùng Tailwind trong project này. Toàn bộ layout và styling viết bằng CSS thuần, hoặc CSS module theo component.

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Công nghệ     | Vai trò                                                                                                                      |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| React 18      | UI framework chính.                                                                                                          |
| Framer Motion | Route transition, section entrance, card hover, note-stick pop, book-page reveal.                                            |
| Lenis         | Smooth scroll toàn app, cleanup khi unmount, tắt khi `prefers-reduced-motion`.                                               |
| Lucide React  | Icon hệ thống: `BookOpen`, `Scale`, `Music`, `Headphones`, `FileText`, `Search`, `ShieldCheck`, `Users`, `Sparkles`, `Send`. |
| CSS thuần     | Theme tokens, responsive layout, keyframes, SVG layer positioning.                                                           |

Không cài hoặc import `tailwindcss`, `@tailwindcss/vite`, `tailwind.config.js`, class utility kiểu `flex gap-6 p-8`. Nếu cần layout thì tạo class CSS có tên rõ nghĩa như `.routeShell`, `.projectGrid`, `.heroStage`.

---

## 3. Theme token riêng cho Lan

Theme ID: `serene-blue-law-diary`.

```js
// src/app/theme.js
export const theme = {
  id: "serene-blue-law-diary",
  color: {
    bgBase: "#EAF4FF", // Nền trời xanh nhạt nhất
    bgPaper: "#F7FBFF", // Nền giấy trắng xanh sương
    bgMist: "#D3EAFB", // Lớp mist nhạt
    primary: "#2E86C1", // Xanh dương chủ đạo (học thuật, CTA)
    primarySoft: "#5BA8D8", // Xanh dương mềm (hover, timeline node)
    accentSky: "#90CAF9", // Xanh trời nhạt (sticker, badge)
    accentMint: "#B2EBF2", // Xanh mint (highlight, đường kẻ)
    accentSlate: "#1565C0", // Xanh đậm (tiêu đề chương, active state)
    textBase: "#1A3A5C", // Text chính — xanh navy đậm
    textMuted: "#4A7EA5", // Text phụ — xanh dương trung
    border: "#90CAF9", // Viền card nhạt
    shadow: "rgba(30, 111, 168, 0.12)", // Đổ bóng xanh nhẹ
  },
  radius: {
    card: 16,
    button: 999,
    sticker: 12,
  },
  font: {
    heading: "'Playfair Display', serif",
    body: "'Nunito', sans-serif",
  },
};
```

```css
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap");

:root {
  --lan-bg-base: #eaf4ff;
  --lan-bg-paper: #f7fbff;
  --lan-bg-mist: #d3eafb;
  --lan-blue: #2e86c1;
  --lan-blue-soft: #5ba8d8;
  --lan-sky: #90caf9;
  --lan-mint: #b2ebf2;
  --lan-slate: #1565c0;
  --lan-text: #1a3a5c;
  --lan-text-muted: #4a7ea5;
  --lan-border: #90caf9;
  --lan-shadow: rgba(30, 111, 168, 0.12);
}
```

Quy định màu:

- Xanh navy đậm (`#2E86C1`, `#1565C0`) dùng cho CTA chính, tiêu đề chương, active state, con dấu học thuật.
- Xanh dương mềm (`#5BA8D8`, `#90CAF9`) dùng cho hover, sticker, timeline node, border.
- Xanh mint (`#B2EBF2`) dùng cho highlight, glow nhẹ, đường kẻ nhật ký, badge phụ.
- Text chính dùng navy `#1A3A5C`, không dùng đen thuần.
- Nền phải sáng, mát và đủ contrast; không tạo giao diện tối.
- Không dùng palette một màu. Mỗi viewport phải thấy đủ xanh navy, xanh trời, xanh mint, nền giấy sáng và text navy.

---

## 4. Route architecture bắt buộc: 3 routes

App chỉ có 3 route nội dung chính. Không tạo thêm trang phụ nếu chưa có yêu cầu.

```txt
lannn-portfolio/
├── /           -> redirect nhẹ về /about
├── /about      -> Trang 1: About Me
├── /projects   -> Trang 2: Projects
└── /conclusion -> Trang 3: Conclusion
```

Quy định route:

- `/` render cùng nội dung với `/about` hoặc redirect nhẹ sang `/about`.
- `/about` dùng dữ liệu phần `TRANG 1: GIỚI THIỆU (ABOUT ME)` trong `docs/portfolio.md`.
- `/projects` dùng dữ liệu phần `II. Trang Dự án (Projects)` gồm đúng 6 chương.
- `/conclusion` dùng dữ liệu phần `III. Trang Tổng kết (Conclusion)`.
- Navigation chỉ có 3 item: **About**, **Projects**, **Conclusion**.
- Route transition dùng Framer Motion `AnimatePresence` và variants chung trong `src/app/motionConfig.js`.
- Lenis chỉ xử lý scroll trong route hiện tại; khi đổi route phải scroll về top có kiểm soát.

---

## 5. Nội dung từng route

### Route 1: About Me (`/about`)

Concept: `Sky Diary Opening` — trang nhật ký pháp lý mở ra trong không gian xanh trời bình yên.

Nội dung bắt buộc:

- Họ và tên: Nguyễn Ngọc Lan.
- Mã sinh viên: 24062017.
- Ngành học: Luật.
- Trường: Đại học Luật - Đại học Quốc gia Hà Nội.
- Sở thích: đọc sách, nghe nhạc, xem concert.
- Mục tiêu học tập: trở thành người thực hành nghề luật có tư duy phản biện sắc sảo và độc lập.
- Mục tiêu portfolio: minh chứng quá trình làm chủ không gian mạng, duy trì nghiêm cẩn học thuật trước nhiễu loạn dữ liệu số.
- Nguyên tắc thực hiện: phản biện độc lập, kiểm chứng chéo, minh bạch, không xuôi chiều với kết quả công cụ tự động.
- Công cụ đã sử dụng: File Explorer, Google Drive, thư viện điện tử Đại học Quốc gia, cơ sở dữ liệu học thuật uy tín, các mô hình ngôn ngữ lớn, Google Meet, Zalo, Zoom, Canva, phần mềm xử lý văn bản.

UI bắt buộc:

- Hero có avatar từ `docs/avatar.jpg`.
- Hero background là scene SVG 2D (trời xanh, nốt nhạc trôi, trang sách mở), không phải gradient trống.
- Có icon `Scale` cho Luật, `BookOpen` cho đọc sách, `Headphones` hoặc `Music` cho âm nhạc, `Sparkles` cho concert.
- Các nguyên tắc học thuật đặt trong card dạng sticky-note/giấy nhật ký có tone xanh dương nhạt.

### Route 2: Projects (`/projects`)

Concept: `Six Blue Case Files` — 6 hồ sơ học tập sắp trên bàn học yên tĩnh trong ánh sáng xanh ban mai.

Phải render đúng 6 chương sau, không thêm chương:

1. Tổ chức, sắp xếp và lưu trữ dữ liệu.
2. Khai thác dữ liệu và thông tin.
3. Tổng quan về trí tuệ nhân tạo.
4. Giao tiếp và hợp tác trong môi trường số.
5. Sáng tạo nội dung số.
6. An toàn và liêm chính học thuật trong môi trường số.

Mỗi project card phải có:

- Số chương.
- Tiêu đề chương.
- Mục tiêu.
- Quá trình thực hiện được tóm lược trung thành từ `portfolio.md`.
- Link minh chứng nếu file tồn tại: `docs/bt1.pdf` đến `docs/bt6.pdf`.
- Icon Lucide phù hợp từng chương.

Mapping file minh chứng:

| Chương   | File           | Icon Lucide   |
| :------- | :------------- | :------------ |
| Chương 1 | `docs/bt1.pdf` | `FileText`    |
| Chương 2 | `docs/bt2.pdf` | `Search`      |
| Chương 3 | `docs/bt3.pdf` | `Sparkles`    |
| Chương 4 | `docs/bt4.pdf` | `Users`       |
| Chương 5 | `docs/bt5.pdf` | `Palette`     |
| Chương 6 | `docs/bt6.pdf` | `ShieldCheck` |

### Route 3: Conclusion (`/conclusion`)

Concept: `Quiet Encore` — dư âm sau đêm nhạc, trang nhật ký khép lại bằng ánh xanh bình yên và định hướng pháp lý.

Nội dung bắt buộc:

- Trải nghiệm và sự thay đổi: phá bỏ vùng an toàn, tự tin hơn với lưu trữ số và công cụ hiện đại, biết truy vấn thông tin AI.
- Điểm tâm đắc: hệ thống lưu trữ logic, tư duy phản biện độc lập khi xử lý thông tin AI, kết hợp làm việc nhóm trực tuyến và nghiên cứu độc lập.
- Thách thức: thông tin lớn và thiếu xác thực, tinh chỉnh prompt cho thuật ngữ luật, cân bằng công nghệ mới với chiều sâu học thuật.
- Định hướng: ứng dụng công nghệ để tinh giản tra cứu án lệ, tập trung phân tích tình huống luật phức tạp, giữ cân bằng với âm nhạc và sách.
- Lời cảm ơn cuối bài.

UI bắt buộc:

- Timeline hoặc diary-line bằng SVG 2D, màu xanh dương — như dòng kẻ nhật ký kết hợp dây đèn nhẹ nhàng.
- Card so sánh `Tâm đắc` và `Thách thức` phải cân đối, dễ đọc, dùng tone xanh navy vs. xanh mist.
- CTA cuối có icon `Send` hoặc `Mail`; không tự thêm thông tin liên hệ nếu `portfolio.md` không có.

---

## 6. `portfolioData` trích xuất chuẩn từ `docs/portfolio.md`

Tạo file bắt buộc: `src/data/portfolioData.js`.

Không parse markdown trực tiếp trong component. Component chỉ import object đã chuẩn hóa. Nội dung phải bám `docs/portfolio.md`; được phép tóm lược câu dài nhưng không thêm thông tin mới.

```js
// src/data/portfolioData.js
export const portfolioData = {
  person: {
    fullName: "Nguyễn Ngọc Lan",
    studentId: "24062017",
    major: "Luật",
    university: "Đại học Luật - Đại học Quốc gia Hà Nội",
    interests: ["Đọc sách", "Nghe nhạc", "Xem concert"],
  },

  about: {
    headline: "Hành trình chuyển đổi số của một cá nhân",
    intro:
      "Portfolio tổng hợp và hệ thống hóa các kỹ năng số đã học, thể hiện cách một sinh viên Luật kết hợp thói quen đọc sách tĩnh lặng, nhịp điệu âm nhạc và nghiên cứu học thuật.",
    learningGoal:
      "Hướng tới trở thành người thực hành nghề luật có tư duy phản biện sắc sảo và độc lập. Công nghệ là công cụ phân loại dữ liệu — giúp tiết kiệm thời gian để đào sâu vào bản chất sự việc.",
    portfolioGoal:
      "Minh chứng quá trình làm chủ không gian mạng, duy trì nghiêm cẩn học thuật và kiên quyết bảo vệ lập trường cá nhân trước nhiễu loạn dữ liệu số.",
    principle:
      "Phản biện độc lập, kiểm chứng chéo khắt khe, minh bạch tuyệt đối — không dễ dàng đồng ý với kết quả do công cụ tự động xuất ra.",
    tools: [
      "File Explorer",
      "Google Drive",
      "Thư viện điện tử Đại học Quốc gia",
      "Cơ sở dữ liệu học thuật uy tín",
      "Các mô hình ngôn ngữ lớn phổ biến hiện nay",
      "Google Meet",
      "Zalo",
      "Zoom",
      "Canva",
      "Phần mềm xử lý văn bản",
    ],
  },

  projects: [
    {
      chapter: 1,
      title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành.",
      process:
        "Quy hoạch ổ đĩa như phân loại một tủ sách lớn — khởi tạo thư mục gốc mang mã sinh viên và tên, phân nhánh thành tệp bài học, thao tác liên tục lệnh đổi tên, cắt dán, di chuyển tài liệu vào đúng phân khu, dọn dữ liệu nháp vào thùng rác và xóa vĩnh viễn.",
      evidence: "docs/bt1.pdf",
      icon: "FileText",
    },
    {
      chapter: 2,
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
      process:
        "Thiết lập bộ lọc tìm kiếm nâng cao để bóc tách thông tin từ tạp chí khoa học chuyên ngành, tập hợp 10 tài liệu tham khảo đảm bảo 5 bài báo khoa học chuẩn mực, soi chiếu uy tín tác giả và tính thời sự, lập bảng đánh giá chi tiết và xuất danh mục theo chuẩn Harvard.",
      evidence: "docs/bt2.pdf",
      icon: "Search",
    },
    {
      chapter: 3,
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",
      process:
        "Đặt ba yêu cầu cho hệ thống: tóm tắt văn bản luật, giải thích thuật ngữ, lập bộ đề ôn tập. Nâng cấp cấu trúc câu lệnh qua ba phiên bản để kiểm tra giới hạn thuật toán. Đưa ra nhận định rõ ràng rằng máy móc chỉ lắp ghép từ vựng — không có tư duy; từ đó phản biện lại kết quả máy cung cấp để bảo vệ tính nguyên bản.",
      evidence: "docs/bt3.pdf",
      icon: "Sparkles",
    },
    {
      chapter: 4,
      title: "Giao tiếp và hợp tác trong môi trường số",
      goal: "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
      process:
        "Lên lịch phiên thảo luận chuyên môn trực tuyến, thống nhất chương trình từ trước, phân định rõ người điều phối và ghi biên bản. Phiên họp 30 phút diễn ra với sự tập trung cao độ, tranh biện thẳng thắn để tìm giải pháp tối ưu. Chia sẻ biên bản đồng bộ kèm đánh giá chéo quá trình hợp tác.",
      evidence: "docs/bt4.pdf",
      icon: "Users",
    },
    {
      chapter: 5,
      title: "Sáng tạo nội dung số",
      goal: "Thành thạo sử dụng các công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ sáng tạo nội dung số.",
      process:
        "Phụ trách thiết kế một bài thuyết trình chuyên đề. Ba công cụ tự động hỗ trợ phác thảo kịch bản và hình ảnh minh họa nhanh; sau đó tự biên tập toàn bộ ngôn từ và sắp xếp bố cục để sản phẩm mang đúng cá tính. Đi kèm bài báo cáo phân tích về ranh giới ứng dụng và lạm dụng công nghệ.",
      evidence: "docs/bt5.pdf",
      icon: "Palette",
    },
    {
      chapter: 6,
      title: "An toàn và liêm chính học thuật trong môi trường số",
      goal: "Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập, nghiên cứu.",
      process:
        "Nghiên cứu bộ quy tắc ứng xử học thuật của nhà trường, thực hiện bài luận có dùng công cụ hỗ trợ và lưu vết minh bạch toàn bộ câu lệnh đã nhập. Tự xây dựng 7 quy tắc đạo đức cá nhân và thiết kế thành đồ họa thông tin với thông điệp: kiên quyết từ chối đạo văn, bảo vệ bản quyền, duy trì tinh thần hoài nghi khoa học.",
      evidence: "docs/bt6.pdf",
      icon: "ShieldCheck",
    },
  ],

  conclusion: {
    reflection:
      "Hành trình phá bỏ vùng an toàn, tự tin hơn với lưu trữ số và công cụ hiện đại. Điều trân trọng nhất là rèn luyện được thái độ hoài nghi và năng lực truy vấn thông tin do AI đưa ra — biết đặt prompt có cấu trúc và làm việc nhóm kỷ luật.",
    highlights: [
      "Thiết lập thành công hệ thống lưu trữ dữ liệu cá nhân logic và khoa học, tối ưu hóa đáng kể thời gian truy xuất tài liệu pháp lý.",
      "Duy trì tư duy phản biện độc lập trong quá trình xử lý thông tin từ công cụ trí tuệ nhân tạo, bảo vệ tính nguyên bản của bài làm.",
      "Kết hợp hiệu quả kỹ năng làm việc nhóm trực tuyến và khả năng tập trung nghiên cứu độc lập.",
    ],
    challenges: [
      "Khối lượng thông tin khổng lồ và đôi khi thiếu tính xác thực từ công cụ tự động đòi hỏi sàng lọc và đối chiếu liên tục với văn bản gốc.",
      "Tinh chỉnh ngôn ngữ câu lệnh để hệ thống hiểu đúng thuật ngữ chuyên ngành luật, tránh máy móc diễn giải sai lệch bản chất pháp lý.",
      "Cân đối thời gian giữa thao tác công cụ công nghệ mới và chiều sâu học thuật của từng bài tập chuyên môn.",
    ],
    future:
      "Mang theo tư duy mạch lạc và kỹ năng số để tiến sâu vào con đường nghiên cứu pháp lý. Ứng dụng công nghệ tinh giản tra cứu án lệ, dành toàn bộ tâm trí phân tích tình huống luật phức tạp, đồng thời giữ cân bằng để tiếp tục cháy hết mình với âm nhạc và sách.",
    thanks:
      "Em xin gửi lời cảm ơn chân thành đến các thầy cô đã giúp em định hình phương pháp nghiên cứu đúng đắn. Cảm ơn các bạn cùng nhóm đã hợp tác ăn ý và tạo nên những cuộc tranh luận mang lại hiệu quả cao. Và cảm ơn bạn đã dành thời gian đọc những chia sẻ này.",
  },
};
```

Quy định dữ liệu:

- Không hardcode text rải rác trong component nếu text đó thuộc nội dung portfolio.
- Không thêm email, số điện thoại, mạng xã hội, kỹ năng lập trình hoặc kinh nghiệm làm việc vì `portfolio.md` không có.
- Nếu cần rút ngắn đoạn văn, giữ đúng ý gốc và không thay đổi lập trường học thuật của Lan.
- Evidence PDF phải kiểm tra file tồn tại trước khi render link.

---

## 7. Cấu trúc mã nguồn đề xuất

```txt
src/
├── main.jsx
├── App.jsx
├── index.css
├── app/
│   ├── routes.jsx
│   ├── theme.js
│   ├── motionConfig.js
│   └── lenisSetup.js
├── data/
│   └── portfolioData.js
├── pages/
│   ├── AboutPage.jsx
│   ├── ProjectsPage.jsx
│   └── ConclusionPage.jsx
├── components/
│   ├── layout/
│   │   ├── AppShell.jsx
│   │   ├── LanNav.jsx
│   │   └── PageTransition.jsx
│   ├── sections/
│   │   ├── SkyDiaryHero.jsx
│   │   ├── PrincipleCards.jsx
`   │   ├── ProjectCaseCard.jsx
│   │   └── DiaryTimeline.jsx
│   └── ui/
│       ├── BlueButton.jsx
│       ├── NoteCard.jsx
│       ├── SealBadge.jsx
│       └── SvgSceneLayer.jsx
└── assets/
    └── serene-blue-law-diary/
        ├── svg/
        └── images/
```

---

## 8. Quy định SVG 2D bắt buộc

Theo Catalog 5, project này ưu tiên SVG 2D cho scene, mascot, icon trang trí, pattern và animation nền. SVG không được chỉ là vài hình trang trí góc màn hình; SVG phải tạo nhận diện chính cho theme.

Danh sách SVG cần tự tạo:

| File                       | Nội dung                                                                                | Dùng cho                              |
| :------------------------- | :-------------------------------------------------------------------------------------- | :------------------------------------ |
| `sky-diary-bg.svg`         | Bầu trời xanh nhạt, ánh ban mai, mây mỏng, nốt nhạc trôi nhẹ, trang giấy mở ở trung tâm | Background hero và route shell        |
| `law-book-open.svg`        | Cuốn sách luật mở, đánh dấu xanh dương, highlight mint, nét chữ mảnh                    | About hero                            |
| `music-diary-stickers.svg` | Headphone, nốt nhạc, vé concert nhỏ, sparkles xanh, bookmark                            | Sticker quanh card                    |
| `legal-seal-blue.svg`      | Con dấu học thuật tone xanh navy, cán cân, vòng nguyệt quế mảnh, dấu kiểm minh bạch     | Principle cards và conclusion         |
| `case-file-blue.svg`       | Folder hồ sơ xanh, kẹp giấy, nhãn chương 01–06 tone xanh                                | Project cards                         |
| `ai-ethics-bubble.svg`     | Prompt bubble, sparkle, khiên xanh, dấu kiểm chứng, nét mực nhạt                        | Chương 3 và chương 6                  |
| `diary-timeline.svg`       | Đường timeline như dòng kẻ nhật ký + chuỗi nốt tròn xanh nhạt                           | Conclusion                            |
| `blue-icon-symbols.svg`    | Symbol set 24×24: book, scale, music, search, users, shield — tone xanh                 | Badge phụ nếu Lucide không đủ cá tính |

Quy định kỹ thuật SVG:

- SVG phải là vector 2D tự tạo hoặc chỉnh sửa theo theme, **không export bitmap bọc trong SVG**.
- Text chính không đặt trong SVG. Mọi heading, paragraph, button text phải là HTML để responsive và accessible.
- SVG phải có `viewBox`, không hardcode `width`/`height` cố định trong markup React nếu cần responsive.
- Dùng `currentColor` cho icon đơn sắc; dùng CSS variables (`var(--lan-blue)`, `var(--lan-sky)`) cho SVG multi-color khi có thể.
- Các phần cần animate phải tách thành group có class rõ: `.skyCloud`, `.noteFloat`, `.sealPulse`, `.diaryLine`.
- Animation SVG nhẹ dùng CSS keyframes; entrance/interaction dùng Framer Motion wrapper.
- Tối ưu SVG bằng SVGO trước khi ship.
- Không render quá 30 phần tử SVG động cùng lúc trên mobile.
- Với `prefers-reduced-motion: reduce`, tắt cloud drift, note float, sparkle twinkle — chỉ giữ layout tĩnh.
- SVG decor phải có `aria-hidden="true"`; SVG truyền thông tin phải có `<title>` hoặc label từ HTML gần kề.

---

## 9. Quy định image transparent background

Ảnh bitmap chỉ dùng khi cần nhân vật/scene mềm hơn SVG hoặc khi dùng ảnh AI-generated. Mọi ảnh tạo mới cho decoration phải có nền trong suốt.

Quy định bắt buộc:

- **Định dạng ưu tiên**: PNG transparent hoặc WebP transparent.
- Lưu trong `src/assets/serene-blue-law-diary/images/`.
- Tên file dùng kebab-case: `lan-reading-avatar-frame.png`, `blue-music-stickers.webp`.
- Background phải alpha thật — **không dùng nền trắng giả trong ảnh**.
- Không nhúng chữ vào ảnh. Text nằm trong HTML.
- Không dùng ảnh stock mờ, crop tối, hoặc ảnh không thể hiện trực tiếp theme Lan.
- Ảnh decorative phải nhẹ hơn **300 KB** mỗi file sau optimize.
- Ảnh hero nếu là transparent character/cutout phải có kích thước tối thiểu **1200 px cạnh dài** trước optimize để không vỡ trên desktop.
- Luôn có fallback CSS/SVG nếu ảnh không tải được.
- `alt` chỉ dùng cho ảnh có ý nghĩa nội dung. Ảnh trang trí dùng `alt=""` và `aria-hidden="true"`.

Prompt định hướng nếu cần generate ảnh transparent background:

```txt
Vietnamese female law student inspired character, soft blue sky palette, holding law book and listening to headphones, cute dreamy 2D illustration, clean outline, gentle watercolor-like texture, transparent background, no text, no logo, no watermark
```

Không dùng ảnh generated để thay thế `docs/avatar.jpg` nếu route About cần ảnh cá nhân. Ảnh generated chỉ là mascot/decor.

---

## 10. Motion và interaction rules

| Sự kiện             | Effect                                     | Tool                |
| :------------------ | :----------------------------------------- | :------------------ |
| Route enter         | Fade + y 18px + scale 0.98 → 1             | Framer Motion       |
| Hero load           | Sky scene open reveal, book page unfold    | Framer Motion + CSS |
| Card hover          | Lift 6px, blue soft shadow, sticker wiggle | Framer Motion       |
| Project grid reveal | Stagger từng case file từ trái sang phải   | Framer Motion       |
| Background idle     | Note float nhẹ, cloud drift chậm           | CSS keyframes       |
| Scroll              | Smooth scroll, anchor movement             | Lenis               |

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

---

## 11. Checklist triển khai

- [ ] App có đúng 3 routes: `/about`, `/projects`, `/conclusion`; `/` trỏ về About.
- [ ] Không cài Tailwind, không tạo `tailwind.config.js`, không dùng utility class Tailwind.
- [ ] Cài đúng `react@18`, `react-dom@18`, `framer-motion`, `lenis`, `lucide-react`.
- [ ] Tạo `src/data/portfolioData.js` theo cấu trúc trong README này.
- [ ] Nội dung UI chỉ lấy từ `portfolioData`, không bịa thêm thông tin ngoài `docs/portfolio.md`.
- [ ] Theme xanh dương thể hiện rõ ở hero, navigation, card, CTA và asset SVG.
- [ ] SVG 2D là nền nhận diện chính, không chỉ là decor phụ.
- [ ] Ảnh generated/decor nếu có phải transparent background thật.
- [ ] Link PDF `bt1.pdf` đến `bt6.pdf` hoạt động khi file tồn tại.
- [ ] Desktop/mobile không vỡ layout ở 375px, 768px, 1280px.
- [ ] Có reduced motion fallback.
- [ ] Chạy build trước khi bàn giao.

---

_Cập nhật: 2026-05-27. README này là quy chuẩn thiết kế và dữ liệu cho `lannn-portfolio`, dựa trên `catalog-5.md` (theme `kitty-cafe-menu` — xanh dương nhẹ nhàng) và `lannn-portfolio/docs/portfolio.md`._
