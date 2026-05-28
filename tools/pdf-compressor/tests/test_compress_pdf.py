import unittest
import sys
from pathlib import Path
from tempfile import TemporaryDirectory
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from compress_pdf import build_ghostscript_command, compress_pdf, find_ghostscript


class PdfCompressorTests(unittest.TestCase):
    def test_builds_ebook_command_with_downsampling(self):
        command = build_ghostscript_command(
            gs="gswin64c",
            source=Path("input.pdf"),
            target=Path("output.pdf"),
            quality="ebook",
            dpi=144,
        )

        self.assertEqual(command[0], "gswin64c")
        self.assertIn("-sDEVICE=pdfwrite", command)
        self.assertIn("-dPDFSETTINGS=/ebook", command)
        self.assertIn("-dColorImageResolution=144", command)
        self.assertIn("-sOutputFile=output.pdf", command)
        self.assertEqual(command[-1], "input.pdf")

    @patch("compress_pdf.which")
    def test_find_ghostscript_prefers_windows_binary(self, which):
        which.side_effect = lambda name: f"C:/bin/{name}.exe" if name == "gswin64c" else None

        self.assertEqual(find_ghostscript(), "C:/bin/gswin64c.exe")

    @patch("compress_pdf.run")
    @patch("compress_pdf.find_ghostscript", return_value="gs")
    def test_compress_pdf_reports_size_change(self, _find, run):
        with TemporaryDirectory() as temp_dir:
            source = Path(temp_dir) / "source.pdf"
            target = Path(temp_dir) / "target.pdf"
            source.write_bytes(b"x" * 100)

            def fake_run(*_args, **_kwargs):
                target.write_bytes(b"x" * 40)

            run.side_effect = fake_run

            result = compress_pdf(source, target, quality="ebook", dpi=144, force=False)

        self.assertEqual(result.input_bytes, 100)
        self.assertEqual(result.output_bytes, 40)
        self.assertAlmostEqual(result.saved_percent, 60.0)

    @patch("compress_pdf.find_ghostscript", return_value=None)
    def test_compress_pdf_requires_ghostscript(self, _find):
        with TemporaryDirectory() as temp_dir:
            source = Path(temp_dir) / "source.pdf"
            source.write_bytes(b"%PDF-1.4")

            with self.assertRaises(RuntimeError):
                compress_pdf(source, Path(temp_dir) / "out.pdf")


if __name__ == "__main__":
    unittest.main()
