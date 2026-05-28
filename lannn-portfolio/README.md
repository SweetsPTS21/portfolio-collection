# Style Catalog - Sunset Concert Law Diary (`sunset-concert-law-diary`)

## Dành riêng cho `lannn-portfolio`

> Chủ đề: Sunset Concert Law Diary  
> Nguồn phong cách: `catalog-5.md` - cute, dreamy, 2D SVG-first, nhiều animation mềm, background-first scene.  
> Cá nhân hóa: Nguyễn Ngọc Lan, sinh viên Luật, yêu đọc sách, nghe nhạc và không khí concert.  
> Tone màu bắt buộc: đỏ, cam, vàng theo hướng ấm, sáng, nữ tính, không dùng neon gắt và không dùng theme pastel hồng/tím mặc định của Catalog 5.  
> Techstack bắt buộc: React 18, Framer Motion, Lenis, Lucide icons. Không dùng Tailwind.

---

## 1. Tinh thần thiết kế

Theme phải kết hợp hai lớp tính cách trong `docs/portfolio.md`:

- Tư duy Luật học: nghiêm cẩn, phản biện độc lập, minh bạch, học thuật khắt khe.
- Đời sống cá nhân: bình yên khi đọc sách, giàu năng lượng khi nghe nhạc và xem concert.
- Trải nghiệm số: làm chủ dữ liệu, dùng AI như công cụ hỗ trợ, luôn kiểm chứng và giữ lập trường cá nhân.

Concept giao diện: một cuốn nhật ký pháp lý đặt trong không gian sân khấu hoàng hôn. Nền có lớp ánh đèn concert đỏ-cam-vàng, trang sách mở, con dấu học thuật, dây headphone, vé concert và tia sáng mềm. Tổng thể phải cute và dreamy theo Catalog 5 nhưng vẫn có cấu trúc rõ ràng, dễ đọc, phù hợp ngành Luật.

---

## 2. Techstack bắt buộc

Không dùng Tailwind trong project này. Toàn bộ layout và styling viết bằng CSS thuần, CSS modules hoặc file CSS theo component.

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Công nghệ     | Vai trò                                                                                            |
| :------------ | :------------------------------------------------------------------------------------------------- |
| React 18      | UI framework chính.                                                                                |
| Framer Motion | Route transition, section entrance, card hover, concert light sweep, badge pop.                    |
| Lenis         | Smooth scroll cho toàn app, cleanup khi unmount, tắt khi reduced motion.                           |
| Lucide React  | Icon hệ thống: BookOpen, Scale, Music, Headphones, FileText, Search, ShieldCheck, Users, Sparkles. |
| CSS thuần     | Theme tokens, responsive layout, keyframes, SVG layer positioning.                                 |

Không cài hoặc import `tailwindcss`, `@tailwindcss/vite`, `tailwind.config.js`, class utility kiểu `flex gap-6 p-8`. Nếu cần layout thì tạo class CSS có tên rõ nghĩa như `.routeShell`, `.projectGrid`, `.heroStage`.

---

## 3. Theme token riêng cho Lan

Theme ID: `sunset-concert-law-diary`.

```js
// src/app/theme.js
export const theme = {
  id: "sunset-concert-law-diary",
  color: {
    bgBase: "#FFF7E8",
    bgPaper: "#FFFDF7",
    bgWarm: "#FFE7B8",
    primary: "#D9362B",
    primarySoft: "#FF6B4A",
    accentOrange: "#F97316",
    accentGold: "#F7B801",
    accentAmber: "#FFD166",
    textBase: "#351411",
    textMuted: "#7A3A24",
    border: "#F6B26B",
    shadow: "rgba(126, 45, 20, 0.18)",
  },
  radius: {
    card: 18,
    button: 999,
    sticker: 14,
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
  --lan-bg-base: #fff7e8;
  --lan-bg-paper: #fffdf7;
  --lan-bg-warm: #ffe7b8;
  --lan-red: #d9362b;
  --lan-coral: #ff6b4a;
  --lan-orange: #f97316;
  --lan-gold: #f7b801;
  --lan-amber: #ffd166;
  --lan-text: #351411;
  --lan-text-muted: #7a3a24;
  --lan-border: #f6b26b;
  --lan-shadow: rgba(126, 45, 20, 0.18);
}
```

Quy định màu:

- Đỏ dùng cho điểm nhấn học thuật, con dấu, CTA chính, trạng thái active.
- Cam dùng cho ánh đèn concert, hover, sticker, timeline node.
- Vàng dùng cho glow, highlight, badge, đường viền mềm.
- Text chính dùng nâu đậm `#351411`, không dùng đen thuần.
- Nền phải sáng, ấm, đủ contrast; không tạo giao diện tối.
- Không dùng palette một màu. Mỗi viewport phải thấy đủ đỏ, cam, vàng, giấy sáng và text nâu.

---

## 4. Route architecture bắt buộc: 3 routes

App chỉ có 3 route nội dung chính. Không tạo thêm trang phụ nếu chưa có yêu cầu.

```txt
lannn-portfolio/
├── / hoặc /about      -> Trang 1: About Me
├── /projects          -> Trang 2: Projects
└── /conclusion        -> Trang 3: Conclusion
```

Quy định route:

- `/` render cùng nội dung với `/about` hoặc redirect nhẹ sang `/about`.
- `/about` dùng dữ liệu phần `TRANG 1: GIỚI THIỆU (ABOUT ME)`.
- `/projects` dùng dữ liệu phần `II. Trang Dự án (Projects)` gồm đúng 6 chương.
- `/conclusion` dùng dữ liệu phần `III. Trang Tổng kết (Conclusion)`.
- Navigation chỉ có 3 item: About, Projects, Conclusion.
- Route transition dùng Framer Motion `AnimatePresence` và variants chung trong `src/app/motionConfig.js`.
- Lenis chỉ xử lý scroll trong route hiện tại; khi đổi route phải scroll về top có kiểm soát.

---

## 5. Nội dung từng route

### Route 1: About Me (`/about`)

Concept: `Golden Law Stage` - sân khấu hoàng hôn mở ra một trang nhật ký pháp lý.

Nội dung bắt buộc:

- Họ và tên: Nguyễn Ngọc Lan.
- Mã sinh viên: 24062017.
- Ngành học: Luật.
- Trường: Đại học Luật - Đại học Quốc gia Hà Nội.
- Sở thích: đọc sách, nghe nhạc, xem concert.
- Mục tiêu học tập: trở thành người thực hành nghề luật có tư duy phản biện sắc sảo và độc lập.
- Mục tiêu portfolio: minh chứng quá trình làm chủ không gian mạng, duy trì nghiêm cẩn học thuật trước nhiễu loạn dữ liệu số.
- Nguyên tắc thực hiện: phản biện độc lập, kiểm chứng chéo, minh bạch, không xuôi chiều với kết quả công cụ tự động.
- Công cụ đã sử dụng: File Explorer, Google Drive, thư viện điện tử Đại học Quốc gia, cơ sở dữ liệu học thuật uy tín, mô hình ngôn ngữ lớn, Google Meet, Zalo, Zoom, Canva, phần mềm xử lý văn bản.

UI bắt buộc:

- Hero có avatar từ `docs/avatar.jpg`.
- Hero background là scene SVG 2D, không phải gradient trống.
- Có `Scale` icon cho Luật, `BookOpen` cho đọc sách, `Headphones` hoặc `Music` cho âm nhạc, `Sparkles` cho concert.
- Các nguyên tắc học thuật đặt trong card dạng giấy/vé/con dấu, có màu đỏ-cam-vàng.

### Route 2: Projects (`/projects`)

Concept: `Six Digital Case Files` - 6 hồ sơ học tập được sắp trên bàn nghiên cứu dưới ánh đèn sân khấu.

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

| Chương   | File           |
| :------- | :------------- |
| Chương 1 | `docs/bt1.pdf` |
| Chương 2 | `docs/bt2.pdf` |
| Chương 3 | `docs/bt3.pdf` |
| Chương 4 | `docs/bt4.pdf` |
| Chương 5 | `docs/bt5.pdf` |
| Chương 6 | `docs/bt6.pdf` |

### Route 3: Conclusion (`/conclusion`)

Concept: `Final Encore Reflection` - dư âm cuối của một đêm nhạc, khép lại bằng trang sách và định hướng nghiên cứu pháp lý.

Nội dung bắt buộc:

- Trải nghiệm và sự thay đổi: phá bỏ vùng an toàn, tự tin hơn với lưu trữ số và công cụ hiện đại, biết truy vấn thông tin AI.
- Điểm tâm đắc: hệ thống lưu trữ logic, tư duy phản biện độc lập khi xử lý thông tin AI, kết hợp làm việc nhóm trực tuyến và nghiên cứu độc lập.
- Thách thức: thông tin lớn và thiếu xác thực, tinh chỉnh prompt cho thuật ngữ luật, cân bằng công nghệ mới với chiều sâu học thuật.
- Định hướng: ứng dụng công nghệ để tinh giản tra cứu án lệ, tập trung phân tích tình huống luật phức tạp, giữ cân bằng với âm nhạc và sách.
- Lời cảm ơn cuối bài.

UI bắt buộc:

- Timeline hoặc stage encore line bằng SVG 2D.
- Card so sánh `Tâm đắc` và `Thách thức` phải cân đối, dễ đọc.
- CTA cuối có icon `Mail` hoặc `Send`; không tự thêm thông tin liên hệ nếu `portfolio.md` không có.

---

## 6. `portfolioData` trích xuất chuẩn từ `docs/portfolio.md`

Tạo file bắt buộc: `src/data/portfolioData.js`.

Không parse markdown trực tiếp trong component. Component chỉ import object đã chuẩn hóa. Nội dung phải bám `docs/portfolio.md`; được phép tóm lược câu dài nhưng không thêm thông tin mới.

```js
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
      "Portfolio tổng hợp và hệ thống hóa các kỹ năng số đã học, thể hiện cách một sinh viên Luật kết hợp thói quen đọc sách tĩnh lặng, âm nhạc và nghiên cứu học thuật.",
    learningGoal:
      "Hướng tới việc trở thành người thực hành nghề luật có tư duy phản biện sắc sảo và độc lập, dùng công nghệ như công cụ phân loại dữ liệu để đào sâu bản chất sự việc.",
    portfolioGoal:
      "Minh chứng quá trình làm chủ không gian mạng, duy trì nghiêm cẩn học thuật và bảo vệ lập trường cá nhân trước nhiễu loạn dữ liệu số.",
    principle:
      "Phản biện độc lập, kiểm chứng chéo khắt khe, minh bạch tuyệt đối và không dễ dàng đồng ý với kết quả do công cụ tự động xuất ra.",
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
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục trên hệ điều hành.",
      process:
        "Quy hoạch ổ đĩa như phân loại một tủ sách lớn, tạo thư mục gốc theo mã sinh viên và tên, phân nhánh bài học, thao tác đổi tên, cắt dán, di chuyển và dọn dữ liệu nháp.",
      evidence: "docs/bt1.pdf",
      icon: "FileText",
    },
    {
      chapter: 2,
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ nguồn đáng tin cậy.",
      process:
        "Thiết lập bộ lọc tìm kiếm nâng cao, tập hợp 10 tài liệu tham khảo có 5 bài báo khoa học, đánh giá uy tín tác giả và tính thời sự, xuất danh mục theo chuẩn Harvard.",
      evidence: "docs/bt2.pdf",
      icon: "Search",
    },
    {
      chapter: 3,
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng mô hình ngôn ngữ lớn trong học tập.",
      process:
        "Đặt yêu cầu tóm tắt văn bản luật, giải thích thuật ngữ và lập đề ôn tập; nâng cấp prompt qua ba phiên bản và phản biện lại kết quả máy cung cấp.",
      evidence: "docs/bt3.pdf",
      icon: "Sparkles",
    },
    {
      chapter: 4,
      title: "Giao tiếp và hợp tác trong môi trường số",
      goal: "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
      process:
        "Lên lịch phiên thảo luận trực tuyến, thống nhất chương trình, phân vai điều phối và ghi biên bản, tranh biện tập trung, chia sẻ biên bản và đánh giá chéo.",
      evidence: "docs/bt4.pdf",
      icon: "Users",
    },
    {
      chapter: 5,
      title: "Sáng tạo nội dung số",
      goal: "Thành thạo sử dụng công cụ trí tuệ nhân tạo tạo sinh để hỗ trợ sáng tạo nội dung số.",
      process:
        "Thiết kế bài thuyết trình chuyên đề, dùng 3 công cụ tự động để phác thảo kịch bản và hình ảnh, sau đó tự biên tập ngôn từ và bố cục theo cá tính riêng.",
      evidence: "docs/bt5.pdf",
      icon: "Palette",
    },
    {
      chapter: 6,
      title: "An toàn và liêm chính học thuật trong môi trường số",
      goal: "Phát triển kỹ năng sử dụng trí tuệ nhân tạo có trách nhiệm và đạo đức trong học tập, nghiên cứu.",
      process:
        "Nghiên cứu quy tắc ứng xử học thuật, viết bài luận có dùng công cụ hỗ trợ, lưu vết prompt, xây dựng 7 quy tắc đạo đức cá nhân và thiết kế infographic.",
      evidence: "docs/bt6.pdf",
      icon: "ShieldCheck",
    },
  ],
  conclusion: {
    reflection:
      "Hành trình giúp Lan phá bỏ vùng an toàn, tự tin hơn với lưu trữ số và công cụ hiện đại, đồng thời rèn luyện thái độ hoài nghi và năng lực truy vấn thông tin do AI đưa ra.",
    highlights: [
      "Thiết lập hệ thống lưu trữ dữ liệu cá nhân logic và khoa học.",
      "Duy trì tư duy phản biện độc lập khi xử lý thông tin từ công cụ trí tuệ nhân tạo.",
      "Kết hợp hiệu quả kỹ năng làm việc nhóm trực tuyến và nghiên cứu độc lập.",
    ],
    challenges: [
      "Sàng lọc khối lượng thông tin lớn và đôi khi thiếu xác thực từ công cụ tự động.",
      "Tinh chỉnh câu lệnh để hệ thống hiểu đúng thuật ngữ chuyên ngành luật.",
      "Cân đối thời gian giữa công cụ công nghệ mới và chiều sâu học thuật của bài tập.",
    ],
    future:
      "Ứng dụng công nghệ để tinh giản quy trình tra cứu án lệ, tập trung phân tích tình huống luật phức tạp và giữ cân bằng với âm nhạc, sách.",
    thanks:
      "Cảm ơn thầy cô đã giúp định hình phương pháp nghiên cứu đúng đắn, cảm ơn các bạn cùng nhóm đã hợp tác ăn ý và cảm ơn người đọc đã dành thời gian theo dõi.",
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
│   │   ├── GoldenHero.jsx
│   │   ├── PrincipleCards.jsx
│   │   ├── ProjectCaseCard.jsx
│   │   └── EncoreTimeline.jsx
│   └── ui/
│       ├── GlowButton.jsx
│       ├── PaperCard.jsx
│       ├── StampBadge.jsx
│       └── SvgSceneLayer.jsx
└── assets/
    └── sunset-concert-law-diary/
        ├── svg/
        └── images/
```

---

## 8. Quy định SVG 2D bắt buộc

Theo Catalog 5, project này ưu tiên SVG 2D cho scene, mascot, icon trang trí, pattern và animation nền. SVG không được chỉ là vài hình trang trí góc màn hình; SVG phải tạo nhận diện chính cho theme.

Danh sách SVG cần tự tạo:

| File                          | Nội dung                                                        | Dùng cho                              |
| :---------------------------- | :-------------------------------------------------------------- | :------------------------------------ |
| `sunset-stage-bg.svg`         | Sân khấu hoàng hôn, tia đèn đỏ-cam-vàng, lớp giấy sáng ở giữa   | Background hero và route shell        |
| `law-book-stage.svg`          | Cuốn sách luật mở, bookmark đỏ, highlight vàng                  | About hero                            |
| `concert-ticket-stickers.svg` | Vé concert, nốt nhạc, headphone, sparkles                       | Sticker quanh card                    |
| `legal-seal-set.svg`          | Con dấu học thuật, cán cân, vòng nguyệt quế, dấu kiểm minh bạch | Principle cards và conclusion         |
| `case-file-cards.svg`         | Folder hồ sơ, kẹp giấy, nhãn chương 01-06                       | Project cards                         |
| `ai-ethics-spark.svg`         | Sparkle, khiên, prompt bubble, dấu kiểm chứng                   | Chương 3 và chương 6                  |
| `encore-timeline.svg`         | Đường timeline như dây đèn sân khấu kết hợp dòng kẻ trang sách  | Conclusion                            |
| `warm-icon-symbols.svg`       | Symbol set 24x24 cho book, scale, music, search, users, shield  | Badge phụ nếu Lucide không đủ cá tính |

Quy định kỹ thuật SVG:

- SVG phải là vector 2D tự tạo hoặc chỉnh sửa theo theme, không export bitmap bọc trong SVG.
- Text chính không đặt trong SVG. Mọi heading, paragraph, button text phải là HTML để responsive và accessible.
- SVG phải có `viewBox`, không hardcode width/height cố định trong markup React nếu cần responsive.
- Dùng `currentColor` cho icon đơn sắc; dùng CSS variables cho SVG multi-color nếu có thể.
- Các phần cần animate phải tách thành group có class rõ: `.stageBeam`, `.ticketFloat`, `.sealPulse`, `.sparkleDot`.
- Animation SVG nhẹ dùng CSS keyframes; entrance/interaction dùng Framer Motion wrapper.
- Tối ưu SVG bằng SVGO trước khi ship.
- Không render quá 30 phần tử SVG động cùng lúc trên mobile.
- Với `prefers-reduced-motion: reduce`, tắt beam sweep, sticker drift, sparkle twinkle, chỉ giữ layout tĩnh.
- SVG decor phải có `aria-hidden="true"`; SVG truyền thông tin phải có `<title>` hoặc label từ HTML gần kề.

---

## 9. Quy định image transparent background

Ảnh bitmap chỉ dùng khi cần nhân vật/scene mềm hơn SVG hoặc khi dùng ảnh AI-generated. Mọi ảnh tạo mới cho decoration phải có nền trong suốt.

Quy định bắt buộc:

- Định dạng ưu tiên: PNG transparent hoặc WebP transparent.
- Lưu trong `src/assets/sunset-concert-law-diary/images/`.
- Tên file dùng kebab-case: `lan-reading-avatar-frame.png`, `concert-light-stickers.webp`.
- Background phải alpha thật, không dùng nền trắng giả trong ảnh.
- Không nhúng chữ vào ảnh. Text nằm trong HTML.
- Không dùng ảnh stock mờ, crop tối, hoặc ảnh không thể hiện trực tiếp theme Lan.
- Ảnh decorative phải nhẹ hơn 300KB mỗi file sau optimize.
- Ảnh hero nếu là transparent character/cutout phải có kích thước tối thiểu 1200px cạnh dài trước optimize để không vỡ trên desktop.
- Luôn có fallback CSS/SVG nếu ảnh không tải được.
- `alt` chỉ dùng cho ảnh có ý nghĩa nội dung. Ảnh trang trí dùng `alt=""` và `aria-hidden="true"`.

Prompt định hướng nếu cần generate ảnh transparent background:

```txt
Vietnamese female law student inspired character, warm sunset red orange yellow palette, holding law book and concert ticket, cute dreamy 2D illustration, clean outline, soft paper texture, transparent background, no text, no logo, no watermark
```

Không dùng ảnh generated để thay thế `docs/avatar.jpg` nếu route About cần ảnh cá nhân. Ảnh generated chỉ là mascot/decor.

---

## 10. Motion và interaction rules

| Sự kiện             | Effect                                   | Tool                |
| :------------------ | :--------------------------------------- | :------------------ |
| Route enter         | Fade + y 18px + scale 0.98 -> 1          | Framer Motion       |
| Hero load           | Stage lights sweep nhẹ, book open reveal | Framer Motion + CSS |
| Card hover          | Lift 6px, warm shadow, sticker wiggle    | Framer Motion       |
| Project grid reveal | Stagger từng case file                   | Framer Motion       |
| Background idle     | Sparkle twinkle, ticket float chậm       | CSS keyframes       |
| Scroll              | Smooth scroll, anchor movement           | Lenis               |

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
- [ ] Theme đỏ-cam-vàng thể hiện rõ ở hero, navigation, card, CTA và asset SVG.
- [ ] SVG 2D là nền nhận diện chính, không chỉ là decor phụ.
- [ ] Ảnh generated/decor nếu có phải transparent background thật.
- [ ] Link PDF `bt1.pdf` đến `bt6.pdf` hoạt động khi file tồn tại.
- [ ] Desktop/mobile không vỡ layout ở 375px, 768px, 1280px.
- [ ] Có reduced motion fallback.
- [ ] Chạy build trước khi bàn giao.

---

_Cập nhật: 2026-05-27. README này là quy chuẩn thiết kế và dữ liệu cho `lannn-portfolio`, dựa trên `catalog-5.md` và `lannn-portfolio/docs/portfolio.md`._
