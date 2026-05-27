# 🌿 Style Catalog — Botanical Leaf Diary Theme (`botanical-leaf-diary`)
## Dành riêng cho `plinh-portfolio`

> **Chủ đề:** Botanical Leaf Diary (Nhật ký Lá xanh)  
> **Cảm hứng:** Sự kết hợp hoàn mỹ giữa tư duy Luật học logic, chặt chẽ (đại diện bởi phong cách Serif học thuật) và tâm hồn tự do, yêu nghệ thuật, hội họa, âm nhạc của Đặng Phương Linh (đại diện bởi các nét vẽ lá cây organic mềm mại, chuyển động sinh động và gam màu thiên nhiên dễ chịu).  
> **Quy chuẩn thiết kế:** Tham chiếu cấu trúc chuẩn của **Catalog 4** (Summer Breeze & Travel Portfolio Themes), tích hợp hệ màu độc bản trích xuất trực tiếp từ file thực tế `pallet.jpg`.

---

## 🎨 1. Hệ Màu Chủ Đạo (Trích xuất từ `pallet.jpg`)

Bảng màu được xây dựng dựa trên sự kết hợp hài hòa giữa các tông xanh lá cây hữu cơ (organic green), màu kem và vàng đất dịu nhẹ để tạo cảm giác tự nhiên, cởi mở, thư thái đúng tinh thần *"nhẹ nhàng, tự do"* của Linh.

| Tên màu | Mã HEX | Vai trò trong hệ thống UI | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| **Leaf** | `#588157` | `colorPrimary` | Màu xanh lá trung tính, dùng làm màu thương hiệu, nút bấm chính, viền tiêu điểm và các điểm nhấn biểu tượng. |
| **White** | `#F5F5F5` | `colorBgBase` | Màu nền tổng thể ứng dụng (Off-white), giảm độ chói của màn hình, tạo bề mặt giấy mỹ thuật cao cấp. |
| **Cream** | `#DAD7CD` | `colorBgContainer` | Màu nền của các container, thẻ dự án, và các khối nội dung lớn. |
| **Beige** | `#A3B18A` | `colorBorder` | Màu xanh xám nhẹ, lý tưởng cho border đường viền, đường phân tách trang nhật ký và các tag phụ. |
| **Moss** | `#3A5A40` | `colorTextBase` | Xanh rêu đậm, màu chữ chủ đạo thay thế cho màu đen cứng nhắc, tạo cảm giác cổ điển, dễ đọc và sang trọng. |
| **Wood Gold** | `#D6A25F` | `colorAccent` | Tông vàng gỗ/nắng lọc qua kẽ lá (lấy cảm hứng từ tone phụ trợ cổ điển), dùng làm điểm nhấn phụ cho các hiệu ứng hover hoặc dấu mộc (stamp). |

### Cấu hình Ant Design Token (`src/theme.js`)

```js
// src/theme.js
export const theme = {
    token: {
        colorBgBase: "#F5F5F5",         // Nền giấy off-white dịu mát
        colorBgContainer: "#DAD7CD",    // Khối Cream tự nhiên
        colorPrimary: "#588157",        // Màu xanh Leaf organic
        colorTextBase: "#3A5A40",       // Chữ màu rêu đậm Moss cực kỳ dịu mắt
        colorTextSecondary: "#588157",  // Chữ phụ Leaf green
        colorSuccess: "#A3B18A",        // Màu Beige thanh bình
        colorWarning: "#D6A25F",        // Màu vàng nắng lọc qua lá (Accent)
        colorError: "#C96A6A",
        colorBorder: "#A3B18A",         // Đường viền mềm mại màu Sage/Beige
        borderRadius: 18,               // Bo góc tròn tự nhiên kiểu chiếc lá
        fontFamily: "'Playfair Display', 'Nunito', serif",
    },
    components: {
        Button: {
            colorPrimary: "#588157",
            colorPrimaryHover: "#3A5A40",
            colorTextLightSolid: "#F5F5F5",
            borderRadius: 24,           // Bo tròn dạng pill dễ thương
        },
        Card: {
            colorBgContainer: "#DAD7CD",
            colorBorderSecondary: "#A3B18A",
            borderRadiusLG: 18,
        },
        Timeline: {
            colorConnector: "#A3B18A",
        }
    }
};
```

---

## ✍️ 2. Typography (Nghệ thuật chữ)

Sự kết hợp giữa 2 trường phái font chữ thể hiện trọn vẹn bản sắc cá nhân:

- **Heading (Tiêu đề):** `Playfair Display` (Serif cổ điển)  
  *Ý nghĩa:* Tượng trưng cho sự trang trọng, nghiêm túc, tính chuẩn xác của một sinh viên ngành **Luật Kinh doanh** Đại học Quốc gia, đồng thời mang hơi hướng các trang sách nhật ký văn học.
- **Body (Nội dung):** `Nunito` (Sans-serif bo tròn nhẹ nhàng)  
  *Ý nghĩa:* Tượng trưng cho phong cách sống phóng khoáng, tự do, thích tự nhiên và cởi mở của Linh. Cực kỳ dễ đọc ở các cỡ chữ khác nhau trên thiết bị di động.

```css
/* src/index.css */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@400;600;700&display=swap");

body {
    background-color: var(--ant-color-bg-base);
    color: var(--ant-color-text-base);
    font-family: 'Nunito', sans-serif;
    margin: 0;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
}
```

---

## 🌊 3. Yếu Tố Nhận Dạng Thương Hiệu

| Yếu tố | Quy chuẩn kỹ thuật & Mỹ thuật |
| :--- | :--- |
| **Cảm xúc** | Trong trẻo, bình yên, tự nhiên, mang đậm nét cá nhân và sự cân bằng giữa học thuật & nghệ thuật. |
| **Hình khối** | Card bo góc tròn rộng 18–24px (giống phiến lá), đường viền nét mỏng vẽ tay (hand-drawn border), trang nhật ký lật mở, khung ảnh lấy cảm hứng từ ép hoa khô thảo mộc (herbarium frame). |
| **Không gian** | Bố cục thoáng đãng, phân cấp rõ ràng bằng khoảng trắng lớn (white space). Sử dụng các nét gạch chân thảo mộc nhẹ nhàng thay cho dòng kẻ ngang cứng nhắc. |
| **Chuyển động** | Chuyển động nhẹ nhàng của các phiến lá rơi chậm (leaf falling slow), bóng nắng xuyên qua kẽ lá lay động nhè nhẹ (sunlight dapple shimmer), trang sách lật nhẹ khi chuyển trang (page-flip transition). |
| **Chất liệu** | Vân giấy sần nhẹ (fine paper grain), vết đốm bột giấy hữu cơ (pulp dots), hoa khô ép trên kính (glassmorphism nhẹ có lớp phủ cây cỏ). |

---

## 🗺️ 4. Kiến Trúc Route 3 Trang (3-Page Route Architecture)

Được chia chuẩn hóa theo đúng cấu trúc nội dung trong [porfolio.md](file:///d:/portfolio/plinh-portfolio/docs/porfolio.md) của Linh, mang lại hành trình trải nghiệm liền mạch:

```
[Main Application]
    ├── (Route / hoặc /about) ─────── Trang Giới Thiệu (About Me)
    ├── (Route /projects) ─────────── Trang Dự Án (Projects - 6 Chương bài tập)
    └── (Route /conclusion) ───────── Trang Tổng Kết & Liên Hệ (Conclusion)
```

---

### 📖 Trang 1: Giới thiệu bản thân (About Me) — `/about` hoặc `/`
*Concept: "Góc Nhỏ Của Phương Linh" - Thiết kế dạng một cuốn sổ tay mở sẵn trên thảm cỏ xanh mát dưới bóng râm.*

- **Hero Area:** 
  - Tiêu đề chào đón mềm mại bằng font `Playfair Display`: *"Xin chào mọi người, mình là Phương Linh đây!"*.
  - Avatar cá nhân ([avatar.jpg](file:///d:/portfolio/plinh-portfolio/docs/avatar.jpg)) đặt trong khung thảo mộc ép kính có bóng đổ nhẹ.
  - Vài nhánh lá xanh đung đưa quanh góc khung ảnh.
- **Khối Thông Tin Cá Nhân (Luật & Tự Do):**
  - Biểu diễn thế giới quan cân bằng: Một bên là sự ngăn nắp nghiêm túc (Lớp K69LKD-C, Ngành Luật Kinh doanh, Đại học Quốc gia Hà Nội), bên còn lại là phong cách sống nhẹ nhàng tự do (nghe nhạc, vẽ tranh lúc rảnh rỗi, cày game xả stress).
  - Có các tag hình lá đại diện cho từng sở thích: 🎧 Music, 🎨 Painting, 🎮 Gaming.
- **Mục tiêu & Nguyên tắc (Principles):**
  - Trình bày dạng các thẻ giấy kẹp (sticky note) màu Cream ghim lên trang nhật ký.
  - Làm nổi bật nguyên tắc **"Tôn trọng chất xám - Tự nghĩ, tự làm"** bằng một khung viền chấm đứt màu Beige và dấu mộc biểu tượng lá cây khẳng định bản sắc cá nhân.

---

### 🍃 Trang 2: Hành trình học tập (Projects) — `/projects`
*Concept: "Vườn Tri Thức Thảo Mộc" - Mỗi bài tập/chương học là một "phiến lá" độc bản được phân loại và bảo quản khoa học.*

Nội dung hiển thị trọn vẹn 6 chương bài tập thực hành từ tài liệu, mỗi chương được thiết kế như một tiêu bản thực vật nghệ thuật trong bộ sưu tập (specimen catalog):

1. **Chương 1: Tổ chức, sắp xếp và lưu trữ dữ liệu** (Tiêu điểm: Cấu trúc logic phân tầng, gọn gàng, hiệu suất).
2. **Chương 2: Khai thác dữ liệu và thông tin** (Tiêu điểm: Quy trình tìm kiếm nghiêm ngặt, chuẩn mực trích dẫn Harvard).
3. **Chương 3: Tổng quan về trí tuệ nhân tạo** (Tiêu điểm: Đánh giá tư duy độc lập trước máy học - AI chỉ đóng vai trò hỗ trợ).
4. **Chương 4: Giao tiếp và hợp tác trong môi trường số** (Tiêu điểm: Không khí nhã nhặn, kỷ luật, vai trò điều phối nghiên cứu).
5. **Chương 5: Sáng tạo nội dung số** (Tiêu điểm: Tính chuẩn xác pháp lý kết hợp tư duy thẩm mỹ cao).
6. **Chương 6: An toàn và liêm chính học thuật** (Tiêu điểm: Sơ đồ hệ thống hóa các giới hạn hành vi trên không gian mạng).

**Cách bài trí UI:**
- Bố trí dạng lưới **Specimen Grid (2 hoặc 3 cột)**. Mỗi dự án là một thẻ giấy có gáy bấm, góc đính sticker lá khô ép.
- Mỗi card gồm: Số chương nghệ thuật (Ví dụ: `Chương 01`), Tiêu đề chương học, Mục tiêu, Quá trình thực hiện thực tế (được rút trích từ tài liệu).
- Bên cạnh là đường link trích xuất các tệp minh chứng thực tế có trong thư mục `docs/`: [Bt1.pdf](file:///d:/portfolio/plinh-portfolio/docs/Bt1.pdf), [Bt2.pdf](file:///d:/portfolio/plinh-portfolio/docs/Bt2.pdf), v.v. Các nút tải PDF được thiết kế dạng nút gỗ tròn xinh xắn.

---

### 🕯️ Trang 3: Tổng kết & Định hướng (Conclusion) — `/conclusion`
*Concept: "Chiếc Lá Sau Cùng - Tầm Nhìn Tương Lai" - Góc nhìn chiêm nghiệm bình yên, kết thúc hành trình bằng năng lượng tích cực.*

- **Những kỹ năng gặt hái được:** Trình bày dạng một mạng lưới rễ cây phát triển hoặc timeline cổ điển liên kết các quả ngọt tri thức (truy xuất dữ liệu, Prompt Engineering, kỹ năng điều hành hội thảo trực tuyến...).
- **Tâm đắc & Thách thức:** 
  - Khối tâm đắc: *"Tích hợp thành công tư duy nghệ thuật tự do vào cấu trúc logic nghiêm ngặt của luật học"*.
  - Khối thách thức: Sự cẩn trọng tuyệt đối đối chiếu văn bản quy phạm pháp luật trước thông tin AI.
  - Sử dụng layout so sánh song song cực kỳ cân đối.
- **Định hướng tương lai (Future Vision):**
  - Lời cam kết phát triển bền vững đặt trong một khung văn bản trang trọng có ký tên số của Đặng Phương Linh.
  - Nút chuyển động đặc biệt **"Gửi thư cho Linh"** thiết kế dạng chiếc lá phong kẹp phong thư, dẫn ra form liên hệ tinh gọn với nền màu Cream ấm cúng.

---

## 🛠️ 5. Hướng Dẫn Sử Dụng Thư Viện & Animation

| Thư viện | Vai trò cụ thể trong theme `botanical-leaf-diary` | Cách thức triển khai |
| :--- | :--- | :--- |
| **React Motion** | Tạo hiệu ứng mượt mà hữu cơ (organic springs). | Áp dụng cho các hiệu ứng xuất hiện (entrance animation) của thẻ bài viết, trang giấy lật mở, tạo cảm giác thẻ có trọng lượng vật lý nhẹ nhàng giống như lá rơi chạm đất. |
| **Ant Design Component** | Cung cấp cấu trúc nền tảng và tương tác nâng cao. | Sử dụng hệ thống Grid, Modal xem chi tiết file PDF, Timeline kể chuyện học tập, và các Tag màu gỗ/lá. |
| **Tailwind CSS** | Định vị bố cục nhanh chóng và quản lý khoảng cách. | Tuyệt đối không dùng Tailwind để khai báo màu, chỉ dùng các lớp tiện ích như `flex`, `grid`, `gap-6`, `p-8`, `leading-relaxed` để giữ mã nguồn cực sạch. |
| **CSS Keyframes** | Xử lý các trang trí nhẹ nhàng chạy liên tục ở chế độ chờ (idle background). | - Hiệu ứng bóng nắng lay động: Dùng mặt nạ lọc ảnh nhẹ (`opacity` biến thiên từ `0.4` đến `0.7` chu kỳ 8 giây).<br>- Lá cây đung đưa: `rotate` nhẹ ±3 độ với tâm quay đặt ở cuống lá. |

---

## 📂 6. Cấu Trúc Mã Nguồn Chuẩn (`src/`)

```
plinh-portfolio/
├── README.md                           ← File này (Quy định kiến trúc & theme)
├── docs/
│   ├── porfolio.md                     ← Nội dung chi tiết của Linh
│   ├── pallet.jpg                      ← Ảnh bảng màu mẫu
│   ├── avatar.jpg                      ← Ảnh chân dung
│   └── Bt1.pdf ... Bt6.pdf             ← Các tệp tài liệu thực tế của môn học
│
├── src/
│   ├── main.jsx                        ← Điểm khởi chạy React
│   ├── App.jsx                         ← Bọc ConfigProvider + Định nghĩa Route (about, projects, conclusion)
│   ├── theme.js                        ← Khai báo Design Token Antd
│   ├── index.css                       ← Khai báo Tailwind, font Google, animation global
│   │
│   ├── data/
│   │   └── portfolioData.js            ← Toàn bộ dữ liệu chữ từ docs chuyển thành cấu trúc JS dạng mảng/đối tượng
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BotanicalNav.jsx        ← Thanh điều hướng hình nhánh cỏ mềm mại, có chỉ báo trang hiện tại
│   │   │   ├── NatureFooter.jsx        ← Chân trang với biểu tượng lá rụng nhẹ nhàng
│   │   │   └── PageWrapper.jsx         ← Khung bao bọc chuyển trang mượt mà bằng React Motion
│   │   │
│   │   ├── sections/
│   │   │   ├── AboutHero.jsx           ← Khối giới thiệu kèm avatar gỗ kính
│   │   │   ├── ProjectCard.jsx         ← Thẻ dự án thảo mộc ép khô độc đáo
│   │   │   └── ConclusionSign.jsx      ← Khối tổng kết ký tên trang trọng
│   │   │
│   │   └── ui/
│   │       ├── LeafDecoration.jsx      ← Animation lá rụng trang trí chạy nền
│   │       ├── HandDrawnTitle.jsx      ← Tiêu đề với nét gạch dưới tự nhiên hình nhánh cây
│   │       └── PulpCard.jsx            ← Card nền Cream giả vân giấy có chấm đốm nhẹ
│   │
│   └── assets/
│       └── botanical/                  ← Thư mục chứa các file SVG tự thiết kế
```

---

## 🎨 7. Danh Sách 8 File Vector (SVG) Tự Vẽ Cần Có

Để đạt được chất lượng hiển thị đẳng cấp nghệ thuật và độ phản hồi cao, dự án sẽ sử dụng 8 file SVG thiết kế riêng biệt theo tone màu chủ đạo:

1. **`botanical-bg-dapple.svg`**: Khối đa giác chuyển màu mềm (Gradient mesh) từ xanh lá nhạt sang kem giấy, giả lập ánh nắng chiếu qua vòm cây. Dùng làm background cho trang chủ.
2. **`leaf-falling-set.svg`**: Tập hợp 4 pose lá cây khác nhau (lá phong nhạt, lá cọ nhỏ, phiến lá trà mỏng) màu `#A3B18A`. Dùng để làm hiệu ứng rơi tự do nhẹ nhàng ở góc màn hình.
3. **`hand-drawn-dividers.svg`**: Các nét phân chia phần học thuật bằng nét phác thảo cọ vẽ tay hình nhánh cây nhỏ mảnh màu `#588157`.
4. **`herbarium-frame.svg`**: Khung viền kính mỏng bo góc, điểm xuyết vài nhành cỏ ép khô tinh tế ở mép. Dùng bao quanh ảnh avatar cá nhân.
5. **`legal-leaf-seal.svg`**: Hình con dấu cổ điển hình tròn dạng sáp, ở giữa có hình cán cân công lý lồng trong nhánh nguyệt quế, màu `#D6A25F`. Dùng để khẳng định tinh thần Luật học nghệ thuật ở trang 1 và trang 3.
6. **`specimen-paper-clips.svg`**: Biểu tượng kẹp giấy, ghim cài giấy kiểu cổ điển bằng đồng màu `#D6A25F` để cài các thẻ học tập ở Trang 2.
7. **`nav-leaf-indicator.svg`**: Nhành cỏ nhỏ uốn lượn dưới các menu điều hướng đang active của thanh Nav.
8. **`sprout-timeline-node.svg`**: Điểm nút của Timeline ở trang Tổng kết, thiết kế dạng hạt mầm xanh nho nhỏ đang vươn lên qua từng chặng học tập.

---

## 🚨 8. Quy Định Triển Khai Bắt Buộc (Critical Rules)

1. **Trung thành tuyệt đối với dữ liệu nguồn:** 
   - Chỉ hiển thị chính xác các thông tin có trong file `porfolio.md` của Linh. Không tự ý bịa ra các kỹ năng công nghệ nâng cao hay kinh nghiệm làm việc khác nếu tài liệu gốc không mô tả.
2. **Không dùng màu sắc mặc định:**
   - Tuyệt đối cấm sử dụng các màu cơ bản thô cứng (đỏ, xanh lam nguyên bản, đen đậm). Mọi thành phần hiển thị bắt buộc phải đi qua Ant Design Theme Token hoặc dùng biến CSS trỏ tới bảng màu ở mục 1.
3. **Thiết kế Mobile-First đẳng cấp:**
   - Khi co màn hình về Mobile, cuốn sổ tay hoặc speciment grid sẽ tự động chuyển thành cấu trúc 1 cột dọc thẳng thớm tinh gọn, đảm bảo không có chi tiết tràn màn hình, kích thước chữ co giãn thông minh.
4. **Tương thích Chế độ Giảm chuyển động (Reduced Motion):**
   - Hỗ trợ đầy đủ truy vấn `@media (prefers-reduced-motion: reduce)` để tắt hoàn toàn hiệu ứng lá bay nền hoặc bóng nắng đung đưa đối với người dùng nhạy cảm với chuyển động, thay bằng hình nền tĩnh thanh lịch.
