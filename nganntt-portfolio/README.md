# Style Catalog - Blue Cafe Bakery Atelier (`blue-cafe-bakery-atelier`)

## Dành riêng cho `nganntt-portfolio`

> Chủ đề: Blue Cafe Bakery Atelier  
> Nguồn phong cách: `ui-styles-catalog.md` - `cafe-bakery`, cá nhân hóa bằng palette xanh dương dịu.  
> Cá nhân hóa: Nguyễn Thị Thu Ngân, yêu đọc sách, vẽ tranh, tư duy độc lập, phong cách tự do và phóng khoáng.  
> Techstack bắt buộc: React 18, Framer Motion, Lenis, Lucide icons.  
> Định hướng visual: đúng cafe-bakery, background là điểm nhấn, nhiều asset, nhiều animation mạnh, card design độc đáo.

---

## 1. Tinh thần thiết kế

Theme chỉ mang phong cách cafe-bakery. Chỉ dùng motif quán cafe, tiệm bánh, giấy menu, cốc sứ, khay bánh, khăn ăn, bảng phấn, sticker handmade, sách đọc và dụng cụ vẽ.

Concept giao diện: một quán cafe-bakery màu xanh dương dịu, có quầy bánh, bảng menu viết tay, hơi cafe, vụn bánh, giấy gói, khăn ăn, cốc sứ, khay bánh và nét cọ nghệ thuật. Portfolio của Ngân được kể như một buổi ghé quán: phần giới thiệu là quầy cafe mở cửa, phần dự án là menu 6 món, phần tổng kết là bàn cafe cuối ngày.

Tinh thần cần giữ:

- Thân thiện, đáng yêu, ấm áp, có gu.
- Nữ tính hiện đại nhưng không quá hồng, không dùng Y2K, không dùng cyberpunk.
- Xanh dương dịu là màu chủ đạo; vanilla, caramel, mocha và matcha là màu phụ.
- Nội dung vẫn dựa trên `docs/portfolio.md`, nhưng cách trình bày chỉ dùng ngôn ngữ cafe-bakery và sáng tạo cá nhân.
- Không đưa bất kỳ yếu tố thị giác nào nằm ngoài cafe-bakery, đọc sách và vẽ tranh.

---

## 2. Techstack bắt buộc

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Công nghệ | Vai trò |
| :-- | :-- |
| React 18 | UI framework chính, chia app thành 3 routes. |
| Framer Motion | Route transition, section reveal, menu-card hover, asset choreography, steam, crumb, sticker motion. |
| Lenis | Smooth scroll toàn app, scroll về đầu trang khi đổi route, tắt khi reduced motion. |
| Lucide React | Icon hệ thống: Coffee, Croissant, CakeSlice, CupSoda, BookOpen, Palette, Search, FolderOpen, Sparkles, Users, ShieldCheck, Send. |
| CSS thuần / CSS Modules | Theme tokens, responsive layout, keyframes, SVG layers, paper texture, card geometry. |

Không thêm framework UI nặng nếu chưa có yêu cầu. Không hardcode nội dung chính rải rác trong component; nội dung lấy từ data module đã chuẩn hóa.

---

## 3. Theme token riêng cho Ngân

Theme ID: `blue-cafe-bakery-atelier`.

```js
// src/app/theme.js
export const theme = {
  id: "blue-cafe-bakery-atelier",
  color: {
    bgBase: "#EAF6FF",
    bgPaper: "#F8FCFF",
    bgCanvas: "#D7ECFA",
    bgMenu: "#FFF9EF",
    primary: "#4D91C6",
    primaryDeep: "#2F6F9F",
    primarySoft: "#A9D7F4",
    accentSky: "#78BDE8",
    accentCaramel: "#D7A86E",
    accentVanilla: "#FFF1D6",
    accentMocha: "#B87A84",
    accentMatcha: "#8DBA9A",
    textBase: "#203747",
    textMuted: "#607988",
    border: "#B8D9EC",
    paperBorder: "#E7D2B6",
    shadow: "rgba(47, 111, 159, 0.18)",
  },
  radius: {
    card: 18,
    menu: 24,
    ticket: 10,
    button: 999,
  },
  font: {
    heading: "'Playfair Display', serif",
    body: "'Be Vietnam Pro', sans-serif",
    accent: "'Mali', cursive",
  },
};
```

```css
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Mali:wght@500;600;700&display=swap");

:root {
  --ngan-bg-base: #eaf6ff;
  --ngan-bg-paper: #f8fcff;
  --ngan-bg-canvas: #d7ecfa;
  --ngan-bg-menu: #fff9ef;
  --ngan-blue: #4d91c6;
  --ngan-blue-deep: #2f6f9f;
  --ngan-blue-soft: #a9d7f4;
  --ngan-sky: #78bde8;
  --ngan-caramel: #d7a86e;
  --ngan-vanilla: #fff1d6;
  --ngan-mocha: #b87a84;
  --ngan-matcha: #8dba9a;
  --ngan-text: #203747;
  --ngan-text-muted: #607988;
  --ngan-border: #b8d9ec;
  --ngan-paper-border: #e7d2b6;
  --ngan-shadow: rgba(47, 111, 159, 0.18);
}
```

Quy định màu:

- Xanh dương dịu dùng cho background, navigation active, route transition, shadow chính.
- Vanilla dùng cho giấy menu, recipe card, napkin, receipt, nền card phụ.
- Caramel dùng cho viền bánh, hover underline, sticker, icon bakery.
- Mocha dùng ít cho quote, ribbon, điểm nhấn mềm.
- Matcha dùng cho điểm hoàn thành, checkbox ingredient, tag tích cực.
- Text chính dùng xanh than `#203747`, không dùng đen thuần.
- Mỗi viewport phải thấy rõ xanh dương dịu + chất liệu cafe-bakery.

---

## 4. Kiến trúc 3 routes bắt buộc

App chỉ có 3 route nội dung chính.

```txt
nganntt-portfolio/
├── / hoặc /about      -> Trang 1: About Me
├── /projects          -> Trang 2: Projects
└── /conclusion        -> Trang 3: Conclusion
```

Quy định route:

- `/` render cùng nội dung với `/about` hoặc redirect nhẹ sang `/about`.
- `/about` dùng dữ liệu phần `I. Trang Giới thiệu (About Me)` nhưng trình bày như quầy cafe cá nhân.
- `/projects` dùng dữ liệu phần `II. Trang Dự án (Projects)` gồm đúng 6 chương, trình bày như menu 6 món.
- `/conclusion` dùng dữ liệu phần `III. Trang Tổng kết (Conclusion)`, trình bày như bàn cafe cuối ngày.
- Navigation chỉ có 3 item: `About`, `Projects`, `Conclusion`.
- Navigation style menu cafe: item giống dòng trong menu, có icon nhỏ và underline caramel khi active.
- Route transition dùng Framer Motion `AnimatePresence` với variants chung trong `src/app/motionConfig.js`.
- Lenis chỉ xử lý scroll trong route hiện tại; khi đổi route phải scroll về top có kiểm soát.
- Không tạo route phụ nếu chưa có yêu cầu.

---

## 5. Background là điểm nhấn chính

Background không được là màu phẳng hoặc gradient đơn. Mỗi route phải có background scene riêng cùng hệ cafe-bakery xanh dương.

### Layer nền chung

Toàn app có `CafeBakeryBackground` gồm nhiều lớp:

1. `blue-wash-paper` - texture giấy xanh nhạt, noise nhẹ, như giấy menu cao cấp.
2. `window-light` - ánh sáng cửa sổ cafe quét chéo, animation chậm theo scroll.
3. `floating-steam` - hơi cafe bay lên bằng SVG path hoặc CSS pseudo-element.
4. `pastry-crumbs` - vụn bánh nhỏ rơi nhẹ, giới hạn số lượng trên mobile.
5. `menu-notes` - tờ giấy order, receipt, sticky note bakery mờ phía sau, không chứa text thật.
6. `paint-strokes` - nét cọ xanh dương liên hệ sở thích vẽ tranh của Ngân.
7. `pastry-shelf` - kệ bánh mờ phía xa, tạo chiều sâu cho cafe-bakery.

Background phải tạo nhận diện trong 1 giây đầu. Card và nội dung nằm trên nền nhưng không che hết background. Tránh đặt toàn bộ app vào container trắng lớn làm mất theme.

### Route background

| Route | Background scene | Ý nghĩa |
| :-- | :-- | :-- |
| `/about` | `Blue Cafe Counter` - quầy cafe xanh, bảng menu, cốc sứ, cọ vẽ, sách đọc, avatar frame | Giới thiệu Ngân như chủ nhân góc cafe sáng tạo. |
| `/projects` | `Bakery Menu Board` - bảng menu lớn với 6 món bánh, giấy order, kẹp gỗ, sticker handmade | Mỗi chương là một món trong menu học tập. |
| `/conclusion` | `Closing Table Reflection` - bàn cafe cuối ngày, sổ ghi chú, crumbs, ánh cửa sổ, bookmark xanh | Tổng kết hành trình làm việc và sáng tạo. |

---

## 6. Asset bắt buộc

Tạo asset trong `src/assets/blue-cafe-bakery/`. Ưu tiên SVG tự tạo. Bitmap chỉ dùng khi cần illustration mềm hoặc texture đặc biệt.

```txt
src/assets/blue-cafe-bakery/
├── svg/
│   ├── blue-paper-texture.svg
│   ├── cafe-window-light.svg
│   ├── coffee-steam-paths.svg
│   ├── bakery-icons.svg
│   ├── pastry-illustration-set.svg
│   ├── menu-board-frame.svg
│   ├── recipe-card-frame.svg
│   ├── handwritten-flourishes.svg
│   ├── paint-stroke-ribbons.svg
│   ├── bakery-note-stickers.svg
│   └── conclusion-table-scene.svg
└── images/
    ├── transparent-mascot-optional.webp
    └── soft-blue-bakery-props-optional.webp
```

| Asset | Nội dung | Dùng cho | Quy định |
| :-- | :-- | :-- | :-- |
| `blue-paper-texture.svg` | Texture giấy xanh nhạt bằng noise thấp | Nền toàn app | Dùng `feTurbulence`, opacity thấp, không làm bẩn text. |
| `cafe-window-light.svg` | Tia sáng cửa sổ cafe, hình học mềm | Background routes | Group `.windowBeam` để animate sweep. |
| `coffee-steam-paths.svg` | 4-6 đường hơi cafe | Hero, card hover | Stroke xanh trắng, animate y/opacity. |
| `bakery-icons.svg` | Cup, croissant, bread, whisk, cake, recipe note, book, palette | Badge, nav, card decor | Icon outline, `currentColor`, stroke round cap. |
| `pastry-illustration-set.svg` | Croissant, cupcake, tart, coffee cup, recipe sheet | Project cards | Fill xanh/caramel/vanilla, shadow nhẹ. |
| `menu-board-frame.svg` | Khung bảng menu cafe kiểu xanh dương | Projects route | Không đặt text trong SVG. |
| `recipe-card-frame.svg` | Khung recipe card vintage, góc giấy, đường kẻ | Tool cards, project cards | Dùng CSS variable đổi border. |
| `handwritten-flourishes.svg` | Swirl gạch chân, mũi tên tay, sparkle phấn | Heading accent | Path có thể animate stroke-dashoffset. |
| `paint-stroke-ribbons.svg` | Nét cọ xanh, vệt màu Procreate-inspired | About, conclusion | Liên hệ sở thích vẽ tranh. |
| `bakery-note-stickers.svg` | Sticky note, bookmark, receipt, order ticket, washi tape | Decor cards | Không chứa text thật, dùng HTML overlay. |
| `conclusion-table-scene.svg` | Bàn cafe cuối ngày, sách, bút, crumbs, ánh cửa sổ | Conclusion background | SVG scene full-width responsive. |

Quy định SVG:

- SVG phải có `viewBox` và responsive.
- Text chính không nằm trong SVG; heading, paragraph, button text phải là HTML.
- SVG decor dùng `aria-hidden="true"`; SVG mang nghĩa cần `<title>` hoặc label từ HTML gần kề.
- Mọi group động cần class rõ: `.steamLine`, `.crumbParticle`, `.menuGlow`, `.paintRibbon`, `.noteFloat`, `.windowBeam`.
- Tối ưu bằng SVGO trước khi bàn giao.
- Không render quá 35 element động cùng lúc trên mobile.
- Với `prefers-reduced-motion: reduce`, tắt float, crumb fall, steam loop, window sweep; giữ layout tĩnh.

Prompt nếu cần tạo image transparent background:

```txt
soft blue cafe bakery atelier props, coffee cup, croissant, cupcake, recipe card, paint brush, handwritten note, cozy feminine 2D illustration, transparent background, no text, no logo, no watermark
```

---

## 7. Motion và animation rules

Theme cần nhiều animation rõ, nhưng nội dung vẫn dễ đọc.

| Sự kiện | Effect | Tool |
| :-- | :-- | :-- |
| Route enter | Page slide nhẹ từ phải, fade, scale 0.985 -> 1 | Framer Motion |
| Background load | Window light sweep, steam rise, paper texture shimmer | CSS keyframes + Framer Motion |
| Hero load | Avatar/menu board reveal theo stagger; paint stroke vẽ từ trái sang phải | Framer Motion |
| Scroll | Background layers parallax theo Lenis scroll progress | Lenis + transform CSS |
| Card hover | Menu card lift 8px, steam burst, crumb scatter, underline caramel draw | Framer Motion + CSS |
| Project reveal | 6 món menu xuất hiện theo stagger, mỗi card flip nhẹ như lật recipe card | Framer Motion |
| Tool item | Ingredient checkbox tick, icon bounce nhỏ | CSS transition |
| Conclusion | Bàn cafe sáng dần, receipt cards float nhẹ | Framer Motion |

Motion variants đề xuất:

```js
export const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -18, scale: 0.99 },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

export const menuCardVariants = {
  initial: { opacity: 0, rotateX: -8, y: 24 },
  animate: { opacity: 1, rotateX: 0, y: 0 },
  hover: { y: -8, rotate: -0.6, scale: 1.015 },
};
```

Reduced motion bắt buộc:

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

## 8. Card design độc đáo

Không dùng card trắng bo góc thông thường. Mỗi nhóm card phải có hình thái riêng nhưng thống nhất cafe-bakery.

### `BlueMenuCard`

Dùng cho project trong `/projects`.

- Hình như menu item trong quán cafe: tên món, mô tả, nguyên liệu, nhãn xem minh chứng.
- Góc card có notch nhỏ như giấy order.
- Border đôi: ngoài xanh dương, trong caramel mảnh.
- Header có số chương như `No. 01` hoặc `Special 01`.
- Evidence PDF hiển thị như nhãn order: `View receipt` hoặc `Open proof`.
- Hover: card nâng lên, icon croissant/cup hơi xoay, crumb scatter nhỏ.

### `RecipeCard`

Dùng cho công cụ, sở thích, thói quen làm việc.

- Hình recipe card với checkbox ingredient.
- Mỗi dòng công cụ hoặc thói quen là một ingredient.
- Icon Lucide đặt trước label, không dùng bullet tròn mặc định.
- Accent handwritten bằng Mali cho quote ngắn, ưu tiên hiển thị dấu tiếng Việt rõ.

### `AtelierStoryCard`

Dùng cho About.

- Nửa trên là avatar/menu-board frame, nửa dưới là story.
- Có paint stroke xanh phía sau avatar để liên hệ sở thích vẽ tranh.
- Có sticker nhỏ như `fresh ideas`, `daily special`, `handmade notes`.

### `ReflectionReceiptCard`

Dùng cho Conclusion.

- Hình receipt dài hoặc order slip.
- Các mục `Tâm đắc`, `Thách thức`, `Định hướng` như dòng order.
- Tổng kết cuối như dòng `Total: tự do + ngăn nắp + sáng tạo cá nhân`.

---

## 9. Nội dung từng route

### Route 1: About Me (`/about`)

Concept: `Blue Cafe Counter`.

Nội dung bắt buộc:

- Họ và tên: Nguyễn Thị Thu Ngân.
- Mã sinh viên: 24062025.
- Sở thích: đọc sách để mở rộng thế giới quan, vẽ tranh để thể hiện ý tưởng cá nhân.
- Phong cách: độc lập, tự do, phóng khoáng, không thích khuôn mẫu lối mòn, đề cao sự chủ động.
- Mục tiêu portfolio: minh chứng cho tư duy làm việc phóng khoáng nhưng ngăn nắp, dùng công nghệ phục vụ sáng tạo cá nhân.
- Nguyên tắc cá nhân: chủ động, kiểm tra thông tin kỹ, giữ giọng riêng, không phụ thuộc máy móc.
- Công cụ đã sử dụng: Notion, Microsoft OneDrive, Perplexity AI, Claude, Discord, Procreate, Figma.

UI bắt buộc:

- Hero dùng `docs/avatar.jpg` nếu hiển thị chân dung.
- Hero background có quầy cafe xanh, bảng menu, cốc cafe, cọ vẽ, recipe note, kệ bánh.
- Dùng icon `Coffee`, `Croissant`, `BookOpen`, `Palette`, `Sparkles`.
- Công cụ hiển thị dạng recipe ingredient list.
- Nguyên tắc cá nhân hiển thị dạng `RecipeCard`.

### Route 2: Projects (`/projects`)

Concept: `Six Specials on the Bakery Menu`.

Phải render đúng 6 chương sau, không thêm chương:

1. Tổ chức, sắp xếp và lưu trữ dữ liệu.
2. Khai thác dữ liệu và thông tin.
3. Tổng quan về trí tuệ nhân tạo.
4. Giao tiếp và hợp tác trong môi trường số.
5. Sáng tạo nội dung số.
6. An toàn và liêm chính trong môi trường số.

Mỗi project card phải có:

- Số chương.
- Tiêu đề chương.
- Mục tiêu.
- Quá trình thực hiện được tóm lược trung thành từ `portfolio.md`, nhưng wording UI theo menu cafe-bakery.
- Link minh chứng nếu file tồn tại.
- Icon Lucide phù hợp từng chương.
- Bakery label riêng: `house special`, `fresh batch`, `recipe note`, `team table`, `art pastry`, `care label`.

Mapping file minh chứng theo file thực tế:

| Chương | File |
| :-- | :-- |
| Chương 1 | `docs/Bt1.pdf` |
| Chương 2 | `docs/Bt2.pdf` |
| Chương 3 | `docs/Bt3.pdf` |
| Chương 4 | `docs/Bt4.pdf` |
| Chương 5 | `docs/Bt5.pdf` |
| Chương 6 | `docs/Bt6.pdf` |

### Route 3: Conclusion (`/conclusion`)

Concept: `Closing Table Reflection`.

Nội dung bắt buộc:

- Trải nghiệm và sự thay đổi: tái cấu trúc cách làm việc, biến không gian số thành góc sáng tạo mang bản sắc cá nhân.
- Giá trị thu nhận: kỹ năng sắp xếp dữ liệu, bóc tách thông tin, đặt câu hỏi trọng tâm, trao đổi nhóm linh hoạt, tự hoàn thiện sản phẩm trực quan.
- Điểm tâm đắc: giữ được tính nguyên bản trong cách trình bày, kết hợp Procreate với báo cáo, xây dựng hệ thống lưu trữ phân tầng khoa học.
- Thách thức: làm quen công cụ mới, tinh chỉnh câu lệnh, cân bằng thời gian giữa thiết kế hình ảnh và chiều sâu nội dung.
- Định hướng: tiếp tục dùng công nghệ để làm việc gọn hơn, có thêm không gian cho đọc sách, vẽ tranh và sáng tạo cá nhân.

UI bắt buộc:

- Background bàn cafe cuối ngày có sổ, note, bánh, coffee steam, paint stroke.
- Có receipt line hoặc dây đèn cafe bằng SVG 2D.
- Card `Điểm tâm đắc` và `Thách thức` cân đối, dễ đọc, không overlap.
- CTA cuối dùng icon `Send` hoặc `Mail`; không tự thêm email, số điện thoại, mạng xã hội nếu `portfolio.md` không có.

---

## 10. `portfolioData` trích xuất chuẩn từ `docs/portfolio.md`

Tạo file bắt buộc khi triển khai: `src/data/portfolioData.js`.

Không parse markdown trực tiếp trong component. Component chỉ import object đã chuẩn hóa. Nội dung phải bám `docs/portfolio.md`; được phép tóm lược câu dài và loại bỏ motif không thuộc cafe-bakery UI.

```js
export const portfolioData = {
  person: {
    fullName: "Nguyễn Thị Thu Ngân",
    studentId: "24062025",
    interests: [
      "Đọc sách để mở rộng thế giới quan",
      "Vẽ tranh để thể hiện ý tưởng cá nhân",
    ],
    style:
      "Độc lập, tự do, phóng khoáng, không thích khuôn mẫu lối mòn, đề cao sự chủ động.",
  },
  about: {
    headline: "Một góc cafe xanh dịu cho đọc sách, vẽ tranh và sáng tạo",
    intro:
      "Portfolio thể hiện sự kết hợp giữa tư duy logic, thói quen đọc sách và tinh thần tự do của một người yêu nghệ thuật.",
    portfolioGoal:
      "Minh chứng cho cách làm việc phóng khoáng nhưng ngăn nắp, dùng công nghệ để hỗ trợ sáng tạo cá nhân và tổ chức ý tưởng rõ ràng.",
    principle:
      "Chủ động, giữ giọng riêng, kiểm tra thông tin kỹ, không phụ thuộc máy móc và luôn tự hoàn thiện sản phẩm theo cách cá nhân.",
    tools: [
      "Notion",
      "Microsoft OneDrive",
      "Perplexity AI",
      "Claude",
      "Discord",
      "Procreate",
      "Figma",
    ],
  },
  projects: [
    {
      chapter: 1,
      title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục trên hệ điều hành.",
      process:
        "Ngân quy hoạch không gian máy tính như tổ chức một xưởng vẽ: tạo thư mục gốc trên OneDrive, phân nhánh bài học và dự án, đồng bộ ghi chú trên Notion, thao tác đổi tên, cắt dán, di chuyển và xóa dữ liệu không còn giá trị.",
      evidence: "docs/Bt1.pdf",
      icon: "FolderOpen",
      bakeryLabel: "Fresh batch",
    },
    {
      chapter: 2,
      title: "Khai thác dữ liệu và thông tin",
      goal: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin từ các nguồn đáng tin cậy.",
      process:
        "Ngân thiết lập bộ lọc tìm kiếm nâng cao, tập hợp tài liệu tham khảo, đánh giá độ tin cậy của nguồn và lập bảng đánh giá chi tiết để chọn thông tin phù hợp.",
      evidence: "docs/Bt2.pdf",
      icon: "Search",
      bakeryLabel: "Daily selection",
    },
    {
      chapter: 3,
      title: "Tổng quan về trí tuệ nhân tạo",
      goal: "Phát triển kỹ năng viết câu lệnh hiệu quả để tận dụng mô hình ngôn ngữ lớn trong học tập.",
      process:
        "Ngân dùng Claude và Perplexity AI cho các tác vụ tóm tắt, giải thích thuật ngữ và lập bộ đề ôn tập; thử nhiều phiên bản câu lệnh rồi tự kiểm tra, chỉnh sửa và giữ quyền quyết định cuối cùng.",
      evidence: "docs/Bt3.pdf",
      icon: "Sparkles",
      bakeryLabel: "Prompt recipe",
    },
    {
      chapter: 4,
      title: "Giao tiếp và hợp tác trong môi trường số",
      goal: "Rèn luyện kỹ năng tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp.",
      process:
        "Ngân tham gia dự án thuyết trình về ứng dụng AI trong cá nhân hóa việc học ngoại ngữ cho học sinh, sinh viên; dùng Trello để quản lý dự án và Google Docs để soạn thảo tài liệu, tạo báo cáo từ giai đoạn ý tưởng đến hoàn thành.",
      evidence: "docs/Bt4.pdf",
      icon: "Users",
      bakeryLabel: "Team table",
    },
    {
      chapter: 5,
      title: "Sáng tạo nội dung số",
      goal: "Thành thạo việc sử dụng các công cụ tạo sinh để hỗ trợ sáng tạo nội dung số.",
      process:
        "Ngân thiết kế infographic, dùng công cụ tự động để phác thảo ý tưởng và bố cục, sau đó trực tiếp vẽ minh họa bằng Procreate và dàn trang trên Figma để sản phẩm mang dấu ấn cá nhân.",
      evidence: "docs/Bt5.pdf",
      icon: "Palette",
      bakeryLabel: "Art pastry",
    },
    {
      chapter: 6,
      title: "An toàn và liêm chính trong môi trường số",
      goal: "Phát triển kỹ năng sử dụng công cụ số có trách nhiệm trong học tập và nghiên cứu.",
      process:
        "Ngân lưu vết câu lệnh minh bạch, tự thiết lập 7 quy tắc cá nhân và thiết kế infographic trên Figma, nhấn mạnh tính nguyên bản của ý tưởng và sự tỉnh táo trước dữ liệu điện tử.",
      evidence: "docs/Bt6.pdf",
      icon: "ShieldCheck",
      bakeryLabel: "Care label",
    },
  ],
  conclusion: {
    reflection:
      "Chuỗi dự án giúp Ngân tái cấu trúc cách làm việc, biến không gian số thành một góc sáng tạo mang đậm bản sắc cá nhân.",
    values: [
      "Sắp xếp dữ liệu cá nhân rõ ràng hơn.",
      "Biết bóc tách và chọn lọc thông tin từ nhiều nguồn.",
      "Thiết lập câu hỏi trọng tâm khi dùng công cụ AI.",
      "Phối hợp linh hoạt trong làm việc nhóm.",
    ],
    highlights: [
      "Giữ tính nguyên bản cho ý tưởng cá nhân.",
      "Kết hợp vẽ Procreate với sản phẩm báo cáo.",
      "Xây dựng hệ thống lưu trữ tài liệu phân tầng khoa học.",
    ],
    challenges: [
      "Thích nghi với giao diện và hệ thống lệnh của các công cụ mới.",
      "Tinh chỉnh câu lệnh để công cụ hiểu đúng yêu cầu.",
      "Phân bổ thời gian giữa thiết kế hình ảnh và chiều sâu nội dung.",
    ],
    future:
      "Ngân sẽ tiếp tục dùng công nghệ để làm việc gọn hơn, có thêm không gian cho đọc sách, vẽ tranh và sáng tạo cá nhân.",
  },
};
```

Quy định dữ liệu:

- Không thêm email, số điện thoại, mạng xã hội, kỹ năng lập trình hoặc kinh nghiệm làm việc vì `portfolio.md` không có.
- Không đưa yếu tố ngoài cafe-bakery, đọc sách và vẽ tranh vào UI.
- Nếu rút ngắn đoạn văn, giữ đúng ý về tính chủ động, tự do, ngăn nắp và sáng tạo cá nhân.
- Evidence PDF phải kiểm tra file tồn tại trước khi render link.

---

## 11. Cấu trúc mã nguồn đề xuất

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
│   ├── background/
│   │   ├── CafeBakeryBackground.jsx
│   │   ├── SteamLayer.jsx
│   │   ├── CrumbLayer.jsx
│   │   └── WindowLightLayer.jsx
│   ├── layout/
│   │   ├── AppShell.jsx
│   │   ├── CafeMenuNav.jsx
│   │   └── PageTransition.jsx
│   ├── sections/
│   │   ├── BlueCafeHero.jsx
│   │   ├── RecipeTools.jsx
│   │   ├── BakeryProjectMenu.jsx
│   │   └── ClosingTableReflection.jsx
│   └── ui/
│       ├── BlueMenuCard.jsx
│       ├── RecipeCard.jsx
│       ├── AtelierStoryCard.jsx
│       ├── ReflectionReceiptCard.jsx
│       ├── IngredientBadge.jsx
│       └── CafeButton.jsx
└── assets/
    └── blue-cafe-bakery/
        ├── svg/
        └── images/
```

---

## 12. Responsive và accessibility

- Kiểm tra layout ở 375px, 768px, 1280px.
- Text không được đè lên asset nền; mọi background phải có overlay/spacing đủ đọc.
- Card không nằm trong card khác.
- Button dùng icon Lucide nếu phù hợp; có label rõ hoặc `aria-label` nếu icon-only.
- Navigation keyboard accessible, focus ring rõ bằng xanh đậm hoặc caramel.
- Contrast text chính trên nền xanh nhạt và giấy vanilla phải đạt mức đọc được.
- Motion mạnh nhưng không cản đọc; reduced motion phải tắt animation loop.
- PDF link mở đúng file `Bt1.pdf` đến `Bt6.pdf`; nếu file thiếu thì không render link chết.
- Avatar `docs/avatar.jpg` phải có alt mô tả nếu là ảnh nội dung; decorative frame dùng `aria-hidden`.

---

## 13. Checklist triển khai

- [ ] App có đúng 3 routes: `/about`, `/projects`, `/conclusion`; `/` trỏ về About.
- [ ] Cài đúng `react@18`, `react-dom@18`, `framer-motion`, `lenis`, `lucide-react`.
- [ ] Tạo theme `blue-cafe-bakery-atelier` với palette xanh dương dịu.
- [ ] Tạo `src/data/portfolioData.js` theo cấu trúc trong README này.
- [ ] Nội dung UI bám `docs/portfolio.md`, không bịa thông tin ngoài nguồn.
- [ ] Giao diện chỉ dùng phong cách cafe-bakery, đọc sách và vẽ tranh.
- [ ] Background là điểm nhấn chính trên cả 3 routes, không dùng nền phẳng/gradient đơn.
- [ ] Tạo đầy đủ asset cafe-bakery trong `src/assets/blue-cafe-bakery/`.
- [ ] Có nhiều animation rõ: route transition, background parallax, steam, crumb, card flip/lift, stagger reveal.
- [ ] Card design dùng `BlueMenuCard`, `RecipeCard`, `AtelierStoryCard`, `ReflectionReceiptCard`, không dùng card trắng chung chung.
- [ ] Dùng Lucide icons đúng ngữ cảnh cafe-bakery.
- [ ] Link PDF `docs/Bt1.pdf` đến `docs/Bt6.pdf` hoạt động khi file tồn tại.
- [ ] Desktop/mobile không vỡ layout, không overlap text, không che hết background.
- [ ] Có reduced motion fallback.
- [ ] Chạy build trước khi bàn giao implementation.

---

_Cập nhật: 2026-05-28. README này là quy chuẩn thiết kế, nội dung và kiến trúc cho `nganntt-portfolio`, dùng đúng phong cách cafe-bakery từ `ui-styles-catalog.md` và dữ liệu từ `nganntt-portfolio/docs/portfolio.md`._
