"""
scrape_achievements.py
Downloads and parses the Singapore Canoeing Marathon 2010 PDF results,
then searches the web for other sports achievements for Kelvin Heng.
Outputs a JSON file: achievements.json
"""

import json
import re
import sys
import tempfile
from pathlib import Path

import requests

PDF_URL = "https://republicanoe.wordpress.com/wp-content/uploads/2010/03/scm2010-am-race-results.pdf"
SEARCH_TERMS = [
    '"Kelvin Heng" canoeing Singapore',
    '"Kelvin Heng" "track and field" OR "road relay" Singapore',
    '"Heng Chang Rong" sports',
]

achievements = []


# ── 1. Download & parse canoeing PDF ────────────────────────────────────────
def parse_canoeing_pdf():
    try:
        import pdfplumber
    except ImportError:
        print("pdfplumber not installed. Run: pip install pdfplumber")
        return

    print(f"Downloading PDF: {PDF_URL}")
    try:
        resp = requests.get(PDF_URL, timeout=30)
        resp.raise_for_status()
    except Exception as e:
        print(f"Failed to download PDF: {e}")
        return

    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp:
        tmp.write(resp.content)
        tmp_path = tmp.name

    keywords = ["kelvin", "heng", "chang rong", "changrong"]
    found_rows = []

    print("Parsing PDF...")
    with pdfplumber.open(tmp_path) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            # Check raw text
            text = page.extract_text() or ""
            for line in text.split("\n"):
                if any(kw in line.lower() for kw in keywords):
                    found_rows.append({"source": f"page {page_num} text", "line": line.strip()})

            # Check tables
            for table in page.extract_tables() or []:
                for row in table or []:
                    row_str = " ".join(str(cell) for cell in row if cell)
                    if any(kw in row_str.lower() for kw in keywords):
                        found_rows.append({"source": f"page {page_num} table", "row": row})

    if found_rows:
        print(f"Found {len(found_rows)} matching row(s) in PDF:")
        for r in found_rows:
            print(" ", r)
        achievements.append({
            "year": "2010",
            "category": "Sports",
            "title": "Singapore Canoeing Marathon 2010",
            "detail": f"Result found in official race PDF: {found_rows[0].get('line', found_rows[0].get('row', ''))}",
            "source": "SCM 2010 PDF",
        })
    else:
        print("No matching rows found in PDF (Kelvin may have competed under a different spelling).")
        achievements.append({
            "year": "2010",
            "category": "Sports",
            "title": "Singapore Canoeing Marathon 2010",
            "detail": "Competed in Singapore Canoeing Marathon 2010. Name not found in parsed PDF — may require manual verification.",
            "source": "SCM 2010 PDF",
        })

    Path(tmp_path).unlink(missing_ok=True)


# ── 2. DuckDuckGo HTML search ────────────────────────────────────────────────
def duckduckgo_search(query: str) -> list[dict]:
    """Scrape DuckDuckGo HTML results for a query."""
    try:
        from bs4 import BeautifulSoup
    except ImportError:
        print("beautifulsoup4 not installed. Run: pip install beautifulsoup4")
        return []

    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        )
    }
    url = "https://html.duckduckgo.com/html/"
    try:
        resp = requests.post(url, data={"q": query}, headers=headers, timeout=15)
        resp.raise_for_status()
    except Exception as e:
        print(f"Search failed for '{query}': {e}")
        return []

    soup = BeautifulSoup(resp.text, "html.parser")
    results = []
    for result in soup.select(".result__body")[:5]:
        title_el = result.select_one(".result__title")
        snippet_el = result.select_one(".result__snippet")
        url_el = result.select_one(".result__url")
        results.append({
            "title": title_el.get_text(strip=True) if title_el else "",
            "snippet": snippet_el.get_text(strip=True) if snippet_el else "",
            "url": url_el.get_text(strip=True) if url_el else "",
        })
    return results


def run_web_searches():
    all_results = {}
    for query in SEARCH_TERMS:
        print(f"\nSearching: {query}")
        results = duckduckgo_search(query)
        all_results[query] = results
        for r in results:
            print(f"  [{r['title']}] {r['snippet'][:120]}")
    return all_results


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    parse_canoeing_pdf()
    search_results = run_web_searches()

    output = {
        "achievements": achievements,
        "web_search_results": search_results,
    }

    out_path = Path(__file__).parent / "achievements.json"
    out_path.write_text(json.dumps(output, indent=2, ensure_ascii=False))
    print(f"\nOutput written to: {out_path}")
    print("\nReview achievements.json and add relevant entries to src/data/profile.ts")
