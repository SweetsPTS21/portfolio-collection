# VinhNH Portfolio — Arctic Orca Expedition Theme Guide

## Theme ID

`arctic-orca-expedition`

Portfolio mang phong cách chuyến thám hiểm Bắc Cực: cá voi sát thủ, tàu ngầm mini, băng trôi, phao sonar, hải đăng băng, bản đồ hải trình và mặt biển xanh lạnh. Cách viết theme theo tinh thần `catalog-7`: background-first, assets 2D lớn, animation mạnh, card có hình dạng riêng, nội dung HTML vẫn rõ ràng và dễ đọc.

## Theme Direction

| Nhóm | Quy định |
| --- | --- |
| Chủ đề chính | Arctic Orca Expedition: chuyến hải trình xanh-trắng qua biển băng |
| Con vật chủ đạo | Cá voi sát thủ/orca, xuất hiện trong hero và một số motion background |
| Đồ vật chủ đạo | Tàu ngầm mini, phao sonar, la bàn hải trình, kính lặn, neo, hải đăng băng, bản đồ tuyến đi |
| Cảm xúc | Nam tính, lạnh, sạch, hiện đại, có năng lượng khám phá |
| Không gian | Mặt biển băng, sóng xanh dương, iceberg lớn, trời trắng lạnh, sonar ring, bubble trail |
| Trọng tâm | Background là điểm nhấn lớn nhất, không chỉ dùng gradient hoặc pattern nhỏ |
| Loại bỏ | Không dùng motif ngoài chủ đề thám hiểm biển băng; mọi decoration phải là đồ vật/con vật thuộc theme |
| Nội dung | Chỉ lấy dữ liệu từ `docs/portfolio.md`, không tự bịa tên, mô tả, dự án, kỹ năng, thành tựu |

## Palette

```css
:root {
  --ice-white: #f8fdff;
  --snow-card: #ffffff;
  --frost-blue: #dff4ff;
  --glacier-blue: #9edfff;
  --orca-blue: #168eea;
  --deep-sea: #075ca8;
  --polar-navy: #102f4d;
  --sonar-cyan: #5ee6ff;
  --ice-shadow: #7ba9c8;
  --line-frost: rgba(22, 142, 234, 0.22);
  --glass-ice: rgba(255, 255, 255, 0.78);
}
```

| Token | Vai trò |
| --- | --- |
| `--ice-white` | nền tổng thể trắng lạnh |
| `--snow-card` | card nội dung, vùng đọc chính |
| `--frost-blue` / `--glacier-blue` | wave, iceberg, background depth |
| `--orca-blue` | primary action, active route, icon chính |
| `--deep-sea` / `--polar-navy` | heading, text mạnh, shadow sâu |
| `--sonar-cyan` | sonar ring, glow, hover highlight |
| `--line-frost` | viền glass, divider, card frame |

## Typography

- Heading: `Space Grotesk` hoặc `Manrope`, weight `700–900`, cảm giác chắc và hiện đại.
- Body: `Inter` hoặc `Nunito Sans`, dễ đọc trên nền glass trắng-xanh.
- Heading hero có letter spacing nhẹ âm, line-height gọn.
- Body giữ contrast tối thiểu `4.5:1` trên mọi card.

## Tech Stack

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

| Công nghệ | Vai trò |
| --- | --- |
| `React 18` | cấu trúc component, route state, render data-driven UI |
| `framer-motion` | route transition, hero entrance, card hover, scroll reveal, orca/submarine motion |
| `lenis` | smooth scroll qua các section dài |
| `lucide-react` | icon line cho route, card, chip, CTA |

## Architecture: 3 Routes

Portfolio dùng đúng 3 routes. Không thêm route phụ nếu chưa có yêu cầu mới.

| Route | Vai trò | Nội dung lấy từ `docs/portfolio.md` |
| --- | --- | --- |
| `/` | Hero + profile overview | thông tin giới thiệu, mục tiêu, điểm nổi bật cá nhân |
| `/projects` | Catalog bài tập/dự án | danh sách bài tập, mục tiêu, quá trình thực hiện, kết quả có sẵn trong tài liệu |
| `/conclusion` | Tổng kết | trải nghiệm, hành trang, điểm tâm đắc, thách thức, định hướng phía trước, lời cảm ơn |

## Data Rules

- `docs/portfolio.md` là nguồn nội dung gốc duy nhất.
- Khi tạo data catalog, chỉ trích xuất, chuẩn hóa và nhóm lại nội dung đã có trong `docs/portfolio.md`.
- Không tự thêm dự án, thành tích, kỹ năng, mô tả cá nhân, số liệu, quote, social link hoặc thông tin liên hệ nếu tài liệu gốc không có.
- Không đưa motif ngoài chủ đề Arctic Orca Expedition vào theme, icon, background, card, route label hoặc asset name.
- Nếu nội dung gốc có đoạn không hợp theme, chỉ đổi cách trình bày trực quan; không đổi nghĩa.
- Data nên đặt trong `src/data/portfolioData.js` sau khi triển khai app.

## Background System

Background là layer chính, cần lớn, giàu chuyển động, nhận diện rõ chủ đề biển băng.

| Layer | Asset | Mô tả | Motion |
| --- | --- | --- | --- |
| Polar sky | `polar-sky-gradient.svg` | nền trắng-xanh có glow lạnh | shimmer chậm |
| Iceberg field | `iceberg-field-large.svg` | 3–5 khối băng lớn ở xa/gần | parallax ngang nhẹ |
| Orca path | `orca-swim-path.svg` | orca lớn bơi chéo sau hero content | float + slide loop lệch phase |
| Submarine object | `mini-submarine-hero.svg` | tàu ngầm mini là object hero phụ | bob mạnh bằng spring |
| Sonar rings | `sonar-ring-system.svg` | vòng sonar cyan quanh tàu ngầm/phao | scale + fade loop |
| Bubble trail | `orca-bubble-particles.svg` | bubble theo đường bơi của orca | float lên, random delay |
| Ice wave | `arctic-wave-ribbons.svg` | dải sóng trắng-xanh cắt giữa section | wave sway |

Quy định hiệu năng:

- Tối đa `20–30` phần tử animated visible cùng lúc.
- SVG lớn cần tối ưu bằng SVGO trước khi dùng.
- Asset hero tải trước; asset route sau lazy-load nếu lớn.
- Tôn trọng `prefers-reduced-motion`: tắt orca loop, sonar pulse, bubble drift, wave sway.

## Required Assets

Tạo assets cụ thể trong `src/assets/arctic-orca-expedition/`.

| Asset | Nội dung bắt buộc | Vị trí dùng |
| --- | --- | --- |
| `polar-sky-gradient.svg` | sky trắng-xanh, glow lạnh, cloud mỏng | background toàn trang |
| `iceberg-field-large.svg` | iceberg lớn nhiều lớp, có bóng xanh | hero và route background |
| `orca-hero-mascot.svg` | orca lớn, trắng-đen-xanh, thân thiện nhưng không cute quá | hero focal object |
| `orca-swim-path.svg` | orca nhỏ hơn + đường bubble trail | idle background |
| `mini-submarine-hero.svg` | tàu ngầm mini xanh dương, đèn cyan | hero object phụ |
| `sonar-buoy.svg` | phao sonar xanh-trắng, antenna nhỏ | route tabs hoặc project header |
| `sonar-ring-system.svg` | vòng tròn sonar nhiều stroke | hover, CTA, hero glow |
| `diving-goggles.svg` | kính lặn xanh, strap navy | profile card decoration |
| `polar-compass.svg` | la bàn hải trình tối giản | navigation/card icon accent |
| `anchor-ice-badge.svg` | neo nhỏ phủ băng | badge/chip |
| `arctic-map-scroll.svg` | bản đồ tuyến đi, đường dotted, wave marks | projects intro |
| `ice-lighthouse.svg` | hải đăng trên băng, beam xanh | conclusion route |
| `arctic-wave-ribbons.svg` | wave divider lớn | section divider |
| `orca-bubble-particles.svg` | bubble, foam dot, sparkle lạnh | particle layer |
| `ice-card-frame.svg` | frame card có cạnh băng, crack nhẹ | project/summary cards |

## Card Design

Card không được là khung trắng trống. Mỗi loại card cần có frame hoặc object theo chủ đề Arctic Orca Expedition.

| Card type | Quy định |
| --- | --- |
| Profile card | dạng thẻ thám hiểm băng, có `diving-goggles.svg`, sonar chip, viền xanh lạnh |
| Project card | dạng expedition log ticket, dùng `ice-card-frame.svg`, số thứ tự như mã hải trình |
| Summary card | dạng lighthouse report, có `ice-lighthouse.svg` hoặc beam strip góc phải |
| Fact card | dạng sonar tile, icon lucide nằm trong vòng `sonar-ring-system.svg` |
| CTA card | dạng submarine control panel, có nút xanh dương và bubble burst khi hover |

Interaction:

- Hover card nâng `y: -8` đến `-14`, scale nhẹ `1.01–1.03`.
- Sonar ring pulse khi hover card hoặc active route.
- Orca shadow có parallax nhẹ theo scroll, không che text.
- Card entrance dùng stagger theo route, delay ngắn, không quá chậm.

## Animation Rules

| Nhóm | Quy định |
| --- | --- |
| Route transition | fade + slide dọc + slight scale, dùng `framer-motion` |
| Hero entrance | iceberg vào trước, orca trượt chéo, content nổi lên sau, tàu ngầm bob bằng spring |
| Scroll reveal | section reveal theo stagger, không reveal từng chữ quá dày |
| Idle loop | orca swim, sonar pulse, bubble float, iceberg parallax, wave sway |
| Hover | sonar pulse, bubble pop, card lift, icon scale ngắn |
| Reduced motion | giữ layout tĩnh, chỉ dùng opacity transition tối thiểu |

## Component Boundaries

Gợi ý cấu trúc khi triển khai:

```txt
src/
  App.jsx
  main.jsx
  styles.css
  data/
    portfolioData.js
  pages/
    HomePage.jsx
    ProjectsPage.jsx
    ConclusionPage.jsx
  components/
    layout/
      AppShell.jsx
      RouteTabs.jsx
      ArcticOrcaBackground.jsx
    cards/
      ProfileExpeditionCard.jsx
      ProjectLogCard.jsx
      LighthouseSummaryCard.jsx
    ui/
      MotionSection.jsx
      SonarButton.jsx
      IceBadge.jsx
  assets/
    arctic-orca-expedition/
```

Nguyên tắc:

- Page chỉ sắp xếp section và truyền data.
- Component card nhận props thuần, không tự đọc file data.
- `ArcticOrcaBackground` quản lý iceberg, orca, tàu ngầm, sonar, bubble để không rải decoration khắp page.
- `portfolioData.js` là adapter từ `docs/portfolio.md`, giữ nội dung đã có, không sáng tác thêm.

## Implementation Checklist

- Có đúng 3 routes: `/`, `/projects`, `/conclusion`.
- Dùng `React 18`, `framer-motion`, `lenis`, `lucide-react`.
- Theme bám chặt Arctic Orca Expedition, có orca, tàu ngầm, iceberg, sonar buoy, la bàn, kính lặn, hải đăng băng.
- Background là điểm nhấn chính, có nhiều asset lớn và animation mạnh.
- Palette trắng/xanh dương, hợp visual nam.
- Card có frame/shape/object riêng, không dùng card trắng mặc định.
- Data catalog lấy từ `docs/portfolio.md`, không bịa thêm nội dung.
- UI giữ contrast tốt, mobile giảm mật độ particle và motion.
