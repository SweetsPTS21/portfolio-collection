"""
Extract the real portfolio content from the cloned Google Sites page.
The actual portfolio HTML is embedded in a data-code attribute.
"""

import os
import html
from bs4 import BeautifulSoup

output_dir = "lanchi_portfolio"
final_dir = "lanchi_final"

# Read the cloned HTML
html_path = os.path.join(output_dir, "index.html")
with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

soup = BeautifulSoup(content, "html.parser")

# Find the data-code attribute containing the real portfolio
data_code_elem = soup.find(attrs={"data-code": True})

if not data_code_elem:
    print("ERROR: No data-code element found!")
    exit(1)

# Get the embedded HTML content
embedded_html = data_code_elem.get("data-code", "")
print(f"Found embedded HTML: {len(embedded_html)} chars")

# The content is already unescaped by BeautifulSoup
# Save it as the final portfolio
os.makedirs(final_dir, exist_ok=True)

# Write the real portfolio HTML
final_html_path = os.path.join(final_dir, "index.html")
with open(final_html_path, "w", encoding="utf-8") as f:
    f.write(embedded_html)

print(f"\nExtracted real portfolio to: {final_dir}/index.html")
print(f"File size: {len(embedded_html)} bytes ({len(embedded_html)//1024} KB)")

# Quick validation of the extracted content
inner_soup = BeautifulSoup(embedded_html, "html.parser")
print(f"\n--- Extracted Content Validation ---")
print(f"  <html> tag: {'YES' if inner_soup.find('html') else 'NO'}")
print(f"  <head> tag: {'YES' if inner_soup.find('head') else 'NO'}")
print(f"  <body> tag: {'YES' if inner_soup.find('body') else 'NO'}")
title = inner_soup.find("title")
print(f"  <title>: {title.get_text().strip() if title else 'N/A'}")
print(f"  <style> tags: {len(inner_soup.find_all('style'))}")
print(f"  <script> tags: {len(inner_soup.find_all('script'))}")
print(f"  <img> tags: {len(inner_soup.find_all('img'))}")
print(f"  <a> tags: {len(inner_soup.find_all('a'))}")
print(f"  <section> tags: {len(inner_soup.find_all('section'))}")

# Show text preview
text = inner_soup.get_text(separator=" ", strip=True)
print(f"\n  Text content length: {len(text)} chars")
print(f"  Preview (first 500 chars):")
print(f"  {text[:500]}")

print(f"\n✅ Done! Open {final_dir}/index.html in your browser.")
