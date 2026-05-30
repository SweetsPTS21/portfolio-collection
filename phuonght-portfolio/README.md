# 🎀 `kawaii-stationery-room` — Kawaii Stationery Room Portfolio

Portfolio được thiết kế như một căn phòng văn phòng phẩm dễ thương và sinh động: chiếc bàn học pastel ấm áp dưới ánh nắng ban mai rủ qua cửa sổ mềm, các sticker dễ thương được dán khéo léo, những dải băng keo washi nhiều hoa văn sắc màu, cùng các trang sổ tay học tập được ghim cẩn thận bằng kẹp giấy hình trái tim. 

Sự kết hợp hoàn hảo giữa phong cách **Kawaii Stationery** rực rỡ ngọt ngào với nét tính cách **nhẹ nhàng, sâu lắng, cẩn trọng** của chủ nhân tạo nên một không gian lưu trữ học thuật vô cùng độc đáo, sinh động nhưng vẫn rất kỷ luật, logic.

---

## 👩‍💼 Thông tin chủ nhân

- **Họ và tên:** Hoàng Thu Phương
- **Mã sinh viên:** 24062033
- **Ngành học:** Luật chất lượng cao
- **Trường:** Đại học Luật - Đại học Quốc gia Hà Nội (ĐHQGHN)
- **Sở thích:** Tìm kiếm sự bình yên qua việc nghe nhạc, xem phim và nấu ăn để tự tay chăm sóc bản thân cũng như những người xung quanh.
- **Phong cách cá nhân:** Nhẹ nhàng, sâu lắng. Thích làm việc từ tốn, cẩn thận, luôn lắng nghe và quan sát để hiểu thấu đáo bản chất của vấn đề thay vì vội vàng đánh giá bề ngoài.

---

## 🎨 Đặc điểm nhận dạng & Vibe thiết kế

| Yếu tố | Mô tả |
| :--- | :--- |
| **Cảm xúc** | Dễ thương (cute), ấm áp, cẩn thận, sáng tạo, mang đậm dấu ấn cá nhân thủ công (handmade). |
| **Hình khối** | Sổ tay lò xo bo tròn (notebook card), thẻ bài tập đính kèm kẹp giấy, nhãn sticker xé góc mềm mại, băng keo washi trang trí viền, giấy note ghi nhớ (sticky notes). |
| **Không gian** | Bàn học gỗ pastel mộc mạc dưới ánh sáng cửa sổ đổ bóng xiên dịu ngọt, bảng ghim bần (corkboard), bụi hạt lấp lánh (sparkle particles) bay lơ lửng lung linh. |
| **Chuyển động** | Hiệu ứng bóc sticker (sticker peel) đàn hồi, nét bút gel tự vẽ viền (pen doodle draw), trang giấy bay nhẹ (paper float), băng keo washi uốn lượn (washi curl), hạt lấp lánh tỏa sáng (desk sparkle). |
| **Điểm nhấn thị giác** | **Assets trang trí siêu lớn (200-500px)** cực kỳ sắc nét ở nền sau, các thẻ trang trí đa dạng sống động, hiệu ứng ánh nắng lấp lánh lung linh cùng các nét vẽ nguệch ngoạc sinh động. |

---

## ✨ Concept chủ đạo: Kawaii Stationery Study Space

Giao diện được xây dựng trên ý tưởng **một góc bàn học tập chuyên ngành Luật** được sắp xếp ngăn nắp, gọn gàng nhưng đầy tính nghệ thuật sáng tạo. 

**Nền (Background) chính là điểm nhấn nghệ thuật lớn nhất** của cả trang web, được tạo nên từ nhiều tầng lớp chuyển động (Parallax Layers) độc lập kết hợp hiệu ứng ánh sáng lung linh rực rỡ:

```
Layer 1 (Xa nhất): Nền phòng học với vệt ánh sáng cửa sổ (window light rays) lung linh chuyển động mượt mà.
Layer 2: LARGE DECORATIVE ASSETS — Các vật dụng bàn học kích thước lớn (200px - 500px) thay đổi độc đáo theo từng Route.
Layer 3: Bảng ghim bần (corkboard layer) treo các sticker hoạt hình và ghi chú bay lơ lửng nhẹ nhàng.
Layer 4: Lớp bụi hạt sáng lung linh (desk sparkle particles) lấp lánh bay ngẫu nhiên và xoay nhẹ.
Layer 5: Nét bút chì vẽ nguệch ngoạc (doodle path lines) tự vẽ chạy dọc theo bố cục trang web.
Layer 6 (Gần nhất): Nội dung giao diện chính (Sổ tay notebook cards, sticky notes, navigation).
```

### 🧸 Assets trang trí cực lớn (Focal Point Assets) theo từng Route:
Mỗi route sở hữu bộ assets trang trí lớn được vẽ bằng SVG vector sắc nét, giúp định hình không gian riêng biệt, tạo sự bất ngờ và ấn tượng mạnh mẽ cho người xem:

| Route | Tên Asset lớn | Kích thước | Bố cục / Vị trí | Chuyển động (Animations) |
| :--- | :--- | :--- | :--- | :--- |
| `/about` | **Cửa sổ đón nắng mai** | 500px | Góc trên bên trái | Tia nắng lấp lánh ánh xà cừ nhạt, chuyển dịch nhẹ nhàng. |
| `/about` | **Bàn học gỗ sồi pastel** | 450px | Trải dọc bên dưới | Hiệu ứng vân gỗ mịn màng nâng đỡ giao diện chính. |
| `/about` | **Hộp bút hình mèo ngủ** | 250px | Góc dưới bên phải | Đuôi mèo cử động nhẹ nhàng, các cây bút gel nhô lên nhịp nhàng. |
| `/about` | **Kệ sách gỗ mini** | 300px | Góc trên bên phải | Các cuốn sách Luật dày cộp được bo viền dễ thương, thỉnh thoảng phát sáng nhẹ. |
| `/projects`| **Bảng ghim bần khổng lồ** | 480px | Trung tâm nền sau | Ghim gỗ tự xoay nhẹ khi cuộn trang, các sợi dây treo ảnh đung đưa. |
| `/projects`| **Sổ lò xo ghi chép lớn** | 500px | Ôm trọn vùng lưới | Các vòng lò xo kim loại lấp lánh ánh kim, co giãn nhẹ khi hover. |
| `/projects`| **Đĩa bánh Macarons dâu** | 220px | Góc dưới bên trái | Hơi ấm từ đĩa bánh bay lên thành những đám mây tròn nhỏ cute. |
| `/projects`| **Bình hoa cúc họa mi** | 280px | Góc dưới bên phải | Cánh hoa lay nhẹ theo nhịp cuộn trang, nhụy hoa lấp lánh. |
| `/conclution`| **Tách trà chiều nóng hổi** | 260px | Góc dưới bên trái | Làn khói bốc lên uốn lượn hình trái tim mượt mà bay lơ lửng. |
| `/conclution`| **Hộp quà thắt nơ ruy băng** | 300px | Góc trên bên phải | Dải ruy băng thắt nơ uốn lượn bay bổng, tỏa ra bụi phấn lấp lánh. |
| `/conclution`| **Kẹp bướm vàng trang trí** | 200px | Góc trên bên trái | Cánh bướm kim loại vàng lung linh vỗ nhẹ đều đặn 6 giây một lần. |

---

## 🎨 Bảng màu & Typography

Bảng màu sử dụng hệ màu pastel dễ thương của thế giới stationery, dịu mắt nhưng vẫn rực rỡ tràn đầy sức sống và bảo đảm độ tương phản đọc cực tốt:

```javascript
// src/theme.js
export const theme = {
  token: {
    colorBgBase: "#FFF9FD",          // Màu nền blush hồng phấn mềm ấm nhất
    colorBgContainer: "#FFFFFF",     // Trắng tinh khiết cho các trang giấy bên trong
    colorPrimary: "#FF75B8",         // Hồng bút dạ quang ngọt ngào chủ đạo
    colorTextBase: "#30283F",        // Tím mực khô trầm ấm, dễ chịu, chống mỏi mắt
    colorTextSecondary: "#756981",   // Tím bút mực nhạt cho mô tả phụ
    colorSuccess: "#78E8C6",         // Xanh bạc hà của sticky note thành công
    colorWarning: "#FFE06F",         // Vàng mật ong ngọt ngào làm điểm nhấn
    colorInfo: "#91D7FF",            // Xanh bút gel pastel tươi mát
    colorBorder: "#FFD1EA",          // Viền hồng phấn kẹo ngọt mềm mại
    borderRadius: 16,                // Bo tròn 16px cực xinh xắn
    fontFamily: "'Nunito', 'Patrick Hand', sans-serif",
  },
};
```

### 📝 Các biến màu CSS (CSS Custom Properties):
* `--stationery-blush: #FFF9FD;` — Nền hồng phấn dịu ngọt nhẹ nhàng.
* `--marker-pink: #FF75B8;` — Điểm nhấn màu hồng nổi bật.
* `--mint-note: #78E8C6;` — Xanh pastel mát dịu.
* `--sunny-sticky: #FFE06F;` — Vàng nắng trang nhã.
* `--pen-blue: #91D7FF;` — Xanh dương trong trẻo.
* `--lavender-paper: #C9B3FF;` — Tím pastel oải hương.
* `--coral-sticker: #FF9A9A;` — Đỏ san hô rực rỡ.
* `--ink-soft: #30283F;` — Màu chữ tím đậm dễ chịu.
* `--washi-border: #FFD1EA;` — Biên giới washi ngọt ngào.

### ✍️ Typography hệ chữ viết tay:
* **Tiêu đề & Nhãn trang trí:** Sử dụng Google Font `Patrick Hand` tạo cảm giác nét chữ viết tay mềm mại, tự nhiên, mộc mạc và chân thực.
* **Nội dung văn bản:** Sử dụng Google Font `Nunito` thân thiện, hiện đại, các nét được bo tròn dễ thương, bảo đảm tính dễ đọc tối đa cho các văn bản Luật học thuật chuyên sâu.

```css
@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Nunito:wght@400;600;700;800&display=swap");
```

---

## 🛠️ Công nghệ tích hợp (Tech Stack)

Sub-project được xây dựng bằng những công nghệ hiện đại hàng đầu nhằm đem lại hiệu năng tối đa cùng trải nghiệm visual lung linh sống động nhất:

* **React 18**: Thư viện xây dựng giao diện người dùng theo component.
* **Framer Motion**: Thư viện tạo chuyển động mạnh mẽ cho các tương tác xé washi, bóc sticker, di chuột đàn hồi, và lật trang sổ.
* **Lenis**: Xử lý cuộn trang mượt mà (smooth scroll), làm nền tảng cho hiệu ứng chiều sâu cuộn ảnh (parallax scroll).
* **Lucide React (lucide-icons)**: Bộ icon phong cách vẽ nét mảnh, đồng bộ hoàn hảo với nét bút gel của giao diện.
* **Vite (latest)**: Trình xây dựng và chạy dự án siêu tốc.
* **Vanilla CSS**: Quản lý các hiệu ứng bụi sáng lung linh, tia nắng chuyển màu tự nhiên, mang lại sự linh hoạt tuyệt đối.

---

## 🗂️ Kiến trúc 3 Routes chuẩn (Giống `yenvi-portfolio`)

Dự án tuân thủ nghiêm ngặt kiến trúc 3 Routes của hệ thống, sử dụng `react-router-dom` kết hợp chuyển trang hoạt ảnh mềm mại:

```
[ ✍️ Về Tôi (/about) ]  ━━━━━━━▶  [ 📂 Bài Tập (/projects) ]  ━━━━━━━▶  [ ✨ Kết Luận (/conclution) ]
```

### 1. Route `/about` — `StationeryAboutPage` (Về tôi)
* Bố cục như một **cuốn sổ tay nghiên cứu Luật mở rộng** đặt trên chiếc bàn gỗ ấm áp.
* Ảnh chân dung cá nhân (avatar) nằm trên khung ảnh kẹp giấy phân cực Polaroid, dán chéo tinh nghịch bằng băng keo washi kẻ caro hồng.
* **Các thẻ thông tin độc đáo sinh động:**
  * **Personal Card:** Thẻ thông tin cá nhân thiết kế như một thẻ học sinh/sinh viên đáng yêu có in chìm mã số sinh viên `24062033` cùng con dấu dễ thương.
  * **Interests Card:** Thiết kế như một chiếc đĩa bánh ngọt ngào chứa 3 chiếc bánh quy, hover vào mỗi chiếc bánh quy sẽ hiện lên sở thích (Nghe nhạc, Xem phim, Nấu ăn).
  * **Style & Mindset Card:** Tờ giấy thi chuyên ngành Luật được kẻ dòng thẳng tắp, viết tay kiểu chữ từ tốn cẩn thận của một sinh viên Luật chất lượng cao trầm tĩnh.
  * **Toolbox Area:** Hộp bút thêu tay bằng vải mờ chứa các "cây bút màu" đại diện cho những công cụ quen thuộc: File Explorer, Google Drive, Gemini, Claude, Zalo, Discord, Canva.

### 2. Route `/projects` — `StickerProjectsPage` (Danh sách bài tập)
* Bố cục một **bảng ghim bần (corkboard) chứa 6 tờ giấy note/sticker lớn** đại diện cho 6 chương bài tập thực hành.
* Mỗi bài tập là một thẻ trang trí độc đáo riêng biệt với màu sắc khác nhau, được đính bằng các ghim màu sắc sinh động:
  * **Chương 1 (Tổ chức lưu trữ):** Thẻ sổ lưu bút màu xanh mint dịu mát đính kẹp giấy trái tim Lucide `FolderOpen`.
  * **Chương 2 (Khai thác dữ liệu):** Thẻ thư viện số màu xanh lam pastel đính kính lúp Lucide `Search` thanh lịch.
  * **Chương 3 (Trí tuệ nhân tạo):** Thẻ nghiên cứu AI màu tím pastel đính biểu tượng bộ não Lucide `Brain` nhấp nháy ánh sáng tri thức.
  * **Chương 4 (Giao tiếp số):** Thẻ biên bản họp nhóm màu vàng ấm áp đính biểu tượng camera họp trực tuyến Lucide `Video`.
  * **Chương 5 (Sáng tạo nội dung):** Thẻ infographic rực rỡ màu hồng san hô đính bảng màu nghệ thuật Lucide `Palette` lộng lẫy.
  * **Chương 6 (An toàn số):** Thẻ liêm chính học thuật màu đỏ hồng nhẹ đính chiếc khiên bảo vệ Lucide `Shield` vững chãi.
* Hover vào bất kỳ thẻ dự án nào sẽ tạo hiệu ứng **sticker peel (bóc góc đàn hồi)** sinh động và vệt bút gel vẽ viền rực sáng lung linh quanh hộp.

### 3. Route `/conclution` — `NotebookConclutionPage` (Tổng kết chặng đường)
* Bố cục như **trang cuối cùng của cuốn sổ tay học tập**, khép lại hành trình đầy ý nghĩa.
* Gồm các khối nội dung được dán bằng washi tape chéo tinh tế:
  * **Trải nghiệm thay đổi:** Đúc kết bằng nét chữ viết tay nhẹ nhàng, công nghệ như người trợ lý tĩnh lặng sắp xếp khối tài liệu Luật khổng lồ.
  * **Hành trang quý giá:** Thiết kế dạng danh sách học tập (checklist) có đánh dấu tick hình ngôi sao nhỏ lung linh.
  * **Thách thức:** Chiếc nhãn sticker xé góc màu cam đào biểu trưng cho những khó khăn đã vượt qua.
  * **Định hướng:** Những vệt highlight xanh lá dịu mát vẽ đường đi tới tương lai.
* Điểm kết thúc là một **thiệp cảm ơn đặc biệt tự bung tỏa ra bụi phấn lấp lánh lung linh** khi người dùng kéo xuống cuối trang.

---

## 🎞️ Quy tắc chuyển động & Hiệu ứng lung linh (Animation & Sparkling Rules)

Hệ thống hoạt ảnh được chia phân vai rõ ràng để tối ưu hóa hiệu năng, tạo cảm giác mượt mà sang trọng nhất:

| Hoạt động | Hiệu ứng thị giác | Kỹ thuật triển khai |
| :--- | :--- | :--- |
| **Tải trang (Page Intro)** | Cuốn sổ tay lật mở từ tâm, các sticker nhỏ bay từ ngoài vào và hạ cánh nhẹ nhàng với hiệu ứng spring. | Framer Motion (Stagger, Scale, Rotate) |
| **Di chuột qua Card** | Card nẩy nhẹ lên `translateY(-6px)`, bóng đổ mờ rộng ra, chiếc ghim kẹp giấy lắc nhẹ `rotate(±12deg)`. | Framer Motion & CSS Transition |
| **Bóc Sticker** | Góc nhãn sticker cuộn cong lên 20 độ, đổ bóng sâu hơn tạo cảm giác 3D tách biệt khỏi mặt giấy. | CSS Keyframes & SVG path morphing |
| **Hạt lấp lánh (Sparkle)** | Các bụi hạt sáng 4 cánh lung linh đổi màu pastel nhấp nháy, trôi nổi chậm ở nền bàn học. | CSS `@keyframes twinkle-glow` & opacity shift |
| **Nét bút vẽ viền** | Khi card xuất hiện, nét bút gel tự động vẽ viền trang trí chạy xung quanh card cực kỳ sinh động. | CSS `stroke-dashoffset` draw animation |
| **Cuộn trang Parallax** | Bảng ghim dịch chuyển tốc độ `0.15x`, các hạt sáng bay `0.4x`, cuốn sổ tay dịch chuyển `1x` tạo chiều sâu cực mạnh. | Lenis + Framer Motion Scroll Progress |

---

## 📂 Cấu trúc mã nguồn chuẩn (Architecture)

Kiến trúc thư mục tuân thủ tuyệt đối quy định cấu trúc của `yenvi-portfolio`, đảm bảo tính rõ ràng, dễ bảo trì:

```txt
phuonght-portfolio/
├── docs/
│   ├── avatar.jpg                      ← Ảnh chân dung thật của Phương
│   ├── bt1.pdf đến bt6.pdf             ← File minh chứng bài tập thực tế
│   └── portfolio.md                    ← Nguồn dữ liệu thực tế duy nhất
│
├── src/
│   ├── app/
│   │   ├── App.jsx                     ← Điểm khởi đầu, cấu hình Lenis + Shell
│   │   ├── routeConfig.jsx             ← Định nghĩa 3 routes (/about, /projects, /conclution)
│   │   ├── AnimatedRoutes.jsx          ← Xử lý AnimatePresence mượt mà khi chuyển trang
│   │   └── theme.js                    // Design tokens hệ Kawaii Stationery
│   │
│   ├── assets/
│   │   └── kawaii-stationery-room/     ← Thư mục chứa 8 file SVG lớn nhỏ tự vẽ
│   │       ├── stationery-desk-room.svg
│   │       ├── sticker-sheet-set.svg
│   │       ├── washi-tape-frames.svg
│   │       ├── gel-pen-doodle-set.svg
│   │       ├── sticky-note-memo-cards.svg
│   │       ├── paperclip-charm-icons.svg
│   │       ├── desk-sparkle-particles.svg
│   │       └── stationery-tool-icons.svg
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── StationeryNav.jsx       ← Thanh điều hướng kẹp giấy dễ thương cố định
│   │   │   └── StationeryShell.jsx     ← Bao bọc các layer nền parallax của bàn học
│   │   └── ui/
│   │       ├── NotebookCard.jsx        ← Thẻ sổ tay có gạch dòng học tập
│   │       ├── GelPenButton.jsx        ← Nút bấm hình chiếc bút gel sáng lung linh
│   │       ├── WashiTag.jsx            ← Thẻ danh mục phong cách băng dính washi
│   │       └── StickerBadge.jsx        ← Nhãn dán sticker xé góc xinh xắn
│   │
│   ├── data/
│   │   └── portfolioData.js            ← Chứa 100% dữ liệu thực từ docs/portfolio.md
│   │
│   ├── pages/
│   │   ├── StationeryAboutPage.jsx     ← Route /about
│   │   ├── StickerProjectsPage.jsx     ← Route /projects
│   │   └── NotebookConclutionPage.jsx  ← Route /conclution
│   │
│   ├── index.css                       ← Tailwind + import font viết tay + sparkle animations
│   └── main.jsx                        ← Điểm neo React vào DOM
│
├── package.json                        ← Khai báo React 18, Framer Motion, Lenis, Lucide-react
├── vite.config.js                      ← Cấu hình Vite
└── index.html                          ← Chứa thẻ meta SEO + liên kết font Google
```

---

## 🔒 Yêu cầu triển khai bắt buộc (Implementation Rules)

1. **Cam kết dữ liệu thực tuyệt đối**: AI chỉ được phép render nội dung văn bản lấy trực tiếp từ `docs/portfolio.md`. Nghiêm cấm hoàn toàn mọi hình thức tự vẽ ra dữ liệu giả, chèn văn bản "Lorem Ipsum" hoặc bỏ sót bất kỳ thông tin cá nhân nào của chủ nhân Hoàng Thu Phương.
2. **Tuyệt đối trung thành với Theme**: Phải thể hiện xuất sắc không khí học tập thủ công dễ thương của `kawaii-stationery-room`. Không sử dụng các màu phẳng nhạt nhẽo hay các card xám xịt thông thường. Mọi nút bấm, khung viền đều phải mang hình dáng văn phòng phẩm (washi, pen, sticker, clip).
3. **Hiệu ứng lung linh nhưng hiệu năng tốt**: Giới hạn số lượng hạt sáng lấp lánh (`desk-sparkle-particles`) hiển thị đồng thời từ 15 đến 25 hạt. Sử dụng `will-change: transform` cho các assets lớn uốn lượn để tránh hiện tượng sụt giảm FPS trên các thiết bị cấu hình trung bình.
4. **Hỗ trợ tối đa cho trải nghiệm giảm chuyển động**: Tích hợp đầy đủ CSS Media Query `prefers-reduced-motion` để tự động tắt hoàn toàn hoạt ảnh bay lơ lửng của các hạt sáng, chuyển động bay của giấy note đối với người dùng dễ bị say chuyển động.
5. **Thiết kế co giãn (Responsive)**: Trên thiết bị di động nhỏ, các cột bài tập sẽ tự động dồn về 1 cột dọc mượt mà để dễ dàng đọc tài liệu Luật, thanh nav kẹp giấy chuyển đổi tinh tế thành dải washi đính cố định ở đáy màn hình (Bottom Nav Bar) để thuận tiện cho ngón cái thao tác.

---
*Cập nhật và hoàn thiện lần cuối bởi Antigravity AI trợ lý thiết kế.*
