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
