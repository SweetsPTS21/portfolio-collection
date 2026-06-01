# 🐱 NgocNB Portfolio — Cat Coffee Theme

> Catalog này quy định theme riêng cho portfolio của Nguyễn Bích Ngọc (`ngocnb-portfolio`).
> Vibe chính: Quán cà phê mèo buổi chiều, ấm áp, đáng yêu, trưởng thành và tối giản.
> Stack sử dụng: React 18, Framer Motion cho UI animation mạnh mẽ, Lenis cho smooth scroll, Lucide-icons cho icon system.
> Không sử dụng các yếu tố liên quan đến ngành luật, hoàn toàn tập trung vào visual quán cà phê mèo thư thái.
> Chú trọng background lớn làm điểm nhấn, assets mèo dễ thương, cappuccino nghệ thuật, biển hiệu, ruy băng trang trí, animation sinh động.

---

## 1. UI library / design tool stack

```bash
npm install framer-motion lenis lucide-react
```

| Library / Tool  | Vai trò chính trong theme                                                 |
| --------------- | ------------------------------------------------------------------------- |
| React 18        | Xây dựng UI component, quản lý state và architecture 3 routes             |
| Framer Motion   | UI animation mạnh, có khối lượng, route transition mượt mà, hover sâu     |
| Lenis           | Smooth scroll tạo cảm giác trôi chảy, nhịp độ chậm rãi thư thái           |
| Lucide-icons    | Hệ thống icon mảnh, sắc nét, phù hợp với phong cách thanh lịch tối giản   |

---

## 2. Đặc điểm nhận dạng & Vibe

| Yếu tố      | Mô tả                                                                     |
| ----------- | ------------------------------------------------------------------------- |
| Cảm xúc     | Điềm đạm, vững chãi, ấm áp, trưởng thành, tối giản                        |
| Hình khối   | Unique card design (Vd: Ticket order, menu board, polaroid, sổ tay da)    |
| Không gian  | Quán cà phê buổi chiều tà, vệt nắng hoàng hôn lọt qua cửa sổ, mặt bàn gỗ  |
| Chuyển động | Animation mạnh, có độ nặng (mass) và chậm rãi. Mô phỏng khói cà phê, ánh nắng |
| Điểm nhấn   | Background full-bleed là trọng tâm cảnh quán cà phê với large assets      |

---

## 3. Bảng màu (Coffee Palette)

Sử dụng tông màu nâu - cafe làm chủ đạo, gợi cảm giác vững chãi, ấm áp và tập trung theo đúng sở thích cá nhân.

```js
export const theme = {
  token: {
    colorBgBase: "#F5F0EB", // Màu kem/foam lót nền
    colorBgContainer: "#E6DCD3", // Nâu nhạt vân gỗ sáng cho cards
    colorPrimary: "#6F4E37", // Nâu cà phê hạt (Coffee brown) điểm nhấn
    colorTextBase: "#2C1E16", // Nâu đen (Espresso) cho text chính
    colorTextSecondary: "#8B7355", // Nâu đất/Caramel cho phụ đề
    colorBorder: "#D4C4B7", // Latte viền phân cách mỏng
    borderRadius: 8, // Góc bo nhỏ gọn, trưởng thành
    fontFamily: "'Playfair Display', 'Inter', sans-serif",
  },
};
```

---

## 4. Kiến trúc 3 Routes

Dự án sử dụng kiến trúc 3 routes tĩnh, phân tách gọn gàng không gian nội dung:

1. **`/about` (Giới thiệu):** Không gian giới thiệu cá nhân, mục tiêu và định hướng.
2. **`/projects` (Dự án):** Các dự án thực hành kỹ năng số.
3. **`/conclusion` (Tổng kết):** Trải nghiệm học tập, lời cảm ơn.

---

## 5. Dữ liệu Catalog (Data Content)

*Lưu ý: Nội dung data dưới đây được trích xuất nguyên bản từ `docs/portfolio.md` và ánh xạ vào UI quán cà phê, nghiêm cấm bịa thêm.*

### Route 1: `/about` - About Me
- **Thông tin:** Nguyễn Bích Ngọc, MSV: 24063211.
- **Sở thích:** Nghe nhạc, xem phim, đọc truyện để tái tạo năng lượng, giữ tư duy cởi mở.
- **Phong cách:** Tối giản, chuyên nghiệp, trưởng thành. Loại bỏ rườm rà, tập trung giá trị cốt lõi.
- **Mục tiêu & Định hướng:** Năng lực quản trị rủi ro thương mại độc lập. Ứng dụng công nghệ số tự động hóa quy trình quản lý hồ sơ, nâng cao hiệu suất. Không gian portfolio để hệ thống hóa dự án kỹ năng số.
- **Nguyên tắc:** Tư duy phản biện độc lập, học thuật khắt khe. Không xuôi chiều, không đồng ý dễ dàng với kết quả máy móc, phải thẩm định chéo.
- **Công cụ sinh thái làm việc:** Google Drive, File Explorer, CSDL Thư viện Quốc gia, AI LLMs (trợ lý ý tưởng), Google Meet, Trello, Canva (palette nâu cafe), CapCut, Microsoft Word.

### Route 2: `/projects` - Projects
- **Dự án 1 (Chương 1):** Tổ chức, sắp xếp lưu trữ dữ liệu. Quy hoạch không gian số tối giản, định danh thư mục rõ ràng, dọn rác, tạo không gian lưu trữ mạch lạc.
- **Dự án 2 (Chương 2):** Khai thác dữ liệu. Lọc thông tin từ tạp chí chuyên ngành, tập hợp 10 nguồn tài liệu, 5 bài báo khoa học chất lượng cao, kiểm chứng chéo.
- **Dự án 3 (Chương 3):** Tổng quan trí tuệ nhân tạo. Viết prompt hiệu quả (tóm tắt hợp đồng, phân tích thuật ngữ, lập bộ đề). Phản biện thuật toán, nhận diện lỗ hổng logic máy móc.
- **Dự án 4 (Chương 4):** Giao tiếp môi trường số. Vai trò Nhóm trưởng Nhóm 25. Điều phối tiến độ, họp Google Meet 30 phút, viết biên bản súc tích, đánh giá chéo thành viên.
- **Dự án 5 (Chương 5):** Sáng tạo nội dung số. Thiết kế slide, edit video. Khung kịch bản AI, tông màu nâu-cafe chủ đạo, edit âm thanh/hình ảnh tỉ mỉ chuyên nghiệp.
- **Dự án 6 (Chương 6):** An toàn & liêm chính học thuật. Trích dẫn minh bạch, 7 quy tắc đạo đức học thuật cá nhân thành infographic. Bảo vệ chất xám, từ chối đạo văn.

### Route 3: `/conclusion` - Conclusion
- **Trải nghiệm:** Trưởng thành qua thiết lập quy trình và lãnh đạo. Công nghệ giúp đạt sự tối giản, giải quyết công việc rành mạch.
- **Hành trang:** Kỹ năng lãnh đạo, tư duy phản biện độc lập, kỹ năng thiết kế slide chuyên nghiệp và edit video làm đòn bẩy.
- **Điểm tâm đắc:** Hoàn thành tốt vai trò Nhóm trưởng. Mang tông màu nâu cafe vào sản phẩm khô khan. Giữ vững tính phê phán trước AI.
- **Thách thức:** Quản lý thời gian tiến độ nhóm 25. Dựng video tốn sức. Sàng lọc kết quả AI sai lệch liên tục.
- **Chặng đường tiếp theo:** Quản trị hồ sơ bằng công nghệ, cân bằng cuộc sống bằng âm nhạc, phim ảnh. Gửi lời cảm ơn thầy cô và Nhóm 25.

---

## 6. Layout Ideas & Component Notes

- **Background (Trọng tâm):** Một khung cảnh quán cà phê lớn (full-screen parallax). Bàn gỗ chi tiết cao, một ly espresso bốc khói (CSS/Framer motion blur), vệt nắng chiều hắt chéo qua background. Các asset tĩnh phải to, sắc nét và có chiều sâu (Depth of Field).
- **Card Design độc đáo:**
  - **About Card:** Thiết kế giả lập như một tờ tạp chí mỏng hoặc menu bìa da đặt trên bàn cà phê gỗ.
  - **Project Cards:** Các dự án hiển thị dưới dạng **Guest Checks** (Phiếu gọi món) hoặc **Polaroid Photos** đính trên vách tường gỗ của quán.
  - **Conclusion Card:** Một quyển **sổ tay nhật ký** (vintage notebook) có hiệu ứng lật trang nhẹ.

---

## 7. Bộ Assets 2D cần chuẩn bị (SVG/Rive/Images)

| File asset                    | Nội dung cần vẽ/chuẩn bị                     | Dùng cho        | Gợi ý kỹ thuật                          |
| ----------------------------- | -------------------------------------------- | --------------- | --------------------------------------- |
| `coffee-shop-background.jpg`  | Quán cafe nhìn từ trong ra ngoài ban chiều   | Background      | High resolution, parallax depth layer   |
| `espresso-cup-smoke.riv`      | Tách espresso trên bàn gỗ, khói bốc lên      | Background/Hero | Rive animation cho khói lượn mờ (blur)  |
| `sunlight-ray.svg`            | Vệt nắng chiều lọt qua cửa sổ                | Background      | Blend mode overlay, animation chéo chậm |
| `guest-check-card.svg`        | Phiếu order đồ uống ghi chú dự án            | Projects card   | Layout text mộc mạc, viền rách/răng cưa |
| `polaroid-frame.svg`          | Khung ảnh polaroid                           | Projects card   | Drop shadow sâu, hover rotate ngẫu nhiên|
| `leather-notebook.svg`        | Sổ tay bìa da màu nâu cũ, giấy ngả vàng      | Conclusion card | Có thể lật trang, bọc góc kim loại      |
| `magazine-layout.svg`         | Khung layout tạp chí nghệ thuật tối giản     | About card      | Typography chuẩn grid, serif fonts      |
| `coffee-beans-scatter.svg`    | Vài hạt cà phê rơi vãi                       | Decor layer     | Đặt rải rác trên Foreground             |
| `dust-particles.svg`          | Hạt bụi lơ lửng trong vệt nắng               | Motion layer    | CSS/Framer opacity random & float drift |
| `cute-cat-silhouette.svg`     | Mèo dễ thương nằm cuộn tròn hoặc vẫy đuôi    | Background/Hero | CSS animation vẫy đuôi chậm rãi         |
| `cappuccino-art.svg`          | Tách cà phê cappuccino vẽ bọt hình mặt mèo   | Background/Hero | Khói lượn và bọt cà phê sữa ấm áp       |
| `coffee-signboard.svg`        | Biển hiệu quán "Cat Coffee" gỗ treo đung đưa | Background/Hero | CSS sway xoay ±2deg, dây treo đứt đoạn  |
| `deco-ribbon.svg`             | Ruy băng lụa màu kem/caramel bay nhẹ         | Card decor/Hero | CSS keyframes bay trôi chậm             |

---

## 8. Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                               |
| --------------- | --------------------------------------------------------------------------------- |
| Theme ID        | `ngocnb-afternoon-coffee`                                                         |
| Tech stack      | Dùng chuẩn React 18, Framer Motion, Lenis, Lucide-icons                           |
| Visual priority | Cảnh quán cafe buổi chiều phải là điểm nhấn. Bỏ qua hoàn toàn các yếu tố ngành luật. |
| Motion          | Tập trung làm khói cà phê (particle/blur), vệt nắng di chuyển, card reveal có độ nảy nặng. |
| Nội dung        | Phải dùng đúng text từ mục 5 (lấy từ `docs/portfolio.md`), không bịa đặt text.    |
