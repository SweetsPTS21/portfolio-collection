# PDF Extractor Tool — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone Python CLI tool that extracts images (page renders) and text from PDF files, outputting structured data ready to import into React portfolio projects.

**Architecture:** Single Python package with CLI entry point. Uses `pymupdf` (fitz) to render each PDF page as a PNG image and extract text per page. Outputs a folder per PDF containing page images + a `content.json` file with text and metadata. Supports batch processing of multiple PDFs.

**Tech Stack:** Python 3.14, pymupdf (PyMuPDF), Pillow (for optional image optimization), argparse (CLI)

---

## File Map

| File | Responsibility |
|------|---------------|
| `requirements.txt` | Python dependencies |
| `extract.py` | Main CLI entry point — parse args, orchestrate extraction |
| `extractor/pdf_reader.py` | Core logic: open PDF, render pages, extract text |
| `extractor/image_writer.py` | Save rendered pages as optimized PNG/WebP |
| `extractor/json_writer.py` | Write content.json with text + metadata |
| `extractor/__init__.py` | Package init |
| `tests/test_pdf_reader.py` | Tests for PDF reading logic |
| `README.md` | Usage documentation |

---

### Task 1: Project Setup

**Files:**
- Create: `d:\portfolio\tools\pdf-extractor\requirements.txt`
- Create: `d:\portfolio\tools\pdf-extractor\extractor\__init__.py`
- Create: `d:\portfolio\tools\pdf-extractor\README.md`

- [ ] **Step 1: Create requirements.txt**

```txt
pymupdf==1.25.5
Pillow==11.2.1
```

- [ ] **Step 2: Create extractor/__init__.py**

```python
"""PDF Extractor — Extract images and text from PDF files."""
```

- [ ] **Step 3: Create README.md**

```markdown
# PDF Extractor

CLI tool to extract page images and text from PDF files for use in React portfolio projects.

## Setup

```bash
cd d:\portfolio\tools\pdf-extractor
pip install -r requirements.txt
```

## Usage

Extract a single PDF:
```bash
python extract.py --input ../nhi-portfolio/docs/bt1.pdf --output ./output/bt1
```

Extract all PDFs in a folder:
```bash
python extract.py --input ../nhi-portfolio/docs --output ./output --batch
```

Options:
- `--dpi 200` — Resolution for page renders (default: 150)
- `--format png` — Image format: png or webp (default: webp)
- `--no-text` — Skip text extraction
- `--no-images` — Skip image rendering

## Output Structure

```
output/
  bt1/
    page-1.webp
    page-2.webp
    content.json
  bt2/
    ...
```

### content.json format

```json
{
  "source": "bt1.pdf",
  "totalPages": 3,
  "pages": [
    {
      "page": 1,
      "image": "page-1.webp",
      "text": "Extracted text content of page 1...",
      "width": 595,
      "height": 842
    }
  ]
}
```
```

- [ ] **Step 4: Install dependencies**

Run: `pip install -r requirements.txt`
Expected: pymupdf and Pillow installed successfully

- [ ] **Step 5: Verify pymupdf works**

Run: `python -c "import fitz; print(fitz.version)"`
Expected: Prints version tuple without errors

---

### Task 2: PDF Reader Module

**Files:**
- Create: `d:\portfolio\tools\pdf-extractor\extractor\pdf_reader.py`
- Create: `d:\portfolio\tools\pdf-extractor\tests\test_pdf_reader.py`

- [ ] **Step 1: Create test file**

```python
"""Tests for pdf_reader module."""
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from extractor.pdf_reader import open_pdf, render_page, extract_page_text, get_page_count


def test_open_pdf_returns_document():
    """Test that open_pdf returns a fitz Document for a valid PDF."""
    # Use bt1.pdf from nhi-portfolio as test fixture
    pdf_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "..", "nhi-portfolio", "docs", "bt1.pdf"
    )
    if not os.path.exists(pdf_path):
        print(f"SKIP: {pdf_path} not found")
        return
    doc = open_pdf(pdf_path)
    assert doc is not None
    assert get_page_count(doc) > 0
    doc.close()


def test_render_page_returns_bytes():
    """Test that render_page returns PNG bytes."""
    pdf_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "..", "nhi-portfolio", "docs", "bt1.pdf"
    )
    if not os.path.exists(pdf_path):
        print(f"SKIP: {pdf_path} not found")
        return
    doc = open_pdf(pdf_path)
    img_bytes, width, height = render_page(doc, 0, dpi=72)
    assert isinstance(img_bytes, bytes)
    assert len(img_bytes) > 100
    assert width > 0
    assert height > 0
    doc.close()


def test_extract_page_text_returns_string():
    """Test that extract_page_text returns a non-empty string."""
    pdf_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "..", "nhi-portfolio", "docs", "bt1.pdf"
    )
    if not os.path.exists(pdf_path):
        print(f"SKIP: {pdf_path} not found")
        return
    doc = open_pdf(pdf_path)
    text = extract_page_text(doc, 0)
    assert isinstance(text, str)
    # Text may or may not be empty depending on PDF type (scanned vs text-based)
    doc.close()


if __name__ == "__main__":
    test_open_pdf_returns_document()
    print("PASS: test_open_pdf_returns_document")
    test_render_page_returns_bytes()
    print("PASS: test_render_page_returns_bytes")
    test_extract_page_text_returns_string()
    print("PASS: test_extract_page_text_returns_string")
    print("\nAll tests passed!")
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `python tests/test_pdf_reader.py`
Expected: ImportError — module `extractor.pdf_reader` not found or functions not defined

- [ ] **Step 3: Implement pdf_reader.py**

```python
"""Core PDF reading logic using PyMuPDF (fitz)."""
import fitz


def open_pdf(path: str) -> fitz.Document:
    """Open a PDF file and return the document object.

    Args:
        path: Absolute or relative path to the PDF file.

    Returns:
        fitz.Document instance.

    Raises:
        FileNotFoundError: If the PDF file does not exist.
        RuntimeError: If the file cannot be opened as a PDF.
    """
    doc = fitz.open(path)
    if doc.is_encrypted:
        raise RuntimeError(f"PDF is encrypted: {path}")
    return doc


def get_page_count(doc: fitz.Document) -> int:
    """Return the number of pages in the document."""
    return doc.page_count


def render_page(doc: fitz.Document, page_index: int, dpi: int = 150) -> tuple[bytes, int, int]:
    """Render a single page as PNG image bytes.

    Args:
        doc: An open fitz.Document.
        page_index: Zero-based page index.
        dpi: Resolution in dots per inch (default 150).

    Returns:
        Tuple of (png_bytes, width_px, height_px).
    """
    page = doc[page_index]
    zoom = dpi / 72.0
    matrix = fitz.Matrix(zoom, zoom)
    pixmap = page.get_pixmap(matrix=matrix, alpha=False)
    png_bytes = pixmap.tobytes("png")
    return png_bytes, pixmap.width, pixmap.height


def extract_page_text(doc: fitz.Document, page_index: int) -> str:
    """Extract text content from a single page.

    Args:
        doc: An open fitz.Document.
        page_index: Zero-based page index.

    Returns:
        Extracted text as a string. May be empty for scanned/image-only pages.
    """
    page = doc[page_index]
    return page.get_text("text").strip()
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `python tests/test_pdf_reader.py`
Expected: All tests pass

---

### Task 3: Image Writer Module

**Files:**
- Create: `d:\portfolio\tools\pdf-extractor\extractor\image_writer.py`

- [ ] **Step 1: Create image_writer.py**

```python
"""Write rendered page images to disk with optional WebP conversion."""
import os
from io import BytesIO
from PIL import Image


def save_page_image(
    png_bytes: bytes,
    output_dir: str,
    page_number: int,
    fmt: str = "webp",
    quality: int = 85,
) -> str:
    """Save a rendered page image to disk.

    Args:
        png_bytes: Raw PNG image bytes from render_page().
        output_dir: Directory to save the image in.
        page_number: 1-based page number (used in filename).
        fmt: Output format — "png" or "webp" (default: "webp").
        quality: Compression quality for WebP (1-100, default 85).

    Returns:
        Filename of the saved image (e.g., "page-1.webp").
    """
    os.makedirs(output_dir, exist_ok=True)

    filename = f"page-{page_number}.{fmt}"
    filepath = os.path.join(output_dir, filename)

    if fmt == "webp":
        img = Image.open(BytesIO(png_bytes))
        img.save(filepath, "WEBP", quality=quality)
    else:
        with open(filepath, "wb") as f:
            f.write(png_bytes)

    return filename
```

- [ ] **Step 2: Quick manual verification**

Run: `python -c "from extractor.image_writer import save_page_image; print('OK')"`
Expected: Prints "OK" without errors

---

### Task 4: JSON Writer Module

**Files:**
- Create: `d:\portfolio\tools\pdf-extractor\extractor\json_writer.py`

- [ ] **Step 1: Create json_writer.py**

```python
"""Write extraction results as structured JSON."""
import json
import os


def write_content_json(
    output_dir: str,
    source_filename: str,
    pages: list[dict],
) -> str:
    """Write content.json with extracted page data.

    Args:
        output_dir: Directory to write content.json into.
        source_filename: Original PDF filename (e.g., "bt1.pdf").
        pages: List of page dicts with keys:
            - page (int): 1-based page number
            - image (str): image filename
            - text (str): extracted text
            - width (int): image width in pixels
            - height (int): image height in pixels

    Returns:
        Path to the written content.json file.
    """
    os.makedirs(output_dir, exist_ok=True)

    content = {
        "source": source_filename,
        "totalPages": len(pages),
        "pages": pages,
    }

    filepath = os.path.join(output_dir, "content.json")
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)

    return filepath
```

- [ ] **Step 2: Quick manual verification**

Run: `python -c "from extractor.json_writer import write_content_json; print('OK')"`
Expected: Prints "OK" without errors

---

### Task 5: Main CLI Entry Point

**Files:**
- Create: `d:\portfolio\tools\pdf-extractor\extract.py`

- [ ] **Step 1: Create extract.py**

```python
"""PDF Extractor CLI — Extract images and text from PDF files."""
import argparse
import os
import sys
from pathlib import Path

from extractor.pdf_reader import open_pdf, get_page_count, render_page, extract_page_text
from extractor.image_writer import save_page_image
from extractor.json_writer import write_content_json


def extract_single_pdf(
    pdf_path: str,
    output_dir: str,
    dpi: int = 150,
    fmt: str = "webp",
    extract_text: bool = True,
    extract_images: bool = True,
) -> None:
    """Extract content from a single PDF file.

    Args:
        pdf_path: Path to the PDF file.
        output_dir: Directory to write output into.
        dpi: Image resolution (default 150).
        fmt: Image format — "png" or "webp" (default "webp").
        extract_text: Whether to extract text (default True).
        extract_images: Whether to render page images (default True).
    """
    pdf_name = os.path.basename(pdf_path)
    print(f"\n{'='*50}")
    print(f"Processing: {pdf_name}")
    print(f"{'='*50}")

    doc = open_pdf(pdf_path)
    total_pages = get_page_count(doc)
    print(f"  Pages: {total_pages}")

    pages_data = []

    for i in range(total_pages):
        page_num = i + 1
        print(f"  Page {page_num}/{total_pages}...", end=" ")

        page_info = {
            "page": page_num,
            "image": None,
            "text": "",
            "width": 0,
            "height": 0,
        }

        if extract_images:
            png_bytes, width, height = render_page(doc, i, dpi=dpi)
            filename = save_page_image(png_bytes, output_dir, page_num, fmt=fmt)
            page_info["image"] = filename
            page_info["width"] = width
            page_info["height"] = height
            print(f"image OK", end=" ")

        if extract_text:
            text = extract_page_text(doc, i)
            page_info["text"] = text
            text_preview = text[:50].replace("\n", " ") if text else "(no text)"
            print(f"text: {text_preview}...", end="")

        pages_data.append(page_info)
        print()

    doc.close()

    json_path = write_content_json(output_dir, pdf_name, pages_data)
    print(f"\n  Output: {output_dir}")
    print(f"  JSON:   {json_path}")
    print(f"  Done!")


def find_pdfs_in_directory(directory: str) -> list[str]:
    """Find all PDF files in a directory (non-recursive)."""
    pdfs = []
    for f in sorted(os.listdir(directory)):
        if f.lower().endswith(".pdf"):
            pdfs.append(os.path.join(directory, f))
    return pdfs


def main():
    parser = argparse.ArgumentParser(
        description="Extract images and text from PDF files for portfolio projects."
    )
    parser.add_argument(
        "--input", "-i",
        required=True,
        help="Path to a PDF file or directory containing PDFs.",
    )
    parser.add_argument(
        "--output", "-o",
        required=True,
        help="Output directory. Each PDF gets a subfolder (in batch mode).",
    )
    parser.add_argument(
        "--batch", "-b",
        action="store_true",
        help="Process all PDFs in the input directory.",
    )
    parser.add_argument(
        "--dpi",
        type=int,
        default=150,
        help="Image resolution in DPI (default: 150).",
    )
    parser.add_argument(
        "--format", "-f",
        choices=["png", "webp"],
        default="webp",
        help="Output image format (default: webp).",
    )
    parser.add_argument(
        "--no-text",
        action="store_true",
        help="Skip text extraction.",
    )
    parser.add_argument(
        "--no-images",
        action="store_true",
        help="Skip page image rendering.",
    )

    args = parser.parse_args()

    if args.batch:
        if not os.path.isdir(args.input):
            print(f"Error: --input must be a directory in batch mode: {args.input}")
            sys.exit(1)
        pdfs = find_pdfs_in_directory(args.input)
        if not pdfs:
            print(f"No PDF files found in: {args.input}")
            sys.exit(1)
        print(f"Found {len(pdfs)} PDF(s) in {args.input}")
        for pdf_path in pdfs:
            stem = Path(pdf_path).stem
            out_dir = os.path.join(args.output, stem)
            extract_single_pdf(
                pdf_path,
                out_dir,
                dpi=args.dpi,
                fmt=args.format,
                extract_text=not args.no_text,
                extract_images=not args.no_images,
            )
    else:
        if not os.path.isfile(args.input):
            print(f"Error: PDF file not found: {args.input}")
            sys.exit(1)
        extract_single_pdf(
            args.input,
            args.output,
            dpi=args.dpi,
            fmt=args.format,
            extract_text=not args.no_text,
            extract_images=not args.no_images,
        )

    print(f"\n{'='*50}")
    print("All done!")
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Test with a single PDF**

Run: `python extract.py --input ../../nhi-portfolio/docs/bt1.pdf --output ./output/bt1 --dpi 150 --format webp`
Expected: Creates `output/bt1/` with page images and `content.json`

- [ ] **Step 3: Test batch mode with all nhi PDFs**

Run: `python extract.py --input ../../nhi-portfolio/docs --output ./output --batch --dpi 150`
Expected: Creates `output/bt1/` through `output/bt6/`, each with images and content.json

- [ ] **Step 4: Verify output structure**

Run: `dir output\bt1`
Expected: Shows `page-1.webp`, `page-2.webp`, ..., `content.json`

Run: `python -c "import json; data=json.load(open('output/bt1/content.json','r',encoding='utf-8')); print(f'Pages: {data[\"totalPages\"]}, First page text length: {len(data[\"pages\"][0][\"text\"])} chars')"`
Expected: Prints page count and text length confirming extraction worked

---

### Task 6: Run Extraction for nhi-portfolio

**Files:**
- No new code files — this is an execution task

- [ ] **Step 1: Run full extraction for all 6 PDFs of nhi-portfolio**

Run: `python extract.py --input ../../nhi-portfolio/docs --output ./output/nhi --batch --dpi 200 --format webp`

Expected: Creates folders `output/nhi/bt1` through `output/nhi/bt6`, each containing:
- `page-N.webp` files (one per page)
- `content.json` with text and metadata

- [ ] **Step 2: Review output quality**

Open a few `.webp` images to verify they are readable and clear at DPI 200.
Check `content.json` files to verify Vietnamese text was extracted correctly.

If text is empty/garbled → the PDF is likely scanned (image-only). In that case, the page images are still usable but text won't be available for HTML rendering.

- [ ] **Step 3: Copy output to nhi-portfolio project**

Run:
```bash
xcopy /E /I /Y output\nhi ..\..\nhi-portfolio\src\assets\pdf-content
```

Expected: Creates `nhi-portfolio/src/assets/pdf-content/bt1/`, `bt1/`, etc. with all extracted content.

---

### Task 7: Update Phase 2 Plan for React Integration

**Files:**
- Modify: `d:\portfolio\nhi-portfolio\docs\specs\2025-05-19-pdf-content-display-plan.md`

After extraction is complete, the Phase 2 plan for nhi-portfolio should be updated to use the extracted images and text instead of iframe PDF embeds. The new approach:

- [ ] **Step 1: Verify extracted content is usable**

Check each `content.json`:
- If `text` fields have content → can render as HTML paragraphs
- If `text` fields are empty → PDF is scanned, use images only
- If both are available → render images with text overlay/below for accessibility

- [ ] **Step 2: Decide rendering strategy per PDF**

For each bt1–bt6, determine:
- Text-based PDF → render as styled HTML text with page images as visual reference
- Scanned PDF → render as image gallery (page-by-page)
- Mixed → render images with extracted text below each page

This decision informs how `ProjectDetailPage` will render the content.

---

## Summary

Tool này hoạt động độc lập tại `d:\portfolio\tools\pdf-extractor\`:

1. **Input:** Các file PDF từ bất kỳ portfolio project nào
2. **Processing:** PyMuPDF render từng trang thành ảnh WebP + extract text
3. **Output:** Folder có cấu trúc với ảnh + content.json
4. **Integration:** Copy output vào project React, import ảnh và JSON data

**Ưu điểm:**
- Không cần thêm dependency vào React project
- Ảnh WebP nhẹ, load nhanh trên web
- Text extract sẵn → có thể render HTML, SEO-friendly, accessible
- Tool tái sử dụng được cho tất cả portfolio projects khác trong workspace

**Lệnh chạy nhanh cho nhi:**
```bash
cd d:\portfolio\tools\pdf-extractor
pip install -r requirements.txt
python extract.py -i ../../nhi-portfolio/docs -o ./output/nhi --batch --dpi 200
```
