# Tu Portfolio - Đề xuất kiến trúc và UI

Portfolio cá nhân của Lê Thị Cẩm Tú, sinh viên Luật Kinh Doanh, được định hướng như một "sweet legal studio": mềm mại, thân thiện, sáng tạo nhưng vẫn rõ ràng và đáng tin cậy. README này đề xuất kiến trúc code, UI 3 pages, phong cách, palette màu và bộ assets 2D image-gen để triển khai bằng React 18, Vite, Framer Motion và Lucide Icons.

## 1. Tech Stack

- React 18 + Vite làm nền tảng SPA gọn nhẹ.
- Framer Motion cho page transition, reveal-on-scroll, hover motion của card.
- `lucide-react` cho icon hệ thống: file, book, search, sparkles, shield, users, graduation cap.
- CSS thường trong `src/index.css` và token riêng trong `src/theme.js`; chưa cần Tailwind để giữ dependency đúng yêu cầu.
- Dữ liệu nội dung tách vào `src/data/portfolioData.js`, không viết trực tiếp trong component.

## 2. Kiến trúc code

```txt
tu-portfolio/
  docs/
    portfolio.md
    DESIGN.jpg
    pallet.jpg
    bt1.pdf ... bt6.pdf
  public/
    assets/
      generated/
        sweet-legal-background.png
        card-paper-texture.png
        project-sticker-sheet.png
        conclusion-soft-panel.png
  src/
    app/
      pageConfig.js
      motionConfig.js
    components/
      layout/
        AppShell.jsx
        Navbar.jsx
        BackgroundScene.jsx
      pages/
        AboutPage.jsx
        ProjectsPage.jsx
        ConclusionPage.jsx
      sections/
        HeroIntro.jsx
        ToolsSection.jsx
        ProjectChapterGrid.jsx
        ReflectionPanel.jsx
      ui/
        SoftCard.jsx
        SectionTitle.jsx
        IconBadge.jsx
        PdfLinkButton.jsx
        ScrollReveal.jsx
    data/
      portfolioData.js
    theme.js
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
```

### Ranh giới module

- `src/data/portfolioData.js`: chuyển nội dung từ `docs/portfolio.md` thành object có cấu trúc: profile, tools, projects, conclusion.
- `src/app/pageConfig.js`: định nghĩa 3 page, label nav, icon lucide và component tương ứng.
- `src/components/layout`: khung dùng chung, nav, background decorative layer.
- `src/components/pages`: mỗi page là một view độc lập, chỉ ghép sections và truyền data.
- `src/components/ui`: component tái sử dụng được, không chứa business content.
- `src/theme.js`: color tokens, shadow, spacing, motion duration để UI đồng nhất.

## 3. Data Shape

```js
export const portfolioData = {
  profile: {
    name: "Lê Thị Cẩm Tú",
    major: "Luật Kinh Doanh",
    school: "Đại học Luật - Đại học Quốc gia Hà Nội",
    personality: ["sáng tạo", "cá nhân hóa", "thân thiện", "dễ tiếp cận"],
    goal: "Trở thành chuyên gia pháp chế doanh nghiệp kiêm người sáng tạo nội dung pháp lý."
  },
  tools: [
    "File Explorer",
    "Google Drive",
    "Google Scholar",
    "ChatGPT",
    "Google Gemini",
    "Google Meet",
    "Zoom",
    "Canva"
  ],
  projects: [
    {
      id: "bt1",
      chapter: "Chương 1",
      title: "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      pdf: "/docs/bt1.pdf",
      icon: "FolderKanban"
    }
  ],
  conclusion: {
    lessons: [],
    proudPoints: [],
    challenges: [],
    futureDirection: ""
  }
};
```

## 4. Cấu trúc UI - 3 Pages

### Page 1: About

Mục tiêu: tạo ấn tượng đầu tiên về Cẩm Tú là người học Luật hiện đại, biết kết hợp pháp lý, công nghệ và thiết kế.

Layout đề xuất:

- Hero full-width với nền pastel cream, sticker hoa nhỏ, khung ảnh/card giới thiệu bên phải.
- Profile snapshot gồm họ tên, ngành, trường, sở thích.
- "Triết lý làm việc" gồm 3 cards: Giải pháp hiệu quả, Giao diện tinh tế, Tương tác chân thành.
- Tools section hiển thị dạng chip/icon grid, dùng lucide icons và hover motion nhẹ.

Motion:

- Hero title fade-up 0.5s.
- Profile card float nhẹ 4-6px bằng Framer Motion.
- Tool chips stagger reveal khi vào viewport.

### Page 2: Projects

Mục tiêu: biến 6 bài tập thành hành trình học tập có tính kể chuyện, không chỉ là danh sách PDF.

Layout đề xuất:

- Header "Hành trình nâng cấp bản thân" với subtitle ngắn.
- Grid 6 project cards, mỗi card gồm chương, mục tiêu, tóm tắt quá trình, icon, CTA mở PDF.
- Card style lấy từ `DESIGN.jpg`: các block hồng nhạt, viền mỏng, nền trắng kem, card không quá tròn.
- Optional featured card cho Chương 5 vì đây là phần Cẩm Tú yêu thích nhất về sáng tạo nội dung số.

Motion:

- Cards stagger in theo hàng.
- Hover nâng card lên 3px, hiện sticker highlight và CTA.
- PDF button có icon `FileText` hoặc `ExternalLink`.

### Page 3: Conclusion

Mục tiêu: đóng lại portfolio bằng cảm xúc, nhìn lại kỹ năng và định hướng tương lai.

Layout đề xuất:

- Reflection hero với panel mềm, nền hoa line-art mờ.
- 3 content blocks: Kiến thức học được, Điều tâm đắc/thách thức, Định hướng tương lai.
- Final thank-you strip ở cuối trang, text ngắn, ấm áp, có icon `HeartHandshake` hoặc `Sparkles`.

Motion:

- Reflection blocks reveal theo trục dọc.
- Thank-you strip slide-up rất nhẹ, không dùng animation quá mạnh để giữ cảm giác tinh tế.

## 5. Phong cách UI tổng thể

Hướng thiết kế lấy từ `DESIGN.jpg` và `pallet.jpg`: giao diện nên giống một bộ bài đăng Instagram pastel được chuyển hóa thành portfolio học thuật. Cảm giác chính là mềm, sáng, gọn, có chất cá nhân nhưng không quá trẻ con. Vì nội dung thuộc ngành Luật Kinh Doanh, UI cần giữ được sự tin cậy: trang trí vừa đủ, chữ dễ đọc, bố cục rõ ràng, không lạm dụng sticker hay hiệu ứng.

Từ khóa thị giác:

- `Sweet legal studio`: không gian học thuật thân thiện, có chất thiết kế nội dung.
- `Pastel editorial`: nền kem, hồng phấn, coral, xanh sage, nhiều khoảng thở.
- `Soft document cards`: card giống các mảnh giấy/slide nhỏ, có viền mảnh và bóng nhẹ.
- `Friendly academic`: icon pháp lý, tài liệu, AI, họp nhóm được trình bày mềm mại hơn dashboard công việc.
- `Instagram post grid`: các section có nhịp lưới rõ, dùng mảng màu pastel lớn như trong ảnh tham chiếu.

## 6. Font và Typography

### Font đề xuất

Nên dùng 2 nhóm font để tạo tương phản giữa chất editorial và khả năng đọc nội dung dài:

- Heading/display: `Playfair Display`, `Cormorant Garamond` hoặc `Fraunces`.
- Body/UI: `Quicksand`, fallback sang `Inter` hoặc `Nunito Sans`.
- Font fallback: `system-ui`, `-apple-system`, `Segoe UI`, `sans-serif`.

Khuyến nghị cụ thể:

```css
--font-heading: "Playfair Display", "Cormorant Garamond", Georgia, serif;
--font-body: "Quicksand", "Inter", system-ui, sans-serif;
```

Lý do:

- `Playfair Display` hợp với phong cách mềm, nữ tính, editorial, dùng cho tên, tiêu đề trang, heading lớn.
- `Quicksand` có nét chữ bo tròn, nhẹ và thân thiện, hợp với tinh thần pastel editorial của portfolio.
- Không dùng quá nhiều font trang trí vì portfolio có nhiều nội dung học thuật.

### Thang chữ

```css
--text-xs: 0.75rem;     /* 12px: label nhỏ, caption */
--text-sm: 0.875rem;    /* 14px: chip, metadata */
--text-base: 1rem;      /* 16px: body chính */
--text-md: 1.125rem;    /* 18px: đoạn mở đầu */
--text-lg: 1.375rem;    /* 22px: card title lớn */
--text-xl: 2rem;        /* 32px: section title */
--text-hero: clamp(2.6rem, 7vw, 5.2rem);
```

Quy tắc typography:

- Hero title dùng `--font-heading`, weight 500-600, line-height 0.95-1.05.
- Section title dùng `--font-heading`, weight 500, line-height 1.1.
- Card title dùng `--font-heading` hoặc body semibold tùy mật độ nội dung.
- Body text dùng `--font-body`, weight 400, line-height 1.65-1.8 để đọc thoải mái.
- Label/chip dùng uppercase nhẹ hoặc chữ thường, font-size 12-14px, weight 600.
- Letter spacing để `0`, không dùng negative letter spacing.
- Không dùng chữ quá mảnh trên nền hồng phấn vì dễ thiếu tương phản.

### Cách dùng chữ theo từng trang

- About: tên `Lê Thị Cẩm Tú` là điểm nhấn lớn nhất, dùng heading serif lớn, màu coral hoặc ink.
- Projects: tên chương/bài tập cần dễ quét, ưu tiên title 20-22px, metadata 13-14px.
- Conclusion: dùng heading mềm hơn, đoạn văn rộng vừa phải, không căn giữa toàn bộ nội dung dài.

## 7. Hình khối, Border, Shadow và Spacing

### Border radius

UI không nên dùng bo góc quá tròn. Phong cách trong `DESIGN.jpg` là các khối chữ nhật mềm, giống slide/card thiết kế.

```css
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-pill: 999px;
```

Quy tắc dùng:

- Card chính: `12px`, tối đa `16px` nếu card lớn.
- Button: `999px` nếu là pill CTA, hoặc `8px` nếu là nút trong card.
- Image frame: `12px`.
- Badge/icon chip: `999px` hoặc `8px`.
- Modal/PDF preview nếu có: `16px`.
- Không dùng bo góc 24-32px cho toàn bộ UI vì sẽ lệch khỏi style editorial gọn.

### Border

Border nên mảnh, màu hồng đất hoặc kem đậm, giúp card nổi lên mà không nặng.

```css
--border-soft: 1px solid rgba(217, 154, 170, 0.45);
--border-strong: 1px solid rgba(239, 124, 130, 0.55);
--border-cream: 1px solid rgba(235, 217, 196, 0.8);
```

Quy tắc dùng:

- `SoftCard`: border `1px`, màu `--color-rose-line` opacity 40-55%.
- Project card hover: border chuyển sang coral opacity 70%.
- Navbar: border-bottom rất nhẹ hoặc không border, dùng nền blur kem.
- Input/filter nếu có: border 1px, focus ring coral mờ.

### Shadow

Shadow phải rất nhẹ, giống giấy nổi khỏi nền, không tạo cảm giác app SaaS đậm.

```css
--shadow-card: 0 10px 30px rgba(188, 108, 122, 0.12);
--shadow-hover: 0 16px 40px rgba(188, 108, 122, 0.18);
--shadow-soft-inset: inset 0 1px 0 rgba(255, 255, 255, 0.75);
```

Quy tắc dùng:

- Card bình thường: `--shadow-card`.
- Card hover: dịch lên `-3px` và dùng `--shadow-hover`.
- Không dùng shadow đen/xám đậm.
- Không dùng glassmorphism quá trong suốt vì palette pastel cần bề mặt giấy ấm.

### Spacing và layout

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-7: 3rem;     /* 48px */
--space-8: 4.5rem;   /* 72px */
```

Quy tắc layout:

- Page padding desktop: 48-72px theo chiều dọc, 32-48px theo chiều ngang.
- Container max-width: `1120px` cho nội dung chính.
- Hero có thể rộng hơn: max-width `1240px`.
- Card grid desktop: 2-3 cột tùy section; mobile 1 cột.
- Khoảng cách giữa section: 72-96px desktop, 48-64px mobile.
- Nội dung paragraph không nên rộng quá `680px`.

## 8. Style Component UI

### Card

Card là ngôn ngữ hình khối chính của portfolio. Card nên giống các ô nội dung pastel trong ảnh tham chiếu: nền sáng, viền mảnh, mảng hồng/sage phụ, sticker nhỏ ở góc.

```css
.soft-card {
  border-radius: 12px;
  border: 1px solid rgba(217, 154, 170, 0.45);
  background:
    linear-gradient(180deg, rgba(255, 253, 248, 0.95), rgba(250, 246, 223, 0.92)),
    var(--card-texture);
  box-shadow: 0 10px 30px rgba(188, 108, 122, 0.12);
  padding: 24px;
}
```

Biến thể card:

- `profile-card`: nền `#FFFDF8`, có mảng hồng phấn ở header hoặc góc phải.
- `project-card`: có label chương, icon badge, mô tả ngắn, CTA mở PDF.
- `reflection-card`: rộng hơn, ít trang trí hơn, ưu tiên đọc đoạn văn.
- `tool-chip`: card nhỏ dạng pill hoặc rounded rectangle 8px, icon 16px.

### Button và CTA

- Primary CTA: nền coral `#EF7C82`, chữ trắng/kem, border coral, radius `999px`.
- Secondary CTA: nền trắng kem, chữ coral, border rose-line, radius `999px`.
- Icon button: kích thước 36-40px, icon lucide 18px, radius `8px` hoặc pill.
- Hover: nâng `-2px`, shadow nhẹ, background sáng hơn 3-5%.
- Focus state: outline `2px solid rgba(239, 124, 130, 0.35)`.

### Navbar

- Navbar nên là thanh mỏng, fixed hoặc sticky top.
- Nền: `rgba(255, 253, 248, 0.78)` + `backdrop-filter: blur(16px)`.
- Chiều cao: 64-72px desktop, 56-64px mobile.
- Active tab: coral text + underline mềm hoặc pill hồng nhạt.
- Icon lucide trong nav: 16-18px, stroke 1.75.

### Icon và badge

- Dùng `lucide-react`, stroke width `1.75` hoặc `2`.
- Icon badge kích thước 36-44px.
- Badge nền sage/hồng nhạt, icon coral/olive.
- Không dùng icon filled nặng vì sẽ lệch khỏi nét line-art của palette.

### Decorative assets

- Sticker/hoa line-art chỉ đặt ở góc card hoặc nền section.
- Opacity trang trí: 0.12-0.28 cho background, 0.4-0.7 cho sticker nhỏ.
- Không đặt sticker sau đoạn text dài.
- Background image cần có overlay kem để đảm bảo tương phản.

## 9. Color Palette

Palette đề xuất từ ảnh `pallet.jpg`:

| Token | Hex | Use |
| --- | --- | --- |
| `--color-cream` | `#FAF6DF` | page background, section surface |
| `--color-warm-beige` | `#EBD9C4` | secondary background, footer |
| `--color-soft-pink` | `#F3B6C2` | card fill, decorative panels |
| `--color-coral` | `#EF7C82` | primary CTA, active nav, highlight |
| `--color-sage` | `#D8D99A` | secondary accents, icon badges |
| `--color-rose-line` | `#D99AAA` | borders, dividers |
| `--color-olive-text` | `#8C8453` | muted labels, small captions |
| `--color-ink` | `#4C3F3F` | body text |
| `--color-white` | `#FFFDF8` | readable card surface |

CSS token màu nên đặt tại `src/theme.js` và mirror trong `:root` của `src/index.css` để component dùng thống nhất.

Tỷ lệ màu nên dùng:

- 55-65% nền kem/trắng ấm để giữ giao diện sáng và dễ đọc.
- 15-20% hồng phấn cho panel/card phụ.
- 8-12% coral cho CTA, active state, highlight quan trọng.
- 8-12% sage cho badge, icon nền, điểm nghỉ thị giác.
- 5% olive/rose-line cho label, border, divider.

Không nên để toàn trang bị phủ hồng. Hồng là chất nhận diện, nhưng nền chính vẫn nên là kem/trắng ấm để portfolio nhìn sạch và học thuật hơn.

## 10. 2D Image-Gen Asset Direction

Tạo bitmap assets trong `public/assets/generated/`. Tất cả asset nên có style "soft pastel editorial, flat 2D, light paper grain, clean composition", không tạo ảnh tối, không làm mờ nội dung.

### Background Asset

File: `sweet-legal-background.png`

Prompt:

```txt
Soft pastel 2D editorial background for a law and technology student portfolio, warm cream base, coral pink and sage green accents, subtle line-art flowers, tiny document icons, abstract folders, friendly study desk details, light paper grain, airy whitespace, Instagram post design aesthetic, no text, no logo, high resolution, clean readable center area
```

Ứng dụng:

- Đặt trong `BackgroundScene.jsx`.
- Opacity 0.18-0.28, `background-size: cover`.
- Overlay gradient cream để đảm bảo text đọc được.

### Card Paper Texture

File: `card-paper-texture.png`

Prompt:

```txt
Seamless soft paper texture for pastel UI cards, warm white and blush pink, very subtle grain, faint rounded panel shadows, delicate floral doodles at corners, minimal, no text, no logo, 2D flat design
```

Ứng dụng:

- Background nhẹ cho `SoftCard`.
- Nên cắt slice hoặc repeat low opacity.

### Project Sticker Sheet

File: `project-sticker-sheet.png`

Prompt:

```txt
Cute 2D sticker sheet for a legal technology portfolio, pastel coral pink, blush, sage green and cream palette, icons of folders, books, laptop, AI sparkles, video meeting, shield, citation notes, tiny flowers, rounded sticker edges, transparent background, no text, no logo
```

Ứng dụng:

- Cắt từng sticker hoặc dùng làm sprite overlay.
- Gắn vào 6 project cards theo chủ đề từng chương.

### Conclusion Panel Decoration

File: `conclusion-soft-panel.png`

Prompt:

```txt
Soft 2D decorative panel for a reflective conclusion page, pastel cream paper, coral-pink border, sage green floral line art, gentle sparkles, elegant academic notebook mood, airy whitespace for text, no text, no logo, flat editorial illustration
```

Ứng dụng:

- Làm background của `ReflectionPanel`.
- Nên có vùng trống ở giữa để text không bị chen.

## 11. Ghi chú Component

- `Navbar`: 3 tab About, Projects, Conclusion; active state dùng coral underline hoặc filled pill nhỏ.
- `AppShell`: quản lý active page nếu không dùng router; page transition bằng `AnimatePresence`.
- `ScrollReveal`: wrapper dùng `whileInView`, `viewport={{ once: true, amount: 0.2 }}`.
- `SoftCard`: nhận props `tone`, `icon`, `title`, `children`, `action`.
- `PdfLinkButton`: link tới PDF trong `docs`; dùng `target="_blank"` và `rel="noreferrer"`.
- `BackgroundScene`: layer decorative fixed/absolute, `pointer-events: none`.

## 12. Motion Principles

- Motion phải tinh tế, phục vụ cảm giác "mềm và gần gũi".
- Duration mặc định: 0.35-0.55s.
- Easing: `[0.22, 1, 0.36, 1]`.
- Không animate text dài từng chữ cái vì nội dung portfolio nhiều và cần đọc nhanh.
- Tôn trọng `prefers-reduced-motion`.

## 13. Thứ tự triển khai

1. Khởi tạo Vite React 18 và cài `framer-motion`, `lucide-react`.
2. Chuyển `docs/portfolio.md` thành `src/data/portfolioData.js`.
3. Tạo `theme.js`, `index.css`, token màu và base layout.
4. Tạo UI primitives: `SoftCard`, `SectionTitle`, `IconBadge`, `ScrollReveal`, `PdfLinkButton`.
5. Tạo `AppShell`, `Navbar`, `BackgroundScene`.
6. Xây 3 pages: About, Projects, Conclusion.
7. Thêm generated assets vào `public/assets/generated/` và gắn vào background/card.
8. Kiểm tra responsive ở mobile 375px, tablet, desktop 1440px; đảm bảo text không tràn card.

## 14. Acceptance Criteria

- App chạy bằng Vite, React 18.
- Có đúng 3 pages/view: About, Projects, Conclusion.
- Nội dung khớp với `docs/portfolio.md`, gồm thông tin cá nhân, công cụ, 6 chương bài tập và tổng kết.
- UI bám palette cream, coral, soft pink, sage từ `pallet.jpg`.
- Layout có tính editorial/poster như `DESIGN.jpg`: card mềm, grid rõ, nhiều whitespace.
- Framer Motion có page transition và reveal-on-scroll, có xử lý reduced motion.
- Lucide icons được dùng cho nav, tool chips, project cards và CTA.
- PDF `bt1.pdf` đến `bt6.pdf` có CTA mở được từ trang Projects.
