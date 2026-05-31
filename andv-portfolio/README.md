# ANDV Portfolio - Architecture & Theme Guide

> File này quy định hướng kiến trúc, techstack, routes, theme, assets và tiêu chuẩn UI cho `andv-portfolio`.
> Khi sinh code, chỉ lấy nội dung thật từ `docs/portfolio.md`; không bịa thêm thông tin, skill, dự án, số liệu hoặc mô tả cá nhân.

---

## 1. Định hướng tổng thể

`andv-portfolio` là portfolio cá nhân của Đào Việt An, sinh viên Luật Thương mại Quốc tế. Website phải giữ tinh thần nội dung trong `docs/portfolio.md`: đơn giản, thực tế, thẳng vào vấn đề, nhưng phần trình bày thị giác được nâng cấp mạnh theo phong cách nghệ thuật phương Đông.

Trải nghiệm mong muốn:

- Nền là điểm nhấn chính, có chiều sâu, chuyển động rõ, tạo cảm giác sân khấu thị giác.
- Nội dung vẫn dễ đọc, mạch lạc, súc tích, đúng với cá tính thực tế của portfolio.
- Assets lớn, giàu chất phương Đông: giấy dó, lụa đỏ, mực tàu, ấn triện, họa tiết vân mây, sóng, rồng/phượng cách điệu, mái đình, đèn lồng, hoa mẫu đơn, quạt, thư pháp.
- Animation nhiều, lung linh, có lớp lang; tránh hiệu ứng rẻ tiền hoặc làm chữ khó đọc.
- Thẻ trang trí phải độc đáo, sinh động, có cảm giác được thiết kế riêng cho chủ đề, không dùng card template cơ bản.

---

## 2. Techstack bắt buộc

| Công nghệ | Phiên bản | Vai trò |
|---|---:|---|
| React | 18 | Xây dựng UI component-based |
| Vite | latest | Dev server, bundling, build |
| Framer Motion | latest | Page transition, scroll reveal, decorative motion |
| Lucide Icons | latest | Icon hệ thống, action, metadata |
| Lenis | latest | Smooth scrolling |
| React Router DOM | latest | 3 routes chính |

Tên package khuyến nghị:

```bash
npm install react@18 react-dom@18
npm install @vitejs/plugin-react vite@latest
npm install framer-motion lucide-react lenis react-router-dom
```

---

## 3. Routes

Website có đúng 3 routes chính:

| Route | Tên trang | Nội dung nguồn |
|---|---|---|
| `/` | About | Phần `I. Trang Giới thiệu (About Me)` trong `docs/portfolio.md` |
| `/projects` | Projects | Phần `II. Trang Dự án (Projects)` và 6 chương bài tập; mỗi card có nút mở/tải PDF minh chứng |
| `/conclusion` | Conclusion | Tổng kết từ mục tiêu portfolio, định hướng, nguyên tắc phản biện và liêm chính học thuật trong `docs/portfolio.md` |

Quy định route:

- Header/nav phải hiển thị đủ 3 route.
- Route active cần có trạng thái thị giác rõ: dấu ấn đỏ, gạch mực, glow nhẹ hoặc con dấu nhỏ.
- Page transition dùng Framer Motion, không đổi layout quá mạnh làm người dùng mất phương hướng.
- `/projects` chịu trách nhiệm hiển thị action mở/tải tài liệu PDF thật từ `docs/`.

---

## 4. Kiến trúc thư mục đề xuất

```text
andv-portfolio/
├── README.md
├── docs/
│   ├── portfolio.md
│   ├── avatar.jpg
│   ├── bt1.pdf
│   ├── bt2.pdf
│   ├── bt3.pdf
│   ├── bt4.pdf
│   ├── bt5.pdf
│   └── bt6.pdf
├── public/
│   └── assets/
│       ├── eastern-bg/
│       ├── mascots/
│       ├── ornaments/
│       └── textures/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── portfolioData.js
    ├── routes/
    │   ├── AboutPage.jsx
    │   ├── ProjectsPage.jsx
    │   └── ConclusionPage.jsx
    ├── components/
    │   ├── layout/
    │   │   ├── AppShell.jsx
    │   │   ├── Header.jsx
    │   │   └── RouteTransition.jsx
    │   ├── background/
    │   │   ├── EasternStageBackground.jsx
    │   │   ├── FloatingLanterns.jsx
    │   │   ├── InkCloudLayer.jsx
    │   │   └── ParticleSparkles.jsx
    │   ├── cards/
    │   │   ├── SealCard.jsx
    │   │   ├── ScrollPanel.jsx
    │   │   └── ChapterTalismanCard.jsx
    │   └── ui/
    │       ├── SectionTitle.jsx
    │       ├── OrnamentDivider.jsx
    │       └── IconButton.jsx
    └── hooks/
        ├── useLenis.js
        └── useReducedMotionSafe.js
```

Quy định kiến trúc:

- `App.jsx` chỉ lắp router, shell, background và page outlet.
- `routes/` chứa page-level composition, không chứa logic animation phức tạp.
- `components/background/` là nơi tập trung toàn bộ background, particles, lớp mực, glow, lantern.
- `components/cards/` chứa các thẻ trang trí đặc thù phương Đông.
- `data/portfolioData.js` phải phản ánh trung thực `docs/portfolio.md`.
- Không để một component quá lớn. Tách khi component vừa layout, animation, data mapping và decorative effect cùng lúc.

---

## 5. Theme nghệ thuật phương Đông

### Tinh thần thị giác

Phong cách chính: phương Đông huyền ảo, đỏ son, mực tàu, ánh vàng, chất liệu giấy/lụa, bố cục như một cuộn thư mở trên sân khấu ánh sáng.

Từ khóa thiết kế:

- `imperial red`
- `vermilion seal`
- `ink wash`
- `silk texture`
- `gold dust`
- `lantern glow`
- `ornamental frame`
- `scroll paper panel`
- `jade accent`

Không dùng phong cách tối giản trắng trơn. Nội dung có thể ngắn gọn, nhưng bề mặt thị giác phải giàu chi tiết.

### Palette màu đề xuất

| Token | Màu | Vai trò |
|---|---|---|
| `--color-bg-deep` | `#1A0707` | Nền đỏ đen sâu |
| `--color-bg-red` | `#3B0D0D` | Lớp nền sân khấu |
| `--color-primary` | `#B91C1C` | Đỏ chính, nav active, CTA |
| `--color-primary-bright` | `#E11D2E` | Glow đỏ, hover, highlight |
| `--color-vermilion` | `#D9471E` | Ấn triện, dấu nhấn nóng |
| `--color-gold` | `#F4C76B` | Viền, bụi sáng, ornament |
| `--color-antique-gold` | `#B9852B` | Metallic shadow, border phụ |
| `--color-paper` | `#F6E7C8` | Panel giấy, text surface sáng |
| `--color-ink` | `#170F0A` | Text trên giấy |
| `--color-jade` | `#2F8F83` | Accent phụ, cân bằng palette đỏ |
| `--color-white-soft` | `#FFF7E8` | Text sáng trên nền tối |

Quy định dùng màu:

- Đỏ là màu chủ đạo, nhưng phải có vàng cổ và giấy ngà để tránh nặng mắt.
- Jade chỉ dùng rất ít: icon phụ, dot, small label, hover secondary.
- Text dài đặt trên nền giấy hoặc lớp overlay tối đủ tương phản.
- Không dùng xanh tím gradient làm chủ đạo.
- Không dùng palette đỏ đơn sắc; phải có chất liệu và ánh kim.

---

## 6. Background là điểm nhấn

Background phải là component riêng, luôn hiện diện trên mọi route.

Lớp nền đề xuất:

1. Base gradient đỏ đen dạng radial, tạo chiều sâu sân khấu.
2. Texture giấy/lụa mờ phủ toàn màn hình.
3. Ink cloud layer: mảng mực loang chậm, opacity thấp.
4. Lantern/light layer: ánh đèn đỏ-vàng trôi nhẹ.
5. Gold dust particles: hạt sáng nhỏ, chuyển động theo scroll hoặc idle.
6. Ornament silhouettes: vân mây, khung triện, sóng hoặc rồng/phượng cách điệu nằm sát mép màn hình.

Yêu cầu animation:

- Dùng Framer Motion cho float, reveal, route transition, hover detail.
- Dùng CSS animation cho particle nhẹ hoặc shimmer lặp.
- Tôn trọng `prefers-reduced-motion`: giảm biên độ, giảm số layer chuyển động.
- Không để animation che chữ hoặc làm scroll giật.
- Background được phép nặng về thị giác, nhưng page vẫn phải đọc tốt trên mobile.

---

## 7. Assets

Assets nên lớn, rõ chủ đề, tránh stock chung chung.

Nhóm asset cần có khi triển khai:

- Background texture: giấy dó, lụa đỏ, parchment, ink wash.
- Image-gen PNG mascots: rồng đỏ-vàng là linh vật chính; có thể bổ sung phượng, kỳ lân, cá chép hóa rồng nếu cần thêm lớp trang trí.
- Ornament: vân mây, viền khung phương Đông, con dấu triện, tassel, lantern, gold dust.
- Decorative hero: avatar có khung ấn triện hoặc vòng hào quang đỏ-vàng.
- Project cards: mỗi chương có biểu tượng riêng, ví dụ folder, search, AI spark, meeting, presentation, shield/ethics; icon lucide kết hợp ornament vẽ bằng CSS/asset.
- Project PDF actions: mỗi card chương có hai nút `Mở PDF` và `Tải PDF`.

### Image-gen PNG mascots

Các linh vật phải được tạo bằng image generation, xuất PNG, dùng như lớp trang trí lớn hoặc character accent. Không thay thế linh vật bằng icon vector đơn giản.

Asset mascot bắt buộc khi triển khai:

| File đề xuất | Linh vật | Cách dùng |
|---|---|---|
| `public/assets/mascots/dragon-hero.png` | Rồng phương Đông đỏ-vàng | Hero, chạy dọc mép nền hoặc uốn quanh tiêu đề |
| `public/assets/mascots/dragon-corner.png` | Đầu rồng/đuôi rồng cách điệu | Góc card, góc viewport, route transition |
| `public/assets/mascots/phoenix-accent.png` | Phượng vàng đỏ | Điểm nhấn phụ cho About hoặc ornament divider |
| `public/assets/mascots/kylin-seal.png` | Kỳ lân/linh thú triện | Dấu trang trí cho project cards hoặc kết luận |

Prompt nền cho image-gen:

```text
Create a high-detail Eastern mythological mascot PNG for a red imperial portfolio website. Subject: <dragon / phoenix / kylin>. Style: ornate Vietnamese-East Asian fantasy illustration, vermilion red, antique gold, ink-wash shadows, silk texture, luminous edges, elegant ceremonial mood. Composition: isolated full-body or corner ornament, generous padding, no text, no watermark, no logo. Background: flat solid chroma-key color for removal or transparent PNG if available. Avoid: cartoon mascot, cute chibi style, western dragon wings, generic fantasy armor, modern sci-fi details.
```

Quy định kỹ thuật cho mascot PNG:

- Ưu tiên PNG nền trong suốt. Nếu công cụ không xuất transparent native, tạo trên chroma-key phẳng rồi xóa nền.
- Kích thước tối thiểu: `1536px` cạnh dài cho hero mascot, `1024px` cạnh dài cho accent mascot.
- Mascot chính (`dragon-hero.png`) phải đủ lớn để dùng làm visual anchor, không chỉ làm sticker nhỏ.
- Dùng `loading="lazy"` cho mascot không nằm trong first viewport.
- Dùng `pointer-events: none` nếu mascot chỉ là trang trí.
- Không đặt mascot đè text dài; chỉ được lấn nhẹ vào khu vực hero hoặc mép card khi tương phản vẫn rõ.
- Tối ưu dung lượng sau khi tạo: nén PNG hoặc chuyển sang WebP nếu không cần alpha phức tạp.

Quy định asset:

- Nếu asset là ảnh lớn, đặt trong `public/assets/`.
- Mascot image-gen đặt trong `public/assets/mascots/`, đặt tên kebab-case, mô tả đúng chủ thể.
- Nếu asset là decorative shape nhỏ và tái sử dụng được, có thể dùng CSS hoặc inline component.
- Không nhúng base64 asset vào source.
- Asset phải phục vụ theme phương Đông, không dùng ảnh công nghệ generic.

---

## 8. Card và trang trí

Các card không dùng kiểu trắng-bo-góc-shadow mặc định. Card phải có hình thái riêng:

- `SealCard`: thẻ đỏ sẫm, góc cắt nhẹ, viền vàng mảnh, dấu triện ở góc.
- `ScrollPanel`: panel giấy ngà, texture nhẹ, viền như cuộn thư.
- `ChapterTalismanCard`: card chương bài tập dạng bùa/thẻ treo, có tassel hoặc seal mark.
- `ProjectPdfActions`: cụm nút mở/tải PDF dạng seal button, hover sáng viền vàng.

Hiệu ứng card:

- Hover nâng nhẹ, border gold sáng hơn, particle nhỏ chạy quanh mép.
- Reveal theo scroll: opacity + y + blur nhẹ.
- Card quan trọng có shimmer rất nhẹ, không chạy liên tục quá mạnh.
- Icon dùng Lucide Icons, đặt trong khung triện hoặc vòng ornament.

---

## 9. Nội dung theo từng route

### `/` - About

Mục tiêu: giới thiệu Đào Việt An rõ ràng, ngắn, có khí chất cá nhân.

Section đề xuất:

- Hero: tên, ngành học, trường, avatar nếu dùng `docs/avatar.jpg`.
- Info seals: mã sinh viên, ngành, trường, sở thích.
- Direction panel: mục tiêu học tập và định hướng phát triển.
- Principle panel: nguyên tắc phản biện độc lập, không nghe AI một chiều.
- Tools strip: Google Drive, Google Scholar, Gemini, Copilot, Claude, Discord, Zoom, Zalo, Google Docs nếu có trong `docs/portfolio.md`.

### `/projects` - Projects

Mục tiêu: trình bày 6 chương bài tập kỹ năng số.

Layout đề xuất:

- Timeline hoặc grid 2 cột trên desktop.
- Mỗi chương là `ChapterTalismanCard`.
- Mỗi card có: tên chương, mục tiêu, quá trình thực hiện.
- Mỗi card có 2 button: mở PDF trong tab mới và tải PDF tương ứng (`bt1.pdf` đến `bt6.pdf`).
- Có decorative route header như bảng gỗ/triện đỏ.

### `/conclusion` - Conclusion

Mục tiêu: chốt lại tinh thần làm portfolio, nguyên tắc học thuật và cách dùng công nghệ có trách nhiệm.

Layout đề xuất:

- Hero kết luận với phượng hoặc rồng phụ làm mascot accent.
- 3 thẻ tổng kết: làm việc có hệ thống, dùng công nghệ đúng vai trò, giữ liêm chính học thuật.
- Panel cuối nhấn mạnh nguyên tắc phản biện độc lập, không nghe AI một chiều.

---

## 10. Typography

Font đề xuất:

- Heading: `Noto Serif Display`, `Cormorant Garamond`, hoặc `Playfair Display`.
- Body: `Inter`, `Be Vietnam Pro`, hoặc `Noto Sans`.
- Accent/Seal text: dùng font serif hoặc uppercase nhỏ, không dùng font thư pháp khó đọc cho text dài.

Quy định:

- Heading có thể nghệ thuật, body phải đọc nhanh.
- Không scale font bằng viewport width.
- Không dùng letter-spacing âm.
- Text trên mobile không được tràn card hoặc đè ornament.

---

## 11. Animation & interaction

Animation phải mạnh hơn portfolio thông thường, nhưng có kiểm soát.

Hiệu ứng bắt buộc:

- Smooth scroll bằng Lenis.
- Page transition bằng Framer Motion.
- Scroll reveal cho section/card.
- Hover animation cho nav, cards, project PDF actions.
- Background ambient animation liên tục nhưng nhẹ CPU.

Hiệu ứng khuyến nghị:

- Ink spread mask khi vào page.
- Gold dust trail khi hover card.
- Lantern float ở rìa màn hình.
- Seal stamp pop khi route active hoặc mở card.

Giới hạn:

- Không dùng animation làm layout shift.
- Không animate quá nhiều box-shadow lớn cùng lúc.
- Trên mobile giảm số particle và layer blur.
- Tất cả tương tác phải có trạng thái focus keyboard.

---

## 12. Responsive

Breakpoint định hướng:

- Mobile: nav gọn, card 1 cột, background giảm chi tiết ở mép.
- Tablet: grid 2 cột nếu đủ rộng, ornament nhỏ hơn desktop.
- Desktop: background lớn, route page có chiều sâu, cards có hover effect đầy đủ.

Quy định:

- Không để ornament che nội dung.
- Hero phải thấy nội dung chính ngay trong first viewport.
- Card có chiều rộng và padding ổn định, không nhảy layout khi hover.
- Button PDF trong project cards phải dễ thao tác bằng touch.

---

## 13. Quy tắc nội dung

Nguồn nội dung duy nhất: `docs/portfolio.md` và file thật trong `docs/`.

Bắt buộc:

- Không thêm thành tích, kỹ năng, kinh nghiệm, link mạng xã hội hoặc mô tả không có trong tài liệu.
- Không tự đổi giọng văn thành quá hoa mỹ trong phần nội dung chính.
- Có thể dùng heading/ngôn ngữ UI ngắn như `About`, `Projects`, `Conclusion`, nhưng nội dung portfolio phải trung thành với tài liệu.
- Nếu cần data object, chép/tóm cấu trúc từ `docs/portfolio.md`, không sáng tác thêm.

---

## 14. Tiêu chuẩn hoàn thiện

Một bản triển khai đạt yêu cầu khi:

- Có đúng 3 routes: `/`, `/projects`, `/conclusion`.
- Techstack đúng: React 18, Vite latest, Framer Motion, Lucide Icons, Lenis.
- Background là điểm nhấn mạnh nhất về thị giác.
- Theme đỏ phương Đông rõ ràng, có texture, ornament, ánh vàng và mực loang.
- Assets lớn và đúng tinh thần phương Đông.
- Có image-gen PNG mascot, tối thiểu là rồng đỏ-vàng làm linh vật chính.
- Card trang trí độc đáo, không giống card template cơ bản.
- Animation nhiều, lung linh, nhưng không phá khả năng đọc.
- Nội dung bám sát `docs/portfolio.md` và tài sản thật trong `docs/`.
