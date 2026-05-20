"""
Google Sites Cloner
Clone a Google Sites page to local HTML/CSS/JS files using Selenium.

Requirements:
    pip install selenium beautifulsoup4 requests
    Chrome browser installed (script uses Chrome in headless mode)
"""

import os
import re
import sys
import time
import requests
from urllib.parse import urljoin, urlparse
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup


def setup_driver():
    """Setup Chrome in headless mode."""
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")
    options.add_argument(
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
    driver = webdriver.Chrome(options=options)
    return driver


def wait_for_page_load(driver, timeout=15):
    """Wait for Google Sites content to fully render."""
    time.sleep(3)  # Initial wait for JS to start rendering
    try:
        WebDriverWait(driver, timeout).until(
            lambda d: d.execute_script("return document.readyState") == "complete"
        )
        # Wait a bit more for dynamic content
        time.sleep(2)
    except Exception:
        pass


def download_asset(url, output_dir, subfolder="assets"):
    """Download an asset (image, font, etc.) and return local path."""
    if not url or url.startswith("data:"):
        return url

    try:
        assets_dir = os.path.join(output_dir, subfolder)
        os.makedirs(assets_dir, exist_ok=True)

        # Create filename from URL
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path) or "file"
        # Clean filename
        filename = re.sub(r'[^\w.\-]', '_', filename)
        if not os.path.splitext(filename)[1]:
            filename += ".png"  # Default extension for images

        filepath = os.path.join(assets_dir, filename)

        # Skip if already downloaded
        if os.path.exists(filepath):
            return f"{subfolder}/{filename}"

        response = requests.get(url, timeout=10, stream=True)
        response.raise_for_status()

        with open(filepath, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

        print(f"  Downloaded: {filename}")
        return f"{subfolder}/{filename}"

    except Exception as e:
        print(f"  Failed to download {url[:80]}: {e}")
        return url


def extract_styles(driver):
    """Extract all computed styles and stylesheets."""
    # Get all stylesheets content
    styles = driver.execute_script("""
        let styles = [];
        for (let sheet of document.styleSheets) {
            try {
                let rules = [];
                for (let rule of sheet.cssRules) {
                    rules.push(rule.cssText);
                }
                styles.push(rules.join('\\n'));
            } catch(e) {
                // Cross-origin stylesheet, try to get href
                if (sheet.href) {
                    styles.push('@import url("' + sheet.href + '");');
                }
            }
        }
        return styles;
    """)
    return "\n\n".join(styles)


def extract_inline_styles(soup):
    """Extract inline styles from elements."""
    styles = []
    for elem in soup.find_all(style=True):
        styles.append(elem.get("style", ""))
    return styles


def clean_html(html_content, output_dir):
    """Clean and process the HTML content."""
    soup = BeautifulSoup(html_content, "html.parser")

    # Remove Google Sites scripts and unnecessary elements
    for script in soup.find_all("script"):
        script.decompose()
    for noscript in soup.find_all("noscript"):
        noscript.decompose()

    # Remove Google-specific meta tags but keep useful ones
    for meta in soup.find_all("meta"):
        name = meta.get("name", "").lower()
        if "google" in name or "robots" in name:
            meta.decompose()

    # Download and replace image sources
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if src and not src.startswith("data:"):
            local_path = download_asset(src, output_dir, "assets/images")
            img["src"] = local_path

    # Handle background images in style attributes
    for elem in soup.find_all(style=True):
        style = elem["style"]
        urls = re.findall(r'url\(["\']?(.*?)["\']?\)', style)
        for url in urls:
            if url and not url.startswith("data:"):
                local_path = download_asset(url, output_dir, "assets/images")
                style = style.replace(url, local_path)
        elem["style"] = style

    return soup


def clone_google_site(url, output_dir="cloned_site"):
    """Main function to clone a Google Sites page."""
    print(f"\n{'='*60}")
    print(f"  Google Sites Cloner")
    print(f"  URL: {url}")
    print(f"  Output: {output_dir}/")
    print(f"{'='*60}\n")

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Setup browser
    print("[1/5] Starting browser...")
    driver = setup_driver()

    try:
        # Load page
        print("[2/5] Loading page (waiting for JS render)...")
        driver.get(url)
        wait_for_page_load(driver)

        # Scroll to load lazy content
        print("[3/5] Scrolling to load all content...")
        last_height = driver.execute_script("return document.body.scrollHeight")
        for _ in range(10):
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(1)
            new_height = driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height
        # Scroll back to top
        driver.execute_script("window.scrollTo(0, 0);")
        time.sleep(1)

        # Get page title
        page_title = driver.title or "Cloned Site"
        print(f"    Page title: {page_title}")

        # Extract CSS
        print("[4/5] Extracting styles and assets...")
        css_content = extract_styles(driver)

        # Get rendered HTML
        html_content = driver.page_source

        # Process HTML
        print("[5/5] Processing HTML and downloading assets...")
        soup = clean_html(html_content, output_dir)

        # Build final HTML file
        head = soup.find("head")
        if not head:
            head = soup.new_tag("head")
            soup.insert(0, head)

        # Add meta charset
        meta_charset = soup.new_tag("meta", charset="utf-8")
        head.insert(0, meta_charset)

        # Add viewport meta
        meta_viewport = soup.new_tag("meta")
        meta_viewport["name"] = "viewport"
        meta_viewport["content"] = "width=device-width, initial-scale=1.0"
        head.append(meta_viewport)

        # Add title
        title_tag = head.find("title")
        if not title_tag:
            title_tag = soup.new_tag("title")
            head.append(title_tag)
        title_tag.string = page_title

        # Link to external CSS file
        link_tag = soup.new_tag("link", rel="stylesheet", href="styles.css")
        head.append(link_tag)

        # Remove existing style tags (we extracted them)
        for style_tag in soup.find_all("style"):
            style_tag.decompose()

        # Save CSS
        css_path = os.path.join(output_dir, "styles.css")
        with open(css_path, "w", encoding="utf-8") as f:
            f.write(f"/* Cloned from: {url} */\n")
            f.write(f"/* Date: {time.strftime('%Y-%m-%d %H:%M:%S')} */\n\n")
            f.write(css_content)
        print(f"  Saved: styles.css")

        # Save HTML
        html_path = os.path.join(output_dir, "index.html")
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(soup.prettify())
        print(f"  Saved: index.html")

        # Create a simple JS file for any interactions
        js_content = """// Cloned site interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cloned site loaded successfully');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
"""
        js_path = os.path.join(output_dir, "script.js")
        with open(js_path, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"  Saved: script.js")

        print(f"\n{'='*60}")
        print(f"  Clone completed successfully!")
        print(f"  Open {output_dir}/index.html in your browser")
        print(f"{'='*60}\n")

    except Exception as e:
        print(f"\nError: {e}")
        raise
    finally:
        driver.quit()


if __name__ == "__main__":
    # Default URL - change this or pass as argument
    target_url = "https://sites.google.com/view/lanchi2310/lanchi-portfolio"

    if len(sys.argv) > 1:
        target_url = sys.argv[1]

    output = "lanchi_portfolio"
    if len(sys.argv) > 2:
        output = sys.argv[2]

    clone_google_site(target_url, output)
