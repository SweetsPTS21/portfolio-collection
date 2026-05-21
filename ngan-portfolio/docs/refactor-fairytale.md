# Refactor Plan — Biến ngan-portfolio thành tranh minh họa rừng cổ tích

## Vấn đề hiện tại
- Layout quá "web app" — card trắng, nền phẳng, ít chi tiết
- Assets nhỏ, opacity thấp, không tạo được không gian rừng
- Thiếu cảm giác "bước vào một thế giới khác"
- Không có nhân vật, không có câu chuyện thị giác
- Khoảng trống nhiều, thiếu lớp lang (layers)

## Mục tiêu refactor
> Khi mở trang, người xem phải cảm thấy như đang lật mở một cuốn sách tranh minh họa về khu rừng tiên — đầy màu sắc, chi tiết, sinh động, có chiều sâu.

---

## Hướng đi: "Illustrated Storybook Forest"

### 1. Background — Rừng đầy chi tiết, không còn phẳng

**Hiện tại:** Gradient xanh nhạt + vài firefly
**Sau refactor:**
- Full illustrated forest scene cố định phía sau
- Nhiều layer chồng nhau: bầu trời → mây → tán cây xa → cây gần → nấm lớn → cỏ/hoa foreground
- Mỗi layer có animation riêng (parallax nhẹ khi scroll, sway khi idle)
- Thêm: dây leo treo từ trên, bướm bay, lá rơi liên tục, ánh sáng xuyên tán lá

**SVG layers mới cần tạo:**
| Layer | Nội dung | Animation |
|-------|----------|-----------|
| `sky-clouds.svg` | Bầu trời xanh nhạt + 3-4 đám mây bông | Drift ngang chậm 40s |
| `canopy-top.svg` | Tán lá treo từ trên xuống, dây leo, hoa treo | Sway nhẹ 6s |
| `trees-mid.svg` | Cây lớn hai bên (thân + cành + lá chi tiết) | Static, glow nhẹ |
| `mushrooms-large.svg` | 5-6 cây nấm lớn nhiều màu, có cửa sổ/đèn | Pulse glow 3s |
| `grass-flowers.svg` | Cỏ, hoa dại, nấm nhỏ, đá ở foreground | Sway 4s |
| `hanging-vines.svg` | Dây leo + hoa treo từ trên xuống hai bên | Sway 5s |
| `butterflies.svg` | 4-5 con bướm nhiều màu | Drift + flutter CSS |
| `light-rays.svg` | Tia sáng vàng xuyên qua kẽ lá | Pulse opacity 8s |
| `falling-leaves-layer.svg` | 10+ lá rơi liên tục | Fall animation loop |

### 2. Cards — Biến thành "bảng gỗ rừng" / "trang sách"

**Hiện tại:** Card trắng bo tròn, border nhạt
**Sau refactor:**
- Card có texture gỗ/giấy cũ làm background
- Viền là dây leo/hoa quấn quanh
- Góc card có nấm nhỏ, lá, hoặc đom đóm
- Mỗi card có 1 illustration nhỏ riêng (fairy, nấm, cây, sách...)
- Hover: đom đóm bay ra, glow xanh mạnh hơn, card hơi nghiêng

**SVG mới cho cards:**
| Asset | Mô tả |
|-------|--------|
| `card-frame-vine.svg` | Khung dây leo bao quanh card |
| `card-corner-mushroom.svg` | Nấm nhỏ ở góc card |
| `card-corner-fairy.svg` | Fairy nhỏ ngồi ở góc |
| `wood-texture-pattern.svg` | Pattern vân gỗ nhẹ cho card bg |
| `parchment-texture.svg` | Texture giấy cũ cho card bg |

### 3. Hero — "Cổng vào khu rừng" immersive

**Hiện tại:** Text + avatar bên cạnh
**Sau refactor:**
- Full-screen illustrated scene: cổng gỗ mở ra, con đường dẫn vào rừng
- Tên "Thiên Ngân" viết như bảng gỗ treo trên cổng
- Avatar đặt trong khung gương/hồ nước phản chiếu
- Fairy bay quanh tên, rắc bụi sáng
- Đom đóm dày đặc hơn ở hero
- Nấm phát sáng hai bên đường

### 4. Navigation — "Bảng chỉ đường gỗ"

**Hiện tại:** Pill buttons glass
**Sau refactor:**
- Nav là bảng gỗ treo (wood sign SVG)
- Mỗi item là một mũi tên gỗ chỉ hướng
- Active item phát sáng xanh + có đom đóm bay quanh
- Hover: bảng gỗ lắc nhẹ

### 5. Projects — "Con đường rừng với các trạm"

**Hiện tại:** Cards zigzag đơn giản
**Sau refactor:**
- Có con đường đất/đá uốn lượn SVG chạy dọc trang
- Mỗi project là một "trạm" trên đường: nhà nấm, gốc cây, hồ nước...
- Số thứ tự là đá có khắc số phát sáng
- Giữa các trạm có cỏ, hoa, nấm nhỏ lấp đầy
- Fairy bay dọc theo đường khi scroll

### 6. Conclusion — "Khoảng trống trong rừng" (clearing)

**Hiện tại:** Cards đơn giản
**Sau refactor:**
- Scene là một khoảng trống trong rừng với ánh trăng chiếu xuống
- Quote nằm trong cuộn giấy (scroll parchment SVG)
- Xung quanh có nấm phát sáng, đom đóm dày
- "Thank you" là bảng gỗ nhỏ cắm trên cỏ

### 7. Nhân vật & Mascot

Thêm fairy mascot xuất hiện xuyên suốt:
- Hero: bay quanh cổng
- About: ngồi trên nấm cạnh avatar
- Projects: bay dọc theo đường
- Conclusion: vẫy tay ở cuối

**SVG cần:**
| Asset | Pose |
|-------|------|
| `fairy-flying.svg` | Bay ngang, cánh mở |
| `fairy-sitting.svg` | Ngồi trên nấm, vẫy tay |
| `fairy-waving.svg` | Đứng vẫy tay goodbye |
| `fairy-sprinkling.svg` | Rắc bụi tiên xuống |

### 8. Particles & Ambient

Tăng mật độ particles lên gấp 3-4 lần:
- Đom đóm: 18 → 50+
- Lá rơi: thêm layer riêng, 15+ lá liên tục
- Bụi tiên (fairy dust): sparkle nhỏ drift random
- Bướm: 4-5 con bay chậm
- Phấn hoa: tiny dots drift lên

### 9. Typography — "Storybook feel"

- Heading: thêm text-shadow glow xanh nhẹ
- Có thể thêm decorative initial cap (chữ cái đầu lớn, có hoa lá quấn)
- Section title có underline là dây leo thay vì line thẳng

### 10. Micro-interactions

- Hover bất kỳ đâu: đom đóm gần nhất sáng hơn
- Click: burst fairy dust nhỏ
- Scroll: parallax nhẹ giữa các layer
- Card hover: nấm ở góc "nảy" lên, fairy dust burst

---

## Thứ tự thực hiện

1. **Tạo SVG assets mới** (forest layers, card frames, fairy poses, particles) — ~15 files
2. **Refactor ForestScene.jsx** — nhiều layer hơn, parallax, particles dày
3. **Tạo component mới:** ForestPath.jsx (đường đi SVG), WoodSign.jsx (nav), FairyMascot.jsx
4. **Refactor Navbar** — wood sign style
5. **Refactor AboutPage (Hero)** — immersive gate scene
6. **Refactor ProjectsPage** — forest path + trạm nhà nấm
7. **Refactor ConclusionPage** — moonlit clearing
8. **Refactor cards** — vine frame, texture, corner decorations
9. **Tăng particles** — 50+ fireflies, falling leaves, butterflies, fairy dust
10. **Build + responsive test**

**Ước lượng: 10 bước lớn**
