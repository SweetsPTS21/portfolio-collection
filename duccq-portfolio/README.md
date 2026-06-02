# Duccq Portfolio — Stadium Ocean Motion

README này quy định kiến trúc, theme, data và chuẩn triển khai cho portfolio của Cù Quang Đức. Chỉ dùng nội dung có trong `docs/portfolio.md`; không bịa thêm thông tin, không thêm yếu tố trang trí liên quan đến luật.

---

## Theme ID

`stadium-ocean-motion`

Portfolio mang tinh thần nam tính, nhanh, khỏe, giàu chuyển động: một sân vận động ven biển vào đêm hè, nơi năng lượng bóng đá, phim ảnh, âm nhạc và nhịp làm việc dứt khoát hòa thành background lớn. Theme kế thừa cách viết của `catalog-7`: background-first scene, nhiều asset 2D/Rive/SVG lớn, animation mạnh, card có hình khối riêng, không dùng card trắng trống.

Không dùng biểu tượng, texture, copywriting hoặc layout gợi luật, tòa án, cán cân, hồ sơ pháp lý, điều khoản, văn bản hành chính. Ngành học chỉ được phép xuất hiện như dữ liệu cá nhân lấy nguyên từ `docs/portfolio.md`, không biến thành theme visual.

---

## UI library / design tool stack

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react @rive-app/react-canvas
```

| Library / Tool | Vai trò chính | Nên dùng cho |
| -------------- | ------------- | ------------ |
| React 18 | App shell, component tree, route rendering | 3 route chính, data-driven sections |
| Framer Motion | UI animation, route transition, card hover, scroll reveal | Hero entrance, project stagger, card flip, CTA pulse |
| Lenis | Smooth scroll có kiểm soát | Storytelling dài trong từng route, anchor navigation |
| Lucide Icons | Icon line gọn, nam tính, dễ đồng bộ stroke | Football, film, music, drive, file, tool, spark icons |
| Rive | Object/mascot state machine | Stadium light rig, wave mascot, ball reaction, music pulse |
| SVGator | Timeline animation cho SVG scene | Ocean wave, stadium beam, equalizer, film strip drift |
| CSS Keyframes | Idle loop nhẹ và decoration lặp | Spotlight sweep, wave sway, particle drift, neon blink |

Nguyên tắc phân vai: Framer Motion xử lý UI và flow; Rive xử lý object có state; SVGator xử lý path/timeline phức tạp; Lenis chỉ lo scroll; Lucide chỉ dùng icon nhỏ, không thay thế asset lớn; SVG/Rive/background là trọng tâm visual.

---

## Đặc điểm nhận dạng

| Yếu tố | Mô tả |
| ------ | ----- |
| Cảm xúc | Trẻ, mạnh, nhanh, dứt khoát, linh hoạt |
| Hình khối | Stadium card, ticket slab, wave glass panel, neon edge, tilted media frame |
| Không gian | Sân bóng ven biển, sóng đêm, đèn pha, bảng điểm, loa nhạc, film strip |
| Chuyển động | Spotlight sweep, ball kick trail, wave surge, equalizer pulse, card snap lift |
| Điểm nhấn | Background full-bleed nhiều lớp, asset lớn, animation mạnh, card thiết kế độc đáo |

---

## Bảng màu

| Token | Hex | Dùng cho |
| ----- | --- | -------- |
| `midnight-navy` | `#07111F` | Nền chính, vùng sâu background |
| `stadium-blue` | `#0B4DFF` | Đèn sân, CTA, active route |
| `electric-cyan` | `#28E8FF` | Wave highlight, hover glow, icon accent |
| `turf-green` | `#18B86B` | Football accent, progress, positive state |
| `sunset-orange` | `#FF7A1A` | Energy burst, card corner, project badge |
| `steel-silver` | `#D6E2F0` | Text phụ, border sáng, metadata |
| `carbon-black` | `#03060A` | Shadow, overlay, depth layer |

Không dùng pastel hồng/lavender làm màu chính. Nếu cần sparkle, dùng cyan/silver/orange để giữ vibe nam tính.

---

## Typography

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap");
```

| Vai trò | Font | Quy định |
| ------- | ---- | -------- |
| Heading | `Space Grotesk` | Chữ lớn, tracking chặt, uppercase có kiểm soát |
| Body | `Inter` | Dễ đọc, tốc độ cao, không trang trí rườm rà |
| Badge / stat | `Space Grotesk` | Số liệu, mã sinh viên, chapter label |

---

## Kiến trúc 3 Routes

Chỉ có 3 route chính. Không tách thành nhiều page nhỏ hơn.

| Route | Tên route | Nội dung | Nguồn data |
| ----- | --------- | -------- | ---------- |
| `/` | `HomeFieldRoute` | Hero, thông tin cá nhân, sở thích, phong cách, mục tiêu portfolio | `docs/portfolio.md` mục I |
| `/projects` | `MatchProjectsRoute` | 6 bài tập thực hành dạng match cards / stadium tickets | `docs/portfolio.md` mục II + PDF trong `public/` |
| `/recap` | `FinalWhistleRoute` | Tổng kết, giá trị rút ra, nguyên tắc dùng AI, công cụ đã dùng | `docs/portfolio.md` mục I + III |

Navigation dùng stadium scoreboard: 3 tab lớn, transition ngang như camera pan qua khán đài. Không thêm route contact riêng nếu `docs/portfolio.md` không có thông tin liên hệ.

---

## Layout Ideas

- **Home:** Full-bleed stadium-ocean hero: sóng đêm, sân bóng, đèn pha, bảng điểm, film strip và equalizer line; profile nằm trên glass panel nghiêng.
- **Projects:** 6 project cards như vé trận đấu: chapter number là match number, mục tiêu là mission line, quá trình là play-by-play summary, PDF là match replay CTA.
- **Recap:** Final whistle timeline: tốc độ, tổ chức số, tư duy phản biện độc lập, nguyên tắc dùng AI và bộ công cụ hiện đại.

---

## Animation Rules

| Sự kiện | Effect | Thư viện |
| ------- | ------ | -------- |
| Page load | Stadium lights bật theo nhịp, wave layer trượt lên, hero card snap-in | Framer Motion |
| Route transition | Camera pan ngang + scoreboard number flip | Framer Motion |
| Background idle | 4 wave layers sway lệch phase 8–16s, spotlight sweep 10–14s | CSS/SVGator |
| Project reveal | Ticket cards stagger từ dưới lên, rotate nhẹ `-2deg` đến `2deg` | Framer Motion |
| Card hover | Lift mạnh, neon edge chạy quanh viền, ball trail hoặc film strip slide | Framer Motion/CSS |
| CTA hover | Replay button pulse + icon kick forward 6px | Framer Motion |
| Recap section | Equalizer bars pulse theo scroll progress | CSS/Framer Motion |

Animation được phép mạnh nhưng phải có nhịp. Không để background che nội dung; text panel luôn có overlay tối đủ contrast.

---

## Card Design

| Card type | Quy định thiết kế |
| --------- | ----------------- |
| `ProfileFieldCard` | Panel kính tối nghiêng, border cyan, avatar tròn như cầu thủ profile badge |
| `MatchTicketCard` | Vé trận đấu dày, góc xé, chapter number lớn, PDF CTA như replay button |
| `ToolChipCard` | Chip kim loại nhỏ, icon Lucide, hover sáng như scoreboard |
| `PrincipleCard` | Slab đen xanh, quote ngắn, line accent cam/cyan |
| `RecapTimelineCard` | Card nằm trên timeline final whistle, có progress rail và neon tick |

Không dùng card trắng mặc định. Mỗi card phải có ít nhất 2 yếu tố nhận dạng: frame riêng, badge, icon, pattern, edge glow, motion hoặc background texture.

---

## Component Notes

```txt
src/
├── app/
│   ├── App.jsx                         ← React 18 app shell
│   ├── routes.jsx                      ← 3 routes: /, /projects, /recap
│   └── theme.js                        ← stadium-ocean-motion tokens
├── data/
│   └── portfolioData.js                ← Data parse/tổng hợp từ docs/portfolio.md, không bịa thêm
├── pages/
│   ├── HomeFieldRoute.jsx              ← Hero + about + goals
│   ├── MatchProjectsRoute.jsx          ← 6 assignment cards + PDF links
│   └── FinalWhistleRoute.jsx           ← Conclusion + tools + AI principle
├── features/
│   ├── stadium-ocean-scene/
│   │   ├── StadiumOceanBackground.jsx
│   │   ├── WaveLayerStack.jsx
│   │   ├── SpotlightRig.jsx
│   │   └── ScoreboardNav.jsx
│   ├── motion-cards/
│   │   ├── ProfileFieldCard.jsx
│   │   ├── MatchTicketCard.jsx
│   │   └── RecapTimelineCard.jsx
│   └── content/
│       ├── ToolChipGrid.jsx
│       ├── PrincipleSlab.jsx
│       └── PdfReplayButton.jsx
└── assets/stadium-ocean-motion/
```

---

## Asset Plan

| File asset | Nội dung cần vẽ | Dùng cho | Gợi ý kỹ thuật |
| ---------- | --------------- | -------- | -------------- |
| `stadium-ocean-hero.svg` | Sân bóng ven biển, sóng đêm, đèn pha, bảng điểm | Hero/background | Tách sky, sea, field, lights thành layer riêng |
| `spotlight-rig.riv` | Dàn đèn sân có state idle/sweep/active | Background/nav | 3 state: idle, route-change, highlight |
| `football-trail.svg` | Bóng + vệt chuyển động cyan/orange | Project hover | Dùng mask/blur nhẹ, animate stroke dash |
| `film-music-strip.svg` | Film strip + equalizer line | About/recap decor | Loop ngang chậm, opacity thấp |
| `match-ticket-frame.svg` | Khung vé trận đấu, góc xé, perforation | Project card | Reuse bằng `<symbol>` |
| `wave-particle-field.svg` | Foam, hạt sáng, wave dust | Background particle | Random delay, opacity thấp |
| `scoreboard-ui.svg` | Bảng điểm 3 tab route | Navigation | Flip number khi đổi route |

Assets lớn là điểm nhấn bắt buộc. Không thay bằng gradient đơn giản.

---

## Data Rules

Data cho catalog/portfolio đặt tại `docs`, nguồn chính là `docs/portfolio.md`.

| Nhóm data | Lấy từ đâu | Quy định |
| --------- | ---------- | -------- |
| Personal | `docs/portfolio.md` mục I | Dùng đúng họ tên, mã sinh viên, ngành, trường, sở thích, phong cách |
| Goals | `docs/portfolio.md` mục I | Tóm tắt trung thành, không thêm định hướng ngoài tài liệu |
| Tools | `docs/portfolio.md` mục I | Chỉ dùng công cụ đã liệt kê |
| Projects | `docs/portfolio.md` mục II | Đủ 6 bài tập, giữ đúng tên chương, mục tiêu, quá trình |
| Files | `public/bai1.pdf` đến `public/bai6.pdf` | Link đúng bài tương ứng, không thêm file không tồn tại |
| Conclusion | `docs/portfolio.md` mục III | Dùng đúng ý tổng kết, nguyên tắc AI, giá trị học được |

Nếu nội dung thiếu, để trống hoặc ghi “chưa có trong `docs/portfolio.md`”. Không tự tạo email, số điện thoại, mạng xã hội, chứng chỉ, kỹ năng, giải thưởng, kinh nghiệm hoặc mô tả dự án mới.

---

## Content Tone

- Viết trẻ, gọn, giàu năng lượng, hợp nam.
- Ưu tiên từ khóa lấy từ `docs/portfolio.md`: nhanh gọn, hiện đại, hiệu quả, năng động, linh hoạt, dứt khoát, tư duy phản biện độc lập.
- Tránh ngôn ngữ hành chính, tranh tụng, điều khoản, hồ sơ, phán quyết, chứng cứ, cán cân.
- Không biến portfolio thành profile ngành học; theme chính là sân vận động ven biển + media motion.

---

## Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai |
| ------------ | ------------------- |
| Theme ID | Ghi rõ `stadium-ocean-motion` trong README và theme config nếu code được tạo sau này |
| Routes | Chỉ 3 routes: `/`, `/projects`, `/recap` |
| Techstack | React 18, Framer Motion, Lenis, Lucide React, Rive, SVGator/CSS keyframes |
| Background | Full-bleed, nhiều asset lớn, nhiều animation mạnh, là điểm nhấn visual chính |
| Cards | Card độc đáo, có frame/badge/pattern/motion, không card trắng trống |
| Data | Data đặt tại `docs`, nội dung lấy từ `docs/portfolio.md`, không bịa thêm |
| Visual ban | Không dùng yếu tố liên quan đến luật làm theme hoặc decoration |
