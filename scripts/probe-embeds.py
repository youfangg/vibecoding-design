#!/usr/bin/env python3
"""Probe official demo URLs and write docs/assets/embed-allowlist.js.

A URL is listed only when the final document can be framed from another
origin: https, HTTP 2xx, no blocking X-Frame-Options, no blocking
frame-ancestors (response header or meta), and no Cross-Origin-Resource-Policy
of same-origin or same-site.

Unknown, timed out, or non-document responses stay off the list so the site
does not show an empty broken frame.
"""

from __future__ import annotations

import json
import re
import ssl
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CASES = ROOT / "data" / "cases.json"
OUT_JS = ROOT / "docs" / "assets" / "embed-allowlist.js"
OUT_JSON = ROOT / "data" / "embed-probe.json"

UA = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
)
TIMEOUT = 12
WORKERS = 12


def strip_comments(css_value: str) -> str:
    return re.sub(r"/\*.*?\*/", " ", css_value, flags=re.S)


def frame_ancestors_blocks(csp: str) -> str | None:
    """Return a reason if this CSP would stop us framing the page."""
    if not csp:
        return None
    for chunk in strip_comments(csp).split(";"):
        parts = chunk.strip().split()
        if not parts or parts[0].lower() != "frame-ancestors":
            continue
        sources = [p.lower() for p in parts[1:]]
        if not sources or sources == ["'none'"] or "none" in sources:
            return "frame-ancestors none"
        if "*" in sources:
            return None
        return "frame-ancestors " + " ".join(sources)
    return None


def xfo_blocks(value: str) -> str | None:
    if not value:
        return None
    token = value.strip().split(",")[0].strip().lower()
    if not token:
        return None
    if token in {"deny", "sameorigin"} or token.startswith("allow-from"):
        return "x-frame-options " + token
    return "x-frame-options " + token


def corp_blocks(value: str) -> str | None:
    token = (value or "").strip().lower()
    if token in {"same-origin", "same-site"}:
        return "corp " + token
    return None


def meta_policies(html: str) -> list[tuple[str, str]]:
    found = []
    for match in re.finditer(
        r"<meta\b[^>]*>",
        html[:120_000],
        flags=re.I,
    ):
        tag = match.group(0)
        equiv = re.search(r"http-equiv\s*=\s*['\"]?([^'\"\s>]+)", tag, flags=re.I)
        content = re.search(r"content\s*=\s*['\"]([^'\"]*)['\"]", tag, flags=re.I)
        if not equiv or not content:
            continue
        key = equiv.group(1).lower()
        if key in {"content-security-policy", "x-frame-options"}:
            found.append((key, content.group(1)))
    return found


def header_map(headers) -> dict[str, str]:
    folded: dict[str, list[str]] = {}
    for key, value in headers.items():
        folded.setdefault(key.lower(), []).append(value)
    return {key: ", ".join(values) for key, values in folded.items()}


def classify(status: int, final_url: str, headers: dict[str, str], html: str) -> tuple[bool, str]:
    if not final_url.lower().startswith("https://"):
        return False, "not https"
    if status < 200 or status >= 300:
        return False, f"http {status}"
    ctype = headers.get("content-type", "")
    if ctype and "html" not in ctype.lower() and "text/plain" not in ctype.lower():
        # PDFs and images are not useful demo documents.
        if not ctype.lower().startswith("text/"):
            return False, "content-type " + ctype.split(";")[0]
    reason = xfo_blocks(headers.get("x-frame-options", ""))
    if reason:
        return False, reason
    reason = corp_blocks(headers.get("cross-origin-resource-policy", ""))
    if reason:
        return False, reason
    # Report-only CSP does not block framing. Multiple enforcing headers are joined above.
    reason = frame_ancestors_blocks(headers.get("content-security-policy", ""))
    if reason:
        return False, reason
    for key, content in meta_policies(html):
        if key == "x-frame-options":
            reason = xfo_blocks(content)
            if reason:
                return False, "meta " + reason
        elif key == "content-security-policy":
            reason = frame_ancestors_blocks(content)
            if reason:
                return False, "meta " + reason
    return True, "allowed"


def probe(url: str) -> dict:
    record = {"url": url, "allowed": False, "reason": "error", "status": 0, "finalUrl": url}
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        },
        method="GET",
    )
    ctx = ssl.create_default_context()
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=ctx) as resp:
            status = getattr(resp, "status", 200) or 200
            final_url = resp.geturl()
            headers = header_map(resp.headers)
            raw = resp.read(80_000)
            charset = "utf-8"
            ctype = headers.get("content-type", "")
            match = re.search(r"charset=([\w.-]+)", ctype, flags=re.I)
            if match:
                charset = match.group(1)
            try:
                html = raw.decode(charset, errors="replace")
            except LookupError:
                html = raw.decode("utf-8", errors="replace")
            allowed, reason = classify(status, final_url, headers, html)
            record.update(
                {
                    "allowed": allowed,
                    "reason": reason,
                    "status": status,
                    "finalUrl": final_url,
                }
            )
    except urllib.error.HTTPError as exc:
        headers = header_map(exc.headers or {})
        body = exc.read(40_000) if exc.fp else b""
        try:
            html = body.decode("utf-8", errors="replace")
        except Exception:
            html = ""
        allowed, reason = classify(exc.code, exc.geturl() or url, headers, html)
        record.update(
            {
                "allowed": allowed,
                "reason": reason,
                "status": exc.code,
                "finalUrl": exc.geturl() or url,
            }
        )
    except Exception as exc:  # noqa: BLE001 - probe must record every failure
        record["reason"] = type(exc).__name__ + ": " + str(exc)[:180]
    return record


def main() -> int:
    cases = json.loads(CASES.read_text(encoding="utf-8"))
    urls = []
    seen = set()
    for case in cases:
        url = case.get("officialDemoUrl")
        if not url or url in seen:
            continue
        seen.add(url)
        urls.append(url)

    results = []
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures = {pool.submit(probe, url): url for url in urls}
        done = 0
        for future in as_completed(futures):
            done += 1
            record = future.result()
            results.append(record)
            mark = "OK" if record["allowed"] else "NO"
            print(f"[{done}/{len(urls)}] {mark} {record['reason']} {record['url']}", flush=True)

    results.sort(key=lambda item: item["url"])
    allowed = [item["url"] for item in results if item["allowed"]]
    OUT_JSON.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    payload = {
        "generatedFrom": "scripts/probe-embeds.py",
        "checked": len(results),
        "allowed": len(allowed),
        "urls": {url: True for url in allowed},
    }
    js = (
        "/* Generated by scripts/probe-embeds.py. Do not edit by hand.\n"
        "   A URL is included only when its final document allowed framing\n"
        "   (https, 2xx, no blocking X-Frame-Options / frame-ancestors / CORP).\n"
        "   Regenerate with: python3 scripts/probe-embeds.py\n"
        f"   Checked {len(results)}; allowed {len(allowed)}.\n"
        "*/\n"
        "window.EMBED_ALLOW = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUT_JS.write_text(js, encoding="utf-8")
    print(f"allowed {len(allowed)} / {len(results)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
