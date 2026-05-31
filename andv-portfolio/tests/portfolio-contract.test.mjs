import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const read = (file) => readFileSync(path.join(root, file), 'utf8');
const exists = (file) => existsSync(path.join(root, file));

const tests = [
  ['declares required runtime dependencies', () => {
    const pkg = JSON.parse(read('package.json'));
    for (const dep of ['react', 'react-dom', 'vite', '@vitejs/plugin-react', 'framer-motion', 'lucide-react', 'lenis', 'react-router-dom']) {
      assert.ok(pkg.dependencies[dep], `${dep} missing`);
    }
    assert.match(pkg.dependencies.react, /^18/);
  }],
  ['defines required route pages and router paths', () => {
    const app = read('src/App.jsx');
    for (const route of ['path="/"', 'path="/projects"', 'path="/conclusion"']) {
      assert.ok(app.includes(route), `${route} missing`);
    }
    assert.ok(!app.includes('path="/archive"'), 'archive route must be removed');
    assert.ok(!app.includes('ArchivePage'), 'ArchivePage import/use must be removed');
    for (const page of ['src/routes/AboutPage.jsx', 'src/routes/ProjectsPage.jsx', 'src/routes/ConclusionPage.jsx']) {
      assert.ok(exists(page), `${page} missing`);
    }
    assert.ok(!exists('src/routes/ArchivePage.jsx'), 'src/routes/ArchivePage.jsx must be removed');
  }],
  ['keeps portfolio content sourced from data module', () => {
    const data = read('src/data/portfolioData.js');
    for (const text of ['Đào Việt An', 'Luật Thương mại Quốc tế', '24064093', 'Chương 1', 'Chương 6']) {
      assert.ok(data.includes(text), `${text} missing from data`);
    }
  }],
  ['exposes real pdf files through project cards', () => {
    const data = read('src/data/portfolioData.js');
    const card = read('src/components/cards/ChapterTalismanCard.jsx');
    assert.ok(card.includes('target="_blank"'), 'open pdf action missing');
    assert.ok(card.includes('download'), 'download pdf action missing');
    for (let index = 1; index <= 6; index += 1) {
      assert.ok(data.includes(`/docs/bt${index}.pdf`), `bt${index}.pdf link missing`);
      assert.ok(exists(`docs/bt${index}.pdf`), `docs/bt${index}.pdf missing`);
    }
  }],
  ['includes eastern mascot png assets', () => {
    for (const file of [
      'public/assets/mascots/dragon-hero.png',
      'public/assets/mascots/dragon-corner.png',
      'public/assets/mascots/phoenix-accent.png',
      'public/assets/mascots/kylin-seal.png',
    ]) {
      assert.ok(exists(file), `${file} missing`);
      assert.ok(statSync(path.join(root, file)).size > 2000, `${file} too small`);
    }
  }],
  ['implements eastern stage background and lenis smooth scroll', () => {
    assert.ok(exists('src/components/background/EasternStageBackground.jsx'));
    assert.ok(read('src/hooks/useLenis.js').includes('Lenis'));
    const css = read('src/styles.css');
    for (const token of ['--color-bg-deep', '--color-primary', '--color-gold', '--color-paper', '--color-jade']) {
      assert.ok(css.includes(token), `${token} missing`);
    }
  }],
];

let failed = 0;

for (const [name, run] of tests) {
  try {
    run();
    console.log(`ok - ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`not ok - ${name}`);
    console.error(error.message);
  }
}

if (failed > 0) {
  process.exit(1);
}
