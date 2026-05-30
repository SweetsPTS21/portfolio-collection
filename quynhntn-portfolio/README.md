# 🌸 `pastel-glass-dreamscape` — Pastel Glass Dreamscape Portfolio

Portfolio như một không gian mơ mộng làm từ kính trong mờ hồng pastel: các tấm glass panel lấp lánh ánh xà cừ trôi nổi giữa nền gradient hồng tím mềm mại, bong bóng pha lê bay lơ lửng, hoa anh đào rơi xuyên qua lớp kính mờ sương, ánh sáng khúc xạ tạo hiệu ứng rainbow shimmer trên mọi bề mặt. Phong cách glassmorphism đậm nét kết hợp pastel pink dreamy, nhiều animation mạnh và background là điểm nhấn chính.

---

## Thông tin chủ nhân

- **Họ và tên:** Nguyễn Thị Thu
- **Mã sinh viên:** 24061410
- **Ngành học:** Luật chung
- **Trường:** Đại học Luật, ĐHQGHN
- **Phong cách cá nhân:** Nhẹ nhàng, dễ tính, điềm tĩnh, linh hoạt
- **Sở thích:** Nấu ăn, cầu lông, chơi game, xem phim, đọc sách

---

## Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Cảm xúc      | Mơ mộng, nhẹ nhàng, trong trẻo, tinh tế, lãng mạn pastel                                                          |
| Hình khối    | Glass card bo 24px, frosted panel, bubble badge, aurora ribbon, crystal shard accent                                |
| Không gian   | Nền gradient hồng-tím-xanh pastel, glass panel layers, bokeh particles, light refraction overlay                   |
| Chuyển động  | Glass shimmer sweep, bubble float rise, aurora wave, crystal refraction, petal drift through glass, parallax depth |
| Điểm nhấn    | Frosted glass cards xà cừ, **large decorative assets** (hồng pha lê, sakura branch, bướm thủy tinh, thiên nga, kim cương), aurora gradient, bokeh orbs |

---

## Concept chính: Pastel Glassmorphism Dreamscape

Theme xây dựng trên ý tưởng **không gian kính mờ mơ mộng** — mọi UI element đều là frosted glass với backdrop-blur, border ánh xà cừ, và nền phía sau là một bức tranh gradient hồng pastel sống động với nhiều particle layers.

**Background là điểm nhấn chính — kết hợp hiệu ứng VÀ assets lớn trang trí:**

```
Layer 1 (xa nhất): Aurora gradient hồng-tím-xanh chuyển động chậm
Layer 2: LARGE DECORATIVE ASSETS — hoa hồng pha lê lớn, cành sakura cong, bướm thủy tinh, mặt trăng lưỡi liềm
Layer 3: Bokeh light orbs — đốm sáng tròn mờ nhiều kích thước, drift chậm
Layer 4: Sakura petals rơi xuyên qua, rotate nhẹ, fade khi chạm đáy
Layer 5: Crystal prism refraction — vệt sáng cầu vồng di chuyển chéo
Layer 6: Glass UI content (frosted cards, text, navigation)
```

**Large Decorative Assets — Điểm nhấn thị giác chính của background:**

Mỗi route có bộ assets lớn riêng, đặt ở background layer 2, kích thước 200–500px, opacity 0.45–0.70, có animation riêng:

| Route       | Asset lớn                                    | Vị trí                  | Animation                                      |
| ----------- | -------------------------------------------- | ----------------------- | ---------------------------------------------- |
| `/`         | Bông hồng pha lê khổng lồ (400px)           | Góc trên phải           | Rotate rất chậm 60s + petal shimmer pulse      |
| `/`         | Cành sakura cong dài (500px)                 | Góc trên trái, rủ xuống | Sway nhẹ 8s loop + blossom glow                |
| `/`         | Mặt trăng lưỡi liềm hồng (300px)           | Top center, phía sau title | Glow pulse 6s + halo expand                 |
| `/`         | Bướm thủy tinh đôi cánh mở (250px)          | Giữa phải               | Wing flutter 4s + drift chéo chậm 30s         |
| `/projects` | Viên kim cương pha lê lớn (350px)            | Center background       | Rotate Y chậm 40s + facet shimmer             |
| `/projects` | Cụm tinh thể thạch anh hồng (400px)         | Góc dưới trái           | Glow pulse stagger + crystal grow subtle       |
| `/projects` | Vòng hoa hồng glass wreath (450px)           | Frame quanh grid center | Petal shimmer wave 10s loop                    |
| `/summary`  | Thiên nga pha lê (350px)                     | Góc trên trái           | Neck sway 6s + wing shimmer                    |
| `/summary`  | Cầu vồng pha lê arc lớn (500px)             | Top spanning            | Color shift 15s loop + sparkle trail           |
| `/summary`  | Đám mây hồng bồng bềnh (300px × 2)          | Hai bên, mid-height     | Drift horizontal chậm 25s + scale breathe      |

**Glassmorphism rules:**

```css
/* Base glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(255, 182, 217, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

/* Shimmer overlay on hover */
.glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.3) 45%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 55%
  );
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.4s;
}
.glass-card:hover::before {
  opacity: 1;
  animation: shimmer-sweep 1.2s ease-out;
}
```

---

## Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF0F5",
    colorBgContainer: "rgba(255, 255, 255, 0.18)",
    colorPrimary: "#FF8EC7",
    colorTextBase: "#3D1F33",
    colorTextSecondary: "#8A5A72",
    colorSuccess: "#8EECD4",
    colorWarning: "#FFE4A8",
    colorInfo: "#B8D4FF",
    colorBorder: "rgba(255, 142, 199, 0.25)",
    borderRadius: 24,
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --pastel-pink: #FF8EC7;           ← Primary — hồng pastel chủ đạo
// --blush-rose: #FFB6D9;            ← Hồng nhạt cho hover/glow
// --lavender-mist: #E8D5FF;         ← Tím oải hương mờ cho accent
// --baby-blue: #B8D4FF;             ← Xanh baby cho info/balance
// --mint-cream: #8EECD4;            ← Xanh mint cho success
// --peach-glow: #FFD4B8;            ← Cam đào cho warm accent
// --aurora-purple: #D4A0FF;         ← Tím aurora cho gradient
// --crystal-white: #FFFFFF;         ← Trắng tinh cho glass highlight
// --dream-bg: #FFF0F5;              ← Nền hồng phấn nhạt nhất
// --glass-bg: rgba(255, 255, 255, 0.15);      ← Glass panel background
// --glass-border: rgba(255, 255, 255, 0.3);   ← Glass border xà cừ
// --glass-shadow: rgba(255, 182, 217, 0.15);  ← Shadow hồng mềm
// --bokeh-pink: rgba(255, 142, 199, 0.2);     ← Bokeh orb hồng
// --bokeh-purple: rgba(212, 160, 255, 0.15);  ← Bokeh orb tím
// --bokeh-blue: rgba(184, 212, 255, 0.15);    ← Bokeh orb xanh
```

---

## Typography

- **Heading:** `Quicksand` bo tròn, mềm mại, gợi cảm giác dreamy và hiện đại.
- **Body:** `Nunito` dễ đọc, thân thiện, cân bằng với nhiều glass decoration.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap");
```

---

## Tech Stack

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Library        | Vai trò chính                                                          |
| -------------- | ---------------------------------------------------------------------- |
| React 18       | UI framework chính                                                     |
| Framer Motion  | Animation UI: page transition, card hover, scroll reveal, parallax     |
| Lenis          | Smooth scroll có kiểm soát, parallax depth layers                      |
| Lucide Icons   | Icon system nhẹ, đẹp, dùng cho nav/badge/decoration                   |
| CSS Keyframes  | Animation nhẹ: bokeh drift, petal fall, aurora shift, shimmer loop     |
| Vite           | Build tool nhanh cho React 18                                          |
| Tailwind CSS   | Utility-first styling, hỗ trợ glassmorphism classes nhanh              |

---

## Library usage

| Library       | Cách dùng trong theme                                                                       |
| ------------- | ------------------------------------------------------------------------------------------- |
| Framer Motion | Glass card tilt hover, aurora background shift, petal scatter, route transition glass shatter |
| Lenis         | Smooth scroll qua 3 route pages, parallax bokeh/petal layers                                |
| Lucide Icons  | Icon cho nav items, skill badges, project tags, contact CTA                                 |
| CSS Keyframes | Aurora gradient shift 20s loop, bokeh drift, petal fall, glass shimmer sweep, crystal rotate |

---

## Kiến trúc 3 Routes

| Route       | Tên page                | Nội dung chính                                    |
| ----------- | ----------------------- | ------------------------------------------------- |
| `/`         | GlassHeroAboutPage      | Hero giới thiệu + About me + Mục tiêu + Công cụ  |
| `/projects` | CrystalProjectsPage     | 6 bài tập/dự án dạng glass cards                  |
| `/summary`  | DreamConclusionPage     | Tổng kết + Trải nghiệm + Định hướng tương lai    |

---

## Layout ideas

- **Hero (Route /):** Aurora gradient background chuyển động chậm, **bông hồng pha lê khổng lồ** ở góc trên phải rotate chậm, **cành sakura cong** rủ từ góc trái, **mặt trăng lưỡi liềm hồng** phát sáng phía sau title, **bướm thủy tinh** bay chéo chậm. Bokeh orbs trôi lơ lửng, sakura petals rơi xuyên qua. Tên "Nguyễn Thị Thu" hiện trên frosted glass panel lớn ở giữa với shimmer effect. Phía dưới là about section với glass cards chứa thông tin cá nhân, mục tiêu, công cụ sử dụng. Mỗi card có icon từ Lucide.

- **Projects (Route /projects):** **Viên kim cương pha lê** xoay chậm ở center background, **cụm tinh thể thạch anh hồng** phát sáng ở góc dưới trái, **vòng hoa hồng glass wreath** bao quanh grid area. Grid 6 glass cards, mỗi card là một chương bài tập. Card có frosted glass background, border xà cừ, hover thì shimmer sweep + lift + crystal refraction burst. Mỗi card có icon Lucide phù hợp (FolderOpen, Search, Brain, Video, Palette, Shield).

- **Conclusion (Route /summary):** **Thiên nga pha lê** ở góc trên trái với cổ lắc nhẹ, **cầu vồng pha lê arc** spanning top với color shift, **đám mây hồng bồng bềnh** hai bên drift chậm. Glass panel lớn chứa tổng kết, trải nghiệm thay đổi, hành trang quý giá, thách thức, và định hướng. Thiết kế dạng frosted glass scroll card dài. Kết thúc bằng lời cảm ơn trong một glass badge đặc biệt.

---

## Animation rules

| Sự kiện              | Effect                                                        | Thư viện      |
| -------------------- | ------------------------------------------------------------- | ------------- |
| Page load            | Aurora fade-in + large assets scale-in stagger + glass card slide up | Framer Motion |
| Aurora background    | Gradient hue shift 20–30s loop, chuyển hồng→tím→xanh→hồng     | CSS keyframes |
| Crystal rose (hero)  | Rotate 360deg 60s loop + petal shimmer opacity pulse 4s       | CSS keyframes |
| Sakura branch (hero) | Sway translateX ±15px 8s ease-in-out loop + blossom glow      | CSS keyframes |
| Crescent moon (hero) | Glow box-shadow pulse 6s + halo scale 1→1.1→1 8s             | CSS keyframes |
| Glass butterfly      | Wing scaleX 0.8→1→0.8 4s + drift translate chéo 30s          | CSS keyframes |
| Diamond (projects)   | RotateY 360deg 40s + facet shimmer opacity stagger            | CSS keyframes |
| Crystal cluster      | Glow pulse stagger 3–5s mỗi crystal + subtle scaleY grow     | CSS keyframes |
| Rose wreath          | Petal shimmer wave (opacity ripple) 10s loop                  | CSS keyframes |
| Crystal swan         | Neck sway rotate ±5deg 6s + wing shimmer opacity             | CSS keyframes |
| Rainbow arc          | Hue-rotate 360deg 15s + sparkle dots along path              | CSS keyframes |
| Pink clouds          | Drift translateX ±30px 25s + scale 1→1.05→1 breathe          | CSS keyframes |
| Bokeh orbs           | Drift random slow 15–25s, scale pulse nhẹ, opacity breathe   | CSS keyframes |
| Sakura petal fall    | Fall diagonal, rotate 360deg, fade out ở bottom, 8–12s loop  | CSS keyframes |
| Crystal refraction   | Rainbow light ray di chuyển chéo chậm 25s loop               | CSS keyframes |
| Glass card entrance  | Fade + translateY(30px→0) + scale(0.95→1), stagger 0.1s      | Framer Motion |
| Glass card hover     | Shimmer sweep + lift translateY(-8px) + glow intensify        | Framer Motion |
| Glass shimmer sweep  | Linear gradient highlight chạy từ trái→phải 1.2s             | CSS animation |
| Nav item hover       | Glass pill glow + icon scale(1.1) + subtle bounce             | Framer Motion |
| Route transition     | Current page fade + blur out → new page fade + blur in        | Framer Motion |
| Section entrance     | Fade + translateY(20px) + glass border glow stagger           | Framer Motion |
| Scroll parallax      | Large assets 0.2x, bokeh 0.3x, petal 0.5x, content 1x      | Lenis + FM    |
| Button hover         | Glass glow pulse + icon rotate nhẹ                            | CSS transition|
| Contact/end section  | Crystal burst particles + glass card scale up                 | Framer Motion |

---

## Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Glass dreamscape shell + Lenis setup
│   ├── routes.jsx                      ← /, /projects, /summary
│   ├── theme.js                        ← Color tokens + glass variables
│   └── lenisSetup.js                   ← Lenis smooth scroll config
├── pages/
│   ├── GlassHeroAboutPage.jsx          ← Hero aurora + about glass cards
│   ├── CrystalProjectsPage.jsx         ← 6 project glass cards grid
│   └── DreamConclusionPage.jsx         ← Tổng kết + định hướng
├── features/
│   ├── aurora-background/
│   │   ├── AuroraGradient.jsx          ← Animated gradient background chính
│   │   ├── BokehOrbsLayer.jsx          ← Floating bokeh light particles
│   │   ├── SakuraPetalRain.jsx         ← Falling sakura petals through glass
│   │   ├── CrystalRefractionRays.jsx   ← Rainbow prism light rays
│   │   ├── LargeDecorAssets.jsx        ← Container cho các assets lớn theo route
│   │   └── ParallaxContainer.jsx       ← Parallax wrapper cho các layers
│   ├── large-assets/
│   │   ├── CrystalRoseFloat.jsx        ← Bông hồng pha lê khổng lồ (hero)
│   │   ├── SakuraBranchCurve.jsx       ← Cành sakura cong rủ xuống (hero)
│   │   ├── CrescentMoonGlow.jsx        ← Mặt trăng lưỡi liềm hồng (hero)
│   │   ├── GlassButterflyDrift.jsx     ← Bướm thủy tinh bay chéo (hero)
│   │   ├── CrystalDiamondSpin.jsx      ← Viên kim cương xoay (projects)
│   │   ├── QuartzClusterGlow.jsx       ← Cụm thạch anh hồng (projects)
│   │   ├── RoseWreathFrame.jsx         ← Vòng hoa hồng glass (projects)
│   │   ├── CrystalSwanFloat.jsx        ← Thiên nga pha lê (summary)
│   │   ├── RainbowArcShift.jsx         ← Cầu vồng pha lê (summary)
│   │   └── PinkCloudDrift.jsx          ← Đám mây hồng bồng bềnh (summary)
│   ├── glass-hero/
│   │   ├── HeroGlassPanel.jsx          ← Main hero frosted glass panel
│   │   ├── AboutGlassCards.jsx         ← Grid glass cards cho about info
│   │   ├── ToolBadgeRow.jsx            ← Row of tool badges (Lucide icons)
│   │   └── GoalGlassCard.jsx           ← Mục tiêu card đặc biệt
│   ├── crystal-projects/
│   │   ├── ProjectGlassGrid.jsx        ← Grid layout cho 6 project cards
│   │   ├── ProjectGlassCard.jsx        ← Individual frosted glass project card
│   │   ├── ShimmerHoverEffect.jsx      ← Shimmer sweep animation on hover
│   │   └── CrystalBurstParticle.jsx    ← Crystal particle burst on interaction
│   └── dream-conclusion/
│       ├── ConclusionGlassScroll.jsx   ← Long frosted glass scroll panel
│       ├── HighlightGlassBadge.jsx     ← Điểm tâm đắc badge
│       ├── ChallengeGlassCard.jsx      ← Thách thức card
│       └── ThankYouCrystalCard.jsx     ← Lời cảm ơn crystal card cuối
├── components/
│   ├── layout/
│   │   ├── GlassNav.jsx                ← Frosted glass navigation bar
│   │   └── GlassShell.jsx              ← App shell + background layers
│   └── ui/
│       ├── GlassCard.jsx               ← Reusable frosted glass card
│       ├── GlassButton.jsx             ← Glass pill button với glow
│       ├── GlassBadge.jsx              ← Glass badge cho skills/tools
│       ├── ShimmerOverlay.jsx          ← Shimmer sweep overlay component
│       └── PageTransition.jsx          ← Route transition wrapper
└── assets/pastel-glass-dreamscape/
    ├── aurora-gradient-bg.svg
    ├── bokeh-orbs-set.svg
    ├── sakura-petal-set.svg
    ├── crystal-prism-rays.svg
    ├── glass-frame-shapes.svg
    ├── bubble-particles.svg
    ├── rainbow-refraction.svg
    ├── dream-sparkle-set.svg
    ├── crystal-rose-large.svg
    ├── sakura-branch-curve.svg
    ├── crescent-moon-glow.svg
    ├── glass-butterfly-pair.svg
    ├── crystal-diamond-facet.svg
    ├── quartz-cluster-pink.svg
    ├── rose-wreath-glass.svg
    ├── crystal-swan.svg
    ├── rainbow-arc-crystal.svg
    └── pink-cloud-set.svg
```

---

## Tự tạo Assets 2D bằng SVG

### Assets nhỏ — Particles & Effects

| File SVG tự tạo            | Nội dung cần vẽ                                                          | Dùng cho                | Gợi ý kỹ thuật                                                  |
| -------------------------- | ------------------------------------------------------------------------ | ----------------------- | --------------------------------------------------------------- |
| `aurora-gradient-bg.svg`   | Gradient mesh hồng-tím-xanh mềm mại, dạng aurora borealis cong lượn     | Background layer chính  | Nhiều path với linearGradient, opacity 0.3–0.6, animate hue     |
| `bokeh-orbs-set.svg`       | Đốm sáng tròn mờ nhiều kích thước (8–60px), có radial gradient fade     | Particle layer bokeh    | Circle + radialGradient, fill pink/purple/blue, opacity 0.1–0.3 |
| `sakura-petal-set.svg`     | Cánh hoa anh đào nhiều góc xoay, nhiều shade hồng pastel                | Falling particle layer  | Path ellipse biến dạng, fill gradient pink, animate fall+rotate |
| `crystal-prism-rays.svg`   | Vệt sáng cầu vồng dài mảnh, prismatic refraction, rainbow gradient      | Background accent       | Rect rất mảnh + linearGradient rainbow, opacity thấp, rotate    |
| `glass-frame-shapes.svg`   | Khung glass card nhiều kiểu: rounded rect, oval, pill, hexagon mềm      | Card frame decoration   | Path bo tròn, stroke white opacity 0.3, no fill                 |
| `bubble-particles.svg`     | Bong bóng pha lê nhiều cỡ, có highlight spot và rainbow reflection nhẹ  | Hover/interaction burst | Circle + tiny highlight ellipse, animate scale+opacity          |
| `rainbow-refraction.svg`   | Hiệu ứng khúc xạ ánh sáng qua kính, dải màu mỏng cong                  | Glass card decoration   | Arc paths, stroke rainbow gradient, opacity rất thấp            |
| `dream-sparkle-set.svg`    | Sparkle star 4 cánh, tiny diamond, dot shine, glitter nhiều cỡ           | Particle decoration     | Path star nhỏ, animate opacity+scale pulse, stagger random      |

### Assets lớn — Focal Point Decorations (200–500px)

| File SVG tự tạo              | Nội dung cần vẽ                                                                    | Dùng cho              | Gợi ý kỹ thuật                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------------------- |
| `crystal-rose-large.svg`     | Bông hồng pha lê lớn 400px, cánh hoa trong suốt có refraction, nhụy vàng shimmer  | Hero góc trên phải    | Mỗi petal là path riêng với linearGradient pink→transparent, feGaussianBlur cho glow, tách nhụy để animate shimmer riêng |
| `sakura-branch-curve.svg`    | Cành sakura cong dài 500px, hoa nở 5 cánh, nụ hồng, lá non xanh mint              | Hero góc trên trái    | Path cong organic cho cành, hoa là symbol reuse, tách cành/hoa/lá để parallax riêng, stroke brown gradient |
| `crescent-moon-glow.svg`    | Mặt trăng lưỡi liềm 300px, hồng pastel, có halo glow mềm và tiny stars xung quanh | Hero top center       | Arc path + radialGradient hồng→transparent cho halo, feGaussianBlur stdDeviation 8–12, stars là circle nhỏ |
| `glass-butterfly-pair.svg`  | Đôi bướm thủy tinh 250px, cánh trong suốt có vân iridescent, thân mảnh mai        | Hero giữa phải        | Cánh dùng linearGradient multi-stop (pink→blue→purple), opacity 0.4–0.6, tách 4 cánh riêng để flutter |
| `crystal-diamond-facet.svg` | Viên kim cương pha lê 350px, nhiều mặt cắt facet, mỗi facet phản chiếu màu khác   | Projects center       | Polygon paths cho mỗi facet, fill gradient khác nhau, animate opacity stagger cho shimmer effect |
| `quartz-cluster-pink.svg`   | Cụm 5–7 tinh thể thạch anh hồng 400px, mọc từ base, mỗi crystal khác kích thước  | Projects góc dưới trái | Mỗi crystal là path riêng, fill linearGradient pink→white, glow filter, tách để animate grow stagger |
| `rose-wreath-glass.svg`     | Vòng hoa hồng 450px dạng wreath tròn, hoa glass trong mờ, lá xanh mint, ribbon    | Projects frame grid   | Circle path làm guide, hoa/lá distribute dọc path, mỗi hoa có opacity 0.3–0.5, shimmer overlay |
| `crystal-swan.svg`          | Thiên nga pha lê 350px, cổ cong thanh tao, cánh mở nhẹ, body trong suốt shimmer   | Summary góc trên trái | Tách neck/body/wings riêng, fill white→pink gradient opacity 0.5, feGaussianBlur cho dreamy |
| `rainbow-arc-crystal.svg`   | Cầu vồng pha lê 500px arc, 7 dải màu pastel, có sparkle dots dọc theo arc         | Summary top spanning  | 7 arc paths stroke pastel colors, stroke-width giảm dần, sparkle circles dọc path, animate hue-rotate |
| `pink-cloud-set.svg`        | 2–3 đám mây hồng bồng bềnh 300px, organic blob shape, có highlight trắng mềm      | Summary hai bên       | Nhiều ellipse/circle chồng nhau tạo cloud shape, fill radialGradient pink, opacity 0.2–0.35 |

---

## Nội dung theo Route

### Route `/` — GlassHeroAboutPage

**Hero Section:**
- Tên: "Nguyễn Thị Thu"
- Phụ đề: "Hành trình chuyển đổi số của một cá nhân"
- Tagline: "Chào mừng đến với không gian lưu trữ tư duy và kỹ năng số của tôi"

**About Cards:**
1. **Thông tin cá nhân** — MSV: 24061410 | Ngành: Luật chung | Trường: ĐH Luật, ĐHQGHN
2. **Sở thích** — Nấu ăn, cầu lông, chơi game, xem phim, đọc sách
3. **Phong cách** — Nhẹ nhàng, dễ tính, ưu tiên sự hài hòa, giải quyết vấn đề bằng thái độ điềm tĩnh và linh hoạt
4. **Mục tiêu học tập** — Trở thành người làm nghề luật gần gũi, biết lắng nghe, ứng dụng công nghệ để tự động hóa công việc lặp
5. **Mục tiêu Portfolio** — Minh chứng cho việc phong cách dễ tính vẫn có thể làm việc khoa học và kỷ luật trên môi trường số
6. **Nguyên tắc** — Duy trì tư duy phản biện độc lập, không nghe theo máy móc thụ động

**Công cụ đã sử dụng (badge row):**
- File Explorer & Google Drive
- Thư viện điện tử ĐHQG & CSDL pháp luật
- Mô hình ngôn ngữ lớn (LLM)
- Google Meet
- Canva & Microsoft Word

### Route `/projects` — CrystalProjectsPage

6 glass cards, mỗi card gồm: icon Lucide + tên chương + mục tiêu + tóm tắt quá trình.

| # | Tên chương                                        | Icon Lucide    | Mục tiêu tóm tắt                                          |
|---|---------------------------------------------------|----------------|-----------------------------------------------------------|
| 1 | Tổ chức, sắp xếp và lưu trữ dữ liệu             | `FolderOpen`   | Kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin   |
| 2 | Khai thác dữ liệu và thông tin                    | `Search`       | Tìm kiếm và đánh giá thông tin học thuật đáng tin cậy      |
| 3 | Tổng quan về trí tuệ nhân tạo                     | `Brain`        | Viết câu lệnh hiệu quả cho mô hình ngôn ngữ lớn           |
| 4 | Giao tiếp và hợp tác trong môi trường số          | `Video`        | Tổ chức và tham gia cuộc họp trực tuyến chuyên nghiệp      |
| 5 | Sáng tạo nội dung số                              | `Palette`      | Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung              |
| 6 | An toàn và liêm chính học thuật trong môi trường số| `Shield`       | Sử dụng AI có trách nhiệm và đạo đức trong học tập         |

### Route `/summary` — DreamConclusionPage

- **Trải nghiệm thay đổi:** Công nghệ giúp tiến độ học tập trơn tru, giảm căng thẳng xử lý tài liệu lớn
- **Hành trang quý giá:** Phương pháp duy trì lập trường học thuật độc lập, kỹ năng truy vấn chuyên sâu, làm việc nhóm hòa nhã nhưng kỷ luật
- **Điểm tâm đắc:** Tư duy phản biện độc lập, môi trường nhóm cởi mở, hệ thống lưu trữ khoa học
- **Thách thức:** Thông tin AI sai lệch cần đối chiếu, tinh chỉnh câu lệnh cho thuật ngữ luật, phân bổ thời gian
- **Định hướng:** Ứng dụng kỹ năng số vào nghiên cứu pháp lý, tinh giản quy trình rà soát văn bản, duy trì cân bằng cuộc sống
- **Lời cảm ơn:** Gửi đến thầy cô và người theo dõi

---

## Navigation — Glass Pill Nav

- Nav là một **frosted glass bar** nằm ngang phía trên (fixed)
- Mỗi nav item là một **glass pill** với icon Lucide + label
- Active item có glow border hồng + shimmer subtle
- Hover: glass pill sáng lên + icon scale nhẹ
- Mobile: bottom glass bar với 3 icon pills

```
[ 🏠 Giới thiệu ]  [ 📂 Dự án ]  [ ✨ Tổng kết ]
```

---

## Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu       | Quy định triển khai                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Theme ID            | Ghi rõ `pastel-glass-dreamscape` trong theme config                                          |
| Tech stack          | React 18 + Framer Motion + Lenis + Lucide Icons + Vite + Tailwind CSS                        |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.jsx`, `src/app/theme.js`, `src/app/lenisSetup.js`    |
| Routes              | Đúng 3 routes: `/` (hero+about), `/projects` (6 cards), `/summary` (conclusion)              |
| Background priority | Aurora gradient + bokeh orbs + sakura petals + crystal rays là visual layer chính, PHẢI nổi bật |
| Glassmorphism       | Mọi card/panel dùng `backdrop-filter: blur()` + border rgba white + box-shadow hồng mềm      |
| Feature folders     | Tách `aurora-background`, `glass-hero`, `crystal-projects`, `dream-conclusion`               |
| UI components       | Có `GlassCard`, `GlassButton`, `GlassBadge`, `ShimmerOverlay`, `PageTransition` dùng lại    |
| Asset folder        | Tạo `src/assets/pastel-glass-dreamscape/` và đủ 18 SVG files (8 particle + 10 large)         |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục                |
| Large assets        | Mỗi route PHẢI có 3–4 assets lớn (200–500px) làm focal point ở background layer 2           |
| Animation mạnh      | Hero phải có ít nhất 5 animation layers chạy đồng thời (aurora + large assets + bokeh + petal + shimmer) |
| Card hover          | Mọi glass card phải có shimmer sweep + lift + glow khi hover                                 |
| Icons               | Dùng Lucide React cho tất cả icon, KHÔNG dùng icon library khác                             |
| Responsive          | Glass cards về 1 cột ở mobile, nav chuyển thành bottom bar, background giữ nguyên           |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt petal fall, bokeh drift, aurora shift            |
| Performance         | Giới hạn 15–25 bokeh orbs, 10–15 petals visible, lazy load SVG assets, optimize blur        |
| Accessibility       | Text trên glass card phải đủ contrast (text đậm hơn), SVG decoration dùng `aria-hidden`     |
| Nội dung            | Lấy 100% từ file `docs/portfolio.md`, không thêm bớt thông tin                              |
| Font loading        | Dùng Google Fonts: Quicksand + Nunito, preload cho performance                               |

---

## Responsive breakpoints

| Breakpoint | Layout                                                    |
| ---------- | --------------------------------------------------------- |
| ≥1024px    | Glass cards 3 columns, full aurora background, nav top    |
| 768–1023px | Glass cards 2 columns, bokeh giảm số lượng, nav top      |
| <768px     | Glass cards 1 column, nav bottom bar, giữ aurora + petals |

---

## Performance notes

- `backdrop-filter: blur()` tốn GPU — giới hạn số glass layers chồng nhau ≤ 3
- Large decorative assets dùng `opacity` 0.45–0.70 và CSS animation thay vì JS
- Large assets dùng `will-change: transform` và `contain: layout` để isolate repaint
- Bokeh orbs dùng CSS animation thay vì JS để giảm main thread load
- Sakura petals dùng `will-change: transform` và recycle khi ra khỏi viewport
- Aurora gradient dùng CSS `@keyframes` với `background-position` shift, không repaint
- Lazy load route pages với `React.lazy()` + `Suspense`
- SVG assets lớn inline trong component, assets nhỏ dùng `<use>` để reuse symbols
- Large assets ở mobile giảm kích thước 50% và giảm opacity thêm 0.1
- Tổng số animated elements trên viewport cùng lúc ≤ 30 (large assets + bokeh + petals)
