# 📁 anna-portfolio — Tống Thị An Na

> Đọc tài liệu gốc tại [`../README.md`](../README.md) trước khi đọc file này.  
> File này định nghĩa **phong cách UI đặc thù** và **cách tổ chức nội dung** cho dự án portfolio của Tống Thị An Na.

---

## 1. Thông tin người dùng

| Trường | Giá trị |
|---|---|
| Họ và tên | Tống Thị An Na |
| Ngành | Luật Kinh Doanh |
| Trường | Đại học Luật – ĐHQGHN |
| Nguồn nội dung | [`docs/portfolio.md`](docs/portfolio.md) |

---

## 2. Phong cách thiết kế UI

### Tên phong cách: **"Legal Archive" — Thư viện pháp luật số**

Cảm hứng từ thiết kế các tạp chí luật học thuật Tây Âu và các hệ thống lưu trữ hồ sơ chuyên nghiệp.  
Tông màu trầm, thanh lịch; typography sắc nét; layout dạng tài liệu/báo cáo; không dùng gradient phô trương.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
|---|---|
| **Cảm xúc** | Tin cậy, có hệ thống, chuyên nghiệp nhưng không khô cứng |
| **Hình khối** | Đường thẳng, góc vuông, border rõ ràng (không bo tròn nhiều) |
| **Không gian** | White space rộng rãi — không bị đặc, cảm giác "thoáng tài liệu" |
| **Chuyển động** | Subtle, slow fade-in + slide từ trái; không có bounce hay elastic |
| **Điểm nhấn** | Các số thứ tự, dấu ngoặc, ký hiệu section kiểu tài liệu pháp lý |

---

## 3. Bảng màu (Ant Design Token)

```js
// src/theme.js
export const theme = {
  token: {
    // Màu nền chính — trắng ngà, gần giấy in
    colorBgBase: '#FAFAF7',

    // Màu chính — xanh navy học thuật
    colorPrimary: '#1B3A5C',

    // Màu chữ chính — gần đen
    colorTextBase: '#1A1A2E',

    // Màu chữ phụ
    colorTextSecondary: '#5C6B7A',

    // Accent — đỏ mực son, dùng tiết kiệm
    colorError: '#8B2635',

    // Border rõ nét
    colorBorder: '#D4C9B8',

    // Bo góc nhỏ — phong cách tài liệu
    borderRadius: 4,
    borderRadiusLG: 6,

    // Font chữ
    fontFamily: "'Libre Baskerville', 'Inter', serif",
    fontSize: 15,
    fontSizeLG: 18,
    fontSizeHeading1: 42,
    fontSizeHeading2: 28,
    fontSizeHeading3: 20,

    // Khoảng cách
    padding: 20,
    paddingLG: 32,
    margin: 16,
    marginLG: 32,
  },
  components: {
    Card: {
      paddingLG: 28,
      borderRadiusLG: 4,
    },
    Tag: {
      borderRadius: 2,
      fontSize: 12,
    },
    Button: {
      borderRadius: 3,
    },
    Menu: {
      itemBorderRadius: 2,
    },
  },
};
```

> **Google Font cần import:** `Libre Baskerville` (heading) + `Inter` (body)  
> ```css
> @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
> ```

---

## 4. Layout & Navigation

### Cấu trúc trang

Ứng dụng là **Single Page App** cuộn dọc, chia thành 3 section chính tương ứng với 3 "thẻ" trong `docs/portfolio.md`:

```
[Header / Sticky Nav]
│
├── Section 1: Hero + About       ← "Thẻ 1" trong portfolio.md
│   ├── HeroSection.jsx           ← Tên, ngành, tiêu chí
│   ├── SkillsSection.jsx         ← Năng lực nổi bật (4 kỹ năng chính)
│   └── ToolsSection.jsx          ← Công cụ đã sử dụng
│
├── Section 2: Projects           ← "Thẻ 2" trong portfolio.md
│   ├── ProjectsNav.jsx           ← Sidebar hoặc tab chọn bài tập
│   └── ProjectDetail.jsx         ← Chi tiết từng bài tập (6 bài)
│
└── Section 3: Conclusion         ← "Thẻ 3" trong portfolio.md
    ├── ReflectionSection.jsx     ← Những thay đổi em nhận thấy
    ├── LessonsSection.jsx        ← Kinh nghiệm rút ra
    └── FooterSection.jsx         ← Copyright + links
```

### Navigation

- Header sticky, chiều cao nhỏ (~56px), nền trắng ngà với bottom border mỏng.
- Các anchor link (`#hero`, `#projects`, `#conclusion`) cuộn mượt với `scroll-behavior: smooth`.
- Active state của nav item dùng màu primary với gạch chân thay vì background.

---

## 5. Chi tiết từng Component

### 5.1 HeroSection

- **Layout:** 2 cột — bên trái là khối text lớn, bên phải là "identity card" kiểu hồ sơ pháp lý.
- **Typography:** Tên người dùng hiển thị to (heading 1), có ký tự số thứ tự `[01]` trước tiêu đề phần.
- **Animation:** Tên fade-in từ opacity 0 → 1, sau đó các thông tin phụ slide lên theo thứ tự.
- **Chi tiết thiết kế:**
  - Identity card có border-left dày màu primary (#1B3A5C) — như dấu hiệu phân đoạn tài liệu.
  - Sở thích hiển thị dưới dạng tag nhỏ, không bo tròn (borderRadius: 2px).

### 5.2 SkillsSection

- Tiêu đề phần có dạng: `[02] Năng lực nổi bật`
- 4 kỹ năng hiển thị dạng **grid 2×2** (desktop) / **stack** (mobile).
- Mỗi kỹ năng là một card với:
  - Icon Lucide ở góc trên trái (size 20, strokeWidth 1.5)
  - Tiêu đề kỹ năng in đậm
  - Mô tả text nhỏ hơn, màu secondary
  - Số thứ tự `01`, `02`... ở góc trên phải, màu nhạt (decorative)
- Card không có shadow nặng — chỉ dùng border mỏng (`1px solid colorBorder`).

### 5.3 ToolsSection

- Tiêu đề: `[03] Công cụ & Nền tảng`
- Hiển thị theo nhóm (Quản lý tệp, Học thuật, AI, Thiết kế, Cộng tác).
- Mỗi nhóm là một row ngang: icon nhỏ + tên công cụ + mô tả ngắn.
- Không dùng card — chỉ dùng divider ngang mỏng giữa các nhóm.

### 5.4 ProjectsNav + ProjectDetail

- **ProjectsNav:** Sidebar trái (desktop) hoặc tab trên cùng (mobile) — liệt kê 6 bài tập.
- Bài tập đang active có background nhạt + border-left màu primary dày 3px.
- **ProjectDetail:** Hiển thị khi chọn bài, bao gồm:
  - Tiêu đề bài tập + chương
  - Mô tả ngắn (1–2 câu)
  - Nội dung chi tiết từ `portfolio.md`
  - Khu vực placeholder cho file đính kèm/ảnh minh chứng (icon + text "Minh chứng sẽ được cập nhật")
- Chuyển đổi giữa các bài dùng React Motion `spring` để fade + slide nội dung.

### 5.5 ReflectionSection

- Tiêu đề: `[04] Những thay đổi em nhận thấy`
- 3 điểm thay đổi hiển thị dạng **timeline dọc** — mỗi điểm có:
  - Số thứ tự hình tròn nhỏ (outline, không filled)
  - Tiêu đề in đậm
  - Mô tả
- Đường line dọc kết nối các điểm, màu border mỏng.

### 5.6 LessonsSection

- Tiêu đề: `[05] Kinh nghiệm rút ra`
- 3 bài học hiển thị dạng **card ngang** (icon trái + text phải).
- Background card màu primary cực nhạt (5% opacity).

### 5.7 FooterSection

- Đơn giản: tên, năm, bản quyền — căn giữa.
- Phong cách như footer tài liệu học thuật.

---

## 6. Quy tắc Animation

| Sự kiện | Animation | Thư viện |
|---|---|---|
| Section entrance (scroll vào) | Fade in + translateY(20px → 0) | React Motion `spring` |
| Card hover | Border-left đổi màu + slight translateX(4px) | CSS transition 200ms |
| Nav item hover | Gạch chân grow từ trái | CSS transition 250ms |
| Project switch | Fade out → Fade in nội dung | React Motion `spring` |
| Tag hover | Background nhạt xuất hiện | CSS transition 150ms |

**Không dùng:**
- Bounce, elastic, flip, rotate
- Animation kéo dài > 600ms
- Hiệu ứng parallax phức tạp

---

## 7. Responsive

| Breakpoint | Hành vi |
|---|---|
| `< 768px` (Mobile) | Stack tất cả, ProjectsNav thành tab ngang, ẩn số trang decorative |
| `768px – 1024px` (Tablet) | Grid 2 cột, ProjectsNav thu nhỏ bên trái |
| `> 1024px` (Desktop) | Layout đầy đủ, sidebar cố định |

---

## 8. Cấu trúc file dự án

```
anna-portfolio/
├── README.md                    ← File này
├── docs/
│   └── portfolio.md             ← Nguồn nội dung thực
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── theme.js                 ← Ant Design token (xem mục 3)
    ├── index.css                ← Tailwind + Google Font + global styles
    ├── data/
    │   └── portfolioData.js     ← Toàn bộ text từ portfolio.md được export
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx
    │   │   └── Footer.jsx
    │   ├── sections/
    │   │   ├── HeroSection.jsx
    │   │   ├── SkillsSection.jsx
    │   │   ├── ToolsSection.jsx
    │   │   ├── ProjectsSection.jsx
    │   │   ├── ReflectionSection.jsx
    │   │   └── LessonsSection.jsx
    │   └── ui/
    │       ├── SectionTitle.jsx    ← "[01] Tiêu đề" kiểu tài liệu
    │       ├── SkillCard.jsx
    │       ├── ProjectCard.jsx
    │       ├── TimelineItem.jsx
    │       └── ScrollReveal.jsx    ← Wrapper React Motion entrance
    └── hooks/
        └── useActiveSection.js    ← Theo dõi section đang cuộn đến
```

---

## 9. Checklist cho AI trước khi sinh code

- [ ] Đã đọc `docs/portfolio.md` và trích xuất đầy đủ nội dung vào `src/data/portfolioData.js`
- [ ] `theme.js` đã khai báo đúng bảng màu "Legal Archive" ở mục 3
- [ ] Google Font `Libre Baskerville` + `Inter` được import trong `index.css`
- [ ] Mọi component section đều có `ScrollReveal.jsx` bao bên ngoài
- [ ] ProjectDetail có animation chuyển đổi bằng React Motion khi đổi bài
- [ ] Responsive đã kiểm tra ở 375px, 768px, 1280px
- [ ] Không có Lorem Ipsum trong codebase
- [ ] Chạy `npm run dev` thành công, không có lỗi console

---

*Sub-project: anna-portfolio | Phong cách: Legal Archive | Người dùng: Tống Thị An Na*
