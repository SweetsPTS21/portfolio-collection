# thunt-portfolio

README nay quy dinh theme va kien truc rieng cho `thunt-portfolio`. Du an dung noi dung that tu `docs/portfolio.md`, khong them noi dung ngoai tai lieu.

## 1. Theme

**Theme ID:** `ocean-wave-diary`

Portfolio duoc thiet ke nhu mot cuon nhat ky mo tren bien xanh: nen bien la diem nhan chinh, song lon chuyen dong lien tuc, anh nang phan chieu tren mat nuoc, may pastel, bot bien, vo so va cac trang diary mem mai. Tong cam xuc can giu: xanh duong, trong treo, long lanh, sinh dong, nu tinh, thoai mai nhung van chi chu.

Yeu cau thi giac bat buoc:

- Background phai la lop thi giac lon nhat va an tuong nhat, khong chi la mau nen tinh.
- Hero dung full-bleed ocean scene voi wave layers, sky glow, water reflection, cloud drift va sparkle shimmer.
- Assets can lon, ro, co vai tro dan dat bo cuc: song bien, bau troi, diary page, shore scene, shell badges, bottle message.
- Animation manh va nhieu lop: reveal theo tang, wave sway, shimmer, cloud drift, bubble trail, sparkle twinkle, card lift.
- Giao dien phai co cam giac lung linh, mem, nhieu hieu ung, nhung khong duoc lam mat kha nang doc noi dung hoc thuat.
- The trang tri can doc dao va sinh dong: diary tag, shell badge, foam badge, sun stamp, tape corner, wave-edge card, message bottle CTA.

## 2. Techstack

Du an khi duoc tao code phai dung dung stack sau:

| Cong nghe | Phien ban | Vai tro |
| --- | --- | --- |
| React | 18 | UI framework |
| Vite | latest | Build tool va dev server |
| Framer Motion | latest | Page transition, section reveal, card motion, hero layer reveal |
| Lucide Icons | latest | Icon he thong cho nav, action, route metadata, utility controls |
| Lenis | latest | Smooth scroll va anchor scroll giua cac section trong route |

Khong mac dinh them UI framework khac neu README nay khong yeu cau. Neu can component primitive, uu tien component tu viet bang React/CSS de giu dung visual identity cua theme.

## 3. Routes

Ung dung co dung **3 routes**. Moi route anh xa truc tiep voi mot phan noi dung trong `docs/portfolio.md`.

| Path | Ten route | Noi dung nguon | Vai tro UI |
| --- | --- | --- | --- |
| `/` | Ocean Intro | Trang 1: Gioi thieu/About Me | Hero bien xanh, thong tin ca nhan, muc tieu hoc tap, muc tieu portfolio, cong cu da su dung |
| `/projects` | Diary Projects | Trang Du an/Projects | 6 chuong bai tap dang diary spreads/postcards, co wave divider va decorative project stamps |
| `/reflection` | Shore Reflection | Trang Tong ket/Conclusion | Trai nghiem, hanh trang, diem tam dac, thach thuc, dinh huong phia truoc |

Quy uoc routing:

- Route transition nhu lat trang diary tren nen song bien.
- Nav co the la floating ocean dock hoac anchor rope bar, dung icon Lucide ket hop label ngan.
- Moi route co background ocean rieng nhung cung chung he wave layers de tranh dut mach thi giac.
- Khong tao route thu tu. Neu can contact/footer, dat trong `/reflection`.

## 4. Palette mau

Palette uu tien **xanh duong**. Hong, vang, cat chi la mau phu de tao do long lanh, khong duoc lan at xanh duong.

```js
export const oceanWaveDiaryPalette = {
  skyBlueSoft: "#EEF9FF",
  oceanBlue: "#7CCDF2",
  waveBlue: "#A7E4FF",
  deepBlue: "#2F8FC8",
  deepNavy: "#18384A",
  textSecondary: "#5A7F92",
  foamWhite: "#FBFEFF",
  seafoamGreen: "#7DDEC3",
  sunsetPink: "#FFB7C8",
  blushCloud: "#FFD7E2",
  sunGold: "#FFD978",
  sandWarm: "#FFEBC7",
  borderBlue: "#BFEAF8"
};
```

Color usage:

- `#EEF9FF`: page base, sky wash, background fallback.
- `#7CCDF2`: primary action, active route, wave accent.
- `#A7E4FF`: secondary wave layer, hover surface, soft border.
- `#2F8FC8`: stronger blue for contrast, CTA hover, active icon.
- `#18384A`: main text; bat buoc dam de noi dung phap ly de doc.
- `#FBFEFF`: card/page surface, foam, glass highlight.
- `#FFB7C8`, `#FFD978`, `#FFEBC7`: chi dung lam sparkle, sun stamp, tape, shore decoration.

Typography:

- Heading: `Quicksand`, tron, mem, hop travel diary.
- Body: `Nunito`, de doc, than thien, phu hop noi dung dai.

## 5. Kien truc source de build sau nay

Khi sinh code, giu kien truc nhu sau:

```txt
thunt-portfolio/
├── README.md
├── docs/
│   └── portfolio.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── routes.jsx
    ├── styles/
    │   ├── tokens.css
    │   ├── global.css
    │   ├── motion.css
    │   └── ocean-background.css
    ├── data/
    │   └── portfolioContent.js
    ├── pages/
    │   ├── OceanIntroPage.jsx
    │   ├── DiaryProjectsPage.jsx
    │   └── ShoreReflectionPage.jsx
    ├── components/
    │   ├── layout/
    │   │   ├── AppShell.jsx
    │   │   ├── OceanNav.jsx
    │   │   ├── RouteTransition.jsx
    │   │   └── FooterShore.jsx
    │   ├── ocean-scene/
    │   │   ├── OceanBackground.jsx
    │   │   ├── WaveLayers.jsx
    │   │   ├── SunsetSky.jsx
    │   │   ├── CloudDrift.jsx
    │   │   ├── SparkleField.jsx
    │   │   ├── BubbleTrail.jsx
    │   │   └── ShoreDecor.jsx
    │   ├── diary/
    │   │   ├── DiaryPage.jsx
    │   │   ├── DiarySpread.jsx
    │   │   ├── DiaryTag.jsx
    │   │   ├── SunStamp.jsx
    │   │   └── WaveDivider.jsx
    │   ├── projects/
    │   │   ├── ProjectChapterCard.jsx
    │   │   ├── ProjectPostcardGrid.jsx
    │   │   └── ChapterTimeline.jsx
    │   └── ui/
    │       ├── WaveButton.jsx
    │       ├── ShellBadge.jsx
    │       ├── FoamBadge.jsx
    │       ├── SectionShell.jsx
    │       └── MotionCard.jsx
    └── assets/
        └── ocean-wave-diary/
            ├── sunset-sky-panorama.svg
            ├── wave-layers-sunset.svg
            ├── sun-reflection-ribbon.svg
            ├── pink-cloud-clusters.svg
            ├── shoreline-sand-scene.svg
            ├── seashell-collection.svg
            ├── seagull-silhouette.svg
            ├── foam-dots-pattern.svg
            ├── diary-page-frame.svg
            ├── bottle-message.svg
            └── anchor-rope-icons.svg
```

## 6. Component rules

App shell:

- `AppShell` giu background ocean co dinh, nav, Lenis provider/init, route outlet.
- `OceanBackground` nam ngoai pages de giu song bien lien tuc khi chuyen route.
- `RouteTransition` dung Framer Motion, animate opacity, y, rotateX nhe va page-flip shadow.

Pages:

- `OceanIntroPage` hien hero, thong tin ca nhan, muc tieu hoc tap, muc tieu portfolio, nguyen tac hoc thuat, cong cu su dung.
- `DiaryProjectsPage` hien 6 chuong bai tap nhu diary entries; moi chuong co muc tieu va qua trinh thuc hien.
- `ShoreReflectionPage` hien tong ket, trai nghiem, hanh trang, diem tam dac, thach thuc, dinh huong.

Decorative UI:

- `DiaryPage` co paper grain, line rule, corner fold, tape corner.
- `ShellBadge` dung cho label nho, icon, keyword, cong cu.
- `FoamBadge` dung cho metadata nhe, khong dung cho van ban dai.
- `SunStamp` dung nhu dau moc/chuong, khong lap qua day.
- `WaveDivider` chia section bang song SVG lon, co motion nhe.

## 7. Animation rules

| Thanh phan | Hieu ung | Cong cu |
| --- | --- | --- |
| Page load | Sky fade in, wave slide up, sun glow pulse | Framer Motion + CSS |
| Route transition | Diary page flip, foam sweep, opacity crossfade | Framer Motion |
| Wave background | 4-5 wave layers sway lech phase 6-12s | CSS keyframes |
| Sparkle field | Twinkle khong dong bo tren mat nuoc | CSS keyframes |
| Cloud drift | May troi ngang cham, scale/opacity nhe | CSS keyframes |
| Project cards | Lift, rotate nhe, wave-edge shift 2-4px | Framer Motion |
| CTA/contact area | Bottle bobbing, bubble trail, gold shimmer | Framer Motion + CSS |

Motion constraints:

- Nhieu animation nhung phai co nhip cham/vua, khong gay moi mat khi doc noi dung dai.
- Tren mobile giam mat do sparkle, bubble, cloud va so wave layers.
- Respect `prefers-reduced-motion`: tat loop phu, giu fade/position transition ngan.

## 8. Asset direction

Assets la phan quan trong cua theme, khong duoc thay bang gradient don gian.

Bat buoc co nhom assets:

- Ocean panorama: bau troi xanh, mat troi, chan troi, song lon.
- Wave layers: nhieu lop song xanh duong, co highlight sang.
- Diary paper: khung trang nhat ky, line rule, stamp, tape.
- Shore decor: cat, vo so, starfish, foam dots.
- Motion decor: sparkle, bubble, seagull, cloud cluster.
- CTA decor: bottle message cho footer/reflection.

Asset style:

- SVG uu tien cho background, divider, icon decoration vi de animate.
- PNG/WebP chi dung neu can illustration lon co texture phuc tap.
- Tat ca assets dat trong `src/assets/ocean-wave-diary/`.
- Ten file ro nghia, khong dung `image1`, `bg-final`, `new-new`.

## 9. Noi dung va data rules

- Noi dung hien thi phai lay tu `docs/portfolio.md`.
- Khong bia them thong tin ca nhan, ky nang, du an, thanh tich, link hoac so lieu.
- Co the bien doi cach trinh bay, nhung khong thay doi y nghia noi dung.
- Cac chuong trong Projects phai giu du 6 chuong.
- Van phong UI co the mem mai, diary-like, nhung noi dung hoc thuat phai ro rang, de doc.

## 10. Responsive rules

- Desktop: background full-bleed, route content nam tren cac diary pages/card layers, co parallax nhe.
- Tablet: giam so decoration, project cards 2 cot neu du rong.
- Mobile: 1 cot, nav gon, card khong qua day shadow, wave background thap hon de khong che noi dung.
- Text khong duoc tran card/button. Heading trong card phai nho hon hero heading.
- Decorative tags khong duoc che paragraph hoac list noi dung.

## 11. Definition of done cho UI sau nay

- Co dung 3 routes: `/`, `/projects`, `/reflection`.
- Palette xanh duong la chu dao, dung token ro rang.
- Background ocean la diem nhan lon nhat, co assets va motion nhieu lop.
- Co assets lon va cac the trang tri doc dao: diary, shell, foam, sun stamp, bottle.
- Dung React 18, Vite latest, Framer Motion, Lucide Icons, Lenis.
- Noi dung trung thanh voi `docs/portfolio.md`.
- Mobile khong vo layout, khong text overlap, khong animation gay nhieu.
