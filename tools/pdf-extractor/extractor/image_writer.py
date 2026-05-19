"""Write rendered page images to disk as PNG (no Pillow needed)."""
import os


def save_page_image(
    png_bytes: bytes,
    output_dir: str,
    page_number: int,
) -> str:
    """Save a rendered page image to disk as PNG.

    Args:
        png_bytes: Raw PNG image bytes from render_page().
        output_dir: Directory to save the image in.
        page_number: 1-based page number (used in filename).

    Returns:
        Filename of the saved image (e.g., "page-1.png").
    """
    os.makedirs(output_dir, exist_ok=True)

    filename = f"page-{page_number}.png"
    filepath = os.path.join(output_dir, filename)

    with open(filepath, "wb") as f:
        f.write(png_bytes)

    return filename
