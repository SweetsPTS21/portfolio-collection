# ☁️ Serene Sky Library & AI Clouds — Theme Portfolio Đào Ngọc Khánh

> Đây là tài liệu thiết kế và đặc tả kiến trúc dành riêng cho dự án **khanh-portfolio** của **Đào Ngọc Khánh** — Sinh viên ngành Luật học, Đại học Luật.  
> Concept thiết kế hướng tới **phong cách siêu đáng yêu, nhẹ nhàng (Cute & Dreamy Aesthetic)** nhằm hòa hợp tuyệt đối với tone màu **Baby Blue** chủ đạo theo khuyến nghị của Figma. Dự án kết hợp các **assets 2D lớn đặt ở nền và trong khung card**, được tạo từ công cụ AI Image Gen, kết hợp với chuyển động mượt mà của **Framer Motion** để tạo nên trải nghiệm người dùng sống động, cảm xúc.

---

## 🌟 1. Ý tưởng & Phong cách Thiết kế (Vibe & Concept)

Màu **Baby Blue** (`#89CFF0`) mang trong mình cảm xúc yên bình, trong trẻo, đáng tin cậy. Để làm nổi bật sự đáng yêu và nhẹ nhàng theo đúng nguyện vọng của Khánh, portfolio sử dụng concept **"Thư viện Bầu trời & Mây Công nghệ AI"**. 

Thiết kế tối ưu hóa việc sắp đặt **các khối assets 2D/PNG lớn, trong suốt và siêu dễ thương** làm nền cho các phần (sections) và làm họa tiết trang trí nổi bật trực tiếp bên trong các khung thẻ nội dung (card frames).

```
+--------------------------------------------------------------+
|                         SKY HEADER                           |
|                                                              |
|   ☁️ [Giant Cloud Background Asset]                          |
|                                                              |
|   +--------------------------+    +-----------------------+  |
|   | CARD ABOUT ME            |    | MASCOT OWL            |  |
|   |                          |    |                       |  |
|   |  [Scale of Justice PNG]  |    |  (Chubby white owl    |  |
|   |  Giới thiệu Đào Ngọc     |    |   reading glowing     |  |
|   |  Khánh...                |    |   magic book)         |  |
|   +--------------------------+    +-----------------------+  |
|                                                              |
|   🎧 [Cozy Shuttlecock & Headphone Resting on Cloud Asset]  |
+--------------------------------------------------------------+
```

### Đặc điểm nhận dạng (UI/UX Identity)

| Yếu tố | Đặc tả chi tiết |
| :--- | :--- |
| **Cảm xúc (Vibe)** | Đáng yêu (Kawaii), nhẹ nhàng, bay bổng, tạo cảm giác thư thái và tin cậy học đường. |
| **Bố cục nền (Background)** | Sử dụng các **assets hình minh họa lớn** đặt ở background, áp dụng hiệu ứng dịch chuyển chậm (Parallax) khi cuộn trang. Nền trời Baby Blue chuyển sắc sang kem sữa dập dìu mây trôi. |
| **Khung nội dung (Cards)** | Khung thẻ kính mờ **Glassmorphism** với viền phát sáng mờ ảo. Đặc biệt, **mỗi khung card sẽ chứa một asset 2D lớn đặc trưng** nằm ẩn dưới dạng watermark ở góc card hoặc nổi lên sinh động khi hover. |
| **Mascot (Linh vật)** | **Cloudy Owl / Chú Cú Mây Trắng** 🦉: Chú cú nhỏ tròn trịa lông xốp trắng muốt đeo kính AI và quàng khăn len xanh Baby Blue. Mascot xuất hiện ở dạng PNG chất lượng cao có bóng đổ mềm mại, tương tác sinh động với người dùng. |
| **Chuyển động (Motion)** | Chuyển động vật lý cực kỳ mượt mà sử dụng lò xo (`spring physics`), các thành phần trôi lơ lửng vô tận (`infinite float loop`), hiệu ứng lật trang êm ái, bảo đảm không có cảm giác giật lag. |

---

## 🎨 2. Hệ thống Màu sắc & Typography (Figma Baby Blue Palette)

Bảng màu được phát triển dựa trên sắc độ **Baby Blue** cốt lõi của Figma, kết hợp các tông màu pastel dịu ngọt để tôn vinh sự đáng yêu.

### Bảng màu Ant Design Theme & CSS Variables

```js
// src/theme.js
export const theme = {
  token: {
    colorBgBase: "#F4FAFD",          // Xanh Baby Blue cực nhạt pha sữa (Sky Mist)
    colorBgContainer: "rgba(255, 255, 255, 0.78)", // Nền kính mờ dày dặn, mịn màng (Glass Cloud)
    colorPrimary: "#89CFF0",         // Màu chủ đạo - Figma Baby Blue gốc
    colorTextBase: "#1A3244",        // Màu chữ chính - Deep Navy (Độ tương phản cao chuyên nghiệp)
    colorTextSecondary: "#567A94",   // Màu chữ phụ - Muted Sea
    colorSuccess: "#8AEED2",         // Xanh mint phát sáng (AI Light / Tech Glow)
    colorWarning: "#FFE27A",         // Vàng tinh tú (Starlight Gold / Warning)
    colorError: "#FFAEBE",           // Hồng phấn đáng yêu (Peach Blossom Accent)
    colorBorder: "rgba(137, 207, 240, 0.35)", // Viền xanh mờ dịu thương hiệu
    borderRadius: 24,                // Góc bo cực mềm mại chuẩn phong cách dễ thương
    fontFamily: "'Comfortaa', 'Quicksand', sans-serif",
  },
};
```

### Typography (Phông chữ)
- **Heading (Tiêu đề):** `Comfortaa` — Dạng chữ hình học bo tròn mập mạp, cực kỳ ăn ý với phong cách đáng yêu, gợi đám mây xốp.
- **Body (Nội dung):** `Quicksand` — Thanh lịch, bo tròn nhẹ ở các góc chữ, giúp các đoạn văn bản dài trở nên thanh thoát, dễ thương.

```css
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap");
```

---

## 🏛️ 3. Kiến trúc 3 Trang Điều hướng (3-Page Architecture)

Kiến trúc 3 trang với các assets lớn làm nền tảng bố cục trực quan:

*   **Page 1: Trang Giới thiệu (About Me) — `/` hoặc `/about`**
    *   **Vibe:** Bức tranh thiên đường tri thức dịu mát.
    *   **Bố cục Assets:** Nền trang có asset **Sky Library Background** khổng lồ trôi nhẹ sau card. Card "Về tôi" chứa asset **Cán cân công lý ngọc trai (Scale of Justice)** cực lớn lồng ở góc phải. Chú cú mascot vẫy chào nằm cạnh avatar tròn của Khánh.
    *   **Nội dung:** Hồ sơ học Luật, mục tiêu AI, sở thích cầu lông và âm nhạc lồng ghép đáng yêu dạng "Cloud Bubbles".

*   **Page 2: Trang Dự án (Projects) — `/projects`**
    *   **Vibe:** Thư viện phép thuật đầy màu sắc.
    *   **Bố cục Assets:** Kệ sách mây khổng lồ làm nền. Mỗi card dự án trong số 6 chương là một **cuốn sách mở lớn phát sáng**, bên trong chứa các hình minh họa 2D nhỏ xinh tương ứng với từng chủ đề bài tập (Vụ án số, prompt AI, buổi họp trực tuyến, liêm chính số...). Hover vào card, cuốn sách sẽ mở rộng và mascot Cloudy Owl bay từ trên xuống chỉ dẫn.
    *   **Nội dung:** Mô tả chi tiết tiến trình thực hiện và link download minh chứng 6 chương bài tập của Khánh từ `docs/portfolio.md`.

*   **Page 3: Trang Tổng kết (Conclusion) — `/conclusion`**
    *   **Vibe:** Chân trời rực sáng ánh bình minh hồng đào ấm áp.
    *   **Bố cục Assets:** Một asset **Trời hoàng hôn hồng xanh lớn** bao phủ nền. Chú cú mascot mặc áo cử nhân đứng tự hào cầm bảng tổng kết. Cuối trang là asset **Quả cầu lông cắm giỏ hoa tulip thắt nơ** siêu dễ thương.
    *   **Nội dung:** Đúc kết kỹ năng, chia sẻ về chiến dịch kiểm chứng chéo chống AI ảo giác luật, mục tiêu luật quốc tế và gửi lời tri ân.

---

## 🛠️ 4. Công nghệ Sử dụng (Tech Stack)

*   **React 18 + Vite:** Nền tảng phát triển ứng dụng tối ưu.
*   **Framer Motion:** Động lực chính cho chuyển động mượt mà (nhấn mạnh lò xo `spring` phản hồi nhạy và hiệu ứng `AnimatePresence` chuyển trang không giật lag).
*   **Lucide Icons:** Icon nét vẽ tròn mộc mạc, đáng yêu.
*   **Ant Design 6 + Tailwind CSS 3:** Quản lý theme màu sắc và layout linh hoạt.

---

## 🎨 5. Hệ thống Assets 2D & PNG Minh Họa Lớn (Custom 2D & PNG Assets)

Dự án tích hợp các file PNG chất lượng cao không nền (transparent background) được sinh ra từ công cụ thiết kế chuyên nghiệp kết hợp với SVG vector, tạo nên các lớp ảnh xếp tầng (multi-layered) tuyệt đẹp:

### 🌟 Danh sách Assets chính thức trong dự án:

| Tên File Asset | Định dạng | Vị trí hiển thị | Mô tả hình ảnh chi tiết |
| :--- | :--- | :--- | :--- |
| `sky-library-bg.png` | PNG (Large) | Nền trang About & Projects | Thư viện cổ tích khổng lồ bay trên mây xanh pastel, các cuốn sách xếp lớp màu hồng đào và xanh dương dịu ngọt. |
| `cloudy-owl-mascot.png` | PNG (Mascot) | Hero Section & About Page | Chú cú mây tròn mũm mĩm xốp trắng, quàng khăn len Baby Blue, mắt to tròn lấp lánh đang cầm cuốn sách phép thuật phát sáng. |
| `cloudy-owl-study.png` | PNG (Mascot) | Projects Page | Chú cú mây đang chăm chú nghiên cứu trên máy tính bảng holographic phát sáng, xung quanh có các bụi sao AI màu vàng. |
| `cloudy-owl-graduate.png` | PNG (Mascot) | Conclusion Page | Chú cú quàng khăn mặc áo cử nhân trạng sư đang tự hào cầm chứng nhận kỹ năng số và vẫy tay cười đáng yêu. |
| `scale-of-justice-pearl.png`| PNG (Card) | Card "Nguyên tắc" - Page 1 | Cán cân công lý làm bằng ngọc trai và mây trắng mờ, đung đưa nhè nhẹ, đặt làm watermark lớn bên trong card. |
| `cozy-badminton-resting.png`| PNG (Card) | Card "Sở thích" - Page 1 | Chiếc vợt cầu lông gỗ vintage và quả cầu lông bông xốp tựa vào đệm mây, tai nghe nhạc hồng pastel phát ra các nốt nhạc xanh. |
| `glowing-magic-book.png` | PNG (Card) | Thẻ Dự án - Page 2 | Cuốn sách mở lớn bìa xanh ngọc thắt ruy băng hồng đào phát ra các tia sáng AI, đặt làm nền cho từng card chương. |
| `ai-sparks-dust.svg` | SVG | Toàn bộ ứng dụng | Các hạt bụi sáng AI, ngôi sao 4 cánh màu vàng nắng bay lơ lửng, tạo chiều sâu cho nền trời. |
| `thank-you-tulips.png` | PNG (Large) | Kết trang - Page 3 | Giỏ hoa tulip hồng đào dịu dàng thắt nơ ruy băng lụa lớn màu Baby Blue, bên trong cắm quả cầu lông trắng xinh xắn. |

---

## 🎬 6. Thiết lập Chuyển động Mượt mà (Smooth Motion Rules)

Nhằm đảm bảo giao diện luôn mang cảm giác "sống động và trôi chảy nhẹ nhàng", các chuyển động được thiết lập nghiêm ngặt bằng **Framer Motion**:

1.  **Floating Background Loop (Trôi lơ lửng vô tận):**
    Các asset nền lớn (`sky-library-bg`, `cozy-badminton-resting`, các đám mây) áp dụng hiệu ứng floating mềm mại:
    ```jsx
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    ```
2.  **Spring-based Card Hover (Hover đàn hồi):**
    Khi hover vào các thẻ card, sử dụng phản hồi lò xo thay vì tween tuyến tính để tạo sự đáng yêu, nảy nảy nhẹ như quả cầu lông:
    ```jsx
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    ```
3.  **Smooth Page Slide Transition:**
    Chuyển tiếp giữa 3 trang sử dụng cơ chế trượt mượt mà kèm hiệu ứng mờ nhòe dịu (Soft blur fade).
4.  **Staggered Entrance (Hiện dần theo nhịp):**
    Các thành phần con trong card hiện lên lần lượt với độ trễ ngắn (`staggerChildren: 0.1s`), tạo nhịp điệu chuyển động rất tự nhiên và cao cấp.

---

## 📂 7. Cấu trúc Thư mục Chi tiết (Folder Structure)

```txt
khanh-portfolio/
├── docs/
│   ├── portfolio.md                  # Dữ liệu gốc duy nhất của Khánh
│   ├── avatar.jpg                    # Ảnh chân dung thực
│   └── BT1.pdf -> BT6.pdf            # Minh chứng bài tập thực tế
├── src/
│   ├── main.jsx                      # Entry point
│   ├── App.jsx                       # Bọc ConfigProvider, Layout chính và điều hướng 3 trang
│   ├── theme.js                      # Cấu hình Ant Design theme màu Baby Blue
│   ├── index.css                     # Import Tailwind, font Google và các hiệu ứng toàn cục
│   ├── assets/
│   │   └── theme/                    # Thư mục chứa 9 assets PNG/SVG siêu đáng yêu
│   │       ├── sky-library-bg.png
│   │       ├── cloudy-owl-mascot.png
│   │       ├── cloudy-owl-study.png
│   │       ├── cloudy-owl-graduate.png
│   │       ├── scale-of-justice-pearl.png
│   │       ├── cozy-badminton-resting.png
│   │       ├── glowing-magic-book.png
│   │       ├── thank-you-tulips.png
│   │       └── ai-sparks-dust.svg
│   ├── data/
│   │   └── khanhData.js              # Khai báo dữ liệu lấy từ portfolio.md
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx            # Nav bar dạng viên thuốc mây trong suốt
│   │   │   └── Footer.jsx            # Footer mượt mà Đào Ngọc Khánh
│   │   ├── ui/
│   │   │   ├── CloudyOwl.jsx         # Component cú mascot động tương tác sinh động
│   │   │   ├── CloudCard.jsx         # Card nền kính mờ glassmorphism bo tròn cực đại
│   │   │   └── SparklingBg.jsx       # Hiệu ứng các hạt bụi starlight AI rơi nhẹ
│   │   └── pages/
│   │       ├── AboutPage.jsx         # Trang 1: Giới thiệu bản thân & sở thích
│   │       ├── ProjectsPage.jsx      # Trang 2: Kệ sách phép thuật 6 chương bài tập
│   │       └── ConclusionPage.jsx    # Trang 3: Tổng kết, tri ân & giỏ hoa tulip
│   └── hooks/
│       └── usePrefersReducedMotion.js # Tắt motion cho người dùng nhạy cảm chuyển động
├── package.json
├── vite.config.js
└── README.md                         # File này
```

---

## 🏆 8. Chỉ số Đánh giá Chất lượng (Verification & UX Quality)

*   **Tính Trung thực Tuyệt đối:** Hiển thị chính xác 100% nội dung học tập, sở thích, định hướng AI trong Luật học và nguyên tắc 3 không từ file `docs/portfolio.md`. Không tự bịa thông tin.
*   **Trải nghiệm Di động:** Co giãn linh hoạt, ở mobile nhỏ các assets nền lớn sẽ tự động ẩn hoặc thu nhỏ về 1 cột để đảm bảo không đè lên văn bản, giữ chữ đọc rõ ràng.
*   **Tương tác mượt mà:** Khống chế frame rate mượt mà, giới hạn số lượng hạt bụi sáng `ai-sparks-dust` bay lơ lửng không quá 20 hạt để tránh lag trên thiết bị yếu.
*   **Visual wow-factor:** Thiết kế tạo ấn tượng thị giác cực mạnh ngay từ cái nhìn đầu tiên nhờ sự hiện diện của các minh họa 2D chất lượng cao, hài hòa màu sắc và bố cục rhythm hoàn hảo.
