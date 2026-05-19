# PDF Content Display — Implementation Plan (Phase 2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hiển thị toàn bộ nội dung các file PDF (bt1–bt6) trực tiếp trên trang Projects của nhi-portfolio dưới dạng ảnh từng trang + text HTML, cho phép người dùng xem nội dung ngay trên web.

**Architecture:** Sử dụng ảnh PNG đã extract sẵn (từ tool pdf-extractor) + text JSON. Thêm trang chi tiết ProjectDetailPage hiển thị nội dung từng trang PDF dưới dạng ảnh với text bên dưới. Thêm PdfViewerModal cho phép xem nhanh dạng gallery. Route `/projects/:chapter`.

**Tech Stack:** React 19, react-router-dom 7, framer-motion 12, lucide-react, CSS (static assets — no runtime PDF processing)

**Extracted Assets Location:** `src/assets/pdf-content/bt1/` through `bt6/`, each containing `page-N.png` + `content.json`

---

## File Map

| File | Responsibility |
|------|---------------|
| `src/data/pdfContentData.js` | Import và export content.json data cho 6 PDFs |
| `src/pages/ProjectDetailPage.jsx` | Trang chi tiết — hiển thị ảnh + text từng trang |
| `src/components/projects/PageGallery.jsx` | Component gallery hiển thị ảnh các trang PDF |
| `src/components/projects/PdfViewerModal.jsx` | Modal overlay xem nhanh ảnh PDF |
| `src/app/routeConfig.jsx` | Thêm route `/projects/:chapter` |
| `src/pages/ProjectsPage.jsx` | Thêm nút mở modal + link chi tiết |
| `src/components/projects/FlowerCard.jsx` | Thêm nút "Xem nội dung" |
| `src/index.css` | Styles cho gallery, modal, detail page |

---

### Task 1: PDF Content Data Layer

**Files:**
- Create: `src/data/pdfContentData.js`

- [ ] **Step 1: Create pdfContentData.js that imports all content.json files**

```js
import bt1Content from '../assets/pdf-content/bt1/content.json';
import bt2Content from '../assets/pdf-content/bt2/content.json';
import bt3Content from '../assets/pdf-content/bt3/content.json';
import bt4Content from '../assets/pdf-content/bt4/content.json';
import bt5Content from '../assets/pdf-content/bt5/content.json';
import bt6Content from '../assets/pdf-content/bt6/content.json';

// Image imports for each PDF page
const bt1Images = import.meta.glob('../assets/pdf-content/bt1/page-*.png', { eager: true, import: 'default' });
const bt2Images = import.meta.glob('../assets/pdf-content/bt2/page-*.png', { eager: true, import: 'default' });
const bt3Images = import.meta.glob('../assets/pdf-content/bt3/page-*.png', { eager: true, import: 'default' });
const bt4Images = import.meta.glob('../assets/pdf-content/bt4/page-*.png', { eager: true, import: 'default' });
const bt5Images = import.meta.glob('../assets/pdf-content/bt5/page-*.png', { eager: true, import: 'default' });
const bt6Images = import.meta.glob('../assets/pdf-content/bt6/page-*.png', { eager: true, import: 'default' });

function resolveImages(imageGlob, prefix) {
  const resolved = {};
  for (const [path, url] of Object.entries(imageGlob)) {
    const match = path.match(/page-(\d+)\.png$/);
    if (match) {
      resolved[parseInt(match[1], 10)] = url;
    }
  }
  return resolved;
}

const allImages = [
  null, // index 0 unused
  resolveImages(bt1Images, 'bt1'),
  resolveImages(bt2Images, 'bt2'),
  resolveImages(bt3Images, 'bt3'),
  resolveImages(bt4Images, 'bt4'),
  resolveImages(bt5Images, 'bt5'),
  resolveImages(bt6Images, 'bt6'),
];

const allContent = [null, bt1Content, bt2Content, bt3Content, bt4Content, bt5Content, bt6Content];

/**
 * Get PDF content for a specific chapter.
 * @param {number} chapter - 1-based chapter number (1-6)
 * @returns {{ source: string, totalPages: number, pages: Array<{ page: number, image: string, text: string, width: number, height: number }> }}
 */
export function getPdfContent(chapter) {
  const content = allContent[chapter];
  if (!content) return null;

  const images = allImages[chapter];

  return {
    ...content,
    pages: content.pages.map((page) => ({
      ...page,
      imageUrl: images[page.page] || null,
    })),
  };
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npx eslint src/data/pdfContentData.js`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/data/pdfContentData.js src/assets/pdf-content/
git commit -m "feat(nhi): add extracted PDF content data layer with images"
```

---

### Task 2: PageGallery Component

**Files:**
- Create: `src/components/projects/PageGallery.jsx`

- [ ] **Step 1: Create PageGallery component**

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function PageGallery({ pages, onPageClick }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!pages || pages.length === 0) return null;

  const page = pages[currentPage];

  return (
    <div className="page-gallery">
      <div className="page-gallery-viewer">
        <motion.img
          key={currentPage}
          className="page-gallery-image"
          src={page.imageUrl}
          alt={`Trang ${page.page}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => onPageClick && onPageClick(currentPage)}
        />
        {onPageClick && (
          <button
            className="page-gallery-expand"
            onClick={() => onPageClick(currentPage)}
            type="button"
            aria-label="Phóng to"
          >
            <Maximize2 size={18} />
          </button>
        )}
      </div>

      <div className="page-gallery-controls">
        <button
          className="page-gallery-btn"
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          type="button"
          aria-label="Trang trước"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="page-gallery-counter">
          {currentPage + 1} / {pages.length}
        </span>
        <button
          className="page-gallery-btn"
          onClick={() => setCurrentPage((p) => Math.min(pages.length - 1, p + 1))}
          disabled={currentPage === pages.length - 1}
          type="button"
          aria-label="Trang sau"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {page.text && (
        <details className="page-gallery-text">
          <summary>Xem nội dung text trang {page.page}</summary>
          <div className="page-text-content">
            {page.text.split('\n').map((line, i) => (
              <p key={i}>{line || '\u00A0'}</p>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npx eslint src/components/projects/PageGallery.jsx`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/projects/PageGallery.jsx
git commit -m "feat(nhi): add PageGallery component for PDF page navigation"
```

---

### Task 3: PdfViewerModal Component

**Files:**
- Create: `src/components/projects/PdfViewerModal.jsx`

- [ ] **Step 1: Create PdfViewerModal**

```jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function PdfViewerModal({ project, pages, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!project) return;
    setCurrentPage(0);
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project || !pages) return null;

  const page = pages[currentPage];

  return (
    <AnimatePresence>
      <motion.div
        className="pdf-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="presentation"
      >
        <motion.section
          className="pdf-modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="pdf-modal-header">
            <div className="pdf-modal-info">
              <span className="pdf-modal-chapter">Chương {project.chapter}</span>
              <h2 className="pdf-modal-title">{project.title}</h2>
            </div>
            <div className="pdf-modal-actions">
              {project.pdf && (
                <a
                  className="pdf-modal-btn"
                  href={project.pdf}
                  download
                  aria-label="Tải PDF gốc"
                >
                  <Download size={16} />
                </a>
              )}
              <button
                className="pdf-modal-btn close"
                onClick={onClose}
                aria-label="Đóng"
                type="button"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="pdf-modal-body">
            <img
              className="pdf-modal-image"
              src={page.imageUrl}
              alt={`${project.title} — Trang ${page.page}`}
            />
          </div>

          <footer className="pdf-modal-footer">
            <button
              className="page-gallery-btn"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              type="button"
              aria-label="Trang trước"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="page-gallery-counter">
              Trang {currentPage + 1} / {pages.length}
            </span>
            <button
              className="page-gallery-btn"
              onClick={() => setCurrentPage((p) => Math.min(pages.length - 1, p + 1))}
              disabled={currentPage === pages.length - 1}
              type="button"
              aria-label="Trang sau"
            >
              <ChevronRight size={20} />
            </button>
          </footer>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npx eslint src/components/projects/PdfViewerModal.jsx`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/projects/PdfViewerModal.jsx
git commit -m "feat(nhi): add PdfViewerModal with image-based page navigation"
```

---

### Task 4: ProjectDetailPage

**Files:**
- Create: `src/pages/ProjectDetailPage.jsx`

- [ ] **Step 1: Create ProjectDetailPage**

```jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import PageGallery from '../components/projects/PageGallery';
import { projects } from '../data/portfolioData';
import { getPdfContent } from '../data/pdfContentData';

export default function ProjectDetailPage() {
  const { chapter } = useParams();
  const chapterNum = parseInt(chapter, 10);
  const project = projects.items.find((p) => p.chapter === chapterNum);
  const pdfContent = getPdfContent(chapterNum);

  if (!project) {
    return (
      <PageShell eyebrow="Not found" title="Không tìm thấy dự án">
        <p className="lead">Dự án không tồn tại.</p>
        <Link to="/projects" className="flower-action primary">
          ← Quay lại danh sách
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell eyebrow={`Chương ${project.chapter}`} title={project.title}>
      <motion.div
        className="project-detail"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="project-detail-nav">
          <Link to="/projects" className="flower-action secondary">
            <ArrowLeft size={16} />
            <span>Quay lại</span>
          </Link>
          <div className="project-detail-actions">
            {project.pdf && (
              <a className="flower-action primary" href={project.pdf} download>
                <Download size={16} />
                <span>Tải PDF gốc</span>
              </a>
            )}
          </div>
        </div>

        <div className="project-detail-meta">
          <h3 className="project-detail-objective">{project.content}</h3>
          <p className="project-detail-process">{project.process}</p>
        </div>

        {pdfContent && (
          <PageGallery pages={pdfContent.pages} />
        )}

        <div className="project-detail-pagination">
          {chapterNum > 1 && (
            <Link
              to={`/projects/${chapterNum - 1}`}
              className="flower-action secondary"
            >
              ← Chương {chapterNum - 1}
            </Link>
          )}
          {chapterNum < 6 && (
            <Link
              to={`/projects/${chapterNum + 1}`}
              className="flower-action primary"
            >
              Chương {chapterNum + 1} →
            </Link>
          )}
        </div>
      </motion.div>
    </PageShell>
  );
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npx eslint src/pages/ProjectDetailPage.jsx`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/pages/ProjectDetailPage.jsx
git commit -m "feat(nhi): add ProjectDetailPage with image gallery and text"
```

---

### Task 5: Update Route Config

**Files:**
- Modify: `src/app/routeConfig.jsx`

- [ ] **Step 1: Add project detail route**

```jsx
import React from 'react';
import { Flower2, BookOpen, Heart } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ConclusionPage from '../pages/ConclusionPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: Flower2 },
  { to: '/projects', label: 'Dự án', icon: BookOpen },
  { to: '/conclusion', label: 'Tổng kết', icon: Heart },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:chapter', element: <ProjectDetailPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/app/routeConfig.jsx
git commit -m "feat(nhi): add /projects/:chapter route"
```

---

### Task 6: Update FlowerCard and ProjectsPage

**Files:**
- Modify: `src/components/projects/FlowerCard.jsx`
- Modify: `src/pages/ProjectsPage.jsx`

- [ ] **Step 1: Update FlowerCard to add view and detail buttons**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import flowerFrame from '../../assets/bunny-cloud-garden/flower-frame.svg';

export default function FlowerCard({ project, index, onViewPdf }) {
  return (
    <motion.article
      className="flower-card"
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <img className="flower-card-frame" src={flowerFrame} alt="" />
      <div className="flower-content">
        <span className="flower-number">Chương {project.chapter}</span>
        <h2>{project.title}</h2>
        <h3>{project.content}</h3>
        <p>{project.process}</p>
        {project.pdf && (
          <div className="flower-actions">
            <button
              className="flower-action primary"
              onClick={() => onViewPdf(project)}
              type="button"
              aria-label={`Xem nội dung ${project.title}`}
            >
              <Eye size={17} />
              <span>Xem nhanh</span>
            </button>
            <Link
              className="flower-action secondary"
              to={`/projects/${project.chapter}`}
              aria-label={`Xem chi tiết ${project.title}`}
            >
              <ArrowRight size={17} />
              <span>Chi tiết</span>
            </Link>
            <a
              className="flower-action secondary"
              href={project.pdf}
              download
              aria-label={`Tải PDF ${project.title}`}
            >
              <Download size={17} />
              <span>Tải về</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
```

- [ ] **Step 2: Update ProjectsPage to integrate modal**

```jsx
import React, { useState } from 'react';
import PageShell from '../components/layout/PageShell';
import FlowerCard from '../components/projects/FlowerCard';
import PdfViewerModal from '../components/projects/PdfViewerModal';
import { projects } from '../data/portfolioData';
import { getPdfContent } from '../data/pdfContentData';
import bunnyReading from '../assets/bunny-cloud-garden/bunny-reading.svg';
import grassBottom from '../assets/bunny-cloud-garden/grass-bottom.svg';

export default function ProjectsPage() {
  const [viewingProject, setViewingProject] = useState(null);

  const pdfPages = viewingProject ? getPdfContent(viewingProject.chapter)?.pages : null;

  return (
    <PageShell eyebrow="Flower bed projects" title="Sản phẩm nghiên cứu">
      <div className="projects-hero">
        <img className="projects-hero-bunny" src={bunnyReading} alt="" />
        <p className="lead">{projects.intro}</p>
      </div>

      <section className="project-grid">
        {projects.items.map((project, index) => (
          <FlowerCard
            key={project.title}
            project={project}
            index={index}
            onViewPdf={setViewingProject}
          />
        ))}
      </section>

      <img className="grass-footer" src={grassBottom} alt="" />

      <PdfViewerModal
        project={viewingProject}
        pages={pdfPages}
        onClose={() => setViewingProject(null)}
      />
    </PageShell>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/projects/FlowerCard.jsx src/pages/ProjectsPage.jsx
git commit -m "feat(nhi): integrate PDF viewer modal into projects page"
```

---

### Task 7: CSS Styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add styles before the responsive media queries section**

```css
/* ─── Page Gallery ─── */
.page-gallery {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.page-gallery-viewer {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1.5px solid var(--border);
  background: #fff;
  box-shadow: var(--shadow-card);
  cursor: pointer;
}

.page-gallery-image {
  width: 100%;
  height: auto;
  display: block;
}

.page-gallery-expand {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: var(--shadow-soft);
  color: var(--ink);
  transition: transform 0.2s, background 0.2s;
}

.page-gallery-expand:hover {
  transform: scale(1.1);
  background: #fff;
}

.page-gallery-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.page-gallery-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 138, 191, 0.1);
  color: var(--bunny-pink);
  transition: background 0.2s, transform 0.2s;
}

.page-gallery-btn:hover:not(:disabled) {
  background: rgba(255, 138, 191, 0.2);
  transform: scale(1.05);
}

.page-gallery-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-gallery-counter {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--muted);
}

.page-gallery-text {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0;
  overflow: hidden;
}

.page-gallery-text summary {
  padding: 12px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--bunny-pink);
  cursor: pointer;
  transition: background 0.2s;
}

.page-gallery-text summary:hover {
  background: rgba(255, 138, 191, 0.05);
}

.page-text-content {
  padding: 16px;
  border-top: 1px solid var(--border);
  max-height: 400px;
  overflow-y: auto;
}

.page-text-content p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 4px;
}

/* ─── PDF Modal ─── */
.pdf-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(61, 34, 68, 0.6);
  backdrop-filter: blur(6px);
}

.pdf-modal {
  width: 100%;
  max-width: 800px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  background: var(--cloud-white);
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--border);
  box-shadow: 0 20px 60px rgba(61, 34, 68, 0.25);
  overflow: hidden;
}

.pdf-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: linear-gradient(135deg, var(--bunny-pink) 0%, #f070a8 100%);
  color: #fff;
}

.pdf-modal-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pdf-modal-chapter {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.85;
}

.pdf-modal-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.pdf-modal-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pdf-modal-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  transition: background 0.2s;
}

.pdf-modal-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}

.pdf-modal-btn.close:hover {
  background: rgba(255, 80, 80, 0.5);
}

.pdf-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.pdf-modal-image {
  width: 100%;
  height: auto;
  display: block;
}

.pdf-modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.8);
}

/* ─── Project Detail Page ─── */
.project-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-detail-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.project-detail-actions {
  display: flex;
  gap: 10px;
}

.project-detail-meta {
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(6px);
}

.project-detail-objective {
  font-size: 1rem;
  font-weight: 600;
  color: var(--bunny-pink);
  margin-bottom: 8px;
}

.project-detail-process {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

.project-detail-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 8px;
}
```

- [ ] **Step 2: Add responsive styles inside existing `@media (max-width: 768px)` block**

```css
  .pdf-modal-backdrop {
    padding: 8px;
  }

  .pdf-modal {
    max-height: 95vh;
  }

  .pdf-modal-header {
    padding: 10px 14px;
  }

  .pdf-modal-title {
    font-size: 0.9rem;
  }

  .project-detail-nav {
    flex-direction: column;
    align-items: stretch;
  }

  .project-detail-actions {
    justify-content: center;
  }

  .project-detail-pagination {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .page-text-content {
    max-height: 250px;
  }
```

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat(nhi): add CSS for page gallery, PDF modal, and detail page"
```

---

### Task 8: Build & Verify

- [ ] **Step 1: Run lint**

Run: `npx eslint src/`
Expected: No errors

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Run E2E tests**

Run: `npx playwright test`
Expected: Existing tests pass

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "feat(nhi): phase 2 complete - PDF content displayed as images + text"
```
