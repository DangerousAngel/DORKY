# DORKY 🔍

> A powerful, zero-friction Google Dork query builder — no syntax knowledge required.

**Built by [DangerousAngel](https://github.com/DangerousAngel/)**

---

## What is DORKY?

DORKY is a browser-based OSINT tool that lets you craft advanced search engine queries (Google Dorks) step by step through a clean wizard interface — no need to memorize operator syntax.

---

## Features

- **Multi-Engine Support** — Google, DuckDuckGo, Bing, GitHub Code, Shodan IoT
- **Smart Workflow** — GitHub search automatically adapts its step flow (no site/scope step)
- **Full Operator Coverage** — `intitle:`, `inurl:`, `intext:`, `allintext:`, `allintitle:`, `allinurl:`, `filetype:`, `site:`, `ext:`, `cache:`, `link:`, and more
- **300+ Preloaded Dork Presets** — Bug Bounty disclosures, SQLi vectors, responsible disclosure policies, and cloud exposure patterns
- **AND Logic Compiler** — Multi-word inputs auto-compile as grouped AND queries
- **Real-time Query Preview** — See the final query string update live as you type
- **Copy & Launch** — One-click copy or direct browser launch
- **Bilingual UI** — Full Arabic (RTL) / English support
- **Zero Dependencies** — Pure HTML, CSS, Vanilla JS

---

## Wizard Steps

| Engine | Steps |
|--------|-------|
| Google / DDG / Bing / Shodan | Engine → Operators & Parameters → Scope & Filetypes → Review |
| GitHub Code | Engine → Operators & Parameters → Review |

---

## Supported Operators by Engine

| Engine | Key Operators |
|--------|--------------|
| Google | `intitle:` `inurl:` `intext:` `allintext:` `allintitle:` `allinurl:` `filetype:` `site:` `cache:` `related:` `AROUND(N):` |
| DuckDuckGo | `intitle:` `inurl:` `allintext:` `filetype:` |
| Bing | `intitle:` `inurl:` `allintext:` `filetype:` |
| GitHub | `filename:` `path:` `extension:` `language:` `stars:` |
| Shodan | `http.title:` `port:` `product:` `country:` `org:` `os:` `device:` `server:` |

---

## Getting Started

```bash
# Just open in any browser — no build step needed
open index.html
```

Or serve locally:

```bash
npx live-server --port=8080
```

Then visit → **http://localhost:8080**

---

## Files

```
├── index.html   # App layout & wizard structure
├── styles.css   # Black & white theme, RGB title animation, blur backgrounds
├── app.js       # Wizard logic, operator maps, dork compiler, bilingual support
└── README.md    # This file
```

---

## License

MIT — free to use, modify, and distribute.
