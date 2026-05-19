# 🐰 Nhi Portfolio — Bunny Cloud Garden

> **Theme:** `bunny-cloud-garden` (Catalog 5 — Cute & Dreamy Feminine Themes)  
> **Concept:** Portfolio như một khu vườn trên mây — thỏ nhỏ, hoa tulip, cầu vồng mini, mây bông, giọt sương.  
> **Vibe:** Mơ mộng, dịu dàng, vui, ấm áp, innocent.

---

## 👤 Thông tin cá nhân

- **Họ và tên:** Nguyễn Phương Nhi
- **Ngành:** Luật Học
- **Trường:** Đại học Luật — Đại học Quốc gia Hà Nội
- **Sở thích:** Xem phim, nấu ăn, chơi cầu lông, đi du lịch
- **Phong cách:** Đơn giản, thẳng tính, thích nghi nhanh, có tinh thần trách nhiệm
- **Tagline:** _"Đơn giản, thẳng thắn và luôn sẵn sàng thích nghi."_

---

## 🎨 Design System

### Bảng màu

| Token              | Giá trị   | Vai trò                  |
| ------------------ | --------- | ------------------------ |
| `colorBgBase`      | `#FFF5F9` | Nền chính (cloud white)  |
| `colorBgContainer` | `#FFFFFF` | Card/container           |
| `colorPrimary`     | `#FF8ABF` | Bunny pink — CTA, accent |
| `colorTextBase`    | `#3D2244` | Text chính               |
| `colorTextSecondary` | `#8A6B8F` | Text phụ              |
| `colorSuccess`     | `#7EEDC8` | Garden mint              |
| `colorWarning`     | `#FFE17A` | Sunshine yellow          |
| `colorInfo`        | `#A8D4FF` | Sky blue                 |
| `colorBorder`      | `#FFD6E8` | Border mềm              |
| `borderRadius`     | `22px`    | Bo tròn lớn, mềm mại    |

**CSS Variables bổ sung:**

```css
--bunny-pink: #FF8ABF;
--cloud-white: #FFF5F9;
--garden-mint: #7EEDC8;
--sunshine-yellow: #FFE17A;
--sky-blue: #A8D4FF;
--lavender-soft: #D8B8FF;
--petal-coral: #FFB8C8;
--rainbow-orange: #FFB87A;
```

### Typography

- **Heading:** `Comfortaa` — tròn, mềm, gợi cảm giác cloud và dreamy.
- **Body:** `Nunito` — dễ đọc, thân thiện, hợp với tone cute.

```css
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

---

## 🛠 Tech Stack

| Package              | Vai trò                                    |
| -------------------- | ------------------------------------------ |
| React + Vite         | Framework & build tool                     |
| Tailwind CSS         | Utility-first styling                      |
| Framer Motion        | UI animation, page transition, card hover  |
| @rive-app/react-canvas | Bunny mascot state machine, micro-animation |
| Lenis                | Smooth scroll                              |

### Cài đặt

```bash
npm install framer-motion @rive-app/react-canvas lenis
```

---

## 📐 Cấu trúc dự án

```txt
src/
├── app/
│   ├── App.jsx                      ← Cloud garden shell
│   ├── routes.js                    ← garden, flower-bed, greenhouse, mailbox
│   ├── theme.js                     ← Bảng màu & token
│   ├── motionConfig.js              ← Framer Motion variants, spring, easing
│   ├── riveSetup.js                 ← Rive state machine config
│   └── lenisSetup.js                ← Smooth scroll setup + cleanup
├── pages/
│   ├── CloudGardenHeroPage.jsx      ← Hero với cloud landscape và bunny
│   ├── FlowerBedProjectsPage.jsx    ← Projects dạng flower bed cards
│   ├── GreenhouseSkillsPage.jsx     ← Skills dạng watering/greenhouse
│   └── GardenMailboxContactPage.jsx ← Contact plant a message
├── features/
│   ├── cloud-scene/
│   │   ├── CloudBackground.jsx
│   │   ├── RainbowArc.jsx
│   │   ├── PetalFallLayer.jsx
│   │   └── DewDropParticles.jsx
│   ├── bunny-mascot/
│   │   ├── BunnyRiveController.jsx
│   │   ├── BunnyIdleAnimation.jsx
│   │   └── BunnyReaction.jsx
│   ├── flower-garden/
│   │   ├── FlowerBedGrid.jsx
│   │   ├── FlowerProjectCard.jsx
│   │   └── FlowerBloomHover.jsx
│   └── greenhouse-skills/
│       ├── WateringCanAnimation.jsx
│       ├── SkillBubbleGroup.jsx
│       └── PlantGrowBadge.jsx
├── components/
│   ├── layout/                      ← Garden nav, cloud page transition
│   └── ui/                          ← CloudButton, PetalCard, BunnyBadge, RainbowTag
├── data/
│   ├── projects.js                  ← Dữ liệu 6 chương/projects
│   ├── skills.js                    ← Năng lực & công cụ
│   └── profile.js                   ← Thông tin cá nhân
└── assets/bunny-cloud-garden/       ← SVG files, Rive files
```

---

## 🖼 Layout & Sections

### Hero — Cloud Garden

- Cloud landscape với bunny mascot ở giữa, hoa mọc từ dưới, rainbow arc phía sau.
- Tagline: _"Đơn giản, thẳng thắn và luôn sẵn sàng thích nghi."_
- CTA dẫn tới Projects.

### About — Garden Profile

- Garden profile card dạng flower pot tag, có bunny avatar.
- Thông tin: tên, ngành, trường, sở thích, định hướng.
- La bàn định hướng: trở thành người hành nghề luật trong kỷ nguyên số.

### Projects — Flower Bed

Mỗi project (chương) là một luống hoa/flower bed card, hover thì hoa nở:

| Chương | Tên                              | Flower color     |
| ------ | -------------------------------- | ---------------- |
| 1      | Máy tính & Thiết bị ngoại vi     | 🌷 Tulip pink    |
| 2      | Khai thác dữ liệu và thông tin   | 🌻 Sunflower gold|
| 3      | Tổng quan trí tuệ nhân tạo       | 💜 Lavender      |
| 4      | Giao tiếp trong môi trường số    | 🌸 Petal coral   |
| 5      | Sáng tạo nội dung số             | 🌼 Daisy white   |
| 6      | An toàn & Liêm chính học thuật   | 🌿 Mint green    |

### Skills — Greenhouse

- Watering can tưới ra skill bubbles theo nhóm màu.
- Nhóm: Tư duy số, Khai thác AI, Kỹ năng học thuật, Thiết kế & trình bày.
- Công cụ: Google Drive, Google Scholar, ChatGPT, Claude, Figma, Notion.

### Contact — Garden Mailbox

- "Plant a message" CTA, seed drop animation → flower grow.
- Thông tin liên hệ và social links.

---

## ✨ Animation Rules

| Sự kiện          | Effect                                        | Thư viện          |
| ---------------- | --------------------------------------------- | ----------------- |
| Page load        | Cloud part reveal + bunny hop in              | Framer Motion     |
| Cloud background | Drift horizontal 15–25s loop                  | CSS keyframes     |
| Petal fall       | Fall path diagonal, rotate, fade out          | SVG/CSS animation |
| Bunny idle       | Ear wiggle + blink 4s loop                    | Rive / CSS        |
| Flower sway      | Gentle sway 3–5s loop                         | CSS keyframes     |
| Card hover       | Float up + petal burst + soft glow            | CSS transition    |
| Rainbow          | Arc draw stroke-dashoffset 1.5s               | SVG/CSS animation |
| Section entrance | Fade + scale(0.95→1) + sparkle stagger        | Framer Motion     |
| Dew drop         | Drop fall + splash ripple                     | CSS keyframes     |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🎀 SVG Assets cần tạo

| File SVG                     | Nội dung                                              | Dùng cho               |
| ---------------------------- | ----------------------------------------------------- | ---------------------- |
| `bunny-mascot-set.svg`       | Bunny nhiều pose: hop, wave, sleep, peek, hold flower | Mascot/decoration      |
| `cloud-shapes.svg`           | Cloud bông nhiều kiểu, highlight và shadow mềm        | Background/card        |
| `garden-flowers.svg`         | Tulip, daisy, sunflower, rose, lavender bunch         | Project cards/decor    |
| `rainbow-arc.svg`            | Cầu vồng 5–7 màu pastel, arc mềm                     | Hero/section accent    |
| `petal-set.svg`              | Cánh hoa nhiều màu: pink, coral, lavender, yellow    | Falling particles      |
| `watering-can-scene.svg`     | Watering can, water drops, tiny sprout               | Skills section         |
| `garden-icons.svg`           | Flower pot, seed, leaf, butterfly, ladybug, fence    | Nav/badge icons        |
| `dew-sparkle.svg`            | Giọt sương, sparkle star, tiny shine dots            | Particle decoration    |

---

## 🚀 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Test (Playwright)
npx playwright test
```

---

## 📋 Checklist triển khai

- [ ] Cài stack: `framer-motion`, `@rive-app/react-canvas`, `lenis`
- [ ] Tạo `src/app/motionConfig.js`, `riveSetup.js`, `lenisSetup.js`
- [ ] Tạo `src/assets/bunny-cloud-garden/` chứa tất cả SVG files
- [ ] Tự vẽ hoặc generate SVG assets theo bảng trên
- [ ] Thiết kế Bunny Rive file với ít nhất 3 states (idle, hop, wave)
- [ ] Import dữ liệu từ `docs/portfolio.md` vào `src/data/`
- [ ] Tách scene, mascot, animation và content features thành folder riêng
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation
- [ ] Optimize SVG bằng SVGO trước khi commit
- [ ] Kiểm tra responsive: 375px, 768px, 1280px
- [ ] Kiểm tra reduced motion fallback
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền pastel
- [ ] Deploy lên Netlify

---

## 📄 Nội dung Portfolio

Portfolio ghi nhận hành trình chuyển đổi số của Nguyễn Phương Nhi — sinh viên Luật học, với 6 chương từ nền tảng phần cứng đến liêm chính học thuật. Giá trị cốt lõi: AI là công cụ hỗ trợ, tư duy phản biện của con người mới là yếu tố quyết định.

---

_© 2026 • Nguyễn Phương Nhi • Bunny Cloud Garden Portfolio_
