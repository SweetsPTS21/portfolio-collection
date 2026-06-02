import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");

assert.ok(existsSync(join(root, "src/App.jsx")), "src/App.jsx should exist");
assert.ok(existsSync(join(root, "src/data/portfolioData.js")), "portfolio data should exist");
assert.ok(existsSync(join(root, "src/components/layout/ArcticOrcaBackground.jsx")), "Arctic background should exist");

const app = read("src/App.jsx");
for (const route of ['"/"', '"/projects"', '"/conclusion"']) {
  assert.ok(app.includes(route), `App should define ${route} route`);
}

const data = read("src/data/portfolioData.js");
for (const required of ["vinh", "bài tập", "tổng kết", "24063393", "mendeley", "google drive", "nguyên tắc", "nhóm 39", "10 tài liệu tham khảo", "heinonline"]) {
  assert.ok(data.toLowerCase().includes(required), `data should include ${required} content from docs/portfolio.md`);
}

const styles = read("src/styles.css");
for (const token of ["--ice-white", "--orca-blue", "--polar-navy", "orca-swim", "sonar-pulse"]) {
  assert.ok(styles.includes(token), `styles should include ${token}`);
}

const background = read("src/components/layout/ArcticOrcaBackground.jsx");
for (const asset of ["orca", "submarine", "iceberg", "sonar", "bubble"]) {
  assert.ok(background.toLowerCase().includes(asset), `background should include ${asset}`);
}

assert.ok(data.includes("processSteps"), "projects should split long process text into processSteps arrays");
assert.ok(!data.includes("process:\n"), "projects should not keep one long process string");
assert.ok(existsSync(join(root, "src/components/projects/ProjectProcessModal.jsx")), "project process modal should exist");
const modal = read("src/components/projects/ProjectProcessModal.jsx");
for (const action of ["Đóng", "Mở file PDF", "Sao chép tóm tắt"]) {
  assert.ok(modal.includes(action), `modal should include ${action} action`);
}
const projectCard = read("src/components/cards/ProjectLogCard.jsx");
assert.ok(projectCard.includes("onOpenProcess"), "project cards should open process modal instead of rendering long process text");