import assert from 'node:assert/strict';
import { test } from 'node:test';
import { about } from '../src/data/portfolioData.js';

test('about data preserves the full portfolio.md introduction content', () => {
  assert.equal(
    about.fullGreeting,
    'Welcome to my Portfolio! Rất vui vì bạn đã ghé thăm triển lãm kỹ thuật số của mình - nơi những điều khoản pháp luật khô khan được tô điểm bằng lăng kính của nghệ thuật và công nghệ.',
  );
  assert.equal(
    about.personalStory,
    'Với mình, mỗi vụ án là một câu chuyện, mỗi điều luật là một nét cọ, và việc của người học Luật là bức họa lại bức tranh công lý một cách chân thực nhất.',
  );
  assert.equal(
    about.styleDetail,
    'Trẻ trung, Sáng tạo và luôn tràn đầy năng lượng. Mình thích phá vỡ những ranh giới cũ kỹ để tìm ra những góc nhìn mới mẻ.',
  );
  assert.equal(
    about.portfolioGoal,
    'Portfolio này được xây dựng như là một minh chứng năng lực, khẳng định tư duy của một sinh viên Luật thế hệ mới - không rập khuôn, máy móc mà luôn chủ động kết hợp logic pháp lý với kỹ năng số hiện đại. Bên cạnh đó, đây cũng là sự định vị cá nhân: Tạo lập một bản sơ yếu lý lịch số sinh động, sẵn sàng kết nối với thầy cô, bạn bè và làm bệ phóng cho các cơ hội nghề nghiệp tương lai.',
  );
});

test('about tools remain grouped by their role from portfolio.md', () => {
  assert.deepEqual(about.toolGroups, [
    { label: 'Quản lý tài liệu', items: ['Google Drive', 'File Explorer'] },
    { label: 'Soạn thảo & trình bày', items: ['Microsoft Word', 'Canva'] },
    { label: 'Nghiên cứu học thuật', items: ['Google Scholar', 'Thư viện số'] },
    { label: 'Hỗ trợ AI', items: ['ChatGPT', 'Gemini'] },
    { label: 'Làm việc nhóm & trao đổi', items: ['Discord', 'Google Docs'] },
  ]);
});
