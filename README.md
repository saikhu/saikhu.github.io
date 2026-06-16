# saikhu.github.io

Personal portfolio for **Usman Asim Saikhu** — a computer-vision & edge-AI engineer in Seoul.
A single static page: hero/about, focus areas, selected work, experience & education,
toolkit, publications, and contact. Light/dark mode with subtle scroll-reveal and hover
micro-interactions.

## Stack

Plain **HTML + CSS + vanilla JS** — no framework, no build step.

```text
index.html     # all markup, one page
styles.css     # design tokens (light/dark) + component styles
main.js        # theme toggle (persisted), scrollspy, scroll-reveal
assets/
  prof_square.jpg   # 600×600 headshot used in the hero
  prof_pic.jpg      # original full headshot (source for the crop)
.nojekyll      # tells GitHub Pages to serve the files as-is (no Jekyll build)
```

## Run locally

It's static — open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

The site is static and ships as-is thanks to `.nojekyll`. In the repo's
**Settings → Pages**, set the source to this branch's root (`/`). No build action needed.

## Customization

- **Accent color:** change `--accent` in `styles.css` (`:root`). Presets in the comment
  there: Slate (default), Cobalt, Forest, Clay.
- **Theme:** the toggle persists to `localStorage['uas-theme']` and is applied before
  first paint to avoid a flash.
- **Content:** everything lives in `index.html`.

Design reference and full token spec live in `design_handoff_personal_site/` (kept outside this repo).
