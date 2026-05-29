# ANHNP Portfolio README

Quy chuẩn riêng cho portfolio Nguyễn Phương Anh. Nội dung lấy từ `docs/portfolio.md` và được biên tập theo đúng chủ đề dreamy pastel. Style dựa theo tinh thần `catalog-5`: background-first, nhiều asset 2D, animation rõ, card glass trong mờ.

---

## Theme ID

`lavender-dream-glass`

Portfolio là một không gian học tập trong mơ: kính tím trong mờ, ánh trăng lavender, giấy ghi chú bay nhẹ, sổ tay, trang sách, chòm sao, hạt sáng và lớp nền chuyển động. Tổng thể phải nhẹ nhàng, sâu lắng, nữ tính, chỉn chu, hợp với Nguyễn Phương Anh: người thích quan sát, làm việc từ tốn, cẩn thận và giữ tư duy độc lập.

| Yếu tố | Quy định |
| --- | --- |
| Cảm xúc | Mộng mơ, sâu lắng, thanh lịch, học thuật, yên tĩnh nhưng sống động |
| Không gian | Góc học tập mộng mơ giữa mây tím pastel, trăng, sao, sách, sổ tay, giấy bay |
| Hình khối | Glass card, folder card, note card, book tab, moon badge, floating sheet |
| Điểm nhấn | Background là nhân vật chính, có asset lớn làm focal point trong từng route |
| Card | Kính trong mờ, viền khúc xạ tím hồng, asset nhỏ, sticker, icon học tập/sáng tạo |
| Animation | Nhiều chuyển động nền, route transition mạnh, hover rõ, vẫn đọc tốt |

---

## Tech Stack

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Package | Vai trò |
| --- | --- |
| React 18 | App shell, pages, components, content rendering |
| Framer Motion | Route transition, scroll reveal, card hover, stagger, parallax transforms |
| Lenis | Smooth scroll, cảm giác trôi mềm qua các trang nội dung |
| lucide-react | Icon UI chuẩn: `BookOpen`, `FolderKanban`, `SearchCheck`, `Brain`, `Video`, `Palette`, `ShieldCheck`, `FileText`, `Sparkles`, `UserRound`, `Music2`, `Clapperboard` |

Không dùng UI framework nặng. Text chính phải là HTML/CSS, không đặt chữ trong SVG.

---

## Kiến Trúc 3 Routes

Chỉ có 3 routes nội dung. Không làm landing page riêng.

| Route | Trang | Nội dung nguồn |
| --- | --- | --- |
| `/about` | About Me | Phần I: giới thiệu, thông tin cá nhân, mục tiêu học tập, định hướng, nguyên tắc AI, công cụ |
| `/projects` | Projects | Phần II: 6 chương bài thực hành kỹ năng số |
| `/conclusion` | Conclusion | Phần III: trải nghiệm, hành trang, điểm tâm đắc, thách thức, định hướng, lời cảm ơn |

Route `/` redirect về `/about` hoặc render thẳng About. Navigation luôn có đủ `About`, `Projects`, `Conclusion`.

---

## App Structure Đề Xuất

```txt
src/
├── app/
│   ├── App.jsx                 ← shell + routes + background scene
│   ├── routes.jsx              ← /about, /projects, /conclusion
│   ├── motionConfig.js         ← variants, spring, stagger, reduced motion
│   ├── lenisSetup.js           ← Lenis init/cleanup
│   └── theme.js                ← color tokens + glass tokens
├── pages/
│   ├── AboutPage.jsx
│   ├── ProjectsPage.jsx
│   └── ConclusionPage.jsx
├── features/
│   ├── dreamy-study-background/
│   │   ├── LavenderMoonScene.jsx
│   │   ├── FloatingStudyPapers.jsx
│   │   ├── StarDustLayer.jsx
│   │   ├── GlassAuroraLayer.jsx
│   │   └── ParallaxBookshelf.jsx
│   ├── profile-story/
│   ├── practice-projects/
│   └── reflection/
├── components/
│   ├── layout/                 ← DreamShell, GlassNav, RouteTransition
│   └── ui/                     ← GlassCard, MoonBadge, PastelTag, SectionTitle
└── assets/lavender-dream-glass/
```

---

## Palette Tím Pastel Mộng Mơ

```js
export const theme = {
  token: {
    colorBgBase: "#F8F1FF",
    colorBgDeep: "#2E174D",
    colorBgContainer: "rgba(255, 255, 255, 0.46)",
    colorPrimary: "#C9A7FF",
    colorPrimaryStrong: "#9F6BFF",
    colorSecondary: "#F6B8E8",
    colorAccent: "#B8E3FF",
    colorWarm: "#FFE7A8",
    colorMint: "#BFF7E5",
    colorTextBase: "#332044",
    colorTextSecondary: "#755F8F",
    colorBorder: "rgba(201, 167, 255, 0.34)",
    colorGlassHighlight: "rgba(255, 255, 255, 0.72)",
    borderRadius: 24,
    fontFamily: "'Playfair Display', 'Inter', sans-serif",
  },
};

// --dream-lavender: #C9A7FF;
// --deep-violet: #2E174D;
// --moon-pink: #F6B8E8;
// --dream-blue: #B8E3FF;
// --paper-cream: #FFF7E8;
// --star-gold: #FFE7A8;
// --quiet-mint: #BFF7E5;
// --ink-purple: #332044;
```

Quy định:

- Tím pastel là màu chính, nhưng không để UI thành một mảng tím đơn điệu.
- Phối thêm hồng phấn, xanh sương, vàng sao, kem giấy, mint nhạt.
- Text chính dùng tím đậm để đủ tương phản.
- Glass card dùng nền trắng trong mờ, blur cao, viền tím hồng alpha thấp.

---

## Typography

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap");
```

| Loại | Font | Vai trò |
| --- | --- | --- |
| Heading | `Playfair Display` | Học thuật, thanh lịch, sâu lắng |
| Body | `Inter` | Dễ đọc, gọn, hợp nội dung dài |
| Badge/Meta | `Inter` semibold | Mã sinh viên, chapter, tool label, personal tag |

---

## Background-First Scene

Background phải là điểm nhấn lớn nhất. Mỗi route dùng cùng một thế giới hình ảnh, nhưng focus thay đổi theo nội dung. Không được chỉ dùng gradient, sparkle nhỏ hoặc particle rải rác. Mỗi route bắt buộc có ít nhất 2 asset lớn, nhìn thấy ngay trong first viewport, đóng vai trò như cảnh nền chính.

| Layer | Nội dung | Animation |
| --- | --- | --- |
| `sky-gradient-layer` | Gradient tím pastel, hồng trăng, xanh sương | Gradient flow chậm 18-28s |
| `moon-glass-layer` | Trăng lavender lớn, halo kính | Pulse + shimmer sweep |
| `aurora-refraction-layer` | Dải ánh sáng khúc xạ | Drift chéo + opacity loop |
| `study-paper-layer` | Trang giấy, note, sổ tay, task slip | Float, rotate, parallax scroll |
| `book-spine-layer` | Kệ sách mờ phía xa | Parallax chậm |
| `stardust-layer` | Hạt sáng, sparkle, dust | Twinkle stagger |
| `foreground-glass-layer` | Mảng kính blur ở mép màn hình | Move nhẹ khi đổi route |

### Large Focal Assets

| Route | Asset lớn bắt buộc | Vị trí | Kích thước tối thiểu desktop | Kích thước tối thiểu mobile |
| --- | --- | --- | --- | --- |
| `/about` | `lavender-moon-scene.svg` + `giant-glass-notebook.svg` | Trăng lệch phải/sau card, sổ tay kính lệch trái/dưới | Moon 42vw, notebook 34vw | Moon 72vw, notebook 62vw |
| `/projects` | `dream-folder-landscape.svg` + `floating-study-papers.svg` | Folder khổng lồ làm nền grid, giấy bay foreground | Folder 58vw, papers cluster 30vw | Folder 88vw, papers cluster 58vw |
| `/conclusion` | `constellation-dream-window.svg` + `thank-you-moon-gate.svg` | Cửa sổ chòm sao sau timeline, cổng trăng cuối trang | Window 52vw, moon gate 44vw | Window 86vw, moon gate 76vw |

Quy định focal assets:

- Asset lớn phải có silhouette rõ: trăng, sổ tay, folder, cửa sổ, cổng trăng. Không thay bằng blob trừu tượng.
- Asset lớn nằm sau content nhưng vẫn nhận diện được, opacity 0.62-0.9 tùy lớp.
- Mỗi asset lớn có chuyển động riêng: float, shimmer, parallax hoặc scale pulse.
- Particle nhỏ chỉ hỗ trợ chiều sâu, không được là background chính.
- Mobile vẫn phải thấy ít nhất 1 asset lớn trong first viewport, không được ẩn toàn bộ để chỉ còn gradient.
- Dùng `pointer-events: none` cho background assets, tránh cản tương tác.

Mobile giảm particle, giữ ít nhất một focal asset lớn, moon/aurora và vài giấy chính để không rối.

---

## Assets Bắt Buộc

Tạo đầy đủ trong `src/assets/lavender-dream-glass/`. Ưu tiên SVG tự tạo, tối ưu bằng SVGO.

| File | Nội dung | Dùng cho |
| --- | --- | --- |
| `lavender-moon-scene.svg` | Trăng tím, halo, mây mỏng, ánh kính | Background mọi route |
| `giant-glass-notebook.svg` | Sổ tay kính khổng lồ, trang mở, bookmark tím hồng | Focal asset `/about` |
| `glass-dream-library.svg` | Kệ sách, cột kính, bóng sách mờ, góc học tập | Background xa |
| `floating-study-papers.svg` | Trang tài liệu, note, task slip, file sheet | Particle/content accent |
| `dream-folder-landscape.svg` | Folder pastel khổng lồ, tab lớn, giấy ló ra sau | Focal asset `/projects` |
| `dream-folder-cards.svg` | Folder pastel, tab hồ sơ, kẹp giấy, sticker | Project cards |
| `constellation-dream-window.svg` | Cửa sổ kính lớn nhìn ra sao, rèm voan tím nhạt | Focal asset `/conclusion` |
| `thank-you-moon-gate.svg` | Cổng trăng lớn, mây mỏng, star trail | Final background `/conclusion` |
| `dream-icons-lucide-set.svg` | Book, shield, file, search, video, palette, brain, music, movie outline | Badge/nav phụ trợ |
| `aurora-glass-ribbons.svg` | Dải kính khúc xạ tím hồng xanh | Route transition/background |
| `sparkle-dust.svg` | Star, dot, diamond sparkle, tiny glow | Particle layer |
| `soft-note-stickers.svg` | Sticky note pastel, tape, corner fold | About/Conclusion |
| `chapter-seals.svg` | 6 con dấu nhỏ cho 6 chương | Project badges |
| `glass-card-textures.svg` | Noise, highlight edge, light streak | Card overlay |

Không dùng nền chỉ có gradient. Ít nhất 6 nhóm asset phải hiện rõ trong UI, trong đó tối thiểu 3 nhóm là asset lớn chiếm hơn 30% chiều rộng viewport trên desktop.

---

## Animation Rules

| Sự kiện | Effect | Tool |
| --- | --- | --- |
| App load | Moon halo nở, papers drift vào, nav glass hiện dần | Framer Motion |
| Route change | Aurora wipe + glass refraction + fade/slide | Framer Motion `AnimatePresence` |
| Scroll | Moon/bookshelf/papers parallax nhiều tốc độ | Lenis + `useScroll` |
| Card entrance | Blur-to-clear, lift up, sparkle stagger | Framer Motion |
| Card hover | Tilt nhẹ, viền sáng chạy, sticker pop, icon rotate | Framer Motion + CSS |
| Project hover | Folder mở hé, seal sáng, paper preview trượt ra | Framer Motion |
| Conclusion reveal | Timeline nodes sáng như chòm sao | Framer Motion stagger |
| Idle background | Paper float, star twinkle, aurora drift, halo pulse | CSS keyframes |

Animation mạnh và giàu cảm xúc, nhưng không che nội dung. Với `prefers-reduced-motion`, tắt particle drift, route wipe, parallax; chỉ giữ fade ngắn.

---

## Glass Card Design

Card không được là box trắng đơn giản. Mỗi card cần kính mờ, viền khúc xạ, asset nhỏ và hover state.

```css
.glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.28));
  border: 1px solid rgba(201, 167, 255, 0.36);
  box-shadow:
    0 24px 80px rgba(80, 42, 130, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(22px) saturate(145%);
  border-radius: 24px;
}
```

| Card | Route | Quy định |
| --- | --- | --- |
| `ProfileGlassCard` | `/about` | Kính lớn, moon badge, thông tin cá nhân, line art trang sách |
| `GoalRibbonCard` | `/about` | Ribbon tím hồng, note stack, icon `Brain` hoặc `SearchCheck` |
| `PrincipleNoteCard` | `/about` | Sticky note trong kính, nhấn mạnh không ỷ lại AI |
| `ChapterFolderCard` | `/projects` | Folder glass có tab, seal chương, paper preview, icon riêng |
| `ReflectionGlassCard` | `/conclusion` | Timeline node, star connector, reflection text |
| `ThankYouMoonCard` | `/conclusion` | Card trăng cuối trang, ánh dịu, lời cảm ơn |

Mỗi card phải có ít nhất một yếu tố: sticker, icon, folder tab, paper layer, seal, sparkle hoặc edge highlight.

---

## Nội Dung Bắt Buộc Từ `docs/portfolio.md`

Không tự bịa thêm thành tích. Có thể biên tập ngắn gọn cho UI, nhưng giữ nguyên ý chính.

### `/about`

- Lời chào của Nguyễn Phương Anh.
- Họ và tên: Nguyễn Phương Anh.
- Mã sinh viên: 24061051.
- Thông tin học tập hiển thị theo hướng trung tính, tập trung vào hành trình cá nhân và kỹ năng số.
- Sở thích: nghe nhạc, xem phim để thư giãn và cân bằng.
- Phong cách: nhẹ nhàng, sâu lắng, thích quan sát, từ tốn, cẩn thận, muốn hiểu bản chất vấn đề.
- Mục tiêu học tập: nắm kiến thức nền tảng, tìm kiếm và đánh giá nguồn thông tin đáng tin cậy, tư duy phản biện, lập luận logic, ứng dụng công nghệ và AI tạo sinh có trách nhiệm.
- Định hướng phát triển: rèn năng lực nghiên cứu, trình bày, làm việc số và kết hợp kiến thức học tập với công nghệ trong chuyển đổi số.
- Mục tiêu portfolio: tổng hợp bài tập kỹ năng số, chứng minh khả năng ứng dụng công nghệ vào học tập khoa học, gọn gàng, hiệu quả.
- Nguyên tắc AI: không ỷ lại; máy móc hỗ trợ tìm nhanh, còn chắt lọc và kết luận đến từ tư duy độc lập.
- Công cụ: File Explorer, Google Drive, thư viện số, nguồn học thuật trực tuyến, mô hình ngôn ngữ lớn, Google Meet, Canva, Microsoft Word.

### `/projects`

Hiển thị 6 `ChapterFolderCard`.

| Chapter | Tiêu đề | Nội dung trọng tâm | Icon |
| --- | --- | --- | --- |
| 1 | Tổ chức, sắp xếp và lưu trữ dữ liệu | Tạo, đổi tên, sao chép, di chuyển, xóa tệp/thư mục; tổ chức bằng mã sinh viên và tên thật; dọn dữ liệu thừa | `FolderKanban` |
| 2 | Khai thác dữ liệu và thông tin | Tìm kiếm, đánh giá thông tin học thuật; 10 tài liệu, 5 bài báo khoa học; đánh giá uy tín nguồn | `SearchCheck` |
| 3 | Tổng quan về trí tuệ nhân tạo | Prompt cho tóm tắt văn bản học tập, phân tích thuật ngữ, đề ôn tập; nhận diện giới hạn thuật toán; giữ phê phán độc lập | `Brain` |
| 4 | Giao tiếp và hợp tác trong môi trường số | Họp trực tuyến về AI trong nghiên cứu khoa học; lắng nghe, điều phối, thư ký, biên bản, đánh giá chéo | `Video` |
| 5 | Sáng tạo nội dung số | Infographic ô nhiễm môi trường Hà Nội; AI hỗ trợ phác thảo; tự chỉnh màu/câu chữ; phân tích ranh giới công cụ và bản sắc cá nhân | `Palette` |
| 6 | An toàn và liêm chính học thuật | Bài luận có lưu vết prompt, 7 quy tắc đạo đức cá nhân, chống đạo văn, kiểm chứng dữ liệu | `ShieldCheck` |

Mỗi project card có chapter seal, mục tiêu ngắn, quá trình thực hiện tóm tắt, badge kỹ năng số và hover folder-open.

### `/conclusion`

- Portfolio là trải nghiệm thiết thực.
- Thay đổi: bớt ngại thao tác máy tính, thấy công nghệ hữu ích nếu biết dùng, sắp xếp dữ liệu khoa học giúp tiết kiệm thời gian và nhẹ tâm lý.
- Hành trang: kiểm chứng thông tin, không tin tuyệt đối kết quả tìm kiếm, làm việc nhóm trực tuyến, giao tiếp qua màn hình.
- Điểm tâm đắc: hệ thống lưu trữ gọn/logic/dễ tìm; biết đặt câu hỏi và dùng công cụ đúng mục đích; giữ lập trường riêng; trình bày chỉn chu, thanh lịch, đúng yêu cầu học tập.
- Thách thức: sàng lọc thông tin vì công cụ có thể đưa dữ liệu chưa chính xác; khó viết prompt đúng ý và đúng thuật ngữ lúc đầu; cân đối thời gian giữa kỹ thuật portfolio và chất lượng nội dung.
- Định hướng: duy trì thói quen làm việc số cho các môn học và dự án học tập tiếp theo.
- Lời cảm ơn: thầy cô, các bạn trong nhóm, người đọc.

---

## Layout Theo Route

### `/about`

First viewport là nội dung giới thiệu thật. Dùng `ProfileGlassCard` với tên, mã sinh viên, phong cách cá nhân và sở thích. Background bắt buộc có trăng lavender lớn và sổ tay kính khổng lồ làm focal assets; kệ sách mờ và giấy bay chỉ là lớp phụ. Bên dưới là goal ribbons, principle note stack và tool chips.

### `/projects`

Grid 6 `ChapterFolderCard`: 1 cột mobile, 2 cột tablet, 3 cột desktop. Background bắt buộc có folder pastel khổng lồ nằm sau grid, thêm cụm giấy lớn bay ở foreground và seal chương. Hover mở folder và làm sáng icon.

### `/conclusion`

Reflection timeline dạng chòm sao. Background bắt buộc có cửa sổ chòm sao lớn phía sau timeline và cổng trăng lớn ở cuối trang. Challenges nằm trong glass cloud hoặc note stack. Thank-you panel cuối trang dùng moon card lớn. Không đặt card lồng card.

---

## Lucide Icons

| Nội dung | Icon |
| --- | --- |
| Học tập | `BookOpen` |
| Lưu trữ | `FolderKanban` |
| Tìm kiếm | `SearchCheck` |
| AI / prompt | `Brain` |
| Họp trực tuyến | `Video` |
| Sáng tạo | `Palette` |
| Liêm chính | `ShieldCheck` |
| Tài liệu | `FileText` |
| Dream accent | `Sparkles` |

Icon button cần accessible label hoặc tooltip. Không vẽ tay icon nếu lucide đã có icon tương đương.

---

## Performance Và Accessibility

- Tôn trọng `prefers-reduced-motion`.
- Particle visible: desktop 30-45, mobile 10-18.
- Lazy load background layer nặng nếu cần, nhưng không lazy load focal asset nằm trong first viewport.
- SVG tối ưu bằng SVGO.
- Text chính luôn là HTML.
- Contrast text tối thiểu 4.5:1 trên glass card.
- Navigation dùng keyboard được, focus ring rõ.
- Hover card có focus state tương đương.
- Background asset lớn không che hoặc làm khó đọc nội dung; dùng mask/blur/opacity nếu cần.
- Mobile 375px không overlap text/card/nav.

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

## Checklist Triển Khai

- [ ] Dùng theme ID `lavender-dream-glass`.
- [ ] Cài React 18, Framer Motion, Lenis, lucide-react.
- [ ] Chỉ có `/about`, `/projects`, `/conclusion`.
- [ ] `/` vào About.
- [ ] Nội dung lấy từ `docs/portfolio.md`, không tự bịa thêm.
- [ ] Tạo `src/assets/lavender-dream-glass/` với đủ asset bắt buộc.
- [ ] Background có asset lớn làm điểm nhấn: moon, notebook, giant folder, constellation window, moon gate.
- [ ] Mỗi route có ít nhất 2 focal assets lớn; first viewport thấy rõ ít nhất 1 asset lớn trên mobile.
- [ ] Card glass trong mờ, có viền khúc xạ và asset riêng.
- [ ] Projects đủ 6 chương.
- [ ] Dùng lucide icons đúng ngữ nghĩa.
- [ ] Có route transition, scroll reveal, hover animation, idle background animation.
- [ ] Có reduced motion fallback.
- [ ] Check responsive ở 375px, 768px, 1280px.
- [ ] Text không overlap background, nav, card, icon.
- [ ] Style tím pastel mộng mơ nhưng vẫn học thuật, rõ chữ, chỉn chu.

---

## Tinh Thần Cuối

Portfolio này là không gian học tập mộng mơ bằng kính tím pastel. Background, assets, cards và animations cùng kể câu chuyện về Nguyễn Phương Anh: nhẹ nhàng, sâu lắng, cẩn thận, biết dùng công nghệ nhưng giữ tư duy độc lập trong học tập.
