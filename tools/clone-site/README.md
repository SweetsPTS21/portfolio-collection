# Google Sites Cloner

Tool Python để clone trang Google Sites sang HTML/CSS/JS tĩnh.

## Yêu cầu

- Python 3.8+
- Google Chrome (đã cài đặt)
- ChromeDriver (tự động tải qua selenium)

## Cài đặt

```bash
cd clone-site
pip install -r requirements.txt
```

## Sử dụng

### Clone trang mặc định (lanchi portfolio)
```bash
python clone_google_site.py
```

### Clone trang bất kỳ
```bash
python clone_google_site.py "https://sites.google.com/view/your-site" output_folder
```

### Ví dụ
```bash
python clone_google_site.py "https://sites.google.com/view/lanchi2310/lanchi-portfolio" lanchi_portfolio
```

## Output

Sau khi chạy, tool sẽ tạo thư mục với cấu trúc:

```
output_folder/
├── index.html          # Trang HTML chính
├── styles.css          # CSS extracted
├── script.js           # JavaScript cơ bản
└── assets/
    └── images/         # Hình ảnh đã tải về
```

## Cách hoạt động

1. Mở trang bằng Chrome headless (không hiện cửa sổ)
2. Đợi JavaScript render xong nội dung
3. Scroll xuống để load lazy content
4. Extract HTML đã render + CSS
5. Tải về tất cả hình ảnh
6. Lưu thành file HTML/CSS/JS tĩnh

## Lưu ý

- Google Sites render hoàn toàn bằng JavaScript nên cần Selenium
- Một số font Google có thể cần kết nối internet để hiển thị
- Layout có thể không 100% giống do Google Sites dùng nhiều inline styles phức tạp
- Tool này chỉ dùng cho mục đích học tập
