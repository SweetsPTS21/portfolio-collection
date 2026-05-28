#!/usr/bin/env python3
"""Compress PDF files with Ghostscript.

This is a small Python wrapper around Ghostscript because reliable PDF image
downsampling and object cleanup are better handled by a PDF engine than by ad
hoc byte rewriting.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path
from shutil import which
from subprocess import CalledProcessError, run
from typing import Sequence


QUALITY_PRESETS = ("screen", "ebook", "printer", "prepress", "default")


@dataclass(frozen=True)
class CompressionResult:
    source: Path
    target: Path
    input_bytes: int
    output_bytes: int

    @property
    def saved_bytes(self) -> int:
        return self.input_bytes - self.output_bytes

    @property
    def saved_percent(self) -> float:
        if self.input_bytes == 0:
            return 0.0
        return (self.saved_bytes / self.input_bytes) * 100


def find_ghostscript() -> str | None:
    for binary in ("gswin64c", "gswin32c", "gs"):
        found = which(binary)
        if found:
            return found
    return None


def build_ghostscript_command(
    gs: str,
    source: Path,
    target: Path,
    quality: str,
    dpi: int,
) -> list[str]:
    if quality not in QUALITY_PRESETS:
        raise ValueError(f"quality must be one of: {', '.join(QUALITY_PRESETS)}")
    if dpi < 72 or dpi > 600:
        raise ValueError("dpi must be between 72 and 600")

    return [
        gs,
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.4",
        f"-dPDFSETTINGS=/{quality}",
        "-dNOPAUSE",
        "-dQUIET",
        "-dBATCH",
        "-dDetectDuplicateImages=true",
        "-dCompressFonts=true",
        "-dSubsetFonts=true",
        "-dDownsampleColorImages=true",
        "-dDownsampleGrayImages=true",
        "-dDownsampleMonoImages=true",
        "-dColorImageDownsampleType=/Bicubic",
        "-dGrayImageDownsampleType=/Bicubic",
        "-dMonoImageDownsampleType=/Subsample",
        f"-dColorImageResolution={dpi}",
        f"-dGrayImageResolution={dpi}",
        f"-dMonoImageResolution={dpi}",
        f"-sOutputFile={target}",
        str(source),
    ]


def compress_pdf(
    source: Path,
    target: Path,
    quality: str = "ebook",
    dpi: int = 144,
    force: bool = False,
) -> CompressionResult:
    source = source.resolve()
    target = target.resolve()

    if not source.exists():
        raise FileNotFoundError(source)
    if source.suffix.lower() != ".pdf":
        raise ValueError("source must be a .pdf file")
    if target.exists() and not force:
        raise FileExistsError(f"target exists: {target}. Use --force to overwrite.")

    gs = find_ghostscript()
    if not gs:
        raise RuntimeError(
            "Ghostscript not found. Install Ghostscript and ensure gswin64c, "
            "gswin32c, or gs is available on PATH."
        )

    target.parent.mkdir(parents=True, exist_ok=True)
    command = build_ghostscript_command(gs, source, target, quality, dpi)

    try:
        run(command, check=True)
    except CalledProcessError as error:
        raise RuntimeError(f"Ghostscript failed with exit code {error.returncode}") from error

    if not target.exists():
        raise RuntimeError("Ghostscript finished but output file was not created")

    return CompressionResult(
        source=source,
        target=target,
        input_bytes=source.stat().st_size,
        output_bytes=target.stat().st_size,
    )


def format_bytes(size: int) -> str:
    value = float(size)
    for unit in ("B", "KB", "MB", "GB"):
        if value < 1024 or unit == "GB":
            return f"{value:.1f} {unit}" if unit != "B" else f"{int(value)} B"
        value /= 1024
    return f"{value:.1f} GB"


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Compress a PDF using Ghostscript.")
    parser.add_argument("source", type=Path, help="Input PDF path")
    parser.add_argument("target", type=Path, help="Output PDF path")
    parser.add_argument(
        "--quality",
        choices=QUALITY_PRESETS,
        default="ebook",
        help="Ghostscript preset. screen is smallest, ebook is balanced.",
    )
    parser.add_argument("--dpi", type=int, default=144, help="Image resolution after downsampling")
    parser.add_argument("--force", action="store_true", help="Overwrite target if it exists")
    return parser.parse_args(argv)


def main(argv: Sequence[str] | None = None) -> int:
    args = parse_args(argv)
    result = compress_pdf(args.source, args.target, args.quality, args.dpi, args.force)

    print(f"Input:  {format_bytes(result.input_bytes)}")
    print(f"Output: {format_bytes(result.output_bytes)}")
    print(f"Saved:  {format_bytes(result.saved_bytes)} ({result.saved_percent:.1f}%)")
    print(f"Wrote:  {result.target}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
