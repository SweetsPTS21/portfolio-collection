import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");

assert.ok(existsSync(join(root, "src/App.jsx")), "src/App.jsx should exist");
assert.ok(existsSync(join(root, "src/data/portfolioData.js")), "portfolio data should exist");
assert.ok(existsSync(join(root, "src/components/layout/ArcticOrcaBackground.jsx")), "Arctic background should exist");

const app = read("src/App.jsx");
for (const route of ['"/"', '"/projects"', '"/conclusion"']) {
  assert.ok(app.includes(route), `App should define ${route} route`);
}

const data = read("src/data/portfolioData.js");
for (const required of ["vinh", "bài tập", "tổng kết"]) {
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
