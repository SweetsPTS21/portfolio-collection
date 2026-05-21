# Theme Design — panh-portfolio

## Tổng quan phong cách

**Concept chính:** "Trạm phát sóng ngọt ngào" — Candy Pop / Pastel Gradient Editorial
Lấy cảm hứng từ phong cách Y2K-modern kết hợp graphic editorial. Thiết kế sử dụng gradient pastel mềm mại (hồng → cam → xanh dương) nhưng với các khối hình học góc vuông sắc nét, tạo sự tương phản thú vị. Tổng thể mang lại cảm giác tươi trẻ, dễ thương nhưng dứt khoát, chuyên nghiệp — đúng với cá tính "cute nhưng nghiêm túc" của Phương Anh.

**Khác biệt so với các portfolio khác trong repo:**
- anna-portfolio: Tông trầm, cổ điển "Legal Archive" (navy + beige), radius nhỏ → panh gradient pastel rực rỡ, góc vuông hoàn toàn
- chau-portfolio: Soft blue đơn sắc, radius 14 → panh dùng multi-gradient hồng-cam-xanh, radius 0
- chi-portfolio: Đỏ đậm, góc cạnh (border-radius: 0) → panh cũng góc vuông nhưng tông pastel ngọt ngào hoàn toàn khác biệt
- vi-portfolio: Dusty rose vintage, radius 14 → panh tươi sáng, pop art, sharp edges
- trang-portfolio: Vàng-xanh dương cartoon, radius 18 bo tròn → panh thiên về hồng-pastel gradient, cạnh sắc

---

## Bảng màu (Color Palette)

| Token | Hex | Mô tả |
|-------|-----|--------|
| `colorBgBase` | `#FFF0F5` | Nền chính — lavender blush, hồng nhạt rất nhẹ |
| `colorBgContainer` | `#FFFFFF` | Nền card/container — trắng tinh |
| `colorPrimary` | `#FF6B9D` | Màu chủ đạo — hot pink pastel |
| `colorPrimaryHover` | `#FF85B1` | Primary hover state |
| `colorSecondary` | `#7EC8E3` | Màu phụ — sky blue pastel |
| `colorAccent` | `#FFB347` | Điểm nhấn — peach/cam pastel |
| `colorTextBase` | `#2D2040` | Text chính — tím đậm ấm |
| `colorTextSecondary` | `#7A6B8A` | Text phụ — tím xám nhạt |
| `colorBorder` | `#F5D5E0` | Viền — hồng nhạt |
| `colorBgElevated` | `rgba(255, 255, 255, 0.75)` | Nền elevated với glassmorphism |
| `colorFillGradientStart` | `#FFDEE9` | Gradient start — hồng nhạt |
| `colorFillGradientMid` | `#FFD4A8` | Gradient mid — cam đào |
| `colorFillGradientEnd` | `#B5DEFF` | Gradient end — xanh dương nhạt |
| `colorSuccess` | `#7DCEA0` | Trạng thái thành công — mint |
| `colorWarning` | `#FFD93D` | Cảnh báo — vàng tươi |

### Gradient chính sử dụng xuyên suốt:
```css
/* Hero gradient */
background: linear-gradient(135deg, #FFDEE9 0%, #FFD4A8 50%, #B5DEFF 100%);

/* Card hover gradient */
background: linear-gradient(160deg, #FFF0F5 0%, #F0F8FF 100%);

/* Accent gradient (buttons, badges) */
background: linear-gradient(90deg, #FF6B9D 0%, #FF85B1 50%, #7EC8E3 100%);
```

---

## Typography

| Token | Giá trị | Ghi chú |
|-------|---------|---------|
| `fontFamily` | `'Quicksand', 'Nunito', sans-serif` | Font chính — friendly, dễ đọc |
| `fontFamilyHeading` | `'Fredoka', 'Quicksand', sans-serif` | Font tiêu đề — playful, nổi bật |
| `fontSize` | `15px` | Cỡ chữ cơ bản |
| `fontSizeLG` | `17px` | Cỡ lớn |
| `fontSizeSM` | `13px` | Cỡ nhỏ |
| `fontSizeHeading1` | `48px` | H1 — to, bold, gradient text |
| `fontSizeHeading2` | `32px` | H2 |
| `fontSizeHeading3` | `22px` | H3 |
| `fontSizeHeading4` | `17px` | H4 |
| `lineHeight` | `1.75` | Dòng thoáng, dễ đọc |
| `fontWeightStrong` | `700` | Bold weight |

### Heading style đặc biệt:
- H1 sử dụng **gradient text** (background-clip: text) với gradient hồng → xanh
- H2 có font-weight 700, màu `colorPrimary`
- Các heading có thể kèm emoji hoặc icon nhỏ làm điểm nhấn

---

## Border & Radius

| Token | Giá trị | Ghi chú |
|-------|---------|---------|
| `borderRadius` | `0px` | Góc vuông sắc nét — sharp, bold |
| `borderRadiusLG` | `0px` | Card lớn, section — không bo |
| `borderRadiusSM` | `0px` | Tag, badge — vuông vắn |
| `borderRadiusXL` | `0px` | Hero section, modal — cạnh thẳng |

**Triết lý:** Tất cả các hình dạng đều sử dụng góc vuông (sharp edges), tạo cảm giác graphic design mạnh mẽ, editorial, đối lập thú vị với tông màu pastel mềm mại. Sự kết hợp giữa màu ngọt ngào + hình dạng sắc cạnh tạo nên cá tính riêng — "cute nhưng dứt khoát".

---

## Spacing & Layout

| Token | Giá trị |
|-------|---------|
| `padding` | `20px` |
| `paddingLG` | `36px` |
| `paddingSM` | `12px` |
| `margin` | `16px` |
| `marginLG` | `40px` |
| `marginSM` | `8px` |
| `contentMaxWidth` | `1200px` |
| `sectionGap` | `80px` |

### Layout grid:
- Desktop: 2-column grid cho Projects (card-based)
- Tablet: 1-column stacked
- Mobile: Full-width, padding giảm

---

## Hiệu ứng & Motion (Framer Motion + Lenis)

### Lenis Smooth Scroll:
```js
// Smooth scroll config
{
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
}
```

### Framer Motion Animations:

| Hiệu ứng | Áp dụng cho | Chi tiết |
|-----------|-------------|----------|
| `fadeInUp` | Card, section khi scroll vào | y: 40 → 0, opacity: 0 → 1, duration: 0.6s |
| `scaleIn` | Avatar (square), icon | scale: 0.8 → 1, opacity: 0 → 1 |
| `slideInLeft` | Text block hero | x: -60 → 0, duration: 0.7s |
| `slideInRight` | Image block hero | x: 60 → 0, duration: 0.7s |
| `staggerChildren` | Danh sách project cards | staggerChildren: 0.15s |
| `float` | Decorative elements (square blocks, dots) | y oscillate ±10px, infinite, duration: 3s |
| `gradientShift` | Background gradient | backgroundPosition animate, infinite |
| `hoverLift` | Card hover | y: -8, scale: 1.02, shadow tăng |
| `pulseGlow` | CTA button | boxShadow pulse nhẹ, infinite |

### Motion tokens:
```js
motionDurationSlow: "0.6s"
motionDurationMid: "0.35s"
motionDurationFast: "0.2s"
motionEaseOut: "cubic-bezier(0.16, 1, 0.3, 1)"  // Smooth out
motionEaseInOut: "cubic-bezier(0.65, 0, 0.35, 1)"
motionSpring: { type: "spring", stiffness: 200, damping: 20 }
```

---

## Glassmorphism & Effects

### Glass card style:
```css
background: rgba(255, 255, 255, 0.65);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.4);
box-shadow: 0 8px 32px rgba(255, 107, 157, 0.08);
border-radius: 0;  /* Góc vuông sắc nét */
```

### Decorative elements:
- **Floating blocks**: Các hình vuông/chữ nhật gradient nhỏ trôi nổi ở background (opacity 0.3-0.5)
- **Dot grid**: Lưới chấm vuông nhỏ trang trí (như trong ảnh theme — dãy dots ở góc), các dot cũng là hình vuông nhỏ
- **Geometric shapes**: Hình vuông/chữ nhật góc vuông xoay nhẹ làm decoration — không có hình tròn
- **Line accents**: Đường thẳng ngang/dọc mỏng làm điểm nhấn phân chia
- **Frame borders**: Khung viền vuông bao quanh ảnh/content block, tạo cảm giác editorial magazine

### Shadow system:
```css
/* Card default */
box-shadow: 0 4px 20px rgba(255, 107, 157, 0.06);

/* Card hover */
box-shadow: 0 12px 40px rgba(255, 107, 157, 0.12);

/* Elevated (navbar, modal) */
box-shadow: 0 8px 32px rgba(45, 32, 64, 0.08);
```

---

## Component Styling (Ant Design Theme Token)

### Button:
```js
Button: {
  borderRadius: 0,            // Sharp square edges
  controlHeight: 44,
  controlHeightLG: 52,
  fontWeight: 600,
  primaryShadow: "0 4px 16px rgba(255, 107, 157, 0.3)",
  // Primary button dùng gradient background, góc vuông
}
```

### Card:
```js
Card: {
  borderRadiusLG: 0,
  paddingLG: 28,
  boxShadowTertiary: "0 4px 20px rgba(255, 107, 157, 0.06)",
  // Hover: lift + shadow tăng, giữ góc vuông
}
```

### Tag:
```js
Tag: {
  borderRadiusSM: 0,         // Square tag
  fontSize: 12,
  // Background: gradient nhẹ hoặc pastel solid
}
```

### Menu / Navigation:
```js
Menu: {
  itemBorderRadius: 0,
  itemHoverBg: "rgba(255, 107, 157, 0.08)",
  itemSelectedBg: "rgba(255, 107, 157, 0.12)",
  itemSelectedColor: "#FF6B9D",
}
```

### Tabs:
```js
Tabs: {
  itemSelectedColor: "#FF6B9D",
  inkBarColor: "#FF6B9D",
  itemHoverColor: "#FF85B1",
}
```

---

## Cấu trúc trang & UI Sections

### 1. Navbar (Fixed top, glassmorphism):
- Logo/Tên ở trái (gradient text)
- Menu items ở phải: About | Projects | Conclusion
- Background glass khi scroll
- Smooth transition khi scroll qua hero

### 2. Hero Section:
- Layout 2 cột: Text trái + Avatar/Image phải
- Background: gradient pastel lớn (hồng → cam → xanh)
- Floating decorative elements (square blocks, dots)
- Text "Xin chào, mình là" nhỏ + Tên lớn gradient
- Tagline + CTA button (square, gradient)

### 3. About Section:
- Card glassmorphism chứa thông tin cá nhân
- Avatar hình vuông với border gradient
- Các info items có icon (Lucide) + text
- Subtle background pattern

### 4. Projects Section:
- Grid 2 cột (desktop) các project cards
- Mỗi card: số thứ tự lớn (01, 02...) + tiêu đề + mô tả ngắn
- Card hover: lift animation + gradient border reveal
- Stagger animation khi scroll vào viewport

### 5. Conclusion / Footer:
- Background gradient nhẹ
- Quote/lời nhắn nhủ
- Social links (nếu có)
- "Thank you" section với animation

---

## Icon System (Lucide React)

Sử dụng Lucide icons với style:
- Size mặc định: 20px
- Stroke width: 1.75 (mảnh, thanh lịch)
- Color: inherit từ text hoặc `colorPrimary`
- Icon container: hình vuông, không bo góc (square background box nếu cần highlight)
- Một số icon đặc trưng: `Music`, `BookOpen`, `Sparkles`, `Heart`, `Radio`, `Headphones`

---

## Responsive Breakpoints

| Breakpoint | Width | Ghi chú |
|------------|-------|---------|
| Mobile | < 640px | 1 cột, padding giảm, font nhỏ hơn |
| Tablet | 640px – 1024px | 1-2 cột linh hoạt |
| Desktop | > 1024px | Full layout 2 cột |

---

## Tech Stack

| Công nghệ | Vai trò |
|-----------|---------|
| **React 19** | UI framework chính |
| **Vite** | Build tool, dev server |
| **React Router** | Client-side routing (3 trang: About, Projects, Conclusion) |
| **Ant Design (antd)** | Component library + Theme Token system |
| **Framer Motion** | Animation library (scroll, hover, page transitions) |
| **Lenis** | Smooth scroll |
| **Lucide React** | Icon system |

---

## SVG Assets

Danh sách các SVG decorative assets cần tạo, phù hợp với chủ đề "Trạm phát sóng ngọt ngào" — âm nhạc, pastel gradient, hình học góc vuông:

### Decorative / Background Elements

| Tên file | Mô tả | Kích thước | Ghi chú |
|----------|--------|------------|---------|
| `square-dots-grid.svg` | Lưới chấm vuông nhỏ (4x4 hoặc 5x5) | 80x80 | Dùng làm pattern decoration ở góc sections, opacity 0.3–0.5, màu `colorPrimary` |
| `gradient-block-pink.svg` | Hình vuông gradient hồng (FFDEE9 → FF6B9D) | 60x60 | Floating decoration, xoay 15° |
| `gradient-block-blue.svg` | Hình vuông gradient xanh (B5DEFF → 7EC8E3) | 48x48 | Floating decoration, xoay -10° |
| `gradient-block-peach.svg` | Hình chữ nhật gradient cam đào (FFD4A8 → FFB347) | 40x70 | Floating decoration, xoay 5° |
| `line-accent-h.svg` | Đường ngang mỏng gradient (hồng → xanh) | 120x4 | Dùng phân chia section, accent dưới heading |
| `line-accent-v.svg` | Đường dọc mỏng gradient (hồng → cam) | 4x80 | Accent bên cạnh quote hoặc sidebar |
| `frame-border.svg` | Khung vuông viền mỏng (stroke only, gradient border) | 300x300 | Bao quanh ảnh/content block, editorial style |
| `corner-accent-tl.svg` | Góc trang trí top-left (2 đường thẳng vuông góc) | 40x40 | Đặt ở góc card hoặc section |
| `corner-accent-br.svg` | Góc trang trí bottom-right (2 đường thẳng vuông góc) | 40x40 | Đối xứng với corner-accent-tl |

### Music / Theme-specific Icons

| Tên file | Mô tả | Kích thước | Ghi chú |
|----------|--------|------------|---------|
| `music-note-square.svg` | Nốt nhạc đơn trong khung vuông | 48x48 | Dùng làm decoration hoặc section icon, gradient fill |
| `headphone-icon.svg` | Tai nghe đơn giản, nét thẳng, góc vuông | 56x56 | Hero section decoration hoặc About icon |
| `radio-wave.svg` | Sóng radio — 3 đường thẳng song song (không cong) dạng zigzag | 80x40 | Biểu tượng "trạm phát sóng", dùng ở hero/footer |
| `equalizer-bars.svg` | 5 thanh dọc cao thấp khác nhau (equalizer) | 60x48 | Decoration cho Projects section, gradient fill mỗi bar |
| `playlist-icon.svg` | Icon playlist — 3 đường ngang + nốt nhạc nhỏ | 44x44 | Section icon cho Projects (playlist concept) |
| `vinyl-square.svg` | Đĩa nhạc cách điệu dạng vuông (square vinyl) | 64x64 | Decoration lớn, xoay animation nhẹ |
| `speaker-icon.svg` | Loa vuông đơn giản, geometric | 48x48 | Footer hoặc CTA decoration |

### UI / Functional SVGs

| Tên file | Mô tả | Kích thước | Ghi chú |
|----------|--------|------------|---------|
| `arrow-right-square.svg` | Mũi tên phải trong khung vuông | 32x32 | CTA button icon, link navigation |
| `scroll-indicator.svg` | Mũi tên xuống + đường thẳng (scroll hint) | 24x48 | Hero section bottom, bounce animation |
| `nav-menu-icon.svg` | Hamburger menu 3 đường thẳng | 28x28 | Mobile navigation toggle |
| `quote-mark.svg` | Dấu ngoặc kép lớn, góc vuông, gradient fill | 40x36 | Conclusion section — trước quote/lời nhắn nhủ |
| `chapter-number-bg.svg` | Khung vuông lớn làm nền cho số chapter (01, 02...) | 80x80 | Project card — số thứ tự nổi bật trên nền gradient |

### Hero / Branding

| Tên file | Mô tả | Kích thước | Ghi chú |
|----------|--------|------------|---------|
| `logo-panh.svg` | Logo text "PA" hoặc "P.A" dạng monogram, geometric, góc vuông | 48x48 | Navbar logo |
| `hero-bg-shapes.svg` | Composition nhiều hình vuông/chữ nhật gradient chồng lên nhau | 600x400 | Background decoration cho hero section |
| `avatar-frame.svg` | Khung vuông viền gradient (hồng → xanh) bao quanh avatar | 280x280 | Wrap avatar image, border 3px gradient |
| `thank-you-decoration.svg` | Composition: equalizer bars + nốt nhạc + stars (tất cả góc vuông) | 200x120 | Conclusion/Thank you section |

### Quy tắc chung cho SVG:

1. **Không bo góc**: Tất cả `rx`, `ry` = 0. Không dùng `border-radius` hay `rx` trên `<rect>`
2. **Màu sắc**: Sử dụng `<linearGradient>` với palette đã định (hồng, cam, xanh). Có thể dùng solid color từ bảng màu
3. **Stroke**: Nét mảnh 1.5–2px, `stroke-linecap: square`, `stroke-linejoin: miter` (không round)
4. **Opacity**: Decorative elements nên có opacity 0.3–0.6 khi dùng làm background
5. **Viewbox**: Luôn set viewBox chính xác, không fixed width/height để responsive
6. **Tối ưu**: Minify SVG, loại bỏ metadata không cần thiết
7. **Accessibility**: Thêm `<title>` cho SVG có ý nghĩa, `aria-hidden="true"` cho decorative

---

## Tóm tắt DNA thiết kế

> **Pastel gradient + Glassmorphism + Sharp edges + Playful motion = Candy Pop Editorial**

- Tông màu: Hồng pastel → Cam đào → Xanh dương nhạt (gradient xuyên suốt)
- Hình dạng: Góc vuông sắc nét (0 border-radius), square buttons, geometric blocks
- Hiệu ứng: Glass blur, floating geometric blocks, smooth scroll, stagger animations
- Typography: Soft sans-serif (Quicksand/Fredoka), gradient headings
- Cảm xúc: Tươi vui, dễ thương nhưng dứt khoát, hiện đại, năng động — sự tương phản giữa màu ngọt ngào và hình dạng sắc cạnh tạo nên cá tính editorial độc đáo
