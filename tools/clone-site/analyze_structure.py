"""Analyze the body structure of the cloned lanchi site."""
from bs4 import BeautifulSoup

with open('lanchi_final/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

body = soup.find('body')
print("=== TOP-LEVEL BODY STRUCTURE ===")
for child in body.children:
    if hasattr(child, 'name') and child.name:
        cls = child.get('class', [])
        id_ = child.get('id', '')
        print(f"  <{child.name}> class={cls} id={id_}")

# Find the container/main layout
container = soup.find(class_='container')
if container:
    print("\n=== .container children ===")
    for child in container.children:
        if hasattr(child, 'name') and child.name:
            cls = child.get('class', [])
            id_ = child.get('id', '')
            print(f"  <{child.name}> class={cls} id={id_}")

# Find sidebar
sidebar = soup.find(class_='sidebar-wrapper')
if sidebar:
    print("\n=== .sidebar-wrapper children ===")
    for child in sidebar.children:
        if hasattr(child, 'name') and child.name:
            cls = child.get('class', [])
            print(f"  <{child.name}> class={cls}")

# Find main content area
main = soup.find('main')
if main:
    print("\n=== <main> children ===")
    for child in main.children:
        if hasattr(child, 'name') and child.name:
            cls = child.get('class', [])
            id_ = child.get('id', '')
            text = child.get_text(strip=True)[:60]
            print(f"  <{child.name}> class={cls} id={id_} text='{text}'")

# Find sections
sections = soup.find_all('section')
print(f"\n=== All <section> tags ({len(sections)}) ===")
for sec in sections:
    cls = sec.get('class', [])
    id_ = sec.get('id', '')
    text = sec.get_text(strip=True)[:80]
    print(f"  class={cls} id={id_} text='{text}'")
