# 🎨 UI Styles Catalog — Portfolio Monorepo

> Tài liệu này tổng hợp các phong cách thiết kế UI có thể áp dụng cho các dự án portfolio con.  
> Mỗi phong cách có tên định danh, bảng màu, typography, animation và component notes riêng.  
> Khi tạo dự án con mới, chọn một phong cách từ danh sách này và khai báo trong `README.md` của sub-project đó.

---

## Danh sách phong cách

| ID                    | Tên phong cách                         | Vibe                             | Hợp với                            |
| --------------------- | -------------------------------------- | -------------------------------- | ---------------------------------- |
| `legal-archive`       | Legal Archive — Thư viện pháp luật số  | Học thuật, trang trọng           | Luật, nghiên cứu, hành chính       |
| `digital-art-gallery` | Digital Art Gallery Portfolio          | Nghệ thuật, tinh tế              | Designer, frontend, creative dev   |
| `interactive-desk`    | Interactive Desk / Workspace Theme     | Gần gũi, sáng tạo                | Dev muốn portfolio cá nhân hóa     |
| `cyberpunk-city`      | Cyberpunk Developer City               | Mạnh, techy, tối                 | Fullstack / backend / frontend dev |
| `magazine-editorial`  | Magazine / Art Editorial Portfolio     | Cao cấp, tối giản-nghệ           | Portfolio xin việc chuyên nghiệp   |
| `floating-island`     | Dreamy 3D Floating Island              | Fantasy, poetic, visual          | Portfolio nổi bật về visual        |
| `tropical-summer`     | Tropical Summer Portfolio              | Tươi, rực rỡ, nhiều năng lượng   | Portfolio trẻ trung, tích cực      |
| `candy-pop`           | Candy Pop / Bubblegum Portfolio        | Pastel nổi bật, vui, cute-modern | Portfolio cá tính, đáng nhớ        |
| `art-festival`        | Art Festival / Creative Fair Portfolio | Graphic, lễ hội, poster mạnh     | Portfolio sáng tạo, nổi bật        |
| `botanical-garden`    | Botanical Garden Portfolio             | Calm, organic, clean             | Portfolio nhẹ nhàng, tinh tế       |
| `toy-box`             | Toy Box / Playroom Portfolio           | Vui, blocky, thử nghiệm          | Portfolio sáng tạo, linh hoạt      |
| `fashion-editorial`   | Fashion Editorial Portfolio            | Stylish, trendy, tự tin          | Portfolio high-end, hiện đại       |
| `k-beauty`            | K-Beauty / Korean Aesthetic Portfolio  | Tinh tế, clean, soft             | UI hiện đại, feminine              |
| `dreamy-y2k`          | Dreamy Y2K Girl Portfolio              | Girly, nostalgic, nổi bật        | Portfolio Pinterest-worthy         |
| `flower-market`       | Flower Market Portfolio                | Dịu dàng, artistic, ấm áp        | Portfolio feminine, artisan        |
| `cafe-bakery`         | Cafe & Bakery Portfolio                | Thân thiện, đáng yêu, ấm áp      | Portfolio nữ hiện đại              |

---

## 1. `legal-archive` — Thư viện pháp luật số

> **Đã dùng tại:** `anna-portfolio`

Cảm hứng từ tạp chí luật học thuật Tây Âu và hệ thống lưu trữ hồ sơ chuyên nghiệp. Tông màu trầm, thanh lịch; typography serif sắc nét; layout dạng tài liệu/báo cáo.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                      |
| ----------- | ---------------------------------------------------------- |
| Cảm xúc     | Tin cậy, có hệ thống, chuyên nghiệp                        |
| Hình khối   | Đường thẳng, góc vuông, border rõ ràng (borderRadius: 4px) |
| Không gian  | White space rộng, cảm giác "thoáng tài liệu"               |
| Chuyển động | Subtle slow fade-in + slide từ trái, không bounce          |
| Điểm nhấn   | Số thứ tự `[01]`, dấu ngoặc, ký hiệu section kiểu pháp lý  |

### Bảng màu

```js
// src/theme.js
export const theme = {
    token: {
        colorBgBase: "#FAFAF7", // Trắng ngà — như giấy in
        colorPrimary: "#1B3A5C", // Xanh navy học thuật
        colorTextBase: "#1A1A2E", // Gần đen
        colorTextSecondary: "#5C6B7A",
        colorError: "#8B2635", // Đỏ mực son (accent)
        colorBorder: "#D4C9B8",
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
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap");
```

### Animation rules

| Sự kiện          | Effect                                | Thư viện              |
| ---------------- | ------------------------------------- | --------------------- |
| Section entrance | Fade in + translateY(20px → 0)        | React Motion `spring` |
| Card hover       | Border-left đổi màu + translateX(4px) | CSS transition 200ms  |
| Nav hover        | Gạch chân grow từ trái                | CSS transition 250ms  |

---

## 2. `digital-art-gallery` — Digital Art Gallery Portfolio

Biến portfolio thành một phòng triển lãm số. Trang chủ như gallery/museum, mỗi project là một "tác phẩm nghệ thuật" được trưng bày.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                    |
| ----------- | -------------------------------------------------------- |
| Cảm xúc     | Tinh tế, có gu, nghệ thuật, sang trọng                   |
| Hình khối   | Bo góc nhẹ, có viền sáng (light border) như khung tranh  |
| Không gian  | Nền tối, spotlight vào từng project, spacing rộng        |
| Chuyển động | Parallax nhẹ khi scroll; hover reveal mô tả + tech stack |
| Điểm nhấn   | Hiệu ứng ánh sáng, shadow sâu, số thứ tự kiểu gallery    |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#0D0D0D", // Đen gallery
        colorBgContainer: "#161616", // Card nền
        colorPrimary: "#C9A84C", // Vàng nhạt — ánh đèn gallery
        colorTextBase: "#F0EDE8", // Trắng ngà
        colorTextSecondary: "#888884",
        colorBorder: "#2A2A2A",
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
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap");
```

### Layout ideas

- **Hero:** Fullscreen tối, tên tác giả ở giữa với hiệu ứng letter-spacing expand.
- **Projects grid:** Masonry layout hoặc gallery grid 2–3 cột.
- **Project card:** Ảnh mockup lớn chiếm toàn bộ card; hover thì overlay tối xuất hiện kèm mô tả + tech stack + link demo.
- **About:** Text trên nền tối, như caption tác phẩm nghệ thuật.

### Animation rules

| Sự kiện            | Effect                                | Thư viện                             |
| ------------------ | ------------------------------------- | ------------------------------------ |
| Project card hover | Dark overlay fade-in + text slide lên | CSS transition 300ms                 |
| Section entrance   | Opacity 0 → 1, nhẹ parallax           | React Motion / Intersection Observer |
| Image hover        | Scale(1.03) + shadow tăng             | CSS transition 400ms                 |
| Hero text          | Letter-spacing animate khi load       | CSS `@keyframes`                     |

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

| Yếu tố      | Mô tả                                                       |
| ----------- | ----------------------------------------------------------- |
| Cảm xúc     | Gần gũi, cá nhân, sáng tạo, ấm áp                           |
| Hình khối   | Hỗn hợp: bo tròn (sticky note), góc sắc (màn hình), organic |
| Không gian  | Mặt bàn gỗ/vải làm background chính                         |
| Chuyển động | Click vật dụng → modal/panel mở ra với spring animation     |
| Điểm nhấn   | Các decoration: ly cà phê, tai nghe, đèn bàn, cây bút       |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F5ECD7", // Màu gỗ sáng / mặt bàn
        colorBgContainer: "#FFFDF7", // Paper white
        colorPrimary: "#3D6B4F", // Xanh lá đậm ấm (desk lamp green)
        colorTextBase: "#2C2416", // Nâu đen đậm
        colorTextSecondary: "#6B5744",
        colorBorder: "#D4B896", // Viền gỗ
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
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Nunito:wght@400;600;700&display=swap");
```

### Layout ideas

- **Màn hình chính:** Illustration/CSS art mặt bàn với các vật dụng có thể click.
- **Laptop:** Click mở Projects panel (slide từ dưới lên).
- **Sổ tay:** Click mở About Me (flip animation).
- **Sticky notes:** Hiển thị Skills, màu khác nhau cho mỗi nhóm.
- **Đèn bàn:** Toggle dark/light mode.
- **Ly cà phê:** Easter egg nhỏ (câu quote ngẫu nhiên).

### Animation rules

| Sự kiện           | Effect                           | Thư viện                     |
| ----------------- | -------------------------------- | ---------------------------- |
| Click vật dụng    | Panel slide/scale vào với spring | Framer Motion / React Motion |
| Sticky note hover | Nhấc lên nhẹ + shadow            | CSS transform + transition   |
| Laptop open       | Màn hình mở ra (rotate3d)        | CSS `@keyframes`             |
| Dark mode toggle  | Đèn bàn glow on/off              | CSS filter + transition      |

### Tech notes

> Phong cách này phức tạp hơn, nên cân nhắc dùng **Framer Motion** thay React Motion để có `layoutId`, `AnimatePresence` và gesture support tốt hơn.

```bash
npm install framer-motion
```

---

## 4. `cyberpunk-city` — Cyberpunk Developer City

Portfolio như một thành phố cyberpunk ban đêm. Mỗi tòa nhà là một section; scroll xuống như đi sâu vào thành phố.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                           |
| ----------- | ----------------------------------------------- |
| Cảm xúc     | Mạnh, techy, tối, hiện đại, "hacker vibes"      |
| Hình khối   | Góc vuông sắc, pixel-edge, grid rõ ràng         |
| Không gian  | Nền đen tuyệt đối, ánh sáng neon từ text/border |
| Chuyển động | Glitch text, mưa pixel, ánh đèn nhấp nháy       |
| Điểm nhấn   | Biển hiệu neon, scanline overlay, terminal text |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#050508", // Đen cyberpunk
        colorBgContainer: "#0D0D18",
        colorPrimary: "#00F5FF", // Xanh neon cyan
        colorTextBase: "#E8E8F0", // Trắng lạnh
        colorTextSecondary: "#8888AA",
        colorBorder: "#1A1A3E",
        borderRadius: 2, // Góc vuông sắc
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
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Orbitron:wght@400;700;900&display=swap");
```

### Layout ideas

- **Hero:** Skyline thành phố CSS/SVG ban đêm, tên hiện với glitch effect.
- **Navigation:** Các tòa nhà trên skyline = anchor links.
- **Projects:** Cards như biển hiệu neon — border glow, text neon.
- **Skills:** Terminal-style list hoặc progress bars kiểu loading bar.
- **Contact:** "SEND TRANSMISSION" button với pulse glow.
- **Background:** Subtle rain animation (CSS particles hoặc canvas nhẹ).

### Animation rules

| Sự kiện       | Effect                              | Thư viện                 |
| ------------- | ----------------------------------- | ------------------------ |
| Page load     | Glitch text effect trên tên         | CSS `@keyframes` glitch  |
| Scroll        | Parallax skyline, rain tăng tốc nhẹ | CSS / JS scroll listener |
| Card hover    | Neon border sáng lên + glow shadow  | CSS transition 200ms     |
| Button hover  | Scan line sweep qua button          | CSS `::before` animation |
| Section enter | Fade in + scanline reveal           | Intersection Observer    |

### CSS Glitch snippet

```css
@keyframes glitch {
    0%,
    100% {
        text-shadow: none;
        transform: none;
    }
    20% {
        text-shadow: -2px 0 var(--neon-pink);
        transform: translateX(2px);
    }
    40% {
        text-shadow: 2px 0 var(--neon-cyan);
        transform: translateX(-2px);
    }
    60% {
        text-shadow: -2px 0 var(--neon-purple);
        transform: skewX(1deg);
    }
    80% {
        text-shadow: none;
        transform: none;
    }
}

.glitch-text {
    animation: glitch 3s infinite;
}
```

---

## 5. `magazine-editorial` — Magazine / Art Editorial Portfolio

Thiết kế như một tạp chí nghệ thuật cao cấp. Typography lớn, layout bất đối xứng, hình ảnh chiếm diện tích lớn.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                |
| ----------- | ---------------------------------------------------- |
| Cảm xúc     | Cao cấp, nghiêm túc, nghệ thuật, curated             |
| Hình khối   | Bất đối xứng có chủ đích, negative space táo bạo     |
| Không gian  | White space cực lớn — kiểu tạp chí Kinfolk, Monocle  |
| Chuyển động | Page flip hoặc scroll ngang mượt; subtle text reveal |
| Điểm nhấn   | Typography siêu lớn, pull quote nổi bật, số trang    |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F7F4EE", // Trắng ngà giấy magazine
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#1A0A00", // Đen espresso
        colorTextBase: "#1A0A00",
        colorTextSecondary: "#7A6A5A",
        colorError: "#7A1E2E", // Đỏ rượu vang
        colorBorder: "#E8E0D4",
        borderRadius: 0, // Không bo góc — editorial flat
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
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Franklin:wght@300;400;500;600&display=swap");
```

### Layout ideas

- **Hero:** Typography siêu lớn (tên = headline tạp chí), ảnh bên phải lệch.
- **About:** Bố cục phỏng vấn — câu hỏi in nghiêng, trả lời text thường.
- **Projects:** Mỗi project như 1 bài editorial: ảnh mockup lớn + caption + mô tả ngắn.
- **Skills:** Danh sách số — như mục lục tạp chí.
- **Navigation:** Số trang kiểu tạp chí ở góc, horizontal scroll option.

### Animation rules

| Sự kiện          | Effect                              | Thư viện                      |
| ---------------- | ----------------------------------- | ----------------------------- |
| Section entrance | Text reveal từng chữ hoặc từng dòng | CSS clip-path / Framer Motion |
| Image hover      | Slight zoom in (scale 1.02)         | CSS transition 500ms ease     |
| Project switch   | Slide ngang (horizontal scroll)     | Scroll-snap CSS hoặc Framer   |
| Quote            | Fade in slow (800ms)                | CSS transition                |

### CSS Text Reveal snippet

```css
@keyframes text-reveal {
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0% 0 0);
    }
}

.reveal-text {
    animation: text-reveal 0.8s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
```

---

## 6. `floating-island` — Dreamy 3D Floating Island

Portfolio như một thế giới nhỏ lơ lửng. Mỗi section là một hòn đảo nổi với mây, sao, ánh sáng pastel.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                        |
| ----------- | -------------------------------------------- |
| Cảm xúc     | Fantasy, poetic, dreamy, khác biệt hoàn toàn |
| Hình khối   | Organic, bo tròn nhiều, shape không đều      |
| Không gian  | Bầu trời là nền — gradient từ dusk đến dawn  |
| Chuyển động | Float (bob up/down), parallax mây, tween mềm |
| Điểm nhấn   | Mây CSS, sao nhấp nháy, pastel glow          |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#E8D5F5", // Tím nhạt bầu trời
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#8B5CF6", // Tím hoa oải hương
        colorTextBase: "#2D1B5E", // Tím đậm
        colorTextSecondary: "#6B4FA0",
        colorBorder: "#D4B8F0",
        borderRadius: 24, // Bo tròn nhiều — organic feel
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
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@300;400;600&display=swap");
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

| Sự kiện          | Effect                            | Thư viện             |
| ---------------- | --------------------------------- | -------------------- |
| Đảo idle         | Float bob up/down (±8px, 3s loop) | CSS `@keyframes`     |
| Mây              | Di chuyển ngang chậm (vô tận)     | CSS `@keyframes`     |
| Sao              | Twinkle opacity 0.4 ↔ 1.0         | CSS `@keyframes`     |
| Scroll to island | Camera tween smooth               | React Motion spring  |
| Card hover       | Scale 1.04 + shadow tăng          | CSS transition 300ms |

### CSS Float Animation snippet

```css
@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-12px);
    }
}

@keyframes cloud-drift {
    from {
        transform: translateX(-100px);
    }
    to {
        transform: translateX(calc(100vw + 200px));
    }
}

@keyframes twinkle {
    0%,
    100% {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
}

.island {
    animation: float 4s ease-in-out infinite;
}
.cloud {
    animation: cloud-drift 20s linear infinite;
}
.star {
    animation: twinkle 2s ease-in-out infinite;
}
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

## 7. `tropical-summer` — Tropical Summer Portfolio

Theme mùa hè nhiệt đới: sáng, tươi, rực rỡ và giàu năng lượng. Giao diện gợi cảm giác du lịch biển, nhật ký mùa hè, postcard, nắng vàng và sóng nước.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                       |
| ----------- | ----------------------------------------------------------- |
| Cảm xúc     | Trẻ trung, tích cực, gần gũi, năng động                     |
| Hình khối   | Bo góc vừa, card như postcard, sticker trái cây/lá cọ/sóng  |
| Không gian  | Nền sáng, thoáng, nhiều khoảng trắng để cân bằng màu rực    |
| Chuyển động | Sóng nước, mây trôi, nắng lấp lánh, hover nhấc nhẹ          |
| Điểm nhấn   | Postcard du lịch, tem/stamp, đường viền wave, icon trái cây |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF8E7", // Cát sáng / nắng nhẹ
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#00A6D6", // Xanh biển
        colorTextBase: "#123047",
        colorTextSecondary: "#4E7188",
        colorWarning: "#FFB703", // Vàng nắng
        colorError: "#FF7A59", // Cam đào
        colorBorder: "#BFEAF5",
        borderRadius: 18,
        fontFamily: "'Nunito', 'Poppins', sans-serif",
    },
};

// CSS Variables
// --ocean-blue: #00A6D6;
// --sun-yellow: #FFB703;
// --peach-orange: #FF9F6E;
// --palm-green: #2FBF71;
// --sand: #FFF1C7;
```

### Typography

- **Heading:** `Poppins` (tròn, năng lượng, dễ đọc)
- **Body:** `Nunito` (thân thiện, mềm)

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Nunito:wght@400;600;700&display=swap");
```

### Layout ideas

- **Hero:** Nền biển sáng, mặt trời, mây và sóng CSS; tên đặt như tiêu đề postcard.
- **About:** Trang nhật ký mùa hè với ảnh/avatar và các note ngắn.
- **Projects:** Card như postcard du lịch, có stamp số thứ tự và border wave.
- **Skills:** Sticker trái cây, lá cọ, vỏ sò, sóng biển; nên dùng icon + nhãn ngắn.
- **Contact:** Form/CTA như vé du lịch hoặc postcard gửi đi.

### Animation rules

| Sự kiện          | Effect                          | Thư viện         |
| ---------------- | ------------------------------- | ---------------- |
| Background       | Wave translate ngang chậm       | CSS `@keyframes` |
| Cloud            | Drift nhẹ qua hero              | CSS animation    |
| Sun sparkle      | Opacity/scale pulse rất nhẹ     | CSS animation    |
| Card hover       | Lift + rotate 1deg như postcard | CSS transition   |
| Section entrance | Fade + translateY(18px → 0)     | React Motion     |

### Component notes

```
src/components/
├── summer/
│   ├── SummerSky.jsx
│   ├── WaveLayer.jsx
│   └── PostcardFrame.jsx
├── sections/
│   ├── SummerHeroSection.jsx
│   ├── SummerDiarySection.jsx
│   ├── PostcardProjectsSection.jsx
│   └── SummerContactSection.jsx
└── ui/
    ├── PostcardCard.jsx
    ├── FruitSticker.jsx
    └── WaveDivider.jsx
```

---

## 8. `candy-pop` — Candy Pop / Bubblegum Portfolio

Theme kẹo ngọt, pop-art, pastel nổi bật. Giao diện vui và đáng nhớ nhưng cần typography sạch, spacing rõ để không bị trẻ con hoặc quá rối.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Fresh, cute, vui, cá tính, hiện đại                              |
| Hình khối   | Bo tròn lớn, bubble sticker, pill button, shape tròn/sao/tim/mây |
| Không gian  | Pastel sáng, nhiều lớp nổi nhưng nền vẫn thoáng                  |
| Chuyển động | Bounce, squish, float nhẹ, hover scale mềm                       |
| Điểm nhấn   | Button như kẹo bóng, project card như hộp kẹo                    |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF0F7", // Hồng pastel
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF5CA8", // Bubblegum pink
        colorTextBase: "#2F2440",
        colorTextSecondary: "#725D86",
        colorInfo: "#8AD8FF", // Baby blue
        colorSuccess: "#8EF0C0", // Mint
        colorWarning: "#FFE08A", // Cream yellow
        colorBorder: "#F5B8D8",
        borderRadius: 28,
        fontFamily: "'Nunito', 'Baloo 2', sans-serif",
    },
};

// CSS Variables
// --bubblegum: #FF5CA8;
// --mint-pop: #8EF0C0;
// --lavender-pop: #C7B8FF;
// --cream-yellow: #FFE08A;
// --candy-shadow: 0 16px 34px rgba(255, 92, 168, 0.2);
```

### Typography

- **Heading:** `Baloo 2` hoặc `Nunito` weight 800 (rounded, pop)
- **Body:** `Nunito` (sạch, cân bằng độ cute)

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700&display=swap");
```

### Layout ideas

- **Hero:** Bubble shapes quanh tên, CTA dạng kẹo/pill lớn.
- **Projects:** Card như hộp kẹo hoặc bubble sticker; mỗi project có màu accent riêng.
- **Skills:** Sticker grid với icon tròn, sao, tim, mây.
- **About:** Bubble panel lớn với avatar trong frame mềm.
- **Navigation:** Pill nav nổi, active state như candy highlight.

### Animation rules

| Sự kiện           | Effect                   | Thư viện            |
| ----------------- | ------------------------ | ------------------- |
| Button hover      | Squish scaleX/scaleY nhẹ | CSS transition      |
| Sticker hover     | Bounce + rotate 2deg     | CSS `@keyframes`    |
| Card entrance     | Pop scale 0.96 → 1       | React Motion spring |
| Background shapes | Float chậm, delay lệch   | CSS animation       |
| Active nav        | Bubble fill slide        | CSS pseudo-element  |

### Component notes

```
src/components/
├── candy/
│   ├── CandyBackground.jsx
│   ├── BubbleShape.jsx
│   └── CandyNav.jsx
├── sections/
│   ├── CandyHeroSection.jsx
│   ├── BubbleAboutSection.jsx
│   ├── CandyProjectsSection.jsx
│   └── StickerSkillsSection.jsx
└── ui/
    ├── CandyButton.jsx
    ├── BubbleCard.jsx
    └── StickerBadge.jsx
```

---

## 9. `art-festival` — Art Festival / Creative Fair Portfolio

Theme như một lễ hội nghệ thuật ngoài trời. Giao diện có chất poster, booth, vé sự kiện, bảng thông báo và grid graphic design mạnh.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                     |
| ----------- | --------------------------------------------------------- |
| Cảm xúc     | Vui, nổi bật, sáng tạo, graphic, giàu nhịp điệu           |
| Hình khối   | Poster block, ticket card, booth panel, border dày        |
| Không gian  | Grid mạnh, mảng màu rõ, section như khu booth             |
| Chuyển động | Poster reveal, ticket lift, marquee nhẹ                   |
| Điểm nhấn   | Hero như poster festival, project như vé/poster triển lãm |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFFDF4",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#E63946", // Festival red
        colorTextBase: "#171717",
        colorTextSecondary: "#4A4A4A",
        colorInfo: "#1D4ED8", // Cobalt blue
        colorWarning: "#F9C74F", // Yellow
        colorError: "#F97316", // Orange
        colorBorder: "#171717",
        borderRadius: 6,
        fontFamily: "'Archivo', 'Space Grotesk', sans-serif",
    },
};

// CSS Variables
// --festival-red: #E63946;
// --festival-yellow: #F9C74F;
// --cobalt: #1D4ED8;
// --festival-orange: #F97316;
// --poster-paper: #FFFDF4;
```

### Typography

- **Heading:** `Archivo` (đậm, poster-like)
- **Body:** `Space Grotesk` (hiện đại, graphic)

```css
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap");
```

### Layout ideas

- **Hero:** Poster festival full viewport, tên cực lớn, màu block mạnh.
- **Sections:** `About Booth`, `Project Booth`, `Contact Booth`.
- **Projects:** Ticket cards, poster grid, bảng thông báo hoặc thẻ triển lãm.
- **Skills:** Badge như lineup/festival tags.
- **Footer:** Dạng event pass hoặc bảng lịch sự kiện.

### Animation rules

| Sự kiện          | Effect                                  | Thư viện       |
| ---------------- | --------------------------------------- | -------------- |
| Hero load        | Poster block reveal từ trái/phải        | CSS clip-path  |
| Project hover    | Ticket lift + shadow sắc                | CSS transition |
| Marquee          | Text chạy rất chậm cho decorative strip | CSS animation  |
| Section entrance | Slide up + opacity                      | React Motion   |
| Badge hover      | Color swap / border flash               | CSS transition |

### Component notes

```
src/components/
├── festival/
│   ├── FestivalPoster.jsx
│   ├── BoothFrame.jsx
│   └── MarqueeStrip.jsx
├── sections/
│   ├── FestivalHeroSection.jsx
│   ├── AboutBoothSection.jsx
│   ├── ProjectBoothSection.jsx
│   └── ContactBoothSection.jsx
└── ui/
    ├── TicketCard.jsx
    ├── PosterCard.jsx
    └── LineupBadge.jsx
```

---

## 10. `botanical-garden` — Botanical Garden Portfolio

Theme khu vườn thực vật: sáng, tự nhiên, mềm mại, clean và dễ chịu. Phù hợp portfolio muốn sáng tạo nhưng không quá chói.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                   |
| ----------- | ------------------------------------------------------- |
| Cảm xúc     | Calm, organic, clean, friendly                          |
| Hình khối   | Bo góc nhẹ, organic curves, card như thẻ tên cây        |
| Không gian  | Nền xanh nhạt/trắng ngà, spacing rộng, nhiều lớp lá nhẹ |
| Chuyển động | Cây/hoa nở dần, lá sway nhẹ, fade-in mềm                |
| Điểm nhấn   | Seed badge, leaf divider, plant label project cards     |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F3FAF1", // Xanh nhạt
        colorBgContainer: "#FFFDF6", // Trắng ngà
        colorPrimary: "#4F8A5B", // Garden green
        colorTextBase: "#233528",
        colorTextSecondary: "#5E7565",
        colorWarning: "#E8C66A", // Vàng nhạt
        colorSuccess: "#8FCFA2",
        colorBorder: "#CFE3D2",
        borderRadius: 16,
        fontFamily: "'Nunito', 'Fraunces', serif",
    },
};

// CSS Variables
// --leaf-green: #4F8A5B;
// --seed-green: #8FCFA2;
// --garden-cream: #FFFDF6;
// --soft-yellow: #E8C66A;
// --stem-line: #CFE3D2;
```

### Typography

- **Heading:** `Fraunces` (organic serif, tinh tế)
- **Body:** `Nunito` (mềm, dễ đọc)

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Layout ideas

- **Hero:** Garden entrance, tên như bảng tên khu vườn.
- **About:** Một khu vườn nhỏ với các plant label cho thông tin cá nhân.
- **Projects:** Cards như thẻ tên cây trong vườn, có mã số/specimen number.
- **Skills:** Hạt giống, lá, hoa; nhóm skill như luống cây.
- **Scroll:** Lá/hoa nở dần theo section entrance.

### Animation rules

| Sự kiện          | Effect                      | Thư viện                  |
| ---------------- | --------------------------- | ------------------------- |
| Section entrance | Bloom scale 0.98 → 1 + fade | React Motion              |
| Leaf decor       | Sway rotate ±2deg           | CSS animation             |
| Card hover       | Lift nhẹ + border xanh đậm  | CSS transition            |
| Skill badge      | Seed grow / scale pulse nhẹ | CSS transition            |
| Divider          | Vine line draw              | CSS keyframe / SVG stroke |

### Component notes

```
src/components/
├── garden/
│   ├── GardenBackground.jsx
│   ├── LeafDecor.jsx
│   └── PlantBed.jsx
├── sections/
│   ├── GardenHeroSection.jsx
│   ├── AboutGardenSection.jsx
│   ├── PlantProjectsSection.jsx
│   └── SeedSkillsSection.jsx
└── ui/
    ├── PlantLabelCard.jsx
    ├── SeedBadge.jsx
    └── LeafDivider.jsx
```

---

## 11. `toy-box` — Toy Box / Playroom Portfolio

Theme như một hộp đồ chơi sáng tạo: block, cube, puzzle, màu cơ bản rực rỡ nhưng được cân bằng bằng nền trắng/kem để không rối.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                |
| ----------- | -------------------------------------------------------------------- |
| Cảm xúc     | Rất vui, đáng nhớ, linh hoạt, thử nghiệm UI                          |
| Hình khối   | Cube, block, puzzle piece, card module có shadow rõ                  |
| Không gian  | Nền trắng/kem, màu primary dùng theo block thay vì phủ toàn màn hình |
| Chuyển động | Xếp hình, kéo-thả nhẹ, block snap, hover tilt                        |
| Điểm nhấn   | Project như món đồ chơi mở ra, skill như lego/puzzle                 |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF9ED", // Kem cân bằng
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#2563EB", // Toy blue
        colorTextBase: "#1E293B",
        colorTextSecondary: "#64748B",
        colorError: "#EF4444", // Red block
        colorWarning: "#FACC15", // Yellow block
        colorSuccess: "#22C55E", // Green block
        colorBorder: "#D8DEE9",
        borderRadius: 10,
        fontFamily: "'Nunito', 'Fredoka', sans-serif",
    },
};

// CSS Variables
// --toy-red: #EF4444;
// --toy-yellow: #FACC15;
// --toy-blue: #2563EB;
// --toy-green: #22C55E;
// --playroom-cream: #FFF9ED;
```

### Typography

- **Heading:** `Fredoka` (rounded, playful)
- **Body:** `Nunito` (sạch và dễ đọc)

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Layout ideas

- **Hero:** Hộp đồ chơi mở ra, các block/cube tạo thành tên.
- **Projects:** Từng món đồ chơi/card block có thể mở ra bằng panel hoặc accordion.
- **Skills:** Lego/puzzle pieces theo nhóm kỹ năng.
- **Contact:** Tấm thiệp nằm trong hộp đồ chơi.
- **Navigation:** Block buttons dạng cube, active state như mảnh puzzle khớp vào.

### Animation rules

| Sự kiện          | Effect                              | Thư viện                       |
| ---------------- | ----------------------------------- | ------------------------------ |
| Block hover      | Tilt 2deg + lift                    | CSS transition                 |
| Project open     | Snap/scale panel                    | React Motion spring            |
| Skill badge      | Puzzle piece slide-in               | CSS transform                  |
| Drag affordance  | Optional drag with cursor + snap    | Pointer events / Framer Motion |
| Section entrance | Blocks assemble from slight offsets | React Motion                   |

### Component notes

```
src/components/
├── playroom/
│   ├── ToyBoxScene.jsx
│   ├── PuzzleGrid.jsx
│   └── ToyBlock.jsx
├── sections/
│   ├── ToyHeroSection.jsx
│   ├── ToyProjectsSection.jsx
│   ├── PuzzleSkillsSection.jsx
│   └── ToyContactSection.jsx
└── ui/
    ├── BlockCard.jsx
    ├── PuzzleBadge.jsx
    └── ToyButton.jsx
```

---

## 12. `fashion-editorial` — Fashion Editorial Portfolio

Theme như website tạp chí thời trang cao cấp nhưng trẻ trung. Typography lớn, sang; layout bất đối xứng; ảnh full-width; nhiều khoảng trắng kết hợp accent màu nổi bật.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                          |
| ----------- | -------------------------------------------------------------- |
| Cảm xúc     | Stylish, trendy, tự tin, "cool girl"                           |
| Hình khối   | Bất đối xứng có chủ đích, negative space táo bạo               |
| Không gian  | White space cực lớn; section như các trang editorial tạp chí   |
| Chuyển động | Text reveal chậm, image pan nhẹ, hover accent flash            |
| Điểm nhấn   | Typography siêu lớn, ảnh full-width, accent màu nổi bật đơn lẻ |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF8F5", // Kem ấm
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#C0183A", // Đỏ cherry
        colorTextBase: "#1A1118", // Đen mềm
        colorTextSecondary: "#7A6070",
        colorBorder: "#F0E0D6",
        borderRadius: 0, // Flat editorial
        fontFamily: "'Cormorant Garamond', 'Outfit', serif",
    },
};

// CSS Variables
// --blush-pink: #F4A7A7;      /* Hồng đào */
// --cherry-red: #C0183A;      /* Đỏ cherry */
// --champagne: #C9A96E;       /* Champagne gold */
// --soft-black: #1A1118;      /* Đen mềm */
// --cream: #FFF8F5;           /* Kem */
```

### Typography

- **Display / Heading:** `Cormorant Garamond` (high-contrast serif, magazine-grade)
- **Body / UI:** `Outfit` (clean, trendy sans-serif)

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&family=Outfit:wght@300;400;500;600&display=swap");
```

### Layout ideas

- **Hero:** Tên lớn choán nửa viewport, ảnh portrait lệch sang phải full-height.
- **About:** Bố cục phỏng vấn tạp chí — câu hỏi in nghiêng nhỏ, trả lời chữ to hơn.
- **Projects:** Mỗi project như một editorial spread: ảnh lớn + caption nhỏ + link.
- **Skills:** Danh sách kiểu mục lục tạp chí với số thứ tự.
- **Contact:** CTA lớn, đơn giản, typography làm trọng tâm.

### Animation rules

| Sự kiện          | Effect                                  | Thư viện             |
| ---------------- | --------------------------------------- | -------------------- |
| Hero load        | Text slide từ dưới lên từng dòng        | CSS `@keyframes`     |
| Image scroll     | Subtle parallax pan dọc                 | JS scroll listener   |
| Section entrance | Clip-path reveal từ trái                | CSS clip-path        |
| Card hover       | Cherry accent border flash + scale 1.01 | CSS transition 300ms |
| Nav hover        | Gạch chân grow từ trái, màu cherry      | CSS pseudo-element   |

### Component notes

```
src/components/
├── editorial/
│   ├── EditorialHero.jsx        ← Tên lớn + ảnh lệch
│   ├── EditorialSpread.jsx      ← Project như trang tạp chí
│   └── EditorialNav.jsx         ← Nav kiểu tạp chí
├── sections/
│   ├── FashionHeroSection.jsx
│   ├── InterviewAboutSection.jsx
│   ├── SpreadProjectsSection.jsx
│   └── FashionContactSection.jsx
└── ui/
    ├── IssueNumber.jsx          ← Số trang/issue decoration
    ├── PullQuote.jsx            ← Quote nổi bật
    └── AccentLine.jsx           ← Cherry accent divider
```

### Tự tạo Assets 2D bằng SVG

> Không dùng asset 2D tải ngoài. Tạo SVG riêng trong `src/assets/fashion-editorial/`, bám palette cherry/cream/ink và dùng shape tối giản để giữ cảm giác high-end.

| File SVG tự tạo               | Nội dung cần vẽ                                              | Dùng cho                    | Gợi ý kỹ thuật                                           |
| ----------------------------- | ------------------------------------------------------------ | --------------------------- | -------------------------------------------------------- |
| `fashion-figure.svg`          | Nhân vật fashion dáng dài, ít chi tiết, line art thanh mảnh  | Hero, about section         | Dùng path stroke 1.5–2px, không vẽ mặt quá chi tiết      |
| `magazine-spread-lines.svg`   | Khung trang tạp chí, số issue, grid line, accent cherry line | Background, section divider | Dùng rect/line/text giả lập layout editorial             |
| `fashion-outline-icons.svg`   | Hanger, jacket, sparkle, lipstick dạng outline               | Skill icons, nav            | Gom thành symbol sprite hoặc nhiều icon 24x24            |
| `editorial-blob-shapes.svg`   | Blob bất đối xứng mềm, dùng làm mảng nền                     | Hero accent shapes          | Fill bằng `var(--accent-soft)` hoặc opacity 0.12–0.2     |
| `runway-silhouettes.svg`      | 3–4 silhouette thời trang đứng lệch nhịp                     | Hero decoration             | Dùng fill đen/ink, đặt opacity thấp để không lấn nội dung |
| `grain-pattern.svg`           | Pattern noise nhẹ bằng filter `feTurbulence`                 | Overlay texture             | Xuất SVG inline hoặc data-uri, opacity 0.04–0.08         |

**Gợi ý cấu trúc:**

```
src/assets/fashion-editorial/
├── fashion-figure.svg
├── magazine-spread-lines.svg
├── fashion-outline-icons.svg
├── editorial-blob-shapes.svg
├── runway-silhouettes.svg
└── grain-pattern.svg
```

---

## 13. `k-beauty` — K-Beauty / Korean Aesthetic Portfolio

Phong cách Hàn Quốc: sáng, mềm, rất clean. Nền trắng sữa/pastel, card bo tròn mềm, shadow nhẹ, animation tối giản và mượt mà như beauty product showcase.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                   |
| ----------- | ------------------------------------------------------- |
| Cảm xúc     | Tinh tế, chuyên nghiệp, nhẹ nhàng, dễ chịu              |
| Hình khối   | Bo tròn lớn (20–28px), card nổi nhẹ, shadow tinh tế     |
| Không gian  | Nền trắng sữa, spacing rộng rãi, hierarchy rõ ràng      |
| Chuyển động | Fade-in mượt, hover float nhẹ, transition easing smooth |
| Điểm nhấn   | Pastel accent chọn lọc, icon tối giản, tag bo tròn      |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FDF9F7", // Trắng sữa
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#E8A0BF", // Hồng phấn chủ đạo
        colorTextBase: "#2D2D35",
        colorTextSecondary: "#8A8498",
        colorInfo: "#B8D8F5", // Sky blue pastel
        colorSuccess: "#D4C5F9", // Lavender
        colorBorder: "#F0E6EC",
        borderRadius: 24,
        fontFamily: "'Plus Jakarta Sans', 'Noto Sans KR', sans-serif",
    },
};

// CSS Variables
// --pink-powder: #E8A0BF;     /* Hồng phấn */
// --lavender: #D4C5F9;        /* Lavender */
// --beige: #F5EDE8;           /* Beige ấm */
// --peach: #FFD6C0;           /* Peach nhẹ */
// --sky-pastel: #B8D8F5;      /* Sky blue pastel */
```

### Typography

- **Heading:** `Plus Jakarta Sans` (modern, clean, premium feel)
- **Body:** `Noto Sans KR` (phù hợp vibe K-style, dễ đọc)

```css
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500&display=swap");
```

### Layout ideas

- **Hero:** Nền trắng sữa, tên với weight nhẹ + tagline pastel, avatar/ảnh bo tròn lớn.
- **About:** Clean card với pastel soft border, thông tin ngắn gọn như beauty profile.
- **Projects:** Grid 2–3 cột, card bo tròn, shadow `0 4px 20px rgba(0,0,0,0.06)`.
- **Skills:** Tag pill bo tròn, pastel background theo nhóm skill.
- **Contact:** Form tối giản, button bo tròn, hover nhẹ.

### Animation rules

| Sự kiện          | Effect                          | Thư viện             |
| ---------------- | ------------------------------- | -------------------- |
| Section entrance | Fade-in + translateY(12px → 0)  | React Motion         |
| Card hover       | Float lên 4px + shadow tăng nhẹ | CSS transition 250ms |
| Tag hover        | Background đổi pastel shade nhẹ | CSS transition 200ms |
| Button hover     | Scale 1.02 + shadow pastel      | CSS transition 200ms |
| Image hover      | Scale 1.03 nhẹ                  | CSS transition 400ms |

### Component notes

```
src/components/
├── kbeauty/
│   ├── SoftBackground.jsx       ← Pastel gradient nền
│   ├── GlassCard.jsx            ← Card bo tròn, shadow nhẹ
│   └── PastelTag.jsx            ← Tag pill skill
├── sections/
│   ├── KBeautyHeroSection.jsx
│   ├── BeautyProfileSection.jsx
│   ├── ProductShowcaseSection.jsx
│   └── KBeautyContactSection.jsx
└── ui/
    ├── SoftCard.jsx
    ├── PillBadge.jsx
    └── FloatButton.jsx
```

### Tự tạo Assets 2D bằng SVG

> Không dùng asset 2D tải ngoài. Tạo SVG riêng trong `src/assets/k-beauty/`, ưu tiên nét mảnh, bo tròn mềm, pastel dịu và nhiều khoảng trắng.

| File SVG tự tạo             | Nội dung cần vẽ                                        | Dùng cho            | Gợi ý kỹ thuật                                      |
| --------------------------- | ------------------------------------------------------ | ------------------- | --------------------------------------------------- |
| `kbeauty-character.svg`     | Nhân vật nửa người, tóc và outfit tối giản kiểu K-look | Hero, about section | Dùng shape phẳng, mắt/mũi chỉ là vài stroke nhỏ     |
| `soft-pastel-blobs.svg`     | 4–6 blob pastel mờ, bo mềm                             | Background accent   | Fill pastel opacity 0.16–0.28, có thể animate float |
| `skincare-outline-icons.svg` | Serum bottle, cream jar, leaf, sparkle                 | Skill badges, decor | Icon 24x24, stroke round cap, dùng `currentColor`   |
| `pastel-wash-bg.svg`        | Nền loang màu nhẹ như watercolor nhưng vẽ bằng gradient | Hero background     | Dùng radialGradient/linearGradient, tránh bitmap    |
| `cherry-blossom-divider.svg` | Cành hoa anh đào mảnh, ít cánh rơi                     | Section divider     | Path stroke mềm, petal bằng ellipse màu hồng nhạt   |
| `minimal-line-ui-icons.svg` | Arrow, mail, link, check, star đồng bộ nét             | UI icons            | Tự vẽ bộ icon nhỏ nếu không dùng icon library       |

**Gợi ý cấu trúc:**

```
src/assets/k-beauty/
├── kbeauty-character.svg
├── soft-pastel-blobs.svg
├── skincare-outline-icons.svg
├── pastel-wash-bg.svg
├── cherry-blossom-divider.svg
└── minimal-line-ui-icons.svg
```

---

## 14. `dreamy-y2k` — Dreamy Y2K Girl Portfolio

Style Y2K theo hướng sáng và nghệ: gradient holographic, sticker trang trí, glassmorphism, cursor custom, floating objects và typography playful. Nếu làm khéo sẽ rất "Pinterest".

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                               |
| ----------- | ------------------------------------------------------------------- |
| Cảm xúc     | Girly, internet aesthetic, nostalgic, cực nổi bật                   |
| Hình khối   | Glassmorphism card, sticker floating, shape holographic             |
| Không gian  | Gradient holographic làm nền, floating objects trang trí            |
| Chuyển động | Sticker float/rotate, sparkle twinkle, cursor trail                 |
| Điểm nhấn   | Sticker sao ⭐, bướm 🦋, trái tim 💗, sparkles ✨, hologram shimmer |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F0EBFF", // Tím pastel nhạt
        colorBgContainer: "rgba(255,255,255,0.6)", // Glassmorphism
        colorPrimary: "#C084FC", // Tím holographic
        colorTextBase: "#2D1B5E",
        colorTextSecondary: "#7C5FA0",
        colorInfo: "#93C5FD", // Xanh baby
        colorBorder: "rgba(192,132,252,0.3)",
        borderRadius: 20,
        fontFamily: "'Quicksand', 'Pacifico', sans-serif",
    },
};

// CSS Variables
// --holo-silver: linear-gradient(135deg, #e0c3fc, #8ec5fc, #fbc2eb);
// --neon-pink-soft: #F9A8D4;   /* Hồng neon nhẹ */
// --purple-pastel: #DDD6FE;    /* Tím pastel */
// --baby-blue: #BAE6FD;        /* Xanh baby */
// --glass-bg: rgba(255,255,255,0.25);
// --glass-border: rgba(255,255,255,0.4);
```

### Typography

- **Display:** `Pacifico` (retro-playful, Y2K vibe)
- **Body:** `Quicksand` (rounded, cute, readable)

```css
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;500;600;700&display=swap");
```

### Layout ideas

- **Hero:** Holographic gradient nền, tên font Pacifico lớn, sticker trôi nổi xung quanh.
- **Glassmorphism cards:** `backdrop-filter: blur(12px)`, viền trắng trong suốt.
- **Sticker layer:** Butterflies, stars, hearts rải rác qua CSS/SVG với float animation.
- **Cursor custom:** Cursor trail sparkle (JS canvas nhẹ).
- **Projects:** Card glass effect, mỗi project có "sticker" riêng.

### CSS Glassmorphism snippet

```css
.glass-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(192, 132, 252, 0.15);
}

@keyframes sticker-float {
    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }
    33% {
        transform: translateY(-8px) rotate(3deg);
    }
    66% {
        transform: translateY(-4px) rotate(-2deg);
    }
}

.sticker {
    animation: sticker-float 4s ease-in-out infinite;
}
```

### Animation rules

| Sự kiện      | Effect                    | Thư viện             |
| ------------ | ------------------------- | -------------------- |
| Page load    | Sticker fly in từ các góc | CSS `@keyframes`     |
| Sticker idle | Float + rotate nhẹ vô tận | CSS animation        |
| Sparkle      | Twinkle opacity + scale   | CSS `@keyframes`     |
| Card hover   | Glass shimmer + lift      | CSS transition 300ms |
| Cursor       | Trail sparkle effect      | JS Canvas            |

### Component notes

```
src/components/
├── y2k/
│   ├── HoloBackground.jsx       ← Holographic gradient nền
│   ├── StickerLayer.jsx         ← Floating stickers
│   ├── CursorTrail.jsx          ← Sparkle cursor effect
│   └── GlassCard.jsx            ← Glassmorphism card
├── sections/
│   ├── Y2KHeroSection.jsx
│   ├── DreamyAboutSection.jsx
│   ├── StickerProjectsSection.jsx
│   └── Y2KContactSection.jsx
└── ui/
    ├── HoloButton.jsx
    ├── SparkleText.jsx
    └── StickerBadge.jsx         ← Skill badges dạng sticker
```

### Tự tạo Assets 2D bằng SVG

> Không dùng asset 2D tải ngoài. Tạo SVG riêng trong `src/assets/dreamy-y2k/`, dùng gradient holographic, sticker viền trắng và shape vui nhưng vẫn rõ trên nền glassmorphism.

| File SVG tự tạo            | Nội dung cần vẽ                                      | Dùng cho               | Gợi ý kỹ thuật                                               |
| -------------------------- | ---------------------------------------------------- | ---------------------- | ------------------------------------------------------------ |
| `holo-sticker-sheet.svg`   | Sticker sheet gồm star, heart, butterfly, mini badge | Floating sticker layer | Mỗi sticker có stroke trắng 3–5px, filter shadow nhẹ         |
| `sparkle-stars.svg`        | Cụm sparkle 4-point và 8-point nhiều kích thước      | Twinkle decoration     | Dùng polygon/path đơn giản, animate opacity/scale bằng CSS   |
| `butterfly-sticker.svg`    | Bướm sticker cánh gradient hồng-tím-xanh             | Floating sticker       | Dùng linearGradient, stroke trắng, rotate nhẹ khi animate    |
| `y2k-gradient-bg.svg`      | Background holographic bằng mesh-like radial gradient | Hero background        | Dùng nhiều radialGradient, opacity thấp, không dùng bitmap   |
| `retro-pixel-heart.svg`    | Trái tim pixel 8-bit                                  | Sticker decoration     | Vẽ bằng rect grid, giữ cạnh vuông để đúng retro feel         |
| `cloud-rainbow-icons.svg`  | Cloud, rainbow, crescent, tiny bow                    | Floating objects       | Tạo icon set đồng nét, màu pastel sáng, có outline trắng     |

**Gợi ý cấu trúc:**

```
src/assets/dreamy-y2k/
├── holo-sticker-sheet.svg
├── sparkle-stars.svg
├── butterfly-sticker.svg
├── y2k-gradient-bg.svg
├── retro-pixel-heart.svg
└── cloud-rainbow-icons.svg
```

---

## 15. `flower-market` — Flower Market Portfolio

Portfolio như một cửa hàng hoa/artisan floral studio. Hero như bảng hiệu shop hoa, projects như các bó hoa/bộ sưu tập, skills như tag treo trên hoa, contact như card đặt hoa.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                              |
| ----------- | ------------------------------------------------------------------ |
| Cảm xúc     | Dịu dàng, artistic, feminine, ấm áp                                |
| Hình khối   | Bo góc nhẹ, card như thẻ tag hoa, divider dạng nhánh cây           |
| Không gian  | Nền trắng ngà/kem, khoảng trắng thoáng, illustration làm điểm nhấn |
| Chuyển động | Hoa nở dần, cánh hoa rơi, hover sway nhẹ                           |
| Điểm nhấn   | Illustration hoa vẽ tay / watercolor, tag treo, ribbon             |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FDF6F0", // Trắng ngà ấm
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#C9797A", // Hồng dusty rose
        colorTextBase: "#2D1F1F",
        colorTextSecondary: "#8A6E6E",
        colorSuccess: "#8FAF8A", // Sage green
        colorWarning: "#E8C99A", // Vàng kem
        colorBorder: "#EDCFC0",
        borderRadius: 14,
        fontFamily: "'Lora', 'DM Sans', serif",
    },
};

// CSS Variables
// --dusty-rose: #C9797A;      /* Hồng dusty rose */
// --cream-yellow: #F5E6C8;    /* Vàng kem */
// --sage-green: #8FAF8A;      /* Xanh sage */
// --ivory: #FDF6F0;           /* Trắng ngà */
// --peach-pastel: #F5C5A3;    /* Cam pastel */
```

### Typography

- **Heading:** `Lora` (organic serif, floral feel)
- **Body:** `DM Sans` (clean, modern, cân bằng)

```css
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap");
```

### Layout ideas

- **Hero:** Bảng hiệu shop hoa — tên shop lớn, tagline serif nhỏ, illustration/ảnh hoa full-width.
- **Projects:** Grid như showcase bó hoa — ảnh lớn, tên bó hoa (= tên project), tag nguyên liệu (= tech stack).
- **Skills:** Tag treo trên dây/nhánh cây; mỗi tag là một skill.
- **About:** Card giới thiệu florist — ảnh, story ngắn, style chữ serif ấm áp.
- **Contact:** CTA như form đặt hoa, button "Book Now" / "Send a bouquet".

### Animation rules

| Sự kiện          | Effect                            | Thư viện             |
| ---------------- | --------------------------------- | -------------------- |
| Section entrance | Hoa nở dần (scale + opacity)      | React Motion         |
| Petal decoration | Rơi chậm từ trên xuống            | CSS `@keyframes`     |
| Tag hover        | Sway rotate ±3deg                 | CSS transition 300ms |
| Card hover       | Lift + shadow dusty rose          | CSS transition 250ms |
| Divider          | SVG vine draw (stroke-dashoffset) | CSS / SVG animation  |

### CSS Petal Fall snippet

```css
@keyframes petal-fall {
    0% {
        transform: translateY(-20px) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.petal {
    animation: petal-fall 6s linear infinite;
}
```

### Component notes

```
src/components/
├── floral/
│   ├── FloralBackground.jsx     ← Nền kem + petal rain
│   ├── BouquetCard.jsx          ← Project card dạng bó hoa
│   ├── HangingTag.jsx           ← Skill tag treo trên dây
│   └── VineDivider.jsx          ← SVG divider dạng nhánh
├── sections/
│   ├── ShopHeroSection.jsx
│   ├── FloristAboutSection.jsx
│   ├── BouquetProjectsSection.jsx
│   └── BookingContactSection.jsx
└── ui/
    ├── FloralButton.jsx
    ├── TagBadge.jsx
    └── WatercolorFrame.jsx
```

### Tự tạo Assets 2D bằng SVG

> Không dùng asset 2D tải ngoài. Tạo SVG riêng trong `src/assets/flower-market/`, theo hướng hand-drawn nhẹ, màu dusty rose/sage và hình hoa đủ đơn giản để animate.

| File SVG tự tạo              | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                            |
| ---------------------------- | ----------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| `floral-bouquet.svg`         | Bó hoa chính gồm 3–5 bông, lá sage, ruy băng nhỏ      | Hero, about, divider   | Dùng path/ellipse với gradient rất nhẹ, tránh chi tiết dày |
| `botanical-line-art.svg`     | Illustration line art cành lá và bình hoa             | Section illustration   | Stroke 1.5px, round cap, fill gần như không có            |
| `petals-and-leaves.svg`      | Cánh hoa rời, lá nhỏ, bud hoa                         | Petal animation, decor | Mỗi petal là symbol riêng để random position bằng CSS/JS  |
| `floral-pattern.svg`         | Pattern hoa nhỏ lặp lại cho nền card                  | Card background        | Dùng `<pattern>` SVG, opacity 0.08–0.14                   |
| `handdrawn-flower-icons.svg` | Rose, daisy, leaf, tag, ribbon dạng icon              | Skill tags, decoration | Icon 24x24 hoặc 32x32, stroke không quá đều để handmade   |
| `vine-divider.svg`           | Divider cành leo ngang, vài lá và chấm hoa            | VineDivider component  | Dùng stroke-dasharray để line draw khi scroll             |

**Gợi ý cấu trúc:**

```
src/assets/flower-market/
├── floral-bouquet.svg
├── botanical-line-art.svg
├── petals-and-leaves.svg
├── floral-pattern.svg
├── handdrawn-flower-icons.svg
└── vine-divider.svg
```

---

## 16. `cafe-bakery` — Cafe & Bakery Portfolio

Theme như một quán cafe/bakery aesthetic. Navigation như menu, projects như món trong menu, about me như "chef story", skills như recipe ingredients. Texture giấy, handwritten font nhẹ.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                              |
| ----------- | -------------------------------------------------- |
| Cảm xúc     | Thân thiện, đáng yêu, chuyên nghiệp, ấm áp         |
| Hình khối   | Bo góc vừa, card như thực đơn, texture giấy kraft  |
| Không gian  | Nền kem/nâu sữa, khoảng trắng thoáng như menu cafe |
| Chuyển động | Steam rise, crumble fall, hover lift nhẹ           |
| Điểm nhấn   | Menu typography, handwritten accent, recipe layout |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FAF3E8", // Kem vanilla
        colorBgContainer: "#FFFDF7",
        colorPrimary: "#8B5E3C", // Nâu sữa
        colorTextBase: "#2C1810",
        colorTextSecondary: "#7A5C46",
        colorSuccess: "#7A9E7E", // Matcha green
        colorWarning: "#D4A056", // Caramel
        colorError: "#C47A7A", // Hồng mocha
        colorBorder: "#E8D5BA",
        borderRadius: 12,
        fontFamily: "'Playfair Display', 'Lato', serif",
    },
};

// CSS Variables
// --milk-brown: #8B5E3C;      /* Nâu sữa */
// --vanilla: #FAF3E8;         /* Kem vanilla */
// --mocha-pink: #C47A7A;      /* Hồng mocha */
// --caramel: #D4A056;         /* Caramel */
// --matcha: #7A9E7E;          /* Matcha green */
```

### Typography

- **Heading / Menu titles:** `Playfair Display` (elegant serif, menu feel)
- **Body / Ingredients:** `Lato` (clean, readable)
- **Accent handwritten:** `Caveat` (handwritten cho details nhỏ)

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&family=Caveat:wght@400;600&display=swap");
```

### Layout ideas

- **Navigation:** Thanh nav style menu cafe — các mục như "Today's Special", "About Chef", "Our Menu", "Reserve a Table".
- **Hero:** Chalkboard-style hoặc kraft paper hero, tên to dạng menu headline.
- **Projects (Menu):** Mỗi project như một món trong menu — tên, mô tả ngắn, "ingredients" = tech stack, "price" = link/demo.
- **About (Chef Story):** Card story với ảnh, text serif ấm áp, handwritten quote.
- **Skills (Recipe):** Layout recipe — ingredients list theo nhóm, với icon tương ứng.
- **Contact:** "Reserve a Table" — form đặt chỗ, button CTA kiểu cafe.

### CSS Paper Texture snippet

```css
.paper-texture {
    background-color: #faf3e8;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23FAF3E8'/%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%23E8D5BA' opacity='0.4'/%3E%3C/svg%3E");
}

@keyframes steam-rise {
    0% {
        transform: translateY(0) scaleX(1);
        opacity: 0.6;
    }
    50% {
        transform: translateY(-15px) scaleX(1.1);
        opacity: 0.3;
    }
    100% {
        transform: translateY(-30px) scaleX(0.8);
        opacity: 0;
    }
}

.steam {
    animation: steam-rise 2s ease-out infinite;
}
```

### Animation rules

| Sự kiện          | Effect                              | Thư viện             |
| ---------------- | ----------------------------------- | -------------------- |
| Section entrance | Fade + translateY(16px → 0)         | React Motion         |
| Menu item hover  | Underline grow + caramel color      | CSS transition 200ms |
| Card hover       | Lift + shadow nâu ấm                | CSS transition 250ms |
| Hero decoration  | Steam rise animation                | CSS `@keyframes`     |
| Skill item       | Checkbox tick như recipe ingredient | CSS transition       |

### Component notes

```
src/components/
├── cafe/
│   ├── CafeBackground.jsx       ← Paper texture nền
│   ├── ChalkboardHero.jsx       ← Hero kiểu bảng đen/kraft
│   ├── MenuNav.jsx              ← Navigation style menu
│   └── SteamDecor.jsx           ← Steam animation decoration
├── sections/
│   ├── CafeHeroSection.jsx
│   ├── ChefStorySection.jsx
│   ├── MenuProjectsSection.jsx
│   ├── RecipeSkillsSection.jsx
│   └── ReserveContactSection.jsx
└── ui/
    ├── MenuCard.jsx             ← Project card dạng món ăn
    ├── IngredientBadge.jsx      ← Tech stack dạng nguyên liệu
    ├── HandwrittenAccent.jsx    ← Caveat font decoration
    └── CafeButton.jsx
```

### Tự tạo Assets 2D bằng SVG

> Không dùng asset 2D tải ngoài. Tạo SVG riêng trong `src/assets/cafe-bakery/`, ưu tiên texture procedural, nét handwritten và icon đồ uống/bánh đồng bộ.

| File SVG tự tạo             | Nội dung cần vẽ                                      | Dùng cho                   | Gợi ý kỹ thuật                                              |
| --------------------------- | ---------------------------------------------------- | -------------------------- | ----------------------------------------------------------- |
| `kraft-paper-texture.svg`   | Texture giấy kraft/vanilla bằng noise nhẹ            | Background paper texture   | Dùng `feTurbulence` + overlay opacity thấp, xuất data-uri   |
| `chalkboard-texture.svg`    | Nền bảng phấn với grain và vệt lau nhẹ               | Hero chalkboard effect     | Dùng filter noise, vài path trắng opacity 0.06–0.12         |
| `coffee-bakery-icons.svg`   | Cup, croissant, whisk, bread, recipe note             | Nav icons, skill badges    | Icon outline 24x24, stroke round cap, dùng `currentColor`   |
| `handwritten-flourish.svg`  | Swirl gạch chân, mũi tên tay, sparkle phấn            | Typography accent          | Path stroke không đều, có thể animate stroke-dashoffset     |
| `pastry-illustration.svg`   | Croissant/cupcake/coffee cup dạng flat illustration   | Hero, menu card            | Fill caramel/matcha/cream, shadow rất nhẹ                   |
| `recipe-card-frame.svg`     | Khung recipe card vintage, đường kẻ và góc giấy       | Skill / project card frame | Vẽ bằng rect/line, có notch nhỏ, dùng CSS để đổi màu border |

**Gợi ý cấu trúc:**

```
src/assets/cafe-bakery/
├── kraft-paper-texture.svg
├── chalkboard-texture.svg
├── coffee-bakery-icons.svg
├── handwritten-flourish.svg
├── pastry-illustration.svg
└── recipe-card-frame.svg
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
├── Muốn portfolio nổi bật visual   → floating-island
├── Trẻ trung, tích cực, năng động  → tropical-summer
├── Cute-modern, pastel, đáng nhớ   → candy-pop
├── Graphic design / poster mạnh    → art-festival
├── Nhẹ nhàng, tự nhiên, clean      → botanical-garden
├── Vui, thử nghiệm, block/puzzle   → toy-box
├── High-end, trendy, "cool girl"   → fashion-editorial
├── Tinh tế, K-style, UI clean      → k-beauty
├── Girly, holographic, Pinterest   → dreamy-y2k
├── Dịu dàng, floral, artisan       → flower-market
└── Thân thiện, cafe, ấm áp         → cafe-bakery
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

_Cập nhật lần cuối: 2026-05-11 — Thêm 5 phong cách: fashion-editorial, k-beauty, dreamy-y2k, flower-market, cafe-bakery._
