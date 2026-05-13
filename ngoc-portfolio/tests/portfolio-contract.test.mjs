import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = process.cwd();
const dataPath = join(root, 'src', 'data', 'portfolioData.js');
const projectsSectionPath = join(
  root,
  'src',
  'components',
  'sections',
  'ProjectsSection.jsx'
);
const menuCardPath = join(root, 'src', 'components', 'ui', 'MenuCard.jsx');

assert.ok(existsSync(dataPath), 'portfolioData.js must exist');

const data = await import(pathToFileURL(dataPath));

assert.equal(data.personalInfo.name, 'Lê Phương Bảo Ngọc');
assert.equal(data.projects.length, 6, 'portfolio must render 6 assignment projects');

for (const [index, project] of data.projects.entries()) {
  const expectedFile = `bt${index + 1}.pdf`;
  assert.equal(
    basename(fileURLToPath(project.file)),
    expectedFile,
    `${project.title} must link to ${expectedFile}`
  );
  assert.ok(
    existsSync(fileURLToPath(project.file)),
    `${expectedFile} must exist in docs`
  );
}

const projectsSection = readFileSync(projectsSectionPath, 'utf8');
const menuCard = readFileSync(menuCardPath, 'utf8');

assert.match(
  projectsSection,
  /<Modal[\s>]/,
  'ProjectsSection must open assignment PDFs in a modal'
);
assert.match(
  projectsSection,
  /<iframe[\s>]/,
  'ProjectsSection modal must render the assignment PDF in an iframe'
);
assert.match(
  menuCard,
  />\s*Xem\s*</,
  'each assignment card must include a "Xem" button'
);
