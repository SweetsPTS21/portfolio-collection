import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const data = readFileSync(join(root, 'src/data/portfolioData.js'), 'utf8');

const requiredSnippets = [
  'WELCOME TO MY PORTFOLIO',
  'Giang Lê Phương Linh',
  'sinh viên năm hai chuyên ngành Luật Học',
  'hành trình khám phá công nghệ, tư duy sáng tạo',
  'bước đi đầu tiên đầy tự hào',
  'Máy tính và các thiết bị ngoại vi',
  'Cơ sở dữ liệu quốc gia về văn bản pháp luật',
  'các văn phòng luật sư tự động hóa việc soát xét hợp đồng',
  'kiểm soát quyền truy cập thư mục',
  'AI tạo phụ đề tự động',
  'AI ảo tưởng có thể tạo ra các điều luật hoặc án lệ giả mạo',
  'một bước đi ra khỏi vùng an toàn',
  'Phương Linh chân thành cảm ơn Thầy/Cô',
];

for (const snippet of requiredSnippets) {
  assert.match(data, new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${snippet} must be represented in portfolioData.js`);
}

assert.doesNotMatch(data, /Phạm Thanh Trà/, 'old portfolio owner must not remain in data');
