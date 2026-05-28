# 🍓 Natta Portfolio — Refactor Plan

> Kết quả kiểm tra giao diện bằng Playwright, đối chiếu với README spec.  
> Ngày kiểm tra: 28/05/2026

---

## 📊 Tổng quan kết quả kiểm tra

### ✅ Những điểm ĐÃ KHỚP với README

| # | Yêu cầu README | Trạng thái | Chi tiết |
|---|---|---|---|
| 1 | 3 routes (/, /projects, /conclusion) | ✅ Khớp | Cả 3 routes hoạt động đúng |
| 2 | React 18 | ✅ Khớp | React 18.3.1 |
| 3 | Framer Motion | ✅ Khớp | Page transitions, hover, scroll reveal đều hoạt động |
| 4 | Lenis smooth scroll | ✅ Khớp | Khởi tạo trên desktop, skip mobile |
| 5 | Lucide Icons | ✅ Khớp | Icons hiển thị đúng trong nav, cards, sections |
| 6 | Bảng màu hồng pastel | ✅ Khớp | 11/11 CSS variables đúng spec |
| 7 | Body BG #FFF8FA | ✅ Khớp | rgb(255, 248, 250) = #FFF8FA |
| 8 | Font heading: Comfortaa | ✅ Khớp | H1 dùng Comfortaa, weight 700 |
| 9 | Font body: Quicksand | ✅ Khớp | Body dùng Quicksand |
| 10 | Glassmorphism cards | ✅ Khớp | backdrop-filter: blur(12px), bg rgba(255,255,255,0.75), radius 22px |
| 11 | Border glass | ✅ Khớp | 1px solid rgba(255, 160, 171, 0.25) |
| 12 | Navbar fixed glassmorphic | ✅ Khớp | position: fixed, blur(12px), width 700px |
| 13 | Background 8 layers | ✅ Khớp | greenhouse-bg có 8 children (frame, sunbeam, vines, dew, bee, leaves, petals + style) |
| 14 | Bee animation (Framer Motion path) | ✅ Khớp | Bee có transform motion, wing buzz animation |
| 15 | Sunbeam shimmer | ✅ Khớp | animationName = sunbeamShimmer |
| 16 | Leaf sway | ✅ Khớp | animationName = leafSway |
| 17 | Wing buzz | ✅ Khớp | animationName = wingBuzz |
| 18 | Dew drops slide | ✅ Khớp | 8 drops trên desktop, animation dewSlide |
| 19 | Floating petals | ✅ Khớp | 10 petals trên desktop |
| 20 | Strawberry vines sway | ✅ Khớp | 3 vine groups với leafSway animation |
| 21 | StrawberryBasketCard design | ✅ Khớp | Ribbon + glass panel + weave pattern |
| 22 | Card hover float up | ✅ Khớp | translateY(-8px) + shadow change on hover |
| 23 | 6 project cards | ✅ Khớp | 6 cards với đầy đủ ribbon, glass, weave, link |
| 24 | LeafBadge cho chapter | ✅ Khớp | 6 leaf badges trên projects page |
| 25 | Conclusion 3 sections | ✅ Khớp | Changes, Lessons, Future — 9 list items total |
| 26 | Page transition blur/scale | ✅ Khớp | Captured mid-transition screenshot |
| 27 | Responsive mobile (1 column) | ✅ Khớp | Grid chuyển 1 column ở 375px |
| 28 | Mobile nav: ẩn text, chỉ icon | ✅ Khớp | navName hidden, navLinkText hidden |
| 29 | aria-hidden trên background | ✅ Khớp | greenhouse-bg có aria-hidden="true" |
| 30 | HTML lang="vi" | ✅ Khớp | Đúng ngôn ngữ |
| 31 | Nội dung từ portfolio.md | ✅ Khớp | 4 skills, 3 principles, 4 hobbies, 13 tool chips, 6 projects |
| 32 | Footer với berry decoration | ✅ Khớp | Footer visible với 🍓 animation |

---

### ⚠️ Những điểm CHƯA KHỚP / CẦN CẢI THIỆN

| # | Yêu cầu README | Trạng thái | Vấn đề | Mức độ |
|---|---|---|---|---|
| 1 | Bee follows cursor | ❌ Thiếu | README spec: "Ong béo bay theo hướng cursor với delay mượt". Hiện tại bee chỉ fly path cố định | 🔴 Cao |
| 2 | Strawberry ripen on scroll | ❌ Thiếu | README spec: "Dâu tây chuyển từ xanh → hồng → đỏ khi scroll qua section" | 🟡 Trung bình |
| 3 | Dew drop on card hover | ❌ Thiếu | README spec: "Khi hover card, giọt sương nhỏ rơi từ cạnh trên card" | 🟡 Trung bình |
| 4 | Seed sparkle particles on hover | ❌ Thiếu | README spec: "Hạt dâu lấp lánh xà cừ (seed sparkle particles)" khi hover card | 🟡 Trung bình |
| 5 | Parallax depth scroll | ❌ Thiếu | README spec: "Background layers di chuyển với tốc độ khác nhau khi scroll" | 🟡 Trung bình |
| 6 | Glass Window Pane Card (About) | ⚠️ Một phần | README spec có layout 4 ô kính (2x2 grid), hiện tại dùng GlassCard generic | 🟡 Trung bình |
| 7 | Jam Jar Card shape (Conclusion) | ⚠️ Một phần | README spec có hình dáng hũ mứt (cap + body + label), hiện tại dùng layout thường | 🟡 Trung bình |
| 8 | Ribbon bow animation | ❌ Thiếu | README spec: "Tách 2 cánh nơ để animate", hiện chỉ là emoji tĩnh | 🟢 Thấp |
| 9 | Strawberry glow on card hover | ⚠️ Một phần | CSS animation có nhưng chỉ trigger khi hover ribbon berry, không phải toàn card | 🟢 Thấp |
| 10 | Button berry squish | ⚠️ Một phần | Có whileTap scale(0.92) nhưng thiếu spring back 1.05 → 1 | 🟢 Thấp |
| 11 | SVG assets riêng biệt | ❌ Thiếu | README list 14 SVG files, hiện tại SVG inline trong components | 🟢 Thấp |
| 12 | Glass fog clear on page load | ❌ Thiếu | README spec: "Glass fog clear + bee entrance flight" khi load lần đầu | 🟡 Trung bình |
| 13 | Honeycomb grid cho skills | ❌ Thiếu | README spec: "Cây dâu tây sum suê quả, mỗi cụm dâu chín là một nhóm kỹ năng" | 🟡 Trung bình |
| 14 | Basket open animation on click | ❌ Thiếu | README spec: "Card expand + content slide up" khi click project | 🟡 Trung bình |

---

## 🎯 Đánh giá UI/UX

### Điểm mạnh

1. **Glassmorphism nhất quán** — Tất cả cards, navbar đều có backdrop-filter blur(12px) + bg rgba trắng 75% + border hồng mờ. Tạo cảm giác "nhà kính" rất tốt.

2. **Background phong phú** — 8 layers animation chạy đồng thời tạo depth và sự sống động. Bee, dew drops, petals, sunbeams, vines, leaves — đủ để tạo cảm giác "khu vườn dâu tây".

3. **Color palette hài hòa** — Hồng pastel nhạt (#FFA0AB) làm accent, xanh lá (#84E2A8) làm supporting, nền trắng hồng (#FFF8FA) rất dịu mắt. Không bị chói hay quá sặc sỡ.

4. **Typography đúng mood** — Comfortaa tròn lịm cho heading gợi cảm giác cute, Quicksand mềm mại cho body dễ đọc.

5. **Card design có identity** — StrawberryBasketCard với ribbon + glass + weave pattern tạo nhận diện riêng, không generic.

6. **Responsive tốt** — Mobile ẩn text nav chỉ giữ icon, grid chuyển 1 column, particles giảm số lượng.

7. **Accessibility cơ bản** — aria-hidden trên background, lang="vi", links có text.

### Điểm yếu

1. **Thiếu interactivity nâng cao** — Bee không follow cursor, không có parallax scroll, không có particle effects khi hover. Trang cảm giác "nhìn" được nhưng chưa "tương tác" được.

2. **Card design chưa đủ "độc đáo"** — README spec mô tả 3 loại card rất khác nhau (Basket, Window Pane, Jam Jar) nhưng thực tế About dùng GlassCard generic, Conclusion cũng layout thường.

3. **Hero section hơi đơn giản** — Chỉ có text + emoji + button. README spec mô tả "Khung cảnh nhà kính thủy tinh mờ ngập nắng, ong béo lượn lờ vẽ đường bay lấp lánh xung quanh tên".

4. **Thiếu micro-interactions** — Không có dew drop khi hover, không có seed sparkle, không có strawberry ripen effect. Những chi tiết nhỏ này tạo nên sự "wow".

5. **SVG assets chưa tách riêng** — Tất cả SVG inline trong components, khó maintain và reuse. README spec list 14 file SVG riêng biệt.

6. **Scroll experience chưa đặc biệt** — Lenis smooth scroll có nhưng không có parallax depth hay scroll-triggered animations ngoài whileInView cơ bản.

---

## 📋 Refactor Plan — Ưu tiên theo impact

### Phase 1: High Impact — Interactive Background (Ưu tiên cao)

#### Task 1.1: Bee follows cursor
- **File:** `src/components/background/BeeFloating.jsx`
- **Thay đổi:** Thêm `useMotionValue` + `useSpring` từ Framer Motion để bee follow cursor với delay
- **Logic:** `onMouseMove` → update target position → spring animation với stiffness thấp (50) và damping cao (20)
- **Fallback mobile:** Giữ path animation cố định

#### Task 1.2: Parallax depth scroll
- **File:** `src/components/background/GreenhouseBackground.jsx`
- **Thay đổi:** Thêm `useScroll` + `useTransform` từ Framer Motion cho mỗi layer
- **Logic:** Mỗi layer có speed khác nhau (frame: 0.1, vines: 0.3, bee: 0.5, petals: 0.7)
- **Fallback mobile:** Disable parallax

#### Task 1.3: Glass fog clear on first load
- **File:** `src/components/background/GreenhouseBackground.jsx`
- **Thay đổi:** Thêm overlay div với initial blur(8px) + opacity 0.6, animate to blur(0) + opacity 0 trong 2s
- **Trigger:** Chỉ lần đầu load (useRef flag)

### Phase 2: Card Design Upgrade (Ưu tiên cao)

#### Task 2.1: Glass Window Pane Card cho About
- **File mới:** `src/components/ui/WindowPaneCard.jsx`
- **Design:** Grid 2x2 ô kính, mỗi ô có border giả khung cửa, giọt sương CSS trên mỗi ô
- **Áp dụng:** Thay thế 4 GlassCard trong GreenhouseHeroPage bằng 1 WindowPaneCard lớn

#### Task 2.2: Jam Jar Card cho Conclusion
- **File mới:** `src/components/ui/JamJarCard.jsx`
- **Design:** SVG shape clip-path hình hũ mứt, nắp cork ở trên, nhãn dán ở dưới
- **Áp dụng:** Wrap summary card trong JamFactoryPage

#### Task 2.3: Seed sparkle particles on card hover
- **File mới:** `src/components/ui/SeedSparkle.jsx`
- **Logic:** Khi hover StrawberryBasketCard, spawn 5-8 particles nhỏ vàng (#FFE17A) bay ra từ center, fade out
- **Kỹ thuật:** Framer Motion AnimatePresence + random positions

#### Task 2.4: Dew drop on card hover
- **Thêm vào:** `src/components/ui/StrawberryBasketCard.jsx`
- **Logic:** Khi hover, 2-3 giọt sương nhỏ slide down từ top edge của card
- **Kỹ thuật:** CSS animation trigger bằng :hover pseudo hoặc Framer Motion

### Phase 3: Scroll Animations (Ưu tiên trung bình)

#### Task 3.1: Strawberry ripen on scroll
- **File:** `src/components/background/StrawberryVines.jsx`
- **Thay đổi:** Dùng `useScroll` + `useTransform` để thay đổi fill color của strawberry ellipses
- **Logic:** scrollProgress 0→0.3: fill xanh (#84E2A8), 0.3→0.7: fill hồng (#FFA0AB), 0.7→1: fill đỏ (#FF8A9A)

#### Task 3.2: Basket open animation on project click
- **File:** `src/components/ui/StrawberryBasketCard.jsx`
- **Thay đổi:** Thêm expand state, khi click card mở rộng (height auto) + content slide up
- **Kỹ thuật:** Framer Motion `layout` + `AnimatePresence`

#### Task 3.3: Hero section enhancement
- **File:** `src/pages/GreenhouseHeroPage.jsx`
- **Thay đổi:** Thêm SVG greenhouse frame nhỏ bao quanh hero text, bee vẽ đường bay quanh tên
- **Kỹ thuật:** SVG path animation + Framer Motion

### Phase 4: Polish & Details (Ưu tiên thấp)

#### Task 4.1: Tách SVG assets ra file riêng
- **Tạo folder:** `src/assets/strawberry-glasshouse/`
- **Files:** greenhouse-frame.svg, strawberry-branch.svg, chubby-bee.svg, dew-drops.svg, honeycomb-pattern.svg, jam-jar.svg, strawberry-icons.svg, leaf-cluster.svg, sunbeam-caustics.svg, flower-white.svg, berry-basket.svg, glass-pane-texture.svg, ribbon-bow.svg, vine-border.svg
- **Import:** Chuyển từ inline SVG sang import file

#### Task 4.2: Button berry squish spring
- **File:** `src/components/ui/BerryButton.jsx`
- **Thay đổi:** whileTap transition thêm spring overshoot: scale 0.92 → 1.05 → 1

#### Task 4.3: Ribbon bow animation
- **File:** `src/components/ui/StrawberryBasketCard.jsx`
- **Thay đổi:** Thay emoji 🍓 bằng SVG ribbon bow, animate rotate nhẹ khi hover

#### Task 4.4: Honeycomb grid cho skills section
- **File mới:** `src/components/ui/HoneycombGrid.jsx`
- **Design:** Hexagonal grid layout cho skills, mỗi hex cell là 1 skill group
- **Áp dụng:** Thay thế skills list trong GreenhouseHeroPage

---

## 🔢 Thứ tự thực hiện đề xuất

```
Phase 1 (3-4h) → Phase 2 (3-4h) → Phase 3 (2-3h) → Phase 4 (2-3h)
```

**Ưu tiên tuyệt đối:** Phase 1 + Task 2.3 + Task 2.4 — vì đây là những điểm tạo "wow factor" lớn nhất với effort vừa phải.

---

## 📈 Metrics sau refactor (mục tiêu)

| Metric | Hiện tại | Mục tiêu |
|---|---|---|
| README compliance | ~70% | 95%+ |
| Interactive elements | 3 (hover card, click nav, click button) | 8+ (cursor follow, parallax, sparkle, dew, ripen, expand, fog, squish) |
| Unique card types | 1 (GlassCard) | 3 (WindowPane, BasketCard, JamJar) |
| SVG assets files | 0 (inline) | 14 files |
| Scroll-triggered effects | 1 (whileInView) | 4+ (parallax, ripen, fog, stagger) |
| Micro-interactions | 2 (hover float, tap scale) | 6+ (sparkle, dew, squish, glow, wing, expand) |

---

## 🧹 Cleanup sau refactor

- [ ] Xóa `test-ui.mjs` và `test-visual-detail.mjs`
- [ ] Xóa folder `screenshots/`
- [ ] Xóa Playwright dev dependency (nếu không cần nữa)
- [ ] Chạy `npm run build` verify final
- [ ] Test trên Chrome, Firefox, Safari
- [ ] Test trên thiết bị thật (iOS Safari, Android Chrome)
