# Nguyễn Minh Châu Portfolio

Digital portfolio cho Nguyễn Minh Châu (Luật - Đại học Luật, ĐHQGHN), xây dựng từ `docs/portfolio.md`.

## UI Style

- **Style ID:** `sunset-cruise-log` (xem chi tiết trong `catalog-4.md`)
- **Vibe:** Nhật ký du thuyền lúc hoàng hôn - ấm áp, dreamy, nữ tính, có chất storytelling nhưng vẫn gọn và hiện đại.
- **Hình khối chủ đạo:** Card bo 14px, rope border, lantern badge, compass rose accent.
- **Không gian:** Sunset gradient hồng-cam-tím ở hero; lớp biển xanh mát ở phần nền dưới.
- **Điểm nhấn:** Ship silhouette, lantern glow, compass, rope knot divider, cruise log entry.

### Bảng màu

```js
colorBgBase: "#FFF5F0"       // warm sunset base
colorBgContainer: "#FFFFFF"
colorPrimary: "#F2789F"      // sunset pink
colorTextBase: "#2D2040"     // deep plum
colorTextSecondary: "#6B5A7A"
colorSuccess: "#5EC4B8"      // ocean teal
colorWarning: "#FFD08A"      // lantern gold
colorError: "#FF6B6B"
colorBorder: "#FCCDE0"
borderRadius: 14
fontFamily: "'Playfair Display', 'Nunito', serif"
```

### Typography

- **Heading:** `Playfair Display` cho cảm giác editorial/captain's log.
- **Body:** `Nunito` để giữ phần nội dung học thuật mềm, dễ đọc.
- Import qua Google Fonts trong `src/index.css`.

## Cấu trúc điều hướng - 3 tab

Đây là portfolio **3 tab**, không phải one-page scroll. Người dùng chuyển giữa các tab bằng cruise navigation bar; mỗi tab là một route riêng, có page transition bằng Framer Motion.

| Tab | Tên hiển thị | Route | Nội dung từ `docs/portfolio.md` |
| --- | --- | --- | --- |
| 1 | Giới thiệu | `/` | TRANG 1: giới thiệu, châm ngôn, thông tin cá nhân, định hướng, mục tiêu, điểm mạnh, công cụ |
| 2 | Dự án | `/projects` | TRANG 2: tiến trình học tập và 6 bài/chương từ Chương 1 đến Chương 6 |
| 3 | Tổng kết | `/conclusion` | Conclution: quan điểm học thuật độc lập, giá trị thu lại, khó khăn lớn nhất |

**Triển khai:** dùng `react-router-dom` theo route, không dùng one-page anchor scroll. Nav chỉ đổi route; nội dung từng tab nằm trong page component riêng.

### Mapping tab -> component

```txt
src/
├── app/
│   ├── App.jsx                    <- Route shell
│   ├── routes.jsx                 <- /, /projects, /conclusion
│   └── theme.js                   <- Ant Design token sunset-cruise-log
├── components/
│   ├── layout/
│   │   ├── CruiseShell.jsx        <- Nền sunset, wave layer, layout chung
│   │   └── CruiseNav.jsx          <- 3 tab nav dạng compass/ship deck
│   ├── pages/
│   │   ├── AboutPage.jsx          <- Tab 1
│   │   ├── ProjectsPage.jsx       <- Tab 2
│   │   └── ConclusionPage.jsx     <- Tab 3
│   ├── sunset-scene/
│   │   ├── SunsetGradientSky.jsx
│   │   ├── ShipSilhouette.jsx
│   │   ├── WaveLayer.jsx
│   │   ├── CloudDrift.jsx
│   │   └── LanternGlow.jsx
│   ├── sections/
│   │   ├── CaptainProfile.jsx
│   │   ├── CompassDirection.jsx
│   │   ├── ToolHarbor.jsx
│   │   ├── CruiseLogTimeline.jsx
│   │   └── FinalSignal.jsx
│   └── ui/
│       ├── RopeCard.jsx
│       ├── LanternBadge.jsx
│       ├── CompassBadge.jsx
│       ├── WaveDivider.jsx
│       └── PageTransition.jsx
└── data/
    └── portfolioData.js           <- Data trích xuất từ docs/portfolio.md
```

## Animation

| Sự kiện | Effect | Cách triển khai |
| --- | --- | --- |
| Chuyển tab | Fade + translateY nhẹ như đổi trang nhật ký | Framer Motion `AnimatePresence` |
| Page load | Sunset gradient reveal + ship fade in | Framer Motion |
| Wave background | Gentle sway loop 8-12s | CSS keyframes |
| Lantern | Glow pulse opacity 0.6-1.0 | CSS keyframes |
| Compass hover | Rotate 360deg smooth | CSS transition |
| Log entry reveal | Slide-left + fade, stagger 0.15s | Framer Motion |
| Cloud layer | Drift chậm ngang màn hình | CSS keyframes |

## Nội dung - single source of truth

Mọi text, list, dự án, kỹ năng, công cụ và kết luận phải đến từ `docs/portfolio.md`. Không thêm chương, không thêm công cụ, không thêm kỹ năng ngoài tài liệu nguồn. Các file `docs/bt1.pdf` đến `docs/bt6.pdf` được dùng làm minh chứng tương ứng cho 6 bài/chương.

## Stack

- React 18 + Vite
- Ant Design 6 (`ConfigProvider` + `theme.js`)
- Tailwind CSS 3 (`preflight: false`)
- `react-router-dom` cho 3 route
- Framer Motion cho page transition và entrance animation
- Lucide React cho icon: Compass, ShipWheel, Anchor, Map, Lightbulb, FileText

## Run

```bash
cd chau-portfolio
npm install
npm run dev
npm run build
```
