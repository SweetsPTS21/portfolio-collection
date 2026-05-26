import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chapters, goals, profile } from '../src/data/portfolioData.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), 'utf8');

const app = read('src/App.jsx');
const css = read('src/index.css');
const modal = read('src/components/ProjectModal.jsx');
const profileModal = read('src/components/ProfileModal.jsx');

assert.equal(chapters.length, 6, 'portfolioData should define six chapters');
assert.equal(profile.name, 'Đặng Vũ Trà My');
assert.match(profile.intro, /góc nhỏ bình yên/);
assert.match(profile.hobby, /đọc tiểu thuyết/);
assert.match(profile.style, /Dễ thương và nhẹ nhàng/);
assert.match(profile.future, /Sở hữu trí tuệ/);
assert.equal(goals.length, 3, 'portfolioData should define three profile goals');
assert.deepEqual(
  goals.map((goal) => goal.title),
  [
    'Viết nên câu chuyện số của riêng mình',
    'Hòa quyện sự mềm mại và tính logic',
    'Lan tỏa năng lượng tích cực',
  ],
);

const expectedChapters = [
  {
    number: '01',
    title: 'Tổ chức, sắp xếp và lưu trữ dữ liệu',
    focusLabel: 'Trọng tâm thực hiện',
    fullText:
      'Mình đã dọn dẹp lại Google Drive giống như cách mình sắp xếp một kệ sách tiểu thuyết.',
  },
  {
    number: '02',
    title: 'Khai thác dữ liệu và thông tin',
    focusLabel: 'Trọng tâm thực hiện',
    fullText: 'Để không bị lạc giữa biển chữ trên mạng',
  },
  {
    number: '03',
    title: 'Tổng quan về trí tuệ nhân tạo (AI)',
    focusLabel: 'Góc nhìn phản biện độc lập',
    fullText: 'AI có thể viết ra một văn bản pháp lý rất nhanh',
  },
  {
    number: '04',
    title: 'Giao tiếp và hợp tác trong môi trường số',
    focusLabel: 'Trọng tâm thực hiện',
    fullText: 'Nhóm mình giống như một câu lạc bộ đọc sách nhỏ trên không gian Notion.',
  },
  {
    number: '05',
    title: 'Sáng tạo nội dung số',
    focusLabel: 'Trọng tâm thực hiện',
    fullText: 'Mình dùng AI gợi ý kịch bản để tạo ra một chiếc video ngắn',
  },
  {
    number: '06',
    title: 'An toàn và liêm chính học thuật',
    focusLabel: 'Tuyên ngôn liêm chính',
    fullText: 'Việc copy nội dung AI mà không trích dẫn cũng giống như đánh cắp bản thảo',
  },
];

for (const expected of expectedChapters) {
  const chapter = chapters.find((item) => item.number === expected.number);
  assert.ok(chapter, `Chapter ${expected.number} should exist`);
  assert.equal(chapter.title, expected.title);
  assert.equal(chapter.focusLabel, expected.focusLabel);
  assert.match(chapter.fullText, new RegExp(expected.fullText));
  assert.ok(chapter.shortText.length < chapter.fullText.length);
  assert.equal(chapter.pdfLabel, `Mở file PDF bài tập ${Number(expected.number)}`);
}

assert.match(app, /import\s+ProjectModal\s+from\s+'\.\/components\/ProjectModal\.jsx'/);
assert.match(app, /import\s+ProfileModal\s+from\s+'\.\/components\/ProfileModal\.jsx'/);
assert.match(app, /import\s+\{\s*chapters,\s*goals,\s*profile\s*\}\s+from\s+'\.\/data\/portfolioData\.js'/);
assert.match(app, /const\s+\[\s*selectedProject\s*,\s*setSelectedProject\s*\]\s*=\s*React\.useState\(null\)/);
assert.match(app, /const\s+\[\s*isProfileModalOpen\s*,\s*setIsProfileModalOpen\s*\]\s*=\s*React\.useState\(false\)/);
assert.match(app, /chapters\.map\(\(chapter,\s*index\)\s*=>/);
assert.equal(
  [...app.matchAll(/<button[\s\S]*?className="text-wrapper-6"[\s\S]*?Xem thêm[\s\S]*?<\/button>/g)].length,
  1,
  'Mapped Xem thêm controls should be buttons that open the modal',
);
assert.equal(
  [...app.matchAll(/<a[\s\S]*?className="text-wrapper-6"[\s\S]*?Xem thêm[\s\S]*?<\/a>/g)].length,
  0,
  'Project cards should not open PDFs directly',
);
assert.match(app, /<ProjectModal[\s\S]*?project=\{selectedProject\}[\s\S]*?onClose=\{\(\) => setSelectedProject\(null\)\}/);
assert.match(app, /<button[\s\S]*?className="profile-more-button"[\s\S]*?Nhiều hơn[\s\S]*?<\/button>/);
assert.match(app, /onClick=\{\(\) => setIsProfileModalOpen\(true\)\}/);
assert.match(app, /<ProfileModal[\s\S]*?isOpen=\{isProfileModalOpen\}[\s\S]*?profile=\{profile\}[\s\S]*?goals=\{goals\}[\s\S]*?onClose=\{\(\) => setIsProfileModalOpen\(false\)\}/);

assert.match(modal, /const\s+ProjectModal\s*=\s*\(\{\s*project,\s*onClose\s*\}\)/);
assert.match(modal, /role="dialog"/);
assert.match(modal, /aria-modal="true"/);
assert.match(modal, /project\.focusLabel/);
assert.match(modal, /project\.fullText/);
assert.match(modal, /href=\{project\.pdfUrl\}/);
assert.match(modal, /target="_blank"/);
assert.match(modal, /rel="noopener noreferrer"/);
assert.match(modal, /project\.pdfLabel/);

assert.match(profileModal, /const\s+ProfileModal\s*=\s*\(\{\s*isOpen,\s*profile,\s*goals,\s*onClose\s*\}\)/);
assert.match(profileModal, /role="dialog"/);
assert.match(profileModal, /aria-modal="true"/);
assert.match(profileModal, /profile\.intro/);
assert.match(profileModal, /profile\.name/);
for (const key of ['major', 'school', 'hobby', 'style', 'future']) {
  assert.match(profileModal, new RegExp(`'${key}'`), `ProfileModal should include ${key} detail card`);
}
assert.match(profileModal, /profile\[key\]/);
assert.match(profileModal, /goals\.map\(\(goal,\s*index\)/);
assert.match(profileModal, /className="profile-modal-hero"/);
assert.match(profileModal, /className="profile-modal-details-grid"/);
assert.match(profileModal, /className="profile-info-card"/);
assert.match(profileModal, /className="profile-goals-grid"/);
assert.match(profileModal, /className="profile-goal-card"/);
assert.match(profileModal, /className="profile-goal-number"/);

for (const selector of [
  '.profile-modal-hero',
  '.profile-modal-details-grid',
  '.profile-info-card',
  '.profile-goals-grid',
  '.profile-goal-card',
  '.profile-goal-number',
]) {
  assert.match(css, new RegExp(selector.replace('.', '\\.')), `${selector} should be styled`);
}
