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
