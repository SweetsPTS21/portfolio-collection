# Đỗ Thị Huyền Trang Portfolio

Digital portfolio cho Đỗ Thị Huyền Trang (Luật chung - Đại học Luật - Đại học Quốc gia Hà Nội), xây dựng từ `docs/portfolio.md`.

## UI Style

- **Style ID:** `ocean-wave-diary` theo contract trong `catalog-4.md`.
- **Vibe:** Nhật ký mở ra trong chiều hoàng hôn trên biển: xanh dương nhạt, hồng pastel, vàng nắng, nhiều lớp cảnh vật và chuyển động dịu.
- **Hình khối chủ đạo:** Diary page card bo 20px, wave edge, shell badge, sun stamp, paper grain và sand texture.
- **Không gian:** Full-bleed sunset beach scene với sky gradient xanh nhạt sang hồng, mặt trời vàng thấp, sóng xanh nhạt, mây hồng, bờ cát và vệt nắng trên mặt nước.
- **Điểm nhấn:** `sunset-sky-panorama.svg`, `wave-layers-sunset.svg`, `sun-reflection-ribbon.svg`, `pink-cloud-clusters.svg`, `shoreline-sand-scene.svg`.

## Cấu trúc điều hướng - 3 tab

Portfolio này là **3 tab**, không phải one-page scroll. Navigation dùng route của `react-router-dom`, kiến trúc tham khảo `chau-portfolio` nhưng đổi shell, theme, asset và component naming sang Ocean Diary.

| Tab | Tên hiển thị | Route | Nội dung |
| --- | --- | --- | --- |
| 1 | Giới thiệu | `/` | Hồ sơ, định hướng, mục tiêu, điểm mạnh, công cụ |
| 2 | Dự án | `/projects` | 6 bài/chương cùng PDF minh chứng |
| 3 | Tổng kết | `/conclusion` | Trải nghiệm, điểm tâm đắc, thách thức, lời nhắn |

## Stack

- React 18 + Vite
- Ant Design `ConfigProvider` + `src/theme.js`
- `react-router-dom` cho 3 route
- Framer Motion cho page transition
- Lucide React cho icon
- CSS keyframes cho wave sway, sun glow, cloud drift, sparkle twinkle

## Run

```bash
cd htrang-portfolio
npm install
npm run dev
npm run build
```
