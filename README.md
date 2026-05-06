# 🗂️ Portfolio Monorepo — Hướng dẫn tổng thể

> Tài liệu này là **chỉ dẫn chung** cho toàn bộ project và mọi thư mục dự án con bên trong.  
> AI đọc tài liệu này để hiểu cấu trúc, techstack, quy ước và phong cách thiết kế trước khi sinh code.

---

## 1. Mô tả tổng quan

**Portfolio Monorepo** là tập hợp các ứng dụng React portfolio độc lập, mỗi ứng dụng tương ứng với **một người dùng cụ thể**.  
Mỗi dự án con nằm trong một thư mục riêng (`<tên-người-dùng>-portfolio/`) và được xây dựng từ nội dung mô tả trong file `docs/portfolio.md` của chính thư mục đó.

### Mục tiêu
- Mỗi sub-project là **một ứng dụng React hoàn chỉnh**, có thể chạy độc lập.
- Nội dung portfolio được lấy từ file `docs/portfolio.md` — AI đọc file này để lấy dữ liệu thực, không dùng placeholder.
- Mỗi dự án mang **phong cách thiết kế UI riêng biệt**, được ghi rõ trong `README.md` của từng thư mục con.

---

## 2. Cấu trúc monorepo

```
portfolio/
├── README.md                        ← File này (hướng dẫn chung cho AI)
│
├── anna-portfolio/                  ← Dự án portfolio của Tống Thị An Na
│   ├── README.md                    ← Mô tả phong cách UI + đặc thù của dự án này
│   ├── docs/
│   │   └── portfolio.md             ← Nội dung thực của portfolio (AI đọc để lấy data)
│   └── src/                         ← Source code React (AI sinh ra)
│       ├── main.jsx
│       ├── App.jsx
│       ├── theme.js                 ← Cấu hình Ant Design token
│       ├── index.css                ← Tailwind + global styles
│       └── components/              ← Các component chia nhỏ theo section
│
├── <tên-người-dùng>-portfolio/      ← Dự án tiếp theo (cùng quy ước)
│   ├── README.md
│   ├── docs/
│   │   └── portfolio.md
│   └── src/
│       └── ...
└── ...
```

> **Quy ước đặt tên thư mục:** `<tên-viết-thường-không-dấu>-portfolio`  
> Ví dụ: `anna-portfolio`, `minh-portfolio`, `linh-portfolio`

---

## 3. Techstack

| Công nghệ | Phiên bản | Mục đích |
|---|---|---|
| **React** | 18+ | UI Framework |
| **Vite** | 5+ | Build tool & dev server |
| **Ant Design** | 6.x | Component library & design token |
| **Tailwind CSS** | 3.x | Utility-first CSS (bổ sung layout, spacing) |
| **Lucide React** | latest | Icon library |
| **React Motion** | latest | Physics-based animation |
| **React Router** | 6+ | Routing (nếu có multi-page) |

### Khởi tạo dự án con mới

```bash
# Đứng ở thư mục gốc portfolio/
npx -y create-vite@latest <tên>-portfolio -- --template react
cd <tên>-portfolio
npm install antd @ant-design/cssinjs
npm install tailwindcss @tailwindcss/vite
npm install lucide-react react-motion
```

---

## 4. Quy ước cấu hình & thiết lập

### 4.1 Ant Design Theme (`theme.js`)

Mỗi dự án **phải có** file `src/theme.js` định nghĩa Ant Design token và bọc toàn bộ app bằng `ConfigProvider`.  
Màu sắc chính thức của dự án được khai báo tại đây — **không hardcode màu** ở component.

```js
// src/theme.js — ví dụ mẫu (mỗi dự án sẽ có bảng màu khác nhau)
export const theme = {
  token: {
    colorPrimary: '#...',
    colorBgBase: '#...',
    colorTextBase: '#...',
    borderRadius: 12,
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    Button: { /* override nếu cần */ },
    Card: { /* override nếu cần */ },
  },
};
```

```jsx
// src/App.jsx
import { ConfigProvider } from 'antd';
import { theme } from './theme';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      {/* toàn bộ app */}
    </ConfigProvider>
  );
}
```

### 4.2 Tailwind CSS (`tailwind.config.js`)

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
  // Không dùng Tailwind preflight để tránh xung đột với Ant Design reset
  corePlugins: { preflight: false },
};
```

```css
/* src/index.css */
@import "tailwindcss";
/* Thêm Google Font và global overrides tại đây */
```

### 4.3 Cấu trúc `src/` chuẩn

```
src/
├── main.jsx              ← Entry point
├── App.jsx               ← ConfigProvider + layout chính + Router
├── theme.js              ← Ant Design token
├── index.css             ← Tailwind + global styles + Google Font import
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx   ← nếu có
│   │
│   ├── sections/         ← Các section chính của portfolio
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ConclusionSection.jsx
│   │
│   ├── ui/               ← Atomic UI components tái sử dụng
│   │   ├── AnimatedCard.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── TagBadge.jsx
│   │   └── ScrollReveal.jsx
│   │
│   └── pages/            ← Nếu dùng React Router
│       ├── HomePage.jsx
│       └── ProjectDetailPage.jsx
│
└── hooks/
    └── useScrollAnimation.js
```

---

## 5. Yêu cầu UI/UX chung

### 5.1 Nguyên tắc thiết kế

- **Mỗi dự án con có phong cách UI riêng** — phong cách được ghi trong `README.md` của thư mục con đó.
- Phong cách mang tính **sáng tạo, nghệ thuật** — tránh thiết kế template cơ bản, tránh lạm dụng gradient.
- Ưu tiên: **typography mạnh**, **white space hợp lý**, **màu sắc có chủ đích**, **micro-animation tinh tế**.
- Màu sắc cốt lõi luôn được khai báo qua **Ant Design `ConfigProvider`** — không dùng màu cố định trong component.

### 5.2 Nguyên tắc nội dung — Trung thành với tài liệu

> **Quy tắc bắt buộc:** UI **chỉ được hiển thị** những gì có trong `docs/portfolio.md`. Không thêm, không bịa, không suy diễn.

- **Chỉ render nội dung từ `docs/portfolio.md`** — mọi text, list, số liệu đều phải có nguồn gốc rõ ràng từ file này.
- **Không tự thêm nội dung** dù hợp lý — ví dụ: không thêm skill, không thêm công cụ, không thêm dự án ngoài danh sách trong tài liệu.
- **Không dùng placeholder text** kiểu "Lorem ipsum", "Nội dung sẽ cập nhật sau", "Sample content" cho các trường đã có dữ liệu trong docs.
- **Không suy diễn thêm** — nếu tài liệu không đề cập đến một thông tin, UI không được hiển thị thông tin đó dù có vẻ tự nhiên.
- **Section trong UI phải ánh xạ trực tiếp** sang một block nội dung cụ thể trong `docs/portfolio.md` — không tạo section nếu không có nội dung tương ứng trong tài liệu.
- **Placeholder cho minh chứng** (ảnh, file đính kèm) được phép nếu tài liệu có đề cập đến sự tồn tại của chúng nhưng chưa cung cấp file thực.

### 5.3 Phong cách phải thể hiện qua

| Yếu tố | Yêu cầu |
|---|---|
| Typography | Dùng Google Font (Inter, Outfit, Playfair Display, Space Groto, v.v.) — chọn phù hợp phong cách |
| Màu sắc | Bảng màu hài hòa, có tầng bậc (primary, surface, accent, text) — không dùng màu web mặc định |
| Layout | Căn chỉnh rõ ràng, có rhythm, không bị đặc |
| Animation | React Motion cho entrance animation; CSS transition cho hover; không dùng animation rối mắt |
| Responsive | Mobile-first, hoạt động tốt ở 375px, 768px, 1280px |
| Icon | Dùng Lucide React — nhất quán về size và stroke-width |

### 5.4 Animation với React Motion

```jsx
// Ví dụ sử dụng react-motion cho entrance animation
import { Motion, spring } from 'react-motion';

function AnimatedCard({ children, delay = 0 }) {
  return (
    <Motion defaultStyle={{ opacity: 0, y: 30 }}
            style={{ opacity: spring(1), y: spring(0) }}>
      {({ opacity, y }) => (
        <div style={{ opacity, transform: `translateY(${y}px)` }}>
          {children}
        </div>
      )}
    </Motion>
  );
}
```

---

## 6. Cách AI sinh code từ tài liệu

### Bước 1 — Đọc tài liệu

1. Đọc file này (`README.md` gốc) để nắm techstack và quy ước.
2. Đọc `<tên>-portfolio/README.md` để biết **phong cách UI** và **đặc thù** của dự án đó.
3. Đọc `<tên>-portfolio/docs/portfolio.md` để lấy **nội dung thực tế** của portfolio.

### Bước 2 — Phân tích nội dung

Từ `docs/portfolio.md`, xác định các block nội dung chính:
- **Thẻ 1 (Hero/About):** Giới thiệu bản thân, kỹ năng, công cụ
- **Thẻ 2 (Projects):** Danh sách bài tập / dự án
- **Thẻ 3 (Conclusion):** Kết luận và định hướng

Map nội dung sang các component tương ứng trong `src/components/sections/`.

### Bước 3 — Sinh code

- Khởi tạo Vite project đúng theo cấu trúc mục 4.
- Tạo `theme.js` với bảng màu **phù hợp phong cách** đã định.
- Xây dựng từng component section, đưa dữ liệu thực vào (không dùng Lorem Ipsum).
- Áp dụng animation bằng React Motion cho các card và section entrance.
- Đảm bảo responsive.

### Bước 4 — Kiểm tra

```bash
cd <tên>-portfolio
npm install
npm run dev
```

---

## 7. Danh sách dự án con

| Thư mục | Người dùng | Phong cách UI | Trạng thái |
|---|---|---|---|
| `anna-portfolio` | Tống Thị An Na | Editorial / Thư viện pháp lý | ✅ Hoàn thành |
| `phuong-portfolio` | Lý Bảo Phượng | Interactive Desk / Workspace Theme | ✅ Hoàn thành |

> Cập nhật bảng này khi thêm dự án mới.

---

## 8. Quy ước code chung

### Naming

- **Component:** PascalCase — `HeroSection.jsx`, `AnimatedCard.jsx`
- **Hook:** camelCase bắt đầu bằng `use` — `useScrollAnimation.js`
- **Constant/data:** camelCase — `portfolioData.js`
- **CSS class (Tailwind):** viết thẳng trong `className`, không tách file riêng

### Chia component

- Mỗi section là một file riêng trong `components/sections/`
- UI tái sử dụng (card, badge, title) nằm trong `components/ui/`
- Không viết component quá 150 dòng — tách nhỏ nếu cần
- Props phải rõ ràng, có destructuring

### Data

- Toàn bộ nội dung portfolio (text, list) được khai báo trong file `data/` riêng  
  (ví dụ: `src/data/portfolioData.js`) và import vào component — không hardcode trong JSX.

```js
// src/data/portfolioData.js
export const personalInfo = {
  name: 'Tống Thị An Na',
  major: 'Luật Kinh Doanh',
  university: 'Đại học Luật – ĐHQGHN',
  // ...
};

export const skills = [
  { label: 'Quản lý tài liệu số', icon: 'FolderOpen' },
  // ...
];

export const projects = [
  {
    id: 1,
    title: 'Bài tập 1 – Chương 1',
    subtitle: 'Máy tính và các thiết bị ngoại vi',
    description: '...',
  },
  // ...
];
```

---

## 9. Không làm

**Về nội dung:**
- ❌ Hiển thị thông tin không có trong `docs/portfolio.md` — dù hợp lý hay tự nhiên
- ❌ Tự thêm skill, công cụ, dự án, hoặc bất kỳ dữ liệu nào ngoài tài liệu
- ❌ Dùng Lorem Ipsum hoặc placeholder text cho các trường đã có dữ liệu thực
- ❌ Suy diễn, bổ sung, hay "làm phong phú" nội dung ngoài nguồn tài liệu
- ❌ Tạo section UI mà không có block nội dung tương ứng trong `docs/portfolio.md`

**Về code:**
- ❌ Dùng màu hardcode (#fff, #000, red) trong component — dùng Ant Design token hoặc CSS variable
- ❌ Tạo component khổng lồ (God Component) — phải chia nhỏ
- ❌ Import trực tiếp từ `antd` mà bỏ qua ConfigProvider
- ❌ Dùng `style={{}}` inline trừ các giá trị tính động (animation, transform)
- ❌ Bỏ qua responsive — mọi component phải đẹp ở mobile

---

## 10. Tham chiếu nhanh

| Tài liệu | Đường dẫn |
|---|---|
| Ant Design 6 docs | https://ant.design/docs/react/introduce |
| Tailwind CSS docs | https://tailwindcss.com/docs |
| Lucide React icons | https://lucide.dev/icons |
| React Motion | https://github.com/chenglou/react-motion |
| Google Fonts | https://fonts.google.com |

---

*Cập nhật lần cuối: 2026-05-05 — mọi thay đổi quy ước chung phải được phản ánh tại file này.*

> **Nguyên tắc cốt lõi:** Dữ liệu trong `docs/portfolio.md` là **nguồn duy nhất** (single source of truth). UI chỉ là lớp hiển thị — không phải nơi sáng tác nội dung.
