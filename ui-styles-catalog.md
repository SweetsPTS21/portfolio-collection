# 🎨 UI Styles Catalog — Portfolio Monorepo

> Tài liệu này tổng hợp các phong cách thiết kế UI có thể áp dụng cho các dự án portfolio con.  
> Mỗi phong cách có tên định danh, bảng màu, typography, animation và component notes riêng.  
> Khi tạo dự án con mới, chọn một phong cách từ danh sách này và khai báo trong `README.md` của sub-project đó.

---

## Danh sách phong cách

| ID | Tên phong cách | Vibe | Hợp với |
|---|---|---|---|
| `legal-archive` | Legal Archive — Thư viện pháp luật số | Học thuật, trang trọng | Luật, nghiên cứu, hành chính |
| `digital-art-gallery` | Digital Art Gallery Portfolio | Nghệ thuật, tinh tế | Designer, frontend, creative dev |
| `interactive-desk` | Interactive Desk / Workspace Theme | Gần gũi, sáng tạo | Dev muốn portfolio cá nhân hóa |
| `cyberpunk-city` | Cyberpunk Developer City | Mạnh, techy, tối | Fullstack / backend / frontend dev |
| `magazine-editorial` | Magazine / Art Editorial Portfolio | Cao cấp, tối giản-nghệ | Portfolio xin việc chuyên nghiệp |
| `floating-island` | Dreamy 3D Floating Island | Fantasy, poetic, visual | Portfolio nổi bật về visual |

---

## 1. `legal-archive` — Thư viện pháp luật số

> **Đã dùng tại:** `anna-portfolio`

Cảm hứng từ tạp chí luật học thuật Tây Âu và hệ thống lưu trữ hồ sơ chuyên nghiệp. Tông màu trầm, thanh lịch; typography serif sắc nét; layout dạng tài liệu/báo cáo.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| Cảm xúc | Tin cậy, có hệ thống, chuyên nghiệp |
| Hình khối | Đường thẳng, góc vuông, border rõ ràng (borderRadius: 4px) |
| Không gian | White space rộng, cảm giác "thoáng tài liệu" |
| Chuyển động | Subtle slow fade-in + slide từ trái, không bounce |
| Điểm nhấn | Số thứ tự `[01]`, dấu ngoặc, ký hiệu section kiểu pháp lý |

### Bảng màu

```js
// src/theme.js
export const theme = {
  token: {
    colorBgBase: '#FAFAF7',       // Trắng ngà — như giấy in
    colorPrimary: '#1B3A5C',      // Xanh navy học thuật
    colorTextBase: '#1A1A2E',     // Gần đen
    colorTextSecondary: '#5C6B7A',
    colorError: '#8B2635',        // Đỏ mực son (accent)
    colorBorder: '#D4C9B8',
    borderRadius: 4,
    fontFamily: "'Libre Baskerville', 'Inter', serif",
  },
};
```

### Typography

- **Heading:** `Libre Baskerville` (serif, học thuật)
- **Body:** `Inter` (sans-serif, dễ đọc)
- Google Font import:

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
```

### Animation rules

| Sự kiện | Effect | Thư viện |
|---|---|---|
| Section entrance | Fade in + translateY(20px → 0) | React Motion `spring` |
| Card hover | Border-left đổi màu + translateX(4px) | CSS transition 200ms |
| Nav hover | Gạch chân grow từ trái | CSS transition 250ms |

---

## 2. `digital-art-gallery` — Digital Art Gallery Portfolio

Biến portfolio thành một phòng triển lãm số. Trang chủ như gallery/museum, mỗi project là một "tác phẩm nghệ thuật" được trưng bày.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| Cảm xúc | Tinh tế, có gu, nghệ thuật, sang trọng |
| Hình khối | Bo góc nhẹ, có viền sáng (light border) như khung tranh |
| Không gian | Nền tối, spotlight vào từng project, spacing rộng |
| Chuyển động | Parallax nhẹ khi scroll; hover reveal mô tả + tech stack |
| Điểm nhấn | Hiệu ứng ánh sáng, shadow sâu, số thứ tự kiểu gallery |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: '#0D0D0D',          // Đen gallery
    colorBgContainer: '#161616',     // Card nền
    colorPrimary: '#C9A84C',         // Vàng nhạt — ánh đèn gallery
    colorTextBase: '#F0EDE8',        // Trắng ngà
    colorTextSecondary: '#888884',
    colorBorder: '#2A2A2A',
    borderRadius: 8,
    fontFamily: "'Cormorant Garamond', 'DM Sans', serif",
  },
};

// CSS Variables bổ sung
// --accent-neon: #7B5EA7;   /* Tím neon */
// --accent-electric: #00D4FF; /* Xanh electric */
```

### Typography

- **Heading:** `Cormorant Garamond` (elegant serif, phong cách gallery)
- **Body:** `DM Sans` (clean, hiện đại)

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
```

### Layout ideas

- **Hero:** Fullscreen tối, tên tác giả ở giữa với hiệu ứng letter-spacing expand.
- **Projects grid:** Masonry layout hoặc gallery grid 2–3 cột.
- **Project card:** Ảnh mockup lớn chiếm toàn bộ card; hover thì overlay tối xuất hiện kèm mô tả + tech stack + link demo.
- **About:** Text trên nền tối, như caption tác phẩm nghệ thuật.

### Animation rules

| Sự kiện | Effect | Thư viện |
|---|---|---|
| Project card hover | Dark overlay fade-in + text slide lên | CSS transition 300ms |
| Section entrance | Opacity 0 → 1, nhẹ parallax | React Motion / Intersection Observer |
| Image hover | Scale(1.03) + shadow tăng | CSS transition 400ms |
| Hero text | Letter-spacing animate khi load | CSS `@keyframes` |

### Component notes

```
src/components/
├── sections/
│   ├── GalleryHeroSection.jsx    ← Fullscreen dark, tên artist lớn
│   ├── GalleryGridSection.jsx    ← Masonry project grid
│   ├── ArtistBioSection.jsx      ← About như caption triển lãm
│   └── ContactSection.jsx
└── ui/
    ├── ArtworkCard.jsx           ← Card kiểu tranh: hover reveal overlay
    ├── GalleryNumber.jsx         ← "No. 01" decoration
    └── SpotlightOverlay.jsx      ← Hover light effect
```

---

## 3. `interactive-desk` — Interactive Desk / Workspace Theme

Giao diện như một bàn làm việc cá nhân. Mỗi vật dụng trên bàn là một section: laptop → projects, sổ tay → about me, sticky notes → skills.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| Cảm xúc | Gần gũi, cá nhân, sáng tạo, ấm áp |
| Hình khối | Hỗn hợp: bo tròn (sticky note), góc sắc (màn hình), organic |
| Không gian | Mặt bàn gỗ/vải làm background chính |
| Chuyển động | Click vật dụng → modal/panel mở ra với spring animation |
| Điểm nhấn | Các decoration: ly cà phê, tai nghe, đèn bàn, cây bút |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: '#F5ECD7',       // Màu gỗ sáng / mặt bàn
    colorBgContainer: '#FFFDF7',  // Paper white
    colorPrimary: '#3D6B4F',      // Xanh lá đậm ấm (desk lamp green)
    colorTextBase: '#2C2416',     // Nâu đen đậm
    colorTextSecondary: '#6B5744',
    colorBorder: '#D4B896',       // Viền gỗ
    borderRadius: 12,
    fontFamily: "'Nunito', 'Space Grotesk', sans-serif",
  },
};

// CSS Variables
// --sticky-yellow: #FFE066;
// --sticky-blue: #BFE3FF;
// --sticky-pink: #FFB8C6;
// --sticky-green: #B8F0C8;
```

### Typography

- **Heading:** `Space Grotesk` (quirky, cá tính)
- **Body / Sticky notes:** `Nunito` (tròn, thân thiện)

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Nunito:wght@400;600;700&display=swap');
```

### Layout ideas

- **Màn hình chính:** Illustration/CSS art mặt bàn với các vật dụng có thể click.
- **Laptop:** Click mở Projects panel (slide từ dưới lên).
- **Sổ tay:** Click mở About Me (flip animation).
- **Sticky notes:** Hiển thị Skills, màu khác nhau cho mỗi nhóm.
- **Đèn bàn:** Toggle dark/light mode.
- **Ly cà phê:** Easter egg nhỏ (câu quote ngẫu nhiên).

### Animation rules

| Sự kiện | Effect | Thư viện |
|---|---|---|
| Click vật dụng | Panel slide/scale vào với spring | Framer Motion / React Motion |
| Sticky note hover | Nhấc lên nhẹ + shadow | CSS transform + transition |
| Laptop open | Màn hình mở ra (rotate3d) | CSS `@keyframes` |
| Dark mode toggle | Đèn bàn glow on/off | CSS filter + transition |

### Tech notes

> Phong cách này phức tạp hơn, nên cân nhắc dùng **Framer Motion** thay React Motion để có `layoutId`, `AnimatePresence` và gesture support tốt hơn.

```bash
npm install framer-motion
```

---

## 4. `cyberpunk-city` — Cyberpunk Developer City

Portfolio như một thành phố cyberpunk ban đêm. Mỗi tòa nhà là một section; scroll xuống như đi sâu vào thành phố.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| Cảm xúc | Mạnh, techy, tối, hiện đại, "hacker vibes" |
| Hình khối | Góc vuông sắc, pixel-edge, grid rõ ràng |
| Không gian | Nền đen tuyệt đối, ánh sáng neon từ text/border |
| Chuyển động | Glitch text, mưa pixel, ánh đèn nhấp nháy |
| Điểm nhấn | Biển hiệu neon, scanline overlay, terminal text |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: '#050508',        // Đen cyberpunk
    colorBgContainer: '#0D0D18',
    colorPrimary: '#00F5FF',       // Xanh neon cyan
    colorTextBase: '#E8E8F0',      // Trắng lạnh
    colorTextSecondary: '#8888AA',
    colorBorder: '#1A1A3E',
    borderRadius: 2,               // Góc vuông sắc
    fontFamily: "'JetBrains Mono', 'Orbitron', monospace",
  },
};

// CSS Variables
// --neon-pink: #FF2D78;
// --neon-purple: #8B00FF;
// --neon-green: #00FF88;
// --glow-cyan: 0 0 10px #00F5FF, 0 0 30px #00F5FF40;
// --glow-pink: 0 0 10px #FF2D78, 0 0 30px #FF2D7840;
```

### Typography

- **Heading / Code:** `JetBrains Mono` (monospace, developer feel)
- **Display / Logo:** `Orbitron` (futuristic, sci-fi)

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Orbitron:wght@400;700;900&display=swap');
```

### Layout ideas

- **Hero:** Skyline thành phố CSS/SVG ban đêm, tên hiện với glitch effect.
- **Navigation:** Các tòa nhà trên skyline = anchor links.
- **Projects:** Cards như biển hiệu neon — border glow, text neon.
- **Skills:** Terminal-style list hoặc progress bars kiểu loading bar.
- **Contact:** "SEND TRANSMISSION" button với pulse glow.
- **Background:** Subtle rain animation (CSS particles hoặc canvas nhẹ).

### Animation rules

| Sự kiện | Effect | Thư viện |
|---|---|---|
| Page load | Glitch text effect trên tên | CSS `@keyframes` glitch |
| Scroll | Parallax skyline, rain tăng tốc nhẹ | CSS / JS scroll listener |
| Card hover | Neon border sáng lên + glow shadow | CSS transition 200ms |
| Button hover | Scan line sweep qua button | CSS `::before` animation |
| Section enter | Fade in + scanline reveal | Intersection Observer |

### CSS Glitch snippet

```css
@keyframes glitch {
  0%, 100% { text-shadow: none; transform: none; }
  20% { text-shadow: -2px 0 var(--neon-pink); transform: translateX(2px); }
  40% { text-shadow: 2px 0 var(--neon-cyan); transform: translateX(-2px); }
  60% { text-shadow: -2px 0 var(--neon-purple); transform: skewX(1deg); }
  80% { text-shadow: none; transform: none; }
}

.glitch-text {
  animation: glitch 3s infinite;
}
```

---

## 5. `magazine-editorial` — Magazine / Art Editorial Portfolio

Thiết kế như một tạp chí nghệ thuật cao cấp. Typography lớn, layout bất đối xứng, hình ảnh chiếm diện tích lớn.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| Cảm xúc | Cao cấp, nghiêm túc, nghệ thuật, curated |
| Hình khối | Bất đối xứng có chủ đích, negative space táo bạo |
| Không gian | White space cực lớn — kiểu tạp chí Kinfolk, Monocle |
| Chuyển động | Page flip hoặc scroll ngang mượt; subtle text reveal |
| Điểm nhấn | Typography siêu lớn, pull quote nổi bật, số trang |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: '#F7F4EE',       // Trắng ngà giấy magazine
    colorBgContainer: '#FFFFFF',
    colorPrimary: '#1A0A00',      // Đen espresso
    colorTextBase: '#1A0A00',
    colorTextSecondary: '#7A6A5A',
    colorError: '#7A1E2E',        // Đỏ rượu vang
    colorBorder: '#E8E0D4',
    borderRadius: 0,              // Không bo góc — editorial flat
    fontFamily: "'Playfair Display', 'Libre Franklin', serif",
  },
};

// CSS Variables
// --accent-olive: #6B7A3E;
// --accent-wine: #7A1E2E;
// --ink-black: #1A0A00;
```

### Typography

- **Display / Heading:** `Playfair Display` (high-contrast serif, magazine-style)
- **Body / Caption:** `Libre Franklin` (clean grotesque)

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Franklin:wght@300;400;500;600&display=swap');
```

### Layout ideas

- **Hero:** Typography siêu lớn (tên = headline tạp chí), ảnh bên phải lệch.
- **About:** Bố cục phỏng vấn — câu hỏi in nghiêng, trả lời text thường.
- **Projects:** Mỗi project như 1 bài editorial: ảnh mockup lớn + caption + mô tả ngắn.
- **Skills:** Danh sách số — như mục lục tạp chí.
- **Navigation:** Số trang kiểu tạp chí ở góc, horizontal scroll option.

### Animation rules

| Sự kiện | Effect | Thư viện |
|---|---|---|
| Section entrance | Text reveal từng chữ hoặc từng dòng | CSS clip-path / Framer Motion |
| Image hover | Slight zoom in (scale 1.02) | CSS transition 500ms ease |
| Project switch | Slide ngang (horizontal scroll) | Scroll-snap CSS hoặc Framer |
| Quote | Fade in slow (800ms) | CSS transition |

### CSS Text Reveal snippet

```css
@keyframes text-reveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
}

.reveal-text {
  animation: text-reveal 0.8s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
```

---

## 6. `floating-island` — Dreamy 3D Floating Island

Portfolio như một thế giới nhỏ lơ lửng. Mỗi section là một hòn đảo nổi với mây, sao, ánh sáng pastel.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| Cảm xúc | Fantasy, poetic, dreamy, khác biệt hoàn toàn |
| Hình khối | Organic, bo tròn nhiều, shape không đều |
| Không gian | Bầu trời là nền — gradient từ dusk đến dawn |
| Chuyển động | Float (bob up/down), parallax mây, tween mềm |
| Điểm nhấn | Mây CSS, sao nhấp nháy, pastel glow |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: '#E8D5F5',          // Tím nhạt bầu trời
    colorBgContainer: '#FFFFFF',
    colorPrimary: '#8B5CF6',         // Tím hoa oải hương
    colorTextBase: '#2D1B5E',        // Tím đậm
    colorTextSecondary: '#6B4FA0',
    colorBorder: '#D4B8F0',
    borderRadius: 24,                // Bo tròn nhiều — organic feel
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --sky-start: #C4B5E8;
// --sky-end: #FFD6E8;
// --island-green: #A8E6CF;
// --cloud-white: rgba(255,255,255,0.85);
// --star-glow: 0 0 6px rgba(255,255,255,0.9);
// --pastel-pink: #FFB8D4;
// --pastel-blue: #B8D4FF;
```

### Typography

- **Heading:** `Quicksand` (rounded, dreamy)
- **Body:** `Nunito` (friendly, readable)

```css
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@300;400;600&display=swap');
```

### Layout ideas

**Option A — Illustration 2D + Parallax (nhẹ hơn, không cần 3D):**
- Background gradient bầu trời.
- Các hòn đảo là CSS/SVG illustration, mỗi đảo có floating animation.
- Scroll xuống → camera "bay" đến đảo tiếp theo (fullpage scroll hoặc parallax sections).
- Đảo "About" → đảo "Projects" → đảo "Skills" → đảo "Contact".

**Option B — React Three Fiber (3D thật):**
- Dùng `@react-three/fiber` + `@react-three/drei`.
- Camera bay qua các island 3D.
- Terrain + mây 3D.

```bash
# Option A (recommended — nhẹ hơn)
npm install react-motion

# Option B (nếu muốn 3D)
npm install @react-three/fiber @react-three/drei three
```

### Animation rules

| Sự kiện | Effect | Thư viện |
|---|---|---|
| Đảo idle | Float bob up/down (±8px, 3s loop) | CSS `@keyframes` |
| Mây | Di chuyển ngang chậm (vô tận) | CSS `@keyframes` |
| Sao | Twinkle opacity 0.4 ↔ 1.0 | CSS `@keyframes` |
| Scroll to island | Camera tween smooth | React Motion spring |
| Card hover | Scale 1.04 + shadow tăng | CSS transition 300ms |

### CSS Float Animation snippet

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

@keyframes cloud-drift {
  from { transform: translateX(-100px); }
  to   { transform: translateX(calc(100vw + 200px)); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 1; }
}

.island        { animation: float 4s ease-in-out infinite; }
.cloud         { animation: cloud-drift 20s linear infinite; }
.star          { animation: twinkle 2s ease-in-out infinite; }
```

### Component notes

```
src/components/
├── world/
│   ├── SkyBackground.jsx         ← Gradient bầu trời + sao
│   ├── CloudLayer.jsx            ← Animated clouds CSS
│   ├── Island.jsx                ← Đảo nổi với float animation
│   └── IslandScene.jsx           ← Compose toàn bộ world
├── sections/
│   ├── AboutIsland.jsx
│   ├── ProjectsIsland.jsx
│   ├── SkillsIsland.jsx
│   └── ContactIsland.jsx
└── ui/
    ├── DreamyCard.jsx            ← Card bo tròn, pastel bg
    ├── FloatingBadge.jsx         ← Skill badge lơ lửng
    └── StarField.jsx             ← Background stars
```

---

## Hướng dẫn chọn phong cách

```
Người dùng là ai?
│
├── Luật / Hành chính / Nghiên cứu  → legal-archive
├── Designer / Creative developer   → digital-art-gallery
├── Dev muốn portfolio cá nhân      → interactive-desk
├── Fullstack / Backend "techy"     → cyberpunk-city
├── Muốn portfolio xin việc nghiêm  → magazine-editorial
└── Muốn portfolio nổi bật visual   → floating-island
```

---

## Checklist khi áp dụng phong cách mới

- [ ] Khai báo tên phong cách trong `README.md` của sub-project
- [ ] Copy/adapt bảng màu vào `src/theme.js`
- [ ] Import đúng Google Fonts trong `src/index.css`
- [ ] Cập nhật bảng "Danh sách dự án con" trong `../README.md`
- [ ] Áp dụng animation theo đúng rules của phong cách
- [ ] Kiểm tra responsive ở 375px, 768px, 1280px

---

*Cập nhật lần cuối: 2026-05-05 — Thêm phong cách mới vào file này khi có yêu cầu.*
