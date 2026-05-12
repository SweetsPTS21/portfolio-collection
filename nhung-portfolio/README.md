# Nhung Portfolio

React/Vite portfolio độc lập cho Nguyễn Thị Hồng Nhung.

## UI Style

Áp dụng style `dreamy-y2k` từ `ui-styles-catalog.md`:

- Holographic pastel background.
- Glassmorphism cards với blur, border trắng trong suốt và hover shimmer.
- Floating sticker layer bằng SVG tự tạo.
- Sparkle cursor trail bằng canvas.
- Typography `Pacifico` cho display và `Quicksand` cho body.
- Màu chủ đạo khai báo trong `src/theme.js`.

## Architecture

```txt
src/
├── main.jsx
├── App.jsx
├── theme.js
├── index.css
├── data/
│   └── portfolioData.js
├── assets/
│   └── dreamy-y2k/
├── components/
│   ├── y2k/
│   ├── sections/
│   └── ui/
```

Nội dung hiển thị được lấy từ `docs/portfolio.md` và khai báo tập trung trong `src/data/portfolioData.js`.

## Commands

```bash
npm install
npm run dev
npm run build
```
