# Refactor Plan — Giao diện cá tính, đậm chất editorial

## Vấn đề hiện tại
- Layout quá "safe": grid đều, khoảng trống nhiều, thiếu nhịp điệu thị giác
- Typography nhỏ, đồng đều — không có hierarchy mạnh
- Decorative elements ít, opacity thấp → mờ nhạt
- Cards đều nhau → đơn điệu, thiếu bất ngờ
- Chưa tận dụng hết concept "editorial magazine" với khối vuông

---

## Nguyên tắc refactor
1. **Khối vuông lớn, chồng lấp** — các block màu/gradient đặt chồng lên nhau, offset, tạo depth
2. **Typo cực lớn** — heading 72-120px, số chapter 160px+, text decorative oversized
3. **Lấp đầy không gian** — giảm padding, dùng full-bleed sections, background blocks phủ kín
4. **Nhiều assets** — mỗi section có ít nhất 3-4 decorative elements (blocks, lines, dots grid)
5. **Bất đối xứng** — layout lệch, card kích thước khác nhau, tạo nhịp điệu

---

## Chi tiết thay đổi

### 1. Hero (About page)
- Tên "PHƯƠNG ANH" → font-size 96-120px, uppercase, gradient, chiếm gần full width
- Avatar lớn hơn (360px), có offset block màu đặt phía sau (lệch 20px)
- Thêm text dọc "PORTFOLIO 2025" bên cạnh (rotated 90°)
- Background: nhiều khối vuông gradient chồng nhau (opacity 0.4-0.7, không quá mờ)
- Bỏ min-height 90vh → dùng padding lớn nhưng content lấp đầy
- Thêm equalizer bars SVG animated ở góc

### 2. About Info Section
- Bỏ grid 3 cột đều → dùng layout bento/masonry: 1 card lớn + 2 card nhỏ
- Card lớn (chuyên ngành) chiếm 2/3 width, có background gradient
- Thêm dot-grid pattern phía sau cards
- Heading "VỀ MÌNH" → 64px, uppercase, đặt chồng lên edge của section trước

### 3. Projects Page
- Header: "DỰ ÁN" text 100px+ làm background watermark (opacity 0.05)
- Bỏ grid đều → layout zigzag: card lẻ lệch trái, card chẵn lệch phải
- Số chapter (01, 02...) → 140px, đặt bên ngoài card, chồng lên edge
- Mỗi card có 1 accent block màu (40x40 - 60x60) đặt ở góc, chồng ra ngoài
- Card featured (03 - AI) lớn hơn, full-width, layout ngang
- Thêm line-accent nối giữa các cards (timeline feel)

### 4. Conclusion Page
- Bỏ layout 1 cột centered → dùng 2 cột bất đối xứng
- Cột trái: "TỔNG KẾT" text 80px dọc (rotated)
- Cột phải: content blocks
- Quote section: full-bleed gradient, text 24px, dấu ngoặc kép 120px
- Thêm "THANK YOU" text cực lớn (100px) ở cuối, opacity 0.1 làm decoration

### 5. Navbar
- Thêm accent line gradient ở bottom (luôn hiện, không chỉ khi scroll)
- Logo "P.A" trong khung vuông gradient thay vì chỉ text

### 6. Footer
- Full-bleed gradient (không giới hạn max-width)
- Thêm equalizer bars animated
- Text "STAY TUNED" lớn làm decoration background

### 7. SVG Assets mới cần tạo
- `equalizer-animated.jsx` — component React với framer-motion (5 bars animate)
- `dot-grid.jsx` — component lưới 6x6 square dots
- `offset-block.jsx` — reusable colored block component (size, color, rotation props)
- `corner-brackets.jsx` — góc trang trí [ ] cho cards
- `vertical-text.jsx` — text xoay 90° reusable

### 8. CSS/Global changes
- Giảm `.section` padding: 80px → 48px vertical, tăng horizontal cho full-bleed
- Thêm utility class `.full-bleed` (width 100vw, margin-left calc)
- Thêm `.oversized-text` (font-size clamp(64px, 10vw, 120px))
- Background base: thêm subtle noise texture overlay

---

## Thứ tự thực hiện
1. Tạo reusable decorative components (5 files)
2. Cập nhật index.css (utilities, giảm spacing)
3. Refactor Hero + About (About.jsx)
4. Refactor Projects (Projects.jsx)
5. Refactor Conclusion (Conclusion.jsx)
6. Cập nhật Navbar + Footer
7. Build test

**Ước lượng: 7 bước**
