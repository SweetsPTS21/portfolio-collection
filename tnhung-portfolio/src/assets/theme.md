# Theme Design — tnhung-portfolio

## 1. Tổng quan phong cách

**Concept chính:** "Không gian số mơ mộng" — Pastel Y2K Glassmorphism / Kawaii Futuristic Digital UI
Sự kết hợp hoàn hảo giữa công nghệ tương lai mang phong cách những năm 2000 (Y2K) và sự ngọt ngào, nữ tính của tông màu soft pastel. Giao diện được thiết kế giống như một hệ điều hành ảo hay một màn hình Hologram cá nhân, nơi các yếu tố kỹ thuật số như đường mạch, khung HUD, và các hành tinh trôi nổi được thể hiện qua các đường nét mảnh mai, dịu dàng, trong suốt như pha lê.

**Khác biệt cốt lõi:**
*   Khung viền bo góc lớn (`border-radius: 24px` đến `32px`) tạo cảm giác mềm mại, dễ thương.
*   Hiệu ứng kính mờ (Glassmorphism) cao với nền trong suốt và viền phát sáng nhẹ (Soft Glow).
*   Bảng màu dịu ngọt: Hồng pastel, tím lavender, trắng sữa kết hợp chữ tím đậm để đọc tốt.
*   Trang trí bằng họa tiết HUD (Heads-Up Display) mảnh và vòng sáng chuyển động quanh avatar.

---

## 2. Bảng màu (Color Palette)

| Tên Token | Mã màu Hex / RGBA | Mô tả |
| :--- | :--- | :--- |
| `colorBgBase` | `#FCE4EC` đến `#E8EAF6` | Nền chính — Gradient chuyển tiếp cực mềm giữa hồng phấn và tím nhạt |
| `colorBgContainer` | `rgba(255, 255, 255, 0.15)` | Nền thẻ (glassmorphism) — Trắng trong suốt |
| `colorPrimary` | `#EC407A` | Màu chủ đạo — Hồng hoa đào pastel đậm |
| `colorPrimaryGlow` | `rgba(236, 64, 122, 0.4)` | Hiệu ứng phát sáng màu hồng |
| `colorSecondary` | `#AB47BC` | Màu phụ — Tím lavender |
| `colorSecondaryGlow`| `rgba(171, 71, 188, 0.3)` | Hiệu ứng phát sáng màu tím |
| `colorAccent` | `#26C6DA` | Điểm nhấn công nghệ — Xanh ngọc pastel |
| `colorTextBase` | `#3F2B56` | Màu chữ chính — Tím sẫm (đảm bảo độ tương phản cao trên nền sáng) |
| `colorTextSecondary` | `#7E57C2` | Màu chữ phụ — Tím trung bình |
| `colorBorder` | `rgba(255, 255, 255, 0.45)`| Đường viền kính — Trắng sữa trong suốt |
| `colorGlowBorder` | `rgba(244, 143, 177, 0.5)`| Viền phát sáng phụ |

### CSS Gradients:
```css
/* Background chính toàn trang */
background: linear-gradient(135deg, #FFF0F5 0%, #F5F0FF 50%, #E6F3FF 100%);

/* Nền thẻ Glassmorphism */
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.45);

/* Gradient cho tiêu đề hoặc nút bấm nổi bật */
background: linear-gradient(90deg, #FF8DA1 0%, #D49BFF 100%);
```

---

## 3. Typography (Kiểu chữ)

| Token | Giá trị | Ghi chú |
| :--- | :--- | :--- |
| `fontFamily` | `'Outfit', 'Quicksand', sans-serif` | Font chính — Hiện đại, nét bo tròn mềm mại |
| `fontFamilyHeading`| `'Montserrat', sans-serif` | Font tiêu đề — Cứng cáp và chuyên nghiệp |
| `fontSize` | `15px` | Cỡ chữ cơ bản |
| `fontSizeHeading1`| `42px` | Tiêu đề chính Hero (chữ in hoa, phát sáng) |
| `fontSizeHeading2`| `26px` | Tiêu đề phần (About, Projects, Conclusion) |
| `fontSizeHeading3`| `18px` | Tiêu đề card nhỏ / Tên bài tập |
| `lineHeight` | `1.7` | Khoảng cách dòng thoáng đãng |
| `fontWeightStrong`| `700` | Trọng lượng chữ đậm |

### Style tiêu đề (Heading H1 & H2):
*   Sử dụng chữ in hoa cho các tiêu đề chính để gợi phong cách giao diện HUD.
*   Hiệu ứng bóng chữ phát sáng nhẹ: `text-shadow: 0 0 10px rgba(255, 141, 161, 0.5);`
*   Gradient Text cho phần chữ nổi bật:
    ```css
    background: linear-gradient(90deg, #EC407A, #8E24AA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ```

---

## 4. Khung viền & Bo góc (Border & Radius)

| Token | Giá trị | Mô tả |
| :--- | :--- | :--- |
| `borderRadius` | `16px` | Cho các nút, nhãn và thẻ phụ nhỏ |
| `borderRadiusLG` | `28px` | Cho các thẻ dự án, thẻ thông tin cá nhân |
| `borderRadiusXL` | `36px` | Cho toàn bộ khối container lớn (như Projects box trong ảnh) |

### Hiệu ứng viền phát sáng (Glowing Border):
*   Khi hover vào các thẻ, viền sẽ phát sáng nhẹ lên bằng hiệu ứng `box-shadow`:
    ```css
    box-shadow: 0 8px 32px 0 rgba(236, 64, 122, 0.15), 
                inset 0 0 12px rgba(255, 255, 255, 0.2);
    ```

---

## 5. Spacing & Bố cục (Layout)

*   **Max Content Width:** `1200px` (căn giữa toàn bộ trang web).
*   **Grid layout:**
    *   **Hero/About Section:** 2 cột (Cột 1: Thông điệp chào mừng + Nút hành động; Cột 2: Card chứa Avatar tròn với vòng sáng xoay và thông tin cá nhân).
    *   **Projects Section:** 1 khung lớn bao quanh, bên trong chứa hàng ngang 5 card con (sắp xếp dạng Flex-wrap hoặc Grid 5 cột trên Desktop, tự động cuộn ngang hoặc chuyển thành Grid 2 cột trên Mobile).
    *   **Bottom Section:** 2 cột đều nhau cho hai thẻ `PROJECTION` và `CONCLUSION`.

---

## 6. Hiệu ứng & Chuyển động (Animations)

| Tên hiệu ứng | Áp dụng cho | Hành vi chi tiết |
| :--- | :--- | :--- |
| `rotateHalo` | Vòng sáng quanh Avatar | Vòng tròn HUD quay chậm, ngược chiều kim đồng hồ, vô tận (`animation: spin 20s linear infinite`) |
| `float3D` | Các hành tinh trang trí | Di chuyển lên xuống nhẹ nhàng theo trục Y tầm 8px, vô tận (`animation: float 4s ease-in-out infinite`) |
| `pulseGlow` | Nút bấm, viền thẻ chính | Độ phát sáng tăng giảm chậm theo nhịp thở (`pulse`) |
| `hoverScale` | Các project card con | Phóng to nhẹ (`scale: 1.03`), tăng độ mờ đục của nền trắng và tăng độ sáng của viền |
| `staggerFade` | Danh sách bài tập | Các thẻ con xuất hiện lần lượt từ trái sang phải khi tải trang |

---

## 7. Hệ thống Asset SVG Trang trí

Để tạo ra không gian mạng đúng chất Y2K Futuristic, các hình ảnh trang trí đều được thiết kế dưới dạng vector SVG với nét vẽ mảnh, màu gradient hồng-tím-cyan:

### A. Decorative Elements (Nền & Trang trí khung)
1.  **`avatar-hud-ring.svg`:**
    *   Vòng tròn đồng tâm nét đứt kèm các vạch đo góc độ kiểu hologram bao quanh avatar.
    *   Màu: Gradient hồng đào sang xanh ngọc nhạt, nét vẽ mảnh `1px`.
2.  **`cyber-circuit-lines.svg`:**
    *   Các đường chỉ mạch điện tử chạy ngầm mờ ảo ở nền trang trí của thẻ thông tin.
    *   Màu: `rgba(255, 255, 255, 0.15)`.
3.  **`dot-matrix-grid.svg`:**
    *   Lưới chấm tròn nhỏ (10x10) trang trí ở các góc thẻ.
    *   Màu: Hồng pastel, mờ (`opacity: 0.3`).

### B. 3D Pastel Kawaii Planets (Hành tinh trang trí)
1.  **`planet-projection.svg`:**
    *   Hành tinh tròn màu hồng sữa mịn màng, có một vòng đai (Saturn ring) màu trắng sữa nghiêng 30 độ bao quanh. Đặt trong thẻ `PROJECTION`.
2.  **`planet-conclusion.svg`:**
    *   Hành tinh màu tím lavender nhạt, có vòng đai màu hồng phát sáng nhẹ và quả bóng phụ nhỏ trôi nổi bên cạnh. Đặt trong thẻ `CONCLUSION`.

### C. Outline Project Icons (Hệ thống icon bài tập)
Tất cả các icon bài tập sử dụng nét vẽ outline mảnh (`stroke-width: 1.5`), bo đầu nét tròn và dùng màu gradient hồng sang tím:
*   **Bài tập 1 (Folder Outline):** Quản lý tệp tin.
*   **Bài tập 2 (CPU/Chip Outline):** Khai thác dữ liệu & thông tin.
*   **Bài tập 3 (AI/Sparkle Core Outline):** Tổng quan về trí tuệ nhân tạo.
*   **Bài tập 4 (Group/Users Outline):** Giao tiếp & hợp tác số.
*   **Bài tập 5 (Shield Check Outline):** An toàn & liêm chính học thuật.

---

## 8. Tóm tắt DNA thiết kế

> **"Kính mờ trong suốt + Màu pastel ngọt ngào + Khung HUD công nghệ = Kawaii Futuristic Digital Space"**
