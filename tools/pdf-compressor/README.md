# PDF Compressor

Python CLI wrapper for compressing PDF files with Ghostscript.

## Requirements

- Python 3.10+
- Ghostscript installed and available on `PATH` as `gswin64c`, `gswin32c`, or `gs`

No Python package dependencies are required.

## Usage

```bash
python tools/pdf-compressor/compress_pdf.py input.pdf output.pdf --quality ebook --dpi 144
```

Smaller output:

```bash
python tools/pdf-compressor/compress_pdf.py input.pdf output.pdf --quality screen --dpi 96 --force
```

Higher quality:

```bash
python tools/pdf-compressor/compress_pdf.py input.pdf output.pdf --quality printer --dpi 200
```

## Notes

- `screen` gives the smallest files and lowest image quality.
- `ebook` is the recommended balanced preset.
- `printer` keeps more detail.
- The tool refuses to overwrite output unless `--force` is passed.
