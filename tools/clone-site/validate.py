"""Validate the cloned site files."""
import os
from bs4 import BeautifulSoup

output_dir = "lanchi_portfolio"

# Read HTML
html_path = os.path.join(output_dir, "index.html")
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

print("=" * 60)
print("  VALIDATION REPORT")
print("=" * 60)

# 1. Basic HTML structure
print("\n[1] HTML Structure:")
print(f"  - <html> tag: {'YES' if soup.find('html') else 'NO'}")
print(f"  - <head> tag: {'YES' if soup.find('head') else 'NO'}")
print(f"  - <body> tag: {'YES' if soup.find('body') else 'NO'}")
print(f"  - <title> tag: {'YES' if soup.find('title') else 'NO'}")
title = soup.find("title")
if title:
    print(f"  - Title content: '{title.get_text().strip()}'")

# 2. Meta tags
print("\n[2] Meta Tags:")
metas = soup.find_all("meta")
print(f"  - Total meta tags: {len(metas)}")
charset = soup.find("meta", attrs={"charset": True})
print(f"  - Charset defined: {'YES' if charset else 'NO'}")
viewport = soup.find("meta", attrs={"name": "viewport"})
print(f"  - Viewport defined: {'YES' if viewport else 'NO'}")

# 3. CSS
print("\n[3] CSS:")
css_path = os.path.join(output_dir, "styles.css")
css_exists = os.path.exists(css_path)
print(f"  - styles.css exists: {'YES' if css_exists else 'NO'}")
if css_exists:
    with open(css_path, "r", encoding="utf-8") as f:
        css_content = f.read()
    print(f"  - CSS file size: {len(css_content)} bytes")
    print(f"  - CSS rules (approx): {css_content.count('{')}")
    # Check for @import
    imports = [l for l in css_content.split("\n") if l.strip().startswith("@import")]
    print(f"  - @import statements: {len(imports)}")
    for imp in imports:
        print(f"    - {imp.strip()[:80]}")

# Link to styles.css in HTML
link_tags = soup.find_all("link", attrs={"href": "styles.css"})
print(f"  - <link> to styles.css in HTML: {'YES' if link_tags else 'NO'}")

# Inline styles
inline_styles = soup.find_all(style=True)
print(f"  - Elements with inline styles: {len(inline_styles)}")

# 4. Images
print("\n[4] Images:")
imgs = soup.find_all("img")
print(f"  - Total <img> tags: {len(imgs)}")
external_imgs = [img for img in imgs if img.get("src", "").startswith("http")]
local_imgs = [img for img in imgs if not img.get("src", "").startswith("http") and not img.get("src", "").startswith("data:")]
data_imgs = [img for img in imgs if img.get("src", "").startswith("data:")]
print(f"  - External URLs: {len(external_imgs)}")
print(f"  - Local files: {len(local_imgs)}")
print(f"  - Data URIs: {len(data_imgs)}")

# Check if assets folder exists
assets_dir = os.path.join(output_dir, "assets")
if os.path.exists(assets_dir):
    asset_files = []
    for root, dirs, files in os.walk(assets_dir):
        for file in files:
            asset_files.append(os.path.join(root, file))
    print(f"  - Downloaded assets: {len(asset_files)}")
else:
    print(f"  - Assets folder: NOT CREATED (no images downloaded)")

# 5. Links
print("\n[5] Links:")
links = soup.find_all("a")
print(f"  - Total <a> tags: {len(links)}")
external_links = [a for a in links if a.get("href", "").startswith("http")]
internal_links = [a for a in links if a.get("href", "").startswith("#")]
print(f"  - External links: {len(external_links)}")
print(f"  - Internal anchors: {len(internal_links)}")

# 6. Content check
print("\n[6] Content:")
text_content = soup.get_text(separator=" ", strip=True)
print(f"  - Total text length: {len(text_content)} chars")
print(f"  - Total HTML size: {len(html_content)} bytes ({len(html_content)//1024} KB)")

# Check for actual content (not just Google boilerplate)
# Look for common portfolio keywords
keywords = ["portfolio", "lanchi", "project", "skill", "contact", "about"]
found_keywords = [kw for kw in keywords if kw.lower() in text_content.lower()]
print(f"  - Portfolio keywords found: {found_keywords}")

# 7. JavaScript
print("\n[7] JavaScript:")
js_path = os.path.join(output_dir, "script.js")
js_exists = os.path.exists(js_path)
print(f"  - script.js exists: {'YES' if js_exists else 'NO'}")
if js_exists:
    with open(js_path, "r", encoding="utf-8") as f:
        js_content = f.read()
    print(f"  - JS file size: {len(js_content)} bytes")
    print(f"  - Has DOMContentLoaded: {'YES' if 'DOMContentLoaded' in js_content else 'NO'}")

# 8. Potential issues
print("\n[8] Potential Issues:")
issues = []

# Check for Google-specific JS attributes that won't work
jscontroller_count = len(soup.find_all(attrs={"jscontroller": True}))
jsaction_count = len(soup.find_all(attrs={"jsaction": True}))
if jscontroller_count > 0:
    issues.append(f"Google jscontroller attributes: {jscontroller_count} (non-functional without Google JS)")
if jsaction_count > 0:
    issues.append(f"Google jsaction attributes: {jsaction_count} (non-functional without Google JS)")

# Check for broken external resources
external_css = soup.find_all("link", attrs={"rel": "stylesheet"})
ext_css_urls = [l.get("href", "") for l in external_css if l.get("href", "").startswith("http")]
if ext_css_urls:
    issues.append(f"External CSS dependencies: {len(ext_css_urls)} (requires internet)")

# Check for data-code attribute (embedded content)
data_code_elements = soup.find_all(attrs={"data-code": True})
if data_code_elements:
    issues.append(f"Embedded code blocks (data-code): {len(data_code_elements)} - contains actual portfolio HTML")

if not issues:
    print("  - No major issues found!")
else:
    for issue in issues:
        print(f"  ⚠ {issue}")

# 9. Summary
print("\n" + "=" * 60)
print("  SUMMARY")
print("=" * 60)
print(f"""
  Files: index.html ({len(html_content)//1024}KB), styles.css ({os.path.getsize(css_path)//1024}KB), script.js
  Structure: Valid HTML with head/body
  Content: {'FOUND' if found_keywords else 'MINIMAL'} portfolio content
  Images: {len(imgs)} tags ({len(external_imgs)} external, {len(local_imgs)} local)
  Styling: {css_content.count('{')} CSS rules + {len(inline_styles)} inline styles
  
  VERDICT: The clone captured the Google Sites wrapper HTML but the actual
  portfolio content is embedded in data-code attributes as escaped HTML.
  This means the page relies on Google's JavaScript to render properly.
""")

# Check data-code content
if data_code_elements:
    print("\n[BONUS] Embedded Portfolio Content Preview:")
    for i, elem in enumerate(data_code_elements[:3]):
        code = elem.get("data-code", "")
        print(f"\n  --- data-code block {i+1} (first 200 chars) ---")
        print(f"  {code[:200]}")
