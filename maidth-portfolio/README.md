# Maidth Portfolio — Dreamy Flower Train

Tài liệu này quy định theme, routing, kiến trúc và nguyên tắc triển khai riêng cho `maidth-portfolio`. Nội dung portfolio lấy từ `docs/portfolio.md`; không thêm thông tin ngoài tài liệu nguồn.

---

## 1. Theme bắt buộc

| Thuộc tính    | Quy định                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------- |
| Theme ID      | `dreamy-flower-train`                                                                           |
| Nguồn theme   | `catalog-5.md`                                                                                  |
| Ý tưởng chính | Chuyến tàu hoa chạy qua sky garden tím pastel, đi qua từng trạm nội dung của hành trình học tập |
| Mood          | Mơ mộng, nữ tính, lung linh, chuyển động mạnh, có cảm giác storytelling                         |
| Design style  | Glass mờ, layer trong suốt, viền sáng, blur nền, ánh tím phản chiếu                             |
| Điểm nhấn     | Background lớn, flower train, cloud station, rainbow/lilac rail, petal smoke, sparkle trail     |

Theme phải giữ tinh thần `dreamy-flower-train`: portfolio là một hành trình qua các trạm. Background không được chỉ là trang trí góc; background là visual layer chính xuyên suốt toàn app.

---

## 2. Techstack bắt buộc

| Công nghệ     | Quy định dùng                                                            |
| ------------- | ------------------------------------------------------------------------ |
| React         | React 18                                                                 |
| Vite          | Dùng bản latest qua `create-vite@latest`                                 |
| Framer Motion | Route transition, page reveal, card hover, train/petal/station animation |
| Lucide icons  | Dùng package `lucide-react` cho icon line, nav, badge, action            |
| Lenis         | Smooth scroll và scroll feel mềm như tàu lướt qua các trạm               |

Không thay stack chính bằng framework khác. Nếu cần icon, ưu tiên Lucide. Nếu cần motion trong React, ưu tiên Framer Motion. Nếu cần smooth scroll, dùng Lenis và cleanup khi unmount.

---

## 3. Routes bắt buộc

App chỉ có 3 route chính:

| Route         | Page                    | Nội dung từ `docs/portfolio.md` | Concept giao diện                                                            |
| ------------- | ----------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| `/about`      | `CloudStationAboutPage` | Trang Giới thiệu                | Trạm mây đầu tiên, profile như vé tàu/kính cửa sổ toa tàu                    |
| `/projects`   | `TrainCarProjectsPage`  | Trang Dự án                     | Mỗi chương là một toa tàu hoặc station stop, có ticket stamp và icon hành lý |
| `/conclution` | `ArrivalConclutionPage` | Trang Tổng kết                  | Trạm cuối lúc hoàng hôn tím, arrival board và petal sparkle trail            |

Giữ đúng tên route `conclution` theo quy chuẩn Catalog 5. Không thêm route khác nếu không có yêu cầu mới.

---

## 4. Palette màu: tím mộng mơ

Palette gốc `dreamy-flower-train` được chuyển trọng tâm sang tím mộng mơ. Màu vẫn cần sáng, pastel, đọc rõ trên glass blur.

```js
export const theme = {
  token: {
    colorBgBase: '#F7F1FF',
    colorBgContainer: 'rgba(255, 255, 255, 0.58)',
    colorPrimary: '#B88CFF',
    colorTextBase: '#2E2348',
    colorTextSecondary: '#7B6A9C',
    colorSuccess: '#9FE7D0',
    colorWarning: '#FFE48A',
    colorInfo: '#A7C7FF',
    colorBorder: 'rgba(184, 140, 255, 0.34)',
    borderRadius: 20,
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};
```

CSS variables nên dùng:

```css
:root {
  --dream-violet: #b88cff;
  --lilac-mist: #f7f1ff;
  --amethyst-deep: #2e2348;
  --soft-orchid: #e8d6ff;
  --cloud-lavender: #d9c7ff;
  --petal-rose: #ff9ecb;
  --rail-gold: #ffe48a;
  --sky-blue: #a7c7ff;
  --mint-glow: #9fe7d0;
  --glass-white: rgba(255, 255, 255, 0.58);
  --glass-border: rgba(184, 140, 255, 0.34);
}
```

Không để UI thành một mảng tím đơn điệu. Tím là chủ đạo, nhưng phải có hồng cánh hoa, vàng ray tàu, xanh trời và mint để tạo chiều sâu.

---

## 5. Design: glass mờ

Toàn bộ card, nav, panel và badge chính dùng glassmorphism:

- Nền `rgba(255,255,255,0.50-0.68)`.
- `backdrop-filter: blur(18px) saturate(1.35)`.
- Viền tím nhạt bán trong suốt.
- Shadow mềm có màu tím/hồng, không dùng shadow đen nặng.
- Có highlight mảnh ở cạnh trên hoặc góc card để tạo cảm giác kính phản quang.
- Card không được phẳng đơn điệu; mỗi card cần stamp, rail border, flower window, luggage icon hoặc sparkle frame.

Glass layer phải nằm trên background lớn để thấy hiệu ứng mờ thật. Nếu nền phía sau quá trống, phải thêm cloud/rail/petal layer phía sau panel.

---

## 6. Background và asset direction

Background là điểm nhấn lớn nhất của app. Mỗi route vẫn dùng chung một thế giới `dreamy-flower-train`, nhưng đổi trạng thái theo trạm.

| Asset                         | Vai trò                    | Ghi chú                                             |
| ----------------------------- | -------------------------- | --------------------------------------------------- |
| `sky-garden-panorama.svg`     | Background chính           | Trời tím pastel, mây, vườn hoa trên mây, glow lớn   |
| `flower-train-set.svg`        | Hero/background foreground | Đầu tàu, toa hoa, bánh xe, cửa sổ, mascot conductor |
| `rainbow-lilac-rail-path.svg` | Scene connector            | Đường ray tím/cầu vồng nối các route, có sparkle    |
| `cloud-station-set.svg`       | About và conclution        | Trạm mây, bảng tên, ghế, đồng hồ, ticket booth      |
| `train-ticket-frames.svg`     | Card frame                 | Vé tàu, stamp, lỗ bấm vé, ribbon edge               |
| `petal-smoke-particles.svg`   | Particle layer             | Khói hoa, cánh hoa, heart nhỏ, sparkle trail        |
| `luggage-flower-icons.svg`    | Badge/nav icon             | Vali, túi hoa, camera, vé, map, nơ                  |
| `arrival-board-labels.svg`    | Conclusion                 | Bảng arrival, flip panels, label trạm cuối          |

Asset cần lớn, rõ, có nhiều layer để animate. Không dùng background gradient trống thay cho scene.

---

## 7. Animation direction

Animation phải mạnh, nhiều, lung linh nhưng vẫn kiểm soát được hiệu năng.

| Sự kiện          | Hiệu ứng                                                           | Công cụ             |
| ---------------- | ------------------------------------------------------------------ | ------------------- |
| App load         | Sky fade, rail draw, train glide vào foreground, sparkle burst nhẹ | Framer Motion + CSS |
| Route transition | Station sign slide/drop, glass panel blur-in, petal sweep          | Framer Motion       |
| Train idle       | Body bob 2-4px, wheel rotate, smoke petal drift                    | CSS keyframes       |
| Background       | Cloud parallax nhiều lớp, rail sparkle, glow shimmer               | Lenis + CSS         |
| Card hover       | Ticket flip nhỏ, stamp pop, flower window shine, rail border glow  | Framer Motion       |
| Projects reveal  | Toa tàu xuất hiện theo stagger, luggage badge bounce               | Framer Motion       |
| Conclution       | Arrival board flip, petal smoke thành sparkle trail                | Framer Motion + CSS |

Quy tắc hiệu năng:

- Giới hạn particle visible khoảng 20-30 phần tử.
- Lazy load scene SVG lớn.
- Dùng `prefers-reduced-motion` để tắt train loop, smoke drift, sparkle và parallax.
- Không animate layout gây giật; ưu tiên `transform` và `opacity`.

---

## 8. Kiến trúc thư mục đề xuất

Khi triển khai code, dùng cấu trúc sau:

```txt
src/
├── main.jsx
├── app/
│   ├── App.jsx                         ← Dreamy flower train shell
│   ├── routes.js                       ← about, projects, conclution
│   ├── theme.js                        ← token tím mộng mơ + glass tokens
│   ├── motionConfig.js                 ← variants, spring, easing, reduced motion
│   └── lenisSetup.js                   ← Lenis setup + cleanup
├── pages/
│   ├── CloudStationAboutPage.jsx       ← About station + ticket profile
│   ├── TrainCarProjectsPage.jsx        ← Projects dạng train cars/stations
│   └── ArrivalConclutionPage.jsx       ← Conclution final station
├── features/
│   ├── flower-train-scene/
│   │   ├── SkyGardenBackground.jsx
│   │   ├── FlowerTrainLayer.jsx
│   │   ├── RainbowLilacRailDraw.jsx
│   │   └── PetalSmokeLayer.jsx
│   ├── station-projects/
│   │   ├── StationProjectGrid.jsx
│   │   ├── TrainCarProjectCard.jsx
│   │   └── TicketStampHover.jsx
│   └── journey-content/
│       ├── PortfolioContent.js         ← data mapping từ docs/portfolio.md
│       ├── AboutJourneyPanel.jsx
│       └── ConclusionArrivalPanel.jsx
├── components/
│   ├── layout/
│   │   ├── TrainNav.jsx
│   │   ├── StationTransition.jsx
│   │   └── GlassPageShell.jsx
│   └── ui/
│       ├── TicketButton.jsx
│       ├── StationCard.jsx
│       ├── RailTag.jsx
│       ├── FlowerWindowBadge.jsx
│       └── SparkleDivider.jsx
└── assets/
    └── dreamy-flower-train/
```

---

## 9. Component rules

- `GlassPageShell` chịu trách nhiệm render background scene, nav, page transition và route outlet.
- `SkyGardenBackground`, `FlowerTrainLayer`, `RainbowLilacRailDraw`, `PetalSmokeLayer` là layer nền chính, không đặt trong card.
- `StationCard` dùng cho các block nội dung lớn, có glass blur và decoration riêng.
- `TrainCarProjectCard` dùng cho từng chương bài tập, phải có stamp, rail border, flower window và icon hành lý.
- `RailTag` dùng cho nhãn nhỏ như chương, mục tiêu, công cụ, nguyên tắc.
- `FlowerWindowBadge` dùng cho badge trang trí có icon Lucide hoặc asset SVG nhỏ.
- Text chính luôn là HTML/CSS để đảm bảo responsive và accessibility.

---

## 10. Nội dung và ánh xạ dữ liệu

Nguồn nội dung duy nhất: `docs/portfolio.md`.

Ánh xạ bắt buộc:

- `I. Trang Giới thiệu (About Me)` → `/about`.
- `II. Trang Dự án (Projects)` → `/projects`.
- `III. Trang Tổng kết (Conclusion)` → `/conclution`.

Không tự bịa skill, dự án, thành tích hoặc mô tả cá nhân. Có thể đổi cách trình bày thành ticket, station, train car, arrival board, nhưng text phải trung thành với tài liệu.

---

## 11. Responsive và accessibility

- Desktop: background full scene, train foreground lớn, nhiều parallax layer.
- Tablet: giữ train và station chính, giảm số cloud/petal layer.
- Mobile: card 1 cột, train thành visual header/anchor, giảm particle, không che text.
- Contrast text tối thiểu 4.5:1 trên glass panel.
- Decorative SVG dùng `aria-hidden="true"` nếu không mang ý nghĩa nội dung.
- Nav phải dùng button/link rõ ràng, icon Lucide chỉ hỗ trợ nhận diện, không thay text chính.

---

## 12. Checklist khi build

- [ ] README ghi rõ theme ID `dreamy-flower-train`.
- [ ] App có đúng 3 route: `/about`, `/projects`, `/conclution`.
- [ ] Palette tím mộng mơ được khai báo trong theme/tokens, không hardcode rải rác.
- [ ] Glass mờ xuất hiện ở nav, panel, cards, badges.
- [ ] Background train/sky/rail là visual layer chính toàn app.
- [ ] Asset folder dùng `src/assets/dreamy-flower-train/`.
- [ ] Project cards có ticket stamp, rail border, flower window, luggage icon.
- [ ] Framer Motion xử lý route transition, reveal, hover.
- [ ] Lenis có setup và cleanup đúng vòng đời React.
- [ ] Lucide icons dùng thống nhất cho nav/action/badge.
- [ ] Reduced motion fallback hoạt động.
- [ ] Mobile không bị text đè bởi train, smoke, sparkle hoặc glass panel.
