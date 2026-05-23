Dưới đây là kế hoạch nâng cấp qchi-portfolio lên đúng chuẩn azure-study-desk, tập trung vào nền sống động, card có bản sắc, nhiều asset/animation nhưng vẫn chuyên nghiệp.

Hướng Thiết Kế
Chọn hướng immersive study desk: portfolio như một bàn học nghiên cứu luật cạnh cửa sổ xanh azure. Nền không chỉ là decoration, mà là một “không gian làm việc”: mặt bàn gỗ, notebook mở, giấy kraft, bút đang gạch chân, ánh sáng cửa sổ, bụi giấy, sticky note, clipboard và các lớp parallax.

Giữ nội dung hiện tại của Quỳnh Chi, nhưng đổi cách trình bày từ “text trong card trắng” thành “research workspace”: project là research notes, skills là index tabs, conclusion là clipboard/final notes.

Phase 1: Nâng Nền Thành Scene Sống Động
Files chính:

src/components/layout/StudyDeskScene.jsx
src/index.css
src/assets/azure-study-desk/\*
Việc cần làm:

Tạo scene nhiều lớp: window-light, wood-desk, open-notebook, paper-stack, pen, kraft-tags, dust-motes.
Dùng parallax nhẹ theo scroll hoặc pointer: bàn/note/pen lệch tốc độ khác nhau.
Thêm animation nền: paper float, lamp glow, dust drift, pen underline draw, page corner flip.
Nâng SVG hiện tại từ asset đơn giản thành asset có layer tách riêng để animate bằng CSS/Framer Motion.
Acceptance:

Khi vào trang, người dùng nhận ra ngay đây là “study desk”, không phải chỉ nền xanh có vài icon.
Background sống động nhưng text vẫn đọc rõ.
Phase 2: Cách Điệu Toàn Bộ Card
Files chính:

src/components/ui/StudyPanel.jsx
src/components/projects/ResearchNoteCard.jsx
src/components/about/AvatarCard.jsx
src/components/conclusion/ReflectionHero.jsx
src/components/about/StrengthStrip.jsx
Việc cần làm:

StudyPanel: đổi từ card trắng sang paper/notebook panel: grid line mờ, kraft tape, brass clip, corner fold.
ResearchNoteCard: mỗi project có kiểu note riêng: citation note, meeting brief, AI prompt log, integrity map.
AvatarCard: biến thành profile sheet đặt trên notebook, có paper stack và pen overlay.
ReflectionHero: clipboard/final notes, có stamp/marker highlight.
StrengthStrip: đổi thành index cards hoặc desk tabs, không dùng mini card trắng đơn điệu.
Acceptance:

Không còn cảm giác “khung trắng + icon”.
Mỗi nhóm card có chất liệu rõ: giấy, gỗ, kraft, kẹp đồng, notebook.
Phase 3: Motion & Interaction
Files chính:

src/app/motionConfig.js
src/components/layout/PageShell.jsx
ResearchNoteCard.jsx
StudyPanel.jsx
Việc cần làm:

Tách motion variants dùng chung: page reveal, paper lift, note stagger, tab slide.
Hover project card: card nâng nhẹ, tape xoay, paper shadow sâu hơn, underline draw.
Route transition như lật trang notebook.
Section entrance theo kiểu paper stack xuất hiện từng lớp.
Reduced motion giữ đầy đủ nội dung, tắt idle loops.
Acceptance:

Motion có chủ đích, không chỉ fade/translate chung chung.
Hover tạo cảm giác vật lý của giấy/kẹp/bút.
Phase 4: Asset Set Chuẩn Theme
Cần nâng asset folder src/assets/azure-study-desk/ lên bộ đầy đủ:

desk-surface-layer.svg
window-light-layer.svg
open-notebook-layered.svg
paper-stack-set.svg
kraft-tape-tags.svg
pen-underline-animated.svg
brass-clips-pins.svg
clipboard-final-notes.svg
index-tab-set.svg
desk-particle-set.svg
Ưu tiên SVG tự dựng, tách group rõ để animate. Text chính tuyệt đối vẫn là HTML.

Phase 5: Layout & Visual Density

Hero/About: nhiều chiều sâu hơn, avatar nằm trong “profile sheet”.
Projects: grid note cards có nhịp thị giác, không đều nhau 100%.
Conclusion: giống trang tổng kết trên clipboard, có highlight/stamp.
Mobile: giảm particle, giữ scene chính và card readable.
Phase 6: Contract & Verification
Cập nhật tests/portfolio-contract.test.mjs để bắt buộc:

Có layered azure-study-desk assets.
Không còn CSS/card đơn điệu.
Có motionConfig.js.
Có prefers-reduced-motion.
Project card có PDF open/download.
Không còn reference tới kitty-cafe-menu.
Verification cuối:

npm test
npm run build
Chạy dev server và kiểm desktop/mobile tại /about, /projects, /conclution.
Kế hoạch triển khai nên làm theo thứ tự: scene nền trước → card system → motion → asset polish → responsive/test. Đây là đường nâng cấp đúng trọng tâm nhất để theme trông chuyên nghiệp và sống động, thay vì chỉ đổi màu hoặc thêm icon.
