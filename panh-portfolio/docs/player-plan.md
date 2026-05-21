# Implementation Plan — Music Player

## Concept

Mini music player cố định ở bottom-right, phù hợp chủ đề "Trạm phát sóng" của Phương Anh. Phát các file nhạc (.mp3) đặt tại `src/assets/music/`. Player luôn hiện trên mọi trang, có thể thu gọn/mở rộng.

---

## UI Design

### Trạng thái thu gọn (collapsed):
- Nút vuông (48x48, góc vuông theo theme) cố định bottom-right
- Icon equalizer animated khi đang phát, icon Play khi dừng
- Click → mở rộng panel

### Trạng thái mở rộng (expanded):
- Panel 320x~280px, góc vuông, glassmorphism background
- **Đĩa than (vinyl)**: hình vuông 80x80 (theo theme không bo góc), quay tròn khi đang phát, dừng khi pause
  - Background: gradient tối (dark concentric rings giả đĩa than)
  - Ở giữa: nhãn nhỏ (label) gradient hồng-xanh
  - Animation: rotate 360° liên tục, duration 3s, linear, pause khi dừng nhạc
- Hiển thị: tên bài hát, progress bar, thời gian
- Controls: Previous | Play/Pause | Next
- Volume slider (thanh ngang, gradient)
- Danh sách bài (scrollable nếu nhiều)
- Nút thu gọn (chevron down)

### Chức năng:
- **Play/Pause** — toggle phát/dừng bài hiện tại
- **Next/Previous** — chuyển bài tiếp/trước, loop lại đầu danh sách khi hết
- **Seek** — click/drag progress bar để nhảy đến vị trí bất kỳ
- **Volume** — slider chỉnh âm lượng 0-100%, icon mute toggle
- **Auto-next** — tự động chuyển bài khi hết bài hiện tại

### Style theo theme.md:
- Border: 0 radius, sharp edges
- Background: glass (rgba(255,255,255,0.85) + blur)
- Accent: gradient progress bar + volume bar (hồng → xanh)
- Border-top: 3px gradient accent
- Shadow: 0 8px 32px rgba(45,32,64,0.12)
- Volume icon: speaker với mức sóng tương ứng

---

## Cấu trúc file

```
src/
├── assets/music/
│   ├── track-1.mp3
│   ├── track-2.mp3
│   └── track-3.mp3
├── components/
│   └── MusicPlayer.jsx    # Component chính
├── data/
│   └── playlist.js        # Metadata bài hát (title, file path)
```

---

## Các bước thực hiện

1. **Tạo `src/data/playlist.js`** — danh sách bài hát (title, src path)
2. **Tạo `src/components/MusicPlayer.jsx`** — component player với:
   - State: isPlaying, currentTrack, isExpanded, currentTime, duration, volume, isMuted
   - useRef cho Audio element
   - Controls: play/pause, next, prev, seek (click progress bar)
   - Volume: slider 0-1, mute/unmute toggle, icon thay đổi theo mức (Volume2/Volume1/VolumeX)
   - Progress bar với gradient, hiển thị currentTime / duration
   - Auto-next: onEnded → chuyển bài tiếp
   - Animated equalizer khi đang phát
3. **Tích hợp vào `Layout.jsx`** — render MusicPlayer bên ngoài main content
4. **Thêm file nhạc placeholder** — tạo thư mục `src/assets/music/` (user sẽ thêm file .mp3 sau)
5. **Build test**

---

## Ước lượng: 5 bước
