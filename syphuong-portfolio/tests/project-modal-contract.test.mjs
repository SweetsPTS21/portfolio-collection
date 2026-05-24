import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

const projects = read("src/components/projects/ProjectDockGrid.jsx");
const css = read("src/index.css");

assert.doesNotMatch(projects, /<details|<summary/, "project cards must not use collapse details");
assert.match(projects, /useState/, "project cards must store the selected project for a modal");
assert.match(projects, /onClick=\{\(\) => setSelectedProject\(project\)\}/, "clicking a project card must open the modal");
assert.match(projects, /role="dialog"/, "project process must render in an accessible modal dialog");
assert.match(projects, /selectedProject\.process/, "modal must show the selected project process content");
assert.match(projects, /selectedProject\.evidenceHref/, "modal must link to the selected project evidence");
assert.match(projects, /onKeyDown/, "project cards must support keyboard opening");
assert.match(projects, /Escape/, "modal must close with the Escape key");

assert.match(css, /\.project-modal-backdrop/, "CSS must style the modal backdrop");
assert.match(css, /\.project-modal/, "CSS must style the modal panel");
