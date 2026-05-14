# Phuc Portfolio

Portfolio của Dương Thị Thủy Phúc, triển khai theo phong cách `kawaii-stationery` từ `catalog-2.md`.

## UI style

- **Theme:** `kawaii-stationery`
- **Vibe:** notebook, sticker, washi tape, sticky note, doodle underline
- **Màu sắc:** hồng bubblegum, xanh gel pen, mint, vàng sunny, lavender
- **Typography:** `M PLUS Rounded 1c` cho display, `Nunito` cho body

## Motion / asset stack

- **Framer Motion:** section entrance, card hover, modal/page motion.
- **Rive:** pipeline sẵn cho mascot/CTA state trong `src/assets/kawaii-stationery/rive/`; bản hiện tại dùng SVG fallback để build nhẹ.
- **SVGator:** pipeline cho doodle underline, sticker pop và divider động trong `src/assets/kawaii-stationery/svgator/`.
- **Lenis:** smooth scroll root layout, tự giảm khi người dùng bật reduced motion.
- **Realtime Colors:** dùng để kiểm tra contrast palette trước khi đưa vào `src/theme.js`.
- **Blush:** pipeline minh họa/avatar cute trong `src/assets/kawaii-stationery/blush/`; bản hiện tại ưu tiên avatar thật từ `docs/avatar.png`.

## Nội dung

Toàn bộ nội dung hiển thị được trích từ `docs/portfolio.md`. Sáu bài tập mở file PDF tương ứng trong `docs/bt1.pdf` đến `docs/bt6.pdf`.

## Scripts

```bash
npm install
npm test
npm run build
npm run dev
```
