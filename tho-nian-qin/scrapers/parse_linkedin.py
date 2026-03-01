"""
parse_linkedin.py
Parses the LinkedIn CSV export and prints structured JSON.
Source: /tmp/linkedin_export/
"""

import csv
import json
import sys
from pathlib import Path

EXPORT_DIR = Path("/tmp/linkedin_export")


def read_csv(filename: str) -> list[dict]:
    path = EXPORT_DIR / filename
    if not path.exists():
        print(f"WARNING: {path} not found", file=sys.stderr)
        return []
    with open(path, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        return [dict(row) for row in reader]


def main():
    profile_rows = read_csv("Profile.csv")
    positions = read_csv("Positions.csv")
    education = read_csv("Education.csv")
    skills = read_csv("Skills.csv")
    certifications = read_csv("Certifications.csv")
    languages = read_csv("Languages.csv")

    result = {
        "profile": profile_rows[0] if profile_rows else {},
        "positions": positions,
        "education": education,
        "skills": [s.get("Name", "") for s in skills],
        "certifications": certifications,
        "languages": languages,
    }

    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
