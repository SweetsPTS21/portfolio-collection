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
    extract_text: bool = True,
    extract_images: bool = True,
) -> None:
    """Extract content from a single PDF file.

    Args:
        pdf_path: Path to the PDF file.
        output_dir: Directory to write output into.
        dpi: Image resolution (default 150).
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
            filename = save_page_image(png_bytes, output_dir, page_num)
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
            extract_text=not args.no_text,
            extract_images=not args.no_images,
        )

    print(f"\n{'='*50}")
    print("All done!")
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
